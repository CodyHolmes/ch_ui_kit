(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){},16:function(e,a,t){e.exports=t(39)},22:function(e,a,t){},24:function(e,a,t){},26:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),c=t.n(r),o=(t(11),t(5)),i=t(6),m=t(8),s=t(7),u=t(9),b=t(41),_=t(42),E=t(40),f=(t(22),t(24),function(e){return l.a.createElement("div",null,l.a.createElement("h3",{className:"section__title"},"Animated Buttons"),l.a.createElement("button",{type:"button",name:"button",className:"chevron-button"},"Chevron Button"),l.a.createElement("h3",{className:"section__title"},"Expanding Button"),l.a.createElement("ul",{className:"expanding-button__list"},l.a.createElement("li",{className:"expanding-button__item"},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-trash"}))," Test")))}),d=(t(26),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"login__row login__center"},l.a.createElement("div",{className:"login__text"},l.a.createElement("h1",{className:"login__text__header"},"Welcome to CH UI Kit"),l.a.createElement("p",{className:"login__text__subheader"},"Lorem ipsum dolor amet cliche edison bulb paleo four dollar toast retro. Umami cliche single-origin coffee photo booth freegan microdosing. Snackwave offal coloring book, truffaut banh mi health goth tumeric."))),l.a.createElement("div",{className:"login__row login__center"},l.a.createElement("div",{className:"login__box"},l.a.createElement("div",{className:"login-form"},l.a.createElement("h3",{className:"login-form__header"},"PLEASE LOG IN"),l.a.createElement("br",null),l.a.createElement("form",null,l.a.createElement("div",{className:"login-form__item"},l.a.createElement("label",{className:"login-form__label"},"Email"),l.a.createElement("span",{className:"login-form__input-wrapper"},l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("input",{className:"login-form__input",type:"text",placeholder:"Email"}))),l.a.createElement("div",{className:"login-form__item"},l.a.createElement("label",{className:"login-form__label"},"Password"),l.a.createElement("span",{className:"login-form__input-wrapper"},l.a.createElement("i",{className:"fas fa-lock"}),l.a.createElement("input",{className:"login-form__input",type:"password",placeholder:"Password"}))),l.a.createElement("div",{className:"login-form__item login-form__item_forgot"},l.a.createElement("a",{className:"login-form__forget",href:"#"},"Forget Password?")),l.a.createElement("div",{className:"login-form__actions"},l.a.createElement("button",{className:"login-form__submit"},"Sign in"),l.a.createElement("span",{className:"login-form__register"},l.a.createElement("a",{className:"login-form__register__link",href:"#"},"Register")," if you dont have an account"))))))))}}]),a}(n.Component)),h=(t(28),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("html"),a=document.querySelector(".navbar"),t=function(){e.scrollTop>0?a.classList.add("navbar--active"):a.classList.remove("navbar--active")};t(),window.onscroll=function(){t()},document.querySelector(".navbar__mobile-button").addEventListener("click",function(){document.querySelector(".mobile-navbar").classList.toggle("mobile-navbar--active")}),document.querySelector(".mobile-navbar__close").addEventListener("click",function(){document.querySelector(".mobile-navbar").classList.toggle("mobile-navbar--active")})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"navbar__content"},l.a.createElement("div",{className:"navbar__title"},"Logo"),l.a.createElement("div",{className:"navbar__right"},l.a.createElement("ul",{className:"navbar__links"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/CodyHolmes/ch_ui_kit/tree/master/src/components/Navbar",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fab fa-github"})," Source Code")),l.a.createElement("li",null,l.a.createElement("a",{href:"#test"},"Link 2")),l.a.createElement("li",null,l.a.createElement("a",{href:"#test"},"Link 3"))),l.a.createElement("div",{className:"navbar__mobile"},l.a.createElement("button",{className:"navbar__mobile-button"},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-bars"}))))))),l.a.createElement("div",{className:"mobile-navbar"},l.a.createElement("button",{className:"mobile-navbar__close"},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-times","aria-hidden":"true"}))),l.a.createElement("div",{className:"mobile-navbar__content"},l.a.createElement("ul",{className:"mobile-navbar__links"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/CodyHolmes/ch_ui_kit/tree/master/src/components/Navbar",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fab fa-github"})," Source Code")),l.a.createElement("li",null,l.a.createElement("a",{href:"#test"},"Link 2")),l.a.createElement("li",null,l.a.createElement("a",{href:"#test"},"Link 3"))))),l.a.createElement("div",{className:"remove-before-use-2k-px-div"}))}}]),a}(n.Component)),p=(t(30),function(){return l.a.createElement("ul",{className:"table-of-contents__list"},l.a.createElement("li",null,l.a.createElement(E.a,{to:"Buttons",className:"table-of-contents__link"},"Buttons")),l.a.createElement("li",null,l.a.createElement(E.a,{to:"Login",className:"table-of-contents__link"},"Login")),l.a.createElement("li",null,l.a.createElement(E.a,{to:"Navbar",className:"table-of-contents__link"},"Navigation Bar")))}),v=(t(34),t(36),function(e){return l.a.createElement("div",{className:"item-card"},l.a.createElement("div",{className:"item-card__title"},e.title,l.a.createElement("small",null,e.subtitle)),l.a.createElement("div",{className:"item-card__contents"},l.a.createElement(e.component,e)),function(){if(e.githubLink)return l.a.createElement("a",{href:e.githubLink,rel:"noopener noreferrer",target:"_blank",className:"item-card__source"},"Source Code",l.a.createElement("i",{className:"fab fa-github item-card__github"}))}())}),g=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(_.a,{exact:this.props.exact,path:this.props.path,render:function(a){return l.a.createElement("div",null,l.a.createElement("div",{className:"content"},l.a.createElement("h1",{className:"site-title"},"Cody Holmes UI Kit"),l.a.createElement(v,e.props),l.a.createElement("footer",null,l.a.createElement("div",{className:"made-with-love"},"Made with ",l.a.createElement("i",{className:"fas fa-heart footer__heart"})," by ",l.a.createElement("a",{href:"https://github.com/CodyHolmes/",rel:"noopener noreferrer",className:"personal-github-link",target:"_blank"},"Cody Holmes")))))}})}}]),a}(l.a.Component),N=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b.a,{basename:"/ch_ui_kit"},l.a.createElement("div",null,l.a.createElement(g,{exact:!0,path:"/",component:p,title:"Table Of Contents",subtitle:"Click an item to see a demo and code!"}),l.a.createElement(g,{exact:!0,path:"/Buttons",component:f,title:"Buttons",subtitle:"Some awesome buttons",githubLink:"https://github.com/CodyHolmes/ch_ui_kit/tree/master/src/components/Buttons"}),l.a.createElement(_.a,{exact:!0,path:"/Login",component:d}),l.a.createElement(_.a,{exact:!0,path:"/Navbar",component:h}),l.a.createElement("nav",{className:"floating-action-button"},l.a.createElement(E.a,{to:"/",className:"home-button"},l.a.createElement("i",{className:"back-icon fas fa-home","aria-hidden":"true"}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.e211127a.chunk.js.map