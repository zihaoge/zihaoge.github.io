var t=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,o=(i,l,a)=>l in i?t(i,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[l]=a,c=(t,i)=>{for(var l in i||(i={}))s.call(i,l)&&o(t,l,i[l]);if(a)for(var l of a(i))e.call(i,l)&&o(t,l,i[l]);return t},r=(t,a)=>i(t,l(a));import{s as n,r as d,h as p,n as u,o as h,c as f,w as v,b as g,d as m,t as w,k as y,l as _,e as b,f as z,j as x,i as C,p as M,q as L}from"./index.fb3ba05c.js";import{r as N,_ as O}from"./uni-popup.29b217b7.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";var S=k({data:()=>({id:null,detail:null,functionNum:null,bgcolor:"",praised:JSON.parse(localStorage.getItem("detail"))||[],popularity:"",favorites:JSON.parse(localStorage.getItem("favorite"))||[],fav:!1}),onLoad(t){console.log(t.id),this.id=t.id,n({title:"加载中"}),d({url:`https://apis.netstart.cn/zhihudaily/story/${this.id}`,success:t=>{var i,l;this.detail=t.data.story,this.bgcolor=null==(l=null==(i=null==t?void 0:t.data)?void 0:i.story)?void 0:l.imageHue.replace("0x","#"),p()}}),d({url:`https://apis.netstart.cn/zhihudaily/story/${this.id}/extra`,success:t=>{this.functionNum=t.data,console.log(this.functionNum.popularity),this.popularity<this.functionNum.popularity&&(this.popularity=this.functionNum.popularity)}})},onReady(){var t;this.popularity=this.praised.length&&this.praised.filter((t=>t.id===this.id)).length?null==(t=this.praised)?void 0:t.filter((t=>t.id===this.id))[0].popularity:"",this.fav=!!this.favorites.length&&(!!this.favorites.filter((t=>t.id===this.id)).length&&this.favorites.filter((t=>t.id===this.id))[0].fav)},methods:{navToComment:t=>{u({url:"/pages/comments/comments?id="+t})},navTogather:t=>{u({url:"/pages/gather/gather?id="+t})},praise(t){var i;this.popularity<this.functionNum.popularity+1?(this.popularity=this.functionNum.popularity,this.popularity++):this.popularity=this.praised.length&&this.praised.filter((t=>t.id===this.id)).length?null==(i=this.praised)?void 0:i.filter((t=>t.id===this.id))[0].popularity:this.functionNum.popularity,this.praised=[...new Set([...this.praised,c({id:t},this.functionNum)].map((t=>JSON.stringify(t))))].map((t=>JSON.parse(t))).map((i=>i.id===t?r(c({},i),{popularity:this.popularity}):i)),console.log(this.popularity)},favorite(t){this.fav=!this.fav,console.log(t,"已收藏",this.fav),this.favorites=[...new Set([...this.favorites,{id:t,fav:this.fav,title:this.detail.title,img:this.detail.image}].map((t=>JSON.stringify(t))))].map((t=>JSON.parse(t))).map((i=>i.id===t?r(c({},i),{fav:this.fav}):i))},open(){this.$refs.popup.open("bottom")}},watch:{praised(t){localStorage.setItem("detail",JSON.stringify(t))},favorites(t){localStorage.setItem("favorite",JSON.stringify(t))}}},[["render",function(t,i,l,a,s,e){const o=x,c=C,r=M,n=N(L("uni-popup"),O);return h(),f(c,{class:"allcontent"},{default:v((()=>{var l;return[g(c,{class:"dailyHeader"},{default:v((()=>[g(c,{class:"dailyHeader-image"},{default:v((()=>{var t,i;return[g(o,{src:null==(t=s.detail)?void 0:t.image,mode:"widthFix"},null,8,["src"]),m("h3",{class:"dailyHeader-title",style:y(`background-image: linear-gradient(transparent,${s.bgcolor},${s.bgcolor});`)},w(null==(i=s.detail)?void 0:i.title),5)]})),_:1})])),_:1}),g(c,{class:"detail"},{default:v((()=>{var t;return[g(c,{innerHTML:null==(t=s.detail)?void 0:t.body},null,8,["innerHTML"])]})),_:1}),(null==(l=s.detail)?void 0:l.section)?(h(),f(c,{key:0,class:"gather"},{default:v((()=>[g(c,{class:"card",style:y(`background-color: ${s.bgcolor};`),onClick:i[0]||(i[0]=t=>{var i,l;return e.navTogather(null==(l=null==(i=s.detail)?void 0:i.section)?void 0:l.id)})},{default:v((()=>[g(c,{class:"fl"},{default:v((()=>{var t,i;return[m("img",{src:null==(i=null==(t=s.detail)?void 0:t.section)?void 0:i.thumbnail,alt:""},null,8,["src"]),g(c,{class:"text"},{default:v((()=>[g(r,null,{default:v((()=>[_("本文来自")])),_:1}),g(r,null,{default:v((()=>{var t,i;return[_(w(null==(i=null==(t=s.detail)?void 0:t.section)?void 0:i.name)+" · 集合 ",1)]})),_:1})])),_:1})]})),_:1}),g(c,{class:"fr"},{default:v((()=>[(h(),b("svg",{t:"1667219703143",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3408",width:"20",height:"20"},[m("path",{fill:"rgba(255,255,255,0.6)",d:"M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z","p-id":"3409"})]))])),_:1})])),_:1},8,["style"])])),_:1})):z("",!0),g(c,{class:"footerBar"},{default:v((()=>[g(c,{class:"back"},{default:v((()=>[(h(),b("svg",{onClick:i[1]||(i[1]=i=>t.$router.back()),t:"1667033378402",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2652",width:"20",height:"20"},[m("path",{d:"M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z","p-id":"2653",fill:"#040404"})]))])),_:1}),g(c,{class:"func"},{default:v((()=>[g(c,{class:"comment",onClick:i[2]||(i[2]=t=>e.navToComment(s.id))},{default:v((()=>[(h(),b("svg",{t:"1667033616565",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9772",width:"20",height:"20"},[m("path",{d:"M427.52 954.624c-9.984 0-19.392-4.672-25.408-12.544L269.312 768 157.632 768C105.984 768 64 731.392 64 679.744L64 221.632C64 169.984 105.984 128 157.632 128l644.736 0C854.016 128 896 169.984 896 221.632l0 458.112C896 731.392 854.016 768 802.368 768L585.664 768l-132.672 174.08C446.912 949.952 437.504 954.624 427.52 954.624zM157.632 192C141.312 192 128 205.312 128 221.632l0 458.112c0 16.32 13.312 29.632 29.632 29.632l127.552 0c9.984 0 19.392 4.672 25.408 12.544l116.928 147.968 116.928-147.968c6.08-7.872 15.424-12.544 25.408-12.544l232.512 0c16.32 0 29.632-13.312 29.632-29.632L832 221.632C832 205.312 818.688 192 802.368 192L157.632 192z","p-id":"9773",fill:"#333333"})])),g(r,null,{default:v((()=>{var t;return[_(w(null==(t=s.functionNum)?void 0:t.comments),1)]})),_:1})])),_:1}),g(c,{class:"praise",onClick:i[3]||(i[3]=t=>e.praise(s.id))},{default:v((()=>[(h(),b("svg",{t:"1667033716715",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"10606",width:"20",height:"20"},[m("path",{d:"M819.36 439.584l-75.904 354.176c-0.576 2.688-5.088 6.24-7.296 6.24L352 799.84V416h2.88v-1.056A176.224 176.224 0 0 0 512 240V224a32.032 32.032 0 0 1 64 0h2.048c6.336 32.8 11.968 106.496-23.872 139.904A32 32 0 0 0 576 419.328c4.64 0 9.152-1.344 13.44-3.328h210.24c7.424 0 13.376 2.336 16.832 6.592 3.296 4.096 4.32 10.144 2.848 16.992zM192.192 416H288v383.808H192L192.192 416z m674.08-33.664c-15.584-19.296-39.872-30.336-66.592-30.336h-164.992c23.168-67.2 5.376-145.024 4.352-149.312a30.944 30.944 0 0 0-4.928-10.656 95.808 95.808 0 0 0-90.112-64 95.84 95.84 0 0 0-95.456 90.688H448V240c0 61.76-50.24 112-112 112H192.192C156.8 352 128 380.8 128 416.224v383.552C128 835.2 156.64 864 191.84 864h544.32c32.352 0 63.04-24.96 69.888-56.8l75.904-354.208c5.504-25.76-0.192-51.488-15.68-70.656z","p-id":"10607"})])),g(r,null,{default:v((()=>{var t;return[_(w(s.popularity||(null==(t=s.functionNum)?void 0:t.popularity)),1)]})),_:1})])),_:1}),g(c,{class:"star",onClick:i[4]||(i[4]=t=>e.favorite(s.id))},{default:v((()=>[s.fav?(h(),b("svg",{key:1,t:"1667457902037",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2577",width:"20",height:"20"},[m("path",{d:"M979.056392 403.793556c-4.146437-12.753465-15.173584-22.048155-28.446889-23.977088l-281.238312-40.859593L543.598672 84.157725c-5.936199-12.022825-18.186198-19.634176-31.596625-19.634176s-25.660426 7.612375-31.598672 19.634176L354.627786 338.956875 73.389474 379.816468c-13.274328 1.928932-24.297382 11.222599-28.445866 23.977088-4.14439 12.757558-0.688685 26.754341 8.91709 36.117592l203.505927 198.330044-48.042179 280.050254c-2.266623 13.218046 3.166109 26.575262 14.015202 34.45472 10.853186 7.881504 25.237801 8.922207 37.109176 2.683109l251.5522-132.222417 251.547083 132.222417c5.155417 2.711761 10.785647 4.046153 16.393365 4.046153 7.306406 0 14.576997-2.266623 20.716834-6.729262 10.849092-7.879458 16.283872-21.236674 14.015202-34.45472l-48.038086-280.050254 203.505927-198.330044C979.747123 430.550966 983.198735 416.551114 979.056392 403.793556z","p-id":"2578",fill:"#0086c3"})])):(h(),b("svg",{key:0,t:"1667033789559",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"13761",width:"20",height:"20"},[m("path",{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z","p-id":"13762"})]))])),_:1}),g(c,{class:"upload",onClick:e.open},{default:v((()=>[(h(),b("svg",{t:"1667033873013",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"14941",width:"20",height:"20"},[m("path",{d:"M896 629.333333c-17.066667 0-32 14.933333-32 32v170.666667c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667v-170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v170.666667c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667v-170.666667c0-17.066667-14.933333-32-32-32z","p-id":"14942"}),m("path",{d:"M322.133333 407.466667l157.866667-157.866667V704c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V247.466667l157.866667 157.866666c6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334c12.8-12.8 12.8-32 0-44.8l-213.333333-213.333333c-12.8-12.8-32-12.8-44.8 0l-213.333334 213.333333c-12.8 12.8-12.8 32 0 44.8 10.666667 12.8 32 12.8 44.8 2.133334z","p-id":"14943"})]))])),_:1},8,["onClick"])])),_:1})])),_:1}),g(n,{ref:"popup","background-color":"#fff",onChange:t.change},{default:v((()=>[g(c,{class:"popup-content"},{default:v((()=>[g(c,{class:"icons"},{default:v((()=>[g(c,{class:"iconbg"},{default:v((()=>[(h(),b("svg",{t:"1667460698003",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8772",width:"20",height:"20"},[m("path",{d:"M232.675556 1023.81037c-61.231407 0-118.632296-23.665778-161.621333-66.635852l-4.228741-4.209778c-89.088-89.125926-89.088-234.116741 0-323.242667l181.096296-181.077333c3.470222 25.372444 9.557333 50.422519 18.090667 74.600296l-152.822519 152.841481c-63.525926 63.544889-63.525926 166.930963 0 230.494815l4.266667 4.266667c30.72 30.72 71.642074 47.634963 115.218963 47.634963s84.517926-16.933926 115.256889-47.672889l228.882963-228.882963c63.525926-63.544889 63.525926-166.949926 0-230.494815l-4.266667-4.247704c-2.066963-2.066963-4.190815-4.077037-6.409481-6.049185l46.40237-46.40237c2.180741 2.010074 4.304593 4.039111 6.371556 6.106074l4.266667 4.247704c89.088 89.088 89.069037 234.078815-0.018963 323.204741L394.296889 957.174519C351.326815 1000.144593 293.925926 1023.81037 232.675556 1023.81037zM411.45837 629.266963c-2.180741-2.029037-4.304593-4.058074-6.352593-6.106074l-4.247704-4.247704c-43.083852-43.102815-66.825481-100.484741-66.825481-161.60237 0-61.11763 23.74163-118.499556 66.825481-161.60237l228.864-228.882963C672.673185 23.855407 730.074074 0.18963 791.324444 0.18963c61.25037 0 118.651259 23.665778 161.621333 66.635852l4.171852 4.209778C1000.25837 114.138074 1024 171.557926 1024 232.675556c0 61.11763-23.722667 118.518519-66.825481 161.621333l-181.077333 181.096296c-3.489185-25.41037-9.557333-50.479407-18.090667-74.619259l152.822519-152.841481c63.544889-63.544889 63.544889-166.949926 0-230.494815l-4.28563-4.266667c-30.72-30.72-71.642074-47.634963-115.218963-47.634963-43.557926 0-84.498963 16.933926-115.237926 47.691852l-228.882963 228.864c-30.738963 30.738963-47.672889 71.68-47.672889 115.256889 0 43.576889 16.933926 84.517926 47.672889 115.237926l4.228741 4.247704c2.029037 2.048 4.171852 4.077037 6.428444 6.068148L411.45837 629.266963z","p-id":"8773",fill:"#ffffff"})]))])),_:1}),g(r,null,{default:v((()=>[_("复制链接")])),_:1})])),_:1}),g(c,{class:"icons"},{default:v((()=>[g(c,{class:"iconbg"},{default:v((()=>[(h(),b("svg",{t:"1667460564720",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8337",width:"30",height:"30"},[m("path",{d:"M535.588571 808.228571a296.411429 296.411429 0 0 0 196.260572-96.329142c-34.011429-13.293714-65.590857-23.424-96.128-30.592-22.893714 46.445714-56.283429 88.777143-100.150857 126.902857z m-12.745142-13.165714c41.088-35.584 72.539429-74.806857 94.427428-117.76a490.112 490.112 0 0 0-94.427428-9.508571v127.268571z m150.180571-273.92c-0.694857 51.273143-10.550857 99.035429-29.513143 143.213714 32.073143 7.753143 65.206857 18.614857 100.882286 32.841143a295.789714 295.789714 0 0 0 64.603428-176.054857h-135.972571z m-18.285714 0h-131.894857v128.365714c34.450286 0.128 68.004571 3.620571 102.509714 10.788572 18.889143-42.843429 28.672-89.197714 29.366857-139.154286z m-127.524572-305.901714c45.147429 37.595429 79.835429 79.36 104.045715 125.275428 31.268571-7.076571 63.597714-17.243429 98.413714-30.774857a296.32 296.32 0 0 0-202.459429-94.500571z m-4.388571 20.260571v117.485715c30.171429-0.109714 59.611429-2.907429 89.764571-8.594286-21.595429-39.497143-51.510857-75.776-89.746285-108.891429zM672.896 502.857143h136.118857a295.826286 295.826286 0 0 0-66.56-178.468572c-36.388571 14.409143-70.162286 25.325714-102.857143 32.987429 20.662857 44.745143 31.780571 93.257143 33.28 145.481143z m-18.285714 0c-1.554286-50.925714-12.653714-98.084571-33.353143-141.513143-33.060571 6.582857-65.298286 9.819429-98.395429 9.929143V502.857143h131.730286z m-165.851429 305.389714c-42.88-36.571429-76.050286-77.019429-99.437714-121.325714l-9.252572 2.322286c-22.674286 5.796571-45.165714 12.178286-77.988571 21.942857l-8.301714 2.468571a296.356571 296.356571 0 0 0 194.998857 94.592z m15.817143-10.605714v-129.462857c-28.964571 1.334857-60.635429 6.180571-96.841143 14.372571 22.893714 41.984 55.168 80.329143 96.841143 115.108572zM347.52 521.142857h-132.516571a295.808 295.808 0 0 0 65.645714 177.353143l16.201143-4.827429a2039.04 2039.04 0 0 1 84.150857-23.533714c-21.156571-45.750857-32.329143-95.451429-33.462857-148.992z m18.285714 0c1.170286 52.114286 12.251429 100.297143 33.353143 144.621714 39.405714-9.142857 73.801143-14.500571 105.398857-15.908571V521.142857h-138.733714z m122.953143-305.389714a296.32 296.32 0 0 0-192.658286 92.086857l5.961143 1.773714c32.822857 9.764571 55.314286 16.128 77.988572 21.942857 3.638857 0.914286 7.222857 1.828571 10.788571 2.688 23.277714-43.209143 55.936-82.706286 97.92-118.491428z m15.798857 10.605714c-40.740571 33.974857-72.484571 71.369143-95.268571 112.237714 35.547429 7.972571 66.742857 12.690286 95.268571 14.025143v-126.281143zM347.52 502.857143c1.170286-54.674286 12.8-105.325714 34.834286-151.862857l-6.820572-1.737143a2039.04 2039.04 0 0 1-78.683428-22.125714c-2.688-0.804571-8.649143-2.56-14.08-4.205715a295.844571 295.844571 0 0 0-67.766857 179.931429h132.516571z m18.285714 0h138.752v-131.931429c-31.232-1.371429-65.188571-6.637714-104.009143-15.579428-21.997714 45.110857-33.554286 94.262857-34.742857 147.510857zM512 836.571429c-179.254857 0-324.571429-145.316571-324.571429-324.571429S332.745143 187.428571 512 187.428571 836.571429 332.745143 836.571429 512 691.254857 836.571429 512 836.571429z",fill:"#ffffff","p-id":"8338"})]))])),_:1}),g(r,null,{default:v((()=>[_("浏览器打开")])),_:1})])),_:1}),g(c,{class:"icons"},{default:v((()=>[g(c,{class:"iconbg"},{default:v((()=>[(h(),b("svg",{t:"1667460742556",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9787",width:"25",height:"25"},[m("path",{d:"M288 456.864A63.264 63.264 0 0 0 256 448a64 64 0 1 0 0 128c11.712 0 22.56-3.392 32-8.896 19.04-11.072 32-31.488 32-55.104 0-23.648-12.96-44.064-32-55.136M544 456.864A63.264 63.264 0 0 0 512 448c-11.712 0-22.56 3.36-32 8.864-19.04 11.072-32 31.488-32 55.136 0 23.616 12.96 44.032 32 55.104 9.44 5.504 20.288 8.896 32 8.896s22.56-3.392 32-8.896c19.04-11.072 32-31.488 32-55.104 0-23.648-12.96-44.064-32-55.136M768 448c-11.712 0-22.56 3.392-32 8.864-19.04 11.104-32 31.52-32 55.136 0 23.616 12.96 44.032 32 55.136 9.44 5.472 20.288 8.864 32 8.864a64 64 0 1 0 0-128","p-id":"9788",fill:"#ffffff"})]))])),_:1}),g(r,null,{default:v((()=>[_("更多")])),_:1})])),_:1})])),_:1})])),_:1},8,["onChange"])]})),_:1})}],["__scopeId","data-v-808a880e"]]);export{S as default};
