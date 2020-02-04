(this["webpackJsonpprojectmanager-spa"]=this["webpackJsonpprojectmanager-spa"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"pmBackend":{"api":"https://pmspa-api.herokuapp.com","apiversion":"v1"},"CNAME":"pmspa.angelovski.ga"}')},21:function(e,n,t){var a=t(19).pmBackend,r=a.api,c=a.apiversion;e.exports={logInCall:function(e){return new Promise((function(n,t){fetch("".concat(r,"/").concat(c,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return t(e)}))}))},logOutCall:function(){return new Promise((function(e,n){fetch("".concat(r,"/").concat(c,"/auth/logout"),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(n){return e(n)})).catch((function(e){return n(e)}))}))},checkAuthCall:function(){return new Promise((function(e,n){fetch("".concat(r,"/").concat(c,"/auth"),{method:"POST",credentials:"include"}).then((function(e){return e.json()})).then((function(n){return e(n)})).catch((function(e){return n(e)}))}))}}},41:function(e,n,t){e.exports=t(56)},46:function(e,n,t){},48:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(33),o=t.n(c),i=t(6),l=(t(46),t(7)),u=t.n(l),s=t(9),d=(t(48),t(15)),f=t(2),p=t(0),g=t(5),m=function(){return r.a.createElement(i.b,{to:"/days"},r.a.createElement("div",{className:"box"},r.a.createElement(g.c,null)))},v=function(e){return r.a.createElement(i.b,{to:"/clock"},r.a.createElement("div",{className:"box"},r.a.createElement(g.i,null)))},b=function(e){return r.a.createElement(i.b,{to:"/kanban"},r.a.createElement("div",{className:"box"},r.a.createElement(g.k,null)))},h=function(e){return r.a.createElement(i.b,{to:"/projects"},r.a.createElement("div",{className:"box"},r.a.createElement(g.g,null)))},E=t(3),y=t(4),j="0 1px 5px rgba(104, 104, 104, 0.8)";function x(){var e=Object(E.a)(["\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  padding: 10px;\n\n  > * > div {\n    background: ",";\n    text-align: center;\n    padding: 1.5rem 2rem;\n    box-shadow: ",";\n    color: ",";\n  }\n"]);return x=function(){return e},e}var O=y.a.section(x(),"#ddd",j,"#333"),k=function(e){return r.a.createElement(p.b.Provider,{value:{style:{verticalAlign:"middle",height:"2.5em",width:"2.5em"}}},r.a.createElement(O,null,r.a.createElement(m,null),r.a.createElement(v,null),r.a.createElement(h,null),r.a.createElement(b,null)))},w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null))},D=function(e){var n=Object(f.g)((function(e){return e})),t=n.projects,c=n.fetching;console.log("<Projects>",t);var o=Object(f.f)((function(e){return e.getProjects}));return Object(a.useEffect)((function(){0===t.length&&o()}),[]),c?r.a.createElement("div",null,"Loading projects..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Total Projects: ",t.length),t.map((function(e){return r.a.createElement("div",{key:e._id,style:{margin:"10px"}},r.a.createElement("div",null,"Title: ",e.title," ",r.a.createElement("img",{src:e.owner.avatar_url,alt:e.owner._id,style:{width:"25px",borderRadius:"50px",display:"inline"}})),r.a.createElement(i.b,{to:"/projects/".concat(e._id)},"View Project details >"))})))},S=function(e){var n=Object(f.g)((function(e){return e})),t=n.projects,c=n.fetching,o=Object(f.f)((function(e){return e.getProjects})),l=t.find((function(n){return e.match.params.projectId===n._id}));return console.log("<Project>",l),Object(a.useEffect)((function(){0===t.length&&o()}),[]),c?r.a.createElement("div",null,"Loading project..."):r.a.createElement(r.a.Fragment,null,l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Project: ",l.title),r.a.createElement("div",null,"Tasks:"," ",r.a.createElement("ul",null,l.tasks.map((function(n){return r.a.createElement("li",{key:n._id},n.title," ",r.a.createElement(i.b,{to:"/projects/".concat(e.match.params.projectId,"/tasks/").concat(n._id)},"View Task Details >"))}))))):r.a.createElement("div",null,"Project not found."))},T=function(e){var n=Object(f.g)((function(e){return e})),t=n.tasks,c=n.fetching;console.log("<Tasks>",t);var o=Object(f.f)((function(e){return e.getTasks}));return Object(a.useEffect)((function(){0===t.length&&o()}),[]),c?r.a.createElement("div",null,"Loading tasks..."):r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("div",null,"Task: ",e.title),r.a.createElement("div",null,"Column: ",e.column))})))},F=function(e){var n=Object(f.g)((function(e){return e})),t=n.tasks,c=n.fetching,o=Object(f.f)((function(e){return e.getTasks})),i=t.find((function(n){return e.match.params.taskId===n._id}));return console.log("<Task>",i),Object(a.useEffect)((function(){0===t.length&&o()}),[]),c?r.a.createElement("div",null,"Loading task..."):r.a.createElement(r.a.Fragment,null,i?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Task title: ",i.title),r.a.createElement("pre",null,JSON.stringify(i,null,2))," "):r.a.createElement("div",null,"Task not found."))},C=t(10),Y=t.n(C),I=function(){var e=Object(f.g)((function(e){return e})),n=e.dayStart,t=e.dayEnd,c=e.days,o=e.fetching,l=Object(f.f)((function(e){return e})).getDays;console.log("<EventList>",c);var u="start=".concat(n,"&end=").concat(t);return Object(a.useEffect)((function(){c.length<=1&&l(u)}),[]),o?r.a.createElement("div",null,"Loading events..."):r.a.createElement("table",null,c.map((function(e){return r.a.createElement(a.Fragment,{key:e._id},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Day:"),r.a.createElement("th",null,Y()(e.date).format("MMMM Do YYYY")),r.a.createElement("th",null,"Total: ",e.events.length),r.a.createElement("th",null,r.a.createElement(i.b,{to:"/days/".concat(e._id)},"Go")))))})))},P=function(){var e=Object(f.g)((function(e){return e})),n=e.dayStart,t=e.dayEnd,a=e.dayRangeError,c=Object(f.f)((function(e){return e})),o=c.setDayStart,i=c.setDayEnd,l=c.setDayRangeError,u=c.getDays,s=c.setInitialDayValues,d="start=".concat(n,"&end=").concat(t);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),new Date(n)>new Date(t)?(l(!0),s()):(l(!1),u(d),s())}},r.a.createElement("label",{htmlFor:"start"},"Start date:"),r.a.createElement("input",{type:"date",id:"start",name:"events-start",value:n,onChange:function(e){return o(e.target.value)}}),r.a.createElement("label",{htmlFor:"end"},"End date:"),r.a.createElement("input",{type:"date",id:"end",name:"events-end",value:t,onChange:function(e){return i(e.target.value)}}),r.a.createElement("input",{type:"submit"}),a&&r.a.createElement("div",{style:{color:"red"}},"Start date must not be later than end date."))},_=function(){return console.log("<Days>"),r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(I,null))};function M(){var e=Object(E.a)(["\n  font-size: 1rem;\n  margin: 5px 0 0px 10px;\n"]);return M=function(){return e},e}var N=y.a.h1(M()),L=function(e){var n=Y()(e.day).format("dddd MMMM Do, YYYY. ");return r.a.createElement(N,null,n)},A=t(29),B=t(27),V=t.n(B);function z(){var e=Object(E.a)(["\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 1fr;\n  padding: 10px;\n\n  > div {\n    background: ",";\n    box-shadow: ",";\n  }\n\n  > div > div {\n    margin: auto;\n  }\n\n  > div > div > svg {\n    transform: translate(0, 0);\n  }\n"]);return z=function(){return e},e}var J=y.a.div(z(),"#ddd",j),R=function(){var e=Object(a.useState)([0]),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)([0]),i=Object(s.a)(o,2),l=i[0],u=i[1],d=Object(f.g)((function(e){return e})),p=d.singleDay,g=d.getComputedDay,m=Object(s.a)(g,4),v=m[0],b=m[1],h=m[2],E=m[3],y={chart:{offsetX:-7},plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{showOn:"always",name:{show:!0,offsetY:20},value:{show:!0,offsetY:-20,fontSize:"0px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.4,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},colors:["rgba(104,104,104,0.8"]},j=Object(A.a)({},y,{labels:["Total marked: ".concat(h)]});Object(a.useEffect)((function(){return c([Math.floor(h/(h+E)*100)])}),[p]);var x=Object(A.a)({},y,{labels:["Total booked: ".concat(b)]});return Object(a.useEffect)((function(){return u([Math.floor(b/v*100)||0])}),[p]),r.a.createElement(J,null,r.a.createElement(V.a,{options:j,series:t,type:"radialBar",height:"150px",width:"150px"}),r.a.createElement(V.a,{options:x,series:l,type:"radialBar",height:"150px",width:"150px"}))};function U(){var e=Object(E.a)(["\n  display: block;\n"]);return U=function(){return e},e}function W(){var e=Object(E.a)(["\n  grid-row: span 2;\n  margin: auto;\n\n  span {\n    font-size: 1.3rem;\n  }\n"]);return W=function(){return e},e}function G(){var e=Object(E.a)(["\n  display: block;\n"]);return G=function(){return e},e}function $(){var e=Object(E.a)(["\n  grid-column: span 2;\n\n  a {\n    text-decoration: none;\n    color: rgba(100, 130, 250, 0.8);\n  }\n  & svg:nth-child(2) {\n    margin-left: 5px;\n  }\n"]);return $=function(){return e},e}function H(){var e=Object(E.a)(["\n  color: ",";\n  font-size: ",";\n  margin-left: 5px;\n"]);return H=function(){return e},e}function X(){var e=Object(E.a)(["\n  grid-column: span 2;\n\n  span {\n    margin-left: 5px;\n  }\n  & svg {\n    color: rgba(255, 0, 0, 0.4);\n    cursor: pointer;\n  }\n"]);return X=function(){return e},e}function q(){var e=Object(E.a)(["\n  background: ",";\n  padding: 5px 10px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr auto;\n  grid-template-rows: 1fr auto;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n\n  svg {\n    color: rgba(104, 104, 104, 0.8);\n    font-size: 0.7rem;\n    vertical-align: middle;\n  }\n"]);return q=function(){return e},e}var K=y.a.div(q(),"#ddd"),Q=y.a.div(X()),Z=y.a.span(H(),(function(e){return e.small?"rgba(104, 104, 104, 0.8)":"inherit"}),(function(e){return e.small?"0.7rem":"inherit"})),ee=y.a.div($()),ne=y.a.div(G()),te=y.a.div(W()),ae=y.a.div(U());function re(){var e=Object(E.a)(["\n  width: 100%;\n  height: 25px;\n  border: none;\n  padding: 0 10px;\n"]);return re=function(){return e},e}function ce(){var e=Object(E.a)(["\n  margin: 1rem 0;\n  padding: 0 10px;\n"]);return ce=function(){return e},e}var oe=y.a.form(ce()),ie=y.a.select(re()),le=function(){var e=Object(f.g)((function(e){return e})),n=e.tasks,t=e.fetching,c=e.overlay,o=Object(f.f)((function(e){return e})),i=o.getTasks,l=o.setSelectedTask;return Object(a.useEffect)((function(){l("")}),[c]),r.a.createElement(oe,null,r.a.createElement(ie,{onClick:function(e){0===n.length&&i()},onInput:function(e){return l(e.target.value)},name:"tasks",id:"task-select"},r.a.createElement("option",{value:""},"Select a task:"),t&&r.a.createElement("option",{value:""},"Loading..."),n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.title)}))))};function ue(){var e=Object(E.a)(["\ndisplay: inline:block;\nmargin: auto\n"]);return ue=function(){return e},e}function se(){var e=Object(E.a)(["\n  display: flex;\n"]);return se=function(){return e},e}var de=y.a.div(se()),fe=y.a.div(ue()),pe=function(){var e=Object(f.g)((function(e){return e})).eventDuration,n=Object(f.f)((function(e){return e})).setEventDuration;return r.a.createElement(r.a.Fragment,null,r.a.createElement(de,null,r.a.createElement(fe,{onClick:function(){return e>.25&&n(e-.25)}},"-"),r.a.createElement(fe,{onClick:function(){return e<7.5&&n(e+.25)}},"+")))};function ge(){var e=Object(E.a)(["\n  font-size: 0.8rem;\n  padding-left: 10px;\n  margin: 0;\n  color: rgba(255, 0, 0, 0.8);\n"]);return ge=function(){return e},e}function me(){var e=Object(E.a)(["\n  height: 5px;\n  appearance: none;\n  background-color: ",";\n  box-shadow: inset 0 3px 10px rgba(0, 0, 0, 0.6);\n  margin: 10px 10px 0 5px;\n"]);return me=function(){return e},e}function ve(){var e=Object(E.a)(["\n  display: grid;\n  grid-template-columns: auto 30px 80px;\n"]);return ve=function(){return e},e}function be(){var e=Object(E.a)(["\n  background-color: transparent;\n  height: 25px;\n  width: 90%;\n  border: none;\n  margin-left: 5px;\n  padding: 0 5px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n\n  &:-webkit-autofill {\n    -webkit-transition-delay: 99999s;\n  }\n"]);return be=function(){return e},e}function he(){var e=Object(E.a)(["\n  color: ",";\n  grid-row: span 2;\n  margin: auto;\n  padding: 10px;\n  height: 20px;\n  width: 20px;\n  border: 1px solid ",";\n  border-radius: 50%;\n\n  & svg {\n    color: inherit;\n    font-size: inherit;\n    vertical-align: inherit;\n  }\n"]);return he=function(){return e},e}function Ee(){var e=Object(E.a)(["\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: auto 50px;\n  grid-template-rows: auto auto;\n  grid-gap: 10px;\n  padding: 0 10px;\n"]);return Ee=function(){return e},e}function ye(){var e=Object(E.a)(["\n  margin: auto;\n  top: 31vh;\n  position: relative;\n  padding: 10px 0;\n  background-color: #ddd;\n  box-shadow: ",";\n"]);return ye=function(){return e},e}function je(){var e=Object(E.a)(["\n  position: fixed;\n  width: ","px;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-color: rgba(0, 0, 0, 0.7);\n"]);return je=function(){return e},e}var xe=Math.max(document.documentElement.clientWidth,window.innerWidth||0),Oe=y.a.div(je(),xe),ke=y.a.div(ye(),j),we=y.a.form(Ee()),De=y.a.div(he(),(function(e){return e.eventTitle?"black":"grey"}),(function(e){return e.eventTitle?"black":"grey"})),Se=y.a.input(be()),Te=y.a.div(ve()),Fe=y.a.input(me(),"#ddd"),Ce=y.a.p(ge()),Ye=function(e){var n=Object(a.useState)(!1),t=Object(s.a)(n,2),c=t[0],o=t[1],i=Object(f.g)((function(e){return e})),l=i.eventTitle,u=i.eventDuration,d=i.selectedTask,p=Object(f.f)((function(e){return e})),m=p.setEventTitle,v=p.setEventDuration,b=p.updateEvent,h=p.setInitialDayValues;Object(a.useEffect)((function(){return m(e.event.title),v(e.event.duration),function(){h()}}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe,{className:"background",onClick:function(n){return n.target.classList.value.includes("background")&&e.setEdit(!1)}},r.a.createElement(ke,null,r.a.createElement(we,null,r.a.createElement("div",null,r.a.createElement(Se,{type:"text",placeholder:"Title",value:l,onChange:function(e){return m(e.target.value)}})),r.a.createElement(De,{eventTitle:l?l.toString():void 0},r.a.createElement(g.e,{onClick:function(n){return function(){var n=[{propName:"title",propValue:l},{propName:"duration",propValue:u}];d.length>0&&n.push({propName:"task",propValue:d}),console.log("payload",n),n[0].propValue.length>0?(b({eventId:e.event._id,payload:n}),e.setEdit(!1),h()):o(!0)}()}})),r.a.createElement(Te,null,r.a.createElement(Fe,{type:"range",step:"0.25",min:"0.25",max:"7.5",value:u,onChange:function(e){return v(parseFloat(e.target.value))}}),u,r.a.createElement(pe,null))),!e.event.task&&r.a.createElement(le,null),c&&r.a.createElement(Ce,null,"Title field is mandatory!"))))},Ie=function(e){var n=Object(a.useState)(!1),t=Object(s.a)(n,2),c=t[0],o=t[1],l=Object(f.g)((function(e){return e})).tasks,u=Object(f.f)((function(e){return e})),d=u.getTasks,p=u.deleteDay,m=e.event.task,v=l.find((function(e){return e._id===m})),b=v&&"/projects/".concat(v.project,"/tasks/").concat(v._id);return Object(a.useEffect)((function(){m&&m.length>0&&0===l.length&&d()}),[]),r.a.createElement(K,null,r.a.createElement(Q,null,r.a.createElement(g.j,{onClick:function(){window.confirm("Are you sure you want to delete this event?")&&p({dayId:e.event.day,eventId:e.event._id})}}),r.a.createElement(Z,null,e.event.title)," ",r.a.createElement(Z,{small:!0},Y()(e.event.date).format("MMM Do"))),r.a.createElement(te,null,r.a.createElement("span",null,e.event.duration," "),"h"),r.a.createElement(ne,null,r.a.createElement(g.f,{onClick:function(){return o(!0)}}),c&&r.a.createElement(Ye,{event:e.event,setEdit:o})),r.a.createElement(ee,null,e.event.booked?r.a.createElement(g.h,null):r.a.createElement(g.a,null),r.a.createElement(g.k,null),r.a.createElement(Z,{small:!0},v&&r.a.createElement(i.b,{to:b}," ",v.title," "))),r.a.createElement(ae,null,!e.event.booked&&r.a.createElement(g.b,{onClick:function(){return console.log("Clicked Book!")}})))},Pe=function(e){var n=Object(f.g)((function(e){return e})),t=n.singleDay,c=n.fetching,o=n.days,i=Object(f.f)((function(e){return e})).getSingleDay;console.log("<Day>",t);var l=e.match.params.dayId;return Object(a.useEffect)((function(){/^[a-f\d]{24}$/i.test(l)&&i({id:l})}),[o]),/^[a-f\d]{24}$/i.test(l)?c?r.a.createElement("div",null,"Fetching details..."):t.events?r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{day:t.day}),r.a.createElement(R,null),t.events.map((function(e){return r.a.createElement(Ie,{key:e._id,event:e})}))):null:r.a.createElement("div",null,"Day not found.")},_e=function(){var e=Object(f.g)((function(e){return e})),n=e.singleDay,t=e.days,c=e.dayEnd,o=e.fetching,i=Object(f.f)((function(e){return e})).getSingleDay;return Object(a.useEffect)((function(){i({start:c})}),[t]),o&&!n._id?r.a.createElement("div",null,"Loading data..."):n.events?r.a.createElement(r.a.Fragment,null,n.events.map((function(e){return r.a.createElement(Ie,{key:e._id,event:e})}))):null},Me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement(_e,null))};function Ne(){var e=Object(E.a)(["\n  background: ",";\n  box-shadow: ",";\n  text-align: center;\n\n  img {\n    height: 35px;\n    border-radius: 50%;\n    vertical-align: middle;\n  }\n"]);return Ne=function(){return e},e}var Le=y.a.section(Ne(),"#ddd",j),Ae=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Le,null,r.a.createElement("img",{src:e.user.avatar_url,alt:"Profile pic"})))};function Be(){var e=Object(E.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  box-shadow: ",";\n  z-index: 1;\n\n  > * > a {\n    background: ",";\n    display: block;\n    padding: 0.8rem;\n    text-align: center;\n    color: ",";\n  }\n"]);return Be=function(){return e},e}var Ve=y.a.ul(Be(),j,"#ddd","#333");var ze=function(){return r.a.createElement(p.b.Provider,{value:{style:{verticalAlign:"middle"}}},r.a.createElement("nav",null,r.a.createElement(Ve,null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},r.a.createElement(g.d,null))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/projects"},r.a.createElement(g.g,null))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/kanban"},r.a.createElement(g.k,null))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/days"},r.a.createElement(g.c,null))))))};function Je(){var e=Object(E.a)(["\n  width: 40px;\n  height: 40px;\n  position: fixed;\n  bottom: 70px;\n  right: 20px;\n\n  div {\n    background: ",";\n    text-align: center;\n    border-radius: 50px;\n    box-shadow: ",";\n    color: ",";\n  }\n"]);return Je=function(){return e},e}var Re=y.a.aside(Je(),"#ddd",j,"#333"),Ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b.Provider,{value:{style:{verticalAlign:"middle",height:"2.5em",width:"2.5em"}}},r.a.createElement(i.b,{to:"/clock"},r.a.createElement(Re,null,r.a.createElement("div",null,r.a.createElement(g.i,null))))))};function We(){var e=Object(E.a)(["\n  width: 40px;\n  height: 40px;\n  position: fixed;\n  bottom: 140px;\n  right: 20px;\n\n  div {\n    background: ",";\n    text-align: center;\n    border-radius: 50px;\n    box-shadow: ",";\n    color: ",";\n    width: 40px;\n    height: 40px;\n  }\n"]);return We=function(){return e},e}var Ge=y.a.aside(We(),"#ddd",j,"#333");function $e(){var e=Object(E.a)(["\n  top: 31vh;\n  position: relative;\n  padding: 10px 0;\n  background-color: ",";\n  box-shadow: ",";\n"]);return $e=function(){return e},e}function He(){var e=Object(E.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.7);\n"]);return He=function(){return e},e}var Xe=y.a.div(He()),qe=y.a.div($e(),"#ddd",j);function Ke(){var e=Object(E.a)(["\n  color: ",";\n  grid-row: span 2;\n  margin: auto;\n  padding: 10px;\n  height: 20px;\n  width: 20px;\n  border: 1px solid ",";\n  border-radius: 50%;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(E.a)(["\n  height: 5px;\n  appearance: none;\n  background-color: ",";\n  box-shadow: inset 0 3px 10px rgba(0, 0, 0, 0.6);\n  margin: 10px 10px 0 5px;\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(E.a)(["\n  display: grid;\n  grid-template-columns: auto 30px 80px;\n"]);return Ze=function(){return e},e}function en(){var e=Object(E.a)(["\n  background-color: ",";\n  height: 25px;\n  border: none;\n  margin-left: 5px;\n  padding: 0 5px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n"]);return en=function(){return e},e}function nn(){var e=Object(E.a)(["\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: auto 50px;\n  grid-template-rows: auto auto;\n  grid-gap: 10px;\n  padding: 0 10px;\n"]);return nn=function(){return e},e}var tn=y.a.form(nn()),an=y.a.input(en(),"#ddd"),rn=y.a.div(Ze()),cn=y.a.input(Qe(),"#ddd"),on=y.a.div(Ke(),(function(e){return e.title?"black":"grey"}),(function(e){return e.title?"black":"grey"})),ln=function(){var e=Object(f.g)((function(e){return e})),n=e.eventTitle,t=e.eventDuration,c=e.selectedTask,o=Object(f.f)((function(e){return e})),i=o.setEventTitle,l=o.setEventDuration,u=o.submitDay,s=o.setInitialDayValues,d=n.length>0;Object(a.useEffect)((function(){return function(){s()}}),[]);return r.a.createElement(tn,{onSubmit:function(e){return e.preventDefault()}},r.a.createElement(an,{onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Enter Event Title:",value:n}),r.a.createElement(on,{title:d?d.toString():void 0},r.a.createElement(g.e,{onClick:function(e){return function(e){e.preventDefault();var a={day:Y()().format("YYYY-MM-DD"),task:c||"",title:n,duration:t};if(!d)return null;u(a),s()}(e)}})),r.a.createElement(rn,null,r.a.createElement(cn,{onChange:function(e){return l(parseFloat(e.target.value))},type:"range",placeholder:"Event duration",value:t,step:"0.25",min:"0.25",max:"7.5"}),t,r.a.createElement(pe,null)))},un=function(e){var n=Object(f.g)((function(e){return e})).overlay;return console.log("props.childerb",e),n?r.a.createElement(Xe,null,r.a.createElement(qe,null,r.a.createElement(ln,null),r.a.createElement(le,null))):null},sn=function(){var e=Object(f.g)((function(e){return e})).tasks,n=Object(f.f)((function(e){return e})),t=n.getTasks,c=n.toggleOverlay;Object(a.useEffect)((function(){0===e.length&&t()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b.Provider,{value:{style:{verticalAlign:"middle",height:"1.5em",width:"1.5em",position:"relative",top:"8px",left:"-2px"}}},r.a.createElement(Ge,null,r.a.createElement("div",null,r.a.createElement(g.e,{onClick:function(){return c(),r.a.createElement(un,{test1:"test2"})}})))))},dn=t(21);function fn(){var e=Object(E.a)(["\n  font-size: 0.8rem;\n  padding-left: 10px;\n  margin: 0;\n  color: ",";\n"]);return fn=function(){return e},e}function pn(){var e=Object(E.a)(["\n  background-color: transparent;\n  height: 25px;\n  width: 90%;\n  border: none;\n  margin-left: 5px;\n  padding: 0 5px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n\n  &:-webkit-autofill {\n    -webkit-transition-delay: 99999s;\n  }\n"]);return pn=function(){return e},e}function gn(){var e=Object(E.a)(["\n  color: ",";\n  grid-row: span 2;\n  margin: auto;\n  padding: 10px;\n  height: 20px;\n  width: 20px;\n  border: 1px solid\n    ",";\n  border-radius: 50%;\n"]);return gn=function(){return e},e}function mn(){var e=Object(E.a)(["\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: auto 50px;\n  grid-template-rows: auto auto;\n  grid-gap: 10px;\n  padding: 0 10px;\n"]);return mn=function(){return e},e}function vn(){var e=Object(E.a)(["\n  margin: auto;\n  top: 31vh;\n  position: relative;\n  padding: 10px 0;\n  background-color: #ddd;\n  box-shadow: ",";\n"]);return vn=function(){return e},e}function bn(){var e=Object(E.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.7);\n"]);return bn=function(){return e},e}var hn=y.a.div(bn()),En=y.a.div(vn(),j),yn=y.a.form(mn()),jn=y.a.div(gn(),(function(e){return e.email&&e.password&&!e.apiError?"black":"grey"}),(function(e){return e.email&&e.password&&!e.apiError?"black":"grey"})),xn=y.a.input(pn()),On=y.a.p(fn(),(function(e){return"true"===e.loading?"inherit":"rgba(255, 0, 0, 0.8)"})),kn=function(e){var n=e.setLoggedInStatus,t=e.setUser,c=e.apiError,o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],d=i[1],f=Object(a.useState)(""),p=Object(s.a)(f,2),m=p[0],v=p[1],b=Object(a.useState)(!1),h=Object(s.a)(b,2),E=h[0],y=h[1],j=Object(a.useState)(!1),x=Object(s.a)(j,2),O=x[0],k=x[1];return r.a.createElement(hn,null,r.a.createElement(En,null,r.a.createElement(yn,null,r.a.createElement("div",null,r.a.createElement(xn,{type:"email",placeholder:"Email",value:l,onChange:function(e){return d(e.target.value)}})),r.a.createElement(jn,{email:l?l.toString():void 0,password:m?m.toString():void 0,apiError:c?c.toString():void 0},r.a.createElement(g.e,{onClick:function(e){return!c&&function(e){var a,r;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e.preventDefault(),k(!1),y(!0),a={email:l,password:m},o.t0=l&&m&&!c,!o.t0){o.next=9;break}return o.next=8,u.a.awrap(Object(dn.logInCall)(a));case 8:o.t0=o.sent;case 9:(r=o.t0).error&&(k(!0),y(!1)),r.user&&(t(r.user),n(!0),y(!1));case 12:case"end":return o.stop()}}))}(e)}})),r.a.createElement("div",null,r.a.createElement(xn,{type:"password",placeholder:"Password",value:m,onChange:function(e){return v(e.target.value)}})),E&&r.a.createElement(On,{loading:E?E.toString():void 0},"Loading..."),O&&r.a.createElement(On,null,"Incorrect credentials, please try again."),c&&r.a.createElement(On,null,"Service is currently unavailable, please try again later."))))},wn=t(19).pmBackend,Dn=wn.api,Sn=wn.apiversion,Tn=t(19).pmBackend,Fn=Tn.api,Cn=Tn.apiversion,Yn=t(28),In=t(19).pmBackend,Pn=In.api,_n=In.apiversion,Mn=function(e){return new Promise((function(n,t){fetch("".concat(Pn,"/").concat(_n,"/days"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e),credentials:"include"}).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return t(e)}))}))},Nn=function(e){return new Promise((function(n,t){fetch("".concat(Pn,"/").concat(_n,"/days?").concat(e),{credentials:"include"}).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return t(e)}))}))},Ln=function(e){var n=e.start,t=void 0===n?"":n,a=e.id,r=void 0===a?"":a;return new Promise((function(e,n){fetch("".concat(Pn,"/").concat(_n,"/days?start=").concat(t,"&id=").concat(r),{credentials:"include"}).then((function(e){return e.json()})).then((function(n){return e(n)})).catch((function(e){return n(e)}))}))},An=function(e,n){return new Promise((function(t,a){fetch("".concat(Pn,"/").concat(_n,"/days/").concat(e),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify(n),credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return a(e)}))}))},Bn=function(e,n){return new Promise((function(t,a){fetch("".concat(Pn,"/").concat(_n,"/days/").concat(e,"/").concat(n),{method:"DELETE",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return a(e)}))}))},Vn=Object(f.d)({projects:[],tasks:[],selectedTask:"",dayStart:Y()().subtract(1,"week").format("YYYY-MM-DD"),dayEnd:Y()().format("YYYY-MM-DD"),eventTitle:"",eventDuration:.25,dayRangeError:!1,days:[],singleDay:{},fetching:!1,overlay:!1,getProjects:Object(f.e)((function(e){return function(e){var n,t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.toggleFetching(),a.prev=1,a.next=4,u.a.awrap(new Promise((function(e,n){fetch("".concat(Dn,"/").concat(Sn,"/projects"),{credentials:"include"}).then((function(e){return e.json()})).then((function(n){return e(n)})).catch((function(e){return n(e)}))})));case 4:n=a.sent,t=n.projects,e.setProjects(t),e.toggleFetching(),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),e.toggleFetching(),console.warn(a.t0);case 14:case"end":return a.stop()}}),null,null,[[1,10]])}(e)})),getTasks:Object(f.e)((function(e){return function(e){var n,t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.toggleFetching(),a.prev=1,a.next=4,u.a.awrap(new Promise((function(e,n){fetch("".concat(Fn,"/").concat(Cn,"/tasks"),{credentials:"include"}).then((function(e){return e.json()})).then((function(n){return e(n)})).catch((function(e){return n(e)}))})));case 4:n=a.sent,t=n.tasks,e.setTasks(t),e.toggleFetching(),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),e.toggleFetching(),console.warn(a.t0);case 14:case"end":return a.stop()}}),null,null,[[1,10]])}(e)})),getDays:Object(f.e)((function(e,n){return function(e,n){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.toggleFetching(),a.prev=1,a.next=4,u.a.awrap(Nn(n));case 4:(t=a.sent).error||e.setDays(t.days),e.toggleFetching(),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),e.toggleFetching(),console.warn(a.t0);case 13:case"end":return a.stop()}}),null,null,[[1,9]])}(e,n)})),submitDay:Object(f.e)((function(e,n){return function(e,n){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.toggleFetching(),a.prev=1,a.next=4,u.a.awrap(Mn(n));case 4:(t=a.sent).error||e.setUpdatedDay(t.day),e.toggleFetching(),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),e.toggleFetching(),console.warn(a.t0);case 13:case"end":return a.stop()}}),null,null,[[1,9]])}(e,n)})),getSingleDay:Object(f.e)((function(e,n){return function(e,n){var t,a,r;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=n.start,a=n.id,e.toggleFetching(),c.prev=2,c.next=5,u.a.awrap(Ln({start:t,id:a}));case 5:(r=c.sent).error||e.setSingleDay(r.days),"Day not found."!==r.message&&"No day entries found."!==r.message||e.setSingleDay({}),e.toggleFetching(),c.next=15;break;case 11:c.prev=11,c.t0=c.catch(2),e.toggleFetching(),console.warn(c.t0);case 15:case"end":return c.stop()}}),null,null,[[2,11]])}(e,{start:n.start,id:n.id})})),updateEvent:Object(f.e)((function(e,n){return function(e,n){var t,a,r;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=n.eventId,a=n.payload,e.toggleFetching(),c.prev=2,c.next=5,u.a.awrap(An(t,a));case 5:r=c.sent,console.log("res",r),r.error?e.toggleFetching():(e.toggleFetching(),e.getSingleDay({start:Y()().format("YYYY-MM-DD")})),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(2),e.toggleFetching(),console.warn(c.t0);case 14:case"end":return c.stop()}}),null,null,[[2,10]])}(e,{eventId:n.eventId,payload:n.payload})})),deleteDay:Object(f.e)((function(e,n){return function(e,n){var t,a,r;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=n.dayId,a=n.eventId,e.toggleFetching(),c.prev=2,c.next=5,u.a.awrap(Bn(t,a));case 5:(r=c.sent).error||e.setDeletedDay(r.day),e.toggleFetching(),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(2),e.toggleFetching(),console.warn(c.t0);case 14:case"end":return c.stop()}}),null,null,[[2,10]])}(e,n)})),getComputedDay:Object(f.c)((function(e){return function(e){var n=e.singleDay._id&&e.singleDay.events.length||0,t=e.singleDay._id&&e.singleDay.events.filter((function(e){return e.booked})).length||0,a=e.singleDay._id&&e.singleDay.events.reduce((function(e,n){return e+n.duration}),0)||0;return[n,t,a,7.5-a]}(e)})),setProjects:Object(f.b)((function(e,n){return function(e,n){e.projects=n}(e,n)})),setTasks:Object(f.b)((function(e,n){return function(e,n){e.tasks=n}(e,n)})),setSelectedTask:Object(f.b)((function(e,n){return function(e,n){e.selectedTask=n}(e,n)})),setDayStart:Object(f.b)((function(e,n){return function(e,n){e.dayStart=n}(e,n)})),setDayEnd:Object(f.b)((function(e,n){return function(e,n){e.dayEnd=n}(e,n)})),setDayRangeError:Object(f.b)((function(e,n){return function(e,n){e.dayRangeError=n}(e,n)})),setEventTitle:Object(f.b)((function(e,n){return function(e,n){e.eventTitle=n}(e,n)})),setEventDuration:Object(f.b)((function(e,n){return function(e,n){e.eventDuration=n}(e,n)})),setDays:Object(f.b)((function(e,n){return function(e,n){e.days=n}(e,n)})),setUpdatedDay:Object(f.b)((function(e,n){return function(e,n){var t=Object(Yn.a)(e.days),a=t.findIndex((function(e){return e._id===n._id}));a>-1?(t.splice(a,1),t.push(n),t.sort((function(e,n){return n.date-e.date})),e.days=t):(t.push(n),t.sort((function(e,n){return n.date-e.date})),e.days=t)}(e,n)})),setSingleDay:Object(f.b)((function(e,n){return function(e,n){e.singleDay=n}(e,n)})),setDeletedDay:Object(f.b)((function(e,n){return function(e,n){var t=Object(Yn.a)(e.days),a=t.findIndex((function(e){return e._id===n._id}));t.splice(a,1),t.sort((function(e,n){return n.date-e.date})),e.days=t}(e,n)})),setInitialDayValues:Object(f.b)((function(e){return function(e){e.eventTitle="",e.eventDuration=.25,e.selectedTask="",e.dayStart=Y()().subtract(1,"week").format("YYYY-MM-DD"),e.dayEnd=Y()().format("YYYY-MM-DD")}(e)})),toggleFetching:Object(f.b)((function(e){e.fetching=!e.fetching})),toggleOverlay:Object(f.b)((function(e){e.overlay=!e.overlay}))}),zn=function(){var e=Object(a.useState)(null),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)({}),i=Object(s.a)(o,2),l=i[0],p=i[1],g=Object(a.useState)(!1),m=Object(s.a)(g,2),v=m[0],b=m[1];return Object(a.useEffect)((function(){!function(){var e;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(Object(dn.checkAuthCall)());case 3:(e=n.sent).user?(c(!0),p(e.user)):e.error&&(c(!1),p({})),n.next=13;break;case 7:n.prev=7,n.t0=n.catch(0),console.warn(n.t0),c(!1),p({}),b(!0);case 13:case"end":return n.stop()}}),null,null,[[0,7]])}()}),[]),null===t?r.a.createElement(hn,null):t?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,{user:l}),r.a.createElement(ze,null),r.a.createElement(d.c,null,r.a.createElement(f.a,{store:Vn},r.a.createElement(d.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(w,Object.assign({},e,{user:l}))}}),r.a.createElement(d.a,{exact:!0,path:"/projects",component:D}),r.a.createElement(d.a,{exact:!0,path:"/projects/:projectId",component:S}),r.a.createElement(d.a,{exact:!0,path:"/projects/:projectId/tasks",component:T}),r.a.createElement(d.a,{exact:!0,path:"/projects/:projectId/tasks/:taskId",component:F}),r.a.createElement(d.a,{exact:!0,path:"/kanban",component:T}),r.a.createElement(d.a,{exact:!0,path:"/days",component:_}),r.a.createElement(d.a,{exact:!0,path:"/days/:dayId",component:Pe}),r.a.createElement(d.a,{exact:!0,path:"/clock",component:Me}),r.a.createElement(un,{test1:"test1"}),r.a.createElement(sn,null))),r.a.createElement(Ue,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(kn,{setLoggedInStatus:c,setUser:p,apiError:v}))};o.a.render(r.a.createElement(i.a,null,r.a.createElement(zn,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.9f5b50b5.chunk.js.map