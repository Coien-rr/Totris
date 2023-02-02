import{_ as v,u as S,o as d,c as _,a as e,t as h,b as u,d as N,p as x,e as b,f as U,F as C,r as I,n as T,g as k,h as g,w,i as y,v as $,j as G,k as A,l as P,m as f,q as D,s as V}from"./index-9e9d4060.js";const H=t=>(x("data-v-781ec912"),t=t(),b(),t),z={id:"tagHeader"},O=H(()=>e("button",{id:"show",class:"button"},[e("span",{class:"icon is-small"},[e("i",{class:"fa-solid fa-check-double"})])],-1)),j={id:"taskMsg"},q={__name:"ActiveSection",setup(t){const o=S();return(a,s)=>(d(),_("section",z,[O,e("p",j,[e("b",null,h(u(o).getTaskCount),1),N(" ACTIVE TASKS 🎯 ")])]))}},E=v(q,[["__scopeId","data-v-781ec912"]]);const M={class:"is-flex is-11 is-offset-1 categories"},W=["onClick"],F={__name:"CategoryGroup",setup(t){const o=U();return(a,s)=>(d(),_("div",M,[(d(!0),_(C,null,I(u(o).categories,n=>(d(),_("div",{key:n.id,class:T(["category button",{active:n.isActive}]),onClick:r=>u(o).switchGroup(n)},h(n.icon)+" "+h(n.name),11,W))),128))]))}},K=v(F,[["__scopeId","data-v-1ca2d090"]]);const L=t=>(x("data-v-b018fbeb"),t=t(),b(),t),R={class:"task-card-container"},Y={class:"task-card-content is-flex is-flex-direction-row"},J=L(()=>e("span",{class:"icon has-text-success"},[e("i",{id:"icon",class:"fas fa-check-square"})],-1)),Q=[J],X={class:"task-card-todo"},Z={class:"task-card-info"},ee={__name:"TaskCard",props:{item:Object},emits:["updateTodo","doneTask"],setup(t,{emit:o}){const a=t,s=k(()=>a.item.priority===1),n=k(()=>a.item.priority===2),r=k(()=>a.item.priority===3),l=g(a.item.todo);w(l,i=>{o("updateTodo",a.item.id,i)});const p=()=>{o("doneTask",a.item.id)};return(i,c)=>(d(),_("div",R,[e("div",Y,[e("div",{class:"task-card-icon",onClick:p},Q),e("div",X,[y(e("input",{"onUpdate:modelValue":c[0]||(c[0]=m=>l.value=m),type:"text",class:"task-card-input"},null,512),[[$,l.value,void 0,{lazy:!0}]])])]),e("div",Z,[e("i",{class:T(["fa-solid fa-circle-exclamation priorIcon",{"prior-normal":u(s),"prior-Urgent":u(n),"prior-immediate":u(r)}])},null,2),N(" ⏰ "+h(t.item.deadline),1)])]))}},te=v(ee,[["__scopeId","data-v-b018fbeb"]]);const se={class:"card-header"},oe={class:"card-header-icon is-inline-flex"},ae={class:"card-header-content is-flex is-flex-direction-column"},ne={class:"card-header-name is-inline-flex"},ie={class:"card-header-count is-flex"},ce={__name:"GroupCardHeader",props:{taskCount:Number,groupName:String,groupIcon:String},emits:["groupNameUpdate"],setup(t,{emit:o}){const s=g(t.groupName);return w(()=>s.value,n=>{o("groupNameUpdate",n)}),(n,r)=>(d(),_("div",se,[e("div",oe,h(t.groupIcon),1),e("div",ae,[e("div",ne,[y(e("input",{"onUpdate:modelValue":r[0]||(r[0]=l=>s.value=l),type:"text",class:"card-header-input"},null,512),[[$,s.value,void 0,{lazy:!0}]])]),e("div",ie,h(t.taskCount)+" tasks 🧩 ",1)])]))}},de=v(ce,[["__scopeId","data-v-874421e3"]]);const re={class:"dropdown-trigger"},le={class:"prior-trigger","aria-haspopup":"true","aria-controls":"dropdown-menu"},_e={id:"dropdown-menu",class:"dropdown-menu prior-menu",role:"menu"},ue={class:"dropdown-content"},pe=["onClick"],me={__name:"selectPriority",props:["reset"],emits:["selectPriority"],setup(t,{emit:o}){const a=t,s=g(!1),n=g("#10B981");w(()=>a.reset,()=>{n.value="#10B981"});const r=[{id:1,iconColor:"rgb(0, 153, 255)",content:"normal"},{id:2,iconColor:"rgb(255, 153, 0)",content:"urgent"},{id:3,iconColor:"rgb(255, 0, 0)",content:"immediate"}],l=p=>{s.value=!1,n.value=p.iconColor,o("selectPriority",p.id)};return(p,i)=>(d(),_("div",{class:T(["dropdown is-hoverable",{"is-active":s.value}]),onClick:i[0]||(i[0]=A(()=>{},["stop"]))},[e("div",re,[e("div",le,[e("i",{class:"fa-solid fa-circle-exclamation",style:G({color:n.value})},null,4)])]),e("div",_e,[e("div",ue,[(d(),_(C,null,I(r,c=>e("a",{key:c.id,class:"dropdown-item prior-item",onClick:m=>l(c)},[e("i",{class:"fa-solid fa-circle-exclamation",style:G({color:c.iconColor})},null,4),N(" "+h(c.content.toUpperCase()),1)],8,pe)),64))])])],2))}},ve=v(me,[["__scopeId","data-v-4be7de6e"]]);const he=t=>(x("data-v-ddbc3b40"),t=t(),b(),t),ke={class:"task-card-container"},fe={class:"task-card-content is-flex is-flex-direction-row"},ge=he(()=>e("div",{class:"task-card-icon"},[e("i",{id:"addTaskIcon",class:"fa-solid fa-rocket"})],-1)),ye={class:"add-card-bticon"},$e={class:"task-card-info is-flex is-flex-direction-row"},xe={class:"task-card-info-prior"},be={class:"task-card-info-deadline"},Ce={id:"deadline-select",class:"control"},Ie={__name:"addTaskCard",props:["groupID"],setup(t){const o=t,a=S(),s=P({todo:"",priority:1,deadline:`${new Date().toISOString().slice(0,16)}`,groupID:o.groupID}),n=g(!0),r=k(()=>s.todo==="");w(()=>o.groupID,()=>{s.groupID=o.groupID});const l=()=>{r.value||(a.addTask(s),s.todo="",s.priority=1,s.deadline=`${new Date().toISOString().slice(0,16)}`,n.value=!n.value)},p=i=>{s.priority=i};return(i,c)=>(d(),_("div",ke,[e("div",fe,[ge,y(e("input",{"onUpdate:modelValue":c[0]||(c[0]=m=>s.todo=m),class:"input add-card-todo",type:"text",placeholder:"Add Task"},null,512),[[$,s.todo,void 0,{trim:!0}]]),e("div",ye,[e("i",{class:T(["fa-solid fa-square-plus addButton",{"inactive-addButton":u(r)}]),onClick:l},null,2)])]),e("div",$e,[e("div",xe,[f(ve,{reset:n.value,onSelectPriority:p},null,8,["reset"])]),e("div",be,[e("div",Ce,[y(e("input",{id:"deadlineInput","onUpdate:modelValue":c[1]||(c[1]=m=>s.deadline=m),class:"input",type:"datetime-local"},null,512),[[$,s.deadline]])])])])]))}},Te=v(Ie,[["__scopeId","data-v-ddbc3b40"]]);const we={class:"card"},Se={class:"card-content"},Ne={__name:"GroupCard",props:{item:Object},emits:["groupNameUpdate"],setup(t,{emit:o}){const a=t,s=S();k(s.tasks.sort((i,c)=>c.priority-i.priority));const n=k(()=>s.getTaskCountByGroupID(a.item.id)),r=i=>{o("groupNameUpdate",a.item.id,i)},l=(i,c)=>{s.updateTaskByID(i,c)},p=i=>{s.removeTaskByID(i)};return(i,c)=>(d(),_("div",we,[f(de,{"task-count":u(n),"group-name":a.item.name,"group-icon":a.item.icon,onGroupNameUpdate:r},null,8,["task-count","group-name","group-icon"]),e("div",Se,[(d(!0),_(C,null,I(u(s).getTaskByGroupID(a.item.id),m=>(d(),D(te,{key:m.id,item:m,onUpdateTodo:l,onDoneTask:p},null,8,["item"]))),128)),f(Te,{"group-i-d":a.item.id},null,8,["group-i-d"])])]))}},Ge=v(Ne,[["__scopeId","data-v-69b1f556"]]);const B=t=>(x("data-v-d7ae4daa"),t=t(),b(),t),De={id:"tagHeader",class:"is-flex"},Be=B(()=>e("button",{id:"wpButton",class:"button"},[e("span",{class:"icon is-small"},[e("i",{class:"fa-solid fa-box-archive"})])],-1)),Ue=B(()=>e("span",{class:"icon is-small"},[e("i",{class:"fa-solid fa-plus"})],-1)),Ae=[Ue],Pe={class:"group is-flex"},Ve={__name:"Workplace",setup(t){const o=V(),a=()=>{if(o.groups.length>=4){alert("You can only have 4 groups!");return}o.addNewGroup()},s=(n,r)=>{o.updateGroupNameById(n,r)};return(n,r)=>(d(),_("div",null,[e("header",De,[Be,f(K),e("div",{class:"addNewGroup"},[e("button",{class:"button is-primary",onClick:a},Ae)])]),e("main",null,[e("section",Pe,[(d(!0),_(C,null,I(u(o).groups,l=>(d(),D(Ge,{key:l.id,item:l,onGroupNameUpdate:s},null,8,["item"]))),128))])])]))}},He=v(Ve,[["__scopeId","data-v-d7ae4daa"]]);const ze={class:"App container is-fluid"},Oe={class:"columns"},je={class:"column is-2 active"},qe={class:"column is-10 is-offset-2 workplace"},Ee={__name:"Dashboard",setup(t){return(o,a)=>(d(),_("div",ze,[e("section",Oe,[e("div",je,[f(E)]),e("div",qe,[f(He)])])]))}},We=v(Ee,[["__scopeId","data-v-596ccd11"]]);export{We as default};
