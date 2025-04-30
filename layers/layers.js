var wms_layers = [];


        var lyr_BDOrthoIGN_0 = new ol.layer.Tile({
            'title': 'BDOrtho IGN',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://openstreetmap.fr/bdortho">BDOrtho IGN</a>',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });
var format_Naturedessols_1 = new ol.format.GeoJSON();
var features_Naturedessols_1 = format_Naturedessols_1.readFeatures(json_Naturedessols_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Naturedessols_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Naturedessols_1.addFeatures(features_Naturedessols_1);
var lyr_Naturedessols_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Naturedessols_1, 
                style: style_Naturedessols_1,
                popuplayertitle: 'Nature des sols',
                interactive: true,
    title: 'Nature des sols<br />\
    <img src="styles/legend/Naturedessols_1_0.png" /> Alluvions fluviatiles actuelles et subactuelles [...]<br />\
    <img src="styles/legend/Naturedessols_1_1.png" /> Alluvions fluviatiles anciennes de la [...]<br />\
    <img src="styles/legend/Naturedessols_1_2.png" /> Alluvions fluviatiles anciennes indifférenciées, Pléistocène. [...]<br />\
    <img src="styles/legend/Naturedessols_1_3.png" /> Alluvions fluviatiles résiduelles : cailloutis [...]<br />\
    <img src="styles/legend/Naturedessols_1_4.png" /> Argile plastique, argile sableuse, Sparnacien [...]<br />\
    <img src="styles/legend/Naturedessols_1_5.png" /> Argiles du Gault, Albien supérieur [...]<br />\
    <img src="styles/legend/Naturedessols_1_6.png" /> Argiles du Gault, Gaize et [...]<br />\
    <img src="styles/legend/Naturedessols_1_7.png" /> Argiles noires à Exogyres et [...]<br />\
    <img src="styles/legend/Naturedessols_1_8.png" /> Argiles panachées, Barrémien [...]<br />\
    <img src="styles/legend/Naturedessols_1_9.png" /> Biefs et limons à silex [...]<br />\
    <img src="styles/legend/Naturedessols_1_10.png" /> Calcaire lithographique, Tithonien inférieur [...]<br />\
    <img src="styles/legend/Naturedessols_1_11.png" /> Colluvions de pente et de [...]<br />\
    <img src="styles/legend/Naturedessols_1_12.png" /> Colluvions de pente et Formations [...]<br />\
    <img src="styles/legend/Naturedessols_1_13.png" /> Conglomérats, Sables et Argiles à [...]<br />\
    <img src="styles/legend/Naturedessols_1_14.png" /> Craie blanche à jaune à [...]<br />\
    <img src="styles/legend/Naturedessols_1_15.png" /> Craie blanche à silex (Craie [...]<br />\
    <img src="styles/legend/Naturedessols_1_16.png" /> Craie blanche à silex cornus [...]<br />\
    <img src="styles/legend/Naturedessols_1_17.png" /> Craie blanche à silex tuberculés, [...]<br />\
    <img src="styles/legend/Naturedessols_1_18.png" /> Craie blanche à silex, biozones [...]<br />\
    <img src="styles/legend/Naturedessols_1_19.png" /> Craie blanche argileuse à rares [...]<br />\
    <img src="styles/legend/Naturedessols_1_20.png" /> Craie blanche marneuse noduleuse sans [...]<br />\
    <img src="styles/legend/Naturedessols_1_21.png" /> Craie blanche plus ou moins [...]<br />\
    <img src="styles/legend/Naturedessols_1_22.png" /> Craie grise argileuse +/- glauconieuse [...]<br />\
    <img src="styles/legend/Naturedessols_1_23.png" /> Formations résiduelles à silex (argiles [...]<br />\
    <img src="styles/legend/Naturedessols_1_24.png" /> Formations résiduelles dérivées du Thanétien [...]<br />\
    <img src="styles/legend/Naturedessols_1_25.png" /> Gaize et Glauconie de base [...]<br />\
    <img src="styles/legend/Naturedessols_1_26.png" /> Gaize, Albien supérieur [...]<br />\
    <img src="styles/legend/Naturedessols_1_27.png" /> Glauconie de base et craie [...]<br />\
    <img src="styles/legend/Naturedessols_1_28.png" /> Glauconie de base ou Glauconie [...]<br />\
    <img src="styles/legend/Naturedessols_1_29.png" /> Limons de remplissage des fonds [...]<br />\
    <img src="styles/legend/Naturedessols_1_30.png" /> Limons des plateaux en place, [...]<br />\
    <img src="styles/legend/Naturedessols_1_31.png" /> Marno-calcaires et lumachelles à Exogyres, [...]<br />\
    <img src="styles/legend/Naturedessols_1_32.png" /> Remblais indifférenciés, Moderne [...]<br />\
    <img src="styles/legend/Naturedessols_1_33.png" /> Sables à silex verdis, Sables, [...]<br />\
    <img src="styles/legend/Naturedessols_1_34.png" /> Sables et grès à faciès [...]<br />\
    <img src="styles/legend/Naturedessols_1_35.png" /> Sables et Grès à Trigonies, [...]<br />\
    <img src="styles/legend/Naturedessols_1_36.png" /> Sables fins de Mathonville, Yprésien [...]<br />\
    <img src="styles/legend/Naturedessols_1_37.png" /> Sables verts, Sables et Grès [...]<br />' });
var format_LimitesgologiquesduPaysdeBray_2 = new ol.format.GeoJSON();
var features_LimitesgologiquesduPaysdeBray_2 = format_LimitesgologiquesduPaysdeBray_2.readFeatures(json_LimitesgologiquesduPaysdeBray_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesgologiquesduPaysdeBray_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesgologiquesduPaysdeBray_2.addFeatures(features_LimitesgologiquesduPaysdeBray_2);
var lyr_LimitesgologiquesduPaysdeBray_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesgologiquesduPaysdeBray_2, 
                style: style_LimitesgologiquesduPaysdeBray_2,
                popuplayertitle: 'Limites géologiques du Pays de Bray',
                interactive: true,
                title: '<img src="styles/legend/LimitesgologiquesduPaysdeBray_2.png" /> Limites géologiques du Pays de Bray'
            });
var format_Formationsherbaces_3 = new ol.format.GeoJSON();
var features_Formationsherbaces_3 = format_Formationsherbaces_3.readFeatures(json_Formationsherbaces_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formationsherbaces_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formationsherbaces_3.addFeatures(features_Formationsherbaces_3);
var lyr_Formationsherbaces_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formationsherbaces_3, 
                style: style_Formationsherbaces_3,
                popuplayertitle: 'Formations herbacées',
                interactive: true,
                title: '<img src="styles/legend/Formationsherbaces_3.png" /> Formations herbacées'
            });
var format_Autresformationsligneuses_4 = new ol.format.GeoJSON();
var features_Autresformationsligneuses_4 = format_Autresformationsligneuses_4.readFeatures(json_Autresformationsligneuses_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autresformationsligneuses_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autresformationsligneuses_4.addFeatures(features_Autresformationsligneuses_4);
var lyr_Autresformationsligneuses_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autresformationsligneuses_4, 
                style: style_Autresformationsligneuses_4,
                popuplayertitle: 'Autres formations ligneuses',
                interactive: true,
                title: '<img src="styles/legend/Autresformationsligneuses_4.png" /> Autres formations ligneuses'
            });
var format_Formationarbustivesetsousarbrisseaux_5 = new ol.format.GeoJSON();
var features_Formationarbustivesetsousarbrisseaux_5 = format_Formationarbustivesetsousarbrisseaux_5.readFeatures(json_Formationarbustivesetsousarbrisseaux_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formationarbustivesetsousarbrisseaux_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formationarbustivesetsousarbrisseaux_5.addFeatures(features_Formationarbustivesetsousarbrisseaux_5);
var lyr_Formationarbustivesetsousarbrisseaux_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formationarbustivesetsousarbrisseaux_5, 
                style: style_Formationarbustivesetsousarbrisseaux_5,
                popuplayertitle: 'Formation arbustives et sous-arbrisseaux',
                interactive: true,
                title: '<img src="styles/legend/Formationarbustivesetsousarbrisseaux_5.png" /> Formation arbustives et sous-arbrisseaux'
            });
var format_Peuplementdeconifres_6 = new ol.format.GeoJSON();
var features_Peuplementdeconifres_6 = format_Peuplementdeconifres_6.readFeatures(json_Peuplementdeconifres_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peuplementdeconifres_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peuplementdeconifres_6.addFeatures(features_Peuplementdeconifres_6);
var lyr_Peuplementdeconifres_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peuplementdeconifres_6, 
                style: style_Peuplementdeconifres_6,
                popuplayertitle: 'Peuplement de conifères',
                interactive: true,
                title: '<img src="styles/legend/Peuplementdeconifres_6.png" /> Peuplement de conifères'
            });
var format_Peuplementdefeuillus_7 = new ol.format.GeoJSON();
var features_Peuplementdefeuillus_7 = format_Peuplementdefeuillus_7.readFeatures(json_Peuplementdefeuillus_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peuplementdefeuillus_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peuplementdefeuillus_7.addFeatures(features_Peuplementdefeuillus_7);
var lyr_Peuplementdefeuillus_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peuplementdefeuillus_7, 
                style: style_Peuplementdefeuillus_7,
                popuplayertitle: 'Peuplement de feuillus',
                interactive: true,
                title: '<img src="styles/legend/Peuplementdefeuillus_7.png" /> Peuplement de feuillus'
            });
var format_Surfacesdeau_8 = new ol.format.GeoJSON();
var features_Surfacesdeau_8 = format_Surfacesdeau_8.readFeatures(json_Surfacesdeau_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surfacesdeau_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surfacesdeau_8.addFeatures(features_Surfacesdeau_8);
var lyr_Surfacesdeau_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surfacesdeau_8, 
                style: style_Surfacesdeau_8,
                popuplayertitle: 'Surfaces d\'eau',
                interactive: true,
                title: '<img src="styles/legend/Surfacesdeau_8.png" /> Surfaces d\'eau'
            });
var format_Zonesautrematriauxcomposites_9 = new ol.format.GeoJSON();
var features_Zonesautrematriauxcomposites_9 = format_Zonesautrematriauxcomposites_9.readFeatures(json_Zonesautrematriauxcomposites_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesautrematriauxcomposites_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesautrematriauxcomposites_9.addFeatures(features_Zonesautrematriauxcomposites_9);
var lyr_Zonesautrematriauxcomposites_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesautrematriauxcomposites_9, 
                style: style_Zonesautrematriauxcomposites_9,
                popuplayertitle: 'Zones à autre matériaux composites',
                interactive: true,
                title: '<img src="styles/legend/Zonesautrematriauxcomposites_9.png" /> Zones à autre matériaux composites'
            });
var format_Zonesmatriauxminraux_10 = new ol.format.GeoJSON();
var features_Zonesmatriauxminraux_10 = format_Zonesmatriauxminraux_10.readFeatures(json_Zonesmatriauxminraux_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesmatriauxminraux_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesmatriauxminraux_10.addFeatures(features_Zonesmatriauxminraux_10);
var lyr_Zonesmatriauxminraux_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesmatriauxminraux_10, 
                style: style_Zonesmatriauxminraux_10,
                popuplayertitle: 'Zones à matériaux minéraux',
                interactive: true,
                title: '<img src="styles/legend/Zonesmatriauxminraux_10.png" /> Zones à matériaux minéraux'
            });
var format_Zonesnonbties_11 = new ol.format.GeoJSON();
var features_Zonesnonbties_11 = format_Zonesnonbties_11.readFeatures(json_Zonesnonbties_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesnonbties_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesnonbties_11.addFeatures(features_Zonesnonbties_11);
var lyr_Zonesnonbties_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesnonbties_11, 
                style: style_Zonesnonbties_11,
                popuplayertitle: 'Zones non bâties',
                interactive: true,
                title: '<img src="styles/legend/Zonesnonbties_11.png" /> Zones non bâties'
            });
var format_Zonesbties_12 = new ol.format.GeoJSON();
var features_Zonesbties_12 = format_Zonesbties_12.readFeatures(json_Zonesbties_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesbties_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesbties_12.addFeatures(features_Zonesbties_12);
var lyr_Zonesbties_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesbties_12, 
                style: style_Zonesbties_12,
                popuplayertitle: 'Zones bâties',
                interactive: true,
                title: '<img src="styles/legend/Zonesbties_12.png" /> Zones bâties'
            });
var format_Surfacesnonartificialises_13 = new ol.format.GeoJSON();
var features_Surfacesnonartificialises_13 = format_Surfacesnonartificialises_13.readFeatures(json_Surfacesnonartificialises_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surfacesnonartificialises_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surfacesnonartificialises_13.addFeatures(features_Surfacesnonartificialises_13);
var lyr_Surfacesnonartificialises_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surfacesnonartificialises_13,
maxResolution:28.00446615226196,
 
                style: style_Surfacesnonartificialises_13,
                popuplayertitle: 'Surfaces non artificialisées',
                interactive: true,
                title: '<img src="styles/legend/Surfacesnonartificialises_13.png" /> Surfaces non artificialisées'
            });
var format_Surfacesartificialises_14 = new ol.format.GeoJSON();
var features_Surfacesartificialises_14 = format_Surfacesartificialises_14.readFeatures(json_Surfacesartificialises_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surfacesartificialises_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surfacesartificialises_14.addFeatures(features_Surfacesartificialises_14);
var lyr_Surfacesartificialises_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surfacesartificialises_14,
maxResolution:28.00446615226196,
 
                style: style_Surfacesartificialises_14,
                popuplayertitle: 'Surfaces artificialisées',
                interactive: true,
                title: '<img src="styles/legend/Surfacesartificialises_14.png" /> Surfaces artificialisées'
            });
var format_ZNIEFFType2_15 = new ol.format.GeoJSON();
var features_ZNIEFFType2_15 = format_ZNIEFFType2_15.readFeatures(json_ZNIEFFType2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNIEFFType2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNIEFFType2_15.addFeatures(features_ZNIEFFType2_15);
var lyr_ZNIEFFType2_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNIEFFType2_15, 
                style: style_ZNIEFFType2_15,
                popuplayertitle: 'ZNIEFF Type 2',
                interactive: true,
                title: '<img src="styles/legend/ZNIEFFType2_15.png" /> ZNIEFF Type 2'
            });
var format_ZNIEFFType1_16 = new ol.format.GeoJSON();
var features_ZNIEFFType1_16 = format_ZNIEFFType1_16.readFeatures(json_ZNIEFFType1_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNIEFFType1_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNIEFFType1_16.addFeatures(features_ZNIEFFType1_16);
var lyr_ZNIEFFType1_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNIEFFType1_16, 
                style: style_ZNIEFFType1_16,
                popuplayertitle: 'ZNIEFF Type 1',
                interactive: true,
                title: '<img src="styles/legend/ZNIEFFType1_16.png" /> ZNIEFF Type 1'
            });
var format_Zoneshumides_17 = new ol.format.GeoJSON();
var features_Zoneshumides_17 = format_Zoneshumides_17.readFeatures(json_Zoneshumides_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneshumides_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneshumides_17.addFeatures(features_Zoneshumides_17);
var lyr_Zoneshumides_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneshumides_17, 
                style: style_Zoneshumides_17,
                popuplayertitle: 'Zones humides',
                interactive: true,
                title: '<img src="styles/legend/Zoneshumides_17.png" /> Zones humides'
            });
var format_SitesNatura2000_18 = new ol.format.GeoJSON();
var features_SitesNatura2000_18 = format_SitesNatura2000_18.readFeatures(json_SitesNatura2000_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesNatura2000_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesNatura2000_18.addFeatures(features_SitesNatura2000_18);
var lyr_SitesNatura2000_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesNatura2000_18, 
                style: style_SitesNatura2000_18,
                popuplayertitle: 'Sites Natura 2000',
                interactive: true,
                title: '<img src="styles/legend/SitesNatura2000_18.png" /> Sites Natura 2000'
            });
var format_SiteNatura2000PaysdeBrayHumide_19 = new ol.format.GeoJSON();
var features_SiteNatura2000PaysdeBrayHumide_19 = format_SiteNatura2000PaysdeBrayHumide_19.readFeatures(json_SiteNatura2000PaysdeBrayHumide_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiteNatura2000PaysdeBrayHumide_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiteNatura2000PaysdeBrayHumide_19.addFeatures(features_SiteNatura2000PaysdeBrayHumide_19);
var lyr_SiteNatura2000PaysdeBrayHumide_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SiteNatura2000PaysdeBrayHumide_19, 
                style: style_SiteNatura2000PaysdeBrayHumide_19,
                popuplayertitle: 'Site Natura 2000 Pays de Bray Humide',
                interactive: true,
                title: '<img src="styles/legend/SiteNatura2000PaysdeBrayHumide_19.png" /> Site Natura 2000 Pays de Bray Humide'
            });
var format_ZAPCuestas_20 = new ol.format.GeoJSON();
var features_ZAPCuestas_20 = format_ZAPCuestas_20.readFeatures(json_ZAPCuestas_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZAPCuestas_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZAPCuestas_20.addFeatures(features_ZAPCuestas_20);
var lyr_ZAPCuestas_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZAPCuestas_20, 
                style: style_ZAPCuestas_20,
                popuplayertitle: 'ZAP Cuestas',
                interactive: true,
                title: '<img src="styles/legend/ZAPCuestas_20.png" /> ZAP Cuestas'
            });
var format_Sitesnaturelsclasss_21 = new ol.format.GeoJSON();
var features_Sitesnaturelsclasss_21 = format_Sitesnaturelsclasss_21.readFeatures(json_Sitesnaturelsclasss_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesnaturelsclasss_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesnaturelsclasss_21.addFeatures(features_Sitesnaturelsclasss_21);
var lyr_Sitesnaturelsclasss_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesnaturelsclasss_21, 
                style: style_Sitesnaturelsclasss_21,
                popuplayertitle: 'Sites naturels classés',
                interactive: true,
                title: '<img src="styles/legend/Sitesnaturelsclasss_21.png" /> Sites naturels classés'
            });
var format_Sitesnaturelsinscrits_22 = new ol.format.GeoJSON();
var features_Sitesnaturelsinscrits_22 = format_Sitesnaturelsinscrits_22.readFeatures(json_Sitesnaturelsinscrits_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesnaturelsinscrits_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesnaturelsinscrits_22.addFeatures(features_Sitesnaturelsinscrits_22);
var lyr_Sitesnaturelsinscrits_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesnaturelsinscrits_22, 
                style: style_Sitesnaturelsinscrits_22,
                popuplayertitle: 'Sites naturels inscrits',
                interactive: true,
                title: '<img src="styles/legend/Sitesnaturelsinscrits_22.png" /> Sites naturels inscrits'
            });
var format_CommunesensitePaysdeBrayHumide_23 = new ol.format.GeoJSON();
var features_CommunesensitePaysdeBrayHumide_23 = format_CommunesensitePaysdeBrayHumide_23.readFeatures(json_CommunesensitePaysdeBrayHumide_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesensitePaysdeBrayHumide_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunesensitePaysdeBrayHumide_23.addFeatures(features_CommunesensitePaysdeBrayHumide_23);
var lyr_CommunesensitePaysdeBrayHumide_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunesensitePaysdeBrayHumide_23, 
                style: style_CommunesensitePaysdeBrayHumide_23,
                popuplayertitle: 'Communes en site Pays de Bray Humide',
                interactive: true,
                title: '<img src="styles/legend/CommunesensitePaysdeBrayHumide_23.png" /> Communes en site Pays de Bray Humide'
            });
var format_Tramebocagre_24 = new ol.format.GeoJSON();
var features_Tramebocagre_24 = format_Tramebocagre_24.readFeatures(json_Tramebocagre_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tramebocagre_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tramebocagre_24.addFeatures(features_Tramebocagre_24);
var lyr_Tramebocagre_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tramebocagre_24, 
                style: style_Tramebocagre_24,
                popuplayertitle: 'Trame bocagère',
                interactive: true,
                title: '<img src="styles/legend/Tramebocagre_24.png" /> Trame bocagère'
            });
var format_Rservoirsboiss_25 = new ol.format.GeoJSON();
var features_Rservoirsboiss_25 = format_Rservoirsboiss_25.readFeatures(json_Rservoirsboiss_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rservoirsboiss_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rservoirsboiss_25.addFeatures(features_Rservoirsboiss_25);
var lyr_Rservoirsboiss_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rservoirsboiss_25, 
                style: style_Rservoirsboiss_25,
                popuplayertitle: 'Réservoirs boisés',
                interactive: true,
                title: '<img src="styles/legend/Rservoirsboiss_25.png" /> Réservoirs boisés'
            });
var format_Corridorshumides_26 = new ol.format.GeoJSON();
var features_Corridorshumides_26 = format_Corridorshumides_26.readFeatures(json_Corridorshumides_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corridorshumides_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corridorshumides_26.addFeatures(features_Corridorshumides_26);
var lyr_Corridorshumides_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corridorshumides_26, 
                style: style_Corridorshumides_26,
                popuplayertitle: 'Corridors humides',
                interactive: true,
                title: '<img src="styles/legend/Corridorshumides_26.png" /> Corridors humides'
            });
var format_Rservoirshumides_27 = new ol.format.GeoJSON();
var features_Rservoirshumides_27 = format_Rservoirshumides_27.readFeatures(json_Rservoirshumides_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rservoirshumides_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rservoirshumides_27.addFeatures(features_Rservoirshumides_27);
var lyr_Rservoirshumides_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rservoirshumides_27, 
                style: style_Rservoirshumides_27,
                popuplayertitle: 'Réservoirs humides',
                interactive: true,
                title: '<img src="styles/legend/Rservoirshumides_27.png" /> Réservoirs humides'
            });
var format_Dpriseagricole_28 = new ol.format.GeoJSON();
var features_Dpriseagricole_28 = format_Dpriseagricole_28.readFeatures(json_Dpriseagricole_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpriseagricole_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpriseagricole_28.addFeatures(features_Dpriseagricole_28);
var lyr_Dpriseagricole_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dpriseagricole_28, 
                style: style_Dpriseagricole_28,
                popuplayertitle: 'Déprise agricole',
                interactive: true,
                title: '<img src="styles/legend/Dpriseagricole_28.png" /> Déprise agricole'
            });
var format_Rseaucalcicolepotentiel_29 = new ol.format.GeoJSON();
var features_Rseaucalcicolepotentiel_29 = format_Rseaucalcicolepotentiel_29.readFeatures(json_Rseaucalcicolepotentiel_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rseaucalcicolepotentiel_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rseaucalcicolepotentiel_29.addFeatures(features_Rseaucalcicolepotentiel_29);
var lyr_Rseaucalcicolepotentiel_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rseaucalcicolepotentiel_29, 
                style: style_Rseaucalcicolepotentiel_29,
                popuplayertitle: 'Réseau calcicole potentiel',
                interactive: true,
                title: '<img src="styles/legend/Rseaucalcicolepotentiel_29.png" /> Réseau calcicole potentiel'
            });
var format_Rservoirscalcicoles_30 = new ol.format.GeoJSON();
var features_Rservoirscalcicoles_30 = format_Rservoirscalcicoles_30.readFeatures(json_Rservoirscalcicoles_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rservoirscalcicoles_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rservoirscalcicoles_30.addFeatures(features_Rservoirscalcicoles_30);
var lyr_Rservoirscalcicoles_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rservoirscalcicoles_30, 
                style: style_Rservoirscalcicoles_30,
                popuplayertitle: 'Réservoirs calcicoles',
                interactive: true,
                title: '<img src="styles/legend/Rservoirscalcicoles_30.png" /> Réservoirs calcicoles'
            });
var format_Tramecalcicole_31 = new ol.format.GeoJSON();
var features_Tramecalcicole_31 = format_Tramecalcicole_31.readFeatures(json_Tramecalcicole_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tramecalcicole_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tramecalcicole_31.addFeatures(features_Tramecalcicole_31);
var lyr_Tramecalcicole_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tramecalcicole_31, 
                style: style_Tramecalcicole_31,
                popuplayertitle: 'Trame calcicole',
                interactive: true,
                title: '<img src="styles/legend/Tramecalcicole_31.png" /> Trame calcicole'
            });
var format_Rservoirssilicicoles_32 = new ol.format.GeoJSON();
var features_Rservoirssilicicoles_32 = format_Rservoirssilicicoles_32.readFeatures(json_Rservoirssilicicoles_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rservoirssilicicoles_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rservoirssilicicoles_32.addFeatures(features_Rservoirssilicicoles_32);
var lyr_Rservoirssilicicoles_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rservoirssilicicoles_32, 
                style: style_Rservoirssilicicoles_32,
                popuplayertitle: 'Réservoirs silicicoles',
                interactive: true,
                title: '<img src="styles/legend/Rservoirssilicicoles_32.png" /> Réservoirs silicicoles'
            });
var format_Primtresdepointsdecaptages_33 = new ol.format.GeoJSON();
var features_Primtresdepointsdecaptages_33 = format_Primtresdepointsdecaptages_33.readFeatures(json_Primtresdepointsdecaptages_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primtresdepointsdecaptages_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primtresdepointsdecaptages_33.addFeatures(features_Primtresdepointsdecaptages_33);
var lyr_Primtresdepointsdecaptages_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primtresdepointsdecaptages_33, 
                style: style_Primtresdepointsdecaptages_33,
                popuplayertitle: 'Périmètres de points de captages',
                interactive: true,
                title: '<img src="styles/legend/Primtresdepointsdecaptages_33.png" /> Périmètres de points de captages'
            });
var format_Corridorsaquatiques_34 = new ol.format.GeoJSON();
var features_Corridorsaquatiques_34 = format_Corridorsaquatiques_34.readFeatures(json_Corridorsaquatiques_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corridorsaquatiques_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corridorsaquatiques_34.addFeatures(features_Corridorsaquatiques_34);
var lyr_Corridorsaquatiques_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corridorsaquatiques_34, 
                style: style_Corridorsaquatiques_34,
                popuplayertitle: 'Corridors aquatiques',
                interactive: true,
                title: '<img src="styles/legend/Corridorsaquatiques_34.png" /> Corridors aquatiques'
            });
var format_Rservoirsaquatiques_35 = new ol.format.GeoJSON();
var features_Rservoirsaquatiques_35 = format_Rservoirsaquatiques_35.readFeatures(json_Rservoirsaquatiques_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rservoirsaquatiques_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rservoirsaquatiques_35.addFeatures(features_Rservoirsaquatiques_35);
var lyr_Rservoirsaquatiques_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rservoirsaquatiques_35, 
                style: style_Rservoirsaquatiques_35,
                popuplayertitle: 'Réservoirs aquatiques',
                interactive: true,
                title: '<img src="styles/legend/Rservoirsaquatiques_35.png" /> Réservoirs aquatiques'
            });
var format_SMBVdelEpte_36 = new ol.format.GeoJSON();
var features_SMBVdelEpte_36 = format_SMBVdelEpte_36.readFeatures(json_SMBVdelEpte_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelEpte_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelEpte_36.addFeatures(features_SMBVdelEpte_36);
var lyr_SMBVdelEpte_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelEpte_36, 
                style: style_SMBVdelEpte_36,
                popuplayertitle: 'SMBV de l\'Epte',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelEpte_36.png" /> SMBV de l\'Epte'
            });
var format_SMBVdelAndelle_37 = new ol.format.GeoJSON();
var features_SMBVdelAndelle_37 = format_SMBVdelAndelle_37.readFeatures(json_SMBVdelAndelle_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelAndelle_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelAndelle_37.addFeatures(features_SMBVdelAndelle_37);
var lyr_SMBVdelAndelle_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelAndelle_37, 
                style: style_SMBVdelAndelle_37,
                popuplayertitle: 'SMBV de l\'Andelle',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelAndelle_37.png" /> SMBV de l\'Andelle'
            });
var format_SMBVdelaBresle_38 = new ol.format.GeoJSON();
var features_SMBVdelaBresle_38 = format_SMBVdelaBresle_38.readFeatures(json_SMBVdelaBresle_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelaBresle_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelaBresle_38.addFeatures(features_SMBVdelaBresle_38);
var lyr_SMBVdelaBresle_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelaBresle_38, 
                style: style_SMBVdelaBresle_38,
                popuplayertitle: 'SMBV de la Bresle',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelaBresle_38.png" /> SMBV de la Bresle'
            });
var format_SMBVdelYres_39 = new ol.format.GeoJSON();
var features_SMBVdelYres_39 = format_SMBVdelYres_39.readFeatures(json_SMBVdelYres_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelYres_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelYres_39.addFeatures(features_SMBVdelYres_39);
var lyr_SMBVdelYres_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelYres_39, 
                style: style_SMBVdelYres_39,
                popuplayertitle: 'SMBV de l\'Yères',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelYres_39.png" /> SMBV de l\'Yères'
            });
var format_SMBVdelArques_40 = new ol.format.GeoJSON();
var features_SMBVdelArques_40 = format_SMBVdelArques_40.readFeatures(json_SMBVdelArques_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelArques_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelArques_40.addFeatures(features_SMBVdelArques_40);
var lyr_SMBVdelArques_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelArques_40, 
                style: style_SMBVdelArques_40,
                popuplayertitle: 'SMBV de l\'Arques',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelArques_40.png" /> SMBV de l\'Arques'
            });
var format_SMBVCaillyAubetteRobec_41 = new ol.format.GeoJSON();
var features_SMBVCaillyAubetteRobec_41 = format_SMBVCaillyAubetteRobec_41.readFeatures(json_SMBVCaillyAubetteRobec_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVCaillyAubetteRobec_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVCaillyAubetteRobec_41.addFeatures(features_SMBVCaillyAubetteRobec_41);
var lyr_SMBVCaillyAubetteRobec_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVCaillyAubetteRobec_41, 
                style: style_SMBVCaillyAubetteRobec_41,
                popuplayertitle: 'SMBV Cailly-Aubette-Robec',
                interactive: true,
                title: '<img src="styles/legend/SMBVCaillyAubetteRobec_41.png" /> SMBV Cailly-Aubette-Robec'
            });
var format_Zonesdevgtation_42 = new ol.format.GeoJSON();
var features_Zonesdevgtation_42 = format_Zonesdevgtation_42.readFeatures(json_Zonesdevgtation_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesdevgtation_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesdevgtation_42.addFeatures(features_Zonesdevgtation_42);
var lyr_Zonesdevgtation_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesdevgtation_42,
maxResolution:28.00446615226196,
 
                style: style_Zonesdevgtation_42,
                popuplayertitle: 'Zones de végétation',
                interactive: true,
    title: 'Zones de végétation<br />\
    <img src="styles/legend/Zonesdevgtation_42_0.png" /> Bois<br />\
    <img src="styles/legend/Zonesdevgtation_42_1.png" /> Forêt fermée de conifères<br />\
    <img src="styles/legend/Zonesdevgtation_42_2.png" /> Forêt fermée de feuillus<br />\
    <img src="styles/legend/Zonesdevgtation_42_3.png" /> Forêt fermée mixte<br />\
    <img src="styles/legend/Zonesdevgtation_42_4.png" /> Forêt ouverte<br />\
    <img src="styles/legend/Zonesdevgtation_42_5.png" /> Haie<br />\
    <img src="styles/legend/Zonesdevgtation_42_6.png" /> Lande ligneuse<br />\
    <img src="styles/legend/Zonesdevgtation_42_7.png" /> Peupleraie<br />\
    <img src="styles/legend/Zonesdevgtation_42_8.png" /> Verger<br />' });
var format_HabitatsdIntrtCommunautaire_43 = new ol.format.GeoJSON();
var features_HabitatsdIntrtCommunautaire_43 = format_HabitatsdIntrtCommunautaire_43.readFeatures(json_HabitatsdIntrtCommunautaire_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HabitatsdIntrtCommunautaire_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HabitatsdIntrtCommunautaire_43.addFeatures(features_HabitatsdIntrtCommunautaire_43);
var lyr_HabitatsdIntrtCommunautaire_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HabitatsdIntrtCommunautaire_43, 
                style: style_HabitatsdIntrtCommunautaire_43,
                popuplayertitle: 'Habitats d\'Intérêt Communautaire',
                interactive: true,
    title: 'Habitats d\'Intérêt Communautaire<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_0.png" /> Communauté basale à Jonc bulbeux<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_1.png" /> Herbier des eaux douces à Characées<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_2.png" /> Plans d\'eau eutrophes avec végétation [...]<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_3.png" /> Végétation flottante non enracinée [...]<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_4.png" /> Plans d\'eau eutrophes avec dominance de macrophytes [...]<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_5.png" /> Pelouses acidiphiles subatlantiques à nord-atlantiques<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_6.png" /> Prés humides et bas-marais acidiphiles atlantiques<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_7.png" /> Mégaphoribiaies eutrophes des eaux douces<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_8.png" /> Ourlet à Anthrisque sauvage<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_9.png" /> Prairie de fauche à Luzule des prés et Brom mou<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_10.png" /> Prairies fauchées collinéennes à submontagnardes [...]<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_11.png" /> Prairies fauchées collinéennes à submontagnardes [...]<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_12.png" /> Tourbière haute active atlantique<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_13.png" /> Végétation dégardée des tourbières hautes actives [...]<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_14.png" /> Cariçaie à Jonc à tépales aigus et Laîche filiforme<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_15.png" /> Hêtraies-chênaies collinéennes à Houx<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_16.png" /> Hêtraies-chênaies à jacinthe des bois<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_17.png" /> Boulaies pubescentes tourbeuses de plaine<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_18.png" /> Forêt caducifoliée riveraine de l\'Europe tempérée<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_19.png" /> Frênaies-ornaies atlantiques à Aegopode des rivières [...]<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_20.png" /> Végétation flottante non enracinée eutrophile<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_21.png" /> Lande atlantique sèche<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_22.png" /> Prairie extensive hygrophile à mésohygrophile<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_23.png" /> Rivières, canaux et fossés eutrophes des marais naturels<br />\
    <img src="styles/legend/HabitatsdIntrtCommunautaire_43_24.png" /> Ruisseaux et petites rivières eutrophes neutres à basiques<br />' });
var format_Haies_44 = new ol.format.GeoJSON();
var features_Haies_44 = format_Haies_44.readFeatures(json_Haies_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Haies_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haies_44.addFeatures(features_Haies_44);
var lyr_Haies_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haies_44,
maxResolution:28.00446615226196,
 
                style: style_Haies_44,
                popuplayertitle: 'Haies',
                interactive: true,
                title: '<img src="styles/legend/Haies_44.png" /> Haies'
            });
var format_Surfaceshydrographiques_45 = new ol.format.GeoJSON();
var features_Surfaceshydrographiques_45 = format_Surfaceshydrographiques_45.readFeatures(json_Surfaceshydrographiques_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surfaceshydrographiques_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surfaceshydrographiques_45.addFeatures(features_Surfaceshydrographiques_45);
var lyr_Surfaceshydrographiques_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surfaceshydrographiques_45, 
                style: style_Surfaceshydrographiques_45,
                popuplayertitle: 'Surfaces hydrographiques',
                interactive: true,
                title: '<img src="styles/legend/Surfaceshydrographiques_45.png" /> Surfaces hydrographiques'
            });
var format_Coursdeau_46 = new ol.format.GeoJSON();
var features_Coursdeau_46 = format_Coursdeau_46.readFeatures(json_Coursdeau_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coursdeau_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coursdeau_46.addFeatures(features_Coursdeau_46);
var lyr_Coursdeau_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coursdeau_46,
maxResolution:28.00446615226196,
 
                style: style_Coursdeau_46,
                popuplayertitle: 'Cours d\'eau',
                interactive: true,
                title: '<img src="styles/legend/Coursdeau_46.png" /> Cours d\'eau'
            });
var format_Mares_47 = new ol.format.GeoJSON();
var features_Mares_47 = format_Mares_47.readFeatures(json_Mares_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mares_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mares_47.addFeatures(features_Mares_47);
var lyr_Mares_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mares_47, 
                style: style_Mares_47,
                popuplayertitle: 'Mares',
                interactive: true,
                title: '<img src="styles/legend/Mares_47.png" /> Mares'
            });
var format_Sitespollus_48 = new ol.format.GeoJSON();
var features_Sitespollus_48 = format_Sitespollus_48.readFeatures(json_Sitespollus_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitespollus_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitespollus_48.addFeatures(features_Sitespollus_48);
var lyr_Sitespollus_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitespollus_48, 
                style: style_Sitespollus_48,
                popuplayertitle: 'Sites pollués',
                interactive: true,
                title: '<img src="styles/legend/Sitespollus_48.png" /> Sites pollués'
            });
var format_SitesBASOL_49 = new ol.format.GeoJSON();
var features_SitesBASOL_49 = format_SitesBASOL_49.readFeatures(json_SitesBASOL_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesBASOL_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesBASOL_49.addFeatures(features_SitesBASOL_49);
var lyr_SitesBASOL_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesBASOL_49, 
                style: style_SitesBASOL_49,
                popuplayertitle: 'Sites BASOL',
                interactive: true,
                title: '<img src="styles/legend/SitesBASOL_49.png" /> Sites BASOL'
            });
var format_SAEPABraySudBacRouvrayCatillon_50 = new ol.format.GeoJSON();
var features_SAEPABraySudBacRouvrayCatillon_50 = format_SAEPABraySudBacRouvrayCatillon_50.readFeatures(json_SAEPABraySudBacRouvrayCatillon_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAEPABraySudBacRouvrayCatillon_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAEPABraySudBacRouvrayCatillon_50.addFeatures(features_SAEPABraySudBacRouvrayCatillon_50);
var lyr_SAEPABraySudBacRouvrayCatillon_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAEPABraySudBacRouvrayCatillon_50, 
                style: style_SAEPABraySudBacRouvrayCatillon_50,
                popuplayertitle: 'SAEPA Bray Sud - Bac Rouvray-Catillon',
                interactive: true,
                title: '<img src="styles/legend/SAEPABraySudBacRouvrayCatillon_50.png" /> SAEPA Bray Sud - Bac Rouvray-Catillon'
            });
var format_SAEPABraySudBacMesnilLieubray_51 = new ol.format.GeoJSON();
var features_SAEPABraySudBacMesnilLieubray_51 = format_SAEPABraySudBacMesnilLieubray_51.readFeatures(json_SAEPABraySudBacMesnilLieubray_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAEPABraySudBacMesnilLieubray_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAEPABraySudBacMesnilLieubray_51.addFeatures(features_SAEPABraySudBacMesnilLieubray_51);
var lyr_SAEPABraySudBacMesnilLieubray_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAEPABraySudBacMesnilLieubray_51, 
                style: style_SAEPABraySudBacMesnilLieubray_51,
                popuplayertitle: 'SAEPA Bray Sud - Bac Mesnil-Lieubray',
                interactive: true,
                title: '<img src="styles/legend/SAEPABraySudBacMesnilLieubray_51.png" /> SAEPA Bray Sud - Bac Mesnil-Lieubray'
            });
var format_SAEPABraySudBacGisors_52 = new ol.format.GeoJSON();
var features_SAEPABraySudBacGisors_52 = format_SAEPABraySudBacGisors_52.readFeatures(json_SAEPABraySudBacGisors_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAEPABraySudBacGisors_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAEPABraySudBacGisors_52.addFeatures(features_SAEPABraySudBacGisors_52);
var lyr_SAEPABraySudBacGisors_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAEPABraySudBacGisors_52, 
                style: style_SAEPABraySudBacGisors_52,
                popuplayertitle: 'SAEPA Bray Sud - Bac Gisors',
                interactive: true,
                title: '<img src="styles/legend/SAEPABraySudBacGisors_52.png" /> SAEPA Bray Sud - Bac Gisors'
            });
var format_SIAEPA3SourcesBacSommery_53 = new ol.format.GeoJSON();
var features_SIAEPA3SourcesBacSommery_53 = format_SIAEPA3SourcesBacSommery_53.readFeatures(json_SIAEPA3SourcesBacSommery_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIAEPA3SourcesBacSommery_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIAEPA3SourcesBacSommery_53.addFeatures(features_SIAEPA3SourcesBacSommery_53);
var lyr_SIAEPA3SourcesBacSommery_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIAEPA3SourcesBacSommery_53, 
                style: style_SIAEPA3SourcesBacSommery_53,
                popuplayertitle: 'SIAEPA 3 Sources - Bac Sommery',
                interactive: true,
                title: '<img src="styles/legend/SIAEPA3SourcesBacSommery_53.png" /> SIAEPA 3 Sources - Bac Sommery'
            });
var format_SIAEPA3SourcesBacMonterolier_54 = new ol.format.GeoJSON();
var features_SIAEPA3SourcesBacMonterolier_54 = format_SIAEPA3SourcesBacMonterolier_54.readFeatures(json_SIAEPA3SourcesBacMonterolier_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIAEPA3SourcesBacMonterolier_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIAEPA3SourcesBacMonterolier_54.addFeatures(features_SIAEPA3SourcesBacMonterolier_54);
var lyr_SIAEPA3SourcesBacMonterolier_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIAEPA3SourcesBacMonterolier_54, 
                style: style_SIAEPA3SourcesBacMonterolier_54,
                popuplayertitle: 'SIAEPA 3 Sources - Bac Monterolier',
                interactive: true,
                title: '<img src="styles/legend/SIAEPA3SourcesBacMonterolier_54.png" /> SIAEPA 3 Sources - Bac Monterolier'
            });
var format_SIAEPA02BrayBacStGermainsurEaulne_55 = new ol.format.GeoJSON();
var features_SIAEPA02BrayBacStGermainsurEaulne_55 = format_SIAEPA02BrayBacStGermainsurEaulne_55.readFeatures(json_SIAEPA02BrayBacStGermainsurEaulne_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIAEPA02BrayBacStGermainsurEaulne_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIAEPA02BrayBacStGermainsurEaulne_55.addFeatures(features_SIAEPA02BrayBacStGermainsurEaulne_55);
var lyr_SIAEPA02BrayBacStGermainsurEaulne_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIAEPA02BrayBacStGermainsurEaulne_55, 
                style: style_SIAEPA02BrayBacStGermainsurEaulne_55,
                popuplayertitle: 'SIAEPA 02 Bray - Bac St-Germain-sur-Eaulne',
                interactive: true,
                title: '<img src="styles/legend/SIAEPA02BrayBacStGermainsurEaulne_55.png" /> SIAEPA 02 Bray - Bac St-Germain-sur-Eaulne'
            });
var format_SIAEPA02BrayBacNeuvilles_56 = new ol.format.GeoJSON();
var features_SIAEPA02BrayBacNeuvilles_56 = format_SIAEPA02BrayBacNeuvilles_56.readFeatures(json_SIAEPA02BrayBacNeuvilles_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIAEPA02BrayBacNeuvilles_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIAEPA02BrayBacNeuvilles_56.addFeatures(features_SIAEPA02BrayBacNeuvilles_56);
var lyr_SIAEPA02BrayBacNeuvilles_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIAEPA02BrayBacNeuvilles_56, 
                style: style_SIAEPA02BrayBacNeuvilles_56,
                popuplayertitle: 'SIAEPA 02 Bray - Bac Neuvilles',
                interactive: true,
                title: '<img src="styles/legend/SIAEPA02BrayBacNeuvilles_56.png" /> SIAEPA 02 Bray - Bac Neuvilles'
            });
var format_SIAEPA02BrayBacNesleHodengBeaussault_57 = new ol.format.GeoJSON();
var features_SIAEPA02BrayBacNesleHodengBeaussault_57 = format_SIAEPA02BrayBacNesleHodengBeaussault_57.readFeatures(json_SIAEPA02BrayBacNesleHodengBeaussault_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIAEPA02BrayBacNesleHodengBeaussault_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIAEPA02BrayBacNesleHodengBeaussault_57.addFeatures(features_SIAEPA02BrayBacNesleHodengBeaussault_57);
var lyr_SIAEPA02BrayBacNesleHodengBeaussault_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIAEPA02BrayBacNesleHodengBeaussault_57, 
                style: style_SIAEPA02BrayBacNesleHodengBeaussault_57,
                popuplayertitle: 'SIAEPA 02 Bray - Bac Nesle-Hodeng-Beaussault',
                interactive: true,
                title: '<img src="styles/legend/SIAEPA02BrayBacNesleHodengBeaussault_57.png" /> SIAEPA 02 Bray - Bac Nesle-Hodeng-Beaussault'
            });
var format_SIAEPA02BrayBacMesnires_58 = new ol.format.GeoJSON();
var features_SIAEPA02BrayBacMesnires_58 = format_SIAEPA02BrayBacMesnires_58.readFeatures(json_SIAEPA02BrayBacMesnires_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIAEPA02BrayBacMesnires_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIAEPA02BrayBacMesnires_58.addFeatures(features_SIAEPA02BrayBacMesnires_58);
var lyr_SIAEPA02BrayBacMesnires_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIAEPA02BrayBacMesnires_58, 
                style: style_SIAEPA02BrayBacMesnires_58,
                popuplayertitle: 'SIAEPA 02 Bray - Bac Mesnières',
                interactive: true,
                title: '<img src="styles/legend/SIAEPA02BrayBacMesnires_58.png" /> SIAEPA 02 Bray - Bac Mesnières'
            });
var format_SIAEPA02BrayBacEsclavelles_59 = new ol.format.GeoJSON();
var features_SIAEPA02BrayBacEsclavelles_59 = format_SIAEPA02BrayBacEsclavelles_59.readFeatures(json_SIAEPA02BrayBacEsclavelles_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIAEPA02BrayBacEsclavelles_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIAEPA02BrayBacEsclavelles_59.addFeatures(features_SIAEPA02BrayBacEsclavelles_59);
var lyr_SIAEPA02BrayBacEsclavelles_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIAEPA02BrayBacEsclavelles_59, 
                style: style_SIAEPA02BrayBacEsclavelles_59,
                popuplayertitle: 'SIAEPA 02 Bray - Bac Esclavelles',
                interactive: true,
                title: '<img src="styles/legend/SIAEPA02BrayBacEsclavelles_59.png" /> SIAEPA 02 Bray - Bac Esclavelles'
            });
var format_SIAEPA02BrayBacBully_60 = new ol.format.GeoJSON();
var features_SIAEPA02BrayBacBully_60 = format_SIAEPA02BrayBacBully_60.readFeatures(json_SIAEPA02BrayBacBully_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIAEPA02BrayBacBully_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIAEPA02BrayBacBully_60.addFeatures(features_SIAEPA02BrayBacBully_60);
var lyr_SIAEPA02BrayBacBully_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIAEPA02BrayBacBully_60, 
                style: style_SIAEPA02BrayBacBully_60,
                popuplayertitle: 'SIAEPA 02 Bray - Bac Bully',
                interactive: true,
                title: '<img src="styles/legend/SIAEPA02BrayBacBully_60.png" /> SIAEPA 02 Bray - Bac Bully'
            });
var format_Foyersfloristiques_61 = new ol.format.GeoJSON();
var features_Foyersfloristiques_61 = format_Foyersfloristiques_61.readFeatures(json_Foyersfloristiques_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Foyersfloristiques_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Foyersfloristiques_61.addFeatures(features_Foyersfloristiques_61);
var lyr_Foyersfloristiques_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Foyersfloristiques_61, 
                style: style_Foyersfloristiques_61,
                popuplayertitle: 'Foyers floristiques',
                interactive: true,
                title: '<img src="styles/legend/Foyersfloristiques_61.png" /> Foyers floristiques'
            });
var format_Linairedcrevissespiedsblancs_62 = new ol.format.GeoJSON();
var features_Linairedcrevissespiedsblancs_62 = format_Linairedcrevissespiedsblancs_62.readFeatures(json_Linairedcrevissespiedsblancs_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linairedcrevissespiedsblancs_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linairedcrevissespiedsblancs_62.addFeatures(features_Linairedcrevissespiedsblancs_62);
var lyr_Linairedcrevissespiedsblancs_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linairedcrevissespiedsblancs_62, 
                style: style_Linairedcrevissespiedsblancs_62,
                popuplayertitle: 'Linéaire d\'écrevisses pieds blancs',
                interactive: true,
                title: '<img src="styles/legend/Linairedcrevissespiedsblancs_62.png" /> Linéaire d\'écrevisses pieds blancs'
            });
var format_Foyersdcrevissespiedsblancs_63 = new ol.format.GeoJSON();
var features_Foyersdcrevissespiedsblancs_63 = format_Foyersdcrevissespiedsblancs_63.readFeatures(json_Foyersdcrevissespiedsblancs_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Foyersdcrevissespiedsblancs_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Foyersdcrevissespiedsblancs_63.addFeatures(features_Foyersdcrevissespiedsblancs_63);
var lyr_Foyersdcrevissespiedsblancs_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Foyersdcrevissespiedsblancs_63, 
                style: style_Foyersdcrevissespiedsblancs_63,
                popuplayertitle: 'Foyers d\'écrevisses pieds blancs',
                interactive: true,
                title: '<img src="styles/legend/Foyersdcrevissespiedsblancs_63.png" /> Foyers d\'écrevisses pieds blancs'
            });
var format_LinairedcrevissesdeCalifornie_64 = new ol.format.GeoJSON();
var features_LinairedcrevissesdeCalifornie_64 = format_LinairedcrevissesdeCalifornie_64.readFeatures(json_LinairedcrevissesdeCalifornie_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinairedcrevissesdeCalifornie_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinairedcrevissesdeCalifornie_64.addFeatures(features_LinairedcrevissesdeCalifornie_64);
var lyr_LinairedcrevissesdeCalifornie_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinairedcrevissesdeCalifornie_64, 
                style: style_LinairedcrevissesdeCalifornie_64,
                popuplayertitle: 'Linéaire d\'écrevisses de Californie',
                interactive: true,
                title: '<img src="styles/legend/LinairedcrevissesdeCalifornie_64.png" /> Linéaire d\'écrevisses de Californie'
            });
var format_FoyersdcrevissesdeCalifornie_65 = new ol.format.GeoJSON();
var features_FoyersdcrevissesdeCalifornie_65 = format_FoyersdcrevissesdeCalifornie_65.readFeatures(json_FoyersdcrevissesdeCalifornie_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoyersdcrevissesdeCalifornie_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoyersdcrevissesdeCalifornie_65.addFeatures(features_FoyersdcrevissesdeCalifornie_65);
var lyr_FoyersdcrevissesdeCalifornie_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FoyersdcrevissesdeCalifornie_65, 
                style: style_FoyersdcrevissesdeCalifornie_65,
                popuplayertitle: 'Foyers d\'écrevisses de Californie',
                interactive: true,
                title: '<img src="styles/legend/FoyersdcrevissesdeCalifornie_65.png" /> Foyers d\'écrevisses de Californie'
            });
var format_Tourbire_66 = new ol.format.GeoJSON();
var features_Tourbire_66 = format_Tourbire_66.readFeatures(json_Tourbire_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tourbire_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tourbire_66.addFeatures(features_Tourbire_66);
var lyr_Tourbire_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tourbire_66, 
                style: style_Tourbire_66,
                popuplayertitle: 'Tourbière',
                interactive: true,
                title: '<img src="styles/legend/Tourbire_66.png" /> Tourbière'
            });
var format_Observationsfaunistiquesetfloristiques_67 = new ol.format.GeoJSON();
var features_Observationsfaunistiquesetfloristiques_67 = format_Observationsfaunistiquesetfloristiques_67.readFeatures(json_Observationsfaunistiquesetfloristiques_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Observationsfaunistiquesetfloristiques_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Observationsfaunistiquesetfloristiques_67.addFeatures(features_Observationsfaunistiquesetfloristiques_67);
var lyr_Observationsfaunistiquesetfloristiques_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Observationsfaunistiquesetfloristiques_67, 
                style: style_Observationsfaunistiquesetfloristiques_67,
                popuplayertitle: 'Observations faunistiques et floristiques',
                interactive: true,
    title: 'Observations faunistiques et floristiques<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_0.png" /> Alyte accoucheur<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_1.png" /> Baldingère faux-roseau / Alpiste faux-roseau<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_2.png" /> Callitriche<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_3.png" /> Cornifle / Cératophylle<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_4.png" /> Crapaud commun<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_5.png" /> Épilobe à petites fleurs<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_6.png" /> Épilobe hérissé<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_7.png" /> Grenouille agile<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_8.png" /> Grenouille commune<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_9.png" /> Grenouille rieuse<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_10.png" /> Grenouille rousse<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_11.png" /> Jonc épars<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_12.png" /> Laîche pendante<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_13.png" /> Lenticule / Lentille d\'eau<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_14.png" /> Lentille d\'eau à plusieurs racines<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_15.png" /> Lentille d\'eau à trois lobes<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_16.png" /> Massette<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_17.png" /> Menthe aquatique<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_18.png" /> Morelle douce-amère<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_19.png" /> Petite lentille d\'eau<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_20.png" /> Rainette verte<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_21.png" /> Renoncule<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_22.png" /> Renoncule peltée<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_23.png" /> Renoncule scélérate<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_24.png" /> Renouée persicaire / Persicaire<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_25.png" /> Rubanier simple<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_26.png" /> Salamandre tachetée<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_27.png" /> Symphorine blanche<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_28.png" /> Triton alpestre<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_29.png" /> Triton crêté<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_30.png" /> Triton palmé<br />\
    <img src="styles/legend/Observationsfaunistiquesetfloristiques_67_31.png" /> Triton ponctué<br />' });
var format_InventaireOBHEN_68 = new ol.format.GeoJSON();
var features_InventaireOBHEN_68 = format_InventaireOBHEN_68.readFeatures(json_InventaireOBHEN_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InventaireOBHEN_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InventaireOBHEN_68.addFeatures(features_InventaireOBHEN_68);
var lyr_InventaireOBHEN_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InventaireOBHEN_68, 
                style: style_InventaireOBHEN_68,
                popuplayertitle: 'Inventaire OBHEN',
                interactive: true,
    title: 'Inventaire OBHEN<br />\
    <img src="styles/legend/InventaireOBHEN_68_0.png" /> Amphibien<br />\
    <img src="styles/legend/InventaireOBHEN_68_1.png" /> Reptile<br />\
    <img src="styles/legend/InventaireOBHEN_68_2.png" /> Indifférencié<br />' });
var format_Quelquesespcesenjeuxdeprservation_69 = new ol.format.GeoJSON();
var features_Quelquesespcesenjeuxdeprservation_69 = format_Quelquesespcesenjeuxdeprservation_69.readFeatures(json_Quelquesespcesenjeuxdeprservation_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quelquesespcesenjeuxdeprservation_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quelquesespcesenjeuxdeprservation_69.addFeatures(features_Quelquesespcesenjeuxdeprservation_69);
var lyr_Quelquesespcesenjeuxdeprservation_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quelquesespcesenjeuxdeprservation_69, 
                style: style_Quelquesespcesenjeuxdeprservation_69,
                popuplayertitle: 'Quelques espèces à enjeux de préservation',
                interactive: true,
    title: 'Quelques espèces à enjeux de préservation<br />\
    <img src="styles/legend/Quelquesespcesenjeuxdeprservation_69_0.png" /> Grenouille agile<br />\
    <img src="styles/legend/Quelquesespcesenjeuxdeprservation_69_1.png" /> Leste dryas<br />\
    <img src="styles/legend/Quelquesespcesenjeuxdeprservation_69_2.png" /> Lézard vivipare<br />\
    <img src="styles/legend/Quelquesespcesenjeuxdeprservation_69_3.png" /> Orchis de mai<br />\
    <img src="styles/legend/Quelquesespcesenjeuxdeprservation_69_4.png" /> Poirier sauvage<br />\
    <img src="styles/legend/Quelquesespcesenjeuxdeprservation_69_5.png" /> Rainette verte<br />\
    <img src="styles/legend/Quelquesespcesenjeuxdeprservation_69_6.png" /> Renoncule à feuilles de lierre<br />\
    <img src="styles/legend/Quelquesespcesenjeuxdeprservation_69_7.png" /> Tourterelle des bois<br />\
    <img src="styles/legend/Quelquesespcesenjeuxdeprservation_69_8.png" /> Triton crêté<br />\
    <img src="styles/legend/Quelquesespcesenjeuxdeprservation_69_9.png" /> Triton ponctué<br />\
    <img src="styles/legend/Quelquesespcesenjeuxdeprservation_69_10.png" /> Vipère péliade<br />' });
var format_Inventairesparanne_70 = new ol.format.GeoJSON();
var features_Inventairesparanne_70 = format_Inventairesparanne_70.readFeatures(json_Inventairesparanne_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inventairesparanne_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inventairesparanne_70.addFeatures(features_Inventairesparanne_70);
var lyr_Inventairesparanne_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inventairesparanne_70, 
                style: style_Inventairesparanne_70,
                popuplayertitle: 'Inventaires par année',
                interactive: true,
    title: 'Inventaires par année<br />\
    <img src="styles/legend/Inventairesparanne_70_0.png" /> 2015<br />\
    <img src="styles/legend/Inventairesparanne_70_1.png" /> 2019<br />' });
var format_PopulationpiscicoledIntrtCommunautaire_71 = new ol.format.GeoJSON();
var features_PopulationpiscicoledIntrtCommunautaire_71 = format_PopulationpiscicoledIntrtCommunautaire_71.readFeatures(json_PopulationpiscicoledIntrtCommunautaire_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationpiscicoledIntrtCommunautaire_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationpiscicoledIntrtCommunautaire_71.addFeatures(features_PopulationpiscicoledIntrtCommunautaire_71);
var lyr_PopulationpiscicoledIntrtCommunautaire_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PopulationpiscicoledIntrtCommunautaire_71, 
                style: style_PopulationpiscicoledIntrtCommunautaire_71,
                popuplayertitle: 'Population piscicole d\'Intérêt Communautaire',
                interactive: true,
                title: '<img src="styles/legend/PopulationpiscicoledIntrtCommunautaire_71.png" /> Population piscicole d\'Intérêt Communautaire'
            });
var format_AgriondeMercure_72 = new ol.format.GeoJSON();
var features_AgriondeMercure_72 = format_AgriondeMercure_72.readFeatures(json_AgriondeMercure_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgriondeMercure_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgriondeMercure_72.addFeatures(features_AgriondeMercure_72);
var lyr_AgriondeMercure_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AgriondeMercure_72, 
                style: style_AgriondeMercure_72,
                popuplayertitle: 'Agrion de Mercure',
                interactive: true,
                title: '<img src="styles/legend/AgriondeMercure_72.png" /> Agrion de Mercure'
            });
var format_Chauvessouris_73 = new ol.format.GeoJSON();
var features_Chauvessouris_73 = format_Chauvessouris_73.readFeatures(json_Chauvessouris_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chauvessouris_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chauvessouris_73.addFeatures(features_Chauvessouris_73);
var lyr_Chauvessouris_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chauvessouris_73, 
                style: style_Chauvessouris_73,
                popuplayertitle: 'Chauves-souris',
                interactive: true,
                title: '<img src="styles/legend/Chauvessouris_73.png" /> Chauves-souris'
            });
var format_Grenouillescrapauds_74 = new ol.format.GeoJSON();
var features_Grenouillescrapauds_74 = format_Grenouillescrapauds_74.readFeatures(json_Grenouillescrapauds_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grenouillescrapauds_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grenouillescrapauds_74.addFeatures(features_Grenouillescrapauds_74);
var lyr_Grenouillescrapauds_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grenouillescrapauds_74, 
                style: style_Grenouillescrapauds_74,
                popuplayertitle: 'Grenouilles & crapauds',
                interactive: true,
                title: '<img src="styles/legend/Grenouillescrapauds_74.png" /> Grenouilles & crapauds'
            });
var format_Scarabepiqueprune_75 = new ol.format.GeoJSON();
var features_Scarabepiqueprune_75 = format_Scarabepiqueprune_75.readFeatures(json_Scarabepiqueprune_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Scarabepiqueprune_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Scarabepiqueprune_75.addFeatures(features_Scarabepiqueprune_75);
var lyr_Scarabepiqueprune_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Scarabepiqueprune_75, 
                style: style_Scarabepiqueprune_75,
                popuplayertitle: 'Scarabée pique-prune',
                interactive: true,
    title: 'Scarabée pique-prune<br />\
    <img src="styles/legend/Scarabepiqueprune_75_0.png" /> Actuel<br />\
    <img src="styles/legend/Scarabepiqueprune_75_1.png" /> Eteint<br />' });
var format_Tritoncrtinventaireparanne_76 = new ol.format.GeoJSON();
var features_Tritoncrtinventaireparanne_76 = format_Tritoncrtinventaireparanne_76.readFeatures(json_Tritoncrtinventaireparanne_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tritoncrtinventaireparanne_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tritoncrtinventaireparanne_76.addFeatures(features_Tritoncrtinventaireparanne_76);
var lyr_Tritoncrtinventaireparanne_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tritoncrtinventaireparanne_76, 
                style: style_Tritoncrtinventaireparanne_76,
                popuplayertitle: 'Triton crêté (inventaire par année)',
                interactive: true,
    title: 'Triton crêté (inventaire par année)<br />\
    <img src="styles/legend/Tritoncrtinventaireparanne_76_0.png" /> 2021<br />\
    <img src="styles/legend/Tritoncrtinventaireparanne_76_1.png" /> 2015<br />\
    <img src="styles/legend/Tritoncrtinventaireparanne_76_2.png" /> 2013<br />\
    <img src="styles/legend/Tritoncrtinventaireparanne_76_3.png" /> 2012<br />\
    <img src="styles/legend/Tritoncrtinventaireparanne_76_4.png" /> 2011<br />\
    <img src="styles/legend/Tritoncrtinventaireparanne_76_5.png" /> 2010<br />\
    <img src="styles/legend/Tritoncrtinventaireparanne_76_6.png" /> 2007<br />\
    <img src="styles/legend/Tritoncrtinventaireparanne_76_7.png" /> 2006<br />\
    <img src="styles/legend/Tritoncrtinventaireparanne_76_8.png" /> 2001<br />\
    <img src="styles/legend/Tritoncrtinventaireparanne_76_9.png" /> 2000<br />\
    <img src="styles/legend/Tritoncrtinventaireparanne_76_10.png" /> 1998<br />' });
var format_MaresTritoncrtPrsencehistorique_77 = new ol.format.GeoJSON();
var features_MaresTritoncrtPrsencehistorique_77 = format_MaresTritoncrtPrsencehistorique_77.readFeatures(json_MaresTritoncrtPrsencehistorique_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaresTritoncrtPrsencehistorique_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaresTritoncrtPrsencehistorique_77.addFeatures(features_MaresTritoncrtPrsencehistorique_77);
var lyr_MaresTritoncrtPrsencehistorique_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MaresTritoncrtPrsencehistorique_77, 
                style: style_MaresTritoncrtPrsencehistorique_77,
                popuplayertitle: 'Mares Triton crêté - Présence historique',
                interactive: true,
                title: '<img src="styles/legend/MaresTritoncrtPrsencehistorique_77.png" /> Mares Triton crêté - Présence historique'
            });
var format_MaresTritoncrtPrsencedepuis2012_78 = new ol.format.GeoJSON();
var features_MaresTritoncrtPrsencedepuis2012_78 = format_MaresTritoncrtPrsencedepuis2012_78.readFeatures(json_MaresTritoncrtPrsencedepuis2012_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaresTritoncrtPrsencedepuis2012_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaresTritoncrtPrsencedepuis2012_78.addFeatures(features_MaresTritoncrtPrsencedepuis2012_78);
var lyr_MaresTritoncrtPrsencedepuis2012_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MaresTritoncrtPrsencedepuis2012_78, 
                style: style_MaresTritoncrtPrsencedepuis2012_78,
                popuplayertitle: 'Mares Triton crêté - Présence depuis 2012',
                interactive: true,
                title: '<img src="styles/legend/MaresTritoncrtPrsencedepuis2012_78.png" /> Mares Triton crêté - Présence depuis 2012'
            });
var format_Altitude_79 = new ol.format.GeoJSON();
var features_Altitude_79 = format_Altitude_79.readFeatures(json_Altitude_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Altitude_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Altitude_79.addFeatures(features_Altitude_79);
var lyr_Altitude_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Altitude_79, 
                style: style_Altitude_79,
                popuplayertitle: 'Altitude',
                interactive: true,
    title: 'Altitude<br />\
    <img src="styles/legend/Altitude_79_0.png" /> Niveaux principaux<br />\
    <img src="styles/legend/Altitude_79_1.png" /> Niveaux secondaires<br />' });
var format_CommunautdeCommunesBrayEawy_80 = new ol.format.GeoJSON();
var features_CommunautdeCommunesBrayEawy_80 = format_CommunautdeCommunesBrayEawy_80.readFeatures(json_CommunautdeCommunesBrayEawy_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunautdeCommunesBrayEawy_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunautdeCommunesBrayEawy_80.addFeatures(features_CommunautdeCommunesBrayEawy_80);
var lyr_CommunautdeCommunesBrayEawy_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunautdeCommunesBrayEawy_80, 
                style: style_CommunautdeCommunesBrayEawy_80,
                popuplayertitle: 'Communauté de Communes Bray-Eawy',
                interactive: true,
                title: '<img src="styles/legend/CommunautdeCommunesBrayEawy_80.png" /> Communauté de Communes Bray-Eawy'
            });
var format_CommunautdeCommunesdeLondinires_81 = new ol.format.GeoJSON();
var features_CommunautdeCommunesdeLondinires_81 = format_CommunautdeCommunesdeLondinires_81.readFeatures(json_CommunautdeCommunesdeLondinires_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunautdeCommunesdeLondinires_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunautdeCommunesdeLondinires_81.addFeatures(features_CommunautdeCommunesdeLondinires_81);
var lyr_CommunautdeCommunesdeLondinires_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunautdeCommunesdeLondinires_81, 
                style: style_CommunautdeCommunesdeLondinires_81,
                popuplayertitle: 'Communauté de Communes de Londinières',
                interactive: true,
                title: '<img src="styles/legend/CommunautdeCommunesdeLondinires_81.png" /> Communauté de Communes de Londinières'
            });
var format_CommunautdeCommunesdes4Rivires_82 = new ol.format.GeoJSON();
var features_CommunautdeCommunesdes4Rivires_82 = format_CommunautdeCommunesdes4Rivires_82.readFeatures(json_CommunautdeCommunesdes4Rivires_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunautdeCommunesdes4Rivires_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunautdeCommunesdes4Rivires_82.addFeatures(features_CommunautdeCommunesdes4Rivires_82);
var lyr_CommunautdeCommunesdes4Rivires_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunautdeCommunesdes4Rivires_82, 
                style: style_CommunautdeCommunesdes4Rivires_82,
                popuplayertitle: 'Communauté de Communes des 4 Rivières',
                interactive: true,
                title: '<img src="styles/legend/CommunautdeCommunesdes4Rivires_82.png" /> Communauté de Communes des 4 Rivières'
            });
var format_PETRduPaysdeBray_83 = new ol.format.GeoJSON();
var features_PETRduPaysdeBray_83 = format_PETRduPaysdeBray_83.readFeatures(json_PETRduPaysdeBray_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETRduPaysdeBray_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETRduPaysdeBray_83.addFeatures(features_PETRduPaysdeBray_83);
var lyr_PETRduPaysdeBray_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETRduPaysdeBray_83, 
                style: style_PETRduPaysdeBray_83,
                popuplayertitle: 'PETR du Pays de Bray',
                interactive: false,
                title: '<img src="styles/legend/PETRduPaysdeBray_83.png" /> PETR du Pays de Bray'
            });
var format_Communes_84 = new ol.format.GeoJSON();
var features_Communes_84 = format_Communes_84.readFeatures(json_Communes_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_84.addFeatures(features_Communes_84);
var lyr_Communes_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_84, 
                style: style_Communes_84,
                popuplayertitle: 'Communes',
                interactive: false,
                title: '<img src="styles/legend/Communes_84.png" /> Communes'
            });
var group_Limitesadministratives = new ol.layer.Group({
                                layers: [lyr_CommunautdeCommunesBrayEawy_80,lyr_CommunautdeCommunesdeLondinires_81,lyr_CommunautdeCommunesdes4Rivires_82,lyr_PETRduPaysdeBray_83,lyr_Communes_84,],
                                fold: "open",
                                title: 'Limites administratives'});
var group_Faunebrayonne = new ol.layer.Group({
                                layers: [lyr_PopulationpiscicoledIntrtCommunautaire_71,lyr_AgriondeMercure_72,lyr_Chauvessouris_73,lyr_Grenouillescrapauds_74,lyr_Scarabepiqueprune_75,lyr_Tritoncrtinventaireparanne_76,lyr_MaresTritoncrtPrsencehistorique_77,lyr_MaresTritoncrtPrsencedepuis2012_78,],
                                fold: "open",
                                title: 'Faune brayonne'});
var group_Florebrayonne = new ol.layer.Group({
                                layers: [lyr_Inventairesparanne_70,],
                                fold: "open",
                                title: 'Flore brayonne'});
var group_AtlasdelaBiodiversitCommunale2023 = new ol.layer.Group({
                                layers: [lyr_Tourbire_66,lyr_Observationsfaunistiquesetfloristiques_67,lyr_InventaireOBHEN_68,lyr_Quelquesespcesenjeuxdeprservation_69,],
                                fold: "open",
                                title: 'Atlas de la Biodiversité Communale 2023'});
var group_EspcesExotiquesEnvahissantesEEE = new ol.layer.Group({
                                layers: [lyr_Foyersfloristiques_61,lyr_Linairedcrevissespiedsblancs_62,lyr_Foyersdcrevissespiedsblancs_63,lyr_LinairedcrevissesdeCalifornie_64,lyr_FoyersdcrevissesdeCalifornie_65,],
                                fold: "open",
                                title: 'Espèces Exotiques Envahissantes (EEE)'});
var group_Syndicatsdeau = new ol.layer.Group({
                                layers: [lyr_SAEPABraySudBacRouvrayCatillon_50,lyr_SAEPABraySudBacMesnilLieubray_51,lyr_SAEPABraySudBacGisors_52,lyr_SIAEPA3SourcesBacSommery_53,lyr_SIAEPA3SourcesBacMonterolier_54,lyr_SIAEPA02BrayBacStGermainsurEaulne_55,lyr_SIAEPA02BrayBacNeuvilles_56,lyr_SIAEPA02BrayBacNesleHodengBeaussault_57,lyr_SIAEPA02BrayBacMesnires_58,lyr_SIAEPA02BrayBacEsclavelles_59,lyr_SIAEPA02BrayBacBully_60,],
                                fold: "open",
                                title: 'Syndicats d\'eau'});
var group_Pollutions = new ol.layer.Group({
                                layers: [lyr_Sitespollus_48,lyr_SitesBASOL_49,],
                                fold: "open",
                                title: 'Pollutions'});
var group_Habitatslmentsnaturels = new ol.layer.Group({
                                layers: [lyr_Zonesdevgtation_42,lyr_HabitatsdIntrtCommunautaire_43,lyr_Haies_44,lyr_Surfaceshydrographiques_45,lyr_Coursdeau_46,lyr_Mares_47,],
                                fold: "open",
                                title: 'Habitats & éléments naturels'});
var group_SyndicatsMixtesdeBassinVersant = new ol.layer.Group({
                                layers: [lyr_SMBVdelEpte_36,lyr_SMBVdelAndelle_37,lyr_SMBVdelaBresle_38,lyr_SMBVdelYres_39,lyr_SMBVdelArques_40,lyr_SMBVCaillyAubetteRobec_41,],
                                fold: "open",
                                title: 'Syndicats Mixtes de Bassin Versant'});
var group_TrameVerteetBleue = new ol.layer.Group({
                                layers: [lyr_Tramebocagre_24,lyr_Rservoirsboiss_25,lyr_Corridorshumides_26,lyr_Rservoirshumides_27,lyr_Dpriseagricole_28,lyr_Rseaucalcicolepotentiel_29,lyr_Rservoirscalcicoles_30,lyr_Tramecalcicole_31,lyr_Rservoirssilicicoles_32,lyr_Primtresdepointsdecaptages_33,lyr_Corridorsaquatiques_34,lyr_Rservoirsaquatiques_35,],
                                fold: "open",
                                title: 'Trame Verte et Bleue'});
var group_Zonagesenvironnementaux = new ol.layer.Group({
                                layers: [lyr_ZNIEFFType2_15,lyr_ZNIEFFType1_16,lyr_Zoneshumides_17,lyr_SitesNatura2000_18,lyr_SiteNatura2000PaysdeBrayHumide_19,lyr_ZAPCuestas_20,lyr_Sitesnaturelsclasss_21,lyr_Sitesnaturelsinscrits_22,lyr_CommunesensitePaysdeBrayHumide_23,],
                                fold: "open",
                                title: 'Zonages environnementaux'});
var group_Occupationdessols2022 = new ol.layer.Group({
                                layers: [lyr_Formationsherbaces_3,lyr_Autresformationsligneuses_4,lyr_Formationarbustivesetsousarbrisseaux_5,lyr_Peuplementdeconifres_6,lyr_Peuplementdefeuillus_7,lyr_Surfacesdeau_8,lyr_Zonesautrematriauxcomposites_9,lyr_Zonesmatriauxminraux_10,lyr_Zonesnonbties_11,lyr_Zonesbties_12,lyr_Surfacesnonartificialises_13,lyr_Surfacesartificialises_14,],
                                fold: "open",
                                title: 'Occupation des sols 2022'});
var group_Gologie = new ol.layer.Group({
                                layers: [lyr_Naturedessols_1,lyr_LimitesgologiquesduPaysdeBray_2,],
                                fold: "open",
                                title: 'Géologie'});

lyr_BDOrthoIGN_0.setVisible(true);lyr_Naturedessols_1.setVisible(false);lyr_LimitesgologiquesduPaysdeBray_2.setVisible(false);lyr_Formationsherbaces_3.setVisible(false);lyr_Autresformationsligneuses_4.setVisible(false);lyr_Formationarbustivesetsousarbrisseaux_5.setVisible(false);lyr_Peuplementdeconifres_6.setVisible(false);lyr_Peuplementdefeuillus_7.setVisible(false);lyr_Surfacesdeau_8.setVisible(false);lyr_Zonesautrematriauxcomposites_9.setVisible(false);lyr_Zonesmatriauxminraux_10.setVisible(false);lyr_Zonesnonbties_11.setVisible(false);lyr_Zonesbties_12.setVisible(false);lyr_Surfacesnonartificialises_13.setVisible(false);lyr_Surfacesartificialises_14.setVisible(false);lyr_ZNIEFFType2_15.setVisible(false);lyr_ZNIEFFType1_16.setVisible(false);lyr_Zoneshumides_17.setVisible(false);lyr_SitesNatura2000_18.setVisible(false);lyr_SiteNatura2000PaysdeBrayHumide_19.setVisible(false);lyr_ZAPCuestas_20.setVisible(false);lyr_Sitesnaturelsclasss_21.setVisible(false);lyr_Sitesnaturelsinscrits_22.setVisible(false);lyr_CommunesensitePaysdeBrayHumide_23.setVisible(false);lyr_Tramebocagre_24.setVisible(false);lyr_Rservoirsboiss_25.setVisible(false);lyr_Corridorshumides_26.setVisible(false);lyr_Rservoirshumides_27.setVisible(false);lyr_Dpriseagricole_28.setVisible(false);lyr_Rseaucalcicolepotentiel_29.setVisible(false);lyr_Rservoirscalcicoles_30.setVisible(false);lyr_Tramecalcicole_31.setVisible(false);lyr_Rservoirssilicicoles_32.setVisible(false);lyr_Primtresdepointsdecaptages_33.setVisible(false);lyr_Corridorsaquatiques_34.setVisible(false);lyr_Rservoirsaquatiques_35.setVisible(false);lyr_SMBVdelEpte_36.setVisible(false);lyr_SMBVdelAndelle_37.setVisible(false);lyr_SMBVdelaBresle_38.setVisible(false);lyr_SMBVdelYres_39.setVisible(false);lyr_SMBVdelArques_40.setVisible(false);lyr_SMBVCaillyAubetteRobec_41.setVisible(false);lyr_Zonesdevgtation_42.setVisible(false);lyr_HabitatsdIntrtCommunautaire_43.setVisible(false);lyr_Haies_44.setVisible(false);lyr_Surfaceshydrographiques_45.setVisible(false);lyr_Coursdeau_46.setVisible(false);lyr_Mares_47.setVisible(false);lyr_Sitespollus_48.setVisible(false);lyr_SitesBASOL_49.setVisible(false);lyr_SAEPABraySudBacRouvrayCatillon_50.setVisible(false);lyr_SAEPABraySudBacMesnilLieubray_51.setVisible(false);lyr_SAEPABraySudBacGisors_52.setVisible(false);lyr_SIAEPA3SourcesBacSommery_53.setVisible(false);lyr_SIAEPA3SourcesBacMonterolier_54.setVisible(false);lyr_SIAEPA02BrayBacStGermainsurEaulne_55.setVisible(false);lyr_SIAEPA02BrayBacNeuvilles_56.setVisible(false);lyr_SIAEPA02BrayBacNesleHodengBeaussault_57.setVisible(false);lyr_SIAEPA02BrayBacMesnires_58.setVisible(false);lyr_SIAEPA02BrayBacEsclavelles_59.setVisible(false);lyr_SIAEPA02BrayBacBully_60.setVisible(false);lyr_Foyersfloristiques_61.setVisible(false);lyr_Linairedcrevissespiedsblancs_62.setVisible(false);lyr_Foyersdcrevissespiedsblancs_63.setVisible(false);lyr_LinairedcrevissesdeCalifornie_64.setVisible(false);lyr_FoyersdcrevissesdeCalifornie_65.setVisible(false);lyr_Tourbire_66.setVisible(false);lyr_Observationsfaunistiquesetfloristiques_67.setVisible(false);lyr_InventaireOBHEN_68.setVisible(false);lyr_Quelquesespcesenjeuxdeprservation_69.setVisible(false);lyr_Inventairesparanne_70.setVisible(false);lyr_PopulationpiscicoledIntrtCommunautaire_71.setVisible(false);lyr_AgriondeMercure_72.setVisible(false);lyr_Chauvessouris_73.setVisible(false);lyr_Grenouillescrapauds_74.setVisible(false);lyr_Scarabepiqueprune_75.setVisible(false);lyr_Tritoncrtinventaireparanne_76.setVisible(false);lyr_MaresTritoncrtPrsencehistorique_77.setVisible(false);lyr_MaresTritoncrtPrsencedepuis2012_78.setVisible(false);lyr_Altitude_79.setVisible(false);lyr_CommunautdeCommunesBrayEawy_80.setVisible(true);lyr_CommunautdeCommunesdeLondinires_81.setVisible(true);lyr_CommunautdeCommunesdes4Rivires_82.setVisible(true);lyr_PETRduPaysdeBray_83.setVisible(true);lyr_Communes_84.setVisible(true);
var layersList = [lyr_BDOrthoIGN_0,group_Gologie,group_Occupationdessols2022,group_Zonagesenvironnementaux,group_TrameVerteetBleue,group_SyndicatsMixtesdeBassinVersant,group_Habitatslmentsnaturels,group_Pollutions,group_Syndicatsdeau,group_EspcesExotiquesEnvahissantesEEE,group_AtlasdelaBiodiversitCommunale2023,group_Florebrayonne,group_Faunebrayonne,lyr_Altitude_79,group_Limitesadministratives];
lyr_Naturedessols_1.set('fieldAliases', {'fid': 'fid', 'MI_PRINX': 'MI_PRINX', 'CARTE': 'CARTE', 'CODE': 'CODE', 'CODE_LEG': 'CODE_LEG', 'NOTATION': 'NOTATION', 'DESCR': 'DESCR', 'C_FOND': 'C_FOND', 'M_FOND': 'M_FOND', 'J_FOND': 'J_FOND', 'N_FOND': 'N_FOND', 'NOM_SYMB': 'NOM_SYMB', 'C_SYMB': 'C_SYMB', 'M_SYMB': 'M_SYMB', 'J_SYMB': 'J_SYMB', 'N_SYMB': 'N_SYMB', 'ROT_SYMB': 'ROT_SYMB', 'Nom': 'Nom', });
lyr_LimitesgologiquesduPaysdeBray_2.set('fieldAliases', {'fid': 'fid', 'MI_PRINX': 'MI_PRINX', 'CARTE': 'CARTE', 'CODE': 'CODE', 'CODE_LEG': 'CODE_LEG', 'NOTATION': 'NOTATION', 'DESCR': 'DESCR', 'C_FOND': 'C_FOND', 'M_FOND': 'M_FOND', 'J_FOND': 'J_FOND', 'N_FOND': 'N_FOND', 'NOM_SYMB': 'NOM_SYMB', 'C_SYMB': 'C_SYMB', 'M_SYMB': 'M_SYMB', 'J_SYMB': 'J_SYMB', 'N_SYMB': 'N_SYMB', 'ROT_SYMB': 'ROT_SYMB', });
lyr_Formationsherbaces_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_CS': 'CODE_CS', 'CODE_US': 'CODE_US', 'MILLESIME': 'MILLESIME', 'SOURCE': 'SOURCE', 'OSSATURE': 'OSSATURE', 'ID_ORIGINE': 'ID_ORIGINE', 'CODE_OR': 'CODE_OR', });
lyr_Autresformationsligneuses_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_CS': 'CODE_CS', 'CODE_US': 'CODE_US', 'MILLESIME': 'MILLESIME', 'SOURCE': 'SOURCE', 'OSSATURE': 'OSSATURE', 'ID_ORIGINE': 'ID_ORIGINE', 'CODE_OR': 'CODE_OR', });
lyr_Formationarbustivesetsousarbrisseaux_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_CS': 'CODE_CS', 'CODE_US': 'CODE_US', 'MILLESIME': 'MILLESIME', 'SOURCE': 'SOURCE', 'OSSATURE': 'OSSATURE', 'ID_ORIGINE': 'ID_ORIGINE', 'CODE_OR': 'CODE_OR', });
lyr_Peuplementdeconifres_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_CS': 'CODE_CS', 'CODE_US': 'CODE_US', 'MILLESIME': 'MILLESIME', 'SOURCE': 'SOURCE', 'OSSATURE': 'OSSATURE', 'ID_ORIGINE': 'ID_ORIGINE', 'CODE_OR': 'CODE_OR', });
lyr_Peuplementdefeuillus_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_CS': 'CODE_CS', 'CODE_US': 'CODE_US', 'MILLESIME': 'MILLESIME', 'SOURCE': 'SOURCE', 'OSSATURE': 'OSSATURE', 'ID_ORIGINE': 'ID_ORIGINE', 'CODE_OR': 'CODE_OR', });
lyr_Surfacesdeau_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_CS': 'CODE_CS', 'CODE_US': 'CODE_US', 'MILLESIME': 'MILLESIME', 'SOURCE': 'SOURCE', 'OSSATURE': 'OSSATURE', 'ID_ORIGINE': 'ID_ORIGINE', 'CODE_OR': 'CODE_OR', });
lyr_Zonesautrematriauxcomposites_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_CS': 'CODE_CS', 'CODE_US': 'CODE_US', 'MILLESIME': 'MILLESIME', 'SOURCE': 'SOURCE', 'OSSATURE': 'OSSATURE', 'ID_ORIGINE': 'ID_ORIGINE', 'CODE_OR': 'CODE_OR', });
lyr_Zonesmatriauxminraux_10.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_CS': 'CODE_CS', 'CODE_US': 'CODE_US', 'MILLESIME': 'MILLESIME', 'SOURCE': 'SOURCE', 'OSSATURE': 'OSSATURE', 'ID_ORIGINE': 'ID_ORIGINE', 'CODE_OR': 'CODE_OR', });
lyr_Zonesnonbties_11.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_CS': 'CODE_CS', 'CODE_US': 'CODE_US', 'MILLESIME': 'MILLESIME', 'SOURCE': 'SOURCE', 'OSSATURE': 'OSSATURE', 'ID_ORIGINE': 'ID_ORIGINE', 'CODE_OR': 'CODE_OR', });
lyr_Zonesbties_12.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_CS': 'CODE_CS', 'CODE_US': 'CODE_US', 'MILLESIME': 'MILLESIME', 'SOURCE': 'SOURCE', 'OSSATURE': 'OSSATURE', 'ID_ORIGINE': 'ID_ORIGINE', 'CODE_OR': 'CODE_OR', });
lyr_Surfacesnonartificialises_13.set('fieldAliases', {'ID': 'ID', 'CODE_CS': 'CODE_CS', 'CODE_US': 'CODE_US', 'MILLESIME': 'MILLESIME', 'SOURCE': 'SOURCE', 'OSSATURE': 'OSSATURE', 'ID_ORIGINE': 'ID_ORIGINE', 'CODE_OR': 'CODE_OR', });
lyr_Surfacesartificialises_14.set('fieldAliases', {'ID': 'ID', 'CODE_CS': 'CODE_CS', 'CODE_US': 'CODE_US', 'MILLESIME': 'MILLESIME', 'SOURCE': 'SOURCE', 'OSSATURE': 'OSSATURE', 'ID_ORIGINE': 'ID_ORIGINE', 'CODE_OR': 'CODE_OR', });
lyr_ZNIEFFType2_15.set('fieldAliases', {'NOM_ZNIEFF': 'NOM_ZNIEFF', 'CODE_NATIO': 'CODE_NATIO', 'CODE_REGIO': 'CODE_REGIO', 'SURFACE_HA': 'SURFACE_HA', 'SAISIE_LOG': 'SAISIE_LOG', 'DATE_DE_VA': 'DATE_DE_VA', 'ORGANISME': 'ORGANISME', 'INCLUSION': 'INCLUSION', 'DEPARTEMEN': 'DEPARTEMEN', 'URLFICTECH': 'URLFICTECH', 'URLFICPUB': 'URLFICPUB', 'URLMETAD': 'URLMETAD', });
lyr_ZNIEFFType1_16.set('fieldAliases', {'NOM_ZNIEFF': 'NOM_ZNIEFF', 'CODE_NATIO': 'CODE_NATIO', 'CODE_REGIO': 'CODE_REGIO', 'SURFACE_HA': 'SURFACE_HA', 'SAISIE_LOG': 'SAISIE_LOG', 'DATE_DE_VA': 'DATE_DE_VA', 'ORGANISME': 'ORGANISME', 'INCLUSION': 'INCLUSION', 'DEPARTEMEN': 'DEPARTEMEN', 'URLFICTECH': 'URLFICTECH', 'URLFICPUB': 'URLFICPUB', 'URLMETAD': 'URLMETAD', });
lyr_Zoneshumides_17.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'URLMETAD': 'URLMETAD', });
lyr_SitesNatura2000_18.set('fieldAliases', {'SITECODE': 'SITECODE', 'SITENAME': 'SITENAME', });
lyr_SiteNatura2000PaysdeBrayHumide_19.set('fieldAliases', {'ID': 'ID', 'SURFACE': 'SURFACE', 'NUM_SITE': 'NUM_SITE', });
lyr_ZAPCuestas_20.set('fieldAliases', {'nom_zsc': 'nom_zsc', 'ident': 'ident', 'type': 'type', 'etat': 'etat', 'date_etat': 'date_etat', 'date_regl': 'date_regl', 'date_regl2': 'date_regl2', 'surf_ha': 'surf_ha', 'suivi': 'suivi', 'lien_FSD': 'lien_FSD', 'lien_donn': 'lien_donn', 'lien_docob': 'lien_docob', 'lien_atlas': 'lien_atlas', 'lien_texte': 'lien_texte', 'lien_metad': 'lien_metad', 'Code_zscpd': 'Code_zscpd', });
lyr_Sitesnaturelsclasss_21.set('fieldAliases', {'fid': 'fid', 'Nom_sc': 'Nom_sc', 'Ident': 'Ident', 'Texte': 'Texte', 'Modif_text': 'Modif_text', 'Surfcalc_h': 'Surfcalc_h', 'Lien_donn': 'Lien_donn', 'Lien_metad': 'Lien_metad', });
lyr_Sitesnaturelsinscrits_22.set('fieldAliases', {'fid': 'fid', 'nom_si': 'nom_si', 'ident': 'ident', 'texte': 'texte', 'modif_text': 'modif_text', 'surfcalc_h': 'surfcalc_h', 'lien_donn': 'lien_donn', 'lien_metad': 'lien_metad', });
lyr_CommunesensitePaysdeBrayHumide_23.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_Tramebocagre_24.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_PARCEL': 'ID_PARCEL', 'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', 'CULTURE_D1': 'CULTURE_D1', 'CULTURE_D2': 'CULTURE_D2', 'layer': 'layer', 'path': 'path', 'Area': 'Area', });
lyr_Rservoirsboiss_25.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'prec_plani': 'prec_plani', 'nature': 'nature', 'Area': 'Area', });
lyr_Corridorshumides_26.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_Rservoirshumides_27.set('fieldAliases', {'fid': 'fid', 'FID_RB_ZH_': 'FID_RB_ZH_', 'SOUS_TRAME': 'SOUS_TRAME', 'REMARQUE': 'REMARQUE', 'FID_RB_ZH1': 'FID_RB_ZH1', 'OBJECTID': 'OBJECTID', 'TYPE': 'TYPE', 'SHAPE_LENG': 'SHAPE_LENG', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'NUM_SITE': 'NUM_SITE', 'ID_HAB_POL': 'ID_HAB_POL', 'SURF_HAB_P': 'SURF_HAB_P', 'PERI_HAB_P': 'PERI_HAB_P', 'MOSAIQUE': 'MOSAIQUE', 'CODE_PHYTO': 'CODE_PHYTO', 'CODE_CB': 'CODE_CB', 'CODE_N2000': 'CODE_N2000', 'CODE_COL': 'CODE_COL', 'PART_POLY_': 'PART_POLY_', 'PART_POL_1': 'PART_POL_1', 'STATUT_HAB': 'STATUT_HAB', 'TYPI': 'TYPI', 'ORIGINALIT': 'ORIGINALIT', 'REPRES': 'REPRES', 'INTER_PAT': 'INTER_PAT', 'ETAT_CONS': 'ETAT_CONS', 'DYNA': 'DYNA', 'RESTAUR': 'RESTAUR', 'OBSERVATIO': 'OBSERVATIO', 'DATE_INV_H': 'DATE_INV_H', 'SOURCES': 'SOURCES', 'ETAT_CONS_': 'ETAT_CONS_', 'DYNA_2014': 'DYNA_2014', 'RESTAUR_20': 'RESTAUR_20', 'OBS_2014': 'OBS_2014', 'Date_misej': 'Date_misej', 'SOURCE_201': 'SOURCE_201', 'ID': 'ID', 'ID_HAB_PO': 'ID_HAB_PO', 'PART_PO_1': 'PART_PO_1', 'PART_PO_2': 'PART_PO_2', 'ORIGINAL': 'ORIGINAL', 'OBSERV': 'OBSERV', 'D_INV_HAB': 'D_INV_HAB', 'SURF_HABI': 'SURF_HABI', 'PERI_HABI': 'PERI_HABI', 'SURFACE': 'SURFACE', 'layer': 'layer', 'path': 'path', 'NOM_ZNIEFF': 'NOM_ZNIEFF', 'CODE_NATIO': 'CODE_NATIO', 'CODE_REGIO': 'CODE_REGIO', 'SURFACE_HA': 'SURFACE_HA', 'SAISIE_LOG': 'SAISIE_LOG', 'DATE_DE_VA': 'DATE_DE_VA', 'ORGANISME': 'ORGANISME', 'INCLUSION': 'INCLUSION', 'DEPARTEMEN': 'DEPARTEMEN', 'URLFICTECH': 'URLFICTECH', 'URLFICPUB': 'URLFICPUB', 'URLMETAD': 'URLMETAD', });
lyr_Dpriseagricole_28.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'left_2': 'left_2', 'top_2': 'top_2', 'right_2': 'right_2', 'bottom_2': 'bottom_2', 'id_2': 'id_2', 'Surface': 'Surface', 'Densité': 'Densité', });
lyr_Rseaucalcicolepotentiel_29.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'surface': 'surface', 'nom_commun': 'nom_commun', 'num_insee': 'num_insee', 'departemen': 'departemen', 'code_znief': 'code_znief', 'nom_znieff': 'nom_znieff', 'lien_fiche': 'lien_fiche', 'code_natur': 'code_natur', 'nom_natura': 'nom_natura', 'nom_appb': 'nom_appb', 'nom_sitein': 'nom_sitein', 'nom_sitecl': 'nom_sitecl', 'nom_sitege': 'nom_sitege', 'hierarchis': 'hierarchis', 'enjeu_ecol': 'enjeu_ecol', 'lienfichep': 'lienfichep', 'usage_agri': 'usage_agri', 'Area': 'Area', 'layer': 'layer', 'path': 'path', });
lyr_Rservoirscalcicoles_30.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'surface': 'surface', 'nom_commun': 'nom_commun', 'num_insee': 'num_insee', 'departemen': 'departemen', 'code_znief': 'code_znief', 'nom_znieff': 'nom_znieff', 'lien_fiche': 'lien_fiche', 'code_natur': 'code_natur', 'nom_natura': 'nom_natura', 'nom_appb': 'nom_appb', 'nom_sitein': 'nom_sitein', 'nom_sitecl': 'nom_sitecl', 'nom_sitege': 'nom_sitege', 'hierarchis': 'hierarchis', 'enjeu_ecol': 'enjeu_ecol', 'lienfichep': 'lienfichep', 'usage_agri': 'usage_agri', 'Area': 'Area', });
lyr_Tramecalcicole_31.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'surface': 'surface', 'nom_commun': 'nom_commun', 'num_insee': 'num_insee', 'departemen': 'departemen', 'code_znief': 'code_znief', 'nom_znieff': 'nom_znieff', 'lien_fiche': 'lien_fiche', 'code_natur': 'code_natur', 'nom_natura': 'nom_natura', 'nom_appb': 'nom_appb', 'nom_sitein': 'nom_sitein', 'nom_sitecl': 'nom_sitecl', 'nom_sitege': 'nom_sitege', 'hierarchis': 'hierarchis', 'enjeu_ecol': 'enjeu_ecol', 'lienfichep': 'lienfichep', 'usage_agri': 'usage_agri', 'Area': 'Area', });
lyr_Rservoirssilicicoles_32.set('fieldAliases', {'ID': 'ID', 'NUM_SITE': 'NUM_SITE', 'ID_HAB_PO': 'ID_HAB_PO', 'MOSAIQUE': 'MOSAIQUE', 'CODE_PHYTO': 'CODE_PHYTO', 'CODE_CB': 'CODE_CB', 'CODE_N2000': 'CODE_N2000', 'CODE_COL': 'CODE_COL', 'PART_PO_1': 'PART_PO_1', 'PART_PO_2': 'PART_PO_2', 'STATUT_HAB': 'STATUT_HAB', 'TYPI': 'TYPI', 'ORIGINAL': 'ORIGINAL', 'REPRES': 'REPRES', 'INTER_PAT': 'INTER_PAT', 'ETAT_CONS': 'ETAT_CONS', 'DYNA': 'DYNA', 'RESTAUR': 'RESTAUR', 'OBSERV': 'OBSERV', 'D_INV_HAB': 'D_INV_HAB', 'SOURCES': 'SOURCES', 'SURF_HABI': 'SURF_HABI', 'PERI_HABI': 'PERI_HABI', 'SURFACE': 'SURFACE', });
lyr_Primtresdepointsdecaptages_33.set('fieldAliases', {'fid': 'fid', 'TYPE_PP': 'TYPE_PP', 'SOURCE_TRA': 'SOURCE_TRA', 'CODE_NAT': 'CODE_NAT', 'layer': 'layer', 'path': 'path', });
lyr_Corridorsaquatiques_34.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'ARTIF': 'ARTIF', 'FICTIF': 'FICTIF', 'FRANCHISST': 'FRANCHISST', 'NOM': 'NOM', 'POS_SOL': 'POS_SOL', 'REGIME': 'REGIME', 'Z_INI': 'Z_INI', 'Z_FIN': 'Z_FIN', 'lenght': 'lenght', });
lyr_Rservoirsaquatiques_35.set('fieldAliases', {'fid': 'fid', 'ID_L1': 'ID_L1', 'Classt_L1': 'Classt_L1', 'Min_FMEAS': 'Min_FMEAS', 'Max_TMEAS': 'Max_TMEAS', 'Code_Hydro': 'Code_Hydro', 'Nom_CE': 'Nom_CE', 'Bras': 'Bras', 'Departemen': 'Departemen', 'Region': 'Region', 'UH': 'UH', 'COMGEO': 'COMGEO', 'Especes_Ci': 'Especes_Ci', 'Enjeu_Mig_': 'Enjeu_Mig_', 'Enjeu_TBE': 'Enjeu_TBE', 'Enjeu_RB': 'Enjeu_RB', 'Liste_RB': 'Liste_RB', 'Limite_Amo': 'Limite_Amo', 'Limite_ava': 'Limite_ava', 'Portion': 'Portion', 'Portee_Cla': 'Portee_Cla', 'Xav_L93': 'Xav_L93', 'Yav_L93': 'Yav_L93', 'Xam_L93': 'Xam_L93', 'Yam_L93': 'Yam_L93', 'ObjAv_XLS': 'ObjAv_XLS', 'ObjAv_SIG': 'ObjAv_SIG', 'Date_Modif': 'Date_Modif', 'Auteur': 'Auteur', 'Objet': 'Objet', 'ID_L2': 'ID_L2', 'Classt_L2': 'Classt_L2', 'Enjeu_sedi': 'Enjeu_sedi', 'Nb_Ouvr': 'Nb_Ouvr', 'layer': 'layer', 'path': 'path', 'Longueur': 'Longueur', });
lyr_SMBVdelEpte_36.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'CdOH': 'CdOH', 'TopoOH': 'TopoOH', 'LangueNomO': 'LangueNomO', 'StatutNomO': 'StatutNomO', 'SourceNomO': 'SourceNomO', 'TypTopoOH': 'TypTopoOH', 'DateCreati': 'DateCreati', 'StatutOH': 'StatutOH', 'OrigineBV': 'OrigineBV', 'CdExutoire': 'CdExutoire', 'CdBH': 'CdBH', 'Commentair': 'Commentair', 'PrecPlaniO': 'PrecPlaniO', 'ModObCoord': 'ModObCoord', 'ProjCoordO': 'ProjCoordO', });
lyr_SMBVdelAndelle_37.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Nom': 'Nom', });
lyr_SMBVdelaBresle_38.set('fieldAliases', {'Libelle': 'Libelle', 'Idenr': 'Idenr', 'Surface': 'Surface', });
lyr_SMBVdelYres_39.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'Surface': 'Surface', });
lyr_SMBVdelArques_40.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Nom': 'Nom', });
lyr_SMBVCaillyAubetteRobec_41.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'Champident': 'Champident', 'Surface': 'Surface', 'Nom': 'Nom', });
lyr_Zonesdevgtation_42.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NATURE': 'NATURE', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', });
lyr_HabitatsdIntrtCommunautaire_43.set('fieldAliases', {'habitats_c': 'habitats_c', 'Type': 'Type', });
lyr_Haies_44.set('fieldAliases', {'ID': 'ID', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'HAUTEUR': 'HAUTEUR', 'LARGEUR': 'LARGEUR', 'SOURCES': 'SOURCES', 'ID_SOURCES': 'ID_SOURCES', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', });
lyr_Surfaceshydrographiques_45.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'SALINITE': 'SALINITE', 'ORIGINE': 'ORIGINE', 'COMMENT': 'COMMENT', 'ID_P_EAU': 'ID_P_EAU', 'ID_C_EAU': 'ID_C_EAU', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_P_EAU': 'NOM_P_EAU', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_Coursdeau_46.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'FICTIF': 'FICTIF', 'ETAT': 'ETAT', 'POS_SOL': 'POS_SOL', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'FOSSE': 'FOSSE', 'NAVIGABL': 'NAVIGABL', 'SALINITE': 'SALINITE', 'NUM_ORDRE': 'NUM_ORDRE', 'CLA_ORDRE': 'CLA_ORDRE', 'ORIGINE': 'ORIGINE', 'PER_ORDRE': 'PER_ORDRE', 'SENS_ECOUL': 'SENS_ECOUL', 'RES_COULAN': 'RES_COULAN', 'DELIMIT': 'DELIMIT', 'LARGEUR': 'LARGEUR', 'BRAS': 'BRAS', 'COMMENT': 'COMMENT', 'CODE_CARTH': 'CODE_CARTH', 'IPE': 'IPE', 'ID_IPE': 'ID_IPE', 'ID_C_EAU': 'ID_C_EAU', 'ID_S_HYDRO': 'ID_S_HYDRO', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_Mares_47.set('fieldAliases', {'_uid_': '_uid_', 'l_id': 'l_id', 'l_idstrp': 'l_idstrp', 'date_local': 'date_local', 'statut_mar': 'statut_mar', 'type_m': 'type_m', });
lyr_Sitespollus_48.set('fieldAliases', {'cd_metier': 'cd_metier', 'autre_id': 'autre_id', 'nom_ets': 'nom_ets', 'nom_site': 'nom_site', 'code_siret': 'code_siret', 'stat_instr': 'stat_instr', 'date_debut': 'date_debut', 'date_fin': 'date_fin', 'descript': 'descript', 'code_insee': 'code_insee', 'nom_com': 'nom_com', 'x_wgs84': 'x_wgs84', 'y_wgs84': 'y_wgs84', 'code_dpt': 'code_dpt', 'nom_dpt': 'nom_dpt', 'code_reg': 'code_reg', 'nom_reg': 'nom_reg', 'act_nafv2': 'act_nafv2', 'act_naf': 'act_naf', 'act_icpe': 'act_icpe', 'act_nafv1': 'act_nafv1', });
lyr_SitesBASOL_49.set('fieldAliases', {'cd_metier': 'cd_metier', 'autre_id': 'autre_id', 'nom_etab': 'nom_etab', 'nom_instr': 'nom_instr', 'code_siret': 'code_siret', 'stat_instr': 'stat_instr', 'date_debut': 'date_debut', 'date_fin': 'date_fin', 'descript': 'descript', 'code_insee': 'code_insee', 'nom_com': 'nom_com', 'x_wgs84': 'x_wgs84', 'y_wgs84': 'y_wgs84', 'code_dpt': 'code_dpt', 'nom_dpt': 'nom_dpt', 'code_reg': 'code_reg', 'nom_reg': 'nom_reg', 'act_nafv2': 'act_nafv2', 'act_naf': 'act_naf', 'act_icpe': 'act_icpe', 'act_nafv1': 'act_nafv1', });
lyr_SAEPABraySudBacRouvrayCatillon_50.set('fieldAliases', {'BAC_propos': 'BAC_propos', 'Surface': 'Surface', 'Nom': 'Nom', 'Opérateur': 'Opérateur', });
lyr_SAEPABraySudBacMesnilLieubray_51.set('fieldAliases', {'BAC_final': 'BAC_final', 'Surface': 'Surface', 'Nom': 'Nom', 'Opérateur': 'Opérateur', });
lyr_SAEPABraySudBacGisors_52.set('fieldAliases', {'LIBELLEOPE': 'LIBELLEOPE', 'LIBELLEPAE': 'LIBELLEPAE', 'Surface': 'Surface', 'Opérateur': 'Opérateur', });
lyr_SIAEPA3SourcesBacSommery_53.set('fieldAliases', {'BAC_Sommer': 'BAC_Sommer', 'SURFACE': 'SURFACE', 'Nom': 'Nom', 'Opérateur': 'Opérateur', });
lyr_SIAEPA3SourcesBacMonterolier_54.set('fieldAliases', {'BAC_Mont��': 'BAC_Mont��', 'SURFACE': 'SURFACE', 'Nom': 'Nom', 'Opérateur': 'Opérateur', });
lyr_SIAEPA02BrayBacStGermainsurEaulne_55.set('fieldAliases', {'ID_INTERNE': 'ID_INTERNE', 'ID_FONCTIO': 'ID_FONCTIO', 'NOM': 'NOM', 'SITUATION_': 'SITUATION_', 'SITUATIO_1': 'SITUATIO_1', 'IDUNITE_GE': 'IDUNITE_GE', 'IDCOMMUNE': 'IDCOMMUNE', 'QUALITE_GE': 'QUALITE_GE', 'QUALITE__1': 'QUALITE__1', 'PRECISION_': 'PRECISION_', 'PRECISIO_1': 'PRECISIO_1', 'DATE_MAJ': 'DATE_MAJ', 'IDTYPE_SIT': 'IDTYPE_SIT', 'IDFICHE_TE': 'IDFICHE_TE', 'ESRI_OID': 'ESRI_OID', 'Opérateur': 'Opérateur', });
lyr_SIAEPA02BrayBacNeuvilles_56.set('fieldAliases', {'Nom': 'Nom', 'Operateur': 'Operateur', 'PAEC': 'PAEC', 'Id': 'Id', 'id_2': 'id_2', 'surf': 'surf', 'Aire': 'Aire', 'id_3': 'id_3', 'surf_2': 'surf_2', 'Aire_2': 'Aire_2', 'NOM_1': 'NOM_1', 'NOM_2': 'NOM_2', });
lyr_SIAEPA02BrayBacNesleHodengBeaussault_57.set('fieldAliases', {'ID': 'ID', 'Nom': 'Nom', 'Aire': 'Aire', 'NOM_1': 'NOM_1', 'Opérateur': 'Opérateur', });
lyr_SIAEPA02BrayBacMesnires_58.set('fieldAliases', {'Nom': 'Nom', 'Operateur': 'Operateur', 'PAEC': 'PAEC', 'Id': 'Id', 'id_2': 'id_2', 'surf': 'surf', 'Aire': 'Aire', 'id_3': 'id_3', 'surf_2': 'surf_2', 'Aire_2': 'Aire_2', 'NOM_1': 'NOM_1', });
lyr_SIAEPA02BrayBacEsclavelles_59.set('fieldAliases', {'BAC_Esclav': 'BAC_Esclav', 'SURFACE': 'SURFACE', 'Nom': 'Nom', 'Opérateur': 'Opérateur', });
lyr_SIAEPA02BrayBacBully_60.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CARTEGEOL1': 'CARTEGEOL1', 'ID': 'ID', 'GEOLNUM': 'GEOLNUM', 'CENTROID_Y': 'CENTROID_Y', 'CENTROID_X': 'CENTROID_X', 'CATégORIE': 'CATégORIE', 'Sols': 'Sols', 'Indice_sol': 'Indice_sol', 'surf': 'surf', 'Nom': 'Nom', 'Opérateur': 'Opérateur', });
lyr_Foyersfloristiques_61.set('fieldAliases', {'id': 'id', 'Date': 'Date', 'Source': 'Source', 'Espèce': 'Espèce', 'État': 'État', });
lyr_Linairedcrevissespiedsblancs_62.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Foyersdcrevissespiedsblancs_63.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Code_sp1': 'Code_sp1', 'Code_sp2': 'Code_sp2', 'Date_relev': 'Date_relev', });
lyr_LinairedcrevissesdeCalifornie_64.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_FoyersdcrevissesdeCalifornie_65.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Code_sp1': 'Code_sp1', 'Code_sp2': 'Code_sp2', 'Date_relev': 'Date_relev', });
lyr_Tourbire_66.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NUM_SITE': 'NUM_SITE', 'ID_HAB_PO': 'ID_HAB_PO', 'MOSAIQUE': 'MOSAIQUE', 'CODE_PHYTO': 'CODE_PHYTO', 'CODE_CB': 'CODE_CB', 'CODE_N2000': 'CODE_N2000', 'CODE_COL': 'CODE_COL', 'PART_PO_1': 'PART_PO_1', 'PART_PO_2': 'PART_PO_2', 'STATUT_HAB': 'STATUT_HAB', 'TYPI': 'TYPI', 'ORIGINAL': 'ORIGINAL', 'REPRES': 'REPRES', 'INTER_PAT': 'INTER_PAT', 'ETAT_CONS': 'ETAT_CONS', 'DYNA': 'DYNA', 'RESTAUR': 'RESTAUR', 'OBSERV': 'OBSERV', 'D_INV_HAB': 'D_INV_HAB', 'SOURCES': 'SOURCES', 'SURF_HABI': 'SURF_HABI', 'PERI_HABI': 'PERI_HABI', 'SURFACE': 'SURFACE', 'id_2': 'id_2', 'Nom_Commun': 'Nom_Commun', 'Population': 'Population', 'Fiscal Med': 'Fiscal Med', 'Nom SIVOS': 'Nom SIVOS', 'Comp. RC': 'Comp. RC', });
lyr_Observationsfaunistiquesetfloristiques_67.set('fieldAliases', {'id_unique': 'id_unique', 'date': 'date', 'nlat': 'nlat', 'refe': 'refe', 'nver': 'nver', 'nbre': 'nbre', 'nbrt': 'nbrt', 'observateu': 'observateu', 'structure': 'structure', 'l_id': 'l_id', });
lyr_InventaireOBHEN_68.set('fieldAliases', {'fid': 'fid', 'UUID': 'UUID', 'ID_OBHEN': 'ID_OBHEN', 'Date': 'Date', 'Anee (auto': 'Anee (auto', 'Observateu': 'Observateu', 'Determinat': 'Determinat', 'Structure': 'Structure', 'Strucutre_': 'Strucutre_', 'Espece': 'Espece', 'Taxon vali': 'Taxon vali', 'cd_nom (au': 'cd_nom (au', 'groupe (au': 'groupe (au', 'Commune': 'Commune', 'INSEE': 'INSEE', 'Departemen': 'Departemen', 'Commune no': 'Commune no', 'Lieu-dit': 'Lieu-dit', 'X (L93)': 'X (L93)', 'Y (L93)': 'Y (L93)', 'Echelle va': 'Echelle va', 'Indice de': 'Indice de', 'Effectifs': 'Effectifs', 'Effectif_1': 'Effectif_1', 'Effectif_2': 'Effectif_2', 'Effectif_3': 'Effectif_3', 'ecrases ro': 'ecrases ro', 'Protocole': 'Protocole', 'Enr_donnee': 'Enr_donnee', 'Habitat (I': 'Habitat (I', 'Nature du': 'Nature du', 'Milieu (BD': 'Milieu (BD', 'Commentair': 'Commentair', 'Diffusion': 'Diffusion', 'ID_CLICNAT': 'ID_CLICNAT', 'ID_ODIN': 'ID_ODIN', 'ID_undrago': 'ID_undrago', 'Code INPN': 'Code INPN', 'Tri': 'Tri', 'Observat_1': 'Observat_1', 'mails': 'mails', 'id': 'id', 'Nom_Commun': 'Nom_Commun', 'Population': 'Population', 'Fiscal Med': 'Fiscal Med', 'Nom SIVOS': 'Nom SIVOS', 'Comp. RC': 'Comp. RC', });
lyr_Quelquesespcesenjeuxdeprservation_69.set('fieldAliases', {'especes': 'especes', });
lyr_Inventairesparanne_70.set('fieldAliases', {'fid': 'fid', 'NOM_COMMUN': 'NOM_COMMUN', 'Annee': 'Annee', 'Nom commun': 'Nom commun', 'Année du relevé': 'Année du relevé', });
lyr_PopulationpiscicoledIntrtCommunautaire_71.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Code_sp1': 'Code_sp1', 'Code_sp2': 'Code_sp2', 'Date_relev': 'Date_relev', });
lyr_AgriondeMercure_72.set('fieldAliases', {'fid': 'fid', 'NUM_SITE': 'NUM_SITE', 'ID_ESP_PT': 'ID_ESP_PT', 'CODE_ESP': 'CODE_ESP', 'STATUT_ESP': 'STATUT_ESP', 'CODE_COL': 'CODE_COL', 'DATE_OBS_ESP': 'DATE_OBS_ESP', 'OBSERV': 'OBSERV', 'SOURCES': 'SOURCES', 'MISE_A_JOUR': 'MISE_A_JOUR', });
lyr_Chauvessouris_73.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'TYPE': 'TYPE', 'R�f': 'R�f', 'Pass': 'Pass', 'Activ': 'Activ', 'Rich': 'Rich', 'layer': 'layer', 'path': 'path', });
lyr_Grenouillescrapauds_74.set('fieldAliases', {'fid': 'fid', 'Methode de': 'Methode de', 'Stade': 'Stade', 'Commentair': 'Commentair', 'Espèce (nom commun)': 'Espèce (nom commun)', 'Espèce (nom scientifique)': 'Espèce (nom scientifique)', 'Nombre d\'individus': 'Nombre d\'individus', 'Année du relevé': 'Année du relevé', 'Source': 'Source', });
lyr_Scarabepiqueprune_75.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'TYPE': 'TYPE', });
lyr_Tritoncrtinventaireparanne_76.set('fieldAliases', {'fid': 'fid', 'Methode de': 'Methode de', 'Stade': 'Stade', 'Commentair': 'Commentair', 'Espèce (nom commun)': 'Espèce (nom commun)', 'Espèce (nom scientifique)': 'Espèce (nom scientifique)', 'Nombre d\'individus': 'Nombre d\'individus', 'Année du relevé': 'Année du relevé', 'Source': 'Source', });
lyr_MaresTritoncrtPrsencehistorique_77.set('fieldAliases', {'CODE_CB': 'CODE_CB', 'CODE_N2000': 'CODE_N2000', 'CODE_COL': 'CODE_COL', 'STATUT_HAB': 'STATUT_HAB', 'Superficie': 'Superficie', 'Profondeur': 'Profondeur', '% v�g�ta': '% v�g�ta', 'Ombrage': 'Ombrage', 'par_voisin': 'par_voisin', 'Usage': 'Usage', 'Eau': 'Eau', 'Pr�dateurs': 'Pr�dateurs', 'Pr�senceTC': 'Pr�senceTC', 'PotentieTC': 'PotentieTC', 'Sal.Tac': 'Sal.Tac', 'Tri. Pal.': 'Tri. Pal.', 'Tri. Pon.': 'Tri. Pon.', 'Tri. Alp.': 'Tri. Alp.', 'Aly. Acc.': 'Aly. Acc.', 'Cra. Com.': 'Cra. Com.', 'Rai. Ver.': 'Rai. Ver.', 'Gre. Rou.': 'Gre. Rou.', 'Gre. Ver.': 'Gre. Ver.', 'ID': 'ID', 'N2000': 'N2000', 'ANNEE': 'ANNEE', 'SOURCE': 'SOURCE', 'DIST_300m': 'DIST_300m', 'DIST_1000m': 'DIST_1000m', });
lyr_MaresTritoncrtPrsencedepuis2012_78.set('fieldAliases', {'CODE_CB': 'CODE_CB', 'CODE_N2000': 'CODE_N2000', 'CODE_COL': 'CODE_COL', 'STATUT_HAB': 'STATUT_HAB', 'Superficie': 'Superficie', 'Profondeur': 'Profondeur', '% v�g�ta': '% v�g�ta', 'Ombrage': 'Ombrage', 'par_voisin': 'par_voisin', 'Usage': 'Usage', 'Eau': 'Eau', 'Pr�dateurs': 'Pr�dateurs', 'Pr�senceTC': 'Pr�senceTC', 'PotentieTC': 'PotentieTC', 'Sal.Tac': 'Sal.Tac', 'Tri. Pal.': 'Tri. Pal.', 'Tri. Pon.': 'Tri. Pon.', 'Tri. Alp.': 'Tri. Alp.', 'Aly. Acc.': 'Aly. Acc.', 'Cra. Com.': 'Cra. Com.', 'Rai. Ver.': 'Rai. Ver.', 'Gre. Rou.': 'Gre. Rou.', 'Gre. Ver.': 'Gre. Ver.', 'ID': 'ID', 'N2000': 'N2000', 'ANNEE': 'ANNEE', 'SOURCE': 'SOURCE', 'DIST_300m': 'DIST_300m', 'DIST_1000m': 'DIST_1000m', 'DIST_500m': 'DIST_500m', });
lyr_Altitude_79.set('fieldAliases', {'ID': 'ID', 'ALTITUDE': 'ALTITUDE', 'NAT_TOPO': 'NAT_TOPO', 'IMPORTANCE': 'IMPORTANCE', 'layer': 'layer', 'path': 'path', });
lyr_CommunautdeCommunesBrayEawy_80.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_CommunautdeCommunesdeLondinires_81.set('fieldAliases', {'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_CommunautdeCommunesdes4Rivires_82.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_PETRduPaysdeBray_83.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'layer': 'layer', 'path': 'path', });
lyr_Communes_84.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_Naturedessols_1.set('fieldImages', {'fid': '', 'MI_PRINX': 'TextEdit', 'CARTE': 'Range', 'CODE': 'Range', 'CODE_LEG': 'Range', 'NOTATION': 'TextEdit', 'DESCR': 'TextEdit', 'C_FOND': 'TextEdit', 'M_FOND': 'TextEdit', 'J_FOND': 'TextEdit', 'N_FOND': 'TextEdit', 'NOM_SYMB': 'TextEdit', 'C_SYMB': 'TextEdit', 'M_SYMB': 'TextEdit', 'J_SYMB': 'TextEdit', 'N_SYMB': 'TextEdit', 'ROT_SYMB': 'Range', 'Nom': 'TextEdit', });
lyr_LimitesgologiquesduPaysdeBray_2.set('fieldImages', {'fid': 'TextEdit', 'MI_PRINX': 'TextEdit', 'CARTE': 'Range', 'CODE': 'Range', 'CODE_LEG': 'Range', 'NOTATION': 'TextEdit', 'DESCR': 'TextEdit', 'C_FOND': 'TextEdit', 'M_FOND': 'TextEdit', 'J_FOND': 'TextEdit', 'N_FOND': 'TextEdit', 'NOM_SYMB': 'TextEdit', 'C_SYMB': 'TextEdit', 'M_SYMB': 'TextEdit', 'J_SYMB': 'TextEdit', 'N_SYMB': 'TextEdit', 'ROT_SYMB': 'Range', });
lyr_Formationsherbaces_3.set('fieldImages', {'fid': '', 'ID': '', 'CODE_CS': '', 'CODE_US': '', 'MILLESIME': '', 'SOURCE': '', 'OSSATURE': '', 'ID_ORIGINE': '', 'CODE_OR': '', });
lyr_Autresformationsligneuses_4.set('fieldImages', {'fid': '', 'ID': '', 'CODE_CS': '', 'CODE_US': '', 'MILLESIME': '', 'SOURCE': '', 'OSSATURE': '', 'ID_ORIGINE': '', 'CODE_OR': '', });
lyr_Formationarbustivesetsousarbrisseaux_5.set('fieldImages', {'fid': '', 'ID': '', 'CODE_CS': '', 'CODE_US': '', 'MILLESIME': '', 'SOURCE': '', 'OSSATURE': '', 'ID_ORIGINE': '', 'CODE_OR': '', });
lyr_Peuplementdeconifres_6.set('fieldImages', {'fid': '', 'ID': '', 'CODE_CS': '', 'CODE_US': '', 'MILLESIME': '', 'SOURCE': '', 'OSSATURE': '', 'ID_ORIGINE': '', 'CODE_OR': '', });
lyr_Peuplementdefeuillus_7.set('fieldImages', {'fid': '', 'ID': '', 'CODE_CS': '', 'CODE_US': '', 'MILLESIME': '', 'SOURCE': '', 'OSSATURE': '', 'ID_ORIGINE': '', 'CODE_OR': '', });
lyr_Surfacesdeau_8.set('fieldImages', {'fid': '', 'ID': '', 'CODE_CS': '', 'CODE_US': '', 'MILLESIME': '', 'SOURCE': '', 'OSSATURE': '', 'ID_ORIGINE': '', 'CODE_OR': '', });
lyr_Zonesautrematriauxcomposites_9.set('fieldImages', {'fid': '', 'ID': '', 'CODE_CS': '', 'CODE_US': '', 'MILLESIME': '', 'SOURCE': '', 'OSSATURE': '', 'ID_ORIGINE': '', 'CODE_OR': '', });
lyr_Zonesmatriauxminraux_10.set('fieldImages', {'fid': '', 'ID': '', 'CODE_CS': '', 'CODE_US': '', 'MILLESIME': '', 'SOURCE': '', 'OSSATURE': '', 'ID_ORIGINE': '', 'CODE_OR': '', });
lyr_Zonesnonbties_11.set('fieldImages', {'fid': '', 'ID': '', 'CODE_CS': '', 'CODE_US': '', 'MILLESIME': '', 'SOURCE': '', 'OSSATURE': '', 'ID_ORIGINE': '', 'CODE_OR': '', });
lyr_Zonesbties_12.set('fieldImages', {'fid': '', 'ID': '', 'CODE_CS': '', 'CODE_US': '', 'MILLESIME': '', 'SOURCE': '', 'OSSATURE': '', 'ID_ORIGINE': '', 'CODE_OR': '', });
lyr_Surfacesnonartificialises_13.set('fieldImages', {'ID': 'TextEdit', 'CODE_CS': 'TextEdit', 'CODE_US': 'TextEdit', 'MILLESIME': 'TextEdit', 'SOURCE': 'TextEdit', 'OSSATURE': 'Range', 'ID_ORIGINE': 'TextEdit', 'CODE_OR': 'TextEdit', });
lyr_Surfacesartificialises_14.set('fieldImages', {'ID': 'TextEdit', 'CODE_CS': 'TextEdit', 'CODE_US': 'TextEdit', 'MILLESIME': 'TextEdit', 'SOURCE': 'TextEdit', 'OSSATURE': 'Range', 'ID_ORIGINE': 'TextEdit', 'CODE_OR': 'TextEdit', });
lyr_ZNIEFFType2_15.set('fieldImages', {'NOM_ZNIEFF': 'TextEdit', 'CODE_NATIO': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'SURFACE_HA': 'TextEdit', 'SAISIE_LOG': 'TextEdit', 'DATE_DE_VA': 'DateTime', 'ORGANISME': 'TextEdit', 'INCLUSION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'URLFICTECH': 'TextEdit', 'URLFICPUB': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_ZNIEFFType1_16.set('fieldImages', {'NOM_ZNIEFF': 'TextEdit', 'CODE_NATIO': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'SURFACE_HA': 'TextEdit', 'SAISIE_LOG': 'TextEdit', 'DATE_DE_VA': 'DateTime', 'ORGANISME': 'TextEdit', 'INCLUSION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'URLFICTECH': 'TextEdit', 'URLFICPUB': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_Zoneshumides_17.set('fieldImages', {'LIBELLE': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_SitesNatura2000_18.set('fieldImages', {'SITECODE': 'TextEdit', 'SITENAME': 'TextEdit', });
lyr_SiteNatura2000PaysdeBrayHumide_19.set('fieldImages', {'ID': 'Range', 'SURFACE': 'TextEdit', 'NUM_SITE': 'TextEdit', });
lyr_ZAPCuestas_20.set('fieldImages', {'nom_zsc': 'TextEdit', 'ident': 'TextEdit', 'type': 'TextEdit', 'etat': 'TextEdit', 'date_etat': 'TextEdit', 'date_regl': 'TextEdit', 'date_regl2': 'TextEdit', 'surf_ha': 'TextEdit', 'suivi': 'TextEdit', 'lien_FSD': 'TextEdit', 'lien_donn': 'TextEdit', 'lien_docob': 'TextEdit', 'lien_atlas': 'TextEdit', 'lien_texte': 'TextEdit', 'lien_metad': 'TextEdit', 'Code_zscpd': 'TextEdit', });
lyr_Sitesnaturelsclasss_21.set('fieldImages', {'fid': 'TextEdit', 'Nom_sc': 'TextEdit', 'Ident': 'TextEdit', 'Texte': 'TextEdit', 'Modif_text': 'TextEdit', 'Surfcalc_h': 'TextEdit', 'Lien_donn': 'TextEdit', 'Lien_metad': 'TextEdit', });
lyr_Sitesnaturelsinscrits_22.set('fieldImages', {'fid': 'TextEdit', 'nom_si': 'TextEdit', 'ident': 'TextEdit', 'texte': 'TextEdit', 'modif_text': 'TextEdit', 'surfcalc_h': 'TextEdit', 'lien_donn': 'TextEdit', 'lien_metad': 'TextEdit', });
lyr_CommunesensitePaysdeBrayHumide_23.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Tramebocagre_24.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'TextEdit', 'ID_PARCEL': 'TextEdit', 'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', 'CULTURE_D1': 'TextEdit', 'CULTURE_D2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Area': 'TextEdit', });
lyr_Rservoirsboiss_25.set('fieldImages', {'gid': 'Range', 'id': 'TextEdit', 'prec_plani': 'TextEdit', 'nature': 'TextEdit', 'Area': 'TextEdit', });
lyr_Corridorshumides_26.set('fieldImages', {'DN': 'TextEdit', 'Area': 'TextEdit', });
lyr_Rservoirshumides_27.set('fieldImages', {'fid': 'TextEdit', 'FID_RB_ZH_': 'TextEdit', 'SOUS_TRAME': 'TextEdit', 'REMARQUE': 'TextEdit', 'FID_RB_ZH1': 'TextEdit', 'OBJECTID': 'TextEdit', 'TYPE': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'NUM_SITE': 'TextEdit', 'ID_HAB_POL': 'TextEdit', 'SURF_HAB_P': 'TextEdit', 'PERI_HAB_P': 'TextEdit', 'MOSAIQUE': 'TextEdit', 'CODE_PHYTO': 'TextEdit', 'CODE_CB': 'TextEdit', 'CODE_N2000': 'TextEdit', 'CODE_COL': 'TextEdit', 'PART_POLY_': 'TextEdit', 'PART_POL_1': 'TextEdit', 'STATUT_HAB': 'TextEdit', 'TYPI': 'TextEdit', 'ORIGINALIT': 'TextEdit', 'REPRES': 'TextEdit', 'INTER_PAT': 'TextEdit', 'ETAT_CONS': 'TextEdit', 'DYNA': 'TextEdit', 'RESTAUR': 'TextEdit', 'OBSERVATIO': 'TextEdit', 'DATE_INV_H': 'TextEdit', 'SOURCES': 'TextEdit', 'ETAT_CONS_': 'TextEdit', 'DYNA_2014': 'TextEdit', 'RESTAUR_20': 'TextEdit', 'OBS_2014': 'TextEdit', 'Date_misej': 'TextEdit', 'SOURCE_201': 'TextEdit', 'ID': 'TextEdit', 'ID_HAB_PO': 'TextEdit', 'PART_PO_1': 'TextEdit', 'PART_PO_2': 'TextEdit', 'ORIGINAL': 'TextEdit', 'OBSERV': 'TextEdit', 'D_INV_HAB': 'TextEdit', 'SURF_HABI': 'TextEdit', 'PERI_HABI': 'TextEdit', 'SURFACE': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'NOM_ZNIEFF': 'TextEdit', 'CODE_NATIO': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'SURFACE_HA': 'TextEdit', 'SAISIE_LOG': 'TextEdit', 'DATE_DE_VA': 'TextEdit', 'ORGANISME': 'TextEdit', 'INCLUSION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'URLFICTECH': 'TextEdit', 'URLFICPUB': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_Dpriseagricole_28.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'TextEdit', 'left_2': 'TextEdit', 'top_2': 'TextEdit', 'right_2': 'TextEdit', 'bottom_2': 'TextEdit', 'id_2': 'TextEdit', 'Surface': 'TextEdit', 'Densité': 'TextEdit', });
lyr_Rseaucalcicolepotentiel_29.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'surface': 'TextEdit', 'nom_commun': 'TextEdit', 'num_insee': 'TextEdit', 'departemen': 'TextEdit', 'code_znief': 'TextEdit', 'nom_znieff': 'TextEdit', 'lien_fiche': 'TextEdit', 'code_natur': 'TextEdit', 'nom_natura': 'TextEdit', 'nom_appb': 'TextEdit', 'nom_sitein': 'TextEdit', 'nom_sitecl': 'TextEdit', 'nom_sitege': 'TextEdit', 'hierarchis': 'TextEdit', 'enjeu_ecol': 'TextEdit', 'lienfichep': 'TextEdit', 'usage_agri': 'TextEdit', 'Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Rservoirscalcicoles_30.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'surface': 'TextEdit', 'nom_commun': 'TextEdit', 'num_insee': 'TextEdit', 'departemen': 'TextEdit', 'code_znief': 'TextEdit', 'nom_znieff': 'TextEdit', 'lien_fiche': 'TextEdit', 'code_natur': 'TextEdit', 'nom_natura': 'TextEdit', 'nom_appb': 'TextEdit', 'nom_sitein': 'TextEdit', 'nom_sitecl': 'TextEdit', 'nom_sitege': 'TextEdit', 'hierarchis': 'TextEdit', 'enjeu_ecol': 'TextEdit', 'lienfichep': 'TextEdit', 'usage_agri': 'TextEdit', 'Area': 'TextEdit', });
lyr_Tramecalcicole_31.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'surface': 'TextEdit', 'nom_commun': 'TextEdit', 'num_insee': 'TextEdit', 'departemen': 'TextEdit', 'code_znief': 'TextEdit', 'nom_znieff': 'TextEdit', 'lien_fiche': 'TextEdit', 'code_natur': 'TextEdit', 'nom_natura': 'TextEdit', 'nom_appb': 'TextEdit', 'nom_sitein': 'TextEdit', 'nom_sitecl': 'TextEdit', 'nom_sitege': 'TextEdit', 'hierarchis': 'TextEdit', 'enjeu_ecol': 'TextEdit', 'lienfichep': 'TextEdit', 'usage_agri': 'TextEdit', 'Area': 'TextEdit', });
lyr_Rservoirssilicicoles_32.set('fieldImages', {'ID': 'Range', 'NUM_SITE': 'TextEdit', 'ID_HAB_PO': 'TextEdit', 'MOSAIQUE': 'TextEdit', 'CODE_PHYTO': 'TextEdit', 'CODE_CB': 'TextEdit', 'CODE_N2000': 'TextEdit', 'CODE_COL': 'TextEdit', 'PART_PO_1': 'TextEdit', 'PART_PO_2': 'TextEdit', 'STATUT_HAB': 'TextEdit', 'TYPI': 'TextEdit', 'ORIGINAL': 'TextEdit', 'REPRES': 'TextEdit', 'INTER_PAT': 'TextEdit', 'ETAT_CONS': 'TextEdit', 'DYNA': 'TextEdit', 'RESTAUR': 'TextEdit', 'OBSERV': 'TextEdit', 'D_INV_HAB': 'DateTime', 'SOURCES': 'TextEdit', 'SURF_HABI': 'TextEdit', 'PERI_HABI': 'TextEdit', 'SURFACE': 'TextEdit', });
lyr_Primtresdepointsdecaptages_33.set('fieldImages', {'fid': 'TextEdit', 'TYPE_PP': 'TextEdit', 'SOURCE_TRA': 'TextEdit', 'CODE_NAT': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Corridorsaquatiques_34.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'ARTIF': 'TextEdit', 'FICTIF': 'TextEdit', 'FRANCHISST': 'TextEdit', 'NOM': 'TextEdit', 'POS_SOL': 'Range', 'REGIME': 'TextEdit', 'Z_INI': 'TextEdit', 'Z_FIN': 'TextEdit', 'lenght': 'TextEdit', });
lyr_Rservoirsaquatiques_35.set('fieldImages', {'fid': '', 'ID_L1': 'TextEdit', 'Classt_L1': 'TextEdit', 'Min_FMEAS': 'TextEdit', 'Max_TMEAS': 'TextEdit', 'Code_Hydro': 'TextEdit', 'Nom_CE': 'TextEdit', 'Bras': 'TextEdit', 'Departemen': 'TextEdit', 'Region': 'TextEdit', 'UH': 'TextEdit', 'COMGEO': 'TextEdit', 'Especes_Ci': 'TextEdit', 'Enjeu_Mig_': 'TextEdit', 'Enjeu_TBE': 'TextEdit', 'Enjeu_RB': 'TextEdit', 'Liste_RB': 'TextEdit', 'Limite_Amo': 'TextEdit', 'Limite_ava': 'TextEdit', 'Portion': 'TextEdit', 'Portee_Cla': 'TextEdit', 'Xav_L93': 'TextEdit', 'Yav_L93': 'TextEdit', 'Xam_L93': 'TextEdit', 'Yam_L93': 'TextEdit', 'ObjAv_XLS': 'TextEdit', 'ObjAv_SIG': 'TextEdit', 'Date_Modif': 'TextEdit', 'Auteur': 'TextEdit', 'Objet': 'TextEdit', 'ID_L2': 'TextEdit', 'Classt_L2': 'TextEdit', 'Enjeu_sedi': 'TextEdit', 'Nb_Ouvr': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Longueur': 'TextEdit', });
lyr_SMBVdelEpte_36.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'CdOH': 'TextEdit', 'TopoOH': 'TextEdit', 'LangueNomO': 'TextEdit', 'StatutNomO': 'TextEdit', 'SourceNomO': 'TextEdit', 'TypTopoOH': 'TextEdit', 'DateCreati': 'TextEdit', 'StatutOH': 'TextEdit', 'OrigineBV': 'TextEdit', 'CdExutoire': 'TextEdit', 'CdBH': 'TextEdit', 'Commentair': 'TextEdit', 'PrecPlaniO': 'TextEdit', 'ModObCoord': 'TextEdit', 'ProjCoordO': 'TextEdit', });
lyr_SMBVdelAndelle_37.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Nom': 'TextEdit', });
lyr_SMBVdelaBresle_38.set('fieldImages', {'Libelle': 'TextEdit', 'Idenr': 'TextEdit', 'Surface': 'TextEdit', });
lyr_SMBVdelYres_39.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'Surface': 'TextEdit', });
lyr_SMBVdelArques_40.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Nom': 'TextEdit', });
lyr_SMBVCaillyAubetteRobec_41.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'Champident': 'TextEdit', 'Surface': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Zonesdevgtation_42.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NATURE': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', });
lyr_HabitatsdIntrtCommunautaire_43.set('fieldImages', {'habitats_c': 'TextEdit', 'Type': 'TextEdit', });
lyr_Haies_44.set('fieldImages', {'ID': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'HAUTEUR': 'Range', 'LARGEUR': 'Range', 'SOURCES': 'TextEdit', 'ID_SOURCES': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', });
lyr_Surfaceshydrographiques_45.set('fieldImages', {'ID': 'TextEdit', 'CODE_HYDRO': 'TextEdit', 'CODE_PAYS': 'TextEdit', 'NATURE': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'SRC_COORD': 'TextEdit', 'SRC_ALTI': 'TextEdit', 'STATUT': 'TextEdit', 'PERSISTANC': 'TextEdit', 'SALINITE': 'TextEdit', 'ORIGINE': 'TextEdit', 'COMMENT': 'TextEdit', 'ID_P_EAU': 'TextEdit', 'ID_C_EAU': 'TextEdit', 'ID_ENT_TR': 'TextEdit', 'NOM_P_EAU': 'TextEdit', 'NOM_C_EAU': 'TextEdit', 'NOM_ENT_TR': 'TextEdit', });
lyr_Coursdeau_46.set('fieldImages', {'ID': 'TextEdit', 'CODE_HYDRO': 'TextEdit', 'CODE_PAYS': 'TextEdit', 'NATURE': 'TextEdit', 'FICTIF': 'TextEdit', 'ETAT': 'TextEdit', 'POS_SOL': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'SRC_COORD': 'TextEdit', 'SRC_ALTI': 'TextEdit', 'STATUT': 'TextEdit', 'PERSISTANC': 'TextEdit', 'FOSSE': 'TextEdit', 'NAVIGABL': 'TextEdit', 'SALINITE': 'TextEdit', 'NUM_ORDRE': 'TextEdit', 'CLA_ORDRE': 'TextEdit', 'ORIGINE': 'TextEdit', 'PER_ORDRE': 'TextEdit', 'SENS_ECOUL': 'TextEdit', 'RES_COULAN': 'TextEdit', 'DELIMIT': 'TextEdit', 'LARGEUR': 'TextEdit', 'BRAS': 'TextEdit', 'COMMENT': 'TextEdit', 'CODE_CARTH': 'TextEdit', 'IPE': 'TextEdit', 'ID_IPE': 'TextEdit', 'ID_C_EAU': 'TextEdit', 'ID_S_HYDRO': 'TextEdit', 'ID_ENT_TR': 'TextEdit', 'NOM_C_EAU': 'TextEdit', 'NOM_ENT_TR': 'TextEdit', });
lyr_Mares_47.set('fieldImages', {'_uid_': 'TextEdit', 'l_id': 'TextEdit', 'l_idstrp': 'TextEdit', 'date_local': 'TextEdit', 'statut_mar': 'TextEdit', 'type_m': 'TextEdit', });
lyr_Sitespollus_48.set('fieldImages', {'cd_metier': 'TextEdit', 'autre_id': 'TextEdit', 'nom_ets': 'TextEdit', 'nom_site': 'TextEdit', 'code_siret': 'TextEdit', 'stat_instr': 'TextEdit', 'date_debut': 'DateTime', 'date_fin': 'DateTime', 'descript': 'TextEdit', 'code_insee': 'TextEdit', 'nom_com': 'TextEdit', 'x_wgs84': 'TextEdit', 'y_wgs84': 'TextEdit', 'code_dpt': 'TextEdit', 'nom_dpt': 'TextEdit', 'code_reg': 'TextEdit', 'nom_reg': 'TextEdit', 'act_nafv2': 'TextEdit', 'act_naf': 'TextEdit', 'act_icpe': 'TextEdit', 'act_nafv1': 'TextEdit', });
lyr_SitesBASOL_49.set('fieldImages', {'cd_metier': 'TextEdit', 'autre_id': 'TextEdit', 'nom_etab': 'TextEdit', 'nom_instr': 'TextEdit', 'code_siret': 'TextEdit', 'stat_instr': 'TextEdit', 'date_debut': 'DateTime', 'date_fin': 'DateTime', 'descript': 'TextEdit', 'code_insee': 'TextEdit', 'nom_com': 'TextEdit', 'x_wgs84': 'TextEdit', 'y_wgs84': 'TextEdit', 'code_dpt': 'TextEdit', 'nom_dpt': 'TextEdit', 'code_reg': 'TextEdit', 'nom_reg': 'TextEdit', 'act_nafv2': 'TextEdit', 'act_naf': 'TextEdit', 'act_icpe': 'TextEdit', 'act_nafv1': 'TextEdit', });
lyr_SAEPABraySudBacRouvrayCatillon_50.set('fieldImages', {'BAC_propos': '', 'Surface': 'TextEdit', 'Nom': 'TextEdit', 'Opérateur': 'TextEdit', });
lyr_SAEPABraySudBacMesnilLieubray_51.set('fieldImages', {'BAC_final': '', 'Surface': 'TextEdit', 'Nom': 'TextEdit', 'Opérateur': 'TextEdit', });
lyr_SAEPABraySudBacGisors_52.set('fieldImages', {'LIBELLEOPE': 'TextEdit', 'LIBELLEPAE': 'TextEdit', 'Surface': 'TextEdit', 'Opérateur': 'TextEdit', });
lyr_SIAEPA3SourcesBacSommery_53.set('fieldImages', {'BAC_Sommer': 'TextEdit', 'SURFACE': 'TextEdit', 'Nom': 'TextEdit', 'Opérateur': 'TextEdit', });
lyr_SIAEPA3SourcesBacMonterolier_54.set('fieldImages', {'BAC_Mont��': 'TextEdit', 'SURFACE': 'TextEdit', 'Nom': 'TextEdit', 'Opérateur': 'TextEdit', });
lyr_SIAEPA02BrayBacStGermainsurEaulne_55.set('fieldImages', {'ID_INTERNE': 'TextEdit', 'ID_FONCTIO': 'TextEdit', 'NOM': 'TextEdit', 'SITUATION_': 'TextEdit', 'SITUATIO_1': 'TextEdit', 'IDUNITE_GE': 'TextEdit', 'IDCOMMUNE': 'TextEdit', 'QUALITE_GE': 'TextEdit', 'QUALITE__1': 'TextEdit', 'PRECISION_': 'TextEdit', 'PRECISIO_1': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'IDTYPE_SIT': 'TextEdit', 'IDFICHE_TE': 'TextEdit', 'ESRI_OID': 'TextEdit', 'Opérateur': 'TextEdit', });
lyr_SIAEPA02BrayBacNeuvilles_56.set('fieldImages', {'Nom': 'TextEdit', 'Operateur': 'TextEdit', 'PAEC': 'TextEdit', 'Id': 'TextEdit', 'id_2': 'TextEdit', 'surf': 'TextEdit', 'Aire': 'TextEdit', 'id_3': 'TextEdit', 'surf_2': 'TextEdit', 'Aire_2': 'TextEdit', 'NOM_1': 'TextEdit', 'NOM_2': 'TextEdit', });
lyr_SIAEPA02BrayBacNesleHodengBeaussault_57.set('fieldImages', {'ID': 'TextEdit', 'Nom': 'TextEdit', 'Aire': 'TextEdit', 'NOM_1': 'TextEdit', 'Opérateur': 'TextEdit', });
lyr_SIAEPA02BrayBacMesnires_58.set('fieldImages', {'Nom': 'TextEdit', 'Operateur': 'TextEdit', 'PAEC': 'TextEdit', 'Id': 'TextEdit', 'id_2': 'TextEdit', 'surf': 'TextEdit', 'Aire': 'TextEdit', 'id_3': 'TextEdit', 'surf_2': 'TextEdit', 'Aire_2': 'TextEdit', 'NOM_1': 'TextEdit', });
lyr_SIAEPA02BrayBacEsclavelles_59.set('fieldImages', {'BAC_Esclav': 'TextEdit', 'SURFACE': 'TextEdit', 'Nom': 'TextEdit', 'Opérateur': 'TextEdit', });
lyr_SIAEPA02BrayBacBully_60.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CARTEGEOL1': 'TextEdit', 'ID': 'TextEdit', 'GEOLNUM': 'TextEdit', 'CENTROID_Y': 'TextEdit', 'CENTROID_X': 'TextEdit', 'CATégORIE': 'TextEdit', 'Sols': 'TextEdit', 'Indice_sol': 'TextEdit', 'surf': 'TextEdit', 'Nom': 'TextEdit', 'Opérateur': 'TextEdit', });
lyr_Foyersfloristiques_61.set('fieldImages', {'id': 'TextEdit', 'Date': 'TextEdit', 'Source': 'TextEdit', 'Espèce': 'TextEdit', 'État': 'TextEdit', });
lyr_Linairedcrevissespiedsblancs_62.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Foyersdcrevissespiedsblancs_63.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Code_sp1': 'TextEdit', 'Code_sp2': 'TextEdit', 'Date_relev': 'TextEdit', });
lyr_LinairedcrevissesdeCalifornie_64.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_FoyersdcrevissesdeCalifornie_65.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Code_sp1': 'TextEdit', 'Code_sp2': 'TextEdit', 'Date_relev': 'TextEdit', });
lyr_Tourbire_66.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'NUM_SITE': 'TextEdit', 'ID_HAB_PO': 'TextEdit', 'MOSAIQUE': 'TextEdit', 'CODE_PHYTO': 'TextEdit', 'CODE_CB': 'TextEdit', 'CODE_N2000': 'TextEdit', 'CODE_COL': 'TextEdit', 'PART_PO_1': 'TextEdit', 'PART_PO_2': 'TextEdit', 'STATUT_HAB': 'TextEdit', 'TYPI': 'TextEdit', 'ORIGINAL': 'TextEdit', 'REPRES': 'TextEdit', 'INTER_PAT': 'TextEdit', 'ETAT_CONS': 'TextEdit', 'DYNA': 'TextEdit', 'RESTAUR': 'TextEdit', 'OBSERV': 'TextEdit', 'D_INV_HAB': 'DateTime', 'SOURCES': 'TextEdit', 'SURF_HABI': 'TextEdit', 'PERI_HABI': 'TextEdit', 'SURFACE': 'TextEdit', 'id_2': 'TextEdit', 'Nom_Commun': 'TextEdit', 'Population': 'TextEdit', 'Fiscal Med': 'TextEdit', 'Nom SIVOS': 'TextEdit', 'Comp. RC': 'TextEdit', });
lyr_Observationsfaunistiquesetfloristiques_67.set('fieldImages', {'id_unique': 'TextEdit', 'date': 'TextEdit', 'nlat': 'TextEdit', 'refe': 'TextEdit', 'nver': 'TextEdit', 'nbre': 'TextEdit', 'nbrt': 'TextEdit', 'observateu': 'TextEdit', 'structure': 'TextEdit', 'l_id': 'TextEdit', });
lyr_InventaireOBHEN_68.set('fieldImages', {'fid': 'TextEdit', 'UUID': 'TextEdit', 'ID_OBHEN': 'TextEdit', 'Date': 'TextEdit', 'Anee (auto': 'TextEdit', 'Observateu': 'TextEdit', 'Determinat': 'TextEdit', 'Structure': 'TextEdit', 'Strucutre_': 'TextEdit', 'Espece': 'TextEdit', 'Taxon vali': 'TextEdit', 'cd_nom (au': 'TextEdit', 'groupe (au': 'TextEdit', 'Commune': 'TextEdit', 'INSEE': 'TextEdit', 'Departemen': 'TextEdit', 'Commune no': 'TextEdit', 'Lieu-dit': 'TextEdit', 'X (L93)': 'TextEdit', 'Y (L93)': 'TextEdit', 'Echelle va': 'TextEdit', 'Indice de': 'TextEdit', 'Effectifs': 'TextEdit', 'Effectif_1': 'TextEdit', 'Effectif_2': 'TextEdit', 'Effectif_3': 'TextEdit', 'ecrases ro': 'TextEdit', 'Protocole': 'TextEdit', 'Enr_donnee': 'TextEdit', 'Habitat (I': 'TextEdit', 'Nature du': 'TextEdit', 'Milieu (BD': 'TextEdit', 'Commentair': 'TextEdit', 'Diffusion': 'TextEdit', 'ID_CLICNAT': 'TextEdit', 'ID_ODIN': 'TextEdit', 'ID_undrago': 'TextEdit', 'Code INPN': 'TextEdit', 'Tri': 'TextEdit', 'Observat_1': 'TextEdit', 'mails': 'TextEdit', 'id': 'TextEdit', 'Nom_Commun': 'TextEdit', 'Population': 'TextEdit', 'Fiscal Med': 'TextEdit', 'Nom SIVOS': 'TextEdit', 'Comp. RC': 'TextEdit', });
lyr_Quelquesespcesenjeuxdeprservation_69.set('fieldImages', {'especes': 'TextEdit', });
lyr_Inventairesparanne_70.set('fieldImages', {'fid': 'TextEdit', 'NOM_COMMUN': 'TextEdit', 'Annee': 'Range', 'Nom commun': 'TextEdit', 'Année du relevé': 'TextEdit', });
lyr_PopulationpiscicoledIntrtCommunautaire_71.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Code_sp1': 'TextEdit', 'Code_sp2': 'TextEdit', 'Date_relev': 'TextEdit', });
lyr_AgriondeMercure_72.set('fieldImages', {'fid': 'TextEdit', 'NUM_SITE': 'TextEdit', 'ID_ESP_PT': 'TextEdit', 'CODE_ESP': 'TextEdit', 'STATUT_ESP': 'TextEdit', 'CODE_COL': 'TextEdit', 'DATE_OBS_ESP': 'TextEdit', 'OBSERV': 'TextEdit', 'SOURCES': 'TextEdit', 'MISE_A_JOUR': 'TextEdit', });
lyr_Chauvessouris_73.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'TYPE': 'TextEdit', 'R�f': 'TextEdit', 'Pass': 'Range', 'Activ': 'TextEdit', 'Rich': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Grenouillescrapauds_74.set('fieldImages', {'fid': 'TextEdit', 'Methode de': 'TextEdit', 'Stade': 'TextEdit', 'Commentair': 'TextEdit', 'Espèce (nom commun)': 'TextEdit', 'Espèce (nom scientifique)': 'TextEdit', 'Nombre d\'individus': 'TextEdit', 'Année du relevé': 'TextEdit', 'Source': 'TextEdit', });
lyr_Scarabepiqueprune_75.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'TYPE': 'TextEdit', });
lyr_Tritoncrtinventaireparanne_76.set('fieldImages', {'fid': 'TextEdit', 'Methode de': 'TextEdit', 'Stade': 'TextEdit', 'Commentair': 'TextEdit', 'Espèce (nom commun)': 'TextEdit', 'Espèce (nom scientifique)': 'TextEdit', 'Nombre d\'individus': 'TextEdit', 'Année du relevé': 'TextEdit', 'Source': 'TextEdit', });
lyr_MaresTritoncrtPrsencehistorique_77.set('fieldImages', {'CODE_CB': 'TextEdit', 'CODE_N2000': 'TextEdit', 'CODE_COL': 'TextEdit', 'STATUT_HAB': 'TextEdit', 'Superficie': 'TextEdit', 'Profondeur': 'TextEdit', '% v�g�ta': '', 'Ombrage': 'TextEdit', 'par_voisin': 'TextEdit', 'Usage': 'TextEdit', 'Eau': 'TextEdit', 'Pr�dateurs': '', 'Pr�senceTC': '', 'PotentieTC': 'TextEdit', 'Sal.Tac': 'TextEdit', 'Tri. Pal.': 'TextEdit', 'Tri. Pon.': 'TextEdit', 'Tri. Alp.': 'TextEdit', 'Aly. Acc.': 'TextEdit', 'Cra. Com.': 'TextEdit', 'Rai. Ver.': 'TextEdit', 'Gre. Rou.': 'TextEdit', 'Gre. Ver.': 'TextEdit', 'ID': 'TextEdit', 'N2000': 'TextEdit', 'ANNEE': 'TextEdit', 'SOURCE': 'TextEdit', 'DIST_300m': 'TextEdit', 'DIST_1000m': 'TextEdit', });
lyr_MaresTritoncrtPrsencedepuis2012_78.set('fieldImages', {'CODE_CB': 'TextEdit', 'CODE_N2000': 'TextEdit', 'CODE_COL': 'TextEdit', 'STATUT_HAB': 'TextEdit', 'Superficie': 'TextEdit', 'Profondeur': 'TextEdit', '% v�g�ta': '', 'Ombrage': 'TextEdit', 'par_voisin': 'TextEdit', 'Usage': 'TextEdit', 'Eau': 'TextEdit', 'Pr�dateurs': '', 'Pr�senceTC': '', 'PotentieTC': 'TextEdit', 'Sal.Tac': 'TextEdit', 'Tri. Pal.': 'TextEdit', 'Tri. Pon.': 'TextEdit', 'Tri. Alp.': 'TextEdit', 'Aly. Acc.': 'TextEdit', 'Cra. Com.': 'TextEdit', 'Rai. Ver.': 'TextEdit', 'Gre. Rou.': 'TextEdit', 'Gre. Ver.': 'TextEdit', 'ID': 'TextEdit', 'N2000': 'TextEdit', 'ANNEE': 'TextEdit', 'SOURCE': 'TextEdit', 'DIST_300m': 'TextEdit', 'DIST_1000m': 'TextEdit', 'DIST_500m': '', });
lyr_Altitude_79.set('fieldImages', {'ID': 'TextEdit', 'ALTITUDE': 'TextEdit', 'NAT_TOPO': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CommunautdeCommunesBrayEawy_80.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_CommunautdeCommunesdeLondinires_81.set('fieldImages', {'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_CommunautdeCommunesdes4Rivires_82.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_PETRduPaysdeBray_83.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Communes_84.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Naturedessols_1.set('fieldLabels', {'fid': 'hidden field', 'MI_PRINX': 'hidden field', 'CARTE': 'hidden field', 'CODE': 'hidden field', 'CODE_LEG': 'hidden field', 'NOTATION': 'hidden field', 'DESCR': 'header label - visible with data', 'C_FOND': 'hidden field', 'M_FOND': 'hidden field', 'J_FOND': 'hidden field', 'N_FOND': 'hidden field', 'NOM_SYMB': 'hidden field', 'C_SYMB': 'hidden field', 'M_SYMB': 'hidden field', 'J_SYMB': 'hidden field', 'N_SYMB': 'hidden field', 'ROT_SYMB': 'hidden field', 'Nom': 'hidden field', });
lyr_LimitesgologiquesduPaysdeBray_2.set('fieldLabels', {'fid': 'hidden field', 'MI_PRINX': 'hidden field', 'CARTE': 'hidden field', 'CODE': 'hidden field', 'CODE_LEG': 'hidden field', 'NOTATION': 'hidden field', 'DESCR': 'hidden field', 'C_FOND': 'hidden field', 'M_FOND': 'hidden field', 'J_FOND': 'hidden field', 'N_FOND': 'hidden field', 'NOM_SYMB': 'hidden field', 'C_SYMB': 'hidden field', 'M_SYMB': 'hidden field', 'J_SYMB': 'hidden field', 'N_SYMB': 'hidden field', 'ROT_SYMB': 'hidden field', });
lyr_Formationsherbaces_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CODE_CS': 'header label - visible with data', 'CODE_US': 'header label - visible with data', 'MILLESIME': 'hidden field', 'SOURCE': 'hidden field', 'OSSATURE': 'hidden field', 'ID_ORIGINE': 'hidden field', 'CODE_OR': 'hidden field', });
lyr_Autresformationsligneuses_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CODE_CS': 'header label - visible with data', 'CODE_US': 'header label - visible with data', 'MILLESIME': 'hidden field', 'SOURCE': 'hidden field', 'OSSATURE': 'hidden field', 'ID_ORIGINE': 'hidden field', 'CODE_OR': 'hidden field', });
lyr_Formationarbustivesetsousarbrisseaux_5.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CODE_CS': 'header label - visible with data', 'CODE_US': 'header label - visible with data', 'MILLESIME': 'hidden field', 'SOURCE': 'hidden field', 'OSSATURE': 'hidden field', 'ID_ORIGINE': 'hidden field', 'CODE_OR': 'hidden field', });
lyr_Peuplementdeconifres_6.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CODE_CS': 'header label - visible with data', 'CODE_US': 'header label - visible with data', 'MILLESIME': 'hidden field', 'SOURCE': 'hidden field', 'OSSATURE': 'hidden field', 'ID_ORIGINE': 'hidden field', 'CODE_OR': 'hidden field', });
lyr_Peuplementdefeuillus_7.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CODE_CS': 'header label - visible with data', 'CODE_US': 'header label - visible with data', 'MILLESIME': 'hidden field', 'SOURCE': 'hidden field', 'OSSATURE': 'hidden field', 'ID_ORIGINE': 'hidden field', 'CODE_OR': 'hidden field', });
lyr_Surfacesdeau_8.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CODE_CS': 'header label - visible with data', 'CODE_US': 'header label - visible with data', 'MILLESIME': 'hidden field', 'SOURCE': 'hidden field', 'OSSATURE': 'hidden field', 'ID_ORIGINE': 'hidden field', 'CODE_OR': 'hidden field', });
lyr_Zonesautrematriauxcomposites_9.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CODE_CS': 'header label - visible with data', 'CODE_US': 'header label - visible with data', 'MILLESIME': 'hidden field', 'SOURCE': 'hidden field', 'OSSATURE': 'hidden field', 'ID_ORIGINE': 'hidden field', 'CODE_OR': 'hidden field', });
lyr_Zonesmatriauxminraux_10.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CODE_CS': 'header label - visible with data', 'CODE_US': 'header label - visible with data', 'MILLESIME': 'hidden field', 'SOURCE': 'hidden field', 'OSSATURE': 'hidden field', 'ID_ORIGINE': 'hidden field', 'CODE_OR': 'hidden field', });
lyr_Zonesnonbties_11.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CODE_CS': 'header label - visible with data', 'CODE_US': 'header label - visible with data', 'MILLESIME': 'hidden field', 'SOURCE': 'hidden field', 'OSSATURE': 'hidden field', 'ID_ORIGINE': 'hidden field', 'CODE_OR': 'hidden field', });
lyr_Zonesbties_12.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'CODE_CS': 'header label - visible with data', 'CODE_US': 'header label - visible with data', 'MILLESIME': 'hidden field', 'SOURCE': 'hidden field', 'OSSATURE': 'hidden field', 'ID_ORIGINE': 'hidden field', 'CODE_OR': 'hidden field', });
lyr_Surfacesnonartificialises_13.set('fieldLabels', {'ID': 'hidden field', 'CODE_CS': 'header label - visible with data', 'CODE_US': 'header label - visible with data', 'MILLESIME': 'hidden field', 'SOURCE': 'hidden field', 'OSSATURE': 'hidden field', 'ID_ORIGINE': 'hidden field', 'CODE_OR': 'hidden field', });
lyr_Surfacesartificialises_14.set('fieldLabels', {'ID': 'hidden field', 'CODE_CS': 'header label - visible with data', 'CODE_US': 'header label - visible with data', 'MILLESIME': 'hidden field', 'SOURCE': 'hidden field', 'OSSATURE': 'hidden field', 'ID_ORIGINE': 'hidden field', 'CODE_OR': 'hidden field', });
lyr_ZNIEFFType2_15.set('fieldLabels', {'NOM_ZNIEFF': 'hidden field', 'CODE_NATIO': 'hidden field', 'CODE_REGIO': 'hidden field', 'SURFACE_HA': 'hidden field', 'SAISIE_LOG': 'hidden field', 'DATE_DE_VA': 'hidden field', 'ORGANISME': 'hidden field', 'INCLUSION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'URLFICTECH': 'hidden field', 'URLFICPUB': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_ZNIEFFType1_16.set('fieldLabels', {'NOM_ZNIEFF': 'hidden field', 'CODE_NATIO': 'hidden field', 'CODE_REGIO': 'hidden field', 'SURFACE_HA': 'hidden field', 'SAISIE_LOG': 'hidden field', 'DATE_DE_VA': 'hidden field', 'ORGANISME': 'hidden field', 'INCLUSION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'URLFICTECH': 'hidden field', 'URLFICPUB': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_Zoneshumides_17.set('fieldLabels', {'LIBELLE': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_SitesNatura2000_18.set('fieldLabels', {'SITECODE': 'hidden field', 'SITENAME': 'hidden field', });
lyr_SiteNatura2000PaysdeBrayHumide_19.set('fieldLabels', {'ID': 'hidden field', 'SURFACE': 'hidden field', 'NUM_SITE': 'hidden field', });
lyr_ZAPCuestas_20.set('fieldLabels', {'nom_zsc': 'hidden field', 'ident': 'hidden field', 'type': 'hidden field', 'etat': 'hidden field', 'date_etat': 'hidden field', 'date_regl': 'hidden field', 'date_regl2': 'hidden field', 'surf_ha': 'hidden field', 'suivi': 'hidden field', 'lien_FSD': 'hidden field', 'lien_donn': 'hidden field', 'lien_docob': 'hidden field', 'lien_atlas': 'hidden field', 'lien_texte': 'hidden field', 'lien_metad': 'hidden field', 'Code_zscpd': 'hidden field', });
lyr_Sitesnaturelsclasss_21.set('fieldLabels', {'fid': 'hidden field', 'Nom_sc': 'hidden field', 'Ident': 'hidden field', 'Texte': 'hidden field', 'Modif_text': 'hidden field', 'Surfcalc_h': 'hidden field', 'Lien_donn': 'hidden field', 'Lien_metad': 'hidden field', });
lyr_Sitesnaturelsinscrits_22.set('fieldLabels', {'fid': 'hidden field', 'nom_si': 'hidden field', 'ident': 'hidden field', 'texte': 'hidden field', 'modif_text': 'hidden field', 'surfcalc_h': 'hidden field', 'lien_donn': 'hidden field', 'lien_metad': 'hidden field', });
lyr_CommunesensitePaysdeBrayHumide_23.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'header label - visible with data', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Tramebocagre_24.set('fieldLabels', {'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'id': 'hidden field', 'ID_PARCEL': 'hidden field', 'SURF_PARC': 'hidden field', 'CODE_CULTU': 'hidden field', 'CODE_GROUP': 'hidden field', 'CULTURE_D1': 'hidden field', 'CULTURE_D2': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Area': 'hidden field', });
lyr_Rservoirsboiss_25.set('fieldLabels', {'gid': 'hidden field', 'id': 'hidden field', 'prec_plani': 'hidden field', 'nature': 'hidden field', 'Area': 'hidden field', });
lyr_Corridorshumides_26.set('fieldLabels', {'DN': 'hidden field', 'Area': 'hidden field', });
lyr_Rservoirshumides_27.set('fieldLabels', {'fid': 'hidden field', 'FID_RB_ZH_': 'hidden field', 'SOUS_TRAME': 'hidden field', 'REMARQUE': 'hidden field', 'FID_RB_ZH1': 'hidden field', 'OBJECTID': 'hidden field', 'TYPE': 'hidden field', 'SHAPE_LENG': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', 'NUM_SITE': 'hidden field', 'ID_HAB_POL': 'hidden field', 'SURF_HAB_P': 'hidden field', 'PERI_HAB_P': 'hidden field', 'MOSAIQUE': 'hidden field', 'CODE_PHYTO': 'hidden field', 'CODE_CB': 'hidden field', 'CODE_N2000': 'hidden field', 'CODE_COL': 'hidden field', 'PART_POLY_': 'hidden field', 'PART_POL_1': 'hidden field', 'STATUT_HAB': 'hidden field', 'TYPI': 'hidden field', 'ORIGINALIT': 'hidden field', 'REPRES': 'hidden field', 'INTER_PAT': 'hidden field', 'ETAT_CONS': 'hidden field', 'DYNA': 'hidden field', 'RESTAUR': 'hidden field', 'OBSERVATIO': 'hidden field', 'DATE_INV_H': 'hidden field', 'SOURCES': 'hidden field', 'ETAT_CONS_': 'hidden field', 'DYNA_2014': 'hidden field', 'RESTAUR_20': 'hidden field', 'OBS_2014': 'hidden field', 'Date_misej': 'hidden field', 'SOURCE_201': 'hidden field', 'ID': 'hidden field', 'ID_HAB_PO': 'hidden field', 'PART_PO_1': 'hidden field', 'PART_PO_2': 'hidden field', 'ORIGINAL': 'hidden field', 'OBSERV': 'hidden field', 'D_INV_HAB': 'hidden field', 'SURF_HABI': 'hidden field', 'PERI_HABI': 'hidden field', 'SURFACE': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'NOM_ZNIEFF': 'hidden field', 'CODE_NATIO': 'hidden field', 'CODE_REGIO': 'hidden field', 'SURFACE_HA': 'header label - visible with data', 'SAISIE_LOG': 'hidden field', 'DATE_DE_VA': 'hidden field', 'ORGANISME': 'hidden field', 'INCLUSION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'URLFICTECH': 'hidden field', 'URLFICPUB': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_Dpriseagricole_28.set('fieldLabels', {'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'id': 'hidden field', 'left_2': 'hidden field', 'top_2': 'hidden field', 'right_2': 'hidden field', 'bottom_2': 'hidden field', 'id_2': 'hidden field', 'Surface': 'header label - visible with data', 'Densité': 'header label - visible with data', });
lyr_Rseaucalcicolepotentiel_29.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'surface': 'header label - visible with data', 'nom_commun': 'hidden field', 'num_insee': 'hidden field', 'departemen': 'hidden field', 'code_znief': 'hidden field', 'nom_znieff': 'hidden field', 'lien_fiche': 'hidden field', 'code_natur': 'hidden field', 'nom_natura': 'hidden field', 'nom_appb': 'hidden field', 'nom_sitein': 'hidden field', 'nom_sitecl': 'hidden field', 'nom_sitege': 'hidden field', 'hierarchis': 'hidden field', 'enjeu_ecol': 'hidden field', 'lienfichep': 'hidden field', 'usage_agri': 'hidden field', 'Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Rservoirscalcicoles_30.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'surface': 'header label - visible with data', 'nom_commun': 'hidden field', 'num_insee': 'hidden field', 'departemen': 'hidden field', 'code_znief': 'hidden field', 'nom_znieff': 'hidden field', 'lien_fiche': 'hidden field', 'code_natur': 'hidden field', 'nom_natura': 'hidden field', 'nom_appb': 'hidden field', 'nom_sitein': 'hidden field', 'nom_sitecl': 'hidden field', 'nom_sitege': 'hidden field', 'hierarchis': 'hidden field', 'enjeu_ecol': 'hidden field', 'lienfichep': 'hidden field', 'usage_agri': 'hidden field', 'Area': 'hidden field', });
lyr_Tramecalcicole_31.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'surface': 'header label - visible with data', 'nom_commun': 'hidden field', 'num_insee': 'hidden field', 'departemen': 'hidden field', 'code_znief': 'hidden field', 'nom_znieff': 'hidden field', 'lien_fiche': 'hidden field', 'code_natur': 'hidden field', 'nom_natura': 'hidden field', 'nom_appb': 'hidden field', 'nom_sitein': 'hidden field', 'nom_sitecl': 'hidden field', 'nom_sitege': 'hidden field', 'hierarchis': 'hidden field', 'enjeu_ecol': 'hidden field', 'lienfichep': 'hidden field', 'usage_agri': 'hidden field', 'Area': 'hidden field', });
lyr_Rservoirssilicicoles_32.set('fieldLabels', {'ID': 'hidden field', 'NUM_SITE': 'hidden field', 'ID_HAB_PO': 'hidden field', 'MOSAIQUE': 'hidden field', 'CODE_PHYTO': 'hidden field', 'CODE_CB': 'hidden field', 'CODE_N2000': 'hidden field', 'CODE_COL': 'hidden field', 'PART_PO_1': 'hidden field', 'PART_PO_2': 'hidden field', 'STATUT_HAB': 'hidden field', 'TYPI': 'hidden field', 'ORIGINAL': 'hidden field', 'REPRES': 'hidden field', 'INTER_PAT': 'hidden field', 'ETAT_CONS': 'hidden field', 'DYNA': 'hidden field', 'RESTAUR': 'hidden field', 'OBSERV': 'hidden field', 'D_INV_HAB': 'hidden field', 'SOURCES': 'hidden field', 'SURF_HABI': 'hidden field', 'PERI_HABI': 'hidden field', 'SURFACE': 'header label - visible with data', });
lyr_Primtresdepointsdecaptages_33.set('fieldLabels', {'fid': 'hidden field', 'TYPE_PP': 'hidden field', 'SOURCE_TRA': 'hidden field', 'CODE_NAT': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Corridorsaquatiques_34.set('fieldLabels', {'ID': 'hidden field', 'PREC_PLANI': 'hidden field', 'PREC_ALTI': 'hidden field', 'ARTIF': 'hidden field', 'FICTIF': 'hidden field', 'FRANCHISST': 'hidden field', 'NOM': 'hidden field', 'POS_SOL': 'hidden field', 'REGIME': 'hidden field', 'Z_INI': 'hidden field', 'Z_FIN': 'hidden field', 'lenght': 'hidden field', });
lyr_Rservoirsaquatiques_35.set('fieldLabels', {'fid': 'hidden field', 'ID_L1': 'hidden field', 'Classt_L1': 'hidden field', 'Min_FMEAS': 'hidden field', 'Max_TMEAS': 'hidden field', 'Code_Hydro': 'hidden field', 'Nom_CE': 'hidden field', 'Bras': 'hidden field', 'Departemen': 'hidden field', 'Region': 'hidden field', 'UH': 'hidden field', 'COMGEO': 'hidden field', 'Especes_Ci': 'hidden field', 'Enjeu_Mig_': 'hidden field', 'Enjeu_TBE': 'hidden field', 'Enjeu_RB': 'hidden field', 'Liste_RB': 'hidden field', 'Limite_Amo': 'hidden field', 'Limite_ava': 'hidden field', 'Portion': 'hidden field', 'Portee_Cla': 'hidden field', 'Xav_L93': 'hidden field', 'Yav_L93': 'hidden field', 'Xam_L93': 'hidden field', 'Yam_L93': 'hidden field', 'ObjAv_XLS': 'hidden field', 'ObjAv_SIG': 'hidden field', 'Date_Modif': 'hidden field', 'Auteur': 'hidden field', 'Objet': 'hidden field', 'ID_L2': 'hidden field', 'Classt_L2': 'hidden field', 'Enjeu_sedi': 'hidden field', 'Nb_Ouvr': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Longueur': 'hidden field', });
lyr_SMBVdelEpte_36.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'CdOH': 'hidden field', 'TopoOH': 'hidden field', 'LangueNomO': 'hidden field', 'StatutNomO': 'hidden field', 'SourceNomO': 'hidden field', 'TypTopoOH': 'hidden field', 'DateCreati': 'hidden field', 'StatutOH': 'hidden field', 'OrigineBV': 'hidden field', 'CdExutoire': 'hidden field', 'CdBH': 'hidden field', 'Commentair': 'hidden field', 'PrecPlaniO': 'hidden field', 'ModObCoord': 'hidden field', 'ProjCoordO': 'hidden field', });
lyr_SMBVdelAndelle_37.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Nom': 'hidden field', });
lyr_SMBVdelaBresle_38.set('fieldLabels', {'Libelle': 'hidden field', 'Idenr': 'hidden field', 'Surface': 'hidden field', });
lyr_SMBVdelYres_39.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'Surface': 'hidden field', });
lyr_SMBVdelArques_40.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Nom': 'hidden field', });
lyr_SMBVCaillyAubetteRobec_41.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'Champident': 'hidden field', 'Surface': 'hidden field', 'Nom': 'hidden field', });
lyr_Zonesdevgtation_42.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'NATURE': 'header label - visible with data', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', });
lyr_HabitatsdIntrtCommunautaire_43.set('fieldLabels', {'habitats_c': 'hidden field', 'Type': 'header label - visible with data', });
lyr_Haies_44.set('fieldLabels', {'ID': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'HAUTEUR': 'header label - visible with data', 'LARGEUR': 'header label - visible with data', 'SOURCES': 'hidden field', 'ID_SOURCES': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', });
lyr_Surfaceshydrographiques_45.set('fieldLabels', {'ID': 'hidden field', 'CODE_HYDRO': 'hidden field', 'CODE_PAYS': 'hidden field', 'NATURE': 'header label - visible with data', 'POS_SOL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'SRC_COORD': 'hidden field', 'SRC_ALTI': 'hidden field', 'STATUT': 'hidden field', 'PERSISTANC': 'hidden field', 'SALINITE': 'header label - visible with data', 'ORIGINE': 'hidden field', 'COMMENT': 'hidden field', 'ID_P_EAU': 'hidden field', 'ID_C_EAU': 'hidden field', 'ID_ENT_TR': 'hidden field', 'NOM_P_EAU': 'header label - visible with data', 'NOM_C_EAU': 'hidden field', 'NOM_ENT_TR': 'hidden field', });
lyr_Coursdeau_46.set('fieldLabels', {'ID': 'hidden field', 'CODE_HYDRO': 'hidden field', 'CODE_PAYS': 'hidden field', 'NATURE': 'header label - visible with data', 'FICTIF': 'hidden field', 'ETAT': 'hidden field', 'POS_SOL': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'SRC_COORD': 'hidden field', 'SRC_ALTI': 'hidden field', 'STATUT': 'hidden field', 'PERSISTANC': 'hidden field', 'FOSSE': 'hidden field', 'NAVIGABL': 'hidden field', 'SALINITE': 'header label - visible with data', 'NUM_ORDRE': 'hidden field', 'CLA_ORDRE': 'hidden field', 'ORIGINE': 'hidden field', 'PER_ORDRE': 'hidden field', 'SENS_ECOUL': 'hidden field', 'RES_COULAN': 'hidden field', 'DELIMIT': 'hidden field', 'LARGEUR': 'header label - visible with data', 'BRAS': 'hidden field', 'COMMENT': 'hidden field', 'CODE_CARTH': 'hidden field', 'IPE': 'hidden field', 'ID_IPE': 'hidden field', 'ID_C_EAU': 'hidden field', 'ID_S_HYDRO': 'hidden field', 'ID_ENT_TR': 'hidden field', 'NOM_C_EAU': 'header label - visible with data', 'NOM_ENT_TR': 'hidden field', });
lyr_Mares_47.set('fieldLabels', {'_uid_': 'hidden field', 'l_id': 'hidden field', 'l_idstrp': 'hidden field', 'date_local': 'hidden field', 'statut_mar': 'hidden field', 'type_m': 'hidden field', });
lyr_Sitespollus_48.set('fieldLabels', {'cd_metier': 'hidden field', 'autre_id': 'hidden field', 'nom_ets': 'header label - visible with data', 'nom_site': 'header label - visible with data', 'code_siret': 'hidden field', 'stat_instr': 'hidden field', 'date_debut': 'hidden field', 'date_fin': 'hidden field', 'descript': 'header label - visible with data', 'code_insee': 'hidden field', 'nom_com': 'hidden field', 'x_wgs84': 'hidden field', 'y_wgs84': 'hidden field', 'code_dpt': 'hidden field', 'nom_dpt': 'hidden field', 'code_reg': 'hidden field', 'nom_reg': 'hidden field', 'act_nafv2': 'hidden field', 'act_naf': 'hidden field', 'act_icpe': 'hidden field', 'act_nafv1': 'hidden field', });
lyr_SitesBASOL_49.set('fieldLabels', {'cd_metier': 'hidden field', 'autre_id': 'hidden field', 'nom_etab': 'header label - visible with data', 'nom_instr': 'hidden field', 'code_siret': 'hidden field', 'stat_instr': 'hidden field', 'date_debut': 'hidden field', 'date_fin': 'hidden field', 'descript': 'header label - visible with data', 'code_insee': 'hidden field', 'nom_com': 'hidden field', 'x_wgs84': 'hidden field', 'y_wgs84': 'hidden field', 'code_dpt': 'hidden field', 'nom_dpt': 'hidden field', 'code_reg': 'hidden field', 'nom_reg': 'hidden field', 'act_nafv2': 'hidden field', 'act_naf': 'hidden field', 'act_icpe': 'hidden field', 'act_nafv1': 'hidden field', });
lyr_SAEPABraySudBacRouvrayCatillon_50.set('fieldLabels', {'BAC_propos': 'hidden field', 'Surface': 'hidden field', 'Nom': 'hidden field', 'Opérateur': 'hidden field', });
lyr_SAEPABraySudBacMesnilLieubray_51.set('fieldLabels', {'BAC_final': 'hidden field', 'Surface': 'hidden field', 'Nom': 'hidden field', 'Opérateur': 'hidden field', });
lyr_SAEPABraySudBacGisors_52.set('fieldLabels', {'LIBELLEOPE': 'hidden field', 'LIBELLEPAE': 'hidden field', 'Surface': 'hidden field', 'Opérateur': 'hidden field', });
lyr_SIAEPA3SourcesBacSommery_53.set('fieldLabels', {'BAC_Sommer': 'hidden field', 'SURFACE': 'hidden field', 'Nom': 'hidden field', 'Opérateur': 'hidden field', });
lyr_SIAEPA3SourcesBacMonterolier_54.set('fieldLabels', {'BAC_Mont��': 'hidden field', 'SURFACE': 'hidden field', 'Nom': 'hidden field', 'Opérateur': 'hidden field', });
lyr_SIAEPA02BrayBacStGermainsurEaulne_55.set('fieldLabels', {'ID_INTERNE': 'hidden field', 'ID_FONCTIO': 'hidden field', 'NOM': 'hidden field', 'SITUATION_': 'hidden field', 'SITUATIO_1': 'hidden field', 'IDUNITE_GE': 'hidden field', 'IDCOMMUNE': 'hidden field', 'QUALITE_GE': 'hidden field', 'QUALITE__1': 'hidden field', 'PRECISION_': 'hidden field', 'PRECISIO_1': 'hidden field', 'DATE_MAJ': 'hidden field', 'IDTYPE_SIT': 'hidden field', 'IDFICHE_TE': 'hidden field', 'ESRI_OID': 'hidden field', 'Opérateur': 'hidden field', });
lyr_SIAEPA02BrayBacNeuvilles_56.set('fieldLabels', {'Nom': 'hidden field', 'Operateur': 'hidden field', 'PAEC': 'hidden field', 'Id': 'hidden field', 'id_2': 'hidden field', 'surf': 'hidden field', 'Aire': 'hidden field', 'id_3': 'hidden field', 'surf_2': 'hidden field', 'Aire_2': 'hidden field', 'NOM_1': 'hidden field', 'NOM_2': 'hidden field', });
lyr_SIAEPA02BrayBacNesleHodengBeaussault_57.set('fieldLabels', {'ID': 'hidden field', 'Nom': 'hidden field', 'Aire': 'hidden field', 'NOM_1': 'hidden field', 'Opérateur': 'hidden field', });
lyr_SIAEPA02BrayBacMesnires_58.set('fieldLabels', {'Nom': 'hidden field', 'Operateur': 'hidden field', 'PAEC': 'hidden field', 'Id': 'hidden field', 'id_2': 'hidden field', 'surf': 'hidden field', 'Aire': 'hidden field', 'id_3': 'hidden field', 'surf_2': 'hidden field', 'Aire_2': 'hidden field', 'NOM_1': 'hidden field', });
lyr_SIAEPA02BrayBacEsclavelles_59.set('fieldLabels', {'BAC_Esclav': 'hidden field', 'SURFACE': 'hidden field', 'Nom': 'hidden field', 'Opérateur': 'hidden field', });
lyr_SIAEPA02BrayBacBully_60.set('fieldLabels', {'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'CARTEGEOL1': 'hidden field', 'ID': 'hidden field', 'GEOLNUM': 'hidden field', 'CENTROID_Y': 'hidden field', 'CENTROID_X': 'hidden field', 'CATégORIE': 'hidden field', 'Sols': 'hidden field', 'Indice_sol': 'hidden field', 'surf': 'hidden field', 'Nom': 'hidden field', 'Opérateur': 'hidden field', });
lyr_Foyersfloristiques_61.set('fieldLabels', {'id': 'hidden field', 'Date': 'header label - visible with data', 'Source': 'header label - visible with data', 'Espèce': 'header label - visible with data', 'État': 'header label - visible with data', });
lyr_Linairedcrevissespiedsblancs_62.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_Foyersdcrevissespiedsblancs_63.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Code_sp1': 'hidden field', 'Code_sp2': 'hidden field', 'Date_relev': 'header label - visible with data', });
lyr_LinairedcrevissesdeCalifornie_64.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_FoyersdcrevissesdeCalifornie_65.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Code_sp1': 'hidden field', 'Code_sp2': 'hidden field', 'Date_relev': 'header label - visible with data', });
lyr_Tourbire_66.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'NUM_SITE': 'hidden field', 'ID_HAB_PO': 'hidden field', 'MOSAIQUE': 'hidden field', 'CODE_PHYTO': 'hidden field', 'CODE_CB': 'hidden field', 'CODE_N2000': 'hidden field', 'CODE_COL': 'hidden field', 'PART_PO_1': 'hidden field', 'PART_PO_2': 'hidden field', 'STATUT_HAB': 'hidden field', 'TYPI': 'hidden field', 'ORIGINAL': 'hidden field', 'REPRES': 'hidden field', 'INTER_PAT': 'hidden field', 'ETAT_CONS': 'hidden field', 'DYNA': 'hidden field', 'RESTAUR': 'hidden field', 'OBSERV': 'hidden field', 'D_INV_HAB': 'hidden field', 'SOURCES': 'hidden field', 'SURF_HABI': 'hidden field', 'PERI_HABI': 'hidden field', 'SURFACE': 'hidden field', 'id_2': 'hidden field', 'Nom_Commun': 'hidden field', 'Population': 'hidden field', 'Fiscal Med': 'hidden field', 'Nom SIVOS': 'hidden field', 'Comp. RC': 'hidden field', });
lyr_Observationsfaunistiquesetfloristiques_67.set('fieldLabels', {'id_unique': 'hidden field', 'date': 'header label - visible with data', 'nlat': 'hidden field', 'refe': 'hidden field', 'nver': 'header label - visible with data', 'nbre': 'header label - visible with data', 'nbrt': 'hidden field', 'observateu': 'hidden field', 'structure': 'header label - visible with data', 'l_id': 'hidden field', });
lyr_InventaireOBHEN_68.set('fieldLabels', {'fid': 'hidden field', 'UUID': 'hidden field', 'ID_OBHEN': 'hidden field', 'Date': 'header label - visible with data', 'Anee (auto': 'hidden field', 'Observateu': 'hidden field', 'Determinat': 'hidden field', 'Structure': 'hidden field', 'Strucutre_': 'hidden field', 'Espece': 'header label - visible with data', 'Taxon vali': 'hidden field', 'cd_nom (au': 'hidden field', 'groupe (au': 'header label - visible with data', 'Commune': 'hidden field', 'INSEE': 'hidden field', 'Departemen': 'hidden field', 'Commune no': 'hidden field', 'Lieu-dit': 'hidden field', 'X (L93)': 'hidden field', 'Y (L93)': 'hidden field', 'Echelle va': 'hidden field', 'Indice de': 'hidden field', 'Effectifs': 'hidden field', 'Effectif_1': 'hidden field', 'Effectif_2': 'hidden field', 'Effectif_3': 'hidden field', 'ecrases ro': 'hidden field', 'Protocole': 'header label - visible with data', 'Enr_donnee': 'hidden field', 'Habitat (I': 'hidden field', 'Nature du': 'header label - visible with data', 'Milieu (BD': 'hidden field', 'Commentair': 'hidden field', 'Diffusion': 'hidden field', 'ID_CLICNAT': 'hidden field', 'ID_ODIN': 'hidden field', 'ID_undrago': 'hidden field', 'Code INPN': 'hidden field', 'Tri': 'hidden field', 'Observat_1': 'hidden field', 'mails': 'hidden field', 'id': 'hidden field', 'Nom_Commun': 'hidden field', 'Population': 'hidden field', 'Fiscal Med': 'hidden field', 'Nom SIVOS': 'hidden field', 'Comp. RC': 'hidden field', });
lyr_Quelquesespcesenjeuxdeprservation_69.set('fieldLabels', {'especes': 'header label - visible with data', });
lyr_Inventairesparanne_70.set('fieldLabels', {'fid': 'hidden field', 'NOM_COMMUN': 'hidden field', 'Annee': 'hidden field', 'Nom commun': 'header label - visible with data', 'Année du relevé': 'header label - visible with data', });
lyr_PopulationpiscicoledIntrtCommunautaire_71.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Code_sp1': 'hidden field', 'Code_sp2': 'hidden field', 'Date_relev': 'header label - visible with data', });
lyr_AgriondeMercure_72.set('fieldLabels', {'fid': 'hidden field', 'NUM_SITE': 'hidden field', 'ID_ESP_PT': 'hidden field', 'CODE_ESP': 'hidden field', 'STATUT_ESP': 'hidden field', 'CODE_COL': 'hidden field', 'DATE_OBS_ESP': 'hidden field', 'OBSERV': 'hidden field', 'SOURCES': 'header label - visible with data', 'MISE_A_JOUR': 'hidden field', });
lyr_Chauvessouris_73.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'TYPE': 'hidden field', 'R�f': 'hidden field', 'Pass': 'hidden field', 'Activ': 'hidden field', 'Rich': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Grenouillescrapauds_74.set('fieldLabels', {'fid': 'hidden field', 'Methode de': 'hidden field', 'Stade': 'hidden field', 'Commentair': 'hidden field', 'Espèce (nom commun)': 'header label - visible with data', 'Espèce (nom scientifique)': 'header label - visible with data', 'Nombre d\'individus': 'header label - visible with data', 'Année du relevé': 'header label - visible with data', 'Source': 'header label - visible with data', });
lyr_Scarabepiqueprune_75.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'TYPE': 'header label - visible with data', });
lyr_Tritoncrtinventaireparanne_76.set('fieldLabels', {'fid': 'hidden field', 'Methode de': 'hidden field', 'Stade': 'header label - visible with data', 'Commentair': 'hidden field', 'Espèce (nom commun)': 'header label - visible with data', 'Espèce (nom scientifique)': 'header label - visible with data', 'Nombre d\'individus': 'header label - visible with data', 'Année du relevé': 'header label - visible with data', 'Source': 'header label - visible with data', });
lyr_MaresTritoncrtPrsencehistorique_77.set('fieldLabels', {'CODE_CB': 'hidden field', 'CODE_N2000': 'hidden field', 'CODE_COL': 'hidden field', 'STATUT_HAB': 'hidden field', 'Superficie': 'header label - visible with data', 'Profondeur': 'header label - visible with data', '% v�g�ta': 'hidden field', 'Ombrage': 'hidden field', 'par_voisin': 'hidden field', 'Usage': 'header label - visible with data', 'Eau': 'header label - visible with data', 'Pr�dateurs': 'hidden field', 'Pr�senceTC': 'hidden field', 'PotentieTC': 'hidden field', 'Sal.Tac': 'hidden field', 'Tri. Pal.': 'hidden field', 'Tri. Pon.': 'hidden field', 'Tri. Alp.': 'hidden field', 'Aly. Acc.': 'hidden field', 'Cra. Com.': 'hidden field', 'Rai. Ver.': 'hidden field', 'Gre. Rou.': 'hidden field', 'Gre. Ver.': 'hidden field', 'ID': 'hidden field', 'N2000': 'header label - visible with data', 'ANNEE': 'header label - visible with data', 'SOURCE': 'hidden field', 'DIST_300m': 'hidden field', 'DIST_1000m': 'hidden field', });
lyr_MaresTritoncrtPrsencedepuis2012_78.set('fieldLabels', {'CODE_CB': 'hidden field', 'CODE_N2000': 'hidden field', 'CODE_COL': 'hidden field', 'STATUT_HAB': 'hidden field', 'Superficie': 'header label - visible with data', 'Profondeur': 'header label - visible with data', '% v�g�ta': 'hidden field', 'Ombrage': 'hidden field', 'par_voisin': 'hidden field', 'Usage': 'header label - visible with data', 'Eau': 'hidden field', 'Pr�dateurs': 'header label - visible with data', 'Pr�senceTC': 'hidden field', 'PotentieTC': 'hidden field', 'Sal.Tac': 'hidden field', 'Tri. Pal.': 'hidden field', 'Tri. Pon.': 'hidden field', 'Tri. Alp.': 'hidden field', 'Aly. Acc.': 'hidden field', 'Cra. Com.': 'hidden field', 'Rai. Ver.': 'hidden field', 'Gre. Rou.': 'hidden field', 'Gre. Ver.': 'hidden field', 'ID': 'hidden field', 'N2000': 'header label - visible with data', 'ANNEE': 'header label - visible with data', 'SOURCE': 'hidden field', 'DIST_300m': 'hidden field', 'DIST_1000m': 'hidden field', 'DIST_500m': 'hidden field', });
lyr_Altitude_79.set('fieldLabels', {'ID': 'hidden field', 'ALTITUDE': 'hidden field', 'NAT_TOPO': 'hidden field', 'IMPORTANCE': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CommunautdeCommunesBrayEawy_80.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_CommunautdeCommunesdeLondinires_81.set('fieldLabels', {'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_CommunautdeCommunesdes4Rivires_82.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_PETRduPaysdeBray_83.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Communes_84.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Communes_84.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});