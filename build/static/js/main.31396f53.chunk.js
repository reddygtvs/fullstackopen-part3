(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(17),o=t.n(c),r=t(3),a=t(2),u=t(0),i=function(e){var n=e.person;return Object(u.jsx)("div",{children:Object(u.jsxs)("li",{children:[n.name," ",n.number]},n.id)})},s=function(e){var n=e.addNote,t=e.newName,c=e.newNumber,o=e.handleNameChange,r=e.handleNumberChange;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:t,onChange:o})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:c,onChange:r})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var n=e.filterName,t=e.handleFilterChange;return Object(u.jsx)("form",{children:Object(u.jsxs)("div",{children:["filter shown with: ",Object(u.jsx)("input",{value:n,onChange:t})]})})},d=t(4),b=t.n(d),f="/api/persons",j=function(){return b.a.get(f).then((function(e){return e.data}))},h=function(e){return b.a.post(f,e).then((function(e){return e.data}))},m=function(e){return b.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},O=function(e,n){return b.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},v=(t(41),function(e){var n=e.message,t=e.tip;return null===n?null:Object(u.jsx)("div",{className:t,children:n})}),p=function(){var e=Object(a.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),d=Object(r.a)(o,2),b=d[0],f=d[1],p=Object(a.useState)(""),x=Object(r.a)(p,2),g=x[0],w=x[1],N=Object(a.useState)(""),C=Object(r.a)(N,2),k=C[0],y=C[1],S=Object(a.useState)(null),T=Object(r.a)(S,2),D=T[0],E=T[1],F=Object(a.useState)("confirm"),J=Object(r.a)(F,2),L=J[0],A=J[1];Object(a.useEffect)((function(){console.log("start"),j().then((function(e){console.log("fulfilled"),c(e)}))}),[]);var B=t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(v,{message:D,tip:L}),Object(u.jsx)(l,{filterName:k,handleFilterChange:function(e){y(e.target.value)}}),Object(u.jsx)("h2",{children:"Add a new member"}),Object(u.jsx)(s,{addNote:function(e){e.preventDefault();var n={name:b,number:g};if(t.find((function(e){return e.name===n.name}))){var o=t.find((function(e){return e.name===n.name}));window.confirm("".concat(n.name," is already added to phonebook. Do you want to update the number?"))&&O(o.id,n).then((function(e){console.log(e),c(t.map((function(n){return n.id!==e.id?n:e}))),E("Number for ".concat(o.name," has been updated")),A("confirm"),f(""),w(""),setTimeout((function(){E(null)}),5e3)}))}else h(n).then((function(e){console.log(e),c(e),E("".concat(e[e.length-1].name," has been added")),A("confirm"),f(""),w(""),setTimeout((function(){E(null)}),5e3)}))},newName:b,newNumber:g,handleNameChange:function(e){f(e.target.value)},handleNumberChange:function(e){w(e.target.value)}}),Object(u.jsx)("h1",{children:"Numbers"}),B.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(i,{person:e}),Object(u.jsx)("button",{onClick:function(){return n=e.id,o=e.name,void(window.confirm("Do you really want to delete ".concat(o,"?"))&&m(n).then((function(e){console.log(e),c(t.filter((function(e){return e.id!==n}))),console.log(c),E("".concat(o," has been removed from the server")),A("confirm"),setTimeout((function(){E(null)}),5e3)})).catch((function(e){E("".concat(o," has already been removed from the server")),A("error"),setTimeout((function(){E(null)}),5e3),c(t.filter((function(e){return e.id!==n})))})));var n,o},children:"delete"})]})}))]})};o.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.31396f53.chunk.js.map