(function(){var t={45:function(){},3442:function(t,o,e){"use strict";var a=e(144),n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-app",[e("v-content",[e("v-footer",{attrs:{app:"",fixed:"",padless:"",color:"white"}},[e("v-card",{attrs:{color:"#178649",width:"100%",height:"100%"}},[e("v-tabs",{attrs:{"background-color":"#178649",centered:"","fixed-tabs":"",dark:"","icons-and-text":"",optional:""},model:{value:t.activeTab,callback:function(o){t.activeTab=o},expression:"activeTab"}},t._l(t.icons,(function(o){return e("v-tab",{key:o,attrs:{to:o.ruta}},[e("div",{staticClass:"texto_iconos"},[t._v(" "+t._s(o.nombre)+" ")]),e("v-icon",[t._v(" "+t._s(o.icono)+" ")])],1)})),1)],1)],1),e("router-view")],1)],1)},i=[],r={data:()=>({activeTab:1,icons:[{nombre:"AYUDA",icono:"mdi-help",ruta:"/ayuda"},{nombre:"INICIO",icono:"mdi-home",ruta:"/"},{nombre:"EXPLORAR",icono:"mdi-map-marker",ruta:"/explorar"}]})},s=r,l=e(1001),c=e(3453),d=e.n(c),u=e(7524),v=e(2371),p=e(4946),f=e(1966),m=e(6428),b=e(4227),h=e(5559),g=(0,l.Z)(s,n,i,!1,null,null,null),_=g.exports;d()(g,{VApp:u.Z,VCard:v.Z,VContent:p.Z,VFooter:f.Z,VIcon:m.Z,VTab:b.Z,VTabs:h.Z});var x=e(9132);a.Z.use(x.Z);var w=new x.Z({}),y=e(8345),Z=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-app",[a("div",{staticClass:"icono_usuario"},[a("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),a("div",{staticClass:"titulo"},[a("img",{attrs:{src:e(6949),width:"180",height:"144"}})]),a("div",{staticClass:"cuerpo"},[a("v-container",{staticStyle:{width:"95%","max-width":"500px"},attrs:{fluid:""}},[a("v-btn",{attrs:{dark:"",width:"100%",height:"50",color:"#ff5d55",to:"/informe"}},[t._v(" enviar informe ")]),a("br"),a("br"),a("v-divider"),a("br"),a("v-btn",{attrs:{dark:"",width:"100%",height:"50",color:"#178649",to:"/login"}},[t._v(" iniciar sesión ")])],1)],1)])},C=[],k=e(680),V=e(2255),S=e(1418),T={},M=(0,l.Z)(T,Z,C,!1,null,null,null),O=M.exports;d()(M,{VApp:u.Z,VBtn:k.Z,VContainer:V.Z,VDivider:S.Z,VIcon:m.Z});var I=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"informe"}},[e("div",{staticClass:"icono_usuario"},[e("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),e("div",{staticClass:"titulo"},[t._v(" Informe ")]),e("div",{staticClass:"cuerpo"},[e("v-container",{staticStyle:{width:"95%","max-width":"500px"},attrs:{fluid:""}},[e("v-form",[e("v-select",{attrs:{label:"Plaga/Enfermedad",color:"#178649",items:t.plagas},model:{value:t.informe.patogeno,callback:function(o){t.$set(t.informe,"patogeno",o)},expression:"informe.patogeno"}}),e("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on,n=o.attrs;return[e("v-text-field",t._g(t._b({attrs:{label:"Fecha",color:"#178649",hint:"DD/MM/AA",readonly:""},model:{value:t.computedDateFormatted,callback:function(o){t.computedDateFormatted=o},expression:"computedDateFormatted"}},"v-text-field",n,!1),a))]}}]),model:{value:t.menuDate,callback:function(o){t.menuDate=o},expression:"menuDate"}},[e("v-date-picker",{attrs:{"no-title":"","first-day-of-week":1,locale:"es-es",color:"#178649"},on:{input:function(o){t.menuDate=!1}},model:{value:t.date,callback:function(o){t.date=o},expression:"date"}})],1),e("v-dialog",{attrs:{width:"800"},scopedSlots:t._u([t.location.position?{key:"activator",fn:function(o){var a=o.on,n=o.attrs;return[e("v-text-field",t._g(t._b({attrs:{value:t.location.address,label:"Localización",color:"#178649",readonly:""}},"v-text-field",n,!1),a))]}}:{key:"activator",fn:function(o){var a=o.on,n=o.attrs;return[e("v-text-field",t._g(t._b({attrs:{label:"Localización",color:"#178649",readonly:""}},"v-text-field",n,!1),a))]}}],null,!0),model:{value:t.dialog,callback:function(o){t.dialog=o},expression:"dialog"}},[e("v-card",[e("div",{staticStyle:{height:"400px"}},[e("InformeMapa",{model:{value:t.location,callback:function(o){t.location=o},expression:"location"}})],1),e("v-divider"),e("v-card-actions",{staticClass:"justify-center"},[e("v-btn",{attrs:{dark:"",width:"100%","max-width":"500px",height:"50",color:"#ff5d55"},on:{click:function(o){t.dialog=!1}}},[t._v(" aceptar ")])],1)],1)],1),e("v-select",{attrs:{label:"Total de árboles dañados",color:"#178649",suffix:"árbol/es",items:t.extension}},[e("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("v-icon",t._g({attrs:{size:"20",color:"#178649"}},a),[t._v(" mdi-help ")])]}}])},[e("span",[t._v("si me disculpa")])])],1),e("v-text-field",{attrs:{label:"Porcentaje de pies afectados",color:"#178649",suffix:"%",rules:[t.rules.reglaExtension]}},[e("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("v-icon",t._g({attrs:{size:"20",color:"#178649"}},a),[t._v(" mdi-help ")])]}}])},[e("span",[t._v("si me disculpa")])])],1),e("v-select",{attrs:{label:"Severidad del daño",color:"#178649",suffix:"%",items:t.severidadOpciones}},[e("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("v-icon",t._g({attrs:{size:"20",color:"#178649"}},a),[t._v(" mdi-help ")])]}}])},[e("span",[t._v("si me disculpa")])])],1),e("v-textarea",{attrs:{color:"#178649","auto-grow":""},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(" Observaciones ")]},proxy:!0}])}),e("v-text-field",{attrs:{label:"Teléfono o correo electrónico",color:"#178649"}},[e("v-tooltip",{attrs:{slot:"append-outer",top:""},slot:"append-outer",scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[e("v-icon",t._g({attrs:{size:"20",color:"#178649"}},a),[t._v(" mdi-help ")])]}}])},[e("span",[t._v("si me disculpa")])])],1),e("v-divider"),e("br"),e("v-btn",{staticClass:"white--text",attrs:{width:"100%",height:"50",color:"#ff5d55"},on:{click:t.saveInforme}},[t._v(" enviar ")])],1)],1)],1)])},D=[],E=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("l-map",{ref:"map",staticStyle:{"z-index":"0"},attrs:{zoom:"18",center:[t.position.lat||t.userLocation.lat||t.defaultLocation.lat,t.position.lng||t.userLocation.lng||t.defaultLocation.lng]},on:{dblclick:t.onMapClick}},[e("l-geosearch",{attrs:{options:t.geoSearchOptions}}),e("l-tile-layer",{attrs:{url:t.tileProvider.url,attribution:t.tileProvider.attribution}}),t.position.lat&&t.position.lng?e("l-marker",{attrs:{visible:"",draggable:"",icon:t.icon,"lat-lng":t.position},on:{"update:latLng":function(o){t.position=o},"update:lat-lng":function(o){t.position=o},dragstart:function(o){t.dragging=!0},dragend:function(o){t.dragging=!1}}}):t._e()],1)},A=[],L=e(458),$=e(5843),P=e(1739),j=e(5200),F=e(8993),z=e(9344),U={components:{LMap:L.Z,LTileLayer:$.Z,LMarker:P.Z,LGeosearch:F.Z},props:{value:{type:Object,required:!0},defaultLocation:{type:Object,default:()=>({lat:42.55057050005772,lng:-6.598203246805054})}},data(){return{loading:!1,geoSearchOptions:{provider:new j.Zm,showMarker:!1,autoClose:!0},userLocation:{},icon:(0,z.icon)({iconUrl:e(3994),shadowUrl:e(5275)}),position:{},address:"",dragging:!1,tileProvider:{attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}}},mounted(){this.getUserPosition(),this.$refs.map.mapObject.on("geosearch/showlocation",this.onSearch)},watch:{position:{deep:!0,async handler(t){this.address=await this.getAddress(),this.$emit("input",{position:t,address:this.address})}}},methods:{async getUserPosition(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((t=>{this.userLocation={lat:t.coords.latitude,lng:t.coords.longitude}}))},async getAddress(){this.loading=!0;let t="Unresolved address";try{const{lat:o,lng:e}=this.position,a=await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${o}&lon=${e}`);if(200===a.status){const o=await a.json();t=o.display_name}}catch(o){console.error("Reverse Geocode Error->",o)}return this.loading=!1,t},onMapClick(t){this.position=t.latlng},onSearch(t){const o=t.location;this.position={lat:o.y,lng:o.x}}}},R=U,B=(0,l.Z)(R,E,A,!1,null,null,null),G=B.exports,N=e(4206),H=e.n(N),Y=H().create({baseURL:"http://localhost:8082/api",withCredentials:!1,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, PATCH, OPTIONS","Content-type":"application/json"}});class q{create(t){return Y.post("/informes",t)}}var Q=new q,X={components:{InformeMapa:G},data:t=>({informe:{id:null,patogeno:""},plagas:["Chrysomela populi","Cossus cossus","Saperda populnea"],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateFormatted:t.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),menuDate:!1,dialog:!1,location:{},extension:["1","2-10","10-100","Más de 100"],rules:{reglaExtension:t=>{const o=/^[1-9][0-9]?$|^100$/;return o.test(t)||"Introduce un valor numérico entre 1 y 100"}},severidadOpciones:["0-25","25-75","Más del 75"]}),watch:{dialog(t){t&&setTimeout((()=>{window.dispatchEvent(new Event("resize"))}),100)}},computed:{computedDateFormatted(){return this.formatDate(this.date)}},methods:{formatDate(t){if(!t)return null;const[o,e,a]=t.split("-");return`${a}/${e}/${o}`},saveInforme(){var t={patogeno:this.informe.patogeno};Q.create(t).then((t=>{this.informe.id=t.data.id,console.log(t.data)})).catch((t=>{console.log(t)}))}}},J=X,K=e(7118),W=e(4484),tt=e(7336),ot=e(6232),et=e(1152),at=e(6754),nt=e(5978),it=e(4350),rt=e(9330),st=(0,l.Z)(J,I,D,!1,null,null,null),lt=st.exports;d()(st,{VBtn:k.Z,VCard:v.Z,VCardActions:K.h7,VContainer:V.Z,VDatePicker:W.Z,VDialog:tt.Z,VDivider:S.Z,VForm:ot.Z,VIcon:m.Z,VMenu:et.Z,VSelect:at.Z,VTextField:nt.Z,VTextarea:it.Z,VTooltip:rt.Z});var ct=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"ayuda"},[e("div",{staticClass:"icono_usuario"},[e("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),e("div",{staticClass:"titulo"},[t._v(" ¡Gracias! ")]),e("div",{staticClass:"cuerpo"},[e("v-card",{staticClass:"mx-auto",attrs:{width:"90%","max-width":"800",elevation:"0"}},[t._v(" Tu informe se ha enviado "),e("b",[t._v("correctamente")]),t._v(". "),e("br"),e("br"),e("b",[t._v("¡Ayúdanos a mejorar!")]),t._v(" Queremos saber tu "),e("b",[t._v("opinión")]),t._v(" sobre nuestra "),e("b",[t._v("aplicacón")]),t._v(". Rellenar este "),e("a",{staticStyle:{color:"#178649"},attrs:{href:"url"}},[t._v("formulario")]),t._v(" solo te llevará unos "),e("b",[t._v("minutos")]),t._v(". ")]),e("br"),e("br"),e("v-btn",{staticClass:"white--text",attrs:{width:"275",height:"50",color:"#ff5d55",to:"/"}},[t._v(" no, gracias ")])],1)])},dt=[],ut=e(45),vt=e.n(ut),pt=vt(),ft=(0,l.Z)(pt,ct,dt,!1,null,null,null),mt=ft.exports;d()(ft,{VBtn:k.Z,VCard:v.Z,VIcon:m.Z});var bt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"informe"}},[e("div",{staticClass:"icono_usuario"},[e("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),e("div",{staticClass:"titulo"},[t._v(" Iniciar sesión ")]),e("div",{staticClass:"cuerpo"},[e("v-container",{staticStyle:{width:"95%","max-width":"500px"},attrs:{fluid:""}},[e("v-form",[e("v-text-field",{attrs:{"append-outer-icon":"mdi-account",label:"Teléfono o correo electrónico",color:"#178649"}}),e("v-text-field",{attrs:{"append-outer-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",label:"Contraseña",color:"#178649"},on:{"click:append-outer":function(o){t.show=!t.show}}}),e("v-divider"),e("br"),e("v-btn",{attrs:{dark:"",width:"100%",height:"50",color:"#178649",to:"/"},on:{click:t.saveInforme}},[t._v(" iniciar sesión ")])],1)],1)],1)])},ht=[],gt={data(){return{show:!1,rules:{reglaExtension:t=>{const o=/^[1-9][0-9]?$|^100$/;return o.test(t)||"Introduce un valor numérico entre 1 y 100"}}}},methods:{}},_t=gt,xt=(0,l.Z)(_t,bt,ht,!1,null,null,null),wt=xt.exports;d()(xt,{VBtn:k.Z,VContainer:V.Z,VDivider:S.Z,VForm:ot.Z,VIcon:m.Z,VTextField:nt.Z});var yt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"ayuda"},[e("div",{staticClass:"icono_usuario"},[e("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),e("div",{staticClass:"titulo"},[t._v(" Ayuda ")]),e("div",{staticStyle:{"padding-bottom":"10px"}},[e("v-card",{staticClass:"mx-auto",attrs:{width:"98%","max-width":"800"}},[e("v-tabs",{attrs:{"background-color":"#178649",grow:"",dark:""},model:{value:t.tabModel,callback:function(o){t.tabModel=o},expression:"tabModel"}},t._l(t.tabs,(function(o){return e("v-tab",{key:o},[e("div",{staticClass:"texto_tab"},[t._v(" "+t._s(o)+" ")])])})),1),e("v-tabs-items",{model:{value:t.tabModel,callback:function(o){t.tabModel=o},expression:"tabModel"}},[e("v-tab-item",[e("v-card",{attrs:{flat:""}},[e("v-card-text",{staticStyle:{"text-align":"justify"}},[t._v(" Usándola. ")])],1)],1),e("v-tab-item",[e("v-card",{attrs:{flat:""}},[e("v-card-text",[t._v(" Hay plagas y enfermedades. ")])],1)],1)],1)],1)],1),e("v-btn",{staticClass:"boton_flotante",attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#ff5d55",to:"/informe"}},[e("v-icon",[t._v("mdi-launch")])],1)],1)},Zt=[],Ct={data:()=>({tabModel:0,tabs:["CÓMO USAR LA APLICACIÓN","PLAGAS Y ENFERMEDADES"]})},kt=Ct,Vt=e(1759),St=e(1954),Tt=(0,l.Z)(kt,yt,Zt,!1,null,null,null),Mt=Tt.exports;d()(Tt,{VBtn:k.Z,VCard:v.Z,VCardText:K.ZB,VIcon:m.Z,VTab:b.Z,VTabItem:Vt.Z,VTabs:h.Z,VTabsItems:St.Z});var Ot=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"ayuda"},[e("div",{staticClass:"icono_usuario"},[e("v-icon",{attrs:{large:"",color:"#178649"}},[t._v(" mdi-account-circle ")])],1),e("div",{staticClass:"titulo"},[t._v(" Explorar ")]),e("div",{staticStyle:{"padding-bottom":"15px"}},[e("v-card",{staticClass:"mx-auto",attrs:{width:"98%","max-width":"800"}},[e("v-tabs",{attrs:{"background-color":"#178649",grow:"",dark:""},model:{value:t.tabModel,callback:function(o){t.tabModel=o},expression:"tabModel"}},[e("v-tab",[e("div",{staticClass:"texto_tab"},[t._v(" HISTORIAL DE INFORMES ")])])],1),e("v-tabs-items",{model:{value:t.tabModel,callback:function(o){t.tabModel=o},expression:"tabModel"}},[e("v-tab-item",[e("v-card",{attrs:{flat:""}},[e("v-card-text",[t._v(" Una tabla con el historial de informes. ")])],1)],1)],1)],1)],1),e("v-dialog",{attrs:{width:"800"},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on,n=o.attrs;return[e("v-btn",t._g(t._b({staticClass:"boton_flotante",attrs:{fab:"",dark:"",fixed:"",bottom:"",left:"",color:"#178649"}},"v-btn",n,!1),a),[e("v-icon",[t._v("mdi-map")])],1)]}}]),model:{value:t.dialog,callback:function(o){t.dialog=o},expression:"dialog"}},[e("v-card",{attrs:{flat:""}},[e("v-btn",{attrs:{fab:"",dark:"",fixed:"",top:"",right:"",small:"",color:"#ff5d55"},on:{click:function(o){t.dialog=!1}}},[e("v-icon",[t._v("mdi-close")])],1),e("div",{staticStyle:{height:"400px"}},[e("InformeMapa")],1)],1)],1),e("v-btn",{staticClass:"boton_flotante",attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#ff5d55",to:"/informe"}},[e("v-icon",[t._v("mdi-launch")])],1)],1)},It=[],Dt={components:{InformeMapa:G},data:()=>({tabModel:0,dialog:!1}),watch:{dialog(t){t&&setTimeout((()=>{window.dispatchEvent(new Event("resize"))}),100)}}},Et=Dt,At=(0,l.Z)(Et,Ot,It,!1,null,null,null),Lt=At.exports;d()(At,{VBtn:k.Z,VCard:v.Z,VCardText:K.ZB,VDialog:tt.Z,VIcon:m.Z,VTab:b.Z,VTabItem:Vt.Z,VTabs:h.Z,VTabsItems:St.Z}),a.Z.use(y.Z);const $t=[{path:"/",name:"inicio",component:O},{path:"/informe",name:"informe",component:lt},{path:"/gracias",name:"gracias",component:mt},{path:"/login",name:"login",component:wt},{path:"/ayuda",name:"ayuda",component:Mt},{path:"/explorar",name:"explorar",component:Lt}],Pt=new y.Z({mode:"history",routes:$t});var jt=Pt;a.Z.config.productionTip=!1,new a.Z({vuetify:w,router:jt,render:t=>t(_)}).$mount("#app")},6949:function(t,o,e){"use strict";t.exports=e.p+"img/logo.5d26a052.png"}},o={};function e(a){var n=o[a];if(void 0!==n)return n.exports;var i=o[a]={exports:{}};return t[a].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,a,n,i){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],n=t[d][1],i=t[d][2];for(var s=!0,l=0;l<a.length;l++)(!1&i||r>=i)&&Object.keys(e.O).every((function(t){return e.O[t](a[l])}))?a.splice(l--,1):(s=!1,i<r&&(r=i));if(s){t.splice(d--,1);var c=n();void 0!==c&&(o=c)}}return o}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[a,n,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,a){var n,i,r=a[0],s=a[1],l=a[2],c=0;if(r.some((function(o){return 0!==t[o]}))){for(n in s)e.o(s,n)&&(e.m[n]=s[n]);if(l)var d=l(e)}for(o&&o(a);c<r.length;c++)i=r[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(d)},a=self["webpackChunktest_apppopuli_es"]=self["webpackChunktest_apppopuli_es"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(3442)}));a=e.O(a)})();
//# sourceMappingURL=app.152dd3e2.js.map