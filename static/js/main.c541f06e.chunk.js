(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(8),j=c.n(n),s=c(5),r=(c(13),c(2)),b=c(4),a=c(0),d=c(1),l=function(e){var t=e.person;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.name}),Object(d.jsx)("td",{children:t.sex}),Object(d.jsx)("td",{children:t.born}),Object(d.jsx)("td",{children:t.died}),Object(d.jsx)("td",{children:t.fatherName}),Object(d.jsx)("td",{children:t.motherName})]})},h=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){n(e)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"People table"}),Object(d.jsxs)("table",{className:"PeopleTable",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Name"}),Object(d.jsx)("td",{children:"Sex"}),Object(d.jsx)("td",{children:"Born"}),Object(d.jsx)("td",{children:"Died"}),Object(d.jsx)("td",{children:"Mother"}),Object(d.jsx)("td",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:c.map((function(e){return Object(d.jsx)(l,{person:e})}))})]})]})},i=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("nav",{children:[Object(d.jsx)(s.b,{to:"/",children:"Home page "}),Object(d.jsx)(s.b,{to:"/people",children:"People page"})]}),Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{path:"/",element:Object(d.jsx)("h1",{children:"Home page"})}),Object(d.jsx)(r.b,{path:"/people",element:Object(d.jsx)(h,{})}),Object(d.jsx)(r.b,{path:"/home",element:Object(d.jsx)(r.a,{to:"/"})}),Object(d.jsx)(r.b,{path:"*",element:Object(d.jsx)("p",{children:"Page not found"})})]})]})};j.a.render(Object(d.jsx)(s.a,{children:Object(d.jsx)(i,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c541f06e.chunk.js.map