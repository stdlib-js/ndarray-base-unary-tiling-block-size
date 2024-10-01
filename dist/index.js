"use strict";var _=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var s=_(function(N,n){
var I={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};n.exports=I
});var a=_(function(v,S){
var i=require('@stdlib/ndarray-base-bytes-per-element/dist'),E=s();function B(u,r){var e,t;return e=i(u),t=i(r),e===null||t===null?E.BLOCK_SIZE_IN_ELEMENTS:e>t?E.BLOCK_SIZE_IN_BYTES/e|0:E.BLOCK_SIZE_IN_BYTES/t|0}S.exports=B
});var l=a();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
