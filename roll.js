$(document).ready(function () {


var roll_sum = function(dice, count = 1){
    var dice = dice;
    var count = count;
    return function(){
      var sum = 0;
      for (var i = 0; i < 1000; i++) {
        for(var n = 0; n < count; n++) {
          sum += Math.floor((Math.random() * dice) + 1);
        }
      }
      return sum;
    }
}


var experiment = function($func, count = 10) {
  var data = [];
  for(var i = 1; i <= count; i++) {
    data.push({
      breed: "Experiment_" + i,
      number: $func()
    });
  }
  return data;
}

var showExp = function(selector, title, dataSource) {
  $(selector).dxChart({
      dataSource: dataSource,
      title: title,
      series: {
          type: "bar",
          argumentField: "breed",
          valueField: "number",
          tagField: "photo",
          hoverStyle: {
              hatching: "right"
          }
      },
      legend: { visible: false },
  });
}

const count = 100;
showExp("#chartContainer1", "Броски d12", experiment(roll_sum(12), count));
showExp("#chartContainer2", "Броски 2d6", experiment(roll_sum(6, 2), count));
showExp("#chartContainer3", "Броски 3d4", experiment(roll_sum(4, 3), count));
showExp("#chartContainer4", "Броски 4d3", experiment(roll_sum(3, 4), count));
showExp("#chartContainer5", "Броски 6d2", experiment(roll_sum(2, 6), count));

});
