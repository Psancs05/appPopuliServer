(function(){var t={45:function(){},1560:function(t,e,o){"use strict";o(6992),o(8674),o(9601),o(7727);var n=o(144),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-main",[o("v-footer",{attrs:{app:"",fixed:"",padless:"",color:"white"}},[o("v-card",{attrs:{color:"#178649",width:"100%",height:"100%"}},[o("v-tabs",{attrs:{"background-color":"#178649",centered:"","fixed-tabs":"",dark:"","icons-and-text":"",optional:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.icons,(function(e){return o("v-tab",{key:e,attrs:{to:e.ruta}},[o("div",{staticClass:"texto_iconos"},[t._v(" "+t._s(e.nombre)+" ")]),o("v-icon",[t._v(" "+t._s(e.icono)+" ")])],1)})),1)],1)],1),o("router-view")],1)],1)},r=[],i={data:function(){return{activeTab:1,icons:[{nombre:"AYUDA",icono:"mdi-help",ruta:"/ayuda"},{nombre:"INICIO",icono:"mdi-home",ruta:"/"},{nombre:"EXPLORAR",icono:"mdi-map-marker",ruta:"/explorar"}]}}},s=i,l=o(1001),c=o(3453),u=o.n(c),d=o(7524),f=o(2371),v=o(1966),p=o(6428),m=o(7877),g=o(4227),b=o(5559),_=(0,l.Z)(s,a,r,!1,null,null,null),h=_.exports;u()(_,{VApp:d.Z,VCard:f.Z,VFooter:v.Z,VIcon:p.Z,VMain:m.Z,VTab:g.Z,VTabs:b.Z});var x=o(9132);n.Z.use(x.Z);var w=new x.Z({}),y=o(8345),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{staticClass:"icono_usuario"},[n("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),n("div",{staticClass:"titulo"},[n("img",{attrs:{src:o(6949),width:"180",height:"144"}})]),n("div",{staticClass:"cuerpo"},[n("v-container",{staticStyle:{width:"95%","max-width":"500px"},attrs:{fluid:""}},[n("v-btn",{attrs:{dark:"",width:"100%",height:"50",color:"#ff5d55",to:"/informe"}},[t._v(" enviar informe ")]),n("br"),n("br"),n("v-divider"),n("br"),n("v-btn",{attrs:{dark:"",width:"100%",height:"50",color:"#178649",to:"/login"}},[t._v(" iniciar sesión ")])],1)],1)])},k=[],C=o(680),V=o(2255),S=o(1418),I={},T=(0,l.Z)(I,Z,k,!1,null,null,null),M=T.exports;u()(T,{VApp:d.Z,VBtn:C.Z,VContainer:V.Z,VDivider:S.Z,VIcon:p.Z});var O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"informe"}},[o("div",{staticClass:"icono_usuario"},[o("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),o("div",{staticClass:"titulo"},[t._v(" Informe ")]),o("div",{staticClass:"cuerpo"},[o("v-container",{staticStyle:{width:"95%","max-width":"500px"},attrs:{fluid:""}},[o("v-form",[o("v-select",{attrs:{label:"Plaga/Enfermedad",color:"#178649",items:t.patogenos,"item-value":"nombre_cientifico","item-text":"nombre_cientifico"},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[o("i",[t._v(t._s(n.nombre_cientifico))]),t._v("   ("+t._s(n.nombre_vulgar)+") ")]}},{key:"selection",fn:function(e){var n=e.item;return[o("i",[t._v(t._s(n.nombre_cientifico))]),t._v("   ("+t._s(n.nombre_vulgar)+") ")]}}]),model:{value:t.informe.patogeno,callback:function(e){t.$set(t.informe,"patogeno",e)},expression:"informe.patogeno"}})],1),o("upload-files"),o("v-form",[o("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"Fecha",color:"#178649",hint:"DD/MM/AA",readonly:""},model:{value:t.computedDateFormatted,callback:function(e){t.computedDateFormatted=e},expression:"computedDateFormatted"}},"v-text-field",a,!1),n))]}}]),model:{value:t.menuDate,callback:function(e){t.menuDate=e},expression:"menuDate"}},[o("v-date-picker",{attrs:{"no-title":"","first-day-of-week":1,locale:"es-es",color:"#178649"},on:{input:function(e){t.menuDate=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),o("v-dialog",{attrs:{width:"800"},scopedSlots:t._u([t.location.position?{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{value:t.location.address,label:"Localización",color:"#178649",readonly:""}},"v-text-field",a,!1),n))]}}:{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"Localización",color:"#178649",readonly:""}},"v-text-field",a,!1),n))]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("div",{staticStyle:{height:"400px"}},[o("InformeMapa",{model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1),o("v-divider"),o("v-card-actions",{staticClass:"justify-center"},[o("v-btn",{attrs:{dark:"",width:"100%","max-width":"500px",height:"50",color:"#ff5d55"},on:{click:function(e){t.dialog=!1}}},[t._v(" aceptar ")])],1)],1)],1),o("v-select",{attrs:{label:"Total de árboles dañados",color:"#178649",suffix:"árbol/es",items:t.extension},model:{value:t.informe.extension_arboles,callback:function(e){t.$set(t.informe,"extension_arboles",e)},expression:"informe.extension_arboles"}},[o("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{size:"20",color:"#178649"}},n),[t._v(" mdi-help ")])]}}])},[o("span",[t._v("si me disculpa")])])],1),o("v-text-field",{attrs:{label:"Porcentaje de pies afectados",color:"#178649",suffix:"%",rules:[t.rules.reglaExtension]},model:{value:t.informe.extension_pies,callback:function(e){t.$set(t.informe,"extension_pies",e)},expression:"informe.extension_pies"}},[o("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{size:"20",color:"#178649"}},n),[t._v(" mdi-help ")])]}}])},[o("span",[t._v("si me disculpa")])])],1),o("v-select",{attrs:{label:"Severidad del daño",color:"#178649",suffix:"%",items:t.severidadOpciones},model:{value:t.informe.severidad,callback:function(e){t.$set(t.informe,"severidad",e)},expression:"informe.severidad"}},[o("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{size:"20",color:"#178649"}},n),[t._v(" mdi-help ")])]}}])},[o("span",[t._v("si me disculpa")])])],1),o("v-textarea",{attrs:{color:"#178649","auto-grow":""},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(" Observaciones ")]},proxy:!0}]),model:{value:t.informe.observaciones,callback:function(e){t.$set(t.informe,"observaciones",e)},expression:"informe.observaciones"}}),o("v-text-field",{attrs:{label:"Teléfono o correo electrónico",color:"#178649"},model:{value:t.informe.contacto,callback:function(e){t.$set(t.informe,"contacto",e)},expression:"informe.contacto"}},[o("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{size:"20",color:"#178649"}},n),[t._v(" mdi-help ")])]}}])},[o("span",[t._v("si me disculpa")])])],1),o("v-divider"),o("br"),o("v-btn",{staticClass:"white--text",attrs:{width:"100%",height:"50",color:"#ff5d55"},on:{click:t.saveInforme}},[t._v(" enviar ")])],1)],1)],1)])},E=[],A=o(5200),D=(o(4916),o(7601),o(1249),o(3123),o(2222),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("l-map",{ref:"map",staticStyle:{"z-index":"0"},attrs:{zoom:"18",center:[t.position.lat||t.userLocation.lat||t.defaultLocation.lat,t.position.lng||t.userLocation.lng||t.defaultLocation.lng]},on:{dblclick:t.onMapClick}},[o("l-geosearch",{attrs:{options:t.geoSearchOptions}}),o("l-tile-layer",{attrs:{url:t.tileProvider.url,attribution:t.tileProvider.attribution}}),t.position.lat&&t.position.lng?o("l-marker",{attrs:{visible:"",draggable:"",icon:t.icon,"lat-lng":t.position},on:{"update:latLng":function(e){t.position=e},"update:lat-lng":function(e){t.position=e},dragstart:function(e){t.dragging=!0},dragend:function(e){t.dragging=!1}}}):t._e()],1)}),F=[],P=o(6198),L=(o(5666),o(1539),o(458)),$=o(5843),j=o(1739),R=o(5637),z=o(8993),U=o(9344),B={components:{LMap:L.Z,LTileLayer:$.Z,LMarker:j.Z,LGeosearch:z.Z},props:{value:{type:Object,required:!0},defaultLocation:{type:Object,default:function(){return{lat:42.55057050005772,lng:-6.598203246805054}}}},data:function(){return{loading:!1,geoSearchOptions:{provider:new R.Zm,showMarker:!1,autoClose:!0},userLocation:{},icon:(0,U.icon)({iconUrl:o(3994),shadowUrl:o(5275)}),position:{},address:"",dragging:!1,tileProvider:{attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}}},mounted:function(){this.getUserPosition(),this.$refs.map.mapObject.on("geosearch/showlocation",this.onSearch)},watch:{position:{deep:!0,handler:function(t){var e=this;return(0,P.Z)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,e.getAddress();case 2:e.address=o.sent,e.$emit("input",{position:t,address:e.address});case 4:case"end":return o.stop()}}),o)})))()}}},methods:{getUserPosition:function(){var t=this;return(0,P.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){t.userLocation={lat:e.coords.latitude,lng:e.coords.longitude}}));case 1:case"end":return e.stop()}}),e)})))()},getAddress:function(){var t=this;return(0,P.Z)(regeneratorRuntime.mark((function e(){var o,n,a,r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,o="Unresolved address",e.prev=2,n=t.position,a=n.lat,r=n.lng,e.next=6,fetch("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=".concat(a,"&lon=").concat(r));case 6:if(i=e.sent,200!==i.status){e.next=12;break}return e.next=10,i.json();case 10:s=e.sent,o=s.display_name;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](2),console.error("Reverse Geocode Error->",e.t0);case 17:return t.loading=!1,e.abrupt("return",o);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})))()},onMapClick:function(t){this.position=t.latlng},onSearch:function(t){var e=t.location;this.position={lat:e.y,lng:e.x}}}},q=B,N=(0,l.Z)(q,D,F,!1,null,null,null),G=N.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.progressInfos?o("div",t._l(t.progressInfos,(function(e,n){return o("div",{key:n,staticClass:"mb-2"},[o("span",[t._v(t._s(e.fileName))]),o("div",{staticClass:"progress"},[o("div",{staticClass:"progress-bar progress-bar-info",staticStyle:{"background-color":"#178649"},style:{width:e.percentage+"%"},attrs:{role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(e.percentage)+"% ")])])])})),0):t._e(),o("label",{staticClass:"boton_examinar btn"},[o("v-icon",{attrs:{color:"#178649",size:"17"}},[t._v("mdi-camera")]),t._v(" SELECCIONAR ARCHIVOS "),o("input",{staticStyle:{display:"none"},attrs:{type:"file",multiple:""},on:{change:t.selectFile}})],1),o("button",{staticClass:"boton_subir btn",attrs:{disabled:!t.selectedFiles},on:{click:t.uploadFiles}},[t._v(" SUBIR ARCHIVOS ")]),o("br"),o("br"),t.message?o("div",{staticClass:"alert alert-light",attrs:{role:"alert"}},[o("ul",t._l(t.message.split("\n"),(function(e,n){return o("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]):t._e()])},Q=[],Y=(o(8309),o(6133)),X=o(2751),J=o(4206),K=o.n(J),W=K().create({baseURL:"https://test.apppopuli.es/api",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, PATCH, OPTIONS","Content-type":"application/json"}}),tt=function(){function t(){(0,Y.Z)(this,t)}return(0,X.Z)(t,[{key:"upload",value:function(t,e){var o=new FormData;return o.append("file",t),W.post("/upload",o,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:e})}},{key:"getFiles",value:function(){return W.get("/files")}}]),t}(),et=new tt,ot={name:"upload-files",data:function(){return{selectedFiles:void 0,progressInfos:[],message:"",fileInfos:[]}},methods:{selectFile:function(t){this.progressInfos=[],this.selectedFiles=t.target.files},upload:function(t,e){var o=this;this.progressInfos[t]={percentage:0,fileName:e.name},et.upload(e,(function(e){o.progressInfos[t].percentage=Math.round(100*e.loaded/e.total)})).then((function(t){var e=o.message?o.message+"\n":"";return o.message=e+t.data.message,et.getFiles()})).then((function(t){o.fileInfos=t.data})).catch((function(){o.progressInfos[t].percentage=0,o.message="El archivo no se ha podido enviar correctamente: "+e.name}))},uploadFiles:function(){this.message="";for(var t=0;t<this.selectedFiles.length;t++)this.upload(t,this.selectedFiles[t])}},mounted:function(){var t=this;et.getFiles().then((function(e){t.fileInfos=e.data}))}},nt=ot,at=(0,l.Z)(nt,H,Q,!1,null,null,null),rt=at.exports;u()(at,{VIcon:p.Z});var it=function(){function t(){(0,Y.Z)(this,t)}return(0,X.Z)(t,[{key:"create",value:function(t){return W.post("/informes",t)}}]),t}(),st=new it,lt=function(){function t(){(0,Y.Z)(this,t)}return(0,X.Z)(t,[{key:"getAll",value:function(){return W.get("/patogenos")}}]),t}(),ct=new lt,ut={components:{InformeMapa:G,UploadFiles:rt},data:function(t){return{selectedFile:null,informe:{id:null,patogeno:"",extension_arboles:"",extension_pies:"",severidad:"",observaciones:"",contacto:""},patogenos:[],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateFormatted:t.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),menuDate:!1,dialog:!1,location:{},extension:["1","2-10","10-100","Más de 100"],rules:{reglaExtension:function(t){var e=/^[1-9][0-9]?$|^100$/;return e.test(t)||"Introduce un valor numérico entre 1 y 100"}},severidadOpciones:["0-25","25-75","Más del 75"]}},watch:{dialog:function(t){t&&setTimeout((function(){window.dispatchEvent(new Event("resize"))}),100)}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)}},methods:{mostrarPatogenos:function(){var t=this;ct.getAll().then((function(e){t.patogenos=e.data.map(t.getMostrarPatogeno),console.log(e.data)})).catch((function(t){console.log(t)}))},getMostrarPatogeno:function(t){return{nombre_cientifico:t.nombre_cientifico,nombre_vulgar:t.nombre_vulgar}},formatDate:function(t){if(!t)return null;var e=t.split("-"),o=(0,A.Z)(e,3),n=o[0],a=o[1],r=o[2];return"".concat(r,"/").concat(a,"/").concat(n)},saveInforme:function(){var t=this,e={patogeno:this.informe.patogeno,fecha:this.date,localizacion:this.location.address,extension_arboles:this.informe.extension_arboles,extension_pies:this.informe.extension_pies,severidad:this.informe.severidad,observaciones:this.informe.observaciones,contacto:this.informe.contacto};st.create(e).then((function(e){t.informe.id=e.data.id,console.log(e.data)})).catch((function(t){console.log(t)}))}},mounted:function(){this.mostrarPatogenos()}},dt=ut,ft=o(7118),vt=o(4484),pt=o(7336),mt=o(6232),gt=o(1152),bt=o(5285),_t=o(5978),ht=o(4350),xt=o(9330),wt=(0,l.Z)(dt,O,E,!1,null,null,null),yt=wt.exports;u()(wt,{VBtn:C.Z,VCard:f.Z,VCardActions:ft.h7,VContainer:V.Z,VDatePicker:vt.Z,VDialog:pt.Z,VDivider:S.Z,VForm:mt.Z,VIcon:p.Z,VMenu:gt.Z,VSelect:bt.Z,VTextField:_t.Z,VTextarea:ht.Z,VTooltip:xt.Z});var Zt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ayuda"},[o("div",{staticClass:"icono_usuario"},[o("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),o("div",{staticClass:"titulo"},[t._v(" ¡Gracias! ")]),o("div",{staticClass:"cuerpo"},[o("v-card",{staticClass:"mx-auto",attrs:{width:"90%","max-width":"800",elevation:"0"}},[t._v(" Tu informe se ha enviado "),o("b",[t._v("correctamente")]),t._v(". "),o("br"),o("br"),o("b",[t._v("¡Ayúdanos a mejorar!")]),t._v(" Queremos saber tu "),o("b",[t._v("opinión")]),t._v(" sobre nuestra "),o("b",[t._v("aplicacón")]),t._v(". Rellenar este "),o("a",{staticStyle:{color:"#178649"},attrs:{href:"url"}},[t._v("formulario")]),t._v(" solo te llevará unos "),o("b",[t._v("minutos")]),t._v(". ")]),o("br"),o("br"),o("v-btn",{staticClass:"white--text",attrs:{width:"275",height:"50",color:"#ff5d55",to:"/"}},[t._v(" no, gracias ")])],1)])},kt=[],Ct=o(45),Vt=o.n(Ct),St=Vt(),It=(0,l.Z)(St,Zt,kt,!1,null,null,null),Tt=It.exports;u()(It,{VBtn:C.Z,VCard:f.Z,VIcon:p.Z});var Mt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"informe"}},[o("div",{staticClass:"icono_usuario"},[o("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),o("div",{staticClass:"titulo"},[t._v(" Iniciar sesión ")]),o("div",{staticClass:"cuerpo"},[o("v-container",{staticStyle:{width:"95%","max-width":"500px"},attrs:{fluid:""}},[o("v-form",[o("v-text-field",{attrs:{"append-outer-icon":"mdi-account",label:"Teléfono o correo electrónico",color:"#178649"}}),o("v-text-field",{attrs:{"append-outer-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",label:"Contraseña",color:"#178649"},on:{"click:append-outer":function(e){t.show=!t.show}}}),o("v-divider"),o("br"),o("v-btn",{attrs:{dark:"",width:"100%",height:"50",color:"#178649",to:"/"},on:{click:t.saveInforme}},[t._v(" iniciar sesión ")])],1)],1)],1)])},Ot=[],Et={data:function(){return{show:!1,rules:{reglaExtension:function(t){var e=/^[1-9][0-9]?$|^100$/;return e.test(t)||"Introduce un valor numérico entre 1 y 100"}}}},methods:{}},At=Et,Dt=(0,l.Z)(At,Mt,Ot,!1,null,null,null),Ft=Dt.exports;u()(Dt,{VBtn:C.Z,VContainer:V.Z,VDivider:S.Z,VForm:mt.Z,VIcon:p.Z,VTextField:_t.Z});var Pt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ayuda"},[o("div",{staticClass:"icono_usuario"},[o("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),o("div",{staticClass:"titulo"},[t._v(" Ayuda ")]),o("div",{staticStyle:{"padding-bottom":"10px"}},[o("v-card",{staticClass:"mx-auto",attrs:{width:"98%","max-width":"800"}},[o("v-tabs",{attrs:{"background-color":"#178649",grow:"",dark:""},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},t._l(t.tabs,(function(e){return o("v-tab",{key:e},[o("div",{staticClass:"texto_tab"},[t._v(" "+t._s(e)+" ")])])})),1),o("v-tabs-items",{model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[o("v-tab-item",[o("v-card",{attrs:{flat:""}},[o("v-card-text",{staticStyle:{"text-align":"justify"}},[t._v(" Usándola. ")])],1)],1),o("v-tab-item",[o("v-card",{staticClass:"mx-auto",attrs:{width:"98%",flat:""}},[o("v-list",t._l(t.patogenos,(function(e){return o("v-list-group",{key:e,attrs:{color:"#178649","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-list-item-title",{staticStyle:{color:"#178649","font-weight":"bold"}},[o("i",[t._v(t._s(e.nombre_cientifico))]),t._v(" ("+t._s(e.nombre_vulgar)+") ")])]},proxy:!0}],null,!0)},[o("v-card",{attrs:{flat:""}},[o("v-list-item",[o("v-list-item-content",{staticStyle:{"text-align":"justify"}},[o("div",{staticClass:"titulo_patogeno"},[t._v(" ¿A quién ataca? "),o("br"),o("br")]),t._v(" "+t._s(e.parrafo_quien)+" "),o("div",{staticClass:"titulo_patogeno"},[o("br"),t._v(" ¿Cómo identificarlo? "),o("br"),o("br")]),t._v(" "+t._s(e.parrafo_como)+" "),o("div",{staticClass:"titulo_patogeno"},[o("br"),t._v(" ¿Qué daños causa? "),o("br"),o("br")]),t._v(" "+t._s(e.parrafo_que)+" "),o("div",{staticClass:"titulo_patogeno"},[o("br"),t._v(" ¿Cuándo verlo? "),o("br"),o("br")]),t._v(" "+t._s(e.parrafo_cuando)+" "),o("div",{staticClass:"cuerpo"},[o("v-btn",{staticStyle:{"margin-top":"30px"},attrs:{dark:"",width:"100%","max-width":"500px",height:"50",color:"#ff5d55"}},[t._v(" descargar ficha en formato pdf ")])],1)])],1)],1)],1)})),1)],1)],1)],1)],1)],1),o("v-btn",{staticClass:"boton_flotante",attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#ff5d55",to:"/informe"}},[o("v-icon",[t._v("mdi-launch")])],1)],1)},Lt=[],$t={data:function(){return{tabModel:0,tabs:["CÓMO USAR LA APLICACIÓN","PLAGAS Y ENFERMEDADES"],patogenos:[]}},methods:{mostrarPatogenos:function(){var t=this;ct.getAll().then((function(e){t.patogenos=e.data.map(t.getMostrarPatogeno),console.log(e.data)})).catch((function(t){console.log(t)}))},getMostrarPatogeno:function(t){return{nombre_cientifico:t.nombre_cientifico,nombre_vulgar:t.nombre_vulgar,parrafo_quien:t.parrafo_quien,parrafo_como:t.parrafo_como,parrafo_que:t.parrafo_que,parrafo_cuando:t.parrafo_cuando,parrafo_confundir:t.parrafo_confundir}}},mounted:function(){this.mostrarPatogenos()}},jt=$t,Rt=o(6816),zt=o(9443),Ut=o(7620),Bt=o(6147),qt=o(1759),Nt=o(1954),Gt=(0,l.Z)(jt,Pt,Lt,!1,null,null,null),Ht=Gt.exports;u()(Gt,{VBtn:C.Z,VCard:f.Z,VCardText:ft.ZB,VIcon:p.Z,VList:Rt.Z,VListGroup:zt.Z,VListItem:Ut.Z,VListItemContent:Bt.km,VListItemTitle:Bt.V9,VTab:g.Z,VTabItem:qt.Z,VTabs:b.Z,VTabsItems:Nt.Z});var Qt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ayuda"},[o("div",{staticClass:"icono_usuario"},[o("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),o("div",{staticClass:"titulo"},[t._v(" Explorar ")]),o("div",{staticStyle:{"padding-bottom":"15px"}},[o("v-card",{staticClass:"mx-auto",attrs:{width:"98%","max-width":"800"}},[o("v-tabs",{attrs:{"background-color":"#178649",grow:"",dark:""},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[o("v-tab",[o("div",{staticClass:"texto_tab"},[t._v(" HISTORIAL DE INFORMES ")])])],1),o("v-tabs-items",{model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[o("v-tab-item",[o("v-card",{attrs:{flat:""}},[o("v-card-text",[t._v(" Una tabla con el historial de informes. ")])],1)],1)],1)],1)],1),o("v-dialog",{attrs:{width:"800"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"boton_flotante",attrs:{fab:"",dark:"",fixed:"",bottom:"",left:"",color:"#178649"}},"v-btn",a,!1),n),[o("v-icon",[t._v("mdi-map")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",{attrs:{flat:""}},[o("v-btn",{attrs:{fab:"",dark:"",fixed:"",top:"",right:"",small:"",color:"#ff5d55"},on:{click:function(e){t.dialog=!1}}},[o("v-icon",[t._v("mdi-close")])],1),o("div",{staticStyle:{height:"400px"}},[o("InformeMapa")],1)],1)],1),o("v-btn",{staticClass:"boton_flotante",attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#ff5d55",to:"/informe"}},[o("v-icon",[t._v("mdi-launch")])],1)],1)},Yt=[],Xt={components:{InformeMapa:G},data:function(){return{tabModel:0,dialog:!1}},watch:{dialog:function(t){t&&setTimeout((function(){window.dispatchEvent(new Event("resize"))}),100)}}},Jt=Xt,Kt=(0,l.Z)(Jt,Qt,Yt,!1,null,null,null),Wt=Kt.exports;u()(Kt,{VBtn:C.Z,VCard:f.Z,VCardText:ft.ZB,VDialog:pt.Z,VIcon:p.Z,VTab:g.Z,VTabItem:qt.Z,VTabs:b.Z,VTabsItems:Nt.Z}),n.Z.use(y.Z);var te=[{path:"/",name:"inicio",component:M},{path:"/informe",name:"informe",component:yt},{path:"/gracias",name:"gracias",component:Tt},{path:"/login",name:"login",component:Ft},{path:"/ayuda",name:"ayuda",component:Ht},{path:"/explorar",name:"explorar",component:Wt}],ee=new y.Z({mode:"history",routes:te}),oe=ee;n.Z.config.productionTip=!1,new n.Z({vuetify:w,router:oe,render:function(t){return t(h)}}).$mount("#app")},6949:function(t,e,o){"use strict";t.exports=o.p+"img/logo.5d26a052.png"}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,a,r){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],r=t[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(s=!1,r<i&&(i=r));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,a,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var u=l(o)}for(e&&e(n);c<i.length;c++)r=i[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},n=self["webpackChunktest_apppopuli_es"]=self["webpackChunktest_apppopuli_es"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(1560)}));n=o.O(n)})();
//# sourceMappingURL=app-legacy.957faea1.js.map