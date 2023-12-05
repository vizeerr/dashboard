
$("#slider").roundSlider({
    radius: 80,
    width: 9,
    handleSize: "+8",
    sliderType: "min-range",
    value: 40,
    editableTooltip: false,
    tooltipFormat: "tooltipVal1"
});


function tooltipVal1() {
    var months = "13:15";

    return months;
}