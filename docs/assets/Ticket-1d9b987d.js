import{d as D,K as N,D as P,c as o,q as $,s as q,_ as M,R as O,n as l,v as t,x as i,y as e,z as x,S as _,J as f,A as a,U,G as h,V as z,W as E}from"./index-94b9faaf.js";import{_ as p}from"./TextareaField.vue_vue_type_script_setup_true_lang-aff20212.js";const G={class:"mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"},J={class:"lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"},K={class:"text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"},L={class:"mt-4 lg:row-span-3 lg:mt-0"},W=t("h2",{class:"sr-only"},"Product information",-1),F=t("p",{class:"text-xl tracking-tight text-gray-900"}," Ticket Info ",-1),H={class:"mt-10"},Q={class:"mt-10"},X={class:"flex items-center justify-between mb-4"},Y=t("h3",{class:"text-sm font-medium text-gray-900"},"Request time",-1),Z={class:"text-sm font-light text-gray-600 dark:text-gray-400 hover:text-indigo-500"},tt={class:"flex items-center justify-between mb-4"},et=t("h3",{class:"text-sm font-medium text-gray-900"},"Modify time",-1),st={class:"text-sm font-light text-gray-600 dark:text-gray-400 hover:text-indigo-500"},ot={class:"flex items-center justify-between mb-4"},it=t("h3",{class:"text-sm font-medium text-gray-900"},"Status",-1),nt={class:"bg-gray-200 dark:bg-gray-800 h-6 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center"},rt={class:"text-xs text-gray-600 dark:text-gray-400 font-normal"},ct={class:"flex items-center justify-between mb-4"},at=t("h3",{class:"text-sm font-medium text-gray-900"},"Urgency",-1),dt={class:"bg-gray-200 dark:bg-gray-800 h-6 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center"},lt={class:"text-xs text-gray-600 dark:text-gray-400 font-normal"},gt={class:"flex items-center justify-between mb-4"},mt=t("h3",{class:"text-sm font-medium text-gray-900"},"Priority",-1),ut={class:"bg-gray-200 dark:bg-gray-800 h-6 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center"},xt={class:"text-xs text-gray-600 dark:text-gray-400 font-normal"},_t={class:"py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6"},ft={class:"text-xl font-light leading-7 text-gray-900 sm:text-xl sm:tracking-tight"},ht={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},pt={class:"col-span-12"},yt={class:"mt-2 flex items-center text-s text-gray-500"},bt={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},kt={class:"col-span-12"},vt={class:"mt-2 flex items-center text-s text-gray-500"},Ct=D({__name:"Ticket",setup(Tt){const y=O(),s=N(),b=P(),g=y.params.id;s.getTicket(g);const d=o(()=>b.isAdmin),m=o(()=>s.currentTicket.status==="Closed"),k=o(()=>s.currentTicket.status==="Open"),v=o(()=>s.currentTicket.id),T=o(()=>s.currentTicket.title),w=o(()=>s.currentTicket.description),j=o(()=>s.currentTicket.solution),S=o(()=>s.currentTicket.urgency),C=o(()=>s.currentTicket.priority),R=o(()=>s.currentTicket.status),I=o(()=>s.currentTicket.created),B=o(()=>s.currentTicket.updated);let r="";const V=()=>s.resolveTicket(s.currentTicket,r),A=()=>s.reopenTicket(s.currentTicket,g);return(wt,n)=>(l(),$(M,null,{default:q(()=>{var u;return[t("div",G,[t("div",J,[t("h1",K," Ticket #"+i(e(v)),1)]),t("div",L,[W,F,t("form",H,[t("div",Q,[t("div",X,[Y,t("h3",Z,i(e(I)),1)]),t("div",tt,[et,t("h3",st,i(e(B)),1)]),t("div",ot,[it,t("div",nt,[t("span",rt,i(e(R)),1)])]),t("div",ct,[at,t("div",dt,[t("span",lt,i((u=e(S))==null?void 0:u.name),1)])]),t("div",gt,[mt,t("div",ut,[t("span",xt,i(e(C)),1)])])]),e(d)&&e(m)?(l(),x("button",{key:0,type:"submit",class:"mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:n[0]||(n[0]=_(c=>A(),["prevent"]))}," Reopen Ticket ")):f("",!0),e(d)&&e(k)?(l(),x("button",{key:1,class:"mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:n[1]||(n[1]=_(c=>V(),["prevent"]))}," Resolve Ticket ")):f("",!0)])]),t("div",_t,[t("h2",ft,i(e(T)),1),t("div",ht,[t("div",pt,[t("div",yt,[a(e(U),{class:"-ml-0.5 mr-1.5 h-6 w-6 text-gray-400","aria-hidden":"true"}),h(" Description ")]),a(p,{title:"",name:"description",rows:8,value:e(w),disabled:!0},null,8,["value"])])]),t("div",bt,[t("div",kt,[t("div",vt,[a(e(z),{class:"-ml-0.5 mr-1.5 h-6 w-6 text-gray-400","aria-hidden":"true"}),h(" Solution ")]),a(p,{title:"",name:"solution",rows:8,disabled:!e(d)||e(m),value:e(j),onInput:n[2]||(n[2]=c=>E(r)?r.value=c.target.value:r=c.target.value)},null,8,["disabled","value"])])])])])]}),_:1}))}});export{Ct as default};
