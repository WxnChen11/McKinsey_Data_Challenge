//google.maps.event.addDomListener(window, 'load', initialize);
/*
httpGetAsync("http://127.0.0.1:8000/static/js/data.json", function(resp){
  data = resp;
  console.log(data);
  data = jQuery.parseJSON(data);
});
*/
function initMap() {
    // Create a map object and specify the DOM element for display.
    var styledMapType = new google.maps.StyledMapType(
        [{
            elementType: 'geometry',
            stylers: [{
                color: '#ebe3cd'
            }]
        }, {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#523735'
            }]
        }, {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#f5f1e6'
            }]
        }, {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#c9b2a6'
            }]
        }, {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#dcd2be'
            }]
        }, {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#ae9e90'
            }]
        }, {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{
                color: '#dfd2ae'
            }]
        }, {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{
                color: '#dfd2ae'
            }]
        }, {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#93817c'
            }]
        }, {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{
                color: '#a5b076'
            }]
        }, {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#447530'
            }]
        }, {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#f5f1e6'
            }]
        }, {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{
                color: '#fdfcf8'
            }]
        }, {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#f8c967'
            }]
        }, {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#e9bc62'
            }]
        }, {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{
                color: '#e98d58'
            }]
        }, {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#db8555'
            }]
        }, {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#806b63'
            }]
        }, {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{
                color: '#dfd2ae'
            }]
        }, {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#8f7d77'
            }]
        }, {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#ebe3cd'
            }]
        }, {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{
                color: '#dfd2ae'
            }]
        }, {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{
                color: '#b9d3c2'
            }]
        }, {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#92998d'
            }]
        }], {
            name: 'Styled Map'
        });

    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {
            lat: 51.50,
            lng: 0
        },
        scrollwheel: true,
        zoom: 11
    });
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    //GEOJSON Section


    var geoJSONs = [
        "E02000210.json",
        "E02000217.json",
        "E02000216.json",
        "E02000215.json",
        "E02000214.json",
        "E02000243.json",
        "E02000644.json",
        "E02000190.json",
        "E02000646.json",
        "E02000647.json",
        "E02000640.json",
        "E02000641.json",
        "E02000642.json",
        "E02000191.json",
        "E02000525.json",
        "E02000524.json",
        "E02000138.json",
        "E02000139.json",
        "E02000648.json",
        "E02000649.json",
        "E02000523.json",
        "E02000522.json",
        "E02000621.json",
        "E02000194.json",
        "E02000244.json",
        "E02000195.json",
        "E02000196.json",
        "E02000480.json",
        "E02000197.json",
        "E02000198.json",
        "E02000896.json",
        "E02000199.json",
        "E02000770.json",
        "E02000245.json",
        "E02000628.json",
        "E02000738.json",
        "E02000739.json",
        "E02000580.json",
        "E02000730.json",
        "E02000731.json",
        "E02000732.json",
        "E02000733.json",
        "E02000734.json",
        "E02000735.json",
        "E02000736.json",
        "E02000737.json",
        "E02000631.json",
        "E02000630.json",
        "E02000633.json",
        "E02000632.json",
        "E02000635.json",
        "E02000634.json",
        "E02000637.json",
        "E02000636.json",
        "E02000639.json",
        "E02000186.json",
        "E02000185.json",
        "E02000184.json",
        "E02000183.json",
        "E02000182.json",
        "E02000181.json",
        "E02000180.json",
        "E02000859.json",
        "E02000858.json",
        "E02000912.json",
        "E02000913.json",
        "E02000914.json",
        "E02000915.json",
        "E02000916.json",
        "E02000917.json",
        "E02000851.json",
        "E02000850.json",
        "E02000853.json",
        "E02000852.json",
        "E02000855.json",
        "E02000848.json",
        "E02000857.json",
        "E02000779.json",
        "E02000849.json",
        "E02000247.json",
        "E02000960.json",
        "E02000133.json",
        "E02000455.json",
        "E02000454.json",
        "E02000358.json",
        "E02000359.json",
        "E02000828.json",
        "E02000829.json",
        "E02000981.json",
        "E02000980.json",
        "E02000352.json",
        "E02000825.json",
        "E02000826.json",
        "E02000351.json",
        "E02000356.json",
        "E02000821.json",
        "E02000354.json",
        "E02000355.json",
        "E02000132.json",
        "E02000841.json",
        "E02000645.json",
        "E02000846.json",
        "E02000130.json",
        "E02000847.json",
        "E02000276.json",
        "E02000131.json",
        "E02000136.json",
        "E02000137.json",
        "E02000134.json",
        "E02000643.json",
        "E02000504.json",
        "E02000526.json",
        "E02000521.json",
        "E02000798.json",
        "E02000520.json",
        "E02000443.json",
        "E02000178.json",
        "E02000179.json",
        "E02000176.json",
        "E02000177.json",
        "E02000174.json",
        "E02000175.json",
        "E02000172.json",
        "E02000173.json",
        "E02000170.json",
        "E02000171.json",
        "E02000077.json",
        "E02000075.json",
        "E02000074.json",
        "E02000073.json",
        "E02000072.json",
        "E02000071.json",
        "E02000070.json",
        "E02000079.json",
        "E02000078.json",
        "E02000514.json",
        "E02000922.json",
        "E02000515.json",
        "E02006853.json",
        "E02000796.json",
        "E02000516.json",
        "E02006854.json",
        "E02000517.json",
        "E02000389.json",
        "E02000388.json",
        "E02000436.json",
        "E02000385.json",
        "E02000384.json",
        "E02000387.json",
        "E02000386.json",
        "E02000381.json",
        "E02000380.json",
        "E02000383.json",
        "E02000382.json",
        "E02000774.json",
        "E02000776.json",
        "E02000777.json",
        "E02000679.json",
        "E02000678.json",
        "E02000772.json",
        "E02000773.json",
        "E02000675.json",
        "E02000674.json",
        "E02000677.json",
        "E02000676.json",
        "E02000671.json",
        "E02000670.json",
        "E02000673.json",
        "E02000672.json",
        "E02000572.json",
        "E02000573.json",
        "E02000570.json",
        "E02000571.json",
        "E02000576.json",
        "E02000577.json",
        "E02000574.json",
        "E02000575.json",
        "E02000150.json",
        "E02000578.json",
        "E02000579.json",
        "E02000151.json",
        "E02000815.json",
        "E02000814.json",
        "E02000817.json",
        "E02000816.json",
        "E02000810.json",
        "E02000813.json",
        "E02000812.json",
        "E02000792.json",
        "E02000793.json",
        "E02000790.json",
        "E02000791.json",
        "E02000819.json",
        "E02000818.json",
        "E02000794.json",
        "E02000795.json",
        "E02006929.json",
        "E02006928.json",
        "E02006927.json",
        "E02006925.json",
        "E02006924.json",
        "E02006921.json",
        "E02000491.json",
        "E02000490.json",
        "E02000493.json",
        "E02000492.json",
        "E02000495.json",
        "E02000494.json",
        "E02000497.json",
        "E02000496.json",
        "E02000499.json",
        "E02000158.json",
        "E02000159.json",
        "E02000316.json",
        "E02000317.json",
        "E02000314.json",
        "E02000315.json",
        "E02000705.json",
        "E02000313.json",
        "E02000259.json",
        "E02000258.json",
        "E02000257.json",
        "E02000256.json",
        "E02000255.json",
        "E02000254.json",
        "E02000253.json",
        "E02000252.json",
        "E02000251.json",
        "E02000250.json",
        "E02000929.json",
        "E02000928.json",
        "E02000440.json",
        "E02000921.json",
        "E02000920.json",
        "E02000923.json",
        "E02000441.json",
        "E02000925.json",
        "E02000924.json",
        "E02000927.json",
        "E02000926.json",
        "E02000769.json",
        "E02000485.json",
        "E02000025.json",
        "E02000751.json",
        "E02000408.json",
        "E02000409.json",
        "E02000958.json",
        "E02000959.json",
        "E02000498.json",
        "E02000402.json",
        "E02000403.json",
        "E02000400.json",
        "E02000401.json",
        "E02000406.json",
        "E02000407.json",
        "E02000404.json",
        "E02000405.json",
        "E02000023.json",
        "E02000033.json",
        "E02000032.json",
        "E02000031.json",
        "E02000030.json",
        "E02000037.json",
        "E02000036.json",
        "E02000035.json",
        "E02000034.json",
        "E02000039.json",
        "E02000038.json",
        "E02000448.json",
        "E02000135.json",
        "E02000700.json",
        "E02000340.json",
        "E02000703.json",
        "E02000029.json",
        "E02006791.json",
        "E02006792.json",
        "E02000702.json",
        "E02006794.json",
        "E02006931.json",
        "E02006796.json",
        "E02006798.json",
        "E02006799.json",
        "E02000449.json",
        "E02000707.json",
        "E02000945.json",
        "E02000704.json",
        "E02000706.json",
        "E02000709.json",
        "E02000708.json",
        "E02000107.json",
        "E02000106.json",
        "E02000105.json",
        "E02000104.json",
        "E02000103.json",
        "E02000944.json",
        "E02000101.json",
        "E02000100.json",
        "E02000536.json",
        "E02000537.json",
        "E02000534.json",
        "E02000535.json",
        "E02000532.json",
        "E02000533.json",
        "E02000109.json",
        "E02000108.json",
        "E02000318.json",
        "E02000319.json",
        "E02000699.json",
        "E02000698.json",
        "E02000697.json",
        "E02000696.json",
        "E02000695.json",
        "E02000694.json",
        "E02000693.json",
        "E02000692.json",
        "E02000691.json",
        "E02000690.json",
        "E02006800.json",
        "E02006801.json",
        "E02006802.json",
        "E02000343.json",
        "E02000226.json",
        "E02000219.json",
        "E02000218.json",
        "E02000749.json",
        "E02000748.json",
        "E02000227.json",
        "E02000745.json",
        "E02000744.json",
        "E02000747.json",
        "E02000746.json",
        "E02000741.json",
        "E02000740.json",
        "E02000743.json",
        "E02000742.json",
        "E02000622.json",
        "E02000623.json",
        "E02000192.json",
        "E02000193.json",
        "E02000626.json",
        "E02000627.json",
        "E02000624.json",
        "E02000625.json",
        "E02000583.json",
        "E02000582.json",
        "E02000581.json",
        "E02000629.json",
        "E02000587.json",
        "E02000586.json",
        "E02000585.json",
        "E02000584.json",
        "E02000965.json",
        "E02000964.json",
        "E02000967.json",
        "E02000966.json",
        "E02000961.json",
        "E02000189.json",
        "E02000963.json",
        "E02000962.json",
        "E02000842.json",
        "E02000843.json",
        "E02000840.json",
        "E02000188.json",
        "E02000969.json",
        "E02000968.json",
        "E02000844.json",
        "E02000845.json",
        "E02000187.json",
        "E02000760.json",
        "E02000503.json",
        "E02000638.json",
        "E02000447.json",
        "E02000444.json",
        "E02000445.json",
        "E02000442.json",
        "E02000121.json",
        "E02000369.json",
        "E02000368.json",
        "E02000367.json",
        "E02000366.json",
        "E02000365.json",
        "E02000364.json",
        "E02000363.json",
        "E02000362.json",
        "E02000361.json",
        "E02000360.json",
        "E02000910.json",
        "E02000768.json",
        "E02000911.json",
        "E02000120.json",
        "E02000224.json",
        "E02000918.json",
        "E02000919.json",
        "E02000558.json",
        "E02000225.json",
        "E02000559.json",
        "E02000123.json",
        "E02000854.json",
        "E02000068.json",
        "E02000069.json",
        "E02000141.json",
        "E02000122.json",
        "E02000147.json",
        "E02000146.json",
        "E02000145.json",
        "E02000144.json",
        "E02000060.json",
        "E02000061.json",
        "E02000062.json",
        "E02000063.json",
        "E02000064.json",
        "E02000065.json",
        "E02000066.json",
        "E02000067.json",
        "E02000222.json",
        "E02000451.json",
        "E02000127.json",
        "E02000126.json",
        "E02000125.json",
        "E02000551.json",
        "E02000552.json",
        "E02000223.json",
        "E02000860.json",
        "E02000553.json",
        "E02000510.json",
        "E02000861.json",
        "E02000398.json",
        "E02000396.json",
        "E02000397.json",
        "E02000394.json",
        "E02000395.json",
        "E02000392.json",
        "E02000393.json",
        "E02000390.json",
        "E02000391.json",
        "E02000668.json",
        "E02000669.json",
        "E02000666.json",
        "E02000667.json",
        "E02000664.json",
        "E02000665.json",
        "E02000662.json",
        "E02000663.json",
        "E02000660.json",
        "E02000661.json",
        "E02000095.json",
        "E02000094.json",
        "E02000097.json",
        "E02000096.json",
        "E02000091.json",
        "E02000090.json",
        "E02000093.json",
        "E02000092.json",
        "E02000221.json",
        "E02000099.json",
        "E02000098.json",
        "E02000549.json",
        "E02000083.json",
        "E02000806.json",
        "E02000807.json",
        "E02000804.json",
        "E02000805.json",
        "E02000802.json",
        "E02000803.json",
        "E02000800.json",
        "E02000502.json",
        "E02000501.json",
        "E02000808.json",
        "E02000809.json",
        "E02006930.json",
        "E02000954.json",
        "E02000500.json",
        "E02000955.json",
        "E02000507.json",
        "E02000956.json",
        "E02000506.json",
        "E02000482.json",
        "E02000483.json",
        "E02000329.json",
        "E02000957.json",
        "E02000486.json",
        "E02000487.json",
        "E02000484.json",
        "E02000142.json",
        "E02000323.json",
        "E02000894.json",
        "E02000321.json",
        "E02000320.json",
        "E02000891.json",
        "E02000890.json",
        "E02000893.json",
        "E02000951.json",
        "E02000240.json",
        "E02000241.json",
        "E02000242.json",
        "E02000140.json",
        "E02000716.json",
        "E02000717.json",
        "E02000714.json",
        "E02000715.json",
        "E02000248.json",
        "E02000249.json",
        "E02000718.json",
        "E02000719.json",
        "E02000545.json",
        "E02000938.json",
        "E02000939.json",
        "E02000932.json",
        "E02000933.json",
        "E02000930.json",
        "E02000931.json",
        "E02000936.json",
        "E02000937.json",
        "E02000934.json",
        "E02000935.json",
        "E02000149.json",
        "E02000711.json",
        "E02000148.json",
        "E02000763.json",
        "E02000457.json",
        "E02000456.json",
        "E02000439.json",
        "E02000438.json",
        "E02000437.json",
        "E02000983.json",
        "E02000435.json",
        "E02000434.json",
        "E02000433.json",
        "E02000432.json",
        "E02000431.json",
        "E02000430.json",
        "E02000337.json",
        "E02000453.json",
        "E02000452.json",
        "E02000024.json",
        "E02000824.json",
        "E02000026.json",
        "E02000027.json",
        "E02000020.json",
        "E02000021.json",
        "E02000022.json",
        "E02000353.json",
        "E02000542.json",
        "E02000028.json",
        "E02000350.json",
        "E02000827.json",
        "E02000820.json",
        "E02000357.json",
        "E02000822.json",
        "E02000823.json",
        "E02000331.json",
        "E02000856.json",
        "E02000228.json",
        "E02000118.json",
        "E02000119.json",
        "E02000797.json",
        "E02000110.json",
        "E02000111.json",
        "E02000112.json",
        "E02000113.json",
        "E02000114.json",
        "E02000115.json",
        "E02000116.json",
        "E02000117.json",
        "E02000051.json",
        "E02000050.json",
        "E02000053.json",
        "E02000052.json",
        "E02000055.json",
        "E02000054.json",
        "E02000057.json",
        "E02000056.json",
        "E02000059.json",
        "E02000058.json",
        "E02000509.json",
        "E02000229.json",
        "E02000512.json",
        "E02000220.json",
        "E02000680.json",
        "E02000681.json",
        "E02000682.json",
        "E02000683.json",
        "E02000685.json",
        "E02000686.json",
        "E02000687.json",
        "E02000689.json",
        "E02000546.json",
        "E02000339.json",
        "E02000208.json",
        "E02000209.json",
        "E02000758.json",
        "E02000759.json",
        "E02000204.json",
        "E02000757.json",
        "E02000206.json",
        "E02000207.json",
        "E02000200.json",
        "E02000201.json",
        "E02000750.json",
        "E02000203.json",
        "E02000617.json",
        "E02000334.json",
        "E02000615.json",
        "E02000614.json",
        "E02000598.json",
        "E02000599.json",
        "E02000611.json",
        "E02000335.json",
        "E02000594.json",
        "E02000595.json",
        "E02000596.json",
        "E02000597.json",
        "E02000590.json",
        "E02000591.json",
        "E02000619.json",
        "E02000593.json",
        "E02000976.json",
        "E02000977.json",
        "E02000974.json",
        "E02000975.json",
        "E02000972.json",
        "E02000973.json",
        "E02000879.json",
        "E02000878.json",
        "E02000877.json",
        "E02000876.json",
        "E02000875.json",
        "E02000874.json",
        "E02000873.json",
        "E02000872.json",
        "E02000871.json",
        "E02000870.json",
        "E02000332.json",
        "E02000799.json",
        "E02000333.json",
        "E02000528.json",
        "E02000235.json",
        "E02000479.json",
        "E02000478.json",
        "E02000234.json",
        "E02000473.json",
        "E02000472.json",
        "E02000471.json",
        "E02000470.json",
        "E02000477.json",
        "E02000237.json",
        "E02000475.json",
        "E02000474.json",
        "E02000370.json",
        "E02000371.json",
        "E02000372.json",
        "E02000373.json",
        "E02000374.json",
        "E02000375.json",
        "E02000376.json",
        "E02000377.json",
        "E02000378.json",
        "E02000379.json",
        "E02000272.json",
        "E02000275.json",
        "E02000274.json",
        "E02000230.json",
        "E02000233.json",
        "E02000232.json",
        "E02000781.json",
        "E02000756.json",
        "E02000754.json",
        "E02000529.json",
        "E02000755.json",
        "E02000548.json",
        "E02000752.json",
        "E02000780.json",
        "E02000753.json",
        "E02000154.json",
        "E02000155.json",
        "E02000156.json",
        "E02000157.json",
        "E02000019.json",
        "E02000018.json",
        "E02000152.json",
        "E02000153.json",
        "E02000015.json",
        "E02000014.json",
        "E02000017.json",
        "E02000016.json",
        "E02000011.json",
        "E02000010.json",
        "E02000013.json",
        "E02000012.json",
        "E02000616.json",
        "E02000897.json",
        "E02000236.json",
        "E02000589.json",
        "E02000613.json",
        "E02000612.json",
        "E02000904.json",
        "E02000610.json",
        "E02000231.json",
        "E02000202.json",
        "E02000588.json",
        "E02006882.json",
        "E02000653.json",
        "E02000652.json",
        "E02000651.json",
        "E02000650.json",
        "E02000657.json",
        "E02000124.json",
        "E02000655.json",
        "E02000654.json",
        "E02000550.json",
        "E02000128.json",
        "E02000659.json",
        "E02000658.json",
        "E02000554.json",
        "E02000555.json",
        "E02000556.json",
        "E02000557.json",
        "E02000086.json",
        "E02000087.json",
        "E02000084.json",
        "E02000085.json",
        "E02000082.json",
        "E02000592.json",
        "E02000080.json",
        "E02000081.json",
        "E02000544.json",
        "E02000088.json",
        "E02000089.json",
        "E02000784.json",
        "E02000488.json",
        "E02000547.json",
        "E02000970.json",
        "E02000888.json",
        "E02000889.json",
        "E02000886.json",
        "E02000887.json",
        "E02000884.json",
        "E02000885.json",
        "E02000882.json",
        "E02000883.json",
        "E02000880.json",
        "E02000881.json",
        "E02000727.json",
        "E02000726.json",
        "E02000725.json",
        "E02000724.json",
        "E02000723.json",
        "E02000722.json",
        "E02000721.json",
        "E02000720.json",
        "E02000543.json",
        "E02000239.json",
        "E02000238.json",
        "E02000729.json",
        "E02000728.json",
        "E02000541.json",
        "E02000909.json",
        "E02000908.json",
        "E02000907.json",
        "E02000906.json",
        "E02000905.json",
        "E02000540.json",
        "E02000903.json",
        "E02000902.json",
        "E02000901.json",
        "E02000900.json",
        "E02000943.json",
        "E02000511.json",
        "E02000978.json",
        "E02000942.json",
        "E02000979.json",
        "E02000941.json",
        "E02000102.json",
        "E02000940.json",
        "E02000538.json",
        "E02000947.json",
        "E02000539.json",
        "E02000946.json",
        "E02000420.json",
        "E02000348.json",
        "E02000839.json",
        "E02000423.json",
        "E02000424.json",
        "E02000425.json",
        "E02000426.json",
        "E02000427.json",
        "E02000833.json",
        "E02000832.json",
        "E02000831.json",
        "E02000830.json",
        "E02000837.json",
        "E02000836.json",
        "E02000347.json",
        "E02000834.json",
        "E02000513.json",
        "E02000530.json",
        "E02000531.json",
        "E02000421.json",
        "E02000801.json",
        "E02000422.json",
        "E02000838.json",
        "E02000971.json",
        "E02000341.json",
        "E02000762.json",
        "E02000428.json",
        "E02000169.json",
        "E02000168.json",
        "E02000429.json",
        "E02000165.json",
        "E02000167.json",
        "E02000166.json",
        "E02000161.json",
        "E02000160.json",
        "E02000163.json",
        "E02000162.json",
        "E02000042.json",
        "E02000043.json",
        "E02000040.json",
        "E02000041.json",
        "E02000046.json",
        "E02000047.json",
        "E02000044.json",
        "E02000045.json",
        "E02000345.json",
        "E02000048.json",
        "E02000049.json",
        "E02000518.json",
        "E02000519.json",
        "E02000344.json",
        "E02000835.json",
        "E02000346.json",
        "E02000008.json",
        "E02000476.json",
        "E02000007.json",
        "E02000608.json",
        "E02000609.json",
        "E02000342.json",
        "E02000767.json",
        "E02000765.json",
        "E02000764.json",
        "E02000600.json",
        "E02000601.json",
        "E02000602.json",
        "E02000603.json",
        "E02000604.json",
        "E02000605.json",
        "E02000606.json",
        "E02000607.json",
        "E02000561.json",
        "E02000560.json",
        "E02000563.json",
        "E02000562.json",
        "E02000565.json",
        "E02000564.json",
        "E02000567.json",
        "E02000566.json",
        "E02000569.json",
        "E02000568.json",
        "E02006836.json",
        "E02000789.json",
        "E02000788.json",
        "E02000863.json",
        "E02000864.json",
        "E02000865.json",
        "E02000866.json",
        "E02000867.json",
        "E02000868.json",
        "E02000869.json",
        "E02000783.json",
        "E02000782.json",
        "E02000785.json",
        "E02006795.json",
        "E02000787.json",
        "E02000786.json",
        "E02000271.json",
        "E02006918.json",
        "E02000328.json",
        "E02000270.json",
        "E02000899.json",
        "E02000701.json",
        "E02000898.json",
        "E02000468.json",
        "E02000469.json",
        "E02000464.json",
        "E02000465.json",
        "E02000466.json",
        "E02000467.json",
        "E02000460.json",
        "E02000461.json",
        "E02000462.json",
        "E02000463.json",
        "E02000895.json",
        "E02000268.json",
        "E02000269.json",
        "E02000262.json",
        "E02000263.json",
        "E02000260.json",
        "E02000261.json",
        "E02000266.json",
        "E02000267.json",
        "E02000264.json",
        "E02000265.json",
        "E02000481.json",
        "E02000982.json",
        "E02000489.json",
        "E02000327.json",
        "E02000326.json",
        "E02000324.json",
        "E02000950.json",
        "E02000712.json",
        "E02000713.json",
        "E02000212.json",
        "E02000710.json",
        "E02000419.json",
        "E02000418.json",
        "E02000949.json",
        "E02000948.json",
        "E02000411.json",
        "E02000410.json",
        "E02000413.json",
        "E02000412.json",
        "E02000415.json",
        "E02000414.json",
        "E02000417.json",
        "E02000416.json",
        "E02000246.json",
        "E02000211.json",
        "E02006788.json",
        "E02000459.json",
        "E02000620.json",
        "E02000009.json",
        "E02000952.json",
        "E02000004.json",
        "E02000005.json",
        "E02000002.json",
        "E02000003.json",
        "E02000001.json",
        "E02000213.json",
        "E02000508.json",
        "E02006789.json",
        "E02000953.json",
        "E02006787.json",
        "E02006786.json",
        "E02006785.json",
        "E02006784.json",
        "E02006783.json",
        "E02006782.json"
    ]

    for (var i = 0; i < geoJSONs.length; i++) {
        map.data.loadGeoJson('static/js/geojson/' + geoJSONs[i]);
    }
    var disp = true;
    //map.data.setStyle(function(feature) {
    //  var color = 'gray';
    //  var opacity = Math.random()*0.6 + 0.2;
    //  if(disp){
    //    console.log(feature.f.MSOA11CD);
    //    disp = false;
    //  }
    //  return /** @type {google.maps.Data.StyleOptions} */({
    //    fillColor: "green",
    //    strokeColor: color,
    //    strokeWeight: 0.3,
    //    fillOpacity: opacity
    //  });
    //});
    map.data.setStyle(function(feature) {
        var color = 'lawngreen';
        var id = feature.f.MSOA11CD;
        var opac = data[id].activity; //MAKE SURE TO MULTIPLY BY 0 OR 1 HERE AND DIVIDE BY TOTAL
        //console.log(feature);
        return /** @type {google.maps.Data.StyleOptions} */ ({
            fillColor: "green",
            strokeColor: color,
            strokeWeight: 0.3,
            fillOpacity: opac //*0.6 + 0.2
        });
    });
    map.data.addListener('mouseover', function(event) {
        map.data.revertStyle();
        map.data.overrideStyle(event.feature, {
            strokeWeight: 2
        });
    });
    map.data.addListener('click', function(event) {
        doModal(event.feature.f.MSOA11NM, JSON.stringify(data[event.feature.f.MSOA11CD]));
    });



    function doModal(heading, formContent) {
        html = '<div id="dynamicModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">';
        html += '<div class="modal-dialog">';
        html += '<div class="modal-content">';
        html += '<div class="modal-header">';
        html += '<a class="close" data-dismiss="modal">×</a>';
        html += '<h4>' + heading + '</h4>'
        html += '</div>';
        html += '<div class="modal-body">';
        html += '<p>';
        html += formContent;
        html += '</div>';
        html += '<div class="modal-footer">';
        html += '<span class="btn btn-primary" data-dismiss="modal">Close</span>';
        html += '</div>'; // content
        html += '</div>'; // dialog
        html += '</div>'; // footer
        html += '</div>'; // modalWindow
        $('body').append(html);
        $("#dynamicModal").modal();
        $("#dynamicModal").modal('show');

        $('#dynamicModal').on('hidden.bs.modal', function(e) {
            $(this).remove();
        });

    }

    //Checkbox Trigger


}

function update_onclick() {
    update_opac(data);
}

function update_opac(data) {
    male = 0;
    female = 0;
    asian = 0;
    caucasian = 0;
    low = 0;
    med = 0;
    high = 0;
    total = 0;

    if (document.getElementById("male_cb").checked) {
        male = 1;
        total += 1;
    }
    if (document.getElementById("female_cb").checked) {
        female = 1;
        total += 1;
    }
    if (document.getElementById("asian_cb").checked) {
        asian = 1;
        total += 1;
    }
    if (document.getElementById("caucasian_cb").checked) {
        caucasian = 1;
        total += 1;
    }
    if (document.getElementById("lowinc_cb").checked) {
        low = 1;
        total += 1;
    }
    if (document.getElementById("medinc_cb").checked) {
        med = 1;
        total += 1;
    }
    if (document.getElementById("highinc_cb").checked) {
        high = 1;
        total += 1;
    }

    console.log(data);
    console.log(data["E02000364"]);

}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
