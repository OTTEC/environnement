var size = 0;
var placement = 'point';

var style_SMBVdelArques_40 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Nom") !== null) {
        labelText = String(feature.get("Nom"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(146,199,225,1.0)', lineDash: [8.74,1.748], lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(146,199,225,0.5294117647058824)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
