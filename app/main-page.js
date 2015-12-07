var TestModel = require("./main-view-model");
var cameraModule = require("camera");
var observableModule = require("data/observable");
var model = new TestModel([]);

function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = new observableModule.Observable({
    images: model
  });
}

function camera() {
  console.log('tap camera');

  self = this;
  cameraModule.takePicture().then(function(picture) {
    console.log("Result is an image source instance");
    model.add(picture);
  });
}

exports.pageLoaded = pageLoaded;
exports.camera = camera;
