var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_76648_ZONE_URBA_20241107_1 = new ol.format.GeoJSON();
var features_76648_ZONE_URBA_20241107_1 = format_76648_ZONE_URBA_20241107_1.readFeatures(json_76648_ZONE_URBA_20241107_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76648_ZONE_URBA_20241107_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76648_ZONE_URBA_20241107_1.addFeatures(features_76648_ZONE_URBA_20241107_1);
var lyr_76648_ZONE_URBA_20241107_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76648_ZONE_URBA_20241107_1, 
                style: style_76648_ZONE_URBA_20241107_1,
                popuplayertitle: '76648_ZONE_URBA_20241107',
                interactive: true,
                title: '<img src="styles/legend/76648_ZONE_URBA_20241107_1.png" /> 76648_ZONE_URBA_20241107'
            });
var format_76648_INFO_SURF_20241107_2 = new ol.format.GeoJSON();
var features_76648_INFO_SURF_20241107_2 = format_76648_INFO_SURF_20241107_2.readFeatures(json_76648_INFO_SURF_20241107_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76648_INFO_SURF_20241107_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76648_INFO_SURF_20241107_2.addFeatures(features_76648_INFO_SURF_20241107_2);
var lyr_76648_INFO_SURF_20241107_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76648_INFO_SURF_20241107_2, 
                style: style_76648_INFO_SURF_20241107_2,
                popuplayertitle: '76648_INFO_SURF_20241107',
                interactive: true,
                title: '<img src="styles/legend/76648_INFO_SURF_20241107_2.png" /> 76648_INFO_SURF_20241107'
            });
var format_76648_PRESCRIPTION_SURF_20241107_3 = new ol.format.GeoJSON();
var features_76648_PRESCRIPTION_SURF_20241107_3 = format_76648_PRESCRIPTION_SURF_20241107_3.readFeatures(json_76648_PRESCRIPTION_SURF_20241107_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76648_PRESCRIPTION_SURF_20241107_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76648_PRESCRIPTION_SURF_20241107_3.addFeatures(features_76648_PRESCRIPTION_SURF_20241107_3);
var lyr_76648_PRESCRIPTION_SURF_20241107_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76648_PRESCRIPTION_SURF_20241107_3, 
                style: style_76648_PRESCRIPTION_SURF_20241107_3,
                popuplayertitle: '76648_PRESCRIPTION_SURF_20241107',
                interactive: true,
                title: '<img src="styles/legend/76648_PRESCRIPTION_SURF_20241107_3.png" /> 76648_PRESCRIPTION_SURF_20241107'
            });
var format_76648_INFO_LIN_20241107_4 = new ol.format.GeoJSON();
var features_76648_INFO_LIN_20241107_4 = format_76648_INFO_LIN_20241107_4.readFeatures(json_76648_INFO_LIN_20241107_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76648_INFO_LIN_20241107_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76648_INFO_LIN_20241107_4.addFeatures(features_76648_INFO_LIN_20241107_4);
var lyr_76648_INFO_LIN_20241107_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76648_INFO_LIN_20241107_4, 
                style: style_76648_INFO_LIN_20241107_4,
                popuplayertitle: '76648_INFO_LIN_20241107',
                interactive: true,
                title: '<img src="styles/legend/76648_INFO_LIN_20241107_4.png" /> 76648_INFO_LIN_20241107'
            });
var format_76648_PRESCRIPTION_LIN_20241107_5 = new ol.format.GeoJSON();
var features_76648_PRESCRIPTION_LIN_20241107_5 = format_76648_PRESCRIPTION_LIN_20241107_5.readFeatures(json_76648_PRESCRIPTION_LIN_20241107_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76648_PRESCRIPTION_LIN_20241107_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76648_PRESCRIPTION_LIN_20241107_5.addFeatures(features_76648_PRESCRIPTION_LIN_20241107_5);
var lyr_76648_PRESCRIPTION_LIN_20241107_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76648_PRESCRIPTION_LIN_20241107_5, 
                style: style_76648_PRESCRIPTION_LIN_20241107_5,
                popuplayertitle: '76648_PRESCRIPTION_LIN_20241107',
                interactive: true,
                title: '<img src="styles/legend/76648_PRESCRIPTION_LIN_20241107_5.png" /> 76648_PRESCRIPTION_LIN_20241107'
            });
var format_76648_PRESCRIPTION_PCT_20241107_6 = new ol.format.GeoJSON();
var features_76648_PRESCRIPTION_PCT_20241107_6 = format_76648_PRESCRIPTION_PCT_20241107_6.readFeatures(json_76648_PRESCRIPTION_PCT_20241107_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76648_PRESCRIPTION_PCT_20241107_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76648_PRESCRIPTION_PCT_20241107_6.addFeatures(features_76648_PRESCRIPTION_PCT_20241107_6);
var lyr_76648_PRESCRIPTION_PCT_20241107_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76648_PRESCRIPTION_PCT_20241107_6, 
                style: style_76648_PRESCRIPTION_PCT_20241107_6,
                popuplayertitle: '76648_PRESCRIPTION_PCT_20241107',
                interactive: true,
                title: '<img src="styles/legend/76648_PRESCRIPTION_PCT_20241107_6.png" /> 76648_PRESCRIPTION_PCT_20241107'
            });
var format_76321_ZONE_URBA_20240219_7 = new ol.format.GeoJSON();
var features_76321_ZONE_URBA_20240219_7 = format_76321_ZONE_URBA_20240219_7.readFeatures(json_76321_ZONE_URBA_20240219_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76321_ZONE_URBA_20240219_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76321_ZONE_URBA_20240219_7.addFeatures(features_76321_ZONE_URBA_20240219_7);
var lyr_76321_ZONE_URBA_20240219_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76321_ZONE_URBA_20240219_7, 
                style: style_76321_ZONE_URBA_20240219_7,
                popuplayertitle: '76321_ZONE_URBA_20240219',
                interactive: true,
                title: '<img src="styles/legend/76321_ZONE_URBA_20240219_7.png" /> 76321_ZONE_URBA_20240219'
            });
var format_76321_PRESCRIPTION_SURF_20240219_8 = new ol.format.GeoJSON();
var features_76321_PRESCRIPTION_SURF_20240219_8 = format_76321_PRESCRIPTION_SURF_20240219_8.readFeatures(json_76321_PRESCRIPTION_SURF_20240219_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76321_PRESCRIPTION_SURF_20240219_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76321_PRESCRIPTION_SURF_20240219_8.addFeatures(features_76321_PRESCRIPTION_SURF_20240219_8);
var lyr_76321_PRESCRIPTION_SURF_20240219_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76321_PRESCRIPTION_SURF_20240219_8, 
                style: style_76321_PRESCRIPTION_SURF_20240219_8,
                popuplayertitle: '76321_PRESCRIPTION_SURF_20240219',
                interactive: true,
                title: '<img src="styles/legend/76321_PRESCRIPTION_SURF_20240219_8.png" /> 76321_PRESCRIPTION_SURF_20240219'
            });
var format_76321_PRESCRIPTION_LIN_20240219_9 = new ol.format.GeoJSON();
var features_76321_PRESCRIPTION_LIN_20240219_9 = format_76321_PRESCRIPTION_LIN_20240219_9.readFeatures(json_76321_PRESCRIPTION_LIN_20240219_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76321_PRESCRIPTION_LIN_20240219_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76321_PRESCRIPTION_LIN_20240219_9.addFeatures(features_76321_PRESCRIPTION_LIN_20240219_9);
var lyr_76321_PRESCRIPTION_LIN_20240219_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76321_PRESCRIPTION_LIN_20240219_9, 
                style: style_76321_PRESCRIPTION_LIN_20240219_9,
                popuplayertitle: '76321_PRESCRIPTION_LIN_20240219',
                interactive: true,
                title: '<img src="styles/legend/76321_PRESCRIPTION_LIN_20240219_9.png" /> 76321_PRESCRIPTION_LIN_20240219'
            });
var format_76321_PRESCRIPTION_PCT_20240219_10 = new ol.format.GeoJSON();
var features_76321_PRESCRIPTION_PCT_20240219_10 = format_76321_PRESCRIPTION_PCT_20240219_10.readFeatures(json_76321_PRESCRIPTION_PCT_20240219_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76321_PRESCRIPTION_PCT_20240219_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76321_PRESCRIPTION_PCT_20240219_10.addFeatures(features_76321_PRESCRIPTION_PCT_20240219_10);
var lyr_76321_PRESCRIPTION_PCT_20240219_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76321_PRESCRIPTION_PCT_20240219_10, 
                style: style_76321_PRESCRIPTION_PCT_20240219_10,
                popuplayertitle: '76321_PRESCRIPTION_PCT_20240219',
                interactive: true,
                title: '<img src="styles/legend/76321_PRESCRIPTION_PCT_20240219_10.png" /> 76321_PRESCRIPTION_PCT_20240219'
            });
var format_COMMUNE_11 = new ol.format.GeoJSON();
var features_COMMUNE_11 = format_COMMUNE_11.readFeatures(json_COMMUNE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_11.addFeatures(features_COMMUNE_11);
var lyr_COMMUNE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNE_11, 
                style: style_COMMUNE_11,
                popuplayertitle: 'COMMUNE',
                interactive: true,
                title: '<img src="styles/legend/COMMUNE_11.png" /> COMMUNE'
            });
var format_Emprise_PETR_12 = new ol.format.GeoJSON();
var features_Emprise_PETR_12 = format_Emprise_PETR_12.readFeatures(json_Emprise_PETR_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Emprise_PETR_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emprise_PETR_12.addFeatures(features_Emprise_PETR_12);
var lyr_Emprise_PETR_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emprise_PETR_12, 
                style: style_Emprise_PETR_12,
                popuplayertitle: 'Emprise_PETR',
                interactive: true,
                title: '<img src="styles/legend/Emprise_PETR_12.png" /> Emprise_PETR'
            });
var group_LESGRANDESVENTES = new ol.layer.Group({
                                layers: [lyr_76321_ZONE_URBA_20240219_7,lyr_76321_PRESCRIPTION_SURF_20240219_8,lyr_76321_PRESCRIPTION_LIN_20240219_9,lyr_76321_PRESCRIPTION_PCT_20240219_10,],
                                fold: "open",
                                title: 'LES GRANDES VENTES'});
var group_SAINTSAENS = new ol.layer.Group({
                                layers: [lyr_76648_ZONE_URBA_20241107_1,lyr_76648_INFO_SURF_20241107_2,lyr_76648_PRESCRIPTION_SURF_20241107_3,lyr_76648_INFO_LIN_20241107_4,lyr_76648_PRESCRIPTION_LIN_20241107_5,lyr_76648_PRESCRIPTION_PCT_20241107_6,],
                                fold: "open",
                                title: 'SAINT-SAENS'});

lyr_GoogleSatellite_0.setVisible(true);lyr_76648_ZONE_URBA_20241107_1.setVisible(true);lyr_76648_INFO_SURF_20241107_2.setVisible(true);lyr_76648_PRESCRIPTION_SURF_20241107_3.setVisible(true);lyr_76648_INFO_LIN_20241107_4.setVisible(true);lyr_76648_PRESCRIPTION_LIN_20241107_5.setVisible(true);lyr_76648_PRESCRIPTION_PCT_20241107_6.setVisible(true);lyr_76321_ZONE_URBA_20240219_7.setVisible(true);lyr_76321_PRESCRIPTION_SURF_20240219_8.setVisible(true);lyr_76321_PRESCRIPTION_LIN_20240219_9.setVisible(true);lyr_76321_PRESCRIPTION_PCT_20240219_10.setVisible(true);lyr_COMMUNE_11.setVisible(true);lyr_Emprise_PETR_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_SAINTSAENS,group_LESGRANDESVENTES,lyr_COMMUNE_11,lyr_Emprise_PETR_12];
lyr_76648_ZONE_URBA_20241107_1.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_76648_INFO_SURF_20241107_2.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'STYPEINF': 'STYPEINF', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_76648_PRESCRIPTION_SURF_20241107_3.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_76648_INFO_LIN_20241107_4.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'STYPEINF': 'STYPEINF', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_76648_PRESCRIPTION_LIN_20241107_5.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_76648_PRESCRIPTION_PCT_20241107_6.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_76321_ZONE_URBA_20240219_7.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_76321_PRESCRIPTION_SURF_20240219_8.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_76321_PRESCRIPTION_LIN_20240219_9.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_76321_PRESCRIPTION_PCT_20240219_10.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_COMMUNE_11.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_Emprise_PETR_12.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'layer': 'layer', 'path': 'path', });
lyr_76648_ZONE_URBA_20241107_1.set('fieldImages', {'LIBELLE': '', 'LIBELONG': '', 'TYPEZONE': '', 'NOMFIC': '', 'URLFIC': '', 'IDURBA': '', 'DATVALID': '', });
lyr_76648_INFO_SURF_20241107_2.set('fieldImages', {'LIBELLE': '', 'TXT': '', 'TYPEINF': '', 'STYPEINF': '', 'NOMFIC': '', 'URLFIC': '', 'IDURBA': '', 'DATVALID': '', });
lyr_76648_PRESCRIPTION_SURF_20241107_3.set('fieldImages', {'LIBELLE': '', 'TXT': '', 'TYPEPSC': '', 'STYPEPSC': '', 'NOMFIC': '', 'URLFIC': '', 'IDURBA': '', 'DATVALID': '', });
lyr_76648_INFO_LIN_20241107_4.set('fieldImages', {'LIBELLE': '', 'TXT': '', 'TYPEINF': '', 'STYPEINF': '', 'NOMFIC': '', 'URLFIC': '', 'IDURBA': '', 'DATVALID': '', });
lyr_76648_PRESCRIPTION_LIN_20241107_5.set('fieldImages', {'LIBELLE': '', 'TXT': '', 'TYPEPSC': '', 'STYPEPSC': '', 'NOMFIC': '', 'URLFIC': '', 'IDURBA': '', 'DATVALID': '', });
lyr_76648_PRESCRIPTION_PCT_20241107_6.set('fieldImages', {'LIBELLE': '', 'TXT': '', 'TYPEPSC': '', 'STYPEPSC': '', 'NOMFIC': '', 'URLFIC': '', 'IDURBA': '', 'DATVALID': '', });
lyr_76321_ZONE_URBA_20240219_7.set('fieldImages', {'LIBELLE': '', 'LIBELONG': '', 'TYPEZONE': '', 'NOMFIC': '', 'URLFIC': '', 'IDURBA': '', 'DATVALID': '', });
lyr_76321_PRESCRIPTION_SURF_20240219_8.set('fieldImages', {'LIBELLE': '', 'TXT': '', 'TYPEPSC': '', 'STYPEPSC': '', 'NOMFIC': '', 'URLFIC': '', 'IDURBA': '', 'DATVALID': '', });
lyr_76321_PRESCRIPTION_LIN_20240219_9.set('fieldImages', {'LIBELLE': '', 'TXT': '', 'TYPEPSC': '', 'STYPEPSC': '', 'NOMFIC': '', 'URLFIC': '', 'IDURBA': '', 'DATVALID': '', });
lyr_76321_PRESCRIPTION_PCT_20240219_10.set('fieldImages', {'LIBELLE': '', 'TXT': '', 'TYPEPSC': '', 'STYPEPSC': '', 'NOMFIC': '', 'URLFIC': '', 'IDURBA': '', 'DATVALID': '', });
lyr_COMMUNE_11.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Emprise_PETR_12.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_76648_ZONE_URBA_20241107_1.set('fieldLabels', {'LIBELLE': 'no label', 'LIBELONG': 'no label', 'TYPEZONE': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_76648_INFO_SURF_20241107_2.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEINF': 'no label', 'STYPEINF': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_76648_PRESCRIPTION_SURF_20241107_3.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_76648_INFO_LIN_20241107_4.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEINF': 'no label', 'STYPEINF': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_76648_PRESCRIPTION_LIN_20241107_5.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_76648_PRESCRIPTION_PCT_20241107_6.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_76321_ZONE_URBA_20240219_7.set('fieldLabels', {'LIBELLE': 'no label', 'LIBELONG': 'no label', 'TYPEZONE': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_76321_PRESCRIPTION_SURF_20240219_8.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_76321_PRESCRIPTION_LIN_20240219_9.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_76321_PRESCRIPTION_PCT_20240219_10.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_COMMUNE_11.set('fieldLabels', {'ID': 'no label', 'INSEE_COM': 'no label', 'INSEE_ARR': 'no label', 'INSEE_COL': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'POPULATION': 'no label', 'SURFACE_HA': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'CODE_POST': 'no label', 'NOM': 'no label', 'CL_ARROND': 'no label', 'CL_COLLTER': 'no label', 'CL_DEPART': 'no label', 'CL_REGION': 'no label', 'CAPITALE': 'no label', 'DATE_RCT': 'no label', 'RECENSEUR': 'no label', 'SIREN_EPCI': 'no label', 'ID_CH_LIEU': 'no label', 'ID_AUT_ADM': 'no label', 'CODE_SIREN': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Emprise_PETR_12.set('fieldLabels', {'ID': 'no label', 'CODE_SIREN': 'no label', 'NATURE': 'no label', 'NOM': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'ID_AUT_ADM': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Emprise_PETR_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});