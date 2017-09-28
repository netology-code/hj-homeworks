var canvas,
  context,
  dragging = false,
  dragStartLocation,
  snapshot;

window.editor = {
  events: {},
  addEventListener(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  },
  emit(event, data) {
    if (!this.events[event]) {
      return;
    }
    this.events[event]
      .forEach(callback => callback.call(this, data));
  }
}

function getCanvasCoordinates(event) {
  var x = event.clientX - canvas.getBoundingClientRect().left;
  var y = event.clientY - canvas.getBoundingClientRect().top;
  return { x, y };
}

function takeSnapShot() {
  snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreSnapShot() {
  context.putImageData(snapshot, 0, 0);
}

function drawLine(position) {
  context.beginPath();
  context.moveTo(dragStartLocation.x, dragStartLocation.y);
  context.lineTo(position.x, position.y);
  context.stroke();
}

function drawCircle(position) {
  var radius = Math.sqrt(Math.pow((dragStartLocation.x - position.x), 2) + Math.pow((dragStartLocation.y - position.y), 2));
  context.beginPath();
  context.arc(dragStartLocation.x, dragStartLocation.y, radius, 0, 2 * Math.PI);
}


function drawEllipse(position) {
  var w = position.x - dragStartLocation.x;
  var h = position.y - dragStartLocation.y;
  var radius = Math.sqrt(Math.pow((dragStartLocation.x - position.x), 2) + Math.pow((dragStartLocation.y - position.y), 2));
  context.beginPath();
  var cw = (dragStartLocation.x > position.x) ? true : false;
  context.ellipse(dragStartLocation.x, dragStartLocation.y, Math.abs(w), Math.abs(h), 0, 2 * Math.PI, false);
}

function drawRect(position) {
  console.log(position.x, dragStartLocation.x);
  var w = position.x - dragStartLocation.x;
  var h = position.y - dragStartLocation.y ;
  context.beginPath();
  context.rect(dragStartLocation.x, dragStartLocation.y, w, h);
}

function drawPolygon(position, sides, angle) {
  var coordinates = [],
    radius = Math.sqrt(Math.pow((dragStartLocation.x - position.x), 2) + Math.pow((dragStartLocation.y - position.y), 2)),
    index = 0;

  for (index; index < sides; index++) {
    coordinates.push({
      x: dragStartLocation.x + radius * Math.cos(angle),
      y: dragStartLocation.y - radius * Math.sin(angle)
    });
    angle += (2 * Math.PI) / sides;
  }

  context.beginPath();
  context.moveTo(coordinates[0].x, coordinates[0].y);

  for (index = 0; index < sides; index++) {
    context.lineTo(coordinates[index].x, coordinates[index].y);
  }

  context.closePath();
}

function draw(position) {
  var fillBox = document.getElementById("fillBox")
    , shape = document.querySelector('input[type="radio"][name="shape"]:checked').value
    , polygonSides = document.getElementById('polygonSides').value
    , polygonAngle = calculateAngle(dragStartLocation, position)
    , lineCap = document.querySelector('input[type="radio"][name="lineCap"]:checked').value
    , xor = document.getElementById('xor');

  context.lineCap = lineCap;

  if (shape === "circle") {
    drawCircle(position);
  }
  if (shape === "square") {
    drawPolygon(position, 4, Math.PI / 4);
  }
  if (shape === "line") {
    drawLine(position);
  }
  if (shape === "ellipse") {
    drawEllipse(position);
  }
  if (shape === "rect") {
    drawRect(position);
  }
  if (shape === "polygon") {
    drawPolygon(position, polygonSides, polygonAngle * (Math.PI / 180));
  }

  if (xor.checked){
    context.globalCompositeOperation = "xor";
  } else {
    context.globalCompositeOperation = "source-over";
  }

  if (fillBox.checked) {
    context.fill();
  } else {
    context.stroke();
  }
}

function dragStart(event) {
  dragging = true;
  dragStartLocation = getCanvasCoordinates(event);
  takeSnapShot();
}

function calculateAngle(start, current) {
  var angle = 360 - Math.atan2(current.y - start.y, current.x - start.x) * 180 / Math.PI;
  return angle;
}

function drag(event) {
  var position;
  if (dragging === true) {
    restoreSnapShot();
    position = getCanvasCoordinates(event);
    draw(position);
  }
}

function dragStop(event) {
  dragging = false;
  restoreSnapShot();
  var position = getCanvasCoordinates(event);
  draw(position);
  window.editor.emit('update', { canvas });
}

function changeLineWidth() {
  context.lineWidth = this.value;
  event.stopPropagation();
}

function changeFillStyle() {
  context.fillStyle = this.value;
  event.stopPropagation();
}

function changeStrokeStyle() {
  context.strokeStyle = this.value;
  event.stopPropagation();
}

function changeBackgroundColor() {
  context.save();
  context.fillStyle = document.getElementById('backgroundColor').value;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.restore();
}

function eraseCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function init() {
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');


  var lineWidth = document.getElementById('lineWidth'),
    fillColor = document.getElementById('fillColor'),
    strokeColor = document.getElementById('strokeColor'),
    canvasColor = document.getElementById('backgroundColor'),
    clearCanvas = document.getElementById('clearCanvas');

  context.lineWidth = lineWidth.value;
  context.fillStyle = fillColor.value;

  canvas.addEventListener('mousedown', dragStart, false);
  canvas.addEventListener('mousemove', drag, false);
  canvas.addEventListener('mouseup', dragStop, false);
  lineWidth.addEventListener('input', changeLineWidth, false);
  fillColor.addEventListener('input', changeFillStyle, false);
  strokeColor.addEventListener('input', changeStrokeStyle, false);
  canvasColor.addEventListener('input', changeBackgroundColor, false);
  clearCanvas.addEventListener('click', eraseCanvas, false);
}

window.addEventListener('load', init, false);
