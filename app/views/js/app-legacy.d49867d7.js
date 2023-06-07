(function(){"use strict";var t={7415:function(t,e,o){o(6992),o(8674),o(9601),o(7727);var n=o(144),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-main",[o("v-footer",{attrs:{app:"",fixed:"",padless:"",color:"white"}},[o("v-card",{attrs:{color:"#178649",width:"100%",height:"100%"}},[o("v-tabs",{attrs:{"background-color":"#178649",centered:"","fixed-tabs":"",dark:"","icons-and-text":"",optional:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.icons,(function(e){return o("v-tab",{key:e,staticStyle:{"text-decoration":"none"},attrs:{to:e.ruta}},[o("div",{staticClass:"texto_iconos"},[t._v(" "+t._s(e.nombre)+" ")]),o("v-icon",[t._v(" "+t._s(e.icono)+" ")])],1)})),1)],1)],1),o("router-view")],1)],1)},r=[],i={data:function(){return{activeTab:1,icons:[{nombre:"AYUDA",icono:"mdi-help",ruta:"/ayuda"},{nombre:"INICIO",icono:"mdi-home",ruta:"/"},{nombre:"EXPLORAR",icono:"mdi-map-marker",ruta:"/explorar"}]}}},s=i,l=o(1001),c=o(3453),u=o.n(c),d=o(7524),f=o(2371),p=o(1966),v=o(6428),m=o(7877),g=o(4227),h=o(7090),b=(0,l.Z)(s,a,r,!1,null,null,null),_=b.exports;u()(b,{VApp:d.Z,VCard:f.Z,VFooter:p.Z,VIcon:v.Z,VMain:m.Z,VTab:g.Z,VTabs:h.Z});var x=o(9132);n.Z.use(x.Z);var w=new x.Z({}),y=o(8345),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("IconoUsuario"),n("div",{staticClass:"titulo"},[n("img",{attrs:{src:o(6949),width:"180",height:"144"}})]),n("div",{staticClass:"cuerpo"},[n("v-container",{staticStyle:{width:"95%","max-width":"500px"},attrs:{fluid:""}},[n("v-btn",{staticStyle:{"text-decoration":"none"},attrs:{dark:"",width:"100%",height:"50",color:"#ff5d55",to:"/informe"}},[t._v(" enviar informe ")]),n("v-divider"),t.currentUser?n("v-btn",{attrs:{dark:"",width:"100%",height:"50",color:"#178649"},on:{click:t.logout}},[t._v(" cerrar sesión ")]):n("v-btn",{staticStyle:{"text-decoration":"none"},attrs:{dark:"",width:"100%",height:"50",color:"#178649",to:"/login"}},[t._v(" iniciar sesión ")])],1)],1)],1)},Z=[],C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"icono_usuario"},[o("v-icon",{attrs:{disabled:!t.currentUser,large:"",color:"#178649"}},[t._v(" mdi-account-circle ")]),t.currentUser?o("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[o("lab",t._g(t._b({attrs:{color:"primary",dark:""}},"lab",a,!1),n),[t._v(" "+t._s(t.currentUser.contact)+" ")])]}}],null,!1,2053519833)},[o("v-list",[o("v-list-item",{attrs:{link:""}},[o("v-list-item-title",{on:{click:t.logout}},[t._v(" Cerrar sesión ")])],1)],1)],1):t._e()],1)},S=[],I={computed:{currentUser:function(){return this.$store.state.auth.user}},methods:{logout:function(){this.$store.dispatch("auth/logout")}}},V=I,T=o(6816),O=o(7620),L=o(6147),E=o(1152),P=(0,l.Z)(V,C,S,!1,null,null,null),M=P.exports;u()(P,{VIcon:v.Z,VList:T.Z,VListItem:O.Z,VListItemTitle:L.V9,VMenu:E.Z});var $={components:{IconoUsuario:M},computed:{currentUser:function(){return this.$store.state.auth.user}},methods:{logout:function(){this.$store.dispatch("auth/logout")}}},U=$,A=o(680),D=o(2255),F=o(1418),R=(0,l.Z)(U,k,Z,!1,null,null,null),j=R.exports;u()(R,{VApp:d.Z,VBtn:A.Z,VContainer:D.Z,VDivider:F.Z});var z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"informe"}},[o("IconoUsuario"),o("div",{staticClass:"titulo"},[t._v(" Informe ")]),o("div",{staticClass:"cuerpo"},[o("v-container",{staticStyle:{width:"95%","max-width":"500px"},attrs:{fluid:""}},[o("div",{staticClass:"asterisco"},[t._v(" Los campos acompañados de un asterisco (*) son "),o("lab",{staticStyle:{color:"#ff5d55"}},[t._v("obligatorios")])],1),o("br"),o("v-form",[o("v-select",{attrs:{clearable:"",label:"Plaga/Enfermedad (si se conoce)",color:"#178649",items:t.patogenos,"item-value":"nombre_cientifico","item-text":"nombre_cientifico"},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[o("i",[t._v(t._s(n.nombre_cientifico))]),t._v("   ("+t._s(n.nombre_vulgar)+") ")]}},{key:"selection",fn:function(e){var n=e.item;return[o("i",[t._v(t._s(n.nombre_cientifico))]),t._v("   ("+t._s(n.nombre_vulgar)+") ")]}}]),model:{value:t.informe.patogeno,callback:function(e){t.$set(t.informe,"patogeno",e)},expression:"informe.patogeno"}},[o("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("router-link",{attrs:{to:"/ayuda"}},[o("v-icon",t._g({attrs:{size:"20",color:"#178649"}},n),[t._v(" mdi-help ")])],1)]}}])},[o("span",[t._v(" Encontrarás más información acerca de plagas y enfermedades que afectan al chopo en el apartado de ayuda. ")])])],1)],1),o("upload-files"),o("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"Fecha (*)",color:"#178649",hint:"DD/MM/AA",readonly:""},model:{value:t.computedDateFormatted,callback:function(e){t.computedDateFormatted=e},expression:"computedDateFormatted"}},"v-text-field",a,!1),n))]}}]),model:{value:t.menuDate,callback:function(e){t.menuDate=e},expression:"menuDate"}},[o("v-date-picker",{attrs:{"no-title":"","first-day-of-week":1,locale:"es-es",color:"#178649"},on:{input:function(e){t.menuDate=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),o("v-dialog",{attrs:{width:"800"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{required:"",rules:t.reglaObligatorio,value:t.location.address,label:"Localización (*)",color:"#178649",readonly:""}},"v-text-field",a,!1),n))]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-btn",{attrs:{fab:"",dark:"",fixed:"",top:"",right:"","x-small":"",color:"#ff5d55"},on:{click:function(e){t.dialog=!1}}},[o("v-icon",[t._v("mdi-close")])],1),o("div",{staticStyle:{height:"400px"}},[o("InformeMapa",{model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1),o("v-card-actions",{staticClass:"justify-center"},[o("v-btn",{attrs:{dark:"",width:"100%","max-width":"500px",height:"50",color:"#ff5d55"},on:{click:function(e){t.dialog=!1}}},[t._v(" aceptar ")])],1)],1)],1),o("v-select",{attrs:{required:"",rules:t.reglaObligatorio,label:"Total de árboles dañados (*)",color:"#178649",suffix:"árbol/es",items:t.extension},model:{value:t.informe.extension_arboles,callback:function(e){t.$set(t.informe,"extension_arboles",e)},expression:"informe.extension_arboles"}},[o("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{size:"20",color:"#178649"}},n),[t._v(" mdi-help ")])]}}])},[o("span",[t._v("si me disculpa")])])],1),o("v-text-field",{attrs:{required:"",label:"Porcentaje de pies afectados (*)",color:"#178649",suffix:"%",rules:t.reglasExtension},model:{value:t.informe.extension_pies,callback:function(e){t.$set(t.informe,"extension_pies",e)},expression:"informe.extension_pies"}},[o("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{size:"20",color:"#178649"}},n),[t._v(" mdi-help ")])]}}])},[o("span",[t._v("si me disculpa")])])],1),o("v-select",{attrs:{label:"Severidad del daño",color:"#178649",suffix:"%",items:t.severidadOpciones},model:{value:t.informe.severidad,callback:function(e){t.$set(t.informe,"severidad",e)},expression:"informe.severidad"}},[o("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{size:"20",color:"#178649"}},n),[t._v(" mdi-help ")])]}}])},[o("span",[t._v("si me disculpa")])])],1),o("v-textarea",{attrs:{color:"#178649","auto-grow":""},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(" Observaciones ")]},proxy:!0}]),model:{value:t.informe.observaciones,callback:function(e){t.$set(t.informe,"observaciones",e)},expression:"informe.observaciones"}}),o("v-text-field",{attrs:{required:"",rules:t.reglaObligatorio,label:"Teléfono o correo electrónico (*)",color:"#178649"},model:{value:t.informe.contacto,callback:function(e){t.$set(t.informe,"contacto",e)},expression:"informe.contacto"}}),o("v-divider"),o("v-btn",{staticClass:"white--text",attrs:{width:"100%",height:"50",color:"#ff5d55",disabled:!t.valid},on:{click:t.validar}},[t._v(" enviar ")])],1)],1)],1)],1)},q=[],B=o(5200),N=(o(4916),o(7601),o(1249),o(3123),o(2222),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("l-map",{ref:"map",staticStyle:{"z-index":"0"},attrs:{zoom:"14",center:[t.position.lat||t.userLocation.lat||t.defaultLocation.lat,t.position.lng||t.userLocation.lng||t.defaultLocation.lng]},on:{click:t.onMapClick}},[o("l-geosearch",{attrs:{options:t.geoSearchOptions}}),o("l-tile-layer",{attrs:{url:t.tileProvider.url,attribution:t.tileProvider.attribution}}),t.position.lat&&t.position.lng?o("l-marker",{attrs:{visible:"",draggable:"",icon:t.icon,"lat-lng":t.position},on:{"update:latLng":function(e){t.position=e},"update:lat-lng":function(e){t.position=e},dragstart:function(e){t.dragging=!0},dragend:function(e){t.dragging=!1}}}):t._e()],1)}),G=[],H=o(6198),Y=(o(5666),o(1539),o(458)),J=o(5843),Q=o(1739),X=o(5637),K=o(8993),W=o(9344),tt={components:{LMap:Y.Z,LTileLayer:J.Z,LMarker:Q.Z,LGeosearch:K.Z},props:{value:{type:Object,required:!0},defaultLocation:{type:Object,default:function(){return{lat:42.55057050005772,lng:-6.598203246805054}}}},data:function(){return{loading:!1,geoSearchOptions:{provider:new X.Zm,showMarker:!1,autoClose:!0},userLocation:{},icon:(0,W.icon)({iconUrl:o(3994),shadowUrl:o(5275)}),position:{},address:"",dragging:!1,tileProvider:{attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}}},mounted:function(){this.getUserPosition(),this.$refs.map.mapObject.on("geosearch/showlocation",this.onSearch)},watch:{position:{deep:!0,handler:function(t){var e=this;return(0,H.Z)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,e.getAddress();case 2:e.address=o.sent,e.$emit("input",{position:t,address:e.address,lat:e.position.lat,lng:e.position.lng});case 4:case"end":return o.stop()}}),o)})))()}}},methods:{getUserPosition:function(){var t=this;return(0,H.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){t.userLocation={lat:e.coords.latitude,lng:e.coords.longitude}}));case 1:case"end":return e.stop()}}),e)})))()},getAddress:function(){var t=this;return(0,H.Z)(regeneratorRuntime.mark((function e(){var o,n,a,r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,o="Unresolved address",e.prev=2,n=t.position,a=n.lat,r=n.lng,e.next=6,fetch("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=".concat(a,"&lon=").concat(r));case 6:if(i=e.sent,200!==i.status){e.next=12;break}return e.next=10,i.json();case 10:s=e.sent,o=s.display_name;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](2),console.error("Reverse Geocode Error->",e.t0);case 17:return t.loading=!1,e.abrupt("return",o);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})))()},onMapClick:function(t){this.position=t.latlng},onSearch:function(t){var e=t.location;this.position={lat:e.y,lng:e.x}}}},et=tt,ot=(0,l.Z)(et,N,G,!1,null,null,null),nt=ot.exports,at=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.progressInfos?o("div",t._l(t.progressInfos,(function(e,n){return o("div",{key:n,staticClass:"mb-2"},[o("span",[t._v(t._s(e.fileName))]),o("div",{staticClass:"progress"},[o("div",{staticClass:"progress-bar progress-bar-info",staticStyle:{"background-color":"#178649"},style:{width:e.percentage+"%"},attrs:{role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(e.percentage)+"% ")])])])})),0):t._e(),o("label",{staticClass:"boton_examinar btn"},[o("v-icon",{attrs:{color:"#178649",size:"17"}},[t._v("mdi-camera")]),t._v(" SELECCIONAR ARCHIVOS "),o("input",{staticStyle:{display:"none"},attrs:{type:"file",multiple:""},on:{change:t.selectFile}})],1),o("button",{staticClass:"boton_subir btn",attrs:{disabled:!t.selectedFiles},on:{click:t.uploadFiles}},[t._v(" SUBIR ARCHIVOS ")]),o("br"),o("br"),t.message?o("div",{staticClass:"alert alert-light",attrs:{role:"alert"}},[o("ul",t._l(t.message.split("\n"),(function(e,n){return o("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]):t._e()])},rt=[],it=(o(8309),o(6133)),st=o(2751),lt=o(9669),ct=o.n(lt),ut=ct().create({baseURL:"https://test.apppopuli.es/api",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, PATCH, OPTIONS","Content-type":"application/json"}}),dt=function(){function t(){(0,it.Z)(this,t)}return(0,st.Z)(t,[{key:"upload",value:function(t,e){var o=new FormData;return o.append("file",t),ut.post("/upload",o,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:e})}},{key:"download",value:function(t){return ut.get("/files/".concat(t,".pdf"),{headers:{"Content-Type":"multipart/form-data"},responseType:"blob"})}},{key:"show",value:function(t){return ut.get("/images/".concat(t,".jpg"),{headers:{"Content-Type":"image/jpg"},responseType:"blob"})}},{key:"getFiles",value:function(){return ut.get("/files")}}]),t}(),ft=new dt,pt={name:"upload-files",data:function(){return{selectedFiles:void 0,progressInfos:[],message:"",fileInfos:[]}},methods:{selectFile:function(t){this.progressInfos=[],this.selectedFiles=t.target.files},upload:function(t,e){var o=this;this.progressInfos[t]={percentage:0,fileName:e.name},ft.upload(e,(function(e){o.progressInfos[t].percentage=Math.round(100*e.loaded/e.total)})).then((function(t){var e=o.message?o.message+"\n":"";return o.message=e+t.data.message,ft.getFiles()})).then((function(t){o.fileInfos=t.data})).catch((function(){o.progressInfos[t].percentage=0,o.message="El archivo no se ha podido enviar correctamente: "+e.name}))},uploadFiles:function(){this.message="";for(var t=0;t<this.selectedFiles.length;t++)this.upload(t,this.selectedFiles[t])}},mounted:function(){var t=this;ft.getFiles().then((function(e){t.fileInfos=e.data}))}},vt=pt,mt=(0,l.Z)(vt,at,rt,!1,null,null,null),gt=mt.exports;u()(mt,{VIcon:v.Z});var ht=function(){function t(){(0,it.Z)(this,t)}return(0,st.Z)(t,[{key:"create",value:function(t){return ut.post("/informes",t)}},{key:"getAll",value:function(){return ut.get("/informes")}}]),t}(),bt=new ht,_t=function(){function t(){(0,it.Z)(this,t)}return(0,st.Z)(t,[{key:"getAll",value:function(){return ut.get("/patogenos")}},{key:"get",value:function(t){return ut.get("/patogenos/".concat(t))}}]),t}(),xt=new _t,wt={components:{IconoUsuario:M,InformeMapa:nt,UploadFiles:gt},data:function(t){return{informe:{id:null,patogeno:"",extension_arboles:"",extension_pies:"",severidad:"",observaciones:"",contacto:""},valid:!1,patogenos:[],selectedFile:null,date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateFormatted:t.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),menuDate:!1,dialog:!1,location:{},extension:["1","2-10","10-100","Más de 100"],severidadOpciones:["0-25","25-75","Más del 75"],reglaObligatorio:[function(t){return!!t||"Este campo es obligatorio"}],reglasExtension:[function(t){return!!t||"Este campo es obligatorio"},function(t){return/^[1-9][0-9]?$|^100$/.test(t)||"Introduce un valor numérico entre 1 y 100"}]}},watch:{dialog:function(t){t&&setTimeout((function(){window.dispatchEvent(new Event("resize"))}),100)}},computed:{currentUser:function(){return this.$store.state.auth.user},computedDateFormatted:function(){return this.formatDate(this.date)}},methods:{mostrarPatogenos:function(){var t=this;xt.getAll().then((function(e){t.patogenos=e.data.map(t.getMostrarPatogeno),console.log(e.data)})).catch((function(t){console.log(t)}))},getMostrarPatogeno:function(t){return{nombre_cientifico:t.nombre_cientifico,nombre_vulgar:t.nombre_vulgar}},formatDate:function(t){if(!t)return null;var e=t.split("-"),o=(0,B.Z)(e,3),n=o[0],a=o[1],r=o[2];return"".concat(r,"/").concat(a,"/").concat(n)},guardarInforme:function(){var t=this,e={patogeno:this.informe.patogeno,fecha:this.date,localizacion:this.location.address,lat:this.location.lat,lng:this.location.lng,extension_arboles:this.informe.extension_arboles,extension_pies:this.informe.extension_pies,severidad:this.informe.severidad,observaciones:this.informe.observaciones,contacto:this.informe.contacto};bt.create(e).then((function(e){t.informe.id=e.data.id,console.log(e.data),t.$router.push("/gracias")})).catch((function(t){console.log(t)}))},validar:function(){this.$refs.form.validate(),this.guardarInforme()}},mounted:function(){this.mostrarPatogenos()}},yt=wt,kt=o(7118),Zt=o(4484),Ct=o(7336),St=o(6232),It=o(7032),Vt=o(314),Tt=o(4350),Ot=o(9330),Lt=(0,l.Z)(yt,z,q,!1,null,null,null),Et=Lt.exports;u()(Lt,{VBtn:A.Z,VCard:f.Z,VCardActions:kt.h7,VContainer:D.Z,VDatePicker:Zt.Z,VDialog:Ct.Z,VDivider:F.Z,VForm:St.Z,VIcon:v.Z,VMenu:E.Z,VSelect:It.Z,VTextField:Vt.Z,VTextarea:Tt.Z,VTooltip:Ot.Z});var Pt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ayuda"},[o("IconoUsuario"),o("div",{staticClass:"titulo"},[t._v(" ¡Gracias! ")]),o("div",{staticClass:"cuerpo"},[o("v-card",{staticClass:"mx-auto",attrs:{width:"90%","max-width":"800",elevation:"0"}},[t._v(" Tu informe se ha enviado correctamente. "),o("br"),o("br"),t._v(" ¡Ayúdanos a mejorar! Queremos saber tu opinión sobre nuestra aplicacón. Rellenar este "),o("a",{staticStyle:{"font-weight":"bold",color:"#ff5d55","text-decoration":"none"},attrs:{href:"url"}},[t._v("formulario")]),t._v(" solo te llevará unos minutos. ")]),o("br"),o("br"),o("v-btn",{staticClass:"white--text",staticStyle:{"text-decoration":"none"},attrs:{width:"275",height:"50",color:"#178649",to:"/"}},[t._v(" no, gracias ")])],1)],1)},Mt=[],$t={components:{IconoUsuario:M}},Ut=$t,At=(0,l.Z)(Ut,Pt,Mt,!1,null,null,null),Dt=At.exports;u()(At,{VBtn:A.Z,VCard:f.Z});var Ft=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"informe"}},[o("IconoUsuario"),o("div",{staticClass:"titulo"},[t._v(" Iniciar sesión ")]),o("div",{staticClass:"cuerpo"},[o("v-container",{staticStyle:{width:"95%","max-width":"500px"},attrs:{fluid:""}},[o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-text-field",{attrs:{required:"",rules:t.reglaObligatorio,"append-outer-icon":"mdi-account",label:"Teléfono o correo electrónico",color:"#178649"},model:{value:t.user.contact,callback:function(e){t.$set(t.user,"contact",e)},expression:"user.contact"}}),o("v-text-field",{attrs:{required:"",rules:t.reglaObligatorio,"append-outer-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",label:"Contraseña",color:"#178649"},on:{"click:append-outer":function(e){t.show=!t.show}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),o("v-divider"),o("v-btn",{staticClass:"white--text",attrs:{width:"100%",height:"50",color:"#178649",disabled:!t.valid},on:{click:t.login}},[t._v(" iniciar sesión ")]),o("br"),o("br"),t.message?o("div",{staticClass:"alert alert-danger"},[t._v(" "+t._s(t.message)+" ")]):t._e()],1),o("br"),o("div",{staticClass:"registro"},[t._v(" ¿No tienes cuenta? "),o("router-link",{staticStyle:{"font-weight":"bold",color:"#ff5d55","text-decoration":"none"},attrs:{to:"/register"}},[t._v(" Regístrate ")])],1)],1)],1)],1)},Rt=[],jt=(o(9714),(0,st.Z)((function t(e,o){(0,it.Z)(this,t),this.contact=e,this.password=o}))),zt={components:{IconoUsuario:M},data:function(){return{valid:!1,show:!1,reglaObligatorio:[function(t){return!!t||"Este campo es obligatorio"}],user:new jt("",""),message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},methods:{login:function(){var t=this;this.$refs.form.validate(),this.user.contact&&this.user.password&&this.$store.dispatch("auth/login",this.user).then((function(){t.$router.push("/")}),(function(e){t.message=e.response&&e.response.data||e.message||e.toString()}))}},mounted:function(){this.loggedIn&&this.$router.push("/")}},qt=zt,Bt=(0,l.Z)(qt,Ft,Rt,!1,null,null,null),Nt=Bt.exports;u()(Bt,{VBtn:A.Z,VContainer:D.Z,VDivider:F.Z,VForm:St.Z,VTextField:Vt.Z});var Gt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"informe"}},[o("IconoUsuario"),o("div",{staticClass:"titulo"},[t._v(" Registrarse ")]),o("div",{staticClass:"cuerpo"},[o("v-container",{staticStyle:{width:"95%","max-width":"500px"},attrs:{fluid:""}},[o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-text-field",{attrs:{required:"",rules:t.reglaObligatorio,"append-outer-icon":"mdi-account",label:"Teléfono o correo electrónico",color:"#178649"},model:{value:t.user.contact,callback:function(e){t.$set(t.user,"contact",e)},expression:"user.contact"}}),o("v-text-field",{attrs:{required:"",rules:t.reglaObligatorio,"append-outer-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",label:"Contraseña",color:"#178649"},on:{"click:append-outer":function(e){t.show=!t.show}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),o("v-divider"),o("v-btn",{staticClass:"white--text",attrs:{width:"100%",height:"50",color:"#178649",disabled:!t.valid},on:{click:t.register}},[t._v(" registrarse ")]),o("br"),o("br"),t.message?o("div",{staticClass:"alert alert-danger"},[t._v(" "+t._s(t.message)+" ")]):t._e()],1)],1)],1)],1)},Ht=[],Yt={components:{IconoUsuario:M},data:function(){return{valid:!1,show:!1,reglaObligatorio:[function(t){return!!t||"Este campo es obligatorio"}],user:new jt("",""),message:""}},computed:{loggedIn:function(){return!1}},methods:{register:function(){var t=this;this.$refs.form.validate(),this.user.contact&&this.user.password&&this.$store.dispatch("auth/register",this.user).then((function(){t.$store.dispatch("auth/login",t.user).then((function(){t.$router.push("/")}))}),(function(e){t.message=e.response&&e.response.data||e.message||e.toString()}))}},mounted:function(){this.loggedIn&&this.$router.push("/")}},Jt=Yt,Qt=(0,l.Z)(Jt,Gt,Ht,!1,null,null,null),Xt=Qt.exports;u()(Qt,{VBtn:A.Z,VContainer:D.Z,VDivider:F.Z,VForm:St.Z,VTextField:Vt.Z});var Kt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ayuda"},[o("IconoUsuario"),o("div",{staticClass:"titulo"},[t._v(" Ayuda ")]),o("div",{staticStyle:{"padding-bottom":"10px"}},[o("v-card",{staticClass:"mx-auto",attrs:{width:"98%","max-width":"800"}},[o("v-tabs",{attrs:{"background-color":"#178649",grow:"",dark:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tabs,(function(e){return o("v-tab",{key:e},[o("div",{staticClass:"texto_tab"},[t._v(" "+t._s(e)+" ")])])})),1),o("v-tabs-items",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[o("v-tab-item",[o("v-card",{attrs:{flat:""}},[o("v-card-text",{staticStyle:{"text-align":"justify"}},[t._v(" Usándola. ")])],1)],1),o("v-tab-item",[o("v-card",{staticClass:"mx-auto",attrs:{width:"98%",flat:""}},[o("v-card",{staticClass:"mx-auto",staticStyle:{"padding-top":"10px"},attrs:{width:"90%",flat:""}},[o("v-select",{attrs:{clearable:"",label:"Filtrar por síntomas",color:"#178649",items:t.sintomas,"item-text":"descripcion","item-value":"id"},on:{input:t.filtrarPatogenos},model:{value:t.selectedSintoma,callback:function(e){t.selectedSintoma=e},expression:"selectedSintoma"}})],1),o("v-list",t._l(t.patogenos,(function(e){return o("v-list-group",{key:e,attrs:{color:"#178649","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-list-item-title",{staticStyle:{color:"#178649","font-weight":"bold"}},[o("i",[t._v(t._s(e.nombre_cientifico))]),t._v(" ("+t._s(e.nombre_vulgar)+") ")])]},proxy:!0}],null,!0)},[o("v-card",{attrs:{flat:""}},[o("v-list-item",[o("v-list-item-content",{staticStyle:{"text-align":"justify"}},[o("div",{staticClass:"titulo_patogeno"},[t._v(" ¿A quién ataca? "),o("br"),o("br")]),t._v(" "+t._s(e.parrafo_quien)+" "),o("div",{staticClass:"titulo_patogeno"},[o("br"),t._v(" ¿Cómo identificarlo? "),o("br"),o("br")]),t._v(" "+t._s(e.parrafo_como)+" "),o("div",{staticClass:"cuerpo"},[o("v-btn",{staticStyle:{"margin-top":"30px"},attrs:{dark:"",width:"100%","max-width":"500px",height:"50",color:"#178649"},on:{click:function(o){return t.show(e.id)}}},[t._v(" figura 1 ")])],1),o("div",{staticClass:"titulo_patogeno"},[o("br"),t._v(" ¿Qué daños causa? "),o("br"),o("br")]),t._v(" "+t._s(e.parrafo_que)+" "),o("div",{staticClass:"titulo_patogeno"},[o("br"),t._v(" ¿Cuándo verlo? "),o("br"),o("br")]),t._v(" "+t._s(e.parrafo_cuando)+" "),o("div",{staticClass:"cuerpo"},[o("v-btn",{staticStyle:{"margin-top":"30px"},attrs:{dark:"",width:"100%","max-width":"500px",height:"50",color:"#ff5d55"},on:{click:function(o){return t.download(e.id)}}},[t._v(" descargar ficha en formato pdf ")])],1)])],1)],1)],1)})),1)],1)],1)],1)],1)],1),o("v-btn",{staticClass:"boton_flotante",attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#ff5d55",to:"/informe"}},[o("v-icon",[t._v("mdi-launch")])],1)],1)},Wt=[],te=(o(8783),o(3948),o(285),o(1637),function(){function t(){(0,it.Z)(this,t)}return(0,st.Z)(t,[{key:"getAll",value:function(){return ut.get("/sintomas")}}]),t}()),ee=new te,oe={components:{IconoUsuario:M},data:function(){return{activeTab:0,tabs:["CÓMO USAR LA APLICACIÓN","PLAGAS Y ENFERMEDADES"],patogenos:[],sintomas:[]}},methods:{mostrarPatogenos:function(){var t=this;xt.getAll().then((function(e){t.patogenos=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))},filtrarPatogenos:function(){var t=this;null==this.selectedSintoma?this.mostrarPatogenos():xt.get(this.selectedSintoma).then((function(e){t.patogenos=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))},getMostrarPatogeno:function(t){return{id:t.id,nombre_cientifico:t.nombre_cientifico,nombre_vulgar:t.nombre_vulgar,parrafo_quien:t.parrafo_quien,parrafo_como:t.parrafo_como,parrafo_que:t.parrafo_que,parrafo_cuando:t.parrafo_cuando,parrafo_confundir:t.parrafo_confundir}},mostrarSintomas:function(){var t=this;ee.getAll().then((function(e){t.sintomas=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))},getMostrarSintoma:function(t){return{id:t.id,descripcion:t.descripcion}},download:function(t){ft.download(t).then((function(e){var o=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=o,n.setAttribute("download","".concat(t,".pdf")),document.body.appendChild(n),n.click()})).catch((function(t){console.log(t)}))},show:function(t){ft.show(t).then((function(e){var o=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=o,n.setAttribute("display","".concat(t,".jpg")),document.body.appendChild(n),n.click()})).catch((function(t){console.log(t)}))}},mounted:function(){this.mostrarPatogenos(),this.mostrarSintomas()}},ne=oe,ae=o(9443),re=o(1759),ie=o(1954),se=(0,l.Z)(ne,Kt,Wt,!1,null,null,null),le=se.exports;u()(se,{VBtn:A.Z,VCard:f.Z,VCardText:kt.ZB,VIcon:v.Z,VList:T.Z,VListGroup:ae.Z,VListItem:O.Z,VListItemContent:L.km,VListItemTitle:L.V9,VSelect:It.Z,VTab:g.Z,VTabItem:re.Z,VTabs:h.Z,VTabsItems:ie.Z});var ce=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ayuda"},[o("IconoUsuario"),o("div",{staticClass:"titulo"},[t._v(" Explorar ")]),o("div",{staticStyle:{"padding-bottom":"15px"}},[o("v-card",{staticClass:"mx-auto",attrs:{width:"98%","max-width":"800"}},[o("v-tabs",{attrs:{"background-color":"#178649",grow:"",dark:""},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[o("v-tab",[o("div",{staticClass:"texto_tab"},[t._v(" HISTORIAL DE INFORMES ")])])],1),o("v-tabs-items",{model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[o("v-tab-item",[o("v-card",{attrs:{flat:""}},[o("v-card-text",[o("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.headers,items:t.informes,page:t.page,"items-per-page":10,"header-props":t.headerProps,"hide-default-footer":""},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}}}),o("div",{staticClass:"text-center pt-2"},[o("v-pagination",{attrs:{color:"#178649",length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1)],1)],1)],1),o("v-dialog",{attrs:{width:"800"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"boton_flotante",attrs:{fab:"",dark:"",fixed:"",bottom:"",left:"",color:"#178649"}},"v-btn",a,!1),n),[o("v-icon",[t._v("mdi-map")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",{attrs:{flat:""}},[o("v-btn",{attrs:{fab:"",dark:"",fixed:"",top:"",right:"","x-small":"",color:"#ff5d55"},on:{click:function(e){t.dialog=!1}}},[o("v-icon",[t._v("mdi-close")])],1),o("div",{staticStyle:{height:"400px"}},[o("ExplorarMapa")],1)],1)],1),o("v-btn",{staticClass:"boton_flotante",attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#ff5d55",to:"/informe"}},[o("v-icon",[t._v("mdi-launch")])],1)],1)},ue=[],de=(o(7042),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("l-map",{ref:"map",staticStyle:{"z-index":"0"},attrs:{zoom:"10",center:[t.position.lat||t.userLocation.lat||t.defaultLocation.lat,t.position.lng||t.userLocation.lng||t.defaultLocation.lng]}},[o("l-geosearch",{attrs:{options:t.geoSearchOptions}}),o("l-tile-layer",{attrs:{url:t.tileProvider.url,attribution:t.tileProvider.attribution}}),t._l(t.informes,(function(e){return o("l-marker",{key:e,attrs:{visible:"",icon:t.icon,"lat-lng":e.position}},[o("l-tooltip",{attrs:{content:e.patogeno}})],1)}))],2)}),fe=[],pe=o(7737),ve={components:{LMap:Y.Z,LTileLayer:J.Z,LMarker:Q.Z,LTooltip:pe.Z,LGeosearch:K.Z},props:{value:{type:Object,required:!0},defaultLocation:{type:Object,default:function(){return{lat:42.55057050005772,lng:-6.598203246805054}}}},data:function(){return{loading:!1,geoSearchOptions:{provider:new X.Zm,showMarker:!1,autoClose:!0},userLocation:{},icon:(0,W.icon)({iconUrl:o(3994),shadowUrl:o(5275)}),position:{},address:"",tileProvider:{attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},informes:[]}},mounted:function(){this.getUserPosition(),this.$refs.map.mapObject.on("geosearch/showlocation",this.onSearch),this.mostrarInformes()},watch:{position:{deep:!0,handler:function(t){var e=this;return(0,H.Z)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,e.getAddress();case 2:e.address=o.sent,e.$emit("input",{position:t,address:e.address});case 4:case"end":return o.stop()}}),o)})))()}}},methods:{getUserPosition:function(){var t=this;return(0,H.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){t.userLocation={lat:e.coords.latitude,lng:e.coords.longitude}}));case 1:case"end":return e.stop()}}),e)})))()},getAddress:function(){var t=this;return(0,H.Z)(regeneratorRuntime.mark((function e(){var o,n,a,r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,o="Unresolved address",e.prev=2,n=t.position,a=n.lat,r=n.lng,e.next=6,fetch("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=".concat(a,"&lon=").concat(r));case 6:if(i=e.sent,200!==i.status){e.next=12;break}return e.next=10,i.json();case 10:s=e.sent,o=s.display_name;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](2),console.error("Reverse Geocode Error->",e.t0);case 17:return t.loading=!1,e.abrupt("return",o);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})))()},onMapClick:function(t){this.position=t.latlng},onSearch:function(t){var e=t.location;this.position={lat:e.y,lng:e.x}},mostrarInformes:function(){var t=this;bt.getAll().then((function(e){t.informes=e.data.map(t.getMostrarInforme),console.log(e.data)})).catch((function(t){console.log(t)}))},getMostrarInforme:function(t){return{patogeno:t.patogeno,position:{lat:t.lat,lng:t.lng}}}}},me=ve,ge=(0,l.Z)(me,de,fe,!1,null,null,null),he=ge.exports,be={components:{IconoUsuario:M,ExplorarMapa:he},data:function(){return{tabModel:0,dialog:!1,informes:[],headers:[{text:"Plaga o Enfermedad",value:"patogeno",sortable:!0},{text:"Fecha",value:"fecha",sortable:!0},{text:"Total de árboles dañados",value:"extension_arboles",sortable:!1},{text:"Severidad del daño",value:"severidad",sortable:!0},{text:"Localización",value:"localizacion",sortable:!0}],page:1,pageCount:0,headerProps:{sortByText:"Ordenar por"}}},watch:{dialog:function(t){t&&setTimeout((function(){window.dispatchEvent(new Event("resize"))}),100)}},methods:{mostrarInformes:function(){var t=this;bt.getAll().then((function(e){t.informes=e.data.map(t.getMostrarInforme),console.log(e.data)})).catch((function(t){console.log(t)}))},getMostrarInforme:function(t){return{patogeno:t.patogeno,fecha:this.formatDate(t.fecha),extension_arboles:t.extension_arboles,severidad:t.severidad,localizacion:t.localizacion}},formatDate:function(t){if(!t)return null;var e=new Date(t),o=("0"+e.getDate()).slice(-2)+"/"+("0"+(e.getMonth()+1)).slice(-2)+"/"+e.getFullYear();return o}},mounted:function(){this.mostrarInformes()}},_e=be,xe=o(4998),we=o(6325),ye=(0,l.Z)(_e,ce,ue,!1,null,null,null),ke=ye.exports;u()(ye,{VBtn:A.Z,VCard:f.Z,VCardText:kt.ZB,VDataTable:xe.Z,VDialog:Ct.Z,VIcon:v.Z,VPagination:we.Z,VTab:g.Z,VTabItem:re.Z,VTabs:h.Z,VTabsItems:ie.Z}),n.Z.use(y.Z);var Ze=[{path:"/",name:"inicio",component:j},{path:"/informe",name:"informe",component:Et},{path:"/gracias",name:"gracias",component:Dt},{path:"/login",name:"login",component:Nt},{path:"/register",name:"register",component:Xt},{path:"/ayuda",name:"ayuda",component:le},{path:"/explorar",name:"explorar",component:ke}],Ce=new y.Z({routes:Ze,scrollBehavior:function(){document.getElementById("app").scrollIntoView({behavior:"smooth"})}}),Se=Ce,Ie=o(629),Ve=(o(8862),"https://test.apppopuli.es/api/users/"),Te=function(){function t(){(0,it.Z)(this,t)}return(0,st.Z)(t,[{key:"login",value:function(t){return ct().post(Ve+"login",{contact:t.contact,password:t.password}).then((function(t){return t.data.accessToken&&localStorage.setItem("user",JSON.stringify(t.data)),t.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(t){return ct().post(Ve+"create",{contact:t.contact,password:t.password})}}]),t}(),Oe=new Te,Le=JSON.parse(localStorage.getItem("user")),Ee=Le?{status:{loggedIn:!0},user:Le}:{status:{loggedIn:!1},user:null},Pe={namespaced:!0,state:Ee,actions:{login:function(t,e){var o=t.commit;return Oe.login(e).then((function(t){return o("loginSuccess",t),Promise.resolve(t)}),(function(t){return o("loginFailure"),Promise.reject(t)}))},logout:function(t){var e=t.commit;Oe.logout(),e("logout")},register:function(t,e){var o=t.commit;return Oe.register(e).then((function(t){return o("registerSuccess"),Promise.resolve(t.data)}),(function(t){return o("registerFailure"),Promise.reject(t)}))}},mutations:{loginSuccess:function(t,e){t.status.loggedIn=!0,t.user=e},loginFailure:function(t){t.status.loggedIn=!1,t.user=null},logout:function(t){t.status.loggedIn=!1,t.user=null},registerSuccess:function(t){t.status.loggedIn=!1},registerFailure:function(t){t.status.loggedIn=!1}}};n.Z.use(Ie.ZP);var Me=new Ie.ZP.Store({modules:{auth:Pe}});n.Z.config.productionTip=!1,new n.Z({vuetify:w,router:Se,store:Me,render:function(t){return t(_)}}).$mount("#app")},6949:function(t,e,o){t.exports=o.p+"img/logo.5d26a052.png"}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,a,r){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],r=t[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(s=!1,r<i&&(i=r));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,a,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var u=l(o)}for(e&&e(n);c<i.length;c++)r=i[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},n=self["webpackChunktest_apppopuli_es"]=self["webpackChunktest_apppopuli_es"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(7415)}));n=o.O(n)})();
//# sourceMappingURL=app-legacy.d49867d7.js.map