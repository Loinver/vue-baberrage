!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("timers")):"function"==typeof define&&define.amd?define(["exports","timers"],t):t((e=e||self)["vue-baberrage"]={},e.timers)}(this,(function(e,t){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}for(var a=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}})),i=[],r=0;r<256;++r)i[r]=(r+256).toString(16).substr(1);var s=function(e,t){var n=t||0,a=i;return[a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]]].join("")};var o=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t)for(var o=0;o<16;++o)t[i+o]=r[o];return t||s(r)},u={name:"vue-baberrage-message",props:{item:{type:Object,default:function(){return{}}}},data:function(){return{}}};function l(e,t,n,a,i,r,s,o,u,l){"boolean"!=typeof s&&(u=o,o=s,s=!1);const d="function"==typeof n?n.options:n;let h;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),a&&(d._scopeId=a),r?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=h):t&&(h=s?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,o(e))}),h)if(d.functional){const e=d.render;d.render=function(t,n){return h.call(n),e(t,n)}}else{const e=d.beforeCreate;d.beforeCreate=e?[].concat(e,h):[h]}return n}const d="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function h(e){return(e,t)=>function(e,t){const n=d?t.media||"default":e,a=p[n]||(p[n]={ids:new Set,styles:[]});if(!a.ids.has(e)){a.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",t.media&&a.element.setAttribute("media",t.media),void 0===m&&(m=document.head||document.getElementsByTagName("head")[0]),m.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(n),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{const e=a.ids.size-1,t=document.createTextNode(n),i=a.element.childNodes;i[e]&&a.element.removeChild(i[e]),i.length?a.element.insertBefore(t,i[e]):a.element.appendChild(t)}}}(e,t)}let m;const p={};const c=u;var f=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"baberrage-item",class:this.item.barrageStyle,style:this.item.style},[t("div",{staticClass:"baberrage-avatar"},[t("img",{attrs:{src:this.item.avatar}})]),this._v(" "),t("div",{staticClass:"baberrage-msg"},[this._v(this._s(this.item.msg))])])};f._withStripped=!0;const b=l({render:f,staticRenderFns:[]},(function(e){e&&e("data-v-7d3ac5e8_0",{source:".baberrage-item {\n  position: absolute;\n  width: auto;\n  display: block;\n  color: #000;\n  transform: translateX(500%);\n  padding: 5px 8px 5px 38px;\n  text-align: left;\n  white-space: nowrap;\n}\n.baberrage-item .baberrage-avatar {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  left: 8px;\n  top: 5px;\n  border-radius: 50px;\n  overflow: hidden;\n}\n.baberrage-item .baberrage-avatar img {\n  width: 30px;\n}\n.baberrage-item .baberrage-msg {\n  line-height: 30px;\n  padding-left: 8px;\n  white-space: nowrap;\n}\n.baberrage-item.normal {\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 100px;\n  color: #FFF;\n}\n",map:{version:3,sources:["index.vue","/Users/chenhao/Documents/work/vue-baberrage/src/lib/components/vue-baberrage-msg/index.vue"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,WAAW;EACX,cAAc;EACd,WAAW;EACX,2BAA2B;EAC3B,yBAAyB;EACzB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,SAAS;EACT,QAAQ;EACR,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;ECCA,iBAAA;EACA,iBAAA;EACA,mBAAA;AACA;AACA;EACA,8BAAA;EACA,oBAAA;EACA,WAAA;AACA",file:"index.vue",sourcesContent:[".baberrage-item {\n  position: absolute;\n  width: auto;\n  display: block;\n  color: #000;\n  transform: translateX(500%);\n  padding: 5px 8px 5px 38px;\n  text-align: left;\n  white-space: nowrap;\n}\n.baberrage-item .baberrage-avatar {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  left: 8px;\n  top: 5px;\n  border-radius: 50px;\n  overflow: hidden;\n}\n.baberrage-item .baberrage-avatar img {\n  width: 30px;\n}\n.baberrage-item .baberrage-msg {\n  line-height: 30px;\n  padding-left: 8px;\n  white-space: nowrap;\n}\n.baberrage-item.normal {\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 100px;\n  color: #FFF;\n}\n",'<template>\n  <div class="baberrage-item" v-bind:class="item.barrageStyle" v-bind:style="item.style">\n    <div class="baberrage-avatar"><img :src="item.avatar"></div>\n    <div class="baberrage-msg">{{ item.msg }}</div>\n  </div>\n</template>\n<script>\nexport default {\n  name: \'vue-baberrage-message\',\n  props: {\n    item: {\n      type: Object,\n      default () { return {} }\n    }\n  },\n  data () {\n    return {\n    }\n  }\n}\n<\/script>\n\n<style lang="less">\n.baberrage-item {\n  position: absolute;\n  width:auto;\n  display:block;\n  color:#000;\n  transform: translateX(500%);\n  padding:5px 8px 5px 38px;\n  text-align:left;\n  white-space:nowrap;\n\n  .baberrage-avatar {\n    position: absolute;\n    width:30px;\n    height:30px;\n    left: 8px;\n    top: 5px;\n    border-radius:50px;\n    overflow: hidden;\n\n    img {\n      width:30px;\n    }\n  }\n\n  .baberrage-msg{\n    line-height:30px;\n    padding-left:8px;\n    white-space:nowrap;\n  }\n}\n\n.baberrage-item.normal{\n  background:rgba(0,0,0,.7);\n  border-radius:100px;\n  color:#FFF;\n}\n</style>\n']},media:void 0})}),c,void 0,!1,void 0,!1,h,void 0,void 0);var g={NORMAL:Symbol("NORMAL"),FROM_TOP:Symbol("FROM_TOP"),FROM_BOTTOM:Symbol("FROM_BOTTOM")};window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)};const A={name:"vue-baberrage",components:{VueBaberrageMsg:b},props:{isShow:{type:Boolean,default:!0},barrageList:{type:Array,default:function(){return[]}},boxWidth:{type:Number,default:0},boxHeight:{type:Number,default:0},messageHeight:{type:Number,default:40},messageGap:{type:Number,default:5},loop:{type:Boolean,default:!1},maxWordCount:{type:Number,default:20},throttleGap:{type:Number,default:2e3},posRender:{type:Function}},data:function(){return{boxWidthVal:this.boxWidth,boxHeightVal:this.boxHeight,loopVal:this.loop,laneNum:0,lanes:[],startTime:0,frameId:null,readyId:0,topQueue:[],bottomQueue:[],normalQueue:[],showInd:0,indexShowQueue:[],taskQueue:[],taskIsRunning:!1,taskLastTime:null}},mounted:function(){0===this.boxWidthVal&&(this.boxWidthVal=this.$refs.stage.parentNode.offsetWidth+50),this.setUpLane(this.boxHeightVal),this.shuffle(),this.play()},watch:{barrageList:function(e){this.insertToReadyShowQueue()},boxHeight:function(e){this.setUpLane(e)}},methods:{setUpLane:function(e){0===e&&(e=0===(e=this.$refs.stage.parentNode.offsetHeight)?window.innerHeight:e),this.boxHeightVal=e;var t=this.laneNum>>>0;if(this.laneNum=Math.floor(e/(this.messageHeight+2*this.messageGap)),t<this.laneNum)for(var n=t;n<this.laneNum;n++)this.lanes.push({id:n,laneQueue:[]});else this.lanes.splice(this.laneNum)},shuffle:function(){var e=this.laneNum;this.indexShowQueue=Array.from({length:e},(function(e,t){return t}))},insertToReadyShowQueue:function(){var e=this;clearTimeout(this.readyId),this.readyId=t.setTimeout((function(){for(var t=function(){var t=e.barrageList.splice(0,e.laneNum);e.addTask((function(){e.normalQueue=[].concat(n(e.normalQueue),n(t))}))};e.barrageList.length>0;)t();e.updateBarrageDate()}),300)},updateBarrageDate:function(e){null==this.startTime&&(this.startTime=e),void 0!==e&&this.move(e),this.normalQueue.length>0||this.topQueue.length>0||this.bottomQueue.length>0?this.play():(this.$emit("barrage-list-empty"),this.frameId=null)},play:function(){this.frameId=requestAnimationFrame(this.updateBarrageDate)},pause:function(){cancelAnimationFrame(this.frameId)},replay:function(){this.normalQueue.forEach((function(e){e.startTime=null})),this.play()},move:function(e){var t=this;this.normalQueue.forEach((function(n,a){if(n.startTime){if(n.type===g.NORMAL&&(t.normalMove(n,e),n.left+n.width<0)){if(!t.lanes[n.laneId])return;var i=t.lanes[n.laneId].laneQueue.findIndex((function(e){return e.runtimeId===n.runtimeId}));t.lanes[n.laneId].laneQueue.splice(i,1),t.loopVal?t.itemReset(n,e):t.normalQueue.splice(a,1)}}else{if(n.type===g.FROM_TOP){if("top"!==n.position&&"bottom"!==n.position)throw new Error("Position only between top and bottom when the type equal 1");t.fixMove(n,e),t.normalQueue.splice(a,1)}t.itemReset(n,e)}})),this.queueRefresh(e)},normalMove:function(e,t){var n=t-e.currentTime;e.currentTime=t;var a=e.speed*n;a<=0||isNaN(a)||(e.left-=a,this.moveTo(e,{x:e.left,y:e.top}))},fixMove:function(e,t){this[e.position+"Queue"].includes(e)||this[e.position+"Queue"].push(e)},queueRefresh:function(e){var t=this;this.topQueue.forEach((function(n){n.startTime+1e3*n.time<=e&&t.topQueue.shift()})),this.bottomQueue.forEach((function(n){n.startTime+1e3*n.time<=e&&t.bottomQueue.shift()}))},selectPos:function(){return this.posRender?this.posRender(this.lanes):(this.showInd+1>this.laneNum&&(this.showInd=0),this.showInd++)},isWaiting:function(e){return e.left>this.boxWidthVal},itemReset:function(e,t){if(e.runtimeId=o(),e.type=e.type||g.NORMAL,e.position=e.position||"top",e.barrageStyle=e.barrageStyle||"normal",e.startTime=t,e.currentTime=t,e.speed=this.boxWidthVal/(1e3*e.time),e.width=9*this.strlen(e.msg)+20,e.type===g.NORMAL){var n=this.selectPos();e.laneId=n;var a=this.boxWidthVal;if(this.lanes[n].laneQueue.length>0){var i=this.lanes[n].laneQueue[this.lanes[n].laneQueue.length-1];i.left>this.boxWidthVal?a=i.width+i.left:a+=i.width}this.lanes[n].laneQueue.push(e),e.top=this.indexShowQueue[n]*(this.messageHeight+2*this.messageGap)-this.messageGap,e.left=a}else e.left=(this.boxWidthVal-e.width)/2,"top"===e.position?e.top=(this[e.position+"Queue"].length-1)*this.messageHeight+2*this.messageGap:e.top=this.boxHeightVal-(this[e.position+"Queue"].length*this.messageHeight+100);this.moveTo(e,{x:e.left,y:e.top})},moveTo:function(e,t){t.x,t.y;this.$set(e,"style",{transform:"translate3d("+e.left+"px,"+e.top+"px,0)"})},addTask:function(e){this.taskQueue.push(e),this.taskQueue.length>0&&!this.taskIsRunning&&(this.taskIsRunning=!0,window.requestAnimationFrame(this.runTask))},runTask:function(e){if(!this.taskLastTime||e-this.taskLastTime>=this.throttleGap){var t=this.taskQueue.shift();this.taskLastTime=e,t()}this.taskQueue.length>0?window.requestAnimationFrame(this.runTask):this.taskIsRunning=!1},strlen:function(e){var t=0;for(var n in e)e.charCodeAt(n)>127||94===e.charCodeAt(n)?t+=2:t++;return t}}};var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],ref:"stage",staticClass:"baberrage-stage"},[n("div",{staticClass:"baberrage-top"},e._l(e.topQueue,(function(e){return n("VueBaberrageMsg",{key:e.id,staticClass:"baberrage-item",attrs:{item:e}})})),1),e._v(" "),e._l(e.lanes,(function(t){return n("div",{key:t.id,staticClass:"baberrage-lane"},e._l(t.laneQueue,(function(e){return n("VueBaberrageMsg",{key:e.runtimeId,staticClass:"baberrage-item",attrs:{item:e}})})),1)})),e._v(" "),n("div",{staticClass:"baberrage-bottom"},e._l(e.bottomQueue,(function(e){return n("VueBaberrageMsg",{key:e.id,staticClass:"baberrage-item",attrs:{item:e}})})),1)],2)};v._withStripped=!0;const y=l({render:v,staticRenderFns:[]},(function(e){e&&e("data-v-4fa46986_0",{source:".baberrage-stage {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n",map:{version:3,sources:["vue-baberrage.vue"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB",file:"vue-baberrage.vue",sourcesContent:[".baberrage-stage {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n"]},media:void 0})}),A,void 0,!1,void 0,!1,h,void 0,void 0);y.install=function(e,t){e.component(y.name,y)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(y),e.MESSAGE_TYPE=g,e.vueBaberrage=y,Object.defineProperty(e,"__esModule",{value:!0})}));
