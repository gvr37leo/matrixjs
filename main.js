/// <reference path="matrix.ts" />
/// <reference path="node_modules/vectorx/vector.ts" />
//tsc main.ts --target es6 --inlineSourceMap --watch --outFile package.js
var TAU = Math.PI * 2;
var v = new Vector3(1, 0, 0);
var rotv = new Vector3(0, 1, 0);
var matrix = Matrix.rotate(rotv, TAU / 2);
matrix.multV(v);
console.log(v);
