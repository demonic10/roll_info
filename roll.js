$(document).ready(function () {


function roll_sum(dice){
    var sum = 0;
    for (var i = 0; i < 1000; i++) {
        sum += Math.floor((Math.random() * dice) + 1);
    }
    return sum;
}

var dataSource1 = [
    { breed: "Experiment_1", number: roll_sum(12) },
    { breed: "Experiment_2", number: roll_sum(12) },
    { breed: "Experiment_3", number: roll_sum(12) },
    { breed: "Experiment_4", number: roll_sum(12) },
    { breed: "Experiment_5", number: roll_sum(12) },
    { breed: "Experiment_6", number: roll_sum(12) },
    { breed: "Experiment_7", number: roll_sum(12) },
    { breed: "Experiment_8", number: roll_sum(12) },
    { breed: "Experiment_9", number: roll_sum(12) },
    { breed: "Experiment_10", number: roll_sum(12) }
],
    dataSource2 = [
    { breed: "Experiment_1", number: (roll_sum(6)+roll_sum(6)) },
    { breed: "Experiment_2", number: (roll_sum(6)+roll_sum(6)) },
    { breed: "Experiment_3", number: (roll_sum(6)+roll_sum(6)) },
    { breed: "Experiment_4", number: (roll_sum(6)+roll_sum(6)) },
    { breed: "Experiment_5", number: (roll_sum(6)+roll_sum(6)) },
    { breed: "Experiment_6", number: (roll_sum(6)+roll_sum(6)) },
    { breed: "Experiment_7", number: (roll_sum(6)+roll_sum(6)) },
    { breed: "Experiment_8", number: (roll_sum(6)+roll_sum(6)) },
    { breed: "Experiment_9", number: (roll_sum(6)+roll_sum(6)) },
    { breed: "Experiment_10", number: (roll_sum(6)+roll_sum(6)) }
]; 


$("#chartContainer1").dxChart({
    dataSource: dataSource1,
    title: "Броски 1 d12",
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

$("#chartContainer2").dxChart({
    dataSource: dataSource2,
    title: "Броски 2 d6",
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

});