(function(e){function a(a){for(var n,r,c=a[0],l=a[1],s=a[2],d=0,u=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(a);while(u.length)u.shift()();return t.push.apply(t,s||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],n=!0,r=1;r<o.length;r++){var c=o[r];0!==i[c]&&(n=!1)}n&&(t.splice(a--,1),e=l(l.s=o[0]))}return e}var n={},r={app:0},i={app:0},t=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1"}[e]||e)+"."+{actividad:"b4fb3209","chunk-0206bfa0":"1eafeb63","chunk-04b93936":"a4fa2b76","chunk-13a6037e":"032c6c3d","chunk-16015154":"40bf2b12","chunk-17977988":"9db6be4c","chunk-2c06842c":"165fe261","chunk-2d208d90":"84241c26","chunk-2d21d0e2":"5c953715","chunk-2d22c123":"5c396c43","chunk-2e80bb9a":"d839b251","chunk-3145fe0f":"ae95be6c","chunk-328f70dd":"56a83db2","chunk-3807499c":"77975133","chunk-3dc647fd":"b0f1de33","chunk-4cdd78c0":"4fd4755b","chunk-4fde0a08":"6ec6d2ac","chunk-515a8379":"553ae88e","chunk-53ccb27e":"74d9178a","chunk-59974754":"84bb68d4","chunk-766a929b":"52ee85a6","chunk-839300a6":"3e99f80e","chunk-c796899c":"e28bb269","chunk-dbb9869e":"7faf6aaa",comple:"5470a476",creditos:"65743e9c",glosario:"3f0e213d",intro:"e9c2bb2e",referencias:"91982984",tema1:"b06c3a59"}[e]+".js"}function l(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var a=[],o={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};r[e]?a.push(r[e]):0!==r[e]&&o[e]&&a.push(r[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"ea724162","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"61bc7acf","chunk-766a929b":"1621e8ec","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"b13bcf80",creditos:"6549e768",glosario:"4c2b097b",intro:"0e433876",referencias:"0246615b",tema1:"31d6cfe0"}[e]+".css",i=l.p+n,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var s=t[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===i))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],d=s.getAttribute("data-href");if(d===n||d===i)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var n=a&&a.target&&a.target.src||i,t=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=n,delete r[e],f.parentNode.removeChild(f),o(t)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)a.push(n[2]);else{var t=new Promise((function(a,o){n=i[e]=[a,o]}));a.push(n[2]=t);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(e);var u=new Error;s=function(a){d.onerror=d.onload=null,clearTimeout(f);var o=i[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,o[1](u)}i[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(a)},l.m=e,l.c=n,l.d=function(e,a,o){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)l.d(o,n,function(a){return e[a]}.bind(null,n));return o},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var f=d;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),r=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},i=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,l=o("2877"),s=Object(l["a"])(c,r,i,!1,null,null,null),d=s.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),f=o("8c4f"),m=o("ae58"),p=o("7e58");u["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=b,h=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Desarrollo de la CDFI",descripcionCurso:"Este componente busca identificar cuál es la estructura básica de una matriz de costos dentro de la Cadena de Distribución Física Internacional, cuáles son sus actores u operadores logísticos y cómo se integran entre ellos; además, se establecen los componentes conceptuales de la teoría de costos para el adecuado desarrollo de la matriz de costos.",imagenBannerPrincipal:o("ae0a"),fondoBannerPrincipal:o("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Conceptualización de la teoría y desarrollo de las operaciones logísticas",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"La logística colombiana y su impacto en el comercio exterior",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Cadenas de abastecimiento",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Cadenas de suministro",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Términos de negociación. Los INCOTERMS y la CDFI",hash:"t_1_4"},{icono:"far fa-file-alt",numero:"1.5",titulo:"Relación entre los términos de negociación y la CDFI",hash:"t_1_5"},{icono:"far fa-file-alt",numero:"1.6",titulo:"Identificación de las operaciones cambiarias del proceso de comercio exterior",hash:"t_1_6"},{icono:"far fa-file-alt",numero:"1.7",titulo:"Elaboración y costeo de la matriz de costos",hash:"t_1_7"}]}],subMenu:[{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Ramírez, C., García, M. y Pantoja, R. (2010). <em>Fundamentos y técnicas de costos.</em> Editorial Universidad Libre.  ",link:"http://www.unilibre.edu.co/cartagena/pdf/investigacion/libros/ceac/FUNDAMENTOS_Y_TECNICAS%20DE%20COSTO.pdf"},{referencia:"Tecnológico Nacional de México. (s. f.).<em> Evolución del Comercio Internacional.</em>  ",link:"https://es.calameo.com/read/00507077164b6eb1b3771"},{referencia:"Villegas, M. (2019).<em> Incoterms 2010, qué son y para qué sirven.</em> Logisber.  ",link:" https://logisber.com/blog/incoterms-2010"}],glosario:[{termino:"Arancel ad valorem",significado:"Es un derecho que se paga por importaciones. Su valor puede ser porcentual y está identificado en el arancel de aduanas."},{termino:"Cambios",significado:"Operaciones cambiarias referentes a la conversión de moneda entre países."},{termino:"Costo",significado:"Cantidad de dinero que se requiere para producir, comercializar o prestar un servicio."},{termino:"Exportación",significado:"Salida de bienes y/o servicios del territorio aduanero nacional hacia terceros países o hacia una zona franca."},{termino:"Importación",significado:"Ingreso de bienes y/o servicios al territorio aduanero nacional procedente de terceros países o de una zona franca."},{termino:"INCOTERMS",significado:"Términos del comercio internacional."},{termino:"IVA",significado:"(Impuesto al Valor Agregado). Aplica para las operaciones de importación y su base es el estatuto tributario."}],complementario:[{texto:"1. Conceptualización de la teoría y desarrollo de las operaciones logísticas.\tRamírez, C., García, M. y Pantoja, R. (2010). <em>Fundamentos y técnicas de costos.</em> Editorial Universidad Libre.",tipo:"Libro",link:"http://www.unilibre.edu.co/cartagena/pdf/investigacion/libros/ceac/FUNDAMENTOS_Y_TECNICAS%20DE%20COSTO.pdf "},{texto:"1.4 Términos de negociación. Los INCOTERMS y la CDFI. Tecnológico Nacional de México. (s. f.). <em>Evolución del Comercio Internacional.</em>",tipo:"Gráfico",link:"https://es.calameo.com/read/00507077164b6eb1b3771"},{texto:"1.4 Términos de negociación. Los INCOTERMS y la CDFI. Villegas, M. (2019). <em>Incoterms 2010, qué son y para qué sirven.</em> Logisber",tipo:"Artículo web",link:"https://logisber.com/blog/incoterms-2010"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jaime Salazar Buitrago",cargo:"Experto temático",centro:"Centro de Servicios Empresariales - Regional Norte de Santander"},{nombre:"María Inés Machado López",cargo:"Diseñadora instruccional",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Revisor metodológico y pedagógico",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Darío González",cargo:"Corrección de estilo",centro:"Centro Agropecuario La Granja - Regional Tolima "}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Sandra Carolina Duran Lopez",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ángela María Maldonado Jaime",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Carlos Eduardo Garavito Parada",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Carolina Tamayo López",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Andrés Mauricio Santaella",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jorge Leonardo Camacho Pardo",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Magdi Khalifah Gamboa",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});n["a"].prototype.$config=v;var y=o("9224");n["a"].prototype.$package=y,new n["a"]({router:g,store:h["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,o){},ae0a:function(e,a,o){e.exports=o.p+"img/banner-princiapal.5de11347.svg"},e6b0:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.713deaba.png"}});
//# sourceMappingURL=app.07c9fbca.js.map