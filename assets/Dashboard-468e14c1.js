import{_ as v,u as S,a as D,w as y,o as d,c as _,b as e,t as g,d as p,e as N,p as C,f as I,g as U,F as b,r as w,n as T,h as k,i as f,j as $,v as x,k as G,l as P,m as V,q as h,s as B,x as H,y as z}from"./index-8c5fd0a0.js";const M=t=>(C("data-v-46237734"),t=t(),I(),t),O={id:"tagHeader"},j=M(()=>e("button",{id:"show",class:"button"},[e("span",{class:"icon is-small"},[e("i",{class:"fa-solid fa-check-double"})])],-1)),q={id:"taskMsg"},E={__name:"ActiveSection",setup(t){const s=S(),a=D();return y(()=>s.getTaskCount,async()=>{await a.storeGroup()}),(o,n)=>(d(),_("section",O,[j,e("p",q,[e("b",null,g(p(s).getTaskCount),1),N(" ACTIVE TASKS 🎯 ")])]))}},W=v(E,[["__scopeId","data-v-46237734"]]);const F={class:"is-flex is-11 is-offset-1 categories"},K=["onClick"],L={__name:"CategoryGroup",setup(t){const s=U();return(a,o)=>(d(),_("div",F,[(d(!0),_(b,null,w(p(s).categories,n=>(d(),_("div",{key:n.id,class:T(["category button",{active:n.isActive}]),onClick:r=>p(s).switchCategory(n.id)},g(n.icon)+" "+g(n.name),11,K))),128))]))}},R=v(L,[["__scopeId","data-v-dbf9ead3"]]);const Y=t=>(C("data-v-b018fbeb"),t=t(),I(),t),J={class:"task-card-container"},Q={class:"task-card-content is-flex is-flex-direction-row"},X=Y(()=>e("span",{class:"icon has-text-success"},[e("i",{id:"icon",class:"fas fa-check-square"})],-1)),Z=[X],ee={class:"task-card-todo"},te={class:"task-card-info"},oe={__name:"TaskCard",props:{item:Object},emits:["updateTodo","doneTask"],setup(t,{emit:s}){const a=t,o=k(()=>a.item.priority===1),n=k(()=>a.item.priority===2),r=k(()=>a.item.priority===3),l=f(a.item.todo);y(l,i=>{s("updateTodo",a.item.id,i)});const u=()=>{s("doneTask",a.item.id)};return(i,c)=>(d(),_("div",J,[e("div",Q,[e("div",{class:"task-card-icon",onClick:u},Z),e("div",ee,[$(e("input",{"onUpdate:modelValue":c[0]||(c[0]=m=>l.value=m),type:"text",class:"task-card-input"},null,512),[[x,l.value,void 0,{lazy:!0}]])])]),e("div",te,[e("i",{class:T(["fa-solid fa-circle-exclamation priorIcon",{"prior-normal":p(o),"prior-Urgent":p(n),"prior-immediate":p(r)}])},null,2),N(" ⏰ "+g(t.item.deadline),1)])]))}},se=v(oe,[["__scopeId","data-v-b018fbeb"]]);const ae={class:"card-header"},ne={class:"card-header-icon is-inline-flex"},ie={class:"card-header-content is-flex is-flex-direction-column"},ce={class:"card-header-name is-inline-flex"},de={class:"card-header-count is-flex"},re={__name:"GroupCardHeader",props:{taskCount:Number,groupName:String,groupIcon:String},emits:["groupNameUpdate"],setup(t,{emit:s}){const o=f(t.groupName);return y(()=>o.value,n=>{s("groupNameUpdate",n)}),(n,r)=>(d(),_("div",ae,[e("div",ne,g(t.groupIcon),1),e("div",ie,[e("div",ce,[$(e("input",{"onUpdate:modelValue":r[0]||(r[0]=l=>o.value=l),type:"text",class:"card-header-input"},null,512),[[x,o.value,void 0,{lazy:!0}]])]),e("div",de,g(t.taskCount)+" tasks 🧩 ",1)])]))}},le=v(re,[["__scopeId","data-v-874421e3"]]);const _e={class:"dropdown-trigger"},ue={class:"prior-trigger","aria-haspopup":"true","aria-controls":"dropdown-menu"},pe={id:"dropdown-menu",class:"dropdown-menu prior-menu",role:"menu"},me={class:"dropdown-content"},ve=["onClick"],ge={__name:"selectPriority",props:["reset"],emits:["selectPriority"],setup(t,{emit:s}){const a=t,o=f(!1),n=f("#10B981");y(()=>a.reset,()=>{n.value="#10B981"});const r=[{id:1,iconColor:"rgb(0, 153, 255)",content:"normal"},{id:2,iconColor:"rgb(255, 153, 0)",content:"urgent"},{id:3,iconColor:"rgb(255, 0, 0)",content:"immediate"}],l=u=>{o.value=!1,n.value=u.iconColor,s("selectPriority",u.id)};return(u,i)=>(d(),_("div",{class:T(["dropdown is-hoverable",{"is-active":o.value}]),onClick:i[0]||(i[0]=P(()=>{},["stop"]))},[e("div",_e,[e("div",ue,[e("i",{class:"fa-solid fa-circle-exclamation",style:G({color:n.value})},null,4)])]),e("div",pe,[e("div",me,[(d(),_(b,null,w(r,c=>e("a",{key:c.id,class:"dropdown-item prior-item",onClick:m=>l(c)},[e("i",{class:"fa-solid fa-circle-exclamation",style:G({color:c.iconColor})},null,4),N(" "+g(c.content.toUpperCase()),1)],8,ve)),64))])])],2))}},ke=v(ge,[["__scopeId","data-v-4be7de6e"]]);const he=t=>(C("data-v-add117d0"),t=t(),I(),t),fe={class:"task-card-container"},ye={class:"task-card-content is-flex is-flex-direction-row"},$e=he(()=>e("div",{class:"task-card-icon"},[e("i",{id:"addTaskIcon",class:"fa-solid fa-rocket"})],-1)),xe={class:"add-card-bticon"},Ce={class:"task-card-info is-flex is-flex-direction-row"},Ie={class:"task-card-info-prior"},be={class:"task-card-info-deadline"},we={id:"deadline-select",class:"control"},Te={__name:"addTaskCard",props:["groupID"],setup(t){const s=t,a=S(),o=V({todo:"",priority:1,deadline:`${new Date().toISOString().slice(0,16)}`,groupID:s.groupID}),n=f(!0),r=k(()=>o.todo==="");y(()=>s.groupID,()=>{o.groupID=s.groupID});const l=()=>{r.value||(a.addNewTask(o),o.todo="",o.priority=1,o.deadline=`${new Date().toISOString().slice(0,16)}`,n.value=!n.value)},u=i=>{o.priority=i};return(i,c)=>(d(),_("div",fe,[e("div",ye,[$e,$(e("input",{"onUpdate:modelValue":c[0]||(c[0]=m=>o.todo=m),class:"input add-card-todo",type:"text",placeholder:"Add Task"},null,512),[[x,o.todo,void 0,{trim:!0}]]),e("div",xe,[e("i",{class:T(["fa-solid fa-square-plus addButton",{"inactive-addButton":p(r)}]),onClick:l},null,2)])]),e("div",Ce,[e("div",Ie,[h(ke,{reset:n.value,onSelectPriority:u},null,8,["reset"])]),e("div",be,[e("div",we,[$(e("input",{id:"deadlineInput","onUpdate:modelValue":c[1]||(c[1]=m=>o.deadline=m),class:"input",type:"datetime-local"},null,512),[[x,o.deadline]])])])])]))}},Se=v(Te,[["__scopeId","data-v-add117d0"]]);const Ne={class:"card"},Ge={class:"card-content"},De={__name:"GroupCard",props:{item:Object},emits:["groupNameUpdate"],setup(t,{emit:s}){const a=t,o=S();k(o.tasks.sort((i,c)=>c.priority-i.priority));const n=k(()=>o.getTaskCountByGroupID(a.item.id)),r=i=>{s("groupNameUpdate",a.item.id,i)},l=(i,c)=>{o.updateTaskByID(i,c)},u=i=>{o.removeTaskByID(i)};return(i,c)=>(d(),_("div",Ne,[h(le,{"task-count":p(n),"group-name":a.item.name,"group-icon":a.item.icon,onGroupNameUpdate:r},null,8,["task-count","group-name","group-icon"]),e("div",Ge,[(d(!0),_(b,null,w(p(o).getTaskByGroupID(a.item.id),m=>(d(),B(se,{key:m.id,item:m,onUpdateTodo:l,onDoneTask:u},null,8,["item"]))),128)),h(Se,{"group-i-d":a.item.id},null,8,["group-i-d"])])]))}},Ue=v(De,[["__scopeId","data-v-69b1f556"]]);const A=t=>(C("data-v-452a03d2"),t=t(),I(),t),Be={id:"tagHeader",class:"is-flex"},Ae=A(()=>e("button",{id:"wpButton",class:"button"},[e("span",{class:"icon is-small"},[e("i",{class:"fa-solid fa-box-archive"})])],-1)),Pe=A(()=>e("span",{class:"icon is-small"},[e("i",{class:"fa-solid fa-plus"})],-1)),Ve=[Pe],He={class:"group is-flex"},ze={__name:"Workplace",setup(t){const s=D(),a=U();H(()=>{s.initGroup(a.activeCategoryId)}),z(async()=>{await s.storeGroup()});const o=()=>{if(s.groups.length>=4){alert("You can only have 4 groups!");return}s.addNewGroup()},n=(r,l)=>{s.updateGroupNameById(r,l)};return(r,l)=>(d(),_("div",null,[e("header",Be,[Ae,h(R),e("div",{class:"addNewGroup"},[e("button",{class:"button is-primary",onClick:o},Ve)])]),e("main",null,[e("section",He,[(d(!0),_(b,null,w(p(s).groups,u=>(d(),B(Ue,{key:u.id,item:u,onGroupNameUpdate:n},null,8,["item"]))),128))])])]))}},Me=v(ze,[["__scopeId","data-v-452a03d2"]]);const Oe={class:"App container is-fluid"},je={class:"columns"},qe={class:"column is-2 active"},Ee={class:"column is-10 is-offset-2 workplace"},We={__name:"Dashboard",setup(t){return(s,a)=>(d(),_("div",Oe,[e("section",je,[e("div",qe,[h(W)]),e("div",Ee,[h(Me)])])]))}},Ke=v(We,[["__scopeId","data-v-596ccd11"]]);export{Ke as default};
