(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qiye/add-or-update"],{"0338":function(e,n,t){},"31bc":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,u){try{var o=e[a](u),s=o.value}catch(h){return void t(h)}o.done?n(s):Promise.resolve(s).then(i,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var u=e.apply(n,t);function o(e){a(u,i,r,o,s,"next",e)}function s(e){a(u,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("976c"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{zhanghao:"",mima:"",qiyemingcheng:"",tongyishehuixinyongdaima:"",yingyezhizhao:"",farenxingming:"",shenfenzheng:"",shouji:"",youxiang:""},user:{},ro:{zhanghao:!1,mima:!1,qiyemingcheng:!1,tongyishehuixinyongdaima:!1,yingyezhizhao:!1,farenxingming:!1,shenfenzheng:!1,shouji:!1,youxiang:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=u(i.default.mark((function n(t){var r,a,u,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(a=n.sent,this.user=a.data,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=13;break}return this.ruleForm.id=t.id,n.next=11,this.$api.info("qiye",this.ruleForm.id);case 11:a=n.sent,this.ruleForm=a.data;case 13:if(!t.cross){n.next=56;break}u=e.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 16:if((n.t1=n.t0()).done){n.next=56;break}if(o=n.t1.value,"zhanghao"!=o){n.next=22;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,n.abrupt("continue",16);case 22:if("mima"!=o){n.next=26;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,n.abrupt("continue",16);case 26:if("qiyemingcheng"!=o){n.next=30;break}return this.ruleForm.qiyemingcheng=u[o],this.ro.qiyemingcheng=!0,n.abrupt("continue",16);case 30:if("tongyishehuixinyongdaima"!=o){n.next=34;break}return this.ruleForm.tongyishehuixinyongdaima=u[o],this.ro.tongyishehuixinyongdaima=!0,n.abrupt("continue",16);case 34:if("yingyezhizhao"!=o){n.next=38;break}return this.ruleForm.yingyezhizhao=u[o],this.ro.yingyezhizhao=!0,n.abrupt("continue",16);case 38:if("farenxingming"!=o){n.next=42;break}return this.ruleForm.farenxingming=u[o],this.ro.farenxingming=!0,n.abrupt("continue",16);case 42:if("shenfenzheng"!=o){n.next=46;break}return this.ruleForm.shenfenzheng=u[o],this.ro.shenfenzheng=!0,n.abrupt("continue",16);case 46:if("shouji"!=o){n.next=50;break}return this.ruleForm.shouji=u[o],this.ro.shouji=!0,n.abrupt("continue",16);case 50:if("youxiang"!=o){n.next=54;break}return this.ruleForm.youxiang=u[o],this.ro.youxiang=!0,n.abrupt("continue",16);case 54:n.next=16;break;case 56:this.styleChange();case 57:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},yingyezhizhaoTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.yingyezhizhao=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zhanghao){e.next=3;break}return this.$utils.msg("账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.qiyemingcheng){e.next=9;break}return this.$utils.msg("企业名称不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){e.next=12;break}return this.$utils.msg("身份证应输入身份证格式"),e.abrupt("return");case 12:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=15;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 15:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=18;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 18:if(!this.ruleForm.id){e.next=23;break}return e.next=21,this.$api.update("qiye",this.ruleForm);case 21:e.next=25;break;case 23:return e.next=25,this.$api.add("qiye",this.ruleForm);case 25:this.$utils.msgBack("提交成功");case 26:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},af54:function(e,n,t){"use strict";t.r(n);var i=t("af74"),r=t("b0db");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("f720");var u,o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"eb276ae0",null,!1,i["a"],u);n["default"]=s.exports},af74:function(e,n,t){"use strict";var i,r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))},b0db:function(e,n,t){"use strict";t.r(n);var i=t("31bc"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},be34:function(e,n,t){"use strict";(function(e){t("fa65"),t("921b");i(t("66fd"));var n=i(t("af54"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},f720:function(e,n,t){"use strict";var i=t("0338"),r=t.n(i);r.a}},[["be34","common/runtime","common/vendor"]]]);