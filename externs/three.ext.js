/**
 * @fileoverview Externs for THREE.js and related libraries
 * @externs
 */

// Vector3
var Vector3 = {};
Vector3.prototype.set = function (x, y, z) {};
Vector3.prototype.copy = function (v) {};

// Sprite
var Sprite = {};
Sprite.prototype.scale;
Sprite.prototype.position;

// SpriteMaterial
var SpriteMaterial = function (params) {};

// CanvasTexture
var CanvasTexture = function (canvas) {};
CanvasTexture.prototype.needsUpdate;

// Raycaster
var Raycaster = function () {};
Raycaster.prototype.setFromCamera = function (mouse, camera) {};
Raycaster.prototype.intersectObjects = function (objects, recursive) {};

// OrbitControls
var OrbitControls = function (camera, domElement) {};
OrbitControls.prototype.update = function () {};
OrbitControls.prototype.dispose = function () {};
OrbitControls.prototype.target;
OrbitControls.prototype.enableDamping;
OrbitControls.prototype.dampingFactor;
OrbitControls.prototype.enabled;
OrbitControls.prototype.enablePan;
OrbitControls.prototype.screenSpacePanning;

// Camera
var Camera = {};
Camera.prototype.position;
Camera.prototype.aspect;
Camera.prototype.fov;
Camera.prototype.updateProjectionMatrix = function () {};

// Renderer
var WebGLRenderer = {};
WebGLRenderer.prototype.setClearColor = function (color, alpha) {};
WebGLRenderer.prototype.setPixelRatio = function (ratio) {};
WebGLRenderer.prototype.setSize = function (width, height, updateStyle) {};

// Intersection result
var Intersection = {};
Intersection.prototype.point;

// Clock (used by threeagent)
var Clock = function () {};
Clock.prototype.getDelta = function () {};
Clock.prototype.getElapsedTime = function () {};
Clock.prototype.start = function () {};
Clock.prototype.stop = function () {};
Clock.prototype.elapsedTime;
Clock.prototype.running;
