import{G as M,r as i}from"./index-bhfotHN7.js";function p(t,e,o){var n,l,u,d,f;e==null&&(e=100);function r(){var c=Date.now()-d;c<e&&c>=0?n=setTimeout(r,e-c):(n=null,o||(f=t.apply(u,l),u=l=null))}var a=function(){u=this,l=arguments,d=Date.now();var c=o&&!n;return n||(n=setTimeout(r,e)),c&&(f=t.apply(u,l),u=l=null),f};return a.clear=function(){n&&(clearTimeout(n),n=null)},a.flush=function(){n&&(f=t.apply(u,l),u=l=null,clearTimeout(n),n=null)},a}p.debounce=p;var j=p;const E=M(j);function N(t){let{debounce:e,scroll:o,polyfill:n,offsetSize:l}=t===void 0?{debounce:0,scroll:!1,offsetSize:!1}:t;const u=n||(typeof window>"u"?class{}:window.ResizeObserver);if(!u)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[d,f]=i.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),r=i.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:d}),a=e?typeof e=="number"?e:e.scroll:null,c=e?typeof e=="number"?e:e.resize:null,m=i.useRef(!1);i.useEffect(()=>(m.current=!0,()=>void(m.current=!1)));const[y,w,v]=i.useMemo(()=>{const s=()=>{if(!r.current.element)return;const{left:O,top:L,width:x,height:R,bottom:B,right:D,x:S,y:T}=r.current.element.getBoundingClientRect(),b={left:O,top:L,width:x,height:R,bottom:B,right:D,x:S,y:T};r.current.element instanceof HTMLElement&&l&&(b.height=r.current.element.offsetHeight,b.width=r.current.element.offsetWidth),Object.freeze(b),m.current&&!q(r.current.lastBounds,b)&&f(r.current.lastBounds=b)};return[s,c?E(s,c):s,a?E(s,a):s]},[f,l,a,c]);function h(){r.current.scrollContainers&&(r.current.scrollContainers.forEach(s=>s.removeEventListener("scroll",v,!0)),r.current.scrollContainers=null),r.current.resizeObserver&&(r.current.resizeObserver.disconnect(),r.current.resizeObserver=null)}function z(){r.current.element&&(r.current.resizeObserver=new u(v),r.current.resizeObserver.observe(r.current.element),o&&r.current.scrollContainers&&r.current.scrollContainers.forEach(s=>s.addEventListener("scroll",v,{capture:!0,passive:!0})))}const C=s=>{!s||s===r.current.element||(h(),r.current.element=s,r.current.scrollContainers=g(s),z())};return W(v,!!o),H(w),i.useEffect(()=>{h(),z()},[o,v,w]),i.useEffect(()=>h,[]),[C,d,y]}function H(t){i.useEffect(()=>{const e=t;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[t])}function W(t,e){i.useEffect(()=>{if(e){const o=t;return window.addEventListener("scroll",o,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",o,!0)}},[t,e])}function g(t){const e=[];if(!t||t===document.body)return e;const{overflow:o,overflowX:n,overflowY:l}=window.getComputedStyle(t);return[o,n,l].some(u=>u==="auto"||u==="scroll")&&e.push(t),[...e,...g(t.parentElement)]}const k=["x","y","top","bottom","left","right","width","height"],q=(t,e)=>k.every(o=>t[o]===e[o]);export{N as u};
