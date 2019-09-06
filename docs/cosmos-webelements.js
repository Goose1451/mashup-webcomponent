var PegaCosmosElements=function(){"use strict";function e(e,t,i,s){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(s):void 0})}function t(e,t,i,s,r){var n={};return Object.keys(s).forEach(function(e){n[e]=s[e]}),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=i.slice().reverse().reduce(function(i,s){return s(e,t,i)||i},n),r&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(r):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(e,t,n),n=null),n}const i=new WeakMap,s=e=>"function"==typeof e&&i.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},o={},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,d=new RegExp(`${l}|${c}`),h="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],r=document.createTreeWalker(t.content,133,null,!1);let n=0,o=-1,a=0;const{strings:c,values:{length:p}}=e;for(;a<p;){const e=r.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)u(t[e].name,h)&&s++;for(;s-- >0;){const t=c[a],i=m.exec(t)[2],s=i.toLowerCase()+h,r=e.getAttribute(s);e.removeAttribute(s);const n=r.split(d);this.parts.push({type:"attribute",index:o,name:i,strings:n}),a+=n.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const s=e.parentNode,r=t.split(d),n=r.length-1;for(let t=0;t<n;t++){let i,n=r[t];if(""===n)i=g();else{const e=m.exec(n);null!==e&&u(e[2],h)&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-h.length)+e[3]),i=document.createTextNode(n)}s.insertBefore(i,e),this.parts.push({type:"node",index:++o})}""===r[n]?(s.insertBefore(g(),e),i.push(e)):e.data=r[n],a+=n}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&o!==n||(o++,t.insertBefore(g(),e)),n=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(i.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const u=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},f=e=>-1!==e.index,g=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class v{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let n,o=0,a=0,l=s.nextNode();for(;o<i.length;)if(n=i[o],f(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=t.pop(),l=s.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}const b=` ${l} `;class y{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const e=this.strings[s],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const n=m.exec(e);t+=null===n?e+(i?b:c):e.substr(0,n.index)+n[1]+n[2]+h+n[3]+l}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const x=e=>null===e||!("object"==typeof e||"function"==typeof e),_=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class w{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let s=0;s<t;s++){i+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(x(e)||!_(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===o||x(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=o,e(this)}this.value!==o&&this.committer.commit()}}class k{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(g()),this.endNode=e.appendChild(g())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=g()),e.__insert(this.endNode=g())}insertAfterPart(e){e.__insert(this.startNode=g()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o,e(this)}const e=this.__pendingValue;e!==o&&(x(e)?e!==this.value&&this.__commitText(e):e instanceof y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):_(e)?this.__commitIterable(e):e===a?(this.value=a,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const i=new v(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const r of e)void 0===(i=t[s])&&(i=new k(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(r),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o,e(this)}if(this.__pendingValue===o)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=o}}class $ extends w{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends S{}let N=!1;try{const e={get capture(){return N=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class A{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o,e(this)}if(this.__pendingValue===o)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=T(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=o}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const T=e=>e&&(N?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);const E=new class{handleAttributeExpressions(e,t,i,s){const r=t[0];if("."===r){return new $(e,t.slice(1),i).parts}return"@"===r?[new A(e,t.slice(1),s.eventContext)]:"?"===r?[new C(e,t.slice(1),i)]:new w(e,t,i).parts}handleTextExpression(e){return new k(e)}};function z(e){let t=D.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},D.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(l);return void 0===(i=t.keyString.get(s))&&(i=new p(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}const D=new Map,I=new WeakMap,V=(e,t,i)=>{let s=I.get(t);void 0===s&&(n(t,t.firstChild),I.set(t,s=new k(Object.assign({templateFactory:z},i))),s.appendInto(t)),s.setValue(e),s.commit()};(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const O=(e,...t)=>new y(e,t,"html",E),R=133;function F(e,t){const{element:{content:i},parts:s}=e,r=document.createTreeWalker(i,R,null,!1);let n=j(s),o=s[n],a=-1,l=0;const c=[];let d=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,o=s[n=j(s,n)]}c.forEach(e=>e.parentNode.removeChild(e))}const U=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,R,null,!1);for(;i.nextNode();)t++;return t},j=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(f(t))return i}return-1};const q=(e,t)=>`${e}--${t}`;let M=!0;void 0===window.ShadyCSS?M=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),M=!1);const L=e=>t=>{const i=q(t.type,e);let s=D.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},D.set(i,s));let r=s.stringsArray.get(t.strings);if(void 0!==r)return r;const n=t.strings.join(l);if(void 0===(r=s.keyString.get(n))){const i=t.getTemplateElement();M&&window.ShadyCSS.prepareTemplateDom(i,e),r=new p(t,i),s.keyString.set(n,r)}return s.stringsArray.set(t.strings,r),r},H=["html","svg"],B=new Set,W=(e,t,i)=>{B.add(e);const s=i?i.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let e=0;e<n;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{H.forEach(t=>{const i=D.get(q(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),F(e,i)})})})(e);const a=s.content;i?function(e,t,i=null){const{element:{content:s},parts:r}=e;if(null==i)return void s.appendChild(t);const n=document.createTreeWalker(s,R,null,!1);let o=j(r),a=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===i&&(a=U(t),i.parentNode.insertBefore(t,i));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=j(r,o);return}o=j(r,o)}}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),F(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const J={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},G=(e,t)=>t!==e&&(t==t||e==e),K={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:G},Q=Promise.resolve(!0),X=1,Y=4,Z=8,ee=16,te=32,ie="finalized";class se extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Q,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=K){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[i]},set(t){const s=this[e];this[i]=t,this._requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(ie)||e.finalize(),this[ie]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=G){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||J,r="function"==typeof s?s:s.fromAttribute;return r?r(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||J.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|te,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=K){const s=this.constructor,r=s._attributeNameForProperty(e,i);if(void 0!==r){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=this._updateState|Z,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=this._updateState&~Z}}_attributeToProperty(e,t){if(this._updateState&Z)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i._classProperties.get(s)||K;this._updateState=this._updateState|ee,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~ee}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const s=this.constructor,r=s._classProperties.get(e)||K;s._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||this._updateState&ee||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|Y;const i=this._updatePromise;this._updatePromise=new Promise((i,s)=>{e=i,t=s});try{await i}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&te}get _hasRequestedUpdate(){return this._updateState&Y}get hasUpdated(){return this._updateState&X}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&X||(this._updateState=this._updateState|X,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Y}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}se[ie]=!0;const re=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}}:Object.assign({},t,{finisher(i){i.createProperty(t.key,e)}}),ne=(e,t,i)=>{t.constructor.createProperty(i,e)};function oe(e){return(t,i)=>void 0!==i?ne(e,t,i):re(e,t)}const ae="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const le=e=>e.flat?e.flat(1/0):function e(t,i=[]){for(let s=0,r=t.length;s<r;s++){const r=t[s];Array.isArray(r)?e(r,i):i.push(r)}return i}(e);class ce extends se{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){le(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ae?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ce.finalized=!0,ce.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,r=I.has(t),o=M&&11===t.nodeType&&!!t.host,a=o&&!B.has(s),l=a?document.createDocumentFragment():t;if(V(e,l,Object.assign({templateFactory:L(s)},i)),a){const e=I.get(l);I.delete(l);const i=e.value instanceof v?e.value.template:void 0;W(s,l,i),n(t,t.firstChild),t.appendChild(l),I.set(t,e)}!r&&o&&window.ShadyCSS.styleElement(t.host)};const de=(e,t,i,s,r)=>O`<div>${pe(e,t)}</div>${fe(i,s,r)}`,he=(e,t,i,s)=>O`<div>${pe(e,t)}</div>${ge(i,s)}`,pe=(e,t)=>O`${e.map((e,i)=>{const s=`${t}/${i}`;if(console.log(e,s),e.layout){""!==e.layout.groupFormat.trim()&&"CENTER"!==e.layout.groupFormat||(e.layout.groupFormat="default");const t=`flex ${e.layout.groupFormat.replace(/ /g,"_").toLowerCase()}`;return e.layout.view&&e.layout.view.groups?O`<div class=${t}>${pe(e.layout.view.groups,s)}</div>`:e.layout.groups?O`<div class=${t}>${pe(e.layout.groups,s)}</div>`:null}return e.field?O`${ue(e.field,s)}`:e.view&&e.view.groups?O`<div class=flex>${pe(e.view.groups,s)}</div>`:null})}`,ue=(e,t)=>{if(void 0===e||void 0===e.control||void 0===e.control.type)return null;switch(console.log(e),e.control.type){case"pxTextInput":return O`${be(e,t)}`;case"pxTextArea":return O`${ye(e,t)}`;case"pxRadioButtons":return O`${_e(e,t)}`;case"pxCheckbox":return O`${we(e,t)}`;case"pxDropdown":return O`${Se(e,t)}`;case"pxDisplayText":return O`${ve(e,t)}`;case"pxIcon":return O`${xe(e,t)}`;default:return null}},fe=(e,t,i)=>O`<div class="flex inline_middle margin-t-2x"><button path=workareabutton-cancel @click=${e}>Cancel</button> <button class=margin-l-auto path=workareabutton-save @click=${t}>Save</button> <button class=primary path=workareabutton-submit @click=${i}>Submit</button></div>`,ge=(e,t)=>O`<div class="flex inline_middle margin-t-2x"><button path=workareabutton-cancel @click=${e}>Cancel</button> <button class="margin-l-auto primary" path=workareabutton-submit @click=${t}>Create</button></div>`,me=(e,t)=>O`${""!==e.label||!0===e.labelReserveSpace?O`<label for=${t}>${e.label}</label>`:null}`,ve=(e,t)=>O`<div class="field-item field-text">${me(e,t)} <span ref=${e.reference} required=${e.required} id=${t} value=${e.value}></div>`,be=(e,t)=>O`<div class="field-item field-textinput"><input ref=${e.reference} required=${e.required} type=text id=${t} value=${e.value} placeholder=${e.label}> ${me(e,t)}</div>`,ye=(e,t)=>O`<div class="field-item field-textarea"><textarea ref=${e.reference} required=${e.required} id=${t} value=${e.value} placeholder=${e.label}>${me(e,t)}</div>`,xe=(e,t)=>O`<div class="field-item field-text"><i class=${e.modes[0].iconStyle} ref=${e.reference} required=${e.required} id=${t} value=${e.value}>${me(e,t)}</div>`,_e=(e,t)=>O`<div class="field-item field-radiogroup" role=radiogroup>${me(e,t)}<div>${e.control.modes[0].options.map((i,s)=>{const r=`rb-${t}-${s}`;return O`<div class=col-2><input ref=${e.reference} name=${t} id=${r} type=radio value=${i.value}> <label for=${r}>${i.value}</label></div>`})}</div></div>`,we=(e,t)=>O`<div class="field-item field-checkbox"><input ref=${e.reference} id=${t} type=checkbox> ${me(e,t)}</div>`,Se=(e,t)=>O`<div class="field-item field-dropdown">${me(e,t)} <select ref=${e.reference} id=${t}>${e.control.modes[0].options.map(e=>O`<option>${e.value}</option>`)}</select></div>`;class ke extends ce{fetchData(e,t,i){const s={method:"GET",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json;charset=UTF-8",Authorization:`Basic ${btoa(`${this.username}:${this.password}`)}`}};let r="",n=`${this.url}/api/v1/`;switch(e){case"worklist":n+="assignments";break;case"newwork":n+=`casetypes/${t}`;break;case"assignment":n+=`assignments/${t}`;break;case"case":n+=`cases/${t}`;break;case"page":n+=`cases/${t}/pages/${i}`;break;case"assignmentaction":n+=`assignments/${t}/actions/${i}`}fetch(n,s).then(e=>(r=e.headers.get("etag"),e.ok?e.json():Promise.reject(e))).then(i=>{const s=this.getRenderRoot().querySelector("#case-data");switch(e){case"worklist":this.cases=i.assignments;break;case"assignment":this.data=i,this.caseID=this.data.caseID,this.fetchData("case",this.caseID),this.fetchData("assignmentaction",t,i.actions[0].ID);break;case"case":this.casedata=i.content,this.casedata.etag=r;break;case"assignmentaction":V(de(i.view.groups,"Obj",this.actionAreaCancel,this.actionAreaSave,this.actionAreaSubmit),s);break;case"page":V(de(i.groups,"Obj",this.actionAreaCancel,this.actionAreaSave,this.actionAreaSubmit),s);break;case"newwork":this.content={},V(he(i.creation_page.groups[0].layout.groups,"Obj",this.createAreaCancel,this.createAreaCreate),s)}this.requestUpdate()}).catch(e=>console.error("Error:",e))}sendData(e,t,i){const s={method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json;charset=UTF-8",Authorization:`Basic ${btoa(`${this.username}:${this.password}`)}`}};let r="",n=`${this.url}/api/v1/`;switch(e){case"newwork":n+="cases",s.body=JSON.stringify({content:this.content,caseTypeID:t});break;case"submitcase":n+=`assignments/${t}?actionID=${i}`,s.body=JSON.stringify({content:this.content});break;case"savecase":n+=`cases/${t}`,s.headers["If-Match"]=this.casedata.etag,s.method="PUT",s.body=JSON.stringify({content:this.content})}fetch(n,s).then(e=>(r=e.headers.get("etag"),e.ok?200===e.status||201===e.status?e.json():Promise.resolve("ok"):Promise.reject(e))).then(t=>{switch(e){case"newwork":case"submitcase":console.log("etag ",r),t.ID&&(this.caseID=t.ID),t.nextAssignmentID?this.fetchData("assignment",t.nextAssignmentID):t.nextPageID&&this.fetchData("page",this.caseID,t.nextPageID)}this.requestUpdate()}).catch(e=>console.error("Error:",e))}}var Ce,$e,Pe,Ne,Ae,Te,Ee,ze,De,Ie,Ve,Oe,Re,Fe,Ue,je,qe;return Ce=(e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t))("pega-mashup"),$e=oe({type:String}),Pe=oe({type:String}),Ne=oe({type:String}),Ae=oe({type:String}),Te=oe({type:String}),Ee=oe({type:String}),ze=oe({type:Array}),Ce((Ve=t((Ie=class extends ke{constructor(...t){super(...t),e(this,"url",Ve,this),e(this,"caseID",Oe,this),e(this,"username",Re,this),e(this,"password",Fe,this),e(this,"action",Ue,this),e(this,"casetype",je,this),e(this,"cases",qe,this),this.actionAreaCancel=()=>{this.cases=[],this.caseID="",this.fetchData("worklist")},this.actionAreaSave=()=>{this.sendData("savecase",this.caseID)},this.actionAreaSubmit=()=>{this.sendData("submitcase",this.data.ID,this.data.actions[0].ID)},this.createAreaCancel=()=>{this.parentNode.removeChild(this)},this.createAreaCreate=()=>{this.sendData("newwork",this.casetype)},this.reloadElement=()=>{this.cases=[],this.caseID="",this.fetchData("worklist")}}createRenderRoot(){return"false"!==this.getAttribute("useshadowdom")?this.attachShadow({mode:"open"}):this}getRenderRoot(){return"false"!==this.getAttribute("useshadowdom")?this.shadowRoot:this}displayContent(){return""!==this.caseID?O`<h2>Assignment - ${this.caseID}</h2><div id=case-data></div>`:"workList"===this.action?((e,t)=>O`<button id=reload @click=${t}>Reload</button> ${e.length>0?O`<table id=worklist><thead><tr><th>case ID</th><th>assignment ID</th><th>Name</th><th>Routed to</th><th class=right-aligned>Urgency</th></tr></thead><tbody>${e.map(e=>O`<tr><td>${e.caseID}</td><td><a data-type=assignment>${e.ID}</a></td><td>${e.name}</td><td>${e.routedTo}</td><td class=right-aligned>${e.urgency}</td></tr><tr></tr>`)}</tbody></table>`:O`<div class=margin-t-2x>no assignments</div>`}`)(this.cases,this.reloadElement):"createNewWork"===this.action?O`<h2>New Work - ${this.casetype}</h2><div id=case-data></div>`:null}render(){return O`${"false"!==this.getAttribute("useshadowdom")?(()=>O`<style>label{color:var(--generalLabelColor);padding-bottom:3px}.field-item>label{padding-bottom:var(--spacing1x)}h1{font-size:var(--text-xxl)}h2{font-size:var(--text-xl)}h3{font-size:var(--text-l)}h4{font-size:var(--text-m)}h5{font-size:var(--text-s)}h6{font-size:var(--text-xs)}h1,h2,h3,h4,h5,h6{color:var(--generalTextColor)}input[type=text]{overflow:hidden;border:1px solid transparent;border-bottom-color:#e5e6e9;font-size:var(--generalTextFontSize);color:var(--generalTextColor);font-weight:400;text-align:left;background-color:transparent;display:block;width:100%;outline:0;padding:var(--spacing05x) var(--spacing1x) 0 var(--spacing1x);height:var(--controlHeight)}input[type=text]:active,input[type=text]:focus,input[type=text]:hover{outline:0;border-bottom:1px solid var(--primaryColor)}.field-textinput{margin:var(--spacing2x) 0 var(--spacing1x) 0;position:relative;display:flex}.field-textinput>label{position:absolute;top:0;left:var(--spacing1x);transition:all .3s ease;padding:0;margin:14px 0 0 0;pointer-events:none;font-size:var(--generalTextFontSize);color:var(--generalLabelColor)}.field-textinput>input,.field-textinput>input:active,.field-textinput>input:focus,.field-textinput>input:hover{transition:all .3s linear}.field-textinput>input::placeholder{color:transparent;font-size:0}.field-textinput>input:active+label,.field-textinput>input:focus+label,.field-textinput>input:not(:placeholder-shown)+label{font-size:75%;transform:translate3d(0,-100%,0);margin-top:var(--spacing1x)}textarea{overflow:hidden;border:solid #e5e6e9 1px;margin:1px 0;background-image:none;background-color:#fff;font-family:OpenSans,sans-serif;font-size:var(--generalTextFontSize);color:var(--generalTextColor);font-weight:400;text-align:left;background-color:transparent;display:block;tab-size:4;width:100%;border:1px solid #ccc;outline:0}textarea:active,textarea:focus,textarea:hover{outline:0;border-bottom:1px solid var(--primaryColor)}input[type=radio]{position:absolute;left:-9999em}input[type=radio]+label::before{content:'';position:absolute;left:0;top:0;border-radius:50%;transition:.2s ease all;background:#fff;border:1px solid #cacdd6;width:28px;height:28px;display:inline-block;margin:0 4px 0 0;box-sizing:border-box;padding:0;vertical-align:top}input[type=radio]+label{pointer-events:all;position:relative;padding-left:40px;padding-top:0;cursor:pointer;width:100%;margin:0 10px 10px 0;display:inline-block;color:var(--generalTextColor);font-weight:400;text-decoration:inherit;text-transform:none;font-size:var(--generalTextFontSize);font-family:OpenSans,sans-serif;line-height:28px;min-height:30px}input[type=radio]:checked+label::before{background:#fff;border-width:9px;border-color:var(--primaryColor)}.field-radiogroup>div{display:flex;flex-flow:row wrap}a:link,a:visited{color:var(--linkColor);cursor:pointer;text-decoration:none}a:active,a:focus,a:hover{cursor:pointer;color:var(--linkColorFocus);text-decoration:underline}select:hover{border:1px solid #d3197c}select{background:#fff url(/caret-down.svg) no-repeat 96% 60%;background-size:16px;font-family:OpenSans,sans-serif;font-size:var(--generalTextFontSize);color:#000;font-weight:400;text-decoration:inherit;text-transform:none;line-height:1.4;height:var(--controlHeight);padding:0 var(--spacing1x);outline:0;min-width:280px;border:1px solid transparent;border-bottom:solid #e5e6e9 1px;-webkit-appearance:none;-moz-appearance:none;appearance:none}input[type=checkbox]{position:absolute;left:-9999em}input[type=checkbox]:checked+label:before{background:url(/check-w.svg) no-repeat 50% 50%;background-color:var(--primaryColor);background-size:16px;border-color:var(--primaryColor)}input[type=checkbox]+label:before{content:'';position:absolute;left:0;top:0;width:28px;height:28px;transition:.2s ease all;border:1px solid}input[type=checkbox]+label{pointer-events:all;position:relative;padding-left:40px;padding-top:4px;cursor:pointer;height:calc(var(--controlHeight) - var(--spacing1x));width:100%;margin:0 var(--spacing1x) 0 0;display:block;color:var(--generalTextColor)}button{min-width:130px;margin:0;height:var(--controlHeight);padding:0 var(--spacing2x);font-size:var(--generalTextFontSize);cursor:pointer;color:var(--primaryColor);border:1px solid var(--primaryColor);border-radius:5px}button:active{outline:0;background-color:var(--primaryColorFocus);color:#fff}button:focus{outline:0;background-color:var(--primaryColorFocus);color:#fff}button:hover{outline:0;background-color:var(--primaryColorFocus);color:#fff}button.primary{background-color:var(--primaryColor);color:#fff;border-color:transparent}button.primary:active{background-color:var(--primaryColorFocus)}button.primary:focus{background-color:var(--primaryColorFocus)}button.primary:hover{background-color:var(--primaryColorFocus)}.right-aligned{text-align:right}.margin-l-auto{margin-left:auto}.margin-t-2x{margin-top:var(--spacing2x)}.flex{display:flex}.flex.inline_grid_double{flex-flow:row wrap}.flex.inline_grid_double>div{width:calc(50% - var(--spacing1x))}.flex.inline_grid_double>div:nth-child(2n){margin-left:var(--spacing1x)}.flex.inline_grid_double>div:nth-child(2n+1){margin-right:var(--spacing1x)}.flex.default,.flex.stacked{flex-flow:column nowrap}.flex.default>div{min-height:40px;margin-bottom:var(--spacing2x)}.flex.stacked>div{display:flex;flex-flow:column nowrap;min-height:35px;margin-bottom:var(--spacing2x)}.flex.inline_middle>*{margin-right:var(--spacing1x)}.flex.inline_middle>:last-child{margin-right:0}.flex.inline_grid_70_30>div:nth-child(2n){width:30%}.flex.inline_grid_70_30>div:nth-child(2n+1){width:70%}</style>`)():""}<div id=mashup>${this.displayContent()}</div>`}firstUpdated(){const e=this.getRenderRoot().querySelector("#mashup");e&&(e.addEventListener("click",e=>{const t=e.target;if(t&&"A"===t.tagName){"assignment"===t.getAttribute("data-type")&&this.fetchData("assignment",t.innerText)}}),e.addEventListener("change",e=>{const t=e.target,i=t.getAttribute("ref");void 0===this.content&&(this.content={}),null!==i&&"pyID"!==i&&(this.content[i]=t.value)})),"workList"===this.action?this.fetchData("worklist"):"createNewWork"===this.action&&this.fetchData("newwork",this.casetype)}}).prototype,"url",[$e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Oe=t(Ie.prototype,"caseID",[Pe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Re=t(Ie.prototype,"username",[Ne],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Fe=t(Ie.prototype,"password",[Ae],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ue=t(Ie.prototype,"action",[Te],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),je=t(Ie.prototype,"casetype",[Ee],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),qe=t(Ie.prototype,"cases",[ze],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),De=Ie))||De}();