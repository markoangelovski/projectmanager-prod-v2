(this["webpackJsonpprojectmanager-spa"]=this["webpackJsonpprojectmanager-spa"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"pmBackend":{"api":"https://pmspa-api-prod.herokuapp.com","apiversion":"v1"},"CNAME":"pmspa.angelovski.ga"}')},21:function(e,n,t){var a=t(19).pmBackend,r=a.api,c=a.apiversion;e.exports={logInCall:function(e){return new Promise((function(n,t){fetch("".concat(r,"/").concat(c,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return t(e)}))}))},logOutCall:function(){return new Promise((function(e,n){fetch("".concat(r,"/").concat(c,"/auth/logout"),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(n){return e(n)})).catch((function(e){return n(e)}))}))},checkAuthCall:function(){return new Promise((function(e,n){fetch("".concat(r,"/").concat(c,"/auth"),{method:"POST",credentials:"include"}).then((function(e){return e.json()})).then((function(n){return e(n)})).catch((function(e){return n(e)}))}))}}},41:function(e,n,t){e.exports=t(56)},46:function(e,n,t){},48:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(33),o=t.n(c),l=t(6),i=(t(46),t(7)),u=t.n(i),s=t(11),d=(t(48),t(15)),f=t(2),m=t(0),g=t(5),p=function(){return r.a.createElement(l.b,{to:"/days"},r.a.createElement("div",{className:"box"},r.a.createElement(g.c,null)))},b=function(e){return r.a.createElement(l.b,{to:"/clock"},r.a.createElement("div",{className:"box"},r.a.createElement(g.i,null)))},v=function(e){return r.a.createElement(l.b,{to:"/kanban"},r.a.createElement("div",{className:"box"},r.a.createElement(g.k,null)))},h=function(e){return r.a.createElement(l.b,{to:"/projects"},r.a.createElement("div",{className:"box"},r.a.createElement(g.g,null)))},E=t(3),y=t(4),j="0 1px 5px rgba(104, 104, 104, 0.8)";function x(){var e=Object(E.a)(["\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  padding: 10px;\n\n  > * > div {\n    background: ",";\n    text-align: center;\n    padding: 1.5rem 2rem;\n    box-shadow: ",";\n    color: ",";\n  }\n"]);return x=function(){return e},e}var O=y.a.section(x(),"#ddd",j,"#333"),k=function(e){return r.a.createElement(m.b.Provider,{value:{style:{verticalAlign:"middle",height:"2.5em",width:"2.5em"}}},r.a.createElement(O,null,r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(h,null),r.a.createElement(v,null)))},w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null))},D=function(e){var n=Object(f.g)((function(e){return e})),t=n.projects,c=n.fetching;console.log("<Projects>",t);var o=Object(f.f)((function(e){return e.getProjects}));return Object(a.useEffect)((function(){0===t.length&&o()}),[]),c?r.a.createElement("div",null,"Loading projects..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Total Projects: ",t.length),t.map((function(e){return r.a.createElement("div",{key:e._id,style:{margin:"10px"}},r.a.createElement("div",null,"Title: ",e.title," ",r.a.createElement("img",{src:e.owner.avatar_url,alt:e.owner._id,style:{width:"25px",borderRadius:"50px",display:"inline"}})),r.a.createElement(l.b,{to:"/projects/".concat(e._id)},"View Project details >"))})))},S=function(e){var n=Object(f.g)((function(e){return e})),t=n.projects,c=n.fetching,o=Object(f.f)((function(e){return e.getProjects})),i=t.find((function(n){return e.match.params.projectId===n._id}));return console.log("<Project>",i),Object(a.useEffect)((function(){0===t.length&&o()}),[]),c?r.a.createElement("div",null,"Loading project..."):r.a.createElement(r.a.Fragment,null,i?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Project: ",i.title),r.a.createElement("div",null,"Tasks:"," ",r.a.createElement("ul",null,i.tasks.map((function(n){return r.a.createElement("li",{key:n._id},n.title," ",r.a.createElement(l.b,{to:"/projects/".concat(e.match.params.projectId,"/tasks/").concat(n._id)},"View Task Details >"))}))))):r.a.createElement("div",null,"Project not found."))},F=function(e){var n=Object(f.g)((function(e){return e})),t=n.tasks,c=n.fetching;console.log("<Tasks>",t);var o=Object(f.f)((function(e){return e.getTasks}));return Object(a.useEffect)((function(){0===t.length&&o()}),[]),c?r.a.createElement("div",null,"Loading tasks..."):r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("div",null,"Task: ",e.title),r.a.createElement("div",null,"Column: ",e.column))})))},T=function(e){var n=Object(f.g)((function(e){return e})),t=n.tasks,c=n.fetching,o=Object(f.f)((function(e){return e.getTasks})),l=t.find((function(n){return e.match.params.taskId===n._id}));return console.log("<Task>",l),Object(a.useEffect)((function(){0===t.length&&o()}),[]),c?r.a.createElement("div",null,"Loading task..."):r.a.createElement(r.a.Fragment,null,l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Task title: ",l.title),r.a.createElement("pre",null,JSON.stringify(l,null,2))," "):r.a.createElement("div",null,"Task not found."))},Y=t(9),P=t.n(Y),C=function(){var e=Object(f.g)((function(e){return e})),n=e.dayStart,t=e.dayEnd,c=e.days,o=e.fetching,i=Object(f.f)((function(e){return e})).getDays;console.log("<EventList>",c);var u="start=".concat(n,"&end=").concat(t);return Object(a.useEffect)((function(){c.length<=1&&i(u)}),[]),o?r.a.createElement("div",null,"Loading events..."):r.a.createElement("table",null,c.map((function(e){return r.a.createElement(a.Fragment,{key:e._id},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Day:"),r.a.createElement("th",null,P()(e.date).format("MMMM Do YYYY")),r.a.createElement("th",null,"Total: ",e.events.length),r.a.createElement("th",null,r.a.createElement(l.b,{to:"/days/".concat(e._id)},"Go")))))})))},_=function(){var e=Object(f.g)((function(e){return e})),n=e.dayStart,t=e.dayEnd,a=e.dayRangeError,c=Object(f.f)((function(e){return e})),o=c.setDayStart,l=c.setDayEnd,i=c.setDayRangeError,u=c.getDays,s=c.setInitialDayValues,d="start=".concat(n,"&end=").concat(t);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),new Date(n)>new Date(t)?(i(!0),s()):(i(!1),u(d),s())}},r.a.createElement("label",{htmlFor:"start"},"Start date:"),r.a.createElement("input",{type:"date",id:"start",name:"events-start",value:n,onChange:function(e){return o(e.target.value)}}),r.a.createElement("label",{htmlFor:"end"},"End date:"),r.a.createElement("input",{type:"date",id:"end",name:"events-end",value:t,onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{type:"submit"}),a&&r.a.createElement("div",{style:{color:"red"}},"Start date must not be later than end date."))},I=function(){return console.log("<Days>"),r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement(C,null))};function M(){var e=Object(E.a)(["\n  font-size: 1rem;\n  margin: 5px 0 0px 10px;\n"]);return M=function(){return e},e}var L=y.a.h1(M()),A=function(e){var n=P()(e.day).format("dddd MMMM Do, YYYY. ");return r.a.createElement(L,null,n)},B=t(29),N=t(27),z=t.n(N);function J(){var e=Object(E.a)(["\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  padding: 10px;\n\n  > div {\n    background: ",";\n    box-shadow: ",";\n  }\n"]);return J=function(){return e},e}var R=y.a.div(J(),"#ddd",j),V=function(){var e=Object(a.useState)([0]),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)([0]),l=Object(s.a)(o,2),i=l[0],u=l[1],d=Object(f.g)((function(e){return e})),m=d.singleDay,g=d.getComputedDay,p=Object(s.a)(g,4),b=p[0],v=p[1],h=p[2],E=p[3],y={chart:{offsetX:-7},plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{showOn:"always",name:{show:!0,offsetY:20},value:{show:!0,offsetY:-20,fontSize:"0px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.4,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},colors:["rgba(104,104,104,0.8"]},j=Object(B.a)({},y,{labels:["Total marked: ".concat(h)]});Object(a.useEffect)((function(){return c([Math.floor(h/(h+E)*100)])}),[m]);var x=Object(B.a)({},y,{labels:["Total booked: ".concat(v)]});return Object(a.useEffect)((function(){return u([Math.floor(v/b*100)||0])}),[m]),r.a.createElement(R,null,r.a.createElement(z.a,{options:j,series:t,type:"radialBar",height:"150px",width:"150px"}),r.a.createElement(z.a,{options:x,series:i,type:"radialBar",height:"150px",width:"150px"}))};function U(){var e=Object(E.a)(["\n  display: block;\n"]);return U=function(){return e},e}function G(){var e=Object(E.a)(["\n  grid-row: span 2;\n  margin: auto;\n\n  span {\n    font-size: 1.3rem;\n  }\n"]);return G=function(){return e},e}function $(){var e=Object(E.a)(["\n  display: block;\n"]);return $=function(){return e},e}function W(){var e=Object(E.a)(["\n  grid-column: span 2;\n\n  a {\n    text-decoration: none;\n    color: rgba(100, 130, 250, 0.8);\n  }\n  & svg:nth-child(2) {\n    margin-left: 5px;\n  }\n"]);return W=function(){return e},e}function X(){var e=Object(E.a)(["\n  color: ",";\n  font-size: ",";\n  margin-left: 5px;\n"]);return X=function(){return e},e}function q(){var e=Object(E.a)(["\n  grid-column: span 2;\n\n  span {\n    margin-left: 5px;\n  }\n  & svg {\n    color: rgba(255, 0, 0, 0.4);\n    cursor: pointer;\n  }\n"]);return q=function(){return e},e}function H(){var e=Object(E.a)(["\n  background: ",";\n  padding: 5px 10px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr auto;\n  grid-template-rows: 1fr 1fr;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n\n  svg {\n    color: rgba(104, 104, 104, 0.8);\n    font-size: 0.7rem;\n    vertical-align: middle;\n  }\n"]);return H=function(){return e},e}var K=y.a.div(H(),"#ddd"),Q=y.a.div(q()),Z=y.a.span(X(),(function(e){return e.small?"rgba(104, 104, 104, 0.8)":"inherit"}),(function(e){return e.small?"0.7rem":"inherit"})),ee=y.a.div(W()),ne=y.a.div($()),te=y.a.div(G()),ae=y.a.div(U()),re=function(e){var n=Object(f.g)((function(e){return e})).tasks,t=Object(f.f)((function(e){return e})),c=t.getTasks,o=t.deleteDay,i=e.event.task,u=n.find((function(e){return e._id===i})),s=u&&"/projects/".concat(u.project,"/tasks/").concat(u._id);return Object(a.useEffect)((function(){i&&i.length>0&&0===n.length&&c()}),[]),r.a.createElement(K,null,r.a.createElement(Q,null,r.a.createElement(g.j,{onClick:function(){window.confirm("Are you sure you want to delete this event?")&&o({dayId:e.event.day,eventId:e.event._id})}}),r.a.createElement(Z,null,e.event.title)," ",r.a.createElement(Z,{small:!0},P()(e.event.date).format("MMM Do"))),r.a.createElement(te,null,r.a.createElement("span",null,e.event.duration," "),"h"),r.a.createElement(ne,null,r.a.createElement(g.f,{onClick:function(){return console.log("Clicked Edit!")}})),r.a.createElement(ee,null,e.event.booked?r.a.createElement(g.h,null):r.a.createElement(g.a,null),r.a.createElement(g.k,null),r.a.createElement(Z,{small:!0},u&&r.a.createElement(l.b,{to:s}," ",u.title," "))),r.a.createElement(ae,null,!e.event.booked&&r.a.createElement(g.b,{onClick:function(){return console.log("Clicked Book!")}})))},ce=function(e){var n=Object(f.g)((function(e){return e})),t=n.singleDay,c=n.fetching,o=n.days,l=Object(f.f)((function(e){return e})).getSingleDay;console.log("<Day>",t);var i=e.match.params.dayId;return Object(a.useEffect)((function(){/^[a-f\d]{24}$/i.test(i)&&l({id:i})}),[o]),/^[a-f\d]{24}$/i.test(i)?c?r.a.createElement("div",null,"Fetching details..."):t.events?r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{day:t.day}),r.a.createElement(V,null),t.events.map((function(e){return r.a.createElement(re,{key:e._id,event:e})}))):null:r.a.createElement("div",null,"Day not found.")},oe=function(){var e=Object(f.g)((function(e){return e})),n=e.singleDay,t=e.days,c=e.dayEnd,o=e.fetching,l=Object(f.f)((function(e){return e})).getSingleDay;return Object(a.useEffect)((function(){l({start:c})}),[t]),o&&!n._id?r.a.createElement("div",null,"Loading data..."):n.events?r.a.createElement(r.a.Fragment,null,n.events.map((function(e){return r.a.createElement(re,{key:e._id,event:e})}))):null},le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement(oe,null))};function ie(){var e=Object(E.a)(["\n  background: ",";\n  box-shadow: ",";\n  text-align: center;\n\n  img {\n    height: 35px;\n    border-radius: 50%;\n    vertical-align: middle;\n  }\n"]);return ie=function(){return e},e}var ue=y.a.section(ie(),"#ddd",j),se=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null,r.a.createElement("img",{src:e.user.avatar_url,alt:"Profile pic"})))};function de(){var e=Object(E.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  box-shadow: ",";\n  z-index: 1;\n\n  > * > a {\n    background: ",";\n    display: block;\n    padding: 0.8rem;\n    text-align: center;\n    color: ",";\n  }\n"]);return de=function(){return e},e}var fe=y.a.ul(de(),j,"#ddd","#333");var me=function(){return r.a.createElement(m.b.Provider,{value:{style:{verticalAlign:"middle"}}},r.a.createElement("nav",null,r.a.createElement(fe,null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement(g.d,null))),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/projects"},r.a.createElement(g.g,null))),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/kanban"},r.a.createElement(g.k,null))),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/days"},r.a.createElement(g.c,null))))))};function ge(){var e=Object(E.a)(["\n  width: 40px;\n  height: 40px;\n  position: fixed;\n  bottom: 70px;\n  right: 20px;\n\n  div {\n    background: ",";\n    text-align: center;\n    border-radius: 50px;\n    box-shadow: ",";\n    color: ",";\n  }\n"]);return ge=function(){return e},e}var pe=y.a.aside(ge(),"#ddd",j,"#333"),be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b.Provider,{value:{style:{verticalAlign:"middle",height:"2.5em",width:"2.5em"}}},r.a.createElement(l.b,{to:"/clock"},r.a.createElement(pe,null,r.a.createElement("div",null,r.a.createElement(g.i,null))))))};function ve(){var e=Object(E.a)(["\n  width: 40px;\n  height: 40px;\n  position: fixed;\n  bottom: 140px;\n  right: 20px;\n\n  div {\n    background: ",";\n    text-align: center;\n    border-radius: 50px;\n    box-shadow: ",";\n    color: ",";\n    width: 40px;\n    height: 40px;\n  }\n"]);return ve=function(){return e},e}var he=y.a.aside(ve(),"#ddd",j,"#333");function Ee(){var e=Object(E.a)(["\n  top: 31vh;\n  position: relative;\n  padding: 10px 0;\n  background-color: ",";\n  box-shadow: ",";\n"]);return Ee=function(){return e},e}function ye(){var e=Object(E.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.7);\n"]);return ye=function(){return e},e}var je=y.a.div(ye()),xe=y.a.div(Ee(),"#ddd",j);function Oe(){var e=Object(E.a)(["\n  color: ",";\n  grid-row: span 2;\n  margin: auto;\n  padding: 10px;\n  height: 20px;\n  width: 20px;\n  border: 1px solid ",";\n  border-radius: 50%;\n"]);return Oe=function(){return e},e}function ke(){var e=Object(E.a)(["\n  height: 5px;\n  appearance: none;\n  background-color: ",";\n  box-shadow: inset 0 3px 10px rgba(0, 0, 0, 0.6);\n  margin: 10px 10px 0 5px;\n"]);return ke=function(){return e},e}function we(){var e=Object(E.a)(["\n  display: grid;\n  grid-template-columns: auto 30px;\n"]);return we=function(){return e},e}function De(){var e=Object(E.a)(["\n  background-color: ",";\n  height: 25px;\n  border: none;\n  margin-left: 5px;\n  padding: 0 5px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n"]);return De=function(){return e},e}function Se(){var e=Object(E.a)(["\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: auto 50px;\n  grid-template-rows: auto auto;\n  grid-gap: 10px;\n  padding: 0 10px;\n"]);return Se=function(){return e},e}var Fe=y.a.form(Se()),Te=y.a.input(De(),"#ddd"),Ye=y.a.div(we()),Pe=y.a.input(ke(),"#ddd"),Ce=y.a.div(Oe(),(function(e){return e.title?"black":"grey"}),(function(e){return e.title?"black":"grey"})),_e=function(){var e=Object(f.g)((function(e){return e})),n=e.eventTitle,t=e.eventDuration,a=e.selectedTask,c=Object(f.f)((function(e){return e})),o=c.setEventTitle,l=c.setEventDuration,i=c.submitDay,u=c.setInitialDayValues,s=n.length>0;return r.a.createElement(Fe,{onSubmit:function(e){return e.preventDefault()}},r.a.createElement(Te,{onChange:function(e){return o(e.target.value)},type:"text",placeholder:"Enter Event Title:",value:n}),r.a.createElement(Ce,{title:s?s.toString():void 0},r.a.createElement(g.e,{onClick:function(e){return function(e){e.preventDefault();var r={day:P()().format("YYYY-MM-DD"),task:a||"",title:n,duration:t};if(!s)return null;i(r),u()}(e)}})),r.a.createElement(Ye,null,r.a.createElement(Pe,{onChange:function(e){return l(e.target.value)},type:"range",placeholder:"Event duration",value:t,step:"0.25",min:"0.25",max:"7.5"}),t))};function Ie(){var e=Object(E.a)(["\n  width: 100%;\n  height: 25px;\n  border: none;\n  padding: 0 10px;\n"]);return Ie=function(){return e},e}function Me(){var e=Object(E.a)(["\n  margin: 1rem 0;\n  padding: 0 10px;\n"]);return Me=function(){return e},e}var Le=y.a.form(Me()),Ae=y.a.select(Ie()),Be=function(){var e=Object(f.g)((function(e){return e})),n=e.tasks,t=e.fetching,c=e.overlay,o=Object(f.f)((function(e){return e})),l=o.getTasks,i=o.setSelectedTask;return Object(a.useEffect)((function(){i("")}),[c]),r.a.createElement(Le,null,r.a.createElement(Ae,{onClick:function(e){0===n.length&&l()},onInput:function(e){return i(e.target.value)},name:"tasks",id:"task-select"},r.a.createElement("option",{value:""},"Select a task:"),t&&r.a.createElement("option",{value:""},"Loading..."),n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.title)}))))},Ne=function(e){var n=Object(f.g)((function(e){return e})).overlay;return console.log("props.childerb",e),n?r.a.createElement(je,null,r.a.createElement(xe,null,r.a.createElement(_e,null),r.a.createElement(Be,null))):null},ze=function(){var e=Object(f.g)((function(e){return e})).tasks,n=Object(f.f)((function(e){return e})),t=n.getTasks,c=n.toggleOverlay;Object(a.useEffect)((function(){0===e.length&&t()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b.Provider,{value:{style:{verticalAlign:"middle",height:"1.5em",width:"1.5em",position:"relative",top:"8px",left:"-2px"}}},r.a.createElement(he,null,r.a.createElement("div",null,r.a.createElement(g.e,{onClick:function(){return c(),r.a.createElement(Ne,null)}})))))},Je=t(21);function Re(){var e=Object(E.a)(["\n  font-size: 0.8rem;\n  padding-left: 10px;\n  margin: 0;\n  color: ",";\n"]);return Re=function(){return e},e}function Ve(){var e=Object(E.a)(["\n  background-color: transparent;\n  height: 25px;\n  width: 90%;\n  border: none;\n  margin-left: 5px;\n  padding: 0 5px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n\n  &:-webkit-autofill {\n    -webkit-transition-delay: 99999s;\n  }\n"]);return Ve=function(){return e},e}function Ue(){var e=Object(E.a)(["\n  color: ",";\n  grid-row: span 2;\n  margin: auto;\n  padding: 10px;\n  height: 20px;\n  width: 20px;\n  border: 1px solid\n    ",";\n  border-radius: 50%;\n"]);return Ue=function(){return e},e}function Ge(){var e=Object(E.a)(["\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: auto 50px;\n  grid-template-rows: auto auto;\n  grid-gap: 10px;\n  padding: 0 10px;\n"]);return Ge=function(){return e},e}function $e(){var e=Object(E.a)(["\n  margin: auto;\n  top: 31vh;\n  position: relative;\n  padding: 10px 0;\n  background-color: #ddd;\n  box-shadow: ",";\n"]);return $e=function(){return e},e}function We(){var e=Object(E.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.7);\n"]);return We=function(){return e},e}var Xe=y.a.div(We()),qe=y.a.div($e(),j),He=y.a.form(Ge()),Ke=y.a.div(Ue(),(function(e){return e.email&&e.password&&!e.apiError?"black":"grey"}),(function(e){return e.email&&e.password&&!e.apiError?"black":"grey"})),Qe=y.a.input(Ve()),Ze=y.a.p(Re(),(function(e){return"true"===e.loading?"inherit":"rgba(255, 0, 0, 0.8)"})),en=function(e){var n=e.setLoggedInStatus,t=e.setUser,c=e.apiError,o=Object(a.useState)(""),l=Object(s.a)(o,2),i=l[0],d=l[1],f=Object(a.useState)(""),m=Object(s.a)(f,2),p=m[0],b=m[1],v=Object(a.useState)(!1),h=Object(s.a)(v,2),E=h[0],y=h[1],j=Object(a.useState)(!1),x=Object(s.a)(j,2),O=x[0],k=x[1];return r.a.createElement(Xe,null,r.a.createElement(qe,null,r.a.createElement(He,null,r.a.createElement("div",null,r.a.createElement(Qe,{type:"email",placeholder:"Email",value:i,onChange:function(e){return d(e.target.value)}})),r.a.createElement(Ke,{email:i?i.toString():void 0,password:p?p.toString():void 0,apiError:c?c.toString():void 0},r.a.createElement(g.e,{onClick:function(e){return!c&&function(e){var a,r;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e.preventDefault(),k(!1),y(!0),a={email:i,password:p},o.t0=i&&p&&!c,!o.t0){o.next=9;break}return o.next=8,u.a.awrap(Object(Je.logInCall)(a));case 8:o.t0=o.sent;case 9:(r=o.t0).error&&(k(!0),y(!1)),r.user&&(t(r.user),n(!0),y(!1));case 12:case"end":return o.stop()}}))}(e)}})),r.a.createElement("div",null,r.a.createElement(Qe,{type:"password",placeholder:"Password",value:p,onChange:function(e){return b(e.target.value)}})),E&&r.a.createElement(Ze,{loading:E?E.toString():void 0},"Loading..."),O&&r.a.createElement(Ze,null,"Incorrect credentials, please try again."),c&&r.a.createElement(Ze,null,"Service is currently unavailable, please try again later."))))},nn=t(19).pmBackend,tn=nn.api,an=nn.apiversion,rn=t(19).pmBackend,cn=rn.api,on=rn.apiversion,ln=t(28),un=t(19).pmBackend,sn=un.api,dn=un.apiversion,fn=function(e){return new Promise((function(n,t){fetch("".concat(sn,"/").concat(dn,"/days"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e),credentials:"include"}).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return t(e)}))}))},mn=function(e){return new Promise((function(n,t){fetch("".concat(sn,"/").concat(dn,"/days?").concat(e),{credentials:"include"}).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return t(e)}))}))},gn=function(e){var n=e.start,t=void 0===n?"":n,a=e.id,r=void 0===a?"":a;return new Promise((function(e,n){fetch("".concat(sn,"/").concat(dn,"/days?start=").concat(t,"&id=").concat(r),{credentials:"include"}).then((function(e){return e.json()})).then((function(n){return e(n)})).catch((function(e){return n(e)}))}))},pn=function(e,n){return new Promise((function(t,a){fetch("".concat(sn,"/").concat(dn,"/days/").concat(e,"/").concat(n),{method:"DELETE",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return a(e)}))}))},bn=Object(f.d)({projects:[],tasks:[],selectedTask:"",dayStart:P()().subtract(1,"week").format("YYYY-MM-DD"),dayEnd:P()().format("YYYY-MM-DD"),eventTitle:"",eventDuration:.25,dayRangeError:!1,days:[],singleDay:{},fetching:!1,overlay:!1,getProjects:Object(f.e)((function(e){return function(e){var n,t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.toggleFetching(),a.prev=1,a.next=4,u.a.awrap(new Promise((function(e,n){fetch("".concat(tn,"/").concat(an,"/projects"),{credentials:"include"}).then((function(e){return e.json()})).then((function(n){return e(n)})).catch((function(e){return n(e)}))})));case 4:n=a.sent,t=n.projects,e.setProjects(t),e.toggleFetching(),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),e.toggleFetching(),console.warn(a.t0);case 14:case"end":return a.stop()}}),null,null,[[1,10]])}(e)})),getTasks:Object(f.e)((function(e){return function(e){var n,t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.toggleFetching(),a.prev=1,a.next=4,u.a.awrap(new Promise((function(e,n){fetch("".concat(cn,"/").concat(on,"/tasks"),{credentials:"include"}).then((function(e){return e.json()})).then((function(n){return e(n)})).catch((function(e){return n(e)}))})));case 4:n=a.sent,t=n.tasks,e.setTasks(t),e.toggleFetching(),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),e.toggleFetching(),console.warn(a.t0);case 14:case"end":return a.stop()}}),null,null,[[1,10]])}(e)})),getDays:Object(f.e)((function(e,n){return function(e,n){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.toggleFetching(),a.prev=1,a.next=4,u.a.awrap(mn(n));case 4:(t=a.sent).error||e.setDays(t.days),e.toggleFetching(),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),e.toggleFetching(),console.warn(a.t0);case 13:case"end":return a.stop()}}),null,null,[[1,9]])}(e,n)})),submitDay:Object(f.e)((function(e,n){return function(e,n){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.toggleFetching(),a.prev=1,a.next=4,u.a.awrap(fn(n));case 4:(t=a.sent).error||e.setUpdatedDay(t.day),e.toggleFetching(),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),e.toggleFetching(),console.warn(a.t0);case 13:case"end":return a.stop()}}),null,null,[[1,9]])}(e,n)})),getSingleDay:Object(f.e)((function(e,n){return function(e,n){var t,a,r;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=n.start,a=n.id,e.toggleFetching(),c.prev=2,c.next=5,u.a.awrap(gn({start:t,id:a}));case 5:(r=c.sent).error||e.setSingleDay(r.days),"Day not found."!==r.message&&"No day entries found."!==r.message||e.setSingleDay({}),e.toggleFetching(),c.next=15;break;case 11:c.prev=11,c.t0=c.catch(2),e.toggleFetching(),console.warn(c.t0);case 15:case"end":return c.stop()}}),null,null,[[2,11]])}(e,{start:n.start,id:n.id})})),deleteDay:Object(f.e)((function(e,n){return function(e,n){var t,a,r;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=n.dayId,a=n.eventId,e.toggleFetching(),c.prev=2,c.next=5,u.a.awrap(pn(t,a));case 5:(r=c.sent).error||e.setDeletedDay(r.day),e.toggleFetching(),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(2),e.toggleFetching(),console.warn(c.t0);case 14:case"end":return c.stop()}}),null,null,[[2,10]])}(e,n)})),getComputedDay:Object(f.c)((function(e){return function(e){var n=e.singleDay._id&&e.singleDay.events.length||0,t=e.singleDay._id&&e.singleDay.events.filter((function(e){return e.booked})).length||0,a=e.singleDay._id&&e.singleDay.events.reduce((function(e,n){return e+n.duration}),0)||0;return[n,t,a,7.5-a]}(e)})),setProjects:Object(f.b)((function(e,n){return function(e,n){e.projects=n}(e,n)})),setTasks:Object(f.b)((function(e,n){return function(e,n){e.tasks=n}(e,n)})),setSelectedTask:Object(f.b)((function(e,n){return function(e,n){e.selectedTask=n}(e,n)})),setDayStart:Object(f.b)((function(e,n){return function(e,n){e.dayStart=n}(e,n)})),setDayEnd:Object(f.b)((function(e,n){return function(e,n){e.dayEnd=n}(e,n)})),setDayRangeError:Object(f.b)((function(e,n){return function(e,n){e.dayRangeError=n}(e,n)})),setEventTitle:Object(f.b)((function(e,n){return function(e,n){e.eventTitle=n}(e,n)})),setEventDuration:Object(f.b)((function(e,n){return function(e,n){e.eventDuration=n}(e,n)})),setDays:Object(f.b)((function(e,n){return function(e,n){e.days=n}(e,n)})),setUpdatedDay:Object(f.b)((function(e,n){return function(e,n){var t=Object(ln.a)(e.days),a=t.findIndex((function(e){return e._id===n._id}));a>-1?(t.splice(a,1),t.push(n),t.sort((function(e,n){return n.date-e.date})),e.days=t):(t.push(n),t.sort((function(e,n){return n.date-e.date})),e.days=t)}(e,n)})),setSingleDay:Object(f.b)((function(e,n){return function(e,n){e.singleDay=n}(e,n)})),setDeletedDay:Object(f.b)((function(e,n){return function(e,n){var t=Object(ln.a)(e.days),a=t.findIndex((function(e){return e._id===n._id}));t.splice(a,1),t.sort((function(e,n){return n.date-e.date})),e.days=t}(e,n)})),setInitialDayValues:Object(f.b)((function(e){return function(e){e.eventTitle="",e.eventDuration=.25,e.dayStart=P()().subtract(1,"week").format("YYYY-MM-DD"),e.dayEnd=P()().format("YYYY-MM-DD")}(e)})),toggleFetching:Object(f.b)((function(e){e.fetching=!e.fetching})),toggleOverlay:Object(f.b)((function(e){e.overlay=!e.overlay}))}),vn=function(){var e=Object(a.useState)(null),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)({}),l=Object(s.a)(o,2),i=l[0],m=l[1],g=Object(a.useState)(!1),p=Object(s.a)(g,2),b=p[0],v=p[1];return Object(a.useEffect)((function(){!function(){var e;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(Object(Je.checkAuthCall)());case 3:(e=n.sent).user?(c(!0),m(e.user)):e.error&&(c(!1),m({})),n.next=13;break;case 7:n.prev=7,n.t0=n.catch(0),console.warn(n.t0),c(!1),m({}),v(!0);case 13:case"end":return n.stop()}}),null,null,[[0,7]])}()}),[]),null===t?r.a.createElement(Xe,null):t?r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{user:i}),r.a.createElement(me,null),r.a.createElement(d.c,null,r.a.createElement(f.a,{store:bn},r.a.createElement(d.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(w,Object.assign({},e,{user:i}))}}),r.a.createElement(d.a,{exact:!0,path:"/projects",component:D}),r.a.createElement(d.a,{exact:!0,path:"/projects/:projectId",component:S}),r.a.createElement(d.a,{exact:!0,path:"/projects/:projectId/tasks",component:F}),r.a.createElement(d.a,{exact:!0,path:"/projects/:projectId/tasks/:taskId",component:T}),r.a.createElement(d.a,{exact:!0,path:"/kanban",component:F}),r.a.createElement(d.a,{exact:!0,path:"/days",component:I}),r.a.createElement(d.a,{exact:!0,path:"/days/:dayId",component:ce}),r.a.createElement(d.a,{exact:!0,path:"/clock",component:le}),r.a.createElement(Ne,null),r.a.createElement(ze,null))),r.a.createElement(be,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(en,{setLoggedInStatus:c,setUser:m,apiError:b}))};o.a.render(r.a.createElement(l.a,null,r.a.createElement(vn,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.eb225e5e.chunk.js.map