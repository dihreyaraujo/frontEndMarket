(this["webpackJsonpmarket-front-project"]=this["webpackJsonpmarket-front-project"]||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){e.exports=a(44)},29:function(e,t,a){},30:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(21),i=a.n(c),o=(a(29),a(4)),s=a(5),l=a(7),u=a(6),m=(a(30),a(12)),d=a(2),p=a(14),h=a(13),f=(a(20),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"header"},n.a.createElement(m.b,{to:"/",className:"text-header-h1"},n.a.createElement("h1",null,"Dihrey Market")),n.a.createElement("nav",null,n.a.createElement(m.b,{"data-testid":"shopping-cart-button",to:"/cart",className:"text-header-p"},"Carrinho")))}}]),a}(n.a.Component)),g=(a(39),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={arrayProducts:[],pricesItems:[]},e.componentDidMount=function(){e.getProductsLocalStorage()},e.getProductsLocalStorage=function(){var t=JSON.parse(localStorage.getItem("Products")),a=t.map((function(e){return e.price}));e.setState({arrayProducts:t,pricesItems:a}),e.setIdsState(t)},e.aumentar=function(t){var a,r=t.target.className,n=e.state,c=n.arrayProducts,i=n[r],o=n.pricesItems,s=c.find((function(e){return e.id===r})),l=s.available_quantity,u=s.price,m=[].concat(Object(h.a)(o),[u]),d=e.state[r],f=parseInt(d,10)+1;i<l&&e.setState((a={},Object(p.a)(a,r,f),Object(p.a)(a,"pricesItems",m),a))},e.diminuir=function(t){var a=t.target.className,r=e.state,n=r[a],c=r.arrayProducts,i=r.pricesItems,o=c.find((function(e){return e.id===a})),s=parseFloat("-".concat(o.price),10);console.log(s);var l=[].concat(Object(h.a)(i),[s]);if(n>=2){var u,m=parseInt(n,10)-1;e.setState((u={},Object(p.a)(u,a,m),Object(p.a)(u,"pricesItems",l),u))}else{var d=c.filter((function(e){return e.id!==t.target.className}));e.setState({arrayProducts:d,pricesItems:l}),localStorage.setItem("Products",JSON.stringify(d))}},e.setIdsState=function(t){null!==t&&t.map((function(t){return e.setState(Object(p.a)({},t.id,1))}))},e.setParagrafo=function(t){var a=e.state[t];return n.a.createElement("p",{"data-testid":"shopping-cart-product-quantity"},a)},e}return Object(s.a)(a,[{key:"getTotalValue",value:function(){var e=this.state.pricesItems.reduce((function(e,t){return e+t}),0);return n.a.createElement("p",null,"R$".concat(e.toFixed(2)))}},{key:"render",value:function(){var e=this,t=this.state.arrayProducts;return n.a.createElement("div",null,n.a.createElement(f,null),n.a.createElement("div",{className:"cart-section"},n.a.createElement("div",null,0===t.length?n.a.createElement("p",{"data-testid":"shopping-cart-empty-message",className:"empty-car"},"Seu carrinho est\xe1 vazio"):n.a.createElement("div",{className:"cart-items"},t.map((function(t,a){return n.a.createElement("li",{key:t.id,className:"items"},n.a.createElement("p",{"data-testid":"shopping-cart-product-name"},"".concat(t.title)),n.a.createElement("br",null),n.a.createElement("img",{src:t.thumbnail,alt:t.title,width:"150px"}),n.a.createElement("br",null),n.a.createElement("p",{id:"price".concat(a)},"Pre\xe7o: R$ ".concat(t.price*e.state[t.id])),n.a.createElement("br",null),n.a.createElement("button",{type:"button",onClick:e.diminuir,"data-testid":"product-decrease-quantity",className:t.id},"Diminuir"),n.a.createElement("p",null,e.setParagrafo(t.id)),n.a.createElement("button",{type:"button",onClick:e.aumentar,"data-testid":"product-increase-quantity",className:t.id},"Aumentar"))})))),n.a.createElement("div",null,t.length>0?n.a.createElement(m.b,{to:"/checkout",className:"total-value"},n.a.createElement("h1",null,"Total"),this.getTotalValue(),n.a.createElement("button",{type:"button","data-testid":"checkout-products"},"Finalizar Compra")):"")))}}]),a}(n.a.Component)),b=a(1),v=a.n(b),y=a(9);function E(){return j.apply(this,arguments)}function j(){return(j=Object(y.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.mercadolibre.com/sites/MLB/categories",e.next=3,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return k.apply(this,arguments)}function k(){return(k=Object(y.a)(v.a.mark((function e(t){var a,r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=" https://api.mercadolibre.com/sites/MLB/search?q=".concat(t),e.next=3,fetch(a);case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return N.apply(this,arguments)}function N(){return(N=Object(y.a)(v.a.mark((function e(t){var a,r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.mercadolibre.com/sites/MLB/search?category=".concat(t),e.next=3,fetch(a);case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return x.apply(this,arguments)}function x(){return(x=Object(y.a)(v.a.mark((function e(t){var a,r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.mercadolibre.com/items/".concat(t),e.next=3,fetch(a);case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(41);var I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={categories:void 0},e.callGetCategories=Object(y.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:a=t.sent,e.setState({categories:a});case 4:case"end":return t.stop()}}),t)}))),e.categoryList=function(){var t=e.state.categories,a=e.props.click;return t.map((function(e){return n.a.createElement("label",{"data-testid":"category",htmlFor:e.id,key:e.id,className:"category"},n.a.createElement("input",{name:"category",type:"radio",id:e.id,onClick:a}),e.name)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.callGetCategories()}},{key:"render",value:function(){var e=this.state.categories;return n.a.createElement("div",{className:"category-css"},void 0!==e&&this.categoryList())}}]),a}(n.a.Component),P=(a(42),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={ready:!1,value:"",arrayProducts:[],productCategory:[],categoryReady:!1,objectProductsCart:[]},e.getValue=function(t){e.setState({value:t.target.value})},e.searchItems=Object(y.a)(v.a.mark((function t(){var a,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.value,e.setState({ready:!0,categoryReady:!1}),t.next=4,O(a);case 4:r=t.sent,e.setState({arrayProducts:r.results});case 6:case"end":return t.stop()}}),t)}))),e.searchForCategory=function(){var t=Object(y.a)(v.a.mark((function t(a){var r,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.target.id,t.next=3,C(r);case 3:n=t.sent,e.setState({productCategory:n,categoryReady:!0,ready:!1});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.elementsCategory=function(){return e.state.productCategory.map((function(t){return n.a.createElement("div",{key:t.id,"data-testid":"product",className:"items-list"},n.a.createElement(m.b,{"data-testid":"product-detail-link",to:"/product/".concat(t.id),className:"product-info"},n.a.createElement("p",null,t.title),n.a.createElement("img",{src:t.thumbnail,alt:t.title,width:"200px"}),n.a.createElement("p",null,"R$".concat(t.price))),t.shipping.free_shipping&&n.a.createElement("p",{"data-testid":"free-shipping"},"Frete Gr\xe1tis"),n.a.createElement("button",{type:"button","data-testid":"product-add-to-cart",onClick:function(){return e.onAddCart(t)}},"Adicionar ao Carrinho"))}))},e.onAddCart=function(t){e.setState((function(e){return{objectProductsCart:[].concat(Object(h.a)(e.objectProductsCart),[t])}}),e.saveLocalStorage)},e.saveLocalStorage=function(){var t=e.state.objectProductsCart;localStorage.setItem("Products",JSON.stringify(t))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.ready,r=t.value,c=t.arrayProducts,i=t.categoryReady;return n.a.createElement("div",null,n.a.createElement(f,null),n.a.createElement("div",{className:"search-div"},n.a.createElement("input",{type:"text","data-testid":"query-input",onChange:this.getValue,value:r,className:"imput-search",placeholder:"Digite algum termo de pesquisa"}),n.a.createElement("button",{type:"button","data-testid":"query-button",onClick:this.searchItems,className:"button-search"},"Pesquisar")),n.a.createElement("div",{className:"home-css"},n.a.createElement(I,{click:this.searchForCategory}),n.a.createElement("div",{className:"items-search"},a&&c.map((function(t){return n.a.createElement("div",{key:t.id,"data-testid":"product",className:"items-list"},n.a.createElement(m.b,{"data-testid":"product-detail-link",to:"/product/".concat(t.id),className:"product-info"},"Produto: ".concat(t.title),n.a.createElement("br",null),n.a.createElement("img",{src:t.thumbnail,alt:t.title,width:"200px"}),n.a.createElement("br",null),"Pre\xe7o: R$ ".concat(t.price),n.a.createElement("br",null)),t.shipping.free_shipping&&n.a.createElement("p",{"data-testid":"free-shipping"},"Frete Gr\xe1tis"),n.a.createElement("button",{type:"button","data-testid":"product-add-to-cart",onClick:function(){return e.onAddCart(t)}},"Adicionar ao Carrinho"))}))),n.a.createElement("div",{className:"items-search"},i&&this.elementsCategory())))}}]),a}(n.a.Component)),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.handleRating;return n.a.createElement("div",{className:"avaliation-radio"},n.a.createElement("label",{htmlFor:"check1"},"1",n.a.createElement("input",{type:"radio","data-testid":"1-rating",id:"check1",name:"rating",value:"1",onChange:e})),n.a.createElement("label",{htmlFor:"check2"},"2",n.a.createElement("input",{type:"radio","data-testid":"2-rating",id:"check2",name:"rating",value:"2",onChange:e})),n.a.createElement("label",{htmlFor:"check3"},"3",n.a.createElement("input",{type:"radio","data-testid":"3-rating",id:"check3",name:"rating",value:"3",onChange:e})),n.a.createElement("label",{htmlFor:"check4"},"4",n.a.createElement("input",{type:"radio","data-testid":"4-rating",id:"check1",name:"rating",value:"4",onChange:e})),n.a.createElement("label",{htmlFor:"check5"},"5",n.a.createElement("input",{type:"radio","data-testid":"5-rating",id:"check5",name:"rating",value:"5",onChange:e})))}}]),a}(n.a.Component),R=(a(43),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={info:{},ready:!1,email:"",describe:"",rating:"",ratings:[]},e.callGetItem=Object(y.a)(v.a.mark((function t(){var a,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match.params,t.next=3,S(a.id);case 3:r=t.sent,e.setState({info:r,ready:!0});case 5:case"end":return t.stop()}}),t)}))),e.getCart=function(){var t=e.state.info,a=[t],r=JSON.parse(localStorage.getItem("Products"));if(null===r)localStorage.setItem("Products",JSON.stringify(a));else{var n=[].concat(Object(h.a)(r),[t]);localStorage.setItem("Products",JSON.stringify(n))}},e.createItem=function(){var t=e.state.info;return n.a.createElement("div",{className:"item-info"},n.a.createElement("p",{"data-testid":"product-detail-name"},t.title),n.a.createElement("img",{src:t.thumbnail,alt:t.title}),n.a.createElement("p",null,"R$".concat(t.price)),n.a.createElement("button",{type:"button","data-testid":"product-detail-add-to-cart",onClick:e.getCart},"Adicionar ao Carrinho"))},e.handleRating=function(t){var a=t.target,r=a.value,n=a.name;e.setState(Object(p.a)({},n,r))},e.handleClick=function(){var t=e.state,a=t.email,r=t.describe,n=t.rating,c=t.ratings,i={describe:r,email:a,rating:n};e.setState({ratings:[].concat(Object(h.a)(c),[i]),ready:!0}),e.setState({email:"",describe:"",rating:1});var o=JSON.stringify([].concat(Object(h.a)(c),[i]));localStorage.setItem("ratings",o)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.callGetItem();var e=localStorage.getItem("ratings");e&&this.setState({ratings:JSON.parse(e),ready:!0})}},{key:"render",value:function(){var e=this.state,t=e.ready,a=e.describe,r=e.ratings;return n.a.createElement("div",null,n.a.createElement(f,null),n.a.createElement("div",{className:"main-content"},n.a.createElement("div",{className:"item-content"},t&&this.createItem()),n.a.createElement("div",{className:"item-describe"},n.a.createElement("form",{className:"form"},n.a.createElement("p",null,"Avalia\xe7\xe3o"),n.a.createElement("input",{"data-testid":"product-detail-email",type:"email",onChange:this.handleRating,name:"email",required:!0,placeholder:"Email"}),n.a.createElement(w,{handleRating:this.handleRating}),n.a.createElement("textarea",{"data-testid":"product-detail-evaluation",onChange:this.handleRating,value:a,name:"describe",placeholder:"Feedback"}),n.a.createElement("button",{"data-testid":"submit-review-btn",onClick:this.handleClick,type:"button"},"Enviar")),n.a.createElement("div",null,t&&r.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("p",null,e.email),n.a.createElement("p",null,e.describe),n.a.createElement("p",null,e.rating))}))))))}}]),a}(n.a.Component)),F=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(f,null),n.a.createElement("div",{className:"ty"},n.a.createElement("h1",null,"Isso foi apenas uma simula\xe7\xe3o do meu projeto de e-commerce"),n.a.createElement("p",null,"Obrigado por test\xe1-lo ! ! !"),n.a.createElement("a",{href:"https://dihrey.netlify.app/",rel:"noopener noreferrer",target:"_blank"},"Meu Portf\xf3lio")),n.a.createElement("div",{className:"div-seta-check"},n.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/20/20901.png?w=360",alt:"seta",className:"seta"}),n.a.createElement("p",null,"Voltar Ao In\xedcio")))}}]),a}(n.a.Component),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(m.a,null,n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",component:P}),n.a.createElement(d.a,{path:"/cart",component:g}),n.a.createElement(d.a,{path:"/product/:id",component:R}),n.a.createElement(d.a,{path:"/checkout",component:F})))}}]),a}(n.a.Component),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(A,null))}}]),a}(n.a.Component);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1bf3e239.chunk.js.map