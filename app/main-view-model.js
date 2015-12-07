var ObservableArray = require("data/observable-array").ObservableArray;
var fetchModule = require("fetch");
// var io = require('socket.io-client');

function TestModel(items) {
  var viewModel = new ObservableArray(items);

  viewModel.load = function() {

  }

  viewModel.add = function(picture) {
    console.log('add', picture);
    viewModel.push({
      src: picture
    });
  }

  return viewModel;
}

module.exports = TestModel;
