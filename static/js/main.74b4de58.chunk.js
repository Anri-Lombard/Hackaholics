(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{11:function(A,e,t){A.exports={animate:"Home_animate__xQi3M",fadeInOut:"Home_fadeInOut__34vyU",images:"Home_images__37q5X",thought:"Home_thought__28szV","thought-in-frame":"Home_thought-in-frame__1jeBQ"}},13:function(A,e,t){A.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi",loadingMeals:"AvailableMeals_loadingMeals__JyGGD",mealsError:"AvailableMeals_mealsError__3Alfu"}},17:function(A,e,t){A.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t","center-text":"Cart_center-text__1hbMn"}},23:function(A,e,t){A.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},27:function(A,e,t){A.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},32:function(A,e,t){A.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",date:"MealItem_date__2jROx"}},33:function(A,e,t){A.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},34:function(A,e,t){A.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},39:function(A,e,t){A.exports={summary:"MealsSummary_summary__22zUX"}},40:function(A,e,t){A.exports={card:"Card_card__1m44e"}},41:function(A,e,t){A.exports={form:"MealItemForm_form__32qVd"}},49:function(A,e,t){},61:function(A,e,t){"use strict";t.r(e);var a=t(20),n=t.n(a),c=(t(49),t(4)),s=t(1),r=t.n(s),i=r.a.createContext({items:[],totalAmount:0,spacesAvailable:10,addItem:function(A){},removeItem:function(A){},clearCart:function(){},reduceSpace:function(){}}),o=t(23),l=t.n(o),d=t(0),u=function(A){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],r=Object(s.useContext)(i).items,o=r.reduce((function(A,e){return A+1}),0),u="".concat(l.a.button," ").concat(a?l.a.bump:"");return Object(s.useEffect)((function(){if(0!==r.length){n(!0);var A=setTimeout((function(){n(!1)}),300);return function(){clearTimeout(A)}}}),[r]),Object(d.jsxs)("button",{className:u,onClick:A.onClick,children:[Object(d.jsx)("span",{className:l.a.icon,children:Object(d.jsx)("img",{src:"data:image/png;base64,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",style:{marginLeft:"-2rem",marginTop:"-0.5rem"},width:40,height:40,alt:"student cap"})}),Object(d.jsx)("span",{children:"Your Group Picks"}),Object(d.jsx)("span",{className:l.a.badge,children:o})]})},j=t(27),b=t.n(j),m=function(A){return Object(d.jsx)(s.Fragment,{children:Object(d.jsxs)("header",{className:b.a.header,children:[Object(d.jsx)("h1",{children:"UC-Me"}),Object(d.jsx)("div",{children:Object(d.jsx)(u,{onClick:A.onShowCart})})]})})},h=t(39),O=t.n(h),p=function(){return Object(d.jsxs)("section",{className:O.a.summary,children:[Object(d.jsx)("h2",{children:"Meet With Your Fellow Students"}),Object(d.jsx)("p",{children:"Take your education back into your own hands."}),Object(d.jsx)("p",{children:"This is an app for student by students."})]})},x=t(16),f=t.n(x),v=t(18),g=t(40),C=t.n(g),N=function(A){return Object(d.jsx)("div",{className:C.a.card,children:A.children})},w=t(41),E=t.n(w),F=function(A){var e=A.showJoin;return Object(d.jsx)("form",{className:E.a.form,onSubmit:function(e){e.preventDefault(),A.onAddToCart(A.nameOfGroup)},children:e&&Object(d.jsx)("button",{children:"Join"})})},y=t(32),I=t.n(y),_=function(A){var e=Object(s.useContext)(i);return Object(d.jsxs)("li",{className:I.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:A.name}),Object(d.jsx)("div",{className:I.a.description,children:A.description}),Object(d.jsx)("div",{className:I.a.date,children:A.date})]}),Object(d.jsx)("div",{children:Object(d.jsx)(F,{showJoin:A.showJoin,nameOfGroup:A.name,onAddToCart:function(t){e.addItem({id:A.id,name:A.name,amount:t,date:A.date})}})})]})},k=t(13),S=t.n(k),M=function(){var A=Object(s.useState)([]),e=Object(c.a)(A,2),t=e[0],a=e[1],n=Object(s.useState)(!0),r=Object(c.a)(n,2),i=r[0],o=r[1],l=Object(s.useState)(),u=Object(c.a)(l,2),j=u[0],b=u[1];Object(s.useEffect)((function(){o(!0),function(){var A=Object(v.a)(f.a.mark((function A(){var e,t,n,c;return f.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("https://react-http-7bd76-default-rtdb.firebaseio.com/meals.json");case 2:if((e=A.sent).ok){A.next=5;break}throw new Error("Something went wrong!");case 5:return A.next=7,e.json();case 7:for(c in t=A.sent,n=[],t)n.push({id:c,name:t[c].name,description:t[c].description,date:t[c].date});a(n),o(!1);case 12:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}()().catch((function(A){o(!1),b(A.message)}))}),[]);var m,h=t.map((function(A){return Object(d.jsx)(_,{showJoin:"true",id:A.id,name:A.name,description:A.description,date:A.date},A.id)}));return m=i?Object(d.jsx)("p",{className:S.a.loadingMeals,children:"Loading..."}):j?Object(d.jsx)("p",{className:S.a.mealsError,children:j}):0===h.length?Object(d.jsx)("p",{className:S.a.loadingMeals,children:"No groups were found"}):Object(d.jsx)("ul",{children:h}),Object(d.jsx)("section",{className:S.a.meals,children:Object(d.jsx)(N,{children:m})})},Q=function(){return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(M,{})]})},B=t(33),R=t.n(B),D=function(A){return Object(d.jsx)("div",{className:R.a.backdrop,onClick:A.onClose})},Z=function(A){return Object(d.jsx)("div",{className:R.a.modal,children:Object(d.jsx)("div",{className:R.a.content,children:A.children})})},J=document.getElementById("overlays"),L=function(A){return Object(d.jsxs)(s.Fragment,{children:[n.a.createPortal(Object(d.jsx)(D,{onClose:A.onClose}),J),n.a.createPortal(Object(d.jsx)(Z,{children:A.children}),J)]})},V=t(34),G=t.n(V),Y=function(A){Object(s.useContext)(i);var e=A.date;return Object(d.jsx)("li",{className:G.a["cart-item"],children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:A.name}),Object(d.jsx)("div",{reduceSpacesAvailable:A.reduceSpacesAvailable,className:G.a.summary,children:Object(d.jsx)("span",{className:G.a.price,children:e})})]})})},T=t(17),P=t.n(T),W=t(7),X=t.n(W),q=function(A){return""===A.trim()},H=function(A){var e=Object(s.useContext)(i),t=Object(s.useState)({name:!0,street:!0,city:!0,postalCode:!0}),a=Object(c.a)(t,2),n=a[0],r=a[1],o=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),j=Object(s.useRef)(),b="".concat(X.a.control," ").concat(!n.name&&X.a.invalid),m="".concat(X.a.control," ").concat(!n.street&&X.a.invalid),h="".concat(X.a.control," ").concat(!n.postalCode&&X.a.invalid),O="".concat(X.a.control," ").concat(!n.city&&X.a.invalid);return Object(d.jsxs)("form",{className:X.a.form,onSubmit:function(t){t.preventDefault();var a=o.current.value,n=l.current.value,c=u.current.value,s=j.current.value,i=!q(a)&&10===a.trim().length,d=!q(n),b=!q(s),m=9===c.trim().length;r({name:i,street:d,city:b,postalCode:m}),i&&b&&m&&d&&(A.onConfirm({name:a,street:n,city:s,postalCode:c}),e.clearCart())},children:[Object(d.jsxs)("div",{className:b,children:[Object(d.jsxs)("label",{htmlFor:"name",children:["Your Cellphone Number"," ",Object(d.jsx)("span",{style:{color:"lightgray"},children:"(So we could remind you)"})]}),Object(d.jsx)("input",{type:"text",id:"name",ref:o}),!n.name&&Object(d.jsx)("p",{className:X.a.invalid,children:"Please Enter A Valid South African Number"})]}),Object(d.jsxs)("div",{className:m,children:[Object(d.jsx)("label",{htmlFor:"street",children:"Faculty"}),Object(d.jsx)("input",{type:"text",id:"street",ref:l}),!n.street&&Object(d.jsx)("p",{className:X.a.invalid,children:"Please Enter A Valid Faculty"})]}),Object(d.jsxs)("div",{className:h,children:[Object(d.jsxs)("label",{htmlFor:"postal",children:["Your Student Number"," ",Object(d.jsx)("span",{style:{color:"lightgray"},children:"(For vertification)"})]}),Object(d.jsx)("input",{type:"text",id:"postal",ref:u}),!n.postalCode&&Object(d.jsx)("p",{className:X.a.invalid,children:"Please Enter A Valid Student Number"})]}),Object(d.jsxs)("div",{className:O,children:[Object(d.jsx)("label",{htmlFor:"city",children:"Any comments?"}),Object(d.jsx)("input",{type:"text",id:"city",ref:j})]}),Object(d.jsxs)("div",{className:X.a.actions,children:[Object(d.jsx)("button",{onClick:A.onCancel,type:"button",children:"Cancel"}),Object(d.jsx)("button",{className:X.a.submit,children:"Confirm"})]})]})},U=function(A){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],o=Object(s.useState)(!1),l=Object(c.a)(o,2),u=l[0],j=l[1],b=Object(s.useState)(!1),m=Object(c.a)(b,2),h=m[0],O=m[1],p=Object(s.useContext)(i),x=p.items.length,g=p.items.length>0,C=function(A){p.removeItem(A)},N=function(A){p.addItem(A)},w=function(){var A=Object(v.a)(f.a.mark((function A(e){return f.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return j(!0),A.next=3,fetch("https://react-http-7bd76-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:e,orderedItems:p.items})});case 3:j(!1),O(!0);case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),E=Object(d.jsx)("ul",{className:P.a["cart-items"],children:p.items.map((function(A){return Object(d.jsx)(Y,{name:A.name,amount:A.amount,date:A.date,onRemove:C.bind(null,A.id),onAdd:N.bind(null,A)},A.id)}))}),F=Object(d.jsxs)("div",{className:P.a.actions,children:[Object(d.jsx)("button",{className:P.a["button--alt"],onClick:A.onClose,children:"Close"}),g&&Object(d.jsx)("button",{onClick:function(){n(!0)},className:P.a.button,children:"Join"})]}),y=Object(d.jsxs)(r.a.Fragment,{children:[E,Object(d.jsxs)("div",{className:P.a.total,children:[Object(d.jsx)("span",{children:"Total Study Groups"}),Object(d.jsx)("span",{children:x})]}),a?Object(d.jsx)(H,{onConfirm:w,onCancel:A.onClose}):F]}),I=Object(d.jsx)("p",{children:"Joining study group..."}),_=Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)("p",{children:"Successfully joined the group(s). See you there!"}),Object(d.jsx)("div",{className:P.a.actions,children:Object(d.jsx)("button",{className:P.a.button,onClick:A.onClose,children:"Close"})})]});return Object(d.jsxs)(L,{onClose:A.onClose,children:[!u&&!h&&y,u&&I,!u&&h&&_]})},z=t(38),K=t(25),$={items:[],totalAmount:0,spacesAvailable:10},AA=function(A,e){if("ADD"===e.type){var t,a=A.totalAmount+1*e.item.amount,n=A.items.findIndex((function(A){return A.id===e.item.id})),c=A.items[n];if(c){var s=Object(K.a)(Object(K.a)({},c),{},{amount:c.amount+e.item.amount});(t=Object(z.a)(A.items))[n]=s}else t=A.items.concat(e.item);return{items:t,totalAmount:a}}if("REMOVE"===e.type){var r,i=A.items.findIndex((function(A){return A.id===e.id})),o=A.items[i],l=A.totalAmount-o.price;if(1===o.amount)r=A.items.filter((function(A){return A.id!==e.id}));else{var d=Object(K.a)(Object(K.a)({},o),{},{amount:o.amount-1});(r=Object(z.a)(A.items))[i]=d}return{items:r,totalAmount:l,spacesAvailable:A.spacesAvailable}}if("CLEAR"===e.type)return $;if("LESSSPACE"===e.type){var u=A.spacesAvailable-1;return{items:A.items,totalAmount:A.totalAmount,spacesAvailable:u}}return $},eA=function(A){var e=Object(s.useReducer)(AA,$),t=Object(c.a)(e,2),a=t[0],n=t[1],r={items:a.items,totalAmount:a.totalAmount,spacesAvailable:a.spacesAvailable,addItem:function(A){n({type:"ADD",item:A})},removeItem:function(A){n({type:"REMOVE",id:A})},clearCart:function(){n({type:"CLEAR"})},reduceSpace:function(){n({type:"LESSSPACE"})}};return Object(d.jsx)(i.Provider,{value:r,children:A.children})},tA=t.p+"static/media/IMG_1689.f56d75bf.jpeg",aA=t(24),nA=t(3),cA=function(){var A=Object(s.useState)([]),e=Object(c.a)(A,2),t=e[0],a=e[1],n=Object(s.useState)(!0),r=Object(c.a)(n,2),i=r[0],o=r[1],l=Object(s.useState)(),u=Object(c.a)(l,2),j=u[0],b=u[1];Object(s.useEffect)((function(){o(!0),function(){var A=Object(v.a)(f.a.mark((function A(){var e,t,n,c,s;return f.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("https://react-http-7bd76-default-rtdb.firebaseio.com/orders.json");case 2:if((e=A.sent).ok){A.next=5;break}throw new Error("Something went wrong!");case 5:return A.next=7,e.json();case 7:for(c in t=A.sent,n=[],t)for(s=0;s<t[c].orderedItems.length;s++)console.log(t[c].orderedItems["".concat(s)].name),n.push({id:Math.random(),name:t[c].orderedItems["".concat(s)].name,description:t[c].orderedItems["".concat(s)].description,date:t[c].orderedItems["".concat(s)].date});a(n),o(!1);case 12:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}()().catch((function(A){o(!1),b(A.message)}))}),[]);var m,h=t.map((function(A){return Object(d.jsx)(_,{id:A.id,name:A.name,description:A.description,date:A.date},A.id)}));return m=i?Object(d.jsx)("p",{className:S.a.loadingMeals,children:"Loading..."}):j?Object(d.jsx)("p",{className:S.a.mealsError,children:j}):0===h.length?Object(d.jsx)("p",{className:S.a.loadingMeals,children:"No meals were found"}):Object(d.jsx)("ul",{children:h}),Object(d.jsx)("section",{className:S.a.meals,children:Object(d.jsx)(N,{children:m})})},sA=function(){return Object(d.jsx)(cA,{})},rA=t(77),iA=t(74),oA=t(11),lA=t.n(oA),dA=t.p+"static/media/472CBF0A-A0FC-4292-AA7D-DACA8F812333 1.9cdfdcb8.png",uA=t.p+"static/media/472CBF0A-A0FC-4292-AA7D-DACA8F812333 2.ddd49fc8.png",jA=t.p+"static/media/472CBF0A-A0FC-4292-AA7D-DACA8F812333 3.3723ca83.png",bA=t.p+"static/media/9E643F28-7B63-4F82-8437-E4F676FBF616 1.ac1ea9ad.png",mA=t.p+"static/media/38E6CEE7-8E43-4447-89AE-16F7F99656E9.e86d6399.png",hA=t(42),OA=t.n(hA),pA=(t(52),Object(iA.a)({root:{width:"100%",textAlign:"center",alignItems:"center"}})),xA=function(){Object(s.useEffect)((function(){OA.a.init({duration:2e3})}),[]);var A=pA(),e=Object(d.jsxs)("div",{"data-aos":"fade-up",className:lA.a.thought,children:["We have all been forced away",Object(d.jsx)("br",{}),"Behind closed doors we stay",Object(d.jsx)("br",{})," Craving human interaction",Object(d.jsx)("br",{})," In desperate need of a companion",Object(d.jsx)("br",{})]}),t=Object(d.jsxs)("div",{"data-aos":"fade-left",className:lA.a.thought,children:["No one knows from whence she came;",Object(d.jsx)("br",{})," Covid-19, we cannot tame",Object(d.jsx)("br",{})," But alas do not despair",Object(d.jsx)("br",{})," For sometimes the world is fair",Object(d.jsx)("br",{})]}),a=Object(d.jsxs)("div",{"data-aos":"fade-right",className:lA.a.thought,children:["Yes it has lectures and tests",Object(d.jsx)("br",{})," And assignments, unwanted guests",Object(d.jsx)("br",{})," Before your entire world crashes",Object(d.jsx)("br",{})," Let\u2019s help you rise out the ashes",Object(d.jsx)("br",{})]}),n=Object(d.jsxs)("div",{"data-aos":"flip-left",className:lA.a.thought,children:["Hello, welcome to UC-Me!",Object(d.jsx)("br",{}),"That needed kinship, we can guarantee",Object(d.jsx)("br",{})," Unwanted guests we\u2019ll help you endure So sign up and go explore!"]}),c=Object(d.jsxs)("div",{"data-aos":"fade-up",className:lA.a["thought-in-frame"],children:[Object(d.jsx)("h2",{children:Object(d.jsx)("u",{children:"T\u2019s and C\u2019s"})}),Object(d.jsx)("li",{children:"No offensive language"}),Object(d.jsx)("li",{children:"Important announcements always pinned at the top of the chat"}),Object(d.jsx)("li",{children:"Join the groups relevant to you"}),Object(d.jsx)("li",{children:"Failure to follow the above will have consequences"})]});return Object(d.jsx)("div",{className:A.root,children:Object(d.jsxs)(rA.a,{children:[Object(d.jsx)("img",{"data-aos":"fade-up",alt:"speech bubble",className:lA.a.images,src:dA}),e,Object(d.jsx)("img",{"data-aos":"fade-left",alt:"speech bubble",className:lA.a.images,src:uA}),t,Object(d.jsx)("img",{"data-aos":"fade-right",alt:"speech bubble",className:lA.a.images,src:jA}),a,Object(d.jsx)("img",{"data-aos":"flip-left",alt:"speech bubble",className:lA.a.images,src:bA}),n,Object(d.jsx)("br",{}),Object(d.jsx)("img",{"data-aos":"fade-up",alt:"speech bubble",className:lA.a.images,src:mA}),c]})})};var fA=function(A){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)(eA,{children:[Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(m,{onShowCart:function(){n(!0)}}),Object(d.jsxs)(aA.a,{children:[Object(d.jsx)("nav",{style:{marginTop:"6rem"},class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsx)("a",{class:"navbar-brand",href:"#",children:"Navbar"}),Object(d.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{class:"navbar-toggler-icon"})}),Object(d.jsx)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)(aA.b,{class:"nav-link",to:"/",children:"Why We Choose To Help YOU"})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)(aA.b,{class:"nav-link",to:"/about",children:"Available Groups"})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)(aA.b,{class:"nav-link",to:"/users",children:"Your Groups"})})]})})]})}),Object(d.jsx)("div",{className:b.a["main-image"],children:Object(d.jsx)("img",{src:tA,alt:"UCT's beautiful campus"})}),Object(d.jsxs)(nA.c,{children:[Object(d.jsx)(nA.a,{path:"/about",children:Object(d.jsx)(Q,{})}),Object(d.jsx)(nA.a,{path:"/users",children:Object(d.jsx)(sA,{})}),Object(d.jsx)(nA.a,{path:"/",children:Object(d.jsx)(xA,{})})]})]})]}),a&&Object(d.jsx)(U,{onClose:function(){n(!1)}})]})};n.a.render(Object(d.jsx)(fA,{}),document.getElementById("root"))},7:function(A,e,t){A.exports={form:"Checkout_form__26gr1",control:"Checkout_control__2qGfb",actions:"Checkout_actions__2X_6_",submit:"Checkout_submit__2BFZZ",invalid:"Checkout_invalid__2gAN9"}}},[[61,1,2]]]);
//# sourceMappingURL=main.74b4de58.chunk.js.map