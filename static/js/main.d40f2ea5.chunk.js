(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(36)},27:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),l=n.n(c),o=(n(27),n(6)),u=n(5),i=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/order"},"Crear Orden")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/kitchen"},"Pedidos a Cocina")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/sent"},"Enviado"))))},m=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Kitchen"))},s=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"))},h=n(7),E=n(8),p=n(10),d=n(9),b=n(11),f=function(e){return r.a.createElement("button",{className:"Button Button-primary ".concat(e.extraClassName?e.extraClassName:""),onClick:e.action},e.name)},v=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={item:n.props.name,count:n.props.value,price:n.props.price},n.handleIncrement=function(){n.setState({count:n.state.count+1})},n.handleDecrement=function(){n.setState({count:n.state.count-1})},n.reset=function(){n.setState({count:0})},n}return Object(b.a)(t,e),Object(E.a)(t,[{key:"formatCount",value:function(){var e=this.state.count;return e<0&&this.reset(),0===e?r.a.createElement("label",null,"Cant."):r.a.createElement("label",null,e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,this.state.item),r.a.createElement(f,{name:"+",action:this.handleIncrement,extraClassName:"counter-btn"}),r.a.createElement(f,{name:"-",action:this.handleDecrement,extraClassName:"couunter-btn"}),r.a.createElement("span",null,this.formatCount()),r.a.createElement(f,{name:"borrar",action:this.reset,extraClassName:"counter-btn"}),r.a.createElement("label",null,this.state.price))}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={menu:[{id:"b01",name:"Caf\xe9 Americano",value:0,price:5},{id:"b02",name:"Caf\xe9 con Leche",value:0,price:7},{id:"b03",name:"Jugo de Frutas Natural",value:0,price:10},{id:"b04",name:"Sandwich de Jam\xf3n y Queso",value:0,price:10}]},n}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h2",null,"Men\xfa Desayuno"),this.state.menu.map(function(e){return r.a.createElement(v,{key:e.id,name:e.name,value:e.value,price:"$".concat(e.price)})}))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null))}}]),t}(a.Component),C=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sent"))},O=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement("hr",null),r.a.createElement(u.a,{exact:!0,path:"/order",component:y}),r.a.createElement(u.a,{exact:!0,path:"/kitchen",component:m}),r.a.createElement(u.a,{exact:!0,path:"/",component:s}),r.a.createElement(u.a,{exact:!0,path:"/sent",component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.d40f2ea5.chunk.js.map