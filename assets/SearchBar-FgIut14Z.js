import{u as _,r as c,j as e,e as b,f as Y}from"./index-UIuYEt_z.js";import{j as $,i as S}from"./index-5OaO6oW1.js";import{F as U}from"./index.es-UzAdvkII.js";import{C as W}from"./Calendar-pHjZQyQA.js";import{u as F}from"./useUrlPosition-A257oiwN.js";import{h as q,u as H,a as I}from"./LookupTables-UgGmUSUg.js";import{M as V}from"./MainButton-7s5prsiZ.js";const A=({setIsOpen:x,setCurrent:v,Option:D,setCode:n})=>{const[i]=_(),t=c.useMemo(()=>{const r=(s,l)=>{v(l),n(s),x(!1)};return[{key:"",label:i("searchUnit.all")},...D].map((s,l)=>e.jsx("div",{onClick:()=>r(s.key,s.label),className:"px-3 py-1 transition-[0.3s] dark:bg-[var(--main-dark)] dark:text-[var(--white-color)] dark:hover:bg-[var(--dark-20)] hover:bg-[var(--dark-60)] hover:text-[var(--white-color)] dark:hover:text-[var(--dark-70)]",children:e.jsx("h3",{className:"p-2",children:s.label})},l))},[D,v,n,x]);return e.jsx("div",{children:t})},P="_searchDropdownContainer_1gc2k_1",z="_searchDropdownChild_1gc2k_7",G="_searchDropdownChildLabel_1gc2k_16",J="_searchDropdownTitle_1gc2k_20",K="_searchDropdownOptionsContainer_1gc2k_23",Q="_overrideWidth_1gc2k_42",X="_visible_1gc2k_48",h={searchDropdownContainer:P,searchDropdownChild:z,searchDropdownChildLabel:G,searchDropdownTitle:J,searchDropdownOptionsContainer:K,overrideWidth:Q,visible:X};function N({title:x="",placeholder:v="",className:D="",data:n,current:i="",setValue:t,parentRef:r}){const[s,l]=c.useState(!1),[m,k]=c.useState(""),u=c.useRef(null);return c.useEffect(()=>{const d=p=>{var o,f;(o=r==null?void 0:r.current)!=null&&o.contains(p.target)||l(!1),(f=u==null?void 0:u.current)!=null&&f.contains(p.target)||l(!1)};return window.addEventListener("click",d),()=>window.removeEventListener("click",d)},[r,u]),c.useEffect(()=>{i&&(()=>{var p;k(((p=n==null?void 0:n.filter(o=>o.key===i).pop())==null?void 0:p.label)||""),t(i)})()},[i,n,t]),e.jsxs("div",{className:`${D} ${h.searchDropdownContainer}`,children:[e.jsx("label",{className:`${h.searchDropdownTitle} dark:text-[var(--white-color)]`,children:x}),e.jsxs("div",{className:h.searchDropdownChild,ref:u,children:[e.jsxs("div",{className:h.searchDropdownChildLabel,onClick:()=>l(d=>!d),children:[e.jsx("p",{className:`me-[2rem] ${m.length?"text-[#000] dark:text-[#fff]":"text-[var(--primary-color)] dark:text-[#aaa]"}`,children:m||v}),e.jsx(U,{className:"text-[var(--main-dark)] dark:text-[#fff]",icon:s?$:S})]}),s&&e.jsx("div",{className:h.searchDropdownOptionsContainer,children:e.jsx("div",{className:"dark:bg-[var(--main-dark)] dark:text-[var(--white-color)]",children:e.jsx(A,{setIsOpen:l,setCurrent:k,setCode:t,Option:n??[]})})})]})]})}function Z({title:x="",placeholder:v="",className:D="",parentRef:n}){const[i,t]=c.useState(!1),r=c.useRef(null),{startDate:{value:s,setValue:l},endDate:{value:m,setValue:k}}=b(),{from:u,to:d}=F(),p=`${(s==null?void 0:s.toLocaleDateString("en-uk"))||u} - ${(m==null?void 0:m.toLocaleDateString("en-uk"))||d}`;return c.useEffect(()=>{l(null),k(null)},[]),c.useEffect(()=>{const o=document.querySelector("#reservationField");o&&(o.innerHTML=v)},[]),c.useEffect(()=>{const o=f=>{var w,C;(w=n==null?void 0:n.current)!=null&&w.contains(f.target)||t(!1),(C=r==null?void 0:r.current)!=null&&C.contains(f.target)||t(!1)};return window.addEventListener("click",o),()=>window.removeEventListener("click",o)},[n,r]),e.jsxs("div",{className:`${D} ${h.searchDropdownContainer}`,children:[e.jsx("label",{className:`${h.searchDropdownTitle} dark:text-[var(--white-color)]`,children:x}),e.jsxs("div",{className:h.searchDropdownChild,ref:r,children:[e.jsxs("div",{className:h.searchDropdownChildLabel,onClick:()=>t(o=>!o),children:[e.jsx("p",{className:`me-[2rem] ${s&&m&&p?"text-[#000] dark:text-[#fff]":"text-[var(--primary-color)] dark:text-[#aaa]"}`,id:"reservationField.",children:(s||u)&&(m||d)&&p||v}),e.jsx(U,{className:"text-[var(--main-dark)] dark:text-[#fff]",icon:i?$:S})]}),e.jsx("div",{className:`${h.searchDropdownOptionsContainer} ${h.overrideWidth} ${i&&h.visible}`,children:i&&e.jsx(W,{disabledDates:[]})})]})]})}const R=({className:x=""})=>{const{districts:v}=q(),{categories:D}=H(),{cities:n}=I(),i=Y(),[t]=_(),r=c.useRef(null),{city:s,type:l,from:m,to:k,district:u}=F(),[d,p]=c.useState(s),[o,f]=c.useState(l),[w,C]=c.useState(u),{startDate:{value:g},endDate:{value:y}}=b(),j=a=>{if(!a)return"";const O=String(a.getDate()).padStart(2,"0"),T=String(a.getMonth()+1).padStart(2,"0"),B=a.getFullYear();return`${O}-${T}-${B}`},E=m||g&&j(new Date(g))||"",L=k||y&&j(new Date(y))||"",M=()=>{i(`/search-unit?${d?`city=${d}&`:""}${o?`type=${o}&`:""}${g?`from=${E}&`:""}${y?`to=${L}&`:""}${w?`district=${w}&`:""}`)};return e.jsx("div",{ref:r,className:`mainSearchHeaderNew ${x}`,children:e.jsxs("div",{className:"headerSearchNew bg-[#FEFEFF] text-[var(--main-dark)] dark:bg-[var(--dark-70)]",children:[e.jsx(N,{title:t("searchUnit.choose_city"),placeholder:t("searchUnit.choose_city"),data:n.map(a=>({key:a.areaUnitCityCode,label:a.areaUnitCityName})),current:d,setValue:a=>p(a),parentRef:r,className:"searchBarField"},"city"),e.jsx(N,{title:t("searchUnit.choose_type"),placeholder:t("searchUnit.choose_type"),data:D.map(a=>({key:a.areaUnitCategoryCode,label:a.areaUnitCategoryName})),current:o,setValue:a=>f(a),parentRef:r,className:"searchBarField"},"type"),e.jsx(N,{title:t("searchUnit.choose_neighbourhood"),placeholder:t("searchUnit.choose_neighbourhood"),data:v.map(a=>({key:a.areaUnitDistrictCode,label:a.areaUnitDistrictName})),current:w,setValue:a=>C(a),parentRef:r,className:"searchBarField"},"neighbourhood"),e.jsx(Z,{title:t("searchUnit.pick_date"),placeholder:t("searchUnit.pick_date"),parentRef:r,className:"searchBarField"},"date"),e.jsx(V,{className:"search searchButtonM",onClick:M,children:t("searchUnit.search")})]})})},ce=R;export{ce as S};
