// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function t(t){return n[t]||null}var i=64,l=8;function u(n,u){var o,a;return o=t(n),a=t(u),null===o||null===a?l:o>a?i/o|0:i/a|0}export{u as default};
//# sourceMappingURL=mod.js.map
