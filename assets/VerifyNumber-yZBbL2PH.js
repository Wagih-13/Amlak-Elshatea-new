import{u as L,i as K,r as n,e as T,j as t,L as M}from"./index-bhfotHN7.js";import{A as B,p as H}from"./AsYouType-Qu0u4COj.js";import{g as $,P as k}from"./index-XnbuT52W.js";import{F as q}from"./index.es-44rdKnfN.js";import{d as z}from"./index-5OaO6oW1.js";import{L as G}from"./LeftAddUnit-kAEaShFV.js";import{M as A}from"./MainButton-X7jyk0ug.js";import"./index-qX52hd21.js";const O=4,U=2;function te(){const{t:l}=L(),{getOtp:c,authenticateUser:u,status:E,statusMsg:P}=K(),[o,S]=n.useState(1),[i,_]=n.useState(),[j,w]=n.useState(!1),[p,b]=n.useState([]),d=n.useRef(null),[N,F]=n.useState("SA"),f=e=>{try{const r=new B().input(e||""),s=H(r,"SA");return s?{parsed:s.isValid(),countryCode:s.countryCallingCode,number:s.formatNational().replace(/\s/g,"")}:{parsed:!1}}catch(r){return console.error("Error validating phone number:",r),{parsed:!1}}},V=(e,r)=>{var m;const s=e.target.value,a=(m=d.current)==null?void 0:m.children;s.length===0&&r>0&&a[r-1].focus(),s.length===1&&(r<a.length-1?(a[r+1].focus(),b(C=>C.map((h,I)=>I===r+1?"":h))):a[r].blur()),b(C=>{const h=[...C];return h[r]=s,h})},g=n.useCallback(()=>{o<U&&S(e=>e+1)},[o]),v=n.useCallback(async()=>{localStorage.setItem("phoneFlagKey","false"),R(!1);const e=f(i),r=e.countryCode,s=e.number;r&&s&&(c==null||c(s,r))},[c,i]),x=n.useCallback(()=>{u==null||u(f(i).number||"",p.join(""))},[u,i,p]),D=(e,r)=>{var a;const s=(a=d.current)==null?void 0:a.children;e.key==="ArrowLeft"?r>0&&s[r-1].focus():e.key==="ArrowRight"?r<s.length-1&&s[r+1].focus():e.key==="Home"?s[0].focus():e.key==="End"&&s[s.length-1].focus()};n.useEffect(()=>{var e;o===2&&((e=d.current)==null?void 0:e.firstChild).focus()},[o]),n.useEffect(()=>{const e=r=>{r.key=="Enter"&&(o===1?(v(),g()):o===2&&x())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o,v,g,x]),n.useEffect(()=>{var e;(e=document.getElementsByClassName("PhoneInputCountry").item(0))==null||e.setAttribute("data-country-code","+"+$(N))},[N]);const{phoneFlag:{setValue:R},counter:{value:y}}=T();return t.jsxs("div",{className:"flex h-[100vh] w-[100vw]",children:[t.jsxs("div",{className:"left-logo-0",children:[t.jsx("div",{className:"absolute left-0 top-0 z-[15] h-full w-full bg-gradient-to-b from-[var(--dark-90)] to-[#5a4b64b6]"}),t.jsx(G,{})]}),t.jsxs("div",{className:"right-form relative flex items-center justify-center dark:bg-[#19131D]",children:[t.jsxs("div",{className:"add-unit-form flex   flex-col justify-center rounded-[12px] border border-[#D5D5D5] sm:w-[550px] addUnitForm",children:[o===1&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{children:[t.jsx("h1",{children:l("verfiy_number.title")}),t.jsx("p",{children:l("verfiy_number.sub_title")})]}),t.jsx(k,{placeholder:l("verfiy_number.placeholder"),value:i,onChange:e=>{_(e),w(f(e).parsed)},onBlur:()=>{w(f(i).parsed)},defaultCountry:"SA",className:`cus-foucs w-full border rounded-[8px] rtl:flex-row-reverse ${j?"valid":""}`,international:!1,onCountryChange:e=>{F(e||"SA")}}),t.jsx("span",{children:y<180&&y>0?y:""}),t.jsx(A,{className:"w-full rounded-[8px] border bg-[#5a4b64] p-2 text-white focus:outline-none disabled:cursor-not-allowed disabled:bg-[#ecd6fc] dark:bg-[var(--main-color)] dark:disabled:bg-[#463c2a]",onClick:()=>{v(),g()},disabled:!j||localStorage.getItem("phoneFlagKey")=="false",children:l("verfiy_number.continue")})]}),o===2&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{children:[t.jsx("h1",{children:l("verfiy_number.verfiy_num")}),t.jsx("p",{children:l("verfiy_number.enter_verfiy")}),t.jsx("div",{className:"phoneVerfiy",children:t.jsx(k,{placeholder:l("verfiy_number.placeholder"),value:i,disabled:!0,onChange:()=>"",ountry:"SA",international:!1})})]}),t.jsxs("div",{className:"mx-auto w-[75%] space-y-4 dark:text-[var(--white-color)]",children:[t.jsx("div",{className:"verification-code-input",ref:d,children:Array.from({length:O}).map((e,r)=>t.jsx("input",{className:"rounded-[8px] border text-center placeholder:text-[25px] dark:bg-[inherit]",placeholder:"*",value:p[r]||"",onChange:s=>V(s,r),onKeyDown:s=>D(s,r),onFocus:()=>{b(s=>s.map((a,m)=>m===r?"":a))},type:"number",min:0,max:9,maxLength:1,pattern:"[0-9]*",inputMode:"numeric"},r))}),t.jsx(A,{onClick:x,className:"w-full cursor-pointer rounded-[1rem] bg-[var(--main-dark)] p-[1rem] px-[2rem] font-bold text-[var(--white-color)] hover:bg-[#99845C] dark:bg-[var(--main-color)]",children:l("verfiy_number.send")}),t.jsx("div",{className:`text-red-500 text-center ${E==="error"?"":"hidden"}`,children:P})]})]})]}),t.jsx(M,{to:"/",className:"absolute start-10 top-10 cursor-pointer text-[2rem] text-[#18131C] hover:text-[#4A3C53] dark:text-[var(--primary-color)] hover:dark:text-[var(--white-color)]",children:t.jsx(q,{icon:z})})]})]})}export{te as default};
