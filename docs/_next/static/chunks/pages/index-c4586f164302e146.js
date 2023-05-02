(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(346)}])},346:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Re}});var n=t(603),i=t(5893),a=t(7294),o=t(3549),l=t(8427),s=t(1485),c=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&h(e,t,r[t]);if(u)for(var t of u(r))g.call(r,t)&&h(e,t,r[t]);return e};const b={xs:18,sm:22,md:28,lg:34,xl:44};function x({variant:e,theme:r,color:t,gradient:n}){const i=r.fn.variant({color:t,variant:e,gradient:n});return"gradient"===e?{border:0,backgroundImage:i.background,color:i.color,"&:hover":r.fn.hover({backgroundSize:"200%"})}:m({border:`1px solid ${i.border}`,backgroundColor:i.background,color:i.color},r.fn.hover({backgroundColor:i.hover}))}var y=(0,s.k)(((e,{color:r,size:t,radius:n,variant:i,gradient:a})=>{return{root:(o=m({},x({variant:i,theme:e,color:r,gradient:a})),l={position:"relative",height:e.fn.size({size:t,sizes:b}),minHeight:e.fn.size({size:t,sizes:b}),width:e.fn.size({size:t,sizes:b}),minWidth:e.fn.size({size:t,sizes:b}),borderRadius:e.fn.radius(n),padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center","&:active":e.activeStyles,"&:disabled, &[data-disabled]":{color:e.colors.gray["dark"===e.colorScheme?6:4],cursor:"not-allowed",backgroundColor:"transparent"===i?void 0:e.fn.themeColor("gray","dark"===e.colorScheme?8:1),borderColor:"transparent"===i?void 0:e.fn.themeColor("gray","dark"===e.colorScheme?8:1),backgroundImage:"none",pointerEvents:"none","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:e.fn.radius(n),cursor:"not-allowed"}}},d(o,p(l)))};var o,l})),v=t(966),j=t(4736),w=Object.defineProperty,z=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,P=(e,r,t)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,S=(e,r)=>{for(var t in r||(r={}))O.call(r,t)&&P(e,t,r[t]);if(z)for(var t of z(r))k.call(r,t)&&P(e,t,r[t]);return e};const N={color:"gray",size:"md",variant:"subtle",loading:!1},C=(0,a.forwardRef)(((e,r)=>{const t=(0,o.N4)("ActionIcon",N,e),{className:n,color:i,children:l,radius:s,size:c,variant:d,gradient:p,disabled:u,loaderProps:f,loading:g,unstyled:h}=t,m=((e,r)=>{var t={};for(var n in e)O.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&z)for(var n of z(e))r.indexOf(n)<0&&k.call(e,n)&&(t[n]=e[n]);return t})(t,["className","color","children","radius","size","variant","gradient","disabled","loaderProps","loading","unstyled"]),{classes:x,cx:w,theme:P}=y({size:c,radius:s,color:i,variant:d,gradient:p},{name:"ActionIcon",unstyled:h}),C=P.fn.variant({color:i,variant:d}),E=a.createElement(v.a,S({color:C.color,size:P.fn.size({size:c,sizes:b})-12},f));return a.createElement(j.k,S({className:w(x.root,n),ref:r,disabled:u,"data-disabled":u||void 0,"data-loading":g||void 0,unstyled:h},m),g?E:l)}));C.displayName="@mantine/core/ActionIcon";const E=(0,l.F)(C);var I=t(3455);function W(e){return Array.isArray(e)?e:[e]}var T=Object.defineProperty,_=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,B=(e,r,t)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const A={w:0,h:0},F=(0,a.forwardRef)(((e,r)=>{const t=(0,o.N4)("Space",A,e),{w:n,h:i,sx:l}=t,s=((e,r)=>{var t={};for(var n in e)D.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&_)for(var n of _(e))r.indexOf(n)<0&&R.call(e,n)&&(t[n]=e[n]);return t})(t,["w","h","sx"]);return a.createElement(I.x,((e,r)=>{for(var t in r||(r={}))D.call(r,t)&&B(e,t,r[t]);if(_)for(var t of _(r))R.call(r,t)&&B(e,t,r[t]);return e})({ref:r,sx:[e=>{const r=e.fn.size({size:n,sizes:e.spacing}),t=e.fn.size({size:i,sizes:e.spacing});return{width:r,height:t,minWidth:r,minHeight:t}},...W(l)]},s))}));F.displayName="@mantine/core/Space";var L=Object.defineProperty,M=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,$=(e,r,t)=>r in e?L(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Q=(e,r)=>{for(var t in r||(r={}))G.call(r,t)&&$(e,t,r[t]);if(H)for(var t of H(r))X.call(r,t)&&$(e,t,r[t]);return e};function V({underline:e,strikethrough:r}){const t=[];return e&&t.push("underline"),r&&t.push("line-through"),t.length>0?t.join(" "):"none"}function q({theme:e,color:r,variant:t}){return"dimmed"===r?"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]:"string"===typeof r&&(r in e.colors||r.split(".")[0]in e.colors)?e.fn.variant({variant:"filled",color:r}).background:"link"===t?e.colors[e.primaryColor]["dark"===e.colorScheme?4:7]:r||"inherit"}function J(e){return"number"===typeof e?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:e,WebkitBoxOrient:"vertical"}:null}var K=(0,s.k)(((e,{color:r,variant:t,size:n,lineClamp:i,inline:a,inherit:o,underline:l,gradient:s,weight:c,transform:d,align:p,strikethrough:u,italic:f})=>{const g=e.fn.variant({variant:"gradient",gradient:s});return{root:Q((h=Q(Q(Q({},e.fn.fontStyles()),e.fn.focusStyles()),J(i)),m={color:q({color:r,theme:e,variant:t}),fontFamily:o?"inherit":e.fontFamily,fontSize:o||void 0===n?"inherit":e.fn.size({size:n,sizes:e.fontSizes}),lineHeight:o?"inherit":a?1:e.lineHeight,textDecoration:V({underline:l,strikethrough:u}),WebkitTapHighlightColor:"transparent",fontWeight:o?"inherit":c,textTransform:d,textAlign:p,fontStyle:f?"italic":void 0},M(h,Z(m))),e.fn.hover("link"===t&&void 0===l?{textDecoration:"underline"}:void 0)),gradient:{backgroundImage:g.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}};var h,m})),U=Object.defineProperty,Y=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,te=(e,r,t)=>r in e?U(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const ne={variant:"text"},ie=(0,a.forwardRef)(((e,r)=>{const t=(0,o.N4)("Text",ne,e),{className:n,size:i,weight:l,transform:s,color:c,align:d,variant:p,lineClamp:u,gradient:f,inline:g,inherit:h,underline:m,strikethrough:b,italic:x,classNames:y,styles:v,unstyled:j,span:w}=t,z=((e,r)=>{var t={};for(var n in e)ee.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&Y)for(var n of Y(e))r.indexOf(n)<0&&re.call(e,n)&&(t[n]=e[n]);return t})(t,["className","size","weight","transform","color","align","variant","lineClamp","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span"]),{classes:O,cx:k}=K({variant:p,color:c,size:i,lineClamp:u,inline:g,inherit:h,underline:m,strikethrough:b,italic:x,weight:l,transform:s,align:d,gradient:f},{unstyled:j,name:"Text"});return a.createElement(I.x,((e,r)=>{for(var t in r||(r={}))ee.call(r,t)&&te(e,t,r[t]);if(Y)for(var t of Y(r))re.call(r,t)&&te(e,t,r[t]);return e})({ref:r,className:k(O.root,{[O.gradient]:"gradient"===p},n),component:w?"span":"div"},z))}));ie.displayName="@mantine/core/Text";const ae=(0,l.F)(ie);var oe=(0,s.k)(((e,{fluid:r,size:t,sizes:n})=>({root:{paddingLeft:e.spacing.md,paddingRight:e.spacing.md,maxWidth:r?"100%":e.fn.size({size:t,sizes:n}),marginLeft:"auto",marginRight:"auto"}}))),le=oe,se=Object.defineProperty,ce=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,ue=(e,r,t)=>r in e?se(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const fe={sizes:{xs:540,sm:720,md:960,lg:1140,xl:1320}},ge=(0,a.forwardRef)(((e,r)=>{const t=(0,o.N4)("Container",fe,e),{className:n,fluid:i,size:l,unstyled:s,sizes:c}=t,d=((e,r)=>{var t={};for(var n in e)de.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&ce)for(var n of ce(e))r.indexOf(n)<0&&pe.call(e,n)&&(t[n]=e[n]);return t})(t,["className","fluid","size","unstyled","sizes"]),{classes:p,cx:u}=le({fluid:i,size:l,sizes:c},{unstyled:s,name:"Container"});return a.createElement(I.x,((e,r)=>{for(var t in r||(r={}))de.call(r,t)&&ue(e,t,r[t]);if(ce)for(var t of ce(r))pe.call(r,t)&&ue(e,t,r[t]);return e})({className:u(p.root,n),ref:r},d))}));ge.displayName="@mantine/core/Container";var he=t(9008),me=t.n(he),be=t(6042);function xe(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}var ye=t(4924),ve="@media (max-width: 960px)",je=(0,s.k)((function(e){return{jumbotron:{},paperTitle:{lineHeight:1.3},paperTitleEmoji:{position:"absolute",left:-32,"@media (max-width: 1200px)":{position:"initial"}},inner:(0,ye.Z)({position:"relative",paddingTop:80},ve,{paddingTop:40}),description:(0,ye.Z)({marginTop:1.5*e.spacing.xl,fontSize:24,maxWidth:800,color:"dark"===e.colorScheme?e.colors.dark[1]:e.colors.gray[7]},ve,{fontSize:18}),controls:(0,ye.Z)({marginTop:1.5*e.spacing.xl},ve,{marginTop:e.spacing.xl}),control:(0,ye.Z)({height:64,paddingLeft:46,paddingRight:46,fontSize:20},ve,{height:54,paddingLeft:18,paddingRight:18,flex:1}),controlPrimary:{border:0,fontWeight:700},githubControl:{borderColor:"transparent",backgroundColor:e.colors.dark[6],color:e.white,fontWeight:700,"&:hover":{backgroundColor:e.colors.dark[5],color:e.white}},feature:{display:"flex",flexDirection:"column",alignItems:"flex-start","@media (max-width: 800px)":{flexDirection:"row"}},featureBody:{marginTop:e.spacing.xs,"@media (max-width: 800px)":{marginTop:0,marginLeft:e.spacing.lg}},featureTitle:{color:"dark"===e.colorScheme?e.white:e.black},featureIcon:{color:e.white,borderRadius:e.radius.md,display:"flex",justifyContent:"center",alignItems:"center",minWidth:50,height:50,"& svg":{display:"block"}}}})),we=t(6869);const ze={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var Oe=(0,s.k)(((e,{spacing:r,position:t,noWrap:n,grow:i,align:a,count:o})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:a||"center",flexWrap:n?"nowrap":"wrap",justifyContent:ze[t],gap:e.fn.size({size:r,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:i?`calc(${100/o}% - ${e.fn.size({size:r,sizes:e.spacing})-e.fn.size({size:r,sizes:e.spacing})/o}px)`:void 0,flexGrow:i?1:0}}}))),ke=Object.defineProperty,Pe=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,Ce=(e,r,t)=>r in e?ke(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const Ee={position:"left",spacing:"md"},Ie=(0,a.forwardRef)(((e,r)=>{const t=(0,o.N4)("Group",Ee,e),{className:n,position:i,align:l,children:s,noWrap:c,grow:d,spacing:p,unstyled:u}=t,f=((e,r)=>{var t={};for(var n in e)Se.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&Pe)for(var n of Pe(e))r.indexOf(n)<0&&Ne.call(e,n)&&(t[n]=e[n]);return t})(t,["className","position","align","children","noWrap","grow","spacing","unstyled"]),g=function(e){return a.Children.toArray(e).filter(Boolean)}(s),{classes:h,cx:m}=Oe({align:l,grow:d,noWrap:c,spacing:p,position:i,count:g.length},{unstyled:u,name:"Group"});return a.createElement(I.x,((e,r)=>{for(var t in r||(r={}))Se.call(r,t)&&Ce(e,t,r[t]);if(Pe)for(var t of Pe(r))Ne.call(r,t)&&Ce(e,t,r[t]);return e})({className:m(h.root,n),ref:r},f),g)}));Ie.displayName="@mantine/core/Group";var We=t(3991);function Te(){var e=je().classes,r={size:48,weight:700,align:"center"};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ae,xe((0,be.Z)({},r),{component:"span",className:e.paperTitleEmoji,children:"\ud83e\ude9e"})),(0,i.jsxs)(ae,xe((0,be.Z)({},r),{component:"span",className:e.paperTitle,children:[(0,i.jsx)(ae,xe((0,be.Z)({component:"span",variant:"gradient",gradient:{from:"indigo",to:"green",deg:90}},r),{children:" Mirror: "})),"Plug-and-Play Data Query, Summarization and Visualization with Natural Language Interface"]}))]})}function _e(){var e=je(),r=e.classes;e.cx;return(0,i.jsx)("div",{className:r.jumbotron,children:(0,i.jsxs)(ge,{size:1140,className:r.inner,children:[(0,i.jsx)(Te,{}),(0,i.jsx)(F,{h:28}),(0,i.jsxs)("div",{style:{display:"flex",gap:"18px"},children:[(0,i.jsx)("a",{href:"https://www.canwenxu.net/",children:(0,i.jsx)(we.z,{variant:"subtle",sx:{padding:0},children:(0,i.jsx)(ae,{size:28,component:"span",children:"Canwen Xu,"})})}),(0,i.jsx)("a",{href:"https://cseweb.ucsd.edu/~jmcauley/",children:(0,i.jsx)(we.z,{variant:"subtle",sx:{padding:0},children:(0,i.jsx)(ae,{size:28,component:"span",children:"Julian McAuley,"})})}),(0,i.jsx)("a",{href:"https://github.com/wph95",children:(0,i.jsx)(we.z,{variant:"subtle",sx:{padding:0},children:(0,i.jsx)(ae,{size:28,component:"span",children:"Penghan Wang"})})})]}),(0,i.jsx)(F,{h:28}),(0,i.jsxs)(Ie,{children:[(0,i.jsx)("a",{href:"https://github.com/mirror-data/mirror/",children:(0,i.jsx)(we.z,{leftIcon:(0,i.jsx)(We.oBr,{}),variant:"outline",color:"dark",children:"Code"})}),(0,i.jsx)("a",{href:"https://arxiv.org/abs/2303.08697",children:(0,i.jsx)(we.z,{leftIcon:(0,i.jsx)(We.XhR,{}),variant:"outline",children:"Paper"})})]}),(0,i.jsx)(F,{h:28}),(0,i.jsxs)(ae,{size:24,component:"span",children:["We propose ",(0,i.jsx)(ae,{component:"span",variant:"gradient",gradient:{from:"indigo",to:"green",deg:90},size:24,weight:700,children:" Mirror"}),", a language model-powered open-source platform for data exploration and analysis. We provide an easy-to-use natural language interface to automatically query the database. By generating executable SQL command, Mirror can retrieve relevant data and automatically summarize it in natural language. Mirror is also capable of generating visualization to better illustrate the results. With its human-in-the-loop design, Mirror can help people better understand their data, no matter they are experienced data analyst or marketing professionals without any programming knowledge."]})]})})}var De=t(1509),Re=function(){var e=(0,n.Z)((0,De._)({key:"color-scheme",defaultValue:"light"}),2),r=e[0],t=e[1];return(0,i.jsxs)("div",{children:[(0,i.jsxs)(me(),{children:[(0,i.jsx)("title",{children:"Mirror"}),(0,i.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\ud83e\ude9e</text></svg>"})]}),(0,i.jsx)(E,{onClick:function(){return t((function(e){return"dark"===e?"light":"dark"}))},variant:"outline",size:"lg",sx:{position:"absolute",top:20,right:20,zIndex:5},children:"dark"===r?(0,i.jsx)(We.O31,{}):(0,i.jsx)(We.zG9,{})}),(0,i.jsxs)(I.x,{sx:function(e){return{position:"relative",zIndex:1,boxShadow:e.shadows.sm}},children:[(0,i.jsx)(_e,{}),(0,i.jsx)(F,{h:40}),(0,i.jsx)(ae,{align:"center",size:32,weight:"700",children:"DEMO"}),(0,i.jsxs)(ge,{size:1140,children:[(0,i.jsx)("div",{style:{padding:"55.9% 0 0 0",position:"relative"},children:(0,i.jsx)("iframe",{src:"https://player.vimeo.com/video/784475788?h=0cdd18c579&badge=0&autopause=0&player_id=0&app_id=58479",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"mirror-0.1.mov"})}),(0,i.jsx)("script",{src:"https://player.vimeo.com/api/player.js"})]}),(0,i.jsx)(F,{h:32}),(0,i.jsxs)(ge,{size:1140,children:[(0,i.jsx)("div",{style:{padding:"55.9% 0 0 0",position:"relative"},children:(0,i.jsx)("iframe",{src:"https://player.vimeo.com/video/763220134?h=3111c6157e&badge=0&autopause=0&player_id=0&app_id=58479",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"mirror-0.1.mov"})}),(0,i.jsx)("script",{src:"https://player.vimeo.com/api/player.js"})]}),(0,i.jsx)(F,{h:160})]})]})}}},function(e){e.O(0,[584,869,774,888,179],(function(){return r=8312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);