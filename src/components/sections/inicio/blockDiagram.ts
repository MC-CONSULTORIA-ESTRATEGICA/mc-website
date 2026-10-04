// Bloque diagrama geológico en WebGL2, sin librerías.
// Un bloque de terreno cortado por una sección vertical (la cara de corte mira al visitante):
//   · arriba, el relieve con curvas de nivel y los collares de los sondajes;
//   · en las caras, la estratificación;
//   · en la cara de corte, el cuerpo mineralizado (envolvente y núcleo de ley), los sondajes con
//     sus intervalos muestreados y el modelo de bloques.
// Se dibuja una sola vez (estático) o con un giro lento. Nada de hologramas ni maquinaria.
//
// REVISAR: revisión técnica pendiente (Claudio, que la iba a hacer, ya no está en MC).
//   1. Cuerpo tabular que buza ~61° y corta la estratificación (que buza ~9° hacia el fondo-izquierda).
//   2. Sondajes paralelos a −60°, collares en la caja techo, perforando hacia el muro.
//   3. Intervalos muestreados solo dentro de la envolvente; modelo de bloques regular con dos clases.
//   4. El cuerpo tiene rumbo perpendicular al corte, por eso no aflora en la cara lateral derecha.

export type Vec2 = [number, number];
type Vec3 = [number, number, number];

const X0 = -1.1;
const X1 = 1.1;
const Z0 = -0.95;
const Z1 = 0; // cara de corte
const BOTTOM = -0.64;
const N = 110;

// ---------- Relieve ----------
function hash(x: number, y: number) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}
function noise(x: number, y: number) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi);
  const b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1);
  const d = hash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function fbm(x: number, y: number) {
  let s = 0;
  let amp = 0.5;
  let f = 1;
  for (let i = 0; i < 4; i++) {
    s += amp * noise(x * f, y * f);
    f *= 2.03;
    amp *= 0.5;
  }
  return s;
}
export function heightAt(x: number, z: number) {
  const hill = 0.19 * Math.exp(-((x - 0.28) ** 2 / 0.24 + (z + 0.35) ** 2 / 0.3));
  const ridge = 0.06 * Math.exp(-((x + z * 0.6 + 0.35) ** 2) / 0.08);
  const valley = -0.06 * Math.exp(-((x + 0.7) ** 2) / 0.03 - (z * 0.4) ** 2);
  return 0.13 + hill + ridge + valley + 0.07 * (fbm(x * 2.3 + 3.1, z * 2.3 + 7.7) - 0.5);
}

// ---------- Cuerpo mineralizado en la cara de corte ----------
// Eje del cuerpo (techo → fondo) y semiespesores a cada lado (caja techo / muro), en unidades de la cara
const AXIS_T: Vec2 = [0.3, -0.02];
const AXIS_B: Vec2 = [-0.02, -0.6];
const THICK = 1.35; // escala del espesor para que se lea a tamaño de portada
const ENV_HW = [0.004, 0.032, 0.052, 0.046, 0.032, 0.04, 0.062, 0.072, 0.056, 0.03, 0.004].map((v) => v * THICK);
const ENV_FW = [0.004, 0.028, 0.046, 0.054, 0.04, 0.034, 0.052, 0.066, 0.06, 0.032, 0.004].map((v) => v * THICK);
const CORE_HW = [0, 0.008, 0.022, 0.018, 0.006, 0.012, 0.026, 0.03, 0.016, 0.002, 0].map((v) => v * THICK);
const CORE_FW = [0, 0.006, 0.018, 0.024, 0.01, 0.008, 0.022, 0.028, 0.02, 0.002, 0].map((v) => v * THICK);
const CELL = 0.04;

function profile(p: number[], u: number) {
  const x = Math.min(Math.max(u, 0), 1) * (p.length - 1);
  const i = Math.min(Math.floor(x), p.length - 2);
  const f = x - i;
  return p[i] * (1 - f) + p[i + 1] * f;
}

/** Distancia firmada al borde del cuerpo (negativa dentro). Misma fórmula que el shader. */
export function bodySdf(p: Vec2, hw: number[], fw: number[]) {
  const dx = AXIS_B[0] - AXIS_T[0];
  const dy = AXIS_B[1] - AXIS_T[1];
  const l2 = dx * dx + dy * dy;
  const u = ((p[0] - AXIS_T[0]) * dx + (p[1] - AXIS_T[1]) * dy) / l2;
  const l = Math.sqrt(l2);
  const nx = -dy / l;
  const ny = dx / l;
  const s = (p[0] - AXIS_T[0] - dx * u) * nx + (p[1] - AXIS_T[1] - dy * u) * ny;
  const w = s >= 0 ? profile(fw, u) : profile(hw, u);
  const along = Math.max(-u, u - 1) * l;
  return Math.max(Math.abs(s) - w, along);
}

// Sondajes: collares en la superficie del corte, inclinados −60° hacia el muro
const COLLARS_X = [-0.05, -0.23, -0.41];
const HOLE_DIR: Vec2 = [Math.cos(Math.PI / 3), -Math.sin(Math.PI / 3)];

function buildHoles() {
  return COLLARS_X.map((x) => {
    const c: Vec2 = [x, heightAt(x, Z1)];
    let inside = false;
    let exit = -1;
    let len = 0;
    for (let t = 0; t < 1.6; t += 0.004) {
      const p: Vec2 = [c[0] + HOLE_DIR[0] * t, c[1] + HOLE_DIR[1] * t];
      const now = bodySdf(p, ENV_HW, ENV_FW) < 0;
      if (inside && !now && exit < 0) exit = t;
      inside = now;
      len = t;
      if (exit >= 0 && t > exit + 0.09) break;
      if (p[1] < BOTTOM + 0.02) break;
    }
    return { collar: c, len };
  });
}
export const HOLES = buildHoles();

// Puntos de anclaje para las letras (en la cara de corte, z = 0)
function findSample(): Vec3 {
  const h = HOLES[1];
  for (let t = 0; t < h.len; t += 0.01) {
    const p: Vec2 = [h.collar[0] + HOLE_DIR[0] * t, h.collar[1] + HOLE_DIR[1] * t];
    if (bodySdf(p, ENV_HW, ENV_FW) < -0.02) return [p[0], p[1], Z1];
  }
  return [0, -0.3, Z1];
}
function findBlock(): Vec3 {
  let best: Vec3 = [0, -0.45, Z1];
  let bestD = Infinity;
  for (let y = BOTTOM; y < 0.2; y += CELL) {
    for (let x = X0; x < X1; x += CELL) {
      const c: Vec2 = [Math.floor(x / CELL) * CELL + CELL / 2, Math.floor(y / CELL) * CELL + CELL / 2];
      if (bodySdf(c, CORE_HW, CORE_FW) < 0) {
        const d = Math.hypot(c[0] - 0.05, c[1] + 0.47);
        if (d < bestD) {
          bestD = d;
          best = [c[0], c[1], Z1];
        }
      }
    }
  }
  return best;
}
// Punto sobre el borde de la envolvente (lado muro), en el tercio superior del cuerpo
function envelopePoint(): Vec3 {
  const u = 0.28;
  const dx = AXIS_B[0] - AXIS_T[0];
  const dy = AXIS_B[1] - AXIS_T[1];
  const l = Math.hypot(dx, dy);
  const nx = -dy / l;
  const ny = dx / l;
  const w = profile(ENV_FW, u);
  return [AXIS_T[0] + dx * u + nx * w, AXIS_T[1] + dy * u + ny * w, Z1];
}

// Puntos donde van los rótulos del dibujo
export const ANCHORS = {
  qaqc: findSample(),
  recursos: findBlock(),
  envolvente: envelopePoint(),
  superficie: [0.62, heightAt(0.62, -0.88), -0.88] as Vec3,
  rocaCaja: [-0.78, -0.36, Z1] as Vec3,
  ddh1: [HOLES[0].collar[0], HOLES[0].collar[1], Z1] as Vec3,
  ddh2: [HOLES[1].collar[0], HOLES[1].collar[1], Z1] as Vec3,
  ddh3: [HOLES[2].collar[0], HOLES[2].collar[1], Z1] as Vec3,
};
export type AnchorKey = keyof typeof ANCHORS;

// ---------- Geometría ----------
function buildGeometry() {
  const pos: number[] = [];
  const kind: number[] = [];
  const idx: number[] = [];

  for (let j = 0; j <= N; j++) {
    for (let i = 0; i <= N; i++) {
      const x = X0 + ((X1 - X0) * i) / N;
      const z = Z0 + ((Z1 - Z0) * j) / N;
      pos.push(x, heightAt(x, z), z);
      kind.push(0);
    }
  }
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const a = j * (N + 1) + i;
      idx.push(a, a + 1, a + N + 1, a + 1, a + N + 2, a + N + 1);
    }
  }

  const side = (edge: (t: number) => [number, number], k: number) => {
    const start = pos.length / 3;
    for (let i = 0; i <= N; i++) {
      const [x, z] = edge(i / N);
      pos.push(x, heightAt(x, z), z);
      kind.push(k);
      pos.push(x, BOTTOM, z);
      kind.push(k);
    }
    for (let i = 0; i < N; i++) {
      const a = start + i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  };
  side((t) => [X0 + (X1 - X0) * t, Z1], 2); // cara de corte
  side((t) => [X0 + (X1 - X0) * t, Z0], 1);
  side((t) => [X0, Z0 + (Z1 - Z0) * t], 1);
  side((t) => [X1, Z0 + (Z1 - Z0) * t], 1);

  const outline: number[] = [];
  const edgeLine = (edge: (t: number) => [number, number]) => {
    for (let i = 0; i < N; i++) {
      const [xa, za] = edge(i / N);
      const [xb, zb] = edge((i + 1) / N);
      outline.push(xa, heightAt(xa, za), za, xb, heightAt(xb, zb), zb);
    }
  };
  edgeLine((t) => [X0 + (X1 - X0) * t, Z1]);
  edgeLine((t) => [X0 + (X1 - X0) * t, Z0]);
  edgeLine((t) => [X0, Z0 + (Z1 - Z0) * t]);
  edgeLine((t) => [X1, Z0 + (Z1 - Z0) * t]);
  for (const [x, z] of [
    [X0, Z0],
    [X1, Z0],
    [X0, Z1],
    [X1, Z1],
  ]) {
    outline.push(x, heightAt(x, z), z, x, BOTTOM, z);
  }
  outline.push(X0, BOTTOM, Z1, X1, BOTTOM, Z1, X1, BOTTOM, Z1, X1, BOTTOM, Z0);

  return { pos: new Float32Array(pos), kind: new Float32Array(kind), idx: new Uint32Array(idx), outline: new Float32Array(outline) };
}

// ---------- Matrices ----------
function perspective(fovy: number, aspect: number, near: number, far: number) {
  const f = 1 / Math.tan(fovy / 2);
  const nf = 1 / (near - far);
  return [f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0];
}
function lookAt(eye: Vec3, target: Vec3, up: Vec3) {
  const zx = eye[0] - target[0];
  const zy = eye[1] - target[1];
  const zz = eye[2] - target[2];
  let l = Math.hypot(zx, zy, zz);
  const z: Vec3 = [zx / l, zy / l, zz / l];
  const xx = up[1] * z[2] - up[2] * z[1];
  const xy = up[2] * z[0] - up[0] * z[2];
  const xz = up[0] * z[1] - up[1] * z[0];
  l = Math.hypot(xx, xy, xz);
  const x: Vec3 = [xx / l, xy / l, xz / l];
  const y: Vec3 = [z[1] * x[2] - z[2] * x[1], z[2] * x[0] - z[0] * x[2], z[0] * x[1] - z[1] * x[0]];
  const dot = (a: Vec3, b: Vec3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  return [x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0, -dot(x, eye), -dot(y, eye), -dot(z, eye), 1];
}
function multiply(a: number[], b: number[]) {
  const out = new Array<number>(16).fill(0);
  for (let c = 0; c < 4; c++)
    for (let r = 0; r < 4; r++)
      for (let k = 0; k < 4; k++) out[c * 4 + r] += a[k * 4 + r] * b[c * 4 + k];
  return out;
}
function project(m: number[], p: Vec3, w: number, h: number): Vec2 {
  const x = m[0] * p[0] + m[4] * p[1] + m[8] * p[2] + m[12];
  const y = m[1] * p[0] + m[5] * p[1] + m[9] * p[2] + m[13];
  const ww = m[3] * p[0] + m[7] * p[1] + m[11] * p[2] + m[15];
  return [((x / ww) * 0.5 + 0.5) * w, (1 - ((y / ww) * 0.5 + 0.5)) * h];
}

// ---------- Shaders ----------
const VS = `#version 300 es
in vec3 aPos;
in float aKind;
uniform mat4 uMvp;
out vec3 vPos;
out float vKind;
void main() {
  vPos = aPos;
  vKind = aKind;
  gl_Position = uMvp * vec4(aPos, 1.0);
}`;

const FS = `#version 300 es
precision highp float;
in vec3 vPos;
in float vKind;
out vec4 color;
uniform float uEnvHw[11];
uniform float uEnvFw[11];
uniform float uCoreHw[11];
uniform float uCoreFw[11];
uniform vec2 uAxisT;
uniform vec2 uAxisB;
uniform vec3 uHoles[3]; // collar x, collar y, largo
uniform float uFocus;   // 0 nada · 1 muestras · 2 bloques · 3 muestras y bloques · 4 todo el bloque
const vec3 TOP = vec3(0.043, 0.282, 0.435);
const vec3 SIDE_A = vec3(0.020, 0.200, 0.318);
const vec3 SIDE_B = vec3(0.027, 0.227, 0.357);
const vec3 BODY = vec3(0.075, 0.345, 0.502);
const vec3 LOW = vec3(0.220, 0.494, 0.639);
const vec3 HIGH = vec3(0.490, 0.722, 0.847);
const vec3 CYAN = vec3(0.247, 0.616, 0.784);
const vec3 CYAN_L = vec3(0.624, 0.788, 0.878);
const vec3 WHITE = vec3(0.93, 0.95, 0.96);
const float CELL = ${CELL.toFixed(3)};

float isoline(float v, float width) {
  float d = abs(fract(v - 0.5) - 0.5) / fwidth(v);
  return 1.0 - clamp(d / width, 0.0, 1.0);
}
float prof(float p[11], float u) {
  float x = clamp(u, 0.0, 1.0) * 10.0;
  int i = int(min(floor(x), 9.0));
  float f = x - float(i);
  return mix(p[i], p[i + 1], f);
}
float bodySdf(vec2 p, float hw[11], float fw[11]) {
  vec2 d = uAxisB - uAxisT;
  float l2 = dot(d, d);
  float u = dot(p - uAxisT, d) / l2;
  float l = sqrt(l2);
  vec2 n = vec2(-d.y, d.x) / l;
  float s = dot(p - uAxisT - d * u, n);
  float w = s >= 0.0 ? prof(fw, u) : prof(hw, u);
  float along = max(-u, u - 1.0) * l;
  return max(abs(s) - w, along);
}
float strataCoord(vec3 p) {
  return (p.y + 0.16 * p.x - 0.08 * p.z + 0.035 * sin(p.x * 3.2 + p.z * 2.1)) * 15.0;
}
void main() {
  float dimSamples = (uFocus == 2.0) ? 0.45 : 1.0;
  float dimBlocks = (uFocus == 1.0) ? 0.45 : 1.0;
  float boost = (uFocus == 4.0) ? 1.0 : 0.0;

  if (vKind < 0.5) {
    // Relieve: curvas de nivel y collares en el borde del corte
    float c = vPos.y * 42.0;
    vec3 col = mix(TOP, CYAN, isoline(c, 0.9) * 0.75);
    col = mix(col, CYAN_L, isoline(c / 5.0, 1.2));
    for (int k = 0; k < 3; k++) {
      float d = length(vec2(vPos.x - uHoles[k].x, vPos.z - 0.0));
      float px = fwidth(vPos.x) * 1.0;
      float ring = 1.0 - smoothstep(0.018, 0.018 + px * 1.5, d);
      col = mix(col, WHITE, ring * dimSamples);
    }
    color = vec4(mix(col, CYAN_L, boost * 0.12), 1.0);
    return;
  }

  float s = strataCoord(vPos);
  vec3 band = mix(SIDE_A, SIDE_B, step(0.5, fract(s * 0.5)));
  float strata = isoline(s, 0.9);

  if (vKind < 1.5) {
    color = vec4(mix(mix(band, CYAN, strata * 0.8), CYAN_L, boost * 0.12), 1.0);
    return;
  }

  // Cara de corte
  vec2 p = vPos.xy;
  float env = bodySdf(p, uEnvHw, uEnvFw);
  float px = fwidth(p.x);
  vec3 col;
  if (env < 0.0) {
    // Modelo de bloques: el centro de cada celda decide su clase
    vec2 cid = floor(p / CELL);
    vec2 cc = (cid + 0.5) * CELL;
    float inEnv = bodySdf(cc, uEnvHw, uEnvFw);
    float inCore = bodySdf(cc, uCoreHw, uCoreFw);
    vec3 cellCol = inCore < 0.0 ? HIGH : (inEnv < 0.0 ? LOW : BODY);
    vec2 g = abs(fract(p / CELL) - 0.5);
    float edge = step(0.5 - (px * 0.9) / CELL, max(g.x, g.y));
    col = mix(cellCol, BODY, edge * 0.85);
    col = mix(BODY, col, dimBlocks);
  } else {
    col = mix(band, CYAN, strata * 0.8);
  }
  // Contorno de la envolvente y del núcleo
  float envLine = 1.0 - smoothstep(px * 0.6, px * 1.8, abs(env));
  col = mix(col, CYAN_L, envLine);
  float core = bodySdf(p, uCoreHw, uCoreFw);
  float coreLine = (1.0 - smoothstep(px * 0.4, px * 1.4, abs(core))) * step(0.5, fract((p.x + p.y) * 60.0));
  col = mix(col, WHITE, coreLine * 0.7 * dimBlocks);

  // Sondajes e intervalos muestreados
  for (int k = 0; k < 3; k++) {
    vec2 c0 = uHoles[k].xy;
    vec2 dir = vec2(0.5, -0.8660254);
    float t = clamp(dot(p - c0, dir), 0.0, uHoles[k].z);
    float d = length(p - (c0 + dir * t));
    float hole = 1.0 - smoothstep(px * 0.7, px * 1.6, d);
    col = mix(col, WHITE, hole * 0.9 * dimSamples);
    float sampled = step(env, 0.0) * step(0.2, fract(t / 0.03));
    float thick = 1.0 - smoothstep(px * 2.2, px * 3.2, d);
    col = mix(col, WHITE, thick * sampled * dimSamples);
  }
  color = vec4(mix(col, CYAN_L, boost * 0.1), 1.0);
}`;

const LINE_FS = `#version 300 es
precision highp float;
out vec4 color;
void main() { color = vec4(0.624, 0.788, 0.878, 1.0); }`;

function compile(gl: WebGL2RenderingContext, vs: string, fs: string) {
  const prog = gl.createProgram()!;
  for (const [type, src] of [
    [gl.VERTEX_SHADER, vs],
    [gl.FRAGMENT_SHADER, fs],
  ] as const) {
    const sh = gl.createShader(type)!;
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh) ?? "shader");
    gl.attachShader(prog, sh);
  }
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog) ?? "link");
  return prog;
}

export type Anchors = Record<AnchorKey, Vec2>;
export type BlockApi = { setFocus: (f: number) => void; destroy: () => void };

/**
 * Monta el bloque en el canvas. onProject recibe, en cada cuadro, la posición en pantalla
 * (px CSS) de los puntos donde van las letras. Devuelve null si no hay WebGL2.
 */
export function mountBlockDiagram(
  canvas: HTMLCanvasElement,
  opts: { animate: boolean; onProject: (a: Anchors) => void },
): BlockApi | null {
  const gl = canvas.getContext("webgl2", { antialias: true, premultipliedAlpha: true, alpha: true });
  if (!gl) return null;

  const geo = buildGeometry();
  const prog = compile(gl, VS, FS);
  const lineProg = compile(gl, VS, LINE_FS);

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  const posBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
  gl.bufferData(gl.ARRAY_BUFFER, geo.pos, gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(prog, "aPos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);
  const kindBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, kindBuf);
  gl.bufferData(gl.ARRAY_BUFFER, geo.kind, gl.STATIC_DRAW);
  const aKind = gl.getAttribLocation(prog, "aKind");
  gl.enableVertexAttribArray(aKind);
  gl.vertexAttribPointer(aKind, 1, gl.FLOAT, false, 0, 0);
  const idxBuf = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxBuf);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, geo.idx, gl.STATIC_DRAW);

  const lineVao = gl.createVertexArray();
  gl.bindVertexArray(lineVao);
  const lineBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, lineBuf);
  gl.bufferData(gl.ARRAY_BUFFER, geo.outline, gl.STATIC_DRAW);
  const laPos = gl.getAttribLocation(lineProg, "aPos");
  gl.enableVertexAttribArray(laPos);
  gl.vertexAttribPointer(laPos, 3, gl.FLOAT, false, 0, 0);
  gl.bindVertexArray(null);

  gl.useProgram(prog);
  gl.uniform1fv(gl.getUniformLocation(prog, "uEnvHw"), ENV_HW);
  gl.uniform1fv(gl.getUniformLocation(prog, "uEnvFw"), ENV_FW);
  gl.uniform1fv(gl.getUniformLocation(prog, "uCoreHw"), CORE_HW);
  gl.uniform1fv(gl.getUniformLocation(prog, "uCoreFw"), CORE_FW);
  gl.uniform2fv(gl.getUniformLocation(prog, "uAxisT"), AXIS_T);
  gl.uniform2fv(gl.getUniformLocation(prog, "uAxisB"), AXIS_B);
  gl.uniform3fv(
    gl.getUniformLocation(prog, "uHoles"),
    HOLES.flatMap((h) => [h.collar[0], h.collar[1], h.len]),
  );
  const uMvp = gl.getUniformLocation(prog, "uMvp");
  const uFocus = gl.getUniformLocation(prog, "uFocus");
  const uLineMvp = gl.getUniformLocation(lineProg, "uMvp");

  let focus = 0;
  let pointer = 0;
  let pointerSmooth = 0;

  const draw = (t: number) => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    const w = Math.round(cw * dpr);
    const h = Math.round(ch * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    gl.viewport(0, 0, w, h);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);

    pointerSmooth += (pointer - pointerSmooth) * 0.05;
    const yaw = (17 + (opts.animate ? 6 * Math.sin(t / 9000) : 0) + pointerSmooth * 5) * (Math.PI / 180);
    const pitch = 20 * (Math.PI / 180);
    // La cámara se aleja en recuadros más angostos para que el bloque entre completo
    const dist = 2.75 * Math.max(1, 1.55 / (w / Math.max(h, 1)));
    const target: Vec3 = [0.02, -0.2, -0.36];
    const eye: Vec3 = [
      target[0] + dist * Math.cos(pitch) * Math.sin(yaw),
      target[1] + dist * Math.sin(pitch),
      target[2] + dist * Math.cos(pitch) * Math.cos(yaw),
    ];
    const mvp = multiply(perspective(0.66, w / Math.max(h, 1), 0.1, 20), lookAt(eye, target, [0, 1, 0]));

    gl.useProgram(prog);
    gl.uniformMatrix4fv(uMvp, false, mvp);
    gl.uniform1f(uFocus, focus);
    gl.bindVertexArray(vao);
    gl.drawElements(gl.TRIANGLES, geo.idx.length, gl.UNSIGNED_INT, 0);

    gl.useProgram(lineProg);
    gl.uniformMatrix4fv(uLineMvp, false, mvp);
    gl.bindVertexArray(lineVao);
    gl.drawArrays(gl.LINES, 0, geo.outline.length / 3);

    const projected = {} as Anchors;
    for (const k of Object.keys(ANCHORS) as AnchorKey[]) projected[k] = project(mvp, ANCHORS[k], cw, ch);
    opts.onProject(projected);
  };

  let raf = 0;
  let visible = true;
  const loop = (t: number) => {
    draw(t);
    if (opts.animate && visible) raf = requestAnimationFrame(loop);
  };
  draw(0);
  if (opts.animate) raf = requestAnimationFrame(loop);

  const onPointer = (e: PointerEvent) => {
    pointer = (e.clientX / window.innerWidth) * 2 - 1;
  };
  if (opts.animate) window.addEventListener("pointermove", onPointer, { passive: true });

  let onScreen = true;
  const restart = () => {
    visible = onScreen && !document.hidden;
    cancelAnimationFrame(raf);
    if (opts.animate && visible) raf = requestAnimationFrame(loop);
  };
  const io = new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    restart();
  });
  io.observe(canvas);
  // Al volver a la pestaña, el giro se retoma
  document.addEventListener("visibilitychange", restart);

  const ro = new ResizeObserver(() => {
    if (!opts.animate) draw(0);
  });
  ro.observe(canvas);

  return {
    setFocus(f: number) {
      focus = f;
      if (!opts.animate) draw(0);
    },
    destroy() {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", restart);
      window.removeEventListener("pointermove", onPointer);
    },
  };
}
