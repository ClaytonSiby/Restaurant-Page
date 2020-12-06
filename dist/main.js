(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("nav"),n=document.createElement("ul"),c=document.createElement("li"),m=document.createElement("li"),a=document.createElement("li"),i=document.createElement("a"),d=document.createElement("a"),l=document.createElement("a");t.classList="navbar",n.classList="navbar-nav",c.classList="nav-item",m.classList="nav-item",a.classList="nav-item",i.classList="nav-link active",i.setAttribute("id","home"),d.classList="nav-link",d.setAttribute("id","menu"),l.classList="nav-link",l.setAttribute("id","contact"),i.textContent="Home",d.textContent="Menu",l.textContent="Contact",c.appendChild(i),m.appendChild(d),a.appendChild(l),n.appendChild(c),n.appendChild(m),n.appendChild(a),t.appendChild(n),e.appendChild(t)},t=()=>{const e=document.getElementById("content"),t=document.createElement("section"),n=document.createElement("header"),c=document.createElement("h1"),m=document.createElement("div"),a=document.createElement("h4"),i=document.createElement("button");t.classList="hero-section",n.classList="hero-header",m.classList="hero-description",i.classList="btn btn-success",c.textContent="SibyRestaurant",a.textContent="Get a true gastronomic experience!",i.textContent="View Menu",n.appendChild(c),t.appendChild(n),m.appendChild(a),m.appendChild(i),t.appendChild(m),e.appendChild(t)},n=()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h2"),c=document.createElement("div"),m=document.createElement("form"),a=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),s=document.createElement("label"),o=document.createElement("label"),u=document.createElement("label"),p=document.createElement("input"),r=document.createElement("input"),C=document.createElement("textarea"),h=document.createElement("button");s.setAttribute("for","name"),o.setAttribute("for","email"),u.setAttribute("for","content"),p.setAttribute("type","text"),r.setAttribute("type","email"),C.setAttribute("type","textarea"),p.setAttribute("placeholder","Enter your name"),r.setAttribute("placeholder","Enter your email address"),h.setAttribute("type","submit"),p.setAttribute("id","name"),r.setAttribute("id","email"),C.setAttribute("id","content"),h.classList="btn btn-success",t.classList="contact-header",n.classList="header-title",c.classList="form-wrapper",m.classList="contact-form",a.classList="form-group",i.classList="form-group",d.classList="form-group",s.textContent="Name: ",o.textContent="Email: ",u.textContent="Content: ",h.textContent="Submit",n.textContent="Contact Us Via Email",a.appendChild(s),a.appendChild(p),i.appendChild(o),i.appendChild(r),d.appendChild(u),d.appendChild(C),l.appendChild(h),t.appendChild(n),m.appendChild(a),m.appendChild(i),m.appendChild(d),m.appendChild(l),c.appendChild(t),c.appendChild(m),e.appendChild(c)},c=()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("header"),c=document.createElement("section"),m=document.createElement("h1"),a=document.createElement("p"),i=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),s=document.createElement("p"),o=document.createElement("div"),u=document.createElement("p"),p=document.createElement("button"),r=document.createElement("div"),C=document.createElement("div"),h=document.createElement("div"),E=document.createElement("p"),L=document.createElement("div"),b=document.createElement("p"),v=document.createElement("button"),x=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div"),A=document.createElement("p"),S=document.createElement("div"),q=document.createElement("p"),f=document.createElement("button"),P=document.createElement("div"),k=document.createElement("div"),O=document.createElement("div"),w=document.createElement("p"),$=document.createElement("div"),B=document.createElement("p"),I=document.createElement("button"),M=document.createElement("div"),R=document.createElement("div"),T=document.createElement("div"),G=document.createElement("p"),V=document.createElement("div"),H=document.createElement("p"),N=document.createElement("button"),U=document.createElement("div"),j=document.createElement("div"),z=document.createElement("div"),D=document.createElement("p"),F=document.createElement("div"),J=document.createElement("p"),K=document.createElement("button");t.classList="menu-wrapper",n.classList="menu-header",c.classList="menu-section",m.classList="header-menu-title",a.classList="header-menu-text",i.classList="menu-item",d.classList="menu-item-top",l.classList="menu-item-bottom",s.classList="menu-item-title",o.classList="menu-item-image item-1-image",u.classList="menu-item-price",p.classList="menu-item-button btn btn-success",r.classList="menu-item",C.classList="menu-item-top",h.classList="menu-item-bottom",E.classList="menu-item-title",L.classList="menu-item-image item-2-image",b.classList="menu-item-price",v.classList="menu-item-button btn btn-success",x.classList="menu-item",g.classList="menu-item-top",y.classList="menu-item-bottom",A.classList="menu-item-title",S.classList="menu-item-image item-3-image",q.classList="menu-item-price",f.classList="menu-item-button btn btn-success",P.classList="menu-item",k.classList="menu-item-top",O.classList="menu-item-bottom",w.classList="menu-item-title",$.classList="menu-item-image item-4-image",B.classList="menu-item-price",I.classList="menu-item-button btn btn-success",M.classList="menu-item",R.classList="menu-item-top",T.classList="menu-item-bottom",G.classList="menu-item-title",V.classList="menu-item-image item-5-image",H.classList="menu-item-price",N.classList="menu-item-button btn btn-success",U.classList="menu-item",j.classList="menu-item-top",z.classList="menu-item-bottom",D.classList="menu-item-title",F.classList="menu-item-image item-6-image",J.classList="menu-item-price",K.classList="menu-item-button btn btn-success",s.textContent="Omelette with morcilla",E.textContent="Shrimp brochette",A.textContent="Grilled Cheese with tomato",w.textContent="Tapas of Cheese and Peppers",G.textContent="Random Mixed Tapas",D.textContent="Tankard of smoked scratchings",m.textContent="Our Restaurant Menu",a.textContent="Share a meal with the ones you love!",u.textContent="$ 3,50",b.textContent="$ 7,00",q.textContent="$ 6,00",B.textContent="$ 4,00",H.textContent="$ 3,20",J.textContent="$ 9,00",p.textContent="Place Order",v.textContent="Place Order",f.textContent="Place Order",I.textContent="Place Order",N.textContent="Place Order",K.textContent="Place Order",d.appendChild(o),l.appendChild(s),l.appendChild(u),l.appendChild(p),i.appendChild(d),i.appendChild(l),C.appendChild(L),h.appendChild(E),h.appendChild(b),h.appendChild(v),r.appendChild(C),r.appendChild(h),g.appendChild(S),y.appendChild(A),y.appendChild(q),y.appendChild(f),x.appendChild(g),x.appendChild(y),k.appendChild($),O.appendChild(w),O.appendChild(B),O.appendChild(I),P.appendChild(k),P.appendChild(O),R.appendChild(V),T.appendChild(G),T.appendChild(H),T.appendChild(N),M.appendChild(R),M.appendChild(T),j.appendChild(F),z.appendChild(D),z.appendChild(J),z.appendChild(K),U.appendChild(j),U.appendChild(z),c.appendChild(i),c.appendChild(r),c.appendChild(x),c.appendChild(P),c.appendChild(M),c.appendChild(U),n.appendChild(m),n.appendChild(a),t.appendChild(n),t.appendChild(c),e.appendChild(t)},m=(()=>{const e=e=>{e.classList.add("active")},t=e=>{e.classList.remove("active")};return{homeActive:()=>{const n=document.querySelector("#menu"),c=document.querySelector("#home"),m=document.querySelector("#contact");t(n),t(m),e(c)},menuActive:()=>{const n=document.querySelector("#menu"),c=document.querySelector("#home"),m=document.querySelector("#contact");t(c),t(m),e(n)},contactActive:()=>{const n=document.querySelector("#contact"),c=document.querySelector("#menu"),m=document.querySelector("#home");t(m),t(c),e(n)},clearPage:()=>{const e=document.getElementById("content");e.removeChild(e.lastChild)}}})();e(),t();const a=document.querySelector("#home"),i=document.querySelector("#menu"),d=document.querySelector("#contact");a.addEventListener("click",(()=>{m.clearPage(),t(),m.homeActive()})),i.addEventListener("click",(()=>{m.clearPage(),c(),m.menuActive()})),d.addEventListener("click",(()=>{m.clearPage(),n(),m.contactActive()}))})();