import{u as M}from"./ApiStore.332d7406.js";import{c as C,o as c,a as m,b as i,w as L,r as $,d as h,e as I,f as U,g as e,F as O,h as E,t as f,i as g,j as b}from"./app.14b72f3d.js";/* empty css            */function S(){function r(o){const l=C({key:"loading",visible:!1,value:!0});o.store.set(l),o.props.disabled=!0}function a(o){o.store.remove("loading"),o.props.disabled=!1}return{setFormLoadingOn:r,setFormLoadingOff:a}}const B={class:"text-white"},v={name:"UfForm",props:{idForm:String},setup(r){return(a,o)=>{const l=$("FormKit");return c(),m("div",B,[i(l,{id:r.idForm,type:"form","submit-label":"Guardar",onSubmit:o[0]||(o[0]=u=>a.$emit("fire")),config:{classes:{label:"text-left",wrapper:"$reset max-w-full mx-5",outer:"$reset mt-8",input:"p-2 text-white w-full bg-transparent border-2 border-blue-300 rounded outline-none focus:border-blue-500",inner:"mt-5",message:"text-red-400"}},"submit-attrs":{inputClass:"",wrapperClass:"btn bg-neutral-700 focus:bg-neutral-900 mt-8 max-w-full"},"incomplete-message":"Por favor revisa que el formulario este bien llenado."},{default:L(()=>[i(l,{type:"date",name:"fechaIndicador",label:"Fecha",disabled:r.idForm!=="iForm",validation:"required","validation-visibility":"live","input-class":r.idForm!=="iForm"?"bg-gray-400 border-gray-400 text-black":""},null,8,["disabled","input-class"]),i(l,{name:"valorIndicador",type:"number",label:"Valor",validation:"required|integer|numeric|min:1","validation-visibility":"live","validation-messages":{matches:"El valor no puede estar v\xE1cio"}})]),_:1},8,["id"])])}}},N={class:"flex flex-col mt-10 items-center"},V=e("label",{for:"my-modal-4",class:"btn modal-button"},"Agregar Registro UF",-1),q={for:"my-modal-4",class:"modal cursor-pointer"},A={class:"modal-box relative p-5",for:"iForm"},P={class:"w-full pt-5 text-center"},D={class:"overflow-x-auto mt-5 w-[65%]"},K={class:"table w-full font-lora text-xl font-bold"},j=e("thead",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Fecha"),e("th",null,"Valor"),e("th")])],-1),G={class:"hover"},R={class:"text-right"},z=["onClick"],H=["onClick"],J={for:"editModal",class:"modal cursor-pointer"},Q={class:"modal-box relative p-5",for:"eForm"},T={class:"w-full pt-5 text-center"},Z={name:"Crud",setup(r){const a=M(),o=S(),l=h(null),u=h(null),p=I({arrUfs:[]});async function _(){const t=g("iForm");o.setFormLoadingOn(t);const s=t.value;await a.storeModel("uf",s),await d(),b("iForm"),o.setFormLoadingOff(t),l.value.click()}async function d(){try{const t=await a.getAllModel("ufs");p.arrUfs=t}catch(t){throw console.log(t),{error:t}}}async function F(){const t=g("eForm");o.setFormLoadingOn(t);const s=t.value;console.log(s),await a.editModel("uf",s),await d(),b("eForm"),o.setFormLoadingOff(t),u.value.click()}async function x(t){await a.deleteModel("uf",t),await d()}function y(t){t.fechaIndicador=t.fechaIndicador.split(" ")[0],b("eForm",t)}const w=t=>new Intl.NumberFormat("cl-CL",{style:"currency",currency:"CLP"}).format(t);return U(()=>{d()}),(t,s)=>(c(),m("div",N,[V,e("input",{type:"checkbox",ref_key:"actionModal",ref:l,id:"my-modal-4",class:"modal-toggle"},null,512),e("label",q,[e("label",A,[e("div",P,[i(v,{"id-form":"iForm",onFire:_})])])]),e("div",D,[e("table",K,[j,e("tbody",null,[(c(!0),m(O,null,E(p.arrUfs,n=>(c(),m("tr",G,[e("th",null,f(n.id),1),e("td",null,f(n.fechaIndicador.split(" ")[0]),1),e("td",null,f(w(n.valorIndicador)),1),e("td",R,[e("label",{for:"editModal",class:"btn modal-button bg-amber-200 hover:bg-amber-300 mr-10 text-stone-500 hover:text-white",onClick:k=>y(n)},"Editar",8,z),e("button",{class:"btn bg-red-900 hover:bg-red-500 text-white hover:text-black",onClick:k=>x(n.id)},"Borrar",8,H)])]))),256))])])]),e("input",{type:"checkbox",ref_key:"editModal",ref:u,id:"editModal",class:"modal-toggle"},null,512),e("label",J,[e("label",Q,[e("div",T,[i(v,{"id-form":"eForm",onFire:F})])])])]))}};export{Z as default};
