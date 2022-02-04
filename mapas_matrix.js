///////////Creación variable mapa/////////// 
var map = L.map('map', {
		zoomControl: false,
		center: [43.07327775725035, -7.9],
		zoom: 9,
		minZoom: 3,
		maxZoom: 20,
		maxBounds: [
			[20, -50],
			[50, 50]
			],
	});




///////////Funcionalidades estructura del visor///////////
//Layers on top
map.createPane('límites');
// This pane is above markers but below popups
map.getPane('límites').style.zIndex = 650;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('límites').style.pointerEvents = 'none';
//Labels on top
map.createPane('labels');
// This pane is above markers but below popups
map.getPane('labels').style.zIndex = 800;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('labels').style.pointerEvents = 'none';
//bindTooltip on top
map.createPane('popups');
// el popup aparece al arrastar encima de todo pero debajo del popup que aparece al clicar
map.getPane('popups').style.zIndex = 1000;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups').style.pointerEvents = 'none';
//bindPopup on top
map.createPane('popups1');
// aparece por encima de todas las capas
map.getPane('popups1').style.zIndex = 1500;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups1').style.pointerEvents = 'none';
//Barra de interacción de capas	tantaas sildebar como grupos de capas
var sidebar = L.control.sidebar('sidebar', { closeButton:true, position: 'left' });
	map.addControl(sidebar);
	sidebar.hide();			
	sidebar.show();
	sidebar.toggle();
var visible = sidebar.isVisible();
var button = new L.Control.Button(L.DomUtil.get('helpbutton'), { toggleButton: 'active', position: 'topleft'});
	button.addTo(map);
	button.on('click', function () {
	 if (button.isToggled()) {
			sidebar.hide();
		} else {
			sidebar.show();
		}
	});
var sidebar2 = L.control.sidebar('sidebar2', { closeButton:true, position: 'right' });
	map.addControl(sidebar2);
	sidebar2.hide();			
	sidebar2.show();
	sidebar2.toggle();
var visible2 = sidebar.isVisible();

//Buscador
var geocoder = L.Control.geocoder({ position: 'topleft',
	//defaultmarkGeocode: false
	}).addTo(map);


///////////Diseño caracteriticas basicas del visor///////////
//Título
var title2 = L.control({position: 'topright'});
	title2.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info2');
	 div.innerHTML +=
	 'VISOR CARTOGRÁFICO<h2>Tipos de clima oceánico<br>Provincia da Coruña';
	 return div;
	};
	title2.addTo(map);
//Logo Matrix	
var title1 = L.control({position: 'bottomright' });
	title1.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info1');
	 div.innerHTML +=
	 '<a href="https://www.fundacionmatrix.es"><img src="images/matrix.png" width="75%" ></img></a>';
	 return div;
	};
	title1.addTo(map);


		//Logo demos
var title4 = L.control({position: 'bottomright'});
	title4.onAdd = function (map) {
var div = L.DomUtil.create('div','info4');
	 div.innerHTML +=
	 '<a><img src="images/logo_climaco.png" width="90px" height="80px" ></img></a>';
	 return div;
	};
	title4.addTo(map); 
	





///////////Cartografía de referencia///////////

var Mapa_fondo = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetmap </a>| Map data © 2021 <a href="https://www.fundacionmatrix.es"><strong>Fundación Matrix</strong></a>',
	});		
var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetmap, ©CartoDB'
    }).addTo(map);
var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetmap, ©CartoDB',
    pane: 'labels'
    });


var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	opacity: 0.5,
	attribution: 'Map data &copy'
	});
var osm1 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	opacity: 0,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetmap</a>'
	});
var osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	minZoom: 0, 
	maxZoom: 13,
	});
var osm3 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetmap </a>| Map data © 2019 <a href="https://www.fundacionmatrix.es"><strong>Fundación Matrix</strong></a>',
	});



//Límites
var comunidades = L.geoJson(comunidades, {
	color: "#17202A", 
	weight: 1.3,
	opacity: 0.5,
	fillOpacity: 0,
	pane: 'límites', // layer goes on top.
	attribution: '| © <a href="http://www.ign.es">Instituto Geográfico Nacional || © <a href="http://www.aemet.es">Agencia Estatal de Meteorología |'			
	}).addTo(map);

 


var tma = L.imageOverlay('images/temp_media_anual.jpg',
  imageBounds = [
    [44.009, -9.814],
    [42.312, -7.022]

  ]).addTo(map);

tma.setOpacity(0);



 var relieve = L.imageOverlay('images/hillshade_cor.png',
  imageBounds = [
    [44.009, -9.814],
    [42.312, -7.022]

  ]);

relieve.setOpacity(0.3);

var tmp = L.imageOverlay('images/temp_primavera.png',  [
    [44.009, -9.814],
    [42.312, -7.022]

  ]);

tmp.setOpacity(1.0);

var tmv = L.imageOverlay('images/temp_veran.png',
  imageBounds = [
    [44.009, -9.814],
    [42.312, -7.022]

  ]);

tmv.setOpacity(1.0);


  var tmo = L.imageOverlay('images/temp_outono.png',
  imageBounds = [
    [44.009, -9.814],
    [42.312, -7.022]

  ]);

tmo.setOpacity(1.0);


  var tmi = L.imageOverlay('images/temp_inverno.png',
  imageBounds = [
    [44.009, -9.814],
    [42.312, -7.022]

  ]);


tmi.setOpacity(1.0);


var pma = L.imageOverlay('images/prec_med_anual.png',
  imageBounds = [
    [44.009, -9.814],
    [42.312, -7.022]

  ]);

pma.setOpacity(1.0);


var pmp = L.imageOverlay('images/prec_primavera.png',
  imageBounds = [
    [44.009, -9.814],
    [42.312, -7.022]

  ]);

pmp.setOpacity(1.0);

  var pmv = L.imageOverlay('images/prec_veran.png',
  imageBounds = [
    [44.009, -9.814],
    [42.312, -7.022]

  ]);

pmv.setOpacity(1.0);


  var pmo = L.imageOverlay('images/prec_outono.png',
  imageBounds = [
    [44.009, -9.814],
    [42.312, -7.022]

  ]);


pmo.setOpacity(1.0);


  var pmi = L.imageOverlay('images/prec_inverno.png',
  imageBounds = [
    [44.009, -9.814],
    [42.312, -7.022]

  ]);
pmi.setOpacity(1.0);










///////////Otras funcionalidades
				
//zoomHome
var zoomHome = L.Control.zoomHome({ position: 'topleft', homeCoordinates:[40, -5], zoomHomeTitle:'Posición inicial'}).addTo(map);
//fullscreen						
var fsControl = new L.Control.FullScreen();
	map.addControl(fsControl);
	map.on('enterFullscreen', function(){
	if(window.console) window.console.log('enterFullscreen');
	});
	map.on('exitFullscreen', function(){
	if(window.console) window.console.log('exitFullscreen');
	});
	L.control.scale().addTo(map);













    



//estilo y popups cambio temperatura 
/*

function getColor11(a) {
	
	return a >= 0.7? '#ff0000' : 
	a > 0.0? '#ffecbd':
	
	'#C25200';
};


function style11(feature) {
	return {
		fillColor: getColor11(feature.properties.Temp_rel),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.8
	};

};
function popup11(feature, layer) {

	if (feature.properties && feature.properties.Temp_rel) {
		layer.bindTooltip("<strong>Cambio de temperatura: </strong>"+  
			feature.properties.Temp_rel.toFixed(2).toString().replace(".", ",")+
			"ºC<br><strong>Concello: </strong>"+
			feature.properties.Concello,
			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson11 = L.geoJson(tabla, {
	style: style11,
	onEachFeature: popup11
});



//estilo y popups cambio precipitación


function getColor12(a) {
	
	return a < -5.0? '#ffa87e' : 
	a < 0? '#ffecbd':
	a < 5 ? '#abe9ff':
	a < 10? '#004cac':
	
	'red';
};


function style12(feature) {
	return {
		fillColor: getColor12(feature.properties.Prec_rel),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.8
	};

};
function popup12(feature, layer) {

	if (feature.properties && feature.properties.Prec_rel) {
		layer.bindTooltip("<strong>Cambio na precipitación: </strong>"+  
			feature.properties.Prec_rel.toFixed(2).toString().replace(".", ",")+
			" %<br><strong>Concello: </strong>"+
			feature.properties.Concello,
			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson12 = L.geoJson(tabla, {
	style: style12,
	onEachFeature: popup12
});


function getColor13(a) {
	
	return a == 'Moi feble'? '#74b330' : 
	a == 'Feble'? '#fffdb3':
	a == 'Moderado' ? '#f4af84':
	a == 'Notable' ? '#d20105':
	
	'red';
};


function style13(feature) {
	return {
		fillColor: getColor13(feature.properties.Clase),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.8
	};

};
function popup13(feature, layer) {

	if (feature.properties && feature.properties.Clase) {
		layer.bindTooltip("<strong>Cambio: </strong>"+  
			feature.properties.Clase+
			" <br><strong>Concello: </strong>"+
			feature.properties.Concello,
			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson13 = L.geoJson(tabla, {
	style: style13,
	onEachFeature: popup13
});


*/



function getColor14(a) {
	
	return a == 'fresco / húmedo'? '#9bc1e8' :
	a == 'fresco / moi húmedo'? '#2f74b5' : 
	a == 'fresco / hiperhúmedo'? '#1f4e78':
	a == 'temperado / subhúmedo' ? '#a9d08f':
	a == 'temperado / húmedo' ? '#92d14f':
	a == 'temperado / moi húmedo' ? '#538234':
	a == 'temperado / hiperhúmedo' ? '#385624':
	a == 'cálido / subhúmedo' ? '#fecccb':
	a == 'cálido / húmedo' ? '#ff7c81':
	a == 'cálido / moi húmedo' ? '#fe0000':

	
	'#fe0000';
};


function style14(feature) {
	return {
		fillColor: getColor14(feature.properties.clases),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.8
	};

};
function popup14(feature, layer) {

	if (feature.properties && feature.properties.clases) {
		layer.bindTooltip("<strong>Clima: </strong>"+  
			feature.properties.clases,
			//" <br><strong>Concello: </strong>"+
			//feature.properties.NomeConcel,
			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson14 = L.geoJson(tipos,{
	style: style14,
	onEachFeature: popup14,
	attribution:'| <a href="https://www.fundacionmatrix.es"><strong>@Fudación Matrix 2021</a>'
});



function getColor15(a) {
	
	return a == 'Verán cálido e seco/inverno morno'? '#fe0000' : 
	a == 'Verán cálido e seco/inverno fresco'? '#f8cbac':
	a == 'Verán cálido e seco/inverno frío' ? '#fdf2ec':
	a == 'Verán cálido e húmedo/inverno morno' ? '#538234':
	a == 'Verán cálido e húmedo/inverno fresco'? '#c6e0b3':
	a == 'Verán suave e seco/inverno morno' ? '#ffc000':
	a == 'Verán suave e seco/inverno fresco' ? '#ffff01':
	a == 'Verán suave e seco/inverno frío'? '#fffed0':
	a == 'Verán suave e húmedo/inverno morno' ? '#315496':
	a == 'Verán suave e húmedo/inverno fresco' ? '#8fa9da':
	a == 'Verán suave e húmedo/inverno frío'? '#dae1f3':
	a == 'Verán fresco e húmedo/inverno morno' ? '#861b81':
	a == 'Verán fresco e húmedo/inverno fresco' ? '#c245bd':
	a == 'Verán fresco e húmedo/inverno frío'? '#d6a8f1':

	
	'grey';
};


function style15(feature) {
	return {
		fillColor: getColor15(feature.properties.variante),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.8
	};

};
function popup15(feature, layer) {

	if (feature.properties && feature.properties.variante) {
		layer.bindTooltip("<strong>Clima: </strong>"+  
			feature.properties.variante,
			/*" <br><strong>Concello: </strong>"+
			feature.properties.Concello,
			*/{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson15 = L.geoJson(reximes,{
	style: style15,
	onEachFeature: popup15,
	attribution:'| <a href="https://www.fundacionmatrix.es"><strong>@Fudación Matrix 2021</a>'
});




function styleCon(feature) {
	return {
		fillColor: 'green',
		weight: 0.5,
		opacity: 0.5,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.0
	};

};
function popupCon(feature, layer) {

	if (feature.properties && feature.properties.NomeConcel) {
		layer.bindTooltip("<strong>Concello: </strong>"+  
			feature.properties.NomeConcel,
			/*" <br><strong>Concello: </strong>"+
			feature.properties.Concello,
			*/{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var Concellos = L.geoJson(tabla,{
	style: styleCon,
	onEachFeature: popupCon
});
/*
var mapa11 = L.layerGroup([geojson11]);
var mapa12 = L.layerGroup([geojson12]);
var mapa13 = L.layerGroup([geojson13]);*/
var mapa14 = L.layerGroup([geojson14]).addTo(map);
var mapa15 = L.layerGroup([geojson15]);







var baseTree = 
[
	{ label: "<strong>Limpar mapa", layer: osm3 },
/*

{
	label: '<strong>Mapas de temperatura',
	children: [
	
	    { label: "Temperatura media anual",layer: tma},
	    { label: "Temperatura media primavera",layer: tmp},
	    { label: "Temperatura media verán",layer: tmv},
	    { label: "Temperatura media outono",layer: tmo},
	    { label: "Temperatura media inverno",layer: tmi},
	   
               ]
},
{

	label: '<strong>Mapas de precipitacións',
	children:[               

	    { label: "Precipitación media anual",layer: pma},
		{ label: "Precipitación media primavera",layer: pmp},
		{ label: "Precipitación media verán",layer: pmv},
		{ label: "Precipitación media outono",layer: pmo},
		{ label: "Precipitación media inverno",layer: pmi},
               ]
},             

*/	  

	{
	label: '<strong>Mapas de tipos de clima local',
	children: [

        { label: "Tipos de clima",layer: mapa14},
	    { label: "Variantes locais de clima oceánico",layer: mapa15}
	           ]
},


/*
	{
	label: '<strong>Mapas de cambio climático recente por concellos',
	children: [
	
	    { label: "Cambio na temperatura",layer: mapa11},
	    { label: "Cambio na precipitación",layer: mapa12},
	    { label: "Tipos de cambio",layer: mapa13}
	   
               ]
},
		
*/	   
	
	
	 ];





var overlayTree = {
	label: '<strong>Mapas de referencia',
	children: [
	
		{ label: "Concellos", layer: Concellos},
		{ label: "OpenStreetmap", layer: osm},
		{ label: "Hidrografía e comunicacións", layer: positron},
		{ label: "Toponimia", layer: positronLabels},
		{ label: "Relevo", layer: relieve}
	]
};	




//leyenda temperaturas medias

/*
var htmlLegend1 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Temperatura media anual, <br>período 1981-2010'+"<\h3>",
			layer: tma,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/leyenda_temp.png",></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: CLIMACO.Elaboración propia con datos de la Axencia Estatal de Meteoroloxía (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend1);

var htmlLegend2 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Temperatura media primavera, <br>período 1981-2010'+"<\h3>",
			layer: tmp,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/leyenda_temp.png",></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: CLIMACO.Elaboración propia con datos de la Axencia Estatal de Meteoroloxía (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend2);


var htmlLegend3 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Temperatura media verán, <br>período 1981-2010'+"<\h3>",
			layer: tmv,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/leyenda_temp.png",></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: CLIMACO.Elaboración propia con datos de la Axencia Estatal de Meteoroloxia (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend3);




	var htmlLegend4 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Temperatura media outono, <br>período 1981-2010'+"<\h3>",
			layer: tmo,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/leyenda_temp.png",></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: CLIMACO.Elaboración propia con datos de la Axencia Estatal de Meteoroloxia (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend4);





	var htmlLegend5 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Temperatura media invierno, <br>período 1981-2010'+"<\h3>",
			layer: tmi,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/leyenda_temp.png",></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: CLIMACO.Elaboración propia con datos de la Axencia Estatal de Meteoroloxia (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend5);




//Precipitaciones


	var htmlLegend6 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Precipitación media anual, <br>período 1981-2010'+"<\h3>",
			layer: pma,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/leyenda_prec.png",></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: CLIMACO.Elaboración propia con datos de la Axencia Estatal de Meteoroloxia (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend6);




var htmlLegend7 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Precipitación media primavera, <br>período 1981-2010'+"<\h3>",
			layer: pmp,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/leyenda_prec.png",></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: CLIMACO.Elaboración propia con datos de la Axencia Estatal de Meteoroloxia (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend7);




	var htmlLegend8 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Precipitación media verán, <br>período 1981-2010'+"<\h3>",
			layer: pmv,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/leyenda_prec.png",></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: CLIMACO.Elaboración propia con datos de la Axencia Estatal de Meteoroloxia (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend8);






	var htmlLegend9 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Precipitación media outono, <br>período 1981-2010'+"<\h3>",
			layer: pmo,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/leyenda_prec.png",></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: CLIMACO.Elaboración propia con datos de la Axencia Estatal de Meteoroloxia (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend9);





	var htmlLegend10 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Precipitación media inverno, <br>período 1981-2010'+"<\h3>",
			layer: pmi,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/leyenda_prec.png",></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: CLIMACO.Elaboración propia con datos de la Axencia Estatal de Meteoroloxia (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend10);

	var htmlLegend11 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na temperatura media anual entre os períodos 1999-2018 e 1971-1990'+"<\h3>",
			layer: geojson11,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br> Promedio espacial por concellos'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				
				label:"<h3>"+'<br><strong>Temperatura ºC: <br><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				label:"<h4>"+  ' 0,71 - 0,9'+"<\h4>",html: '',style: {'background-color': '#ff0000','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			    label:"<h4>"+  ' 0,5 - 0.7'+"<\h4>",html: '',style: {'background-color': '#ffecbd','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	

				label: "<h5>" +'<BR><i>Fonte: CLIMACO.Elaboración propia con datos de la Axencia Estatal de Meteoroloxia (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend11);


	var htmlLegend12 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio relativo da precipitación anual promedio entre os períodos 1999-2018 e 1971-1990'+"<\h3>",
			layer: geojson12,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br>Promedio espacial por concellos'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:"<h3>"+'<br> <strong>Unidades: % </strong><br><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				label:"<h4>"+  ' -10,0 - -5,1'+"<\h4>",html: '',style: {'background-color': '#ffa87e','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			    label:"<h4>"+  ' -5,0 - 0'+"<\h4>",html: '',style: {'background-color': '#ffecbd','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '  0,1 - 5'+"<\h4>",html: '',style: {'background-color': '#abe9ff','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			    label:"<h4>"+  '  5,1 - -10'+"<\h4>",html: '',style: {'background-color': '#004cac','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label: "<h5>" +'<BR><i>Fonte: CLIMACO.Elaboración propia con datos de la Axencia Estatal de Meteoroloxia (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend12);



		var htmlLegend13 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Tipos de cambio climático'+"<\h3>",
			layer: geojson13,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
			    label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br> Promedio espacial por concellos'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h3>"+'<br> <strong></strong>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

		    	label:'<br><img src="images/leg_cat.jpg",></img><br>',
				IMG:"<h3>"+  ''+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				/*label:"<h4>"+  ' Moi feble'+"<\h4>",html: '',style: {'background-color': '#74b330','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			    label:"<h4>"+  ' Feble'+"<\h4>",html: '',style: {'background-color': '#fffdb3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  ' Moderado'+"<\h4>",html: '',style: {'background-color': '#f4af84','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			    label:"<h4>"+  ' Notable'+"<\h4>",html: '',style: {'background-color': '#d20105','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label: "<h5>" +'<BR><i>Fonte: CLIMACO.Elaboración propia con datos de la Axencia Estatal de Meteoroloxia (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend13);

*/

		var htmlLegend14 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Tipos de clima'+"<\h3><h4><br>Baseados na temperatura e precipitación media anual</h4>",
			layer: geojson14,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
			    label:"<h4>"+  'Método: modelización estatística e interpolación espacial. Réximes ombrotérmicos froito da combinación das variables precipitacións e temperatura media anuais'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br> <strong>Categorías de cambio climático </strong>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

		    	label:'<br><img src="images/reximes.png",></img><br>',
				IMG:"<h3>"+  ''+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				/*label:"<h4>"+  ' Moi feble'+"<\h4>",html: '',style: {'background-color': '#74b330','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			    label:"<h4>"+  ' Feble'+"<\h4>",html: '',style: {'background-color': '#fffdb3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  ' Moderado'+"<\h4>",html: '',style: {'background-color': '#f4af84','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			    label:"<h4>"+  ' Notable'+"<\h4>",html: '',style: {'background-color': '#d20105','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				*/label: "<h5>" +'<BR><i>Fonte: CLIMACO. Elaboración propia con datos da Axencia Estatal de Meteoroloxía (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend14);




		var htmlLegend15 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Variantes locais de clima oceánico.<br>'+"<\h3>",
			layer: geojson15,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
			    label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br>Clases baseadas no caracter térmico dos meses de xullo e xaneiro e na concentración estival da precipitación (período 1981-2010)'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h3>"+'<br> <strong>Variantes </strong>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

		    	label:'<br><img src="images/Variante.jpg",></img><br>',
				IMG:"<h3>"+  ''+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				/*label:"<h4>"+  ' Moi feble'+"<\h4>",html: '',style: {'background-color': '#74b330','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			    label:"<h4>"+  ' Feble'+"<\h4>",html: '',style: {'background-color': '#fffdb3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  ' Moderado'+"<\h4>",html: '',style: {'background-color': '#f4af84','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			    label:"<h4>"+  ' Notable'+"<\h4>",html: '',style: {'background-color': '#d20105','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				*/label: "<h5>" +'<BR><i>Fonte: CLIMACO. Elaboración propia con datos da Axencia Estatal de Meteoroloxía (2020).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend15);	

//minimapa	
  var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, position:"topleft", width:100,height:100,}).addTo(map); 	




//Visualizar capas
// L.control.layers(baseLayers, overlays,{collapsed:true, position: 'topright',}).addTo(map);
L.control.layers.tree(baseTree, overlayTree,{collapsed:true}).collapseTree(baseTree,overlayTree).addTo(map);

//boton de informacion 
var button2 = new L.Control.Button(L.DomUtil.get('helpbutton2'), { toggleButton: 'active', position: 'topright'});
	button2.addTo(map);
	button2.on('click', function () {
	 if (button2.isToggled()) {
			sidebar2.hide();
		} else {
			sidebar2.show();
		}
	});