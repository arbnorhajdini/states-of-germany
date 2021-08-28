(this["webpackJsonpstates-of-germany"]=this["webpackJsonpstates-of-germany"]||[]).push([[0],{27:function(n,t,e){},44:function(n,t,e){"use strict";e.r(t);var c=e(1),a=(e(27),e(28),e(29),e(30),e(0)),r=e.n(a),i=e(20),o=e.n(i),s=e(11),l=e(2),u=e(10),d=e(7);var j=e(21),h=e.n(j);function p(n,t){new h.a({type:n,text:t,theme:"mint"}).show()}var f={pushErrorNotification:function(n){p("error",n)},pushInfoNotification:function(n){p("information",n)},pushWarningNotification:function(n){p("warning",n)},pushSuccessNotification:function(n){p("success",n)}},b=e(8),x="#ffffff",m="#000000",O="#e9e8e8",g="#5a5656",N="#c2c0c0",v="800px",y="500px";function w(){var n=Object(d.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return w=function(){return n},n}function S(){var n=Object(d.a)(["\n  color: ",";\n  font-size: 18px;\n  margin-bottom: 5px;\n"]);return S=function(){return n},n}function k(){var n=Object(d.a)(["\n  color: ",";\n  width: calc(33.33% - 10px);\n  padding: 10px;\n  margin: 5px;\n  background-color: ",";\n  border: 10px solid ",";\n  text-align: left;\n  &:hover {\n    background-color: ",";\n    text-decoration: none;\n  }\n  @media only screen and (max-width: ",") {\n    width: calc(50% - 10px);\n  }\n  @media only screen and (max-width: ",") {\n    width: calc(100% - 10px);\n  }\n"]);return k=function(){return n},n}var C=Object(b.a)(s.b)(k(),g,x,O,O,v,y);C.displayName="StyledLink";var E=b.a.p(S(),m);E.displayName="StyledTitle";var J=b.a.p(w(),N);function B(n){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(C,{id:n.data.name,to:{pathname:n.data.url,state:n.data},children:[Object(c.jsx)(E,{className:"font-weight-bold",children:n.data.name}),Object(c.jsxs)(J,{className:"font-weight-bold",children:[n.data.schoolCount," Schulen"]})]})})}function T(){var n=Object(d.a)(["\n  background-color: ",";\n  border: none;\n  margin-right: 5px;\n  color: ",";\n  font-weight: bold;\n  min-width: 30px;\n  min-height: 30px;\n"]);return T=function(){return n},n}J.displayName="StyledDetails";var z=b.a.button(T(),O,m);function L(n){var t=n.text,e=n.value,r=Object(a.useState)(!1),i=Object(u.a)(r,2),o=i[0],s=i[1];return Object(c.jsxs)(z,{onClick:function(){return s(!o)},children:[Object(c.jsx)("span",{className:"text-uppercase",children:t})," ",o&&Object(c.jsxs)("span",{children:[" : ",e]})]})}function F(){var n=Object(d.a)(["\n  color: ",";\n  font-size: 35px;\n  width: 100%;\n  background-color: ",";\n  padding: 10px 10px 10px 20px;\n"]);return F=function(){return n},n}z.displayName="StyledButton";var I=b.a.p(F(),g,O);function G(){var n=Object(a.useState)([]),t=Object(u.a)(n,2),e=t[0],r=t[1],i=Object(a.useState)([]),o=Object(u.a)(i,2),s=o[0],l=o[1];return Object(a.useEffect)((function(){(function(n){var t={headers:{"Content-Type":"application/json"},method:"GET",body:JSON.stringify(n)};return fetch("http://localhost:3333/stateList",t).then((function(n){return n.json()}))})().then((function(n){r(n)})).catch((function(){f.pushErrorNotification("Bundesl\xe4nder nicht gefunden")})),function(n){var t={headers:{"Content-Type":"application/json"},method:"GET",body:JSON.stringify(n)};return fetch("http://localhost:3333/personIndexCounts",t).then((function(n){return n.json()}))}().then((function(n){l(n)})).catch((function(){f.pushErrorNotification("Liste nicht gefunden")}))}),[]),Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)(I,{className:"font-weight-bold text-uppercase",children:"bundesl\xe4nder"}),Object(c.jsx)("div",{className:"row mr-0 ml-0",children:e.map((function(n,t){return Object(c.jsx)(B,{data:n},t)}))}),Object(c.jsx)("div",{className:"row mr-0 ml-0 mt-1 mb-1",children:Object.entries(s).map((function(n,t){var e=Object(u.a)(n,2),a=e[0],r=e[1];return r>0&&Object(c.jsx)(L,{text:a,value:r},t)}))})]})}function D(){var n=Object(d.a)(["\n  color: ",";\n  font-size: 35px;\n  width: 100%;\n  background-color: ",";\n  padding: 10px 10px 10px 20px;\n"]);return D=function(){return n},n}I.displayName="Styledtitle";var M=b.a.p(D(),g,O);function P(){var n=Object(l.f)().location.state;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(M,{className:"font-weight-bold text-uppercase",children:n.name}),Object(c.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(c.jsxs)("li",{className:"list-group-item",children:["Zahlen: ",n.count]}),Object(c.jsxs)("li",{className:"list-group-item",children:["Fremdes Land: ",n.foreignCountry?"Ja":"Nein"]}),Object(c.jsxs)("li",{className:"list-group-item",children:["Buchstabe: ",n.letter]}),Object(c.jsxs)("li",{className:"list-group-item",children:["Schulen: ",n.schoolCount]}),Object(c.jsxs)("li",{className:"list-group-item",children:["Stadt Staat: ",n.stadtStaat?"Ja":"Nein"]})]})]})}function W(){return Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)("p",{children:"Page is loading..."}),children:Object(c.jsx)(s.a,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(c.jsx)(G,{})}}),Object(c.jsx)(l.a,{exact:!0,path:"/Bundesland/:url",render:function(){return Object(c.jsx)(P,{})}})]})})})}M.displayName="Styledtitle",o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(W,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.eccc8129.chunk.js.map