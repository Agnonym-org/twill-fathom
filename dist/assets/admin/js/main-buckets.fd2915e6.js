(function(t){function e(e){for(var s,c,r=e[0],o=e[1],u=e[2],d=0,f=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},a={"main-buckets":0},i=[];function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=o;i.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,e,n){t.exports=n("6d6bf")},"31cf":function(t,e,n){},"3e03":function(t,e,n){"use strict";n("31cf")},5475:function(t,e,n){},"54ae":function(t,e,n){"use strict";n("d0ee")},"6d6bf":function(t,e,n){"use strict";n.r(e);var s=n("a026"),a=n("1539"),i=n("b171"),c=(n("878a"),n("16f9")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"buckets"},[n("div",{staticClass:"buckets__page-title"},[n("div",{staticClass:"container buckets__page-title-content"},[n("h2",[t._t("default")],2),n("div",{staticClass:"buckets__page-title-actions"},[n("a17-button",{attrs:{variant:"validate"},on:{click:t.save}},[t._v(t._s(t.$trans("buckets.publish")))]),t._l(t.extraActions,(function(e){return n("a17-button",{key:e.url,attrs:{el:"a",href:e.url,download:e.download||"",target:e.target||"",rel:e.rel||"",variant:"secondary"}},[t._v(t._s(e.label))])}))],2)])]),n("div",{staticClass:"container"},[n("div",{staticClass:" wrapper"},[n("div",{staticClass:"buckets__container col--even"},[n("a17-fieldset",{staticClass:"buckets__fieldset",attrs:{title:t.title,activeToggle:!1}},[n("div",{staticClass:"buckets__header"},[n("div",{staticClass:"buckets__sources"},[t.singleSource?t._e():n("a17-vselect",{staticClass:"sources__select",attrs:{name:"sources",selected:t.currentSource,options:t.dataSources,required:!0},on:{change:t.changeDataSource}})],1),n("div",{staticClass:"buckets__filter"},[n("a17-filter",{on:{submit:t.filterBucketsData}})],1)]),t.source.items.length>0?n("table",{staticClass:"buckets__list"},[n("tbody",t._l(t.source.items,(function(e){return n("a17-bucket-item-source",{key:e.id,attrs:{item:e,singleBucket:t.singleBucket,buckets:t.buckets},on:{"add-to-bucket":t.addToBucket}})})),1)]):n("div",{staticClass:"buckets__empty"},[n("h4",[t._v(t._s(t.emptySource))])]),n("a17-paginate",{attrs:{max:t.max,value:t.page,offset:t.offset,availableOffsets:t.availableOffsets},on:{changePage:t.updatePage,changeOffset:t.updateOffset}})],1)],1),n("div",{staticClass:"buckets__container col--even"},t._l(t.buckets,(function(e,s){return n("a17-fieldset",{key:e.id,class:"buckets__fieldset buckets__fieldset--"+(s+1),attrs:{name:"bucket_"+e.id,activeToggle:!1}},[n("h3",{staticClass:"buckets__fieldset__header",attrs:{slot:"header"},slot:"header"},[n("span",[t.buckets.length>1?n("span",{staticClass:"buckets__number"},[t._v(t._s(s+1))]):t._e(),t._v(" "+t._s(e.name))]),t._v(" "),n("span",{staticClass:"buckets__size-infos"},[t._v(t._s(e.children.length)+" / "+t._s(e.max))])]),e.children.length>0?n("draggable",{staticClass:"buckets__list buckets__draggable",attrs:{options:t.dragOptions,value:e.children,tag:"table"},on:{change:function(e){return t.sortBucket(e,s)}}},[n("transition-group",{attrs:{name:"fade_scale_list",tag:"tbody"}},t._l(e.children,(function(s,a){return n("a17-bucket-item",{key:s.id+"_"+a,attrs:{item:s,restricted:t.restricted,draggable:e.children.length>1,singleBucket:t.singleBucket,singleSource:t.singleSource,bucket:e.id,buckets:t.buckets,withToggleFeatured:e.withToggleFeatured,toggleFeaturedLabels:e.toggleFeaturedLabels},on:{"add-to-bucket":t.addToBucket,"remove-from-bucket":t.deleteFromBucket,"toggle-featured-in-bucket":t.toggleFeaturedInBucket}})})),1)],1):n("div",{staticClass:"buckets__empty"},[n("h4",[t._v(t._s(t.emptyBuckets))])])],1)})),1)])]),n("a17-modal",{ref:"overrideBucket",staticClass:"modal--tiny modal--form modal--withintro",attrs:{title:"Override Bucket"}},[n("p",{staticClass:"modal--tiny-title"},[n("strong",[t._v("Are you sure ?")])]),n("p",{domProps:{innerHTML:t._s(t.overrideBucketText)}}),n("a17-inputframe",[n("a17-button",{attrs:{variant:"validate"},on:{click:t.override}},[t._v("Override")]),n("a17-button",{attrs:{variant:"aslink"},on:{click:function(e){return t.$refs.overrideBucket.close()}}},[n("span",[t._v("Cancel")])])],1)],1)],1)},o=[],u=n("2f62"),l=n("0429"),d=n("f1af"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"buckets__item",class:t.customClasses},[t.draggable?n("td",{staticClass:"drag__handle"},[n("div",{staticClass:"drag__handle--drag"})]):t._e(),t.item.thumbnail?n("td",{staticClass:"buckets__itemThumbnail"},[n("img",{attrs:{src:t.item.thumbnail,alt:t.item.name}})]):t._e(),t.withToggleFeatured?n("td",{staticClass:"buckets__itemStarred",class:{"buckets__itemStarred--active":t.item.starred}},[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip"}],attrs:{"data-tooltip-title":t.item.starred?t.toggleFeaturedLabels["unstar"]?t.toggleFeaturedLabels["unstar"]:"Unfeature":t.toggleFeaturedLabels["star"]?t.toggleFeaturedLabels["star"]:"Feature"},on:{click:function(e){return e.preventDefault(),t.toggleFeatured(e)}}},[n("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"star-feature_active"}}),n("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"star-feature"}})])]):t._e(),n("td",{staticClass:"buckets__itemTitle"},[n("h4",[t.item.edit?n("span",{staticClass:"f--link-underlined--o"},[n("a",{attrs:{href:t.item.edit,target:"_blank"}},[t._v(t._s(t.item.name))])]):n("span",[t._v(t._s(t.item.name))])])]),t.item.content_type&&!t.singleSource?n("td",{staticClass:"buckets__itemContentType"},[t._v(" "+t._s(t.item.content_type.label)+" ")]):t._e(),n("td",{staticClass:"buckets__itemOptions"},[t.singleBucket?t._e():n("a17-dropdown",{ref:"bucketDropdown",staticClass:"item__dropdown bucket__action",attrs:{position:"bottom-right",title:"Featured in",clickable:!0}},[n("a17-button",{attrs:{variant:"icon"},on:{click:function(e){return t.$refs.bucketDropdown.toggle()}}},[n("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"more-dots"}})]),t.restricted?n("div",{staticClass:"item__dropdown__content",attrs:{slot:"dropdown__content"},slot:"dropdown__content"},[n("a17-radiogroup",{attrs:{name:"bucketsSelection",radioClass:"bucket",radios:t.dropDownBuckets,initialValue:t.selectedBuckets()[0]},on:{change:t.updateBucket}})],1):n("div",{staticClass:"item__dropdown__content",attrs:{slot:"dropdown__content"},slot:"dropdown__content"},[n("a17-checkboxgroup",{attrs:{name:"bucketsSelection",options:t.dropDownBuckets,selected:t.selectedBuckets()},on:{change:t.updateBucket}})],1)],1),n("a17-button",{staticClass:"bucket__action",attrs:{icon:"close"},on:{click:function(e){return t.removeFromBucket()}}},[n("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"close_icon"}})])],1)])},b=[],_=n("14bd"),m=n("3a52");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v={components:{A17Dropdown:_["a"]},name:"a17BucketItem",props:{bucket:{type:String},draggable:{type:Boolean,default:!1},restricted:{type:Boolean,default:!1},type:{type:String,default:"bucket"},singleSource:{type:Boolean,default:!1},withToggleFeatured:{type:Boolean,default:!1},toggleFeaturedLabels:{type:Array,default:function(){return[]}}},mixins:[m["a"]],computed:{inBuckets:function(){var t=this,e=!1;return t.buckets.forEach((function(n){n.children.find((function(e){return e.id===t.item.id&&e.content_type.value===t.item.content_type.value}))&&(e=!0)})),e},customClasses:function(){return k(k({},this.bucketClasses),{},{draggable:this.draggable})},dropDownBuckets:function(){var t=[],e=this,n=1;return this.buckets.length>0&&this.buckets.forEach((function(s){e.restrictedBySource(s.id)&&t.push({value:e.slug(s.id),label:n+" "+s.name}),n++})),t}},methods:{removeFromBucket:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.bucket;this.$emit("remove-from-bucket",this.item,t)},toggleFeatured:function(){this.$emit("toggle-featured-in-bucket",this.item,this.bucket)},selectedBuckets:function(){var t=[],e=this;return this.buckets.length>0&&this.buckets.forEach((function(n){e.inBucketById(n.id)&&t.push(e.slug(n.id))})),t.length>0?t:[]},slug:function(t){return"bucket-"+this.bucket+"_item-"+this.item.id+"_type-"+this.item.content_type.value+"_inb-"+t},updateBucket:function(t){var e="inb-",n=this,s=n.selectedBuckets();if(n.restricted){var a=t.split(e)[1];n.inBucketById(a)||(n.$refs.bucketDropdown.toggle(),n.addToBucket(a))}else s.forEach((function(s){if(-1===t.indexOf(s)){var a=s.split(e)[1];n.$refs.bucketDropdown.toggle(),n.removeFromBucket(a)}})),Array.isArray(t)&&t.forEach((function(t){var s=t.split(e)[1];n.inBucketById(s)||(n.$refs.bucketDropdown.toggle(),n.addToBucket(s))}))}}},h=v,T=(n("54ae"),n("2877")),y=Object(T["a"])(h,f,b,!1,null,"833d5172",null),E=y.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"buckets__item",class:t.bucketClasses},[t.item.thumbnail?n("td",{staticClass:"buckets__itemThumbnail"},[n("img",{attrs:{src:t.item.thumbnail,alt:t.item.name}})]):t._e(),n("td",{staticClass:"buckets__itemTitle"},[n("h4",[t.item.edit?n("span",{staticClass:"f--link-underlined--o"},[n("a",{attrs:{href:t.item.edit,target:"_blank"}},[t._v(t._s(t.item.name))])]):n("span",[t._v(t._s(t.item.name))]),t.item.languages?[n("br"),n("a17-tableLanguages",{attrs:{languages:t.item.languages}})]:t._e()],2)]),t.item.publication?n("td",{staticClass:"buckets__itemDate"},[t._v(" "+t._s(t.item.publication)+" ")]):t._e(),n("td",{staticClass:"buckets__itemOptions"},[t.singleBucket&&!t.inBucketById(t.buckets[0].id)?n("a17-button",{attrs:{icon:"add"},on:{click:function(e){return t.addToBucket(t.buckets[0].id)}}},[n("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"add"}})]):t.singleBucket?n("a17-button",{attrs:{icon:"add",disabled:!0}},[n("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"add"}})]):t._l(t.buckets,(function(e,s){return[!t.inBucketById(e.id)&&t.restrictedBySource(e.id)?n("a17-button",{key:e.id,staticClass:"bucket__action",attrs:{icon:"bucket--"+(s+1)},on:{click:function(n){return t.addToBucket(e.id)}}},[t._v(t._s(s+1))]):t.restrictedBySource(e.id)?n("a17-button",{key:e.id,staticClass:"bucket__action selected",attrs:{icon:"bucket--"+(s+1),disabled:!0}},[t._v(t._s(s+1))]):t._e()]}))],2)])},O=[],C=n("98d2"),S={mixins:[m["a"]],components:{"a17-tableLanguages":C["a"]}},w=S,D=Object(T["a"])(w,B,O,!1,null,null,null),A=D.exports,x=n("5420"),I=n("1980"),P=n.n(I),U=n("55d2"),j=n("75fb"),L=n("5d16"),F=n("7b5e");function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){R(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var G,M,N={name:"A17Buckets",mixins:[x["a"]],props:{title:{type:String,default:"Features"},emptyBuckets:{type:String,default:"No items selected."},emptySource:{type:String,default:"No items found."},overridableMax:{type:Boolean,default:!1},restricted:{type:Boolean,default:!0},extraActions:{type:Array,default:function(){return[]}}},components:{"a17-bucket-item":E,"a17-bucket-item-source":A,"a17-fieldset":j["a"],"a17-paginate":U["a"],"a17-filter":L["a"],"a17-vselect":F["a"],draggable:P.a},data:function(){return{currentBucketID:"",currentItem:"",overrideItem:!1}},computed:$($($({},Object(u["c"])({buckets:function(t){return t.buckets.buckets},source:function(t){return t.buckets.source},dataSources:function(t){return t.buckets.dataSources.content_types},page:function(t){return t.buckets.page},availableOffsets:function(t){return t.buckets.availableOffsets},offset:function(t){return t.buckets.offset},max:function(t){return t.buckets.maxPage}})),Object(u["b"])(["currentSource"])),{},{singleBucket:function(){return 1===this.buckets.length},singleSource:function(){return 1===this.dataSources.length},overrideBucketText:function(){var t=this,e=this.buckets.find((function(e){return e.id===t.currentBucketID})),n="",s="";return e&&(n=e.name,s=e.max),'Bucket <em>"'+n+'"</em> has a strict limit of '+s+" items. Do you want to override the first item of this bucket ?"}}),methods:{addToBucket:function(t,e){var n=this.buckets.findIndex((function(t){return t.id===e}));if(t||-1!==n){this.currentBucketID=e,this.currentItem=t;var s={index:n,item:t},a=this.buckets[n].children.length;a>-1&&a<this.buckets[n].max?(this.checkRestriced(t),this.$store.commit(l["c"].ADD_TO_BUCKET,s)):this.overridableMax||this.overrideItem?(this.checkRestriced(t),this.$store.commit(l["c"].ADD_TO_BUCKET,s),this.$store.commit(l["c"].DELETE_FROM_BUCKET,{index:n,itemIndex:0}),this.overrideItem=!1):this.$refs.overrideBucket.open()}},deleteFromBucket:function(t,e){var n=this.buckets.findIndex((function(t){return t.id===e}));if(-1!==n){var s=this.buckets[n].children.findIndex((function(e){return e.id===t.id&&e.content_type.value===t.content_type.value}));if(-1!==s){var a={index:n,itemIndex:s};this.$store.commit(l["c"].DELETE_FROM_BUCKET,a)}}},toggleFeaturedInBucket:function(t,e){var n=this.buckets.findIndex((function(t){return t.id===e}));if(-1!==n){var s=this.buckets[n].children.findIndex((function(e){return e.id===t.id&&e.content_type.value===t.content_type.value}));if(-1!==s){var a={index:n,itemIndex:s};this.$store.commit(l["c"].TOGGLE_FEATURED_IN_BUCKET,a)}}},checkRestriced:function(t){var e=this;this.restricted&&this.buckets.forEach((function(n){n.children.forEach((function(s){s.id===t.id&&s.content_type.value===t.content_type.value&&e.deleteFromBucket(t,n.id)}))}))},sortBucket:function(t,e){var n={bucketIndex:e,oldIndex:t.moved.oldIndex,newIndex:t.moved.newIndex};this.$store.commit(l["c"].REORDER_BUCKET_LIST,n)},changeDataSource:function(t){this.$store.commit(l["c"].UPDATE_BUCKETS_DATASOURCE,t),this.$store.commit(l["c"].UPDATE_BUCKETS_DATA_PAGE,1),this.$store.dispatch(d["a"].GET_BUCKETS)},filterBucketsData:function(t){this.$store.commit(l["c"].UPDATE_BUCKETS_DATA_PAGE,1),this.$store.commit(l["c"].UPDATE_BUCKETS_FILTER,t||{search:""}),this.$store.dispatch(d["a"].GET_BUCKETS)},updateOffset:function(t){this.$store.commit(l["c"].UPDATE_BUCKETS_DATA_PAGE,1),this.$store.commit(l["c"].UPDATE_BUCKETS_DATA_OFFSET,t),this.$store.dispatch(d["a"].GET_BUCKETS)},updatePage:function(t){this.$store.commit(l["c"].UPDATE_BUCKETS_DATA_PAGE,t),this.$store.dispatch(d["a"].GET_BUCKETS)},override:function(){this.overrideItem=!0,this.addToBucket(this.currentItem,this.currentBucketID),this.$refs.overrideBucket.close()},save:function(){this.$store.dispatch(d["a"].SAVE_BUCKETS)}}},W=N,V=(n("ce99"),n("81c6"),n("3e03"),Object(T["a"])(W,r,o,!1,null,"ce7600e2",null)),J=V.exports,X=n("2e01"),q=n("54d3"),z=n("bc3a"),H=n.n(z),Y=n("5b51"),Q=n("727d"),Z="BUCKETS",tt={get:function(t,e,n){H.a.get(Object(Y["a"])(),{params:t}).then((function(t){e&&"function"===typeof e&&e(t.data)})).catch((function(t){var e={message:"Get Buckets error",value:t};Object(Q["a"])(Z,e),n&&"function"===typeof n&&n(t)}))},save:function(t,e,n,s){H.a.post(t,e).then((function(t){n&&"function"===typeof n&&n(t)})).catch((function(t){var e={message:"Buckets save error.",value:t};Object(Q["a"])(Z,e),s&&"function"===typeof s&&s(t)}))}};function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var nt={saveUrl:window["TWILL"].STORE.buckets.saveUrl||"",dataSources:window["TWILL"].STORE.buckets.dataSources||{},source:window["TWILL"].STORE.buckets.source||{},buckets:window["TWILL"].STORE.buckets.items||[],filter:window["TWILL"].STORE.buckets.filter||{},page:window["TWILL"].STORE.buckets.page||1,maxPage:window["TWILL"].STORE.buckets.maxPage||10,offset:window["TWILL"].STORE.buckets.offset||10,availableOffsets:window["TWILL"].STORE.buckets.availableOffsets||[10,20,30]},st={currentSource:function(t){return t.source.content_type}},at=(G={},et(G,l["c"].ADD_TO_BUCKET,(function(t,e){t.buckets[e.index].children.push(e.item)})),et(G,l["c"].DELETE_FROM_BUCKET,(function(t,e){t.buckets[e.index].children.splice(e.itemIndex,1)})),et(G,l["c"].TOGGLE_FEATURED_IN_BUCKET,(function(t,e){var n=t.buckets[e.index].children.splice(e.itemIndex,1);n[0].starred=!n[0].starred,t.buckets[e.index].children.splice(e.itemIndex,0,n[0])})),et(G,l["c"].UPDATE_BUCKETS_DATASOURCE,(function(t,e){t.dataSources.selected.value!==e.value&&(t.dataSources.selected=e)})),et(G,l["c"].UPDATE_BUCKETS_DATA,(function(t,e){t.source=Object.assign({},t.source,e)})),et(G,l["c"].UPDATE_BUCKETS_FILTER,(function(t,e){t.filter=Object.assign({},t.filter,e)})),et(G,l["c"].REORDER_BUCKET_LIST,(function(t,e){var n=t.buckets[e.bucketIndex].children.splice(e.oldIndex,1);t.buckets[e.bucketIndex].children.splice(e.newIndex,0,n[0])})),et(G,l["c"].UPDATE_BUCKETS_DATA_OFFSET,(function(t,e){t.offset=e})),et(G,l["c"].UPDATE_BUCKETS_DATA_PAGE,(function(t,e){t.page=e})),et(G,l["c"].UPDATE_BUCKETS_MAX_PAGE,(function(t,e){t.maxPage=e})),G),it=(M={},et(M,d["a"].GET_BUCKETS,(function(t){var e=t.commit,n=t.state;tt.get({content_type:n.dataSources.selected.value,page:n.page,offset:n.offset,filter:n.filter},(function(t){e(l["c"].UPDATE_BUCKETS_DATA,t.source),e(l["c"].UPDATE_BUCKETS_MAX_PAGE,t.maxPage)}))})),et(M,d["a"].SAVE_BUCKETS,(function(t){var e=t.commit,n=t.state,s={};n.buckets.forEach((function(t){var e=[];t.children.forEach((function(t){e.push({id:t.id,type:t.content_type.value,starred:t.starred})})),s[t.id]=e})),tt.save(n.saveUrl,{buckets:s},(function(t){e(l["j"].SET_NOTIF,{message:"Features saved. All good!",variant:"success"})}),(function(t){e(l["j"].SET_NOTIF,{message:"Your submission could not be validated, please fix and retry",variant:"error"})}))})),M),ct={state:nt,getters:st,mutations:at,actions:it},rt=n("c5ec"),ot=n("ce72");s["a"].use(X["a"]),s["a"].use(q["a"]),a["a"].registerModule("buckets",ct),a["a"].registerModule("language",rt["a"]),a["a"].registerModule("form",ot["a"]),window["TWILL"].vm=window.vm=new s["a"]({store:a["a"],el:"#app",components:{"a17-buckets":J},created:function(){Object(c["a"])()}}),document.addEventListener("DOMContentLoaded",i["a"])},"797d":function(t,e,n){},"81c6":function(t,e,n){"use strict";n("797d")},ce99:function(t,e,n){"use strict";n("5475")},d0ee:function(t,e,n){}});