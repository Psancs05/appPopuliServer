(function(){"use strict";var t={525:function(t,e,o){o(6992),o(8674),o(9601),o(7727);var a=o(144),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-content",[o("v-footer",{attrs:{app:"",fixed:"",padless:"",color:"white"}},[o("v-card",{attrs:{color:"#178649",width:"100%",height:"100%"}},[o("v-tabs",{attrs:{"background-color":"#178649",centered:"","fixed-tabs":"",dark:"","icons-and-text":"",optional:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.icons,(function(e){return o("v-tab",{key:e,attrs:{to:e.ruta}},[o("div",{staticClass:"texto_iconos"},[t._v(" "+t._s(e.nombre)+" ")]),o("v-icon",[t._v(" "+t._s(e.icono)+" ")])],1)})),1)],1)],1),o("router-view")],1)],1)},r=[],i={data:function(){return{activeTab:1,icons:[{nombre:"AYUDA",icono:"mdi-help",ruta:"/ayuda"},{nombre:"INICIO",icono:"mdi-home",ruta:"/"},{nombre:"EXPLORAR",icono:"mdi-map-marker",ruta:"/explorar"}]}}},s=i,c=o(1001),l=o(3453),u=o.n(l),d=o(7524),p=o(2371),v=o(4946),f=o(1966),m=o(6428),g=o(4227),b=o(5559),h=(0,c.Z)(s,n,r,!1,null,null,null),x=h.exports;u()(h,{VApp:d.Z,VCard:p.Z,VContent:v.Z,VFooter:f.Z,VIcon:m.Z,VTab:g.Z,VTabs:b.Z});var _=o(9132);a.Z.use(_.Z);var Z=new _.Z({}),w=o(8345),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{staticClass:"icono_usuario"},[a("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),a("div",{staticClass:"titulo"},[a("img",{attrs:{src:o(6949),width:"180",height:"144"}})]),a("div",{staticClass:"cuerpo"},[a("v-btn",{staticClass:"white--text",attrs:{width:"275",height:"50",color:"#ff5d55",to:"/informe"}},[t._v(" enviar informe ")]),a("br"),a("br"),a("v-divider"),a("br"),a("v-btn",{staticClass:"white--text",attrs:{width:"275",height:"50",color:"#178649"}},[t._v(" iniciar sesión ")])],1)])},k=[],C=o(680),V=o(1418),S={},M=(0,c.Z)(S,y,k,!1,null,null,null),T=M.exports;u()(M,{VApp:d.Z,VBtn:C.Z,VDivider:V.Z,VIcon:m.Z});var O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"informe"}},[o("div",{staticClass:"icono_usuario"},[o("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),o("div",{staticClass:"titulo"},[t._v(" Informe ")]),o("div",{staticClass:"cuerpo"},[o("v-container",{staticStyle:{"max-width":"fit-content"},attrs:{fluid:""}},[o("v-form",[o("v-select",{attrs:{label:"Plaga/Enfermedad",color:"#178649",items:t.plagas},model:{value:t.patogeno,callback:function(e){t.patogeno=e},expression:"patogeno"}}),o("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"Fecha",color:"#178649",hint:"DD/MM/AA",readonly:""}},"v-text-field",n,!1),a))]}}]),model:{value:t.menuDate,callback:function(e){t.menuDate=e},expression:"menuDate"}},[o("v-date-picker",{attrs:{"no-title":"","first-day-of-week":1,locale:"es-es",color:"#178649"},on:{input:function(e){t.menuDate=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),o("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([t.location.position?{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{value:t.location.address,label:"Localización",color:"#178649",readonly:""}},"v-text-field",n,!1),a))]}}:{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{label:"Localización",color:"#178649",readonly:""}},"v-text-field",n,!1),a))]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-spacer"),o("v-card-text",[o("div",{staticStyle:{"padding-top":"10px","margin-bottom":"-10px",height:"400px"}},[o("InformeMapa",{model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)]),o("v-divider"),o("v-card-actions",{staticClass:"justify-center"},[o("v-btn",{staticClass:"white--text",attrs:{width:"50%",height:"50",color:"#ff5d55"},on:{click:function(e){t.dialog=!1}}},[t._v(" aceptar ")])],1)],1)],1),o("v-select",{attrs:{label:"Total de árboles dañados",color:"#178649",suffix:"árbol/es",items:t.extension}},[o("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[o("v-icon",t._g({attrs:{size:"20",color:"#178649"}},a),[t._v(" mdi-help ")])]}}])},[o("span",[t._v("si me disculpa")])])],1),o("v-text-field",{attrs:{label:"Porcentaje de pies afectados",color:"#178649",suffix:"%",rules:[t.rules.reglaExtension]}},[o("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[o("v-icon",t._g({attrs:{size:"20",color:"#178649"}},a),[t._v(" mdi-help ")])]}}])},[o("span",[t._v("si me disculpa")])])],1),o("v-select",{attrs:{label:"Severidad del daño",color:"#178649",suffix:"% de la copa o el tronco dañado",items:t.severidadOpciones}},[o("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[o("v-icon",t._g({attrs:{size:"20",color:"#178649"}},a),[t._v(" mdi-help ")])]}}])},[o("span",[t._v("si me disculpa")])])],1),o("v-textarea",{attrs:{color:"#178649","auto-grow":""},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(" Observaciones ")]},proxy:!0}])}),o("v-text-field",{attrs:{label:"Teléfono o correo electrónico",color:"#178649"}},[o("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[o("v-icon",t._g({attrs:{size:"20",color:"#178649"}},a),[t._v(" mdi-help ")])]}}])},[o("span",[t._v("si me disculpa")])])],1),o("v-divider"),o("br"),o("v-btn",{staticClass:"white--text",attrs:{width:"275",height:"50",color:"#ff5d55"},on:{click:t.saveInforme}},[t._v(" enviar ")])],1)],1)],1)])},I=[],D=o(6198),E=o(5200),L=(o(5666),o(4916),o(7601),o(3123),o(2222),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("l-map",{ref:"map",staticStyle:{"z-index":"0"},attrs:{zoom:"18",center:[t.position.lat||t.userLocation.lat||t.defaultLocation.lat,t.position.lng||t.userLocation.lng||t.defaultLocation.lng]},on:{dblclick:t.onMapClick}},[o("l-geosearch",{attrs:{options:t.geoSearchOptions}}),o("l-tile-layer",{attrs:{url:t.tileProvider.url,attribution:t.tileProvider.attribution}}),t.position.lat&&t.position.lng?o("l-marker",{attrs:{visible:"",draggable:"",icon:t.icon,"lat-lng":t.position},on:{"update:latLng":function(e){t.position=e},"update:lat-lng":function(e){t.position=e},dragstart:function(e){t.dragging=!0},dragend:function(e){t.dragging=!1}}}):t._e()],1)}),A=[],j=(o(1249),o(1539),o(458)),P=o(5843),R=o(1739),z=o(5637),$=o(8993),F=o(9344),U={components:{LMap:j.Z,LTileLayer:P.Z,LMarker:R.Z,LGeosearch:$.Z},props:{value:{type:Object,required:!0},defaultLocation:{type:Object,default:function(){return{lat:42.55057050005772,lng:-6.598203246805054}}}},data:function(){return{loading:!1,geoSearchOptions:{provider:new z.Zm,showMarker:!1,autoClose:!0},userLocation:{},icon:(0,F.icon)({iconUrl:o(3994),shadowUrl:o(5275)}),position:{},address:"",dragging:!1,tileProvider:{attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}}},mounted:function(){this.getUserPosition(),this.$refs.map.mapObject.on("geosearch/showlocation",this.onSearch)},watch:{position:{deep:!0,handler:function(t){var e=this;return(0,D.Z)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,e.getAddress();case 2:e.address=o.sent,e.$emit("input",{position:t,address:e.address});case 4:case"end":return o.stop()}}),o)})))()}}},methods:{getUserPosition:function(){var t=this;return(0,D.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){t.userLocation={lat:e.coords.latitude,lng:e.coords.longitude}}));case 1:case"end":return e.stop()}}),e)})))()},getAddress:function(){var t=this;return(0,D.Z)(regeneratorRuntime.mark((function e(){var o,a,n,r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,o="Unresolved address",e.prev=2,a=t.position,n=a.lat,r=a.lng,e.next=6,fetch("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=".concat(n,"&lon=").concat(r));case 6:if(i=e.sent,200!==i.status){e.next=12;break}return e.next=10,i.json();case 10:s=e.sent,o=s.display_name;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](2),console.error("Reverse Geocode Error->",e.t0);case 17:return t.loading=!1,e.abrupt("return",o);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})))()},onMapClick:function(t){this.position=t.latlng},onSearch:function(t){var e=t.location;this.position={lat:e.y,lng:e.x}}}},B=U,N=(0,c.Z)(B,L,A,!1,null,null,null),G=N.exports,H=o(4206),Y=o.n(H),q={components:{InformeMapa:G},data:function(t){return{patogeno:"",plagas:["Chrysomela populi","Cossus cossus","Saperda populnea"],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateFormatted:t.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),menuDate:!1,dialog:!1,location:{},extension:["1","2-10","10-100","Más de 100"],rules:{reglaExtension:function(t){var e=/^[1-9][0-9]?$|^100$/;return e.test(t)||"Introduce un valor numérico entre 1 y 100"}},severidadOpciones:["0-25","25-75","Más del 75"]}},watch:{dialog:function(t){t&&setTimeout((function(){window.dispatchEvent(new Event("resize"))}),100)}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)}},methods:{formatDate:function(t){if(!t)return null;var e=t.split("-"),o=(0,E.Z)(e,3),a=o[0],n=o[1],r=o[2];return"".concat(r,"/").concat(n,"/").concat(a)},saveInforme:function(){var t=this;return(0,D.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y().post("http://localhost:8443/api/informes",{patogeno:t.patogeno});case 3:t.patogeno="",t.$router.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},X=q,J=o(7118),K=o(8050),Q=o(4484),W=o(7336),tt=o(6232),et=o(1152),ot=o(6754),at=o(9762),nt=o(5978),rt=o(4350),it=o(9330),st=(0,c.Z)(X,O,I,!1,null,null,null),ct=st.exports;u()(st,{VBtn:C.Z,VCard:p.Z,VCardActions:J.h7,VCardText:J.ZB,VContainer:K.Z,VDatePicker:Q.Z,VDialog:W.Z,VDivider:V.Z,VForm:tt.Z,VIcon:m.Z,VMenu:et.Z,VSelect:ot.Z,VSpacer:at.Z,VTextField:nt.Z,VTextarea:rt.Z,VTooltip:it.Z});var lt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ayuda"},[o("div",{staticClass:"icono_usuario"},[o("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),o("div",{staticClass:"titulo"},[t._v(" Ayuda ")]),o("div",{staticStyle:{"padding-bottom":"10px"}},[o("v-card",{staticClass:"mx-auto",attrs:{width:"98%","max-width":"1000"}},[o("v-tabs",{attrs:{"background-color":"#178649",grow:"",dark:""},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},t._l(t.tabs,(function(e){return o("v-tab",{key:e},[o("div",{staticClass:"texto_tab"},[t._v(" "+t._s(e)+" ")])])})),1),o("v-tabs-items",{model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[o("v-tab-item",[o("v-card",{attrs:{flat:""}},[o("v-card-text",{staticStyle:{"text-align":"justify"}},[t._v(" Usándola. ")])],1)],1),o("v-tab-item",[o("v-card",{attrs:{flat:""}},[o("v-card-text",[t._v(" Hay plagas y enfermedades. ")])],1)],1)],1)],1)],1),o("v-btn",{staticClass:"boton_flotante",attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#ff5d55",to:"/informe"}},[o("v-icon",[t._v("mdi-launch")])],1)],1)},ut=[],dt={data:function(){return{tabModel:0,tabs:["CÓMO USAR LA APLICACIÓN","PLAGAS Y ENFERMEDADES"]}}},pt=dt,vt=o(1759),ft=o(1954),mt=(0,c.Z)(pt,lt,ut,!1,null,null,null),gt=mt.exports;u()(mt,{VBtn:C.Z,VCard:p.Z,VCardText:J.ZB,VIcon:m.Z,VTab:g.Z,VTabItem:vt.Z,VTabs:b.Z,VTabsItems:ft.Z});var bt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ayuda"},[o("div",{staticClass:"icono_usuario"},[o("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),o("div",{staticClass:"titulo"},[t._v(" Explorar ")]),o("div",{staticStyle:{"padding-bottom":"15px"}},[o("v-card",{staticClass:"mx-auto",attrs:{width:"98%","max-width":"1000"}},[o("v-tabs",{attrs:{"background-color":"#178649",grow:"",dark:""},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[o("v-tab",[o("div",{staticClass:"texto_tab"},[t._v(" HISTORIAL DE INFORMES ")])])],1),o("v-tabs-items",{model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[o("v-tab-item",[o("v-card",{attrs:{flat:""}},[o("v-card-text",[t._v(" Una tabla con el historial de informes. ")])],1)],1)],1)],1)],1),o("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"boton_flotante",attrs:{fab:"",dark:"",fixed:"",bottom:"",left:"",color:"#178649"}},"v-btn",n,!1),a),[o("v-icon",[t._v("mdi-map")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",{attrs:{flat:""}},[o("div",{staticStyle:{height:"400px"}},[o("InformeMapa")],1)])],1),o("v-btn",{staticClass:"boton_flotante",attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#ff5d55",to:"/informe"}},[o("v-icon",[t._v("mdi-launch")])],1)],1)},ht=[],xt={components:{InformeMapa:G},data:function(){return{tabModel:0,dialog:!1}},watch:{dialog:function(t){t&&setTimeout((function(){window.dispatchEvent(new Event("resize"))}),100)}}},_t=xt,Zt=(0,c.Z)(_t,bt,ht,!1,null,null,null),wt=Zt.exports;u()(Zt,{VBtn:C.Z,VCard:p.Z,VCardText:J.ZB,VDialog:W.Z,VIcon:m.Z,VTab:g.Z,VTabItem:vt.Z,VTabs:b.Z,VTabsItems:ft.Z}),a.Z.use(w.Z);var yt=[{path:"/",name:"inicio",component:T},{path:"/informe",name:"informe",component:ct},{path:"/ayuda",name:"ayuda",component:gt},{path:"/explorar",name:"explorar",component:wt}],kt=new w.Z({mode:"history",routes:yt}),Ct=kt;a.Z.config.productionTip=!1,new a.Z({vuetify:Z,router:Ct,render:function(t){return t(x)}}).$mount("#app")},6949:function(t,e,o){t.exports=o.p+"img/logo.5d26a052.png"}},e={};function o(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,a,n,r){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],r=t[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](a[c])}))?a.splice(c--,1):(s=!1,r<i&&(i=r));if(s){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,n,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,r,i=a[0],s=a[1],c=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var u=c(o)}for(e&&e(a);l<i.length;l++)r=i[l],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},a=self["webpackChunkapp_populi_vtfy"]=self["webpackChunkapp_populi_vtfy"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(525)}));a=o.O(a)})();
//# sourceMappingURL=app-legacy.e85f048d.js.map