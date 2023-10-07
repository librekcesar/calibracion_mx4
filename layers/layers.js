var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MX4_zipcodes_vol_1 = new ol.format.GeoJSON();
var features_MX4_zipcodes_vol_1 = format_MX4_zipcodes_vol_1.readFeatures(json_MX4_zipcodes_vol_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MX4_zipcodes_vol_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MX4_zipcodes_vol_1.addFeatures(features_MX4_zipcodes_vol_1);
var lyr_MX4_zipcodes_vol_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MX4_zipcodes_vol_1, 
                style: style_MX4_zipcodes_vol_1,
                interactive: false,
                title: '<img src="styles/legend/MX4_zipcodes_vol_1.png" /> MX4_zipcodes_vol'
            });
var format_MX4_zonas_2 = new ol.format.GeoJSON();
var features_MX4_zonas_2 = format_MX4_zonas_2.readFeatures(json_MX4_zonas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MX4_zonas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MX4_zonas_2.addFeatures(features_MX4_zonas_2);
var lyr_MX4_zonas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MX4_zonas_2, 
                style: style_MX4_zonas_2,
                interactive: true,
                title: '<img src="styles/legend/MX4_zonas_2.png" /> MX4_zonas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MX4_zipcodes_vol_1.setVisible(true);lyr_MX4_zonas_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MX4_zipcodes_vol_1,lyr_MX4_zonas_2];
lyr_MX4_zipcodes_vol_1.set('fieldAliases', {'zonificacion': 'zonificacion', 'station_code': 'station_code', 'zipcode': 'zipcode', 'vol_diario_zipcode_mx4_zipcode': 'vol_diario_zipcode_mx4_zipcode', 'vol_diario_zipcode_mx4_vol_dairio': 'vol_diario_zipcode_mx4_vol_dairio', });
lyr_MX4_zonas_2.set('fieldAliases', {'zonificacion': 'zonificacion', 'volumen_zona': 'volumen_zona', });
lyr_MX4_zipcodes_vol_1.set('fieldImages', {'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'vol_diario_zipcode_mx4_zipcode': 'TextEdit', 'vol_diario_zipcode_mx4_vol_dairio': 'TextEdit', });
lyr_MX4_zonas_2.set('fieldImages', {'zonificacion': 'TextEdit', 'volumen_zona': 'TextEdit', });
lyr_MX4_zipcodes_vol_1.set('fieldLabels', {'zonificacion': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'vol_diario_zipcode_mx4_zipcode': 'no label', 'vol_diario_zipcode_mx4_vol_dairio': 'no label', });
lyr_MX4_zonas_2.set('fieldLabels', {'zonificacion': 'header label', 'volumen_zona': 'header label', });
lyr_MX4_zonas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});