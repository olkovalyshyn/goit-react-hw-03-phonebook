(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{2:function(t,e,n){t.exports={form:"ContactForm_form__3o--r",label:"ContactForm_label__3ZrAZ",input:"ContactForm_input__2dHw3",button:"ContactForm_button__2vS0a"}},20:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(11),s=n.n(r),i=(n(20),n(14)),u=n(5),l=n(6),m=n(8),b=n(7),h=n(12),d=n(2),f=n.n(d),j=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(h.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.setState({name:"",number:""}),t.props.onAdd(t.state.name,t.state.number)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:f.a.label,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",className:f.a.input,value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:f.a.label,children:["Number",Object(a.jsx)("input",{type:"tel",name:"number",className:f.a.input,value:this.state.number,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",className:f.a.button,children:"Add contact"})]})}}]),n}(c.Component),C=n(3),p=n.n(C),v=n(9),g=n.n(v);function O(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:g.a.formContact,children:e.map((function(t){var e=t.id,c=t.name,o=t.number;return Object(a.jsxs)("li",{className:g.a.formContactItem,children:[c,": ",o,Object(a.jsx)("button",{className:g.a.formContactButton,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}var x=O;O.propType={contacts:p.a.arrayOf(p.a.shape({id:p.a.string,name:p.a.string,number:p.a.string})),onDeleteContact:p.a.func};var _=function(t){var e=t.value,n=t.onChange;return Object(a.jsx)("input",{type:"text",value:e,onChange:n})},y=n(13),S=n.n(y),N=(n(31),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:S.a.generate(),name:e,number:n};t.state.contacts.find((function(t){return t.name.toLowerCase()===a.name.toLowerCase()}))?alert("".concat(e," is already in contacts.")):t.setState((function(t){return{contacts:[a].concat(Object(i.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.visibleContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("savedContacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("savedContacts"),e=JSON.parse(t);e?this.setState({contacts:e}):this.setState({contacts:this.state.contacts})}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(j,{onAdd:this.addContact}),Object(a.jsx)("h3",{children:"Find contacts by name"}),Object(a.jsx)(_,{value:this.state.filter,onChange:this.changeFilter}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(x,{contacts:this.visibleContacts(),onDeleteContact:this.deleteContact})]})}}]),n}(c.Component)),F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),F()},9:function(t,e,n){t.exports={formContact:"ContactList_formContact__2L9A9",formContactItem:"ContactList_formContactItem__2N12i",formContactButton:"ContactList_formContactButton__3MeMo"}}},[[32,1,2]]]);
//# sourceMappingURL=main.bd4b6ea4.chunk.js.map