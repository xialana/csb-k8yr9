(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(33),c=a.n(r),s=a(56),i=a(57),d=a(64),o=a(63),j=a(107),l=a(18),b=a(244),u=a(246),f=a(245),O=a(53),h=a(8),m=b.a.Column,x=b.a.ColumnGroup,p=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).del=function(e){var t=n.state.data;t=n.findId(t,e),n.setState({data:[].concat(t)})},n.findId=function(e,t){return e.forEach((function(e,a,r){e.id==t?r.splice(a,1):n.findId(e.children,t)})),e},n.state={data:[{key:"1",firstName:"John",lastName:"Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",firstName:"Jim",lastName:"Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",firstName:"Joe",lastName:"Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)(b.a,{dataSource:this.state.data,children:[Object(h.jsxs)(x,{title:"Name",children:[Object(h.jsx)(m,{title:"First Name",dataIndex:"firstName"},"firstName"),Object(h.jsx)(m,{title:"Last Name",dataIndex:"lastName"},"lastName")]}),Object(h.jsx)(m,{title:"Age",dataIndex:"age"},"age"),Object(h.jsx)(m,{title:"Address",dataIndex:"address"},"address"),Object(h.jsx)(m,{title:"Tags",dataIndex:"tags",render:function(e){return Object(h.jsx)(h.Fragment,{children:e.map((function(e){return Object(h.jsx)(u.a,{color:"blue",children:e},e)}))})}},"tags"),Object(h.jsx)(m,{title:"Action",render:function(t,a){return Object(h.jsxs)(f.b,{size:"middle",children:[Object(h.jsxs)("a",{children:["Edit ",a.lastName]}),Object(h.jsx)("span",{children:Object(h.jsx)(O.a,{onClick:function(){return e.del(a.id)},children:" delete"})})]})}},"action")]})}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{children:"\u6b22\u8fce\u5e05\u5c0f\u4f19\u6765\u5230\u8be5\u9875\u9762"})}}]),a}(n.Component),g=N,k=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(j.a,{children:[Object(h.jsxs)("p",{style:{textAlign:"center"},children:["   ",Object(h.jsx)(j.b,{to:"/list",style:{color:"#ffff00",fontSize:20,marginRight:130},children:"List"}),Object(h.jsx)(j.b,{to:"/emp",style:{color:"#ffff00",fontSize:20},children:"Employees"})]}),Object(h.jsx)("hr",{}),Object(h.jsx)(l.a,{path:"/list",component:p}),Object(h.jsx)(l.a,{path:"/emp",component:g})]})}}]),a}(n.Component),y=k,v=document.getElementById("root");c.a.render(Object(h.jsx)(n.StrictMode,{children:Object(h.jsx)(y,{})}),v)}},[[241,1,2]]]);
//# sourceMappingURL=main.b8a0515a.chunk.js.map