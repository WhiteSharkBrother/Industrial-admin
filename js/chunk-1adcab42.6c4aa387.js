(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1adcab42"],{"192b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dooya-container"},[n("Card",[n("div",{staticStyle:{margin:"10px 0"}},[n("Button",{attrs:{type:"success",icon:"md-add"},on:{click:t.insert}},[t._v("新增角色")])],1),n("Table",{attrs:{data:t.tableData,loading:t.tableLoading,columns:t.tableColumns,stripe:""}}),n("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[n("div",{staticStyle:{float:"right"}},[n("Page",{attrs:{"show-sizer":"",transfer:"",placement:"top",total:t.tableDataOrg.length,current:t.pageNum,"page-size-opts":[10,50,100,200],"page-size":t.pageSize},on:{"update:current":function(e){t.pageNum=e},"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)])],1),n("Modal",{attrs:{"mask-closable":!1,closable:!1,"footer-hide":"",title:"edit"===t.modalDataType?"编辑角色":"新增角色"},on:{"on-ok":t.handleSubmit},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[n("Form",{ref:"formModalData",attrs:{model:t.modalData,rules:t.formModalRule,"label-width":100},nativeOn:{submit:function(t){t.preventDefault()}}},[n("FormItem",{attrs:{label:"名称：",prop:"roleName"}},[n("Input",{attrs:{type:"text"},model:{value:t.modalData.roleName,callback:function(e){t.$set(t.modalData,"roleName","string"===typeof e?e.trim():e)},expression:"modalData.roleName"}})],1),n("FormItem",{staticClass:"menu-function",attrs:{label:"菜单：",prop:"menuFunction"}},[n("Select",{staticStyle:{margin:"0 10px 0px 0",width:"300px"},attrs:{filterable:"",multiple:"","label-in-value":"",placeholder:"添加菜单"},on:{"on-change":t.menuOnChange},model:{value:t.menuSelectedId,callback:function(e){t.menuSelectedId=e},expression:"menuSelectedId"}},t._l(t.menuList,(function(e){return n("Option",{key:e.menuName,attrs:{value:e.menuId,disabled:JSON.stringify(t.menuSelectList).indexOf(e.menuName)>-1}},[t._v("\n            "+t._s(e.menuName)+"\n          ")])})),1),n("Button",{attrs:{type:"success",size:"small"},on:{click:t.addToMenuSelect}},[t._v("添加")]),n("div",{staticStyle:{"margin-top":"10px"}},t._l(t.menuSelectList,(function(e,a){return n("Tag",{key:a,attrs:{type:"border",color:"primary",closable:""},on:{"on-close":function(e){return t.deleteMenuItem(a)}}},[t._v(t._s(e.functionName))])})),1)],1),n("FormItem",{staticClass:"users",attrs:{label:"用户：",prop:"users"}},[n("Select",{staticStyle:{margin:"0 10px 0 0",width:"300px"},attrs:{filterable:"",multiple:"","label-in-value":"",placeholder:"添加用户"},on:{"on-change":t.userOnChange},model:{value:t.userSelectedId,callback:function(e){t.userSelectedId=e},expression:"userSelectedId"}},t._l(t.userList,(function(e){return n("Option",{key:e,attrs:{value:e,disabled:JSON.stringify(t.tableDataOrg).indexOf(e)>-1}},[t._v("\n            "+t._s(e)+"\n          ")])})),1),n("Button",{attrs:{type:"success",size:"small"},on:{click:t.addToUserSelect}},[t._v("添加")]),n("div",{staticStyle:{"margin-top":"10px"}},t._l(t.userSelectList,(function(e,a){return n("Tag",{key:a,attrs:{type:"border",color:"primary",closable:""},on:{"on-close":function(e){return t.deleteUserItem(a)}}},[t._v(t._s(e))])})),1)],1),n("FormItem",[n("Button",{attrs:{type:"primary",loading:t.buttonLoading},on:{click:function(e){return t.handleSubmit("formModalData")}}},[t._v("确定")]),n("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){t.modalShow=!1,t.menuSelectedId=[]}}},[t._v("取消")])],1)],1)],1)],1)},i=[],o=(n("6b54"),n("ac6a"),n("55dd"),n("96cf"),n("3b8d")),r=n("f66f"),u=n("f11f"),c={data:function(){var t=this;return{menuList:[],userList:[],tableDataOrg:[],tableData:[],tableColumns:[{title:"名称",key:"roleName",align:"center",minWidth:120},{title:"功能",key:"menuFunction",render:function(t,e){return t("div",[e.row.menuFunction.map((function(e){return t("Tag",{props:{color:"blue"}},e.functionName)}))])},minWidth:500},{title:"操作",key:"action",fixed:"right",minWidth:150,align:"center",render:function(e,n){return e("div",[e("Tooltip",{props:{trigger:"hover",content:"修改",placement:"top",transfer:!0}},[e("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline"},style:{marginRight:"5px"},on:{click:function(){t.edit(n.row)}}})]),e("Tooltip",{props:{trigger:"hover",content:"删除",placement:"top",transfer:!0}},[e("Button",{props:{type:"error",size:"small",icon:"md-close"},on:{click:function(){t.delete(n.row)}}})])])}}],pageNum:1,pageSize:10,tableLoading:!1,buttonLoading:!1,modalShow:!1,modalData:{roleName:"",menuFunction:[],users:[]},modalDataOrg:{},menuSelectList:[],menuSelectedId:[],menuSelectedData:[],userSelectList:[],userSelectedId:[],userSelectedData:[],formModalRule:{roleName:[{required:!0,message:"请输入角色名称",trigger:"change"},{type:"string",max:10,message:"角色名称过长",trigger:"change"}]},modalDataType:""}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.getData(),this.menuList=r["a"],this.userList=r["c"];case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.isMock?(this.tableDataOrg=r["b"],this.refreshData(),this.buttonLoading=!1):(this.tableLoading=!0,this.tableDataOrg=r["b"],this.refreshData(),this.buttonLoading=!1,this.tableLoading=!1);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),refreshData:function(){this.tableDataOrg.sort(Object(u["b"])("role_id","asc")),this.tableData=this.tableDataOrg.slice((this.pageNum-1)*this.pageSize,this.pageNum*this.pageSize),0===this.tableData.length&&0!==this.tableDataOrg.length&&(this.pageNum--,this.refreshData())},changePage:function(t){this.pageNum=t,this.refreshData()},changePageSize:function(t){this.pageSize=t,this.pageNum=1,this.refreshData()},insert:function(){this.modalDataType="insert",this.$refs.formModalData.resetFields(),this.menuSelectList=[],this.menuSelectedId=[],this.userSelectList=[],this.userSelectedId=[],this.modalShow=!0},edit:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.modalDataType="edit",this.modalDataOrg=e,this.modalData=JSON.parse(JSON.stringify(e)),this.menuSelectList=this.modalData.menuFunction,this.userSelectList=this.modalData.users,this.modalShow=!0;case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),menuOnChange:function(t){var e=this;this.menuSelectedData=[],t.forEach((function(t){e.menuSelectedData.push({functionId:t.value,functionName:t.label})}))},addToMenuSelect:function(){var t=this;this.menuSelectedData.forEach((function(e){t.menuSelectList.push(e)})),this.menuSelectedId=[]},deleteMenuItem:function(t){this.menuSelectList.splice(t,1)},userOnChange:function(t){var e=this;this.userSelectedData=[],t.forEach((function(t){e.userSelectedData.push(t.value)}))},addToUserSelect:function(){var t=this;this.userSelectedData.forEach((function(e){t.userSelectList.push(e)})),this.userSelectedId=[]},deleteUserItem:function(t){this.userSelectList.splice(t,1)},handleSubmit:function(){var t=this;this.$refs.formModalData.validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n){e.next=9;break}t.buttonLoading=!0,e.t0=t.modalDataType,e.next="insert"===e.t0?5:"edit"===e.t0?7:9;break;case 5:return t.isMock?(t.modalData.role_id=(t.tableDataOrg.length+1).toString(),t.menuSelectList.sort(Object(u["b"])("functionId","asc")),t.modalData.menuFunction=t.menuSelectList,t.modalData.users=t.userSelectList,t.tableDataOrg.some((function(e){return e.roleName===t.modalData.roleName}))?(t.$Message.error("该角色已存在！"),t.buttonLoading=!1):(t.tableDataOrg.push(JSON.parse(JSON.stringify(t.modalData))),Object(u["e"])(200,"添加成功！",(function(){t.refreshData(),t.buttonLoading=!1,t.modalShow=!1})))):(t.modalShow=!1,t.getData()),e.abrupt("break",9);case 7:return t.isMock?(t.menuSelectList.sort(Object(u["b"])("functionId","asc")),t.tableDataOrg.some((function(e){return e.roleName===t.modalData.roleName}))&&t.modalData.roleName!==t.modalDataOrg.roleName?(t.$Message.error("该角色已存在！"),t.buttonLoading=!1):(t.$set(t.tableDataOrg,(t.pageNum-1)*t.pageSize+t.modalData._index,JSON.parse(JSON.stringify(t.modalData))),Object(u["e"])(200,"修改成功！",(function(){t.refreshData(),t.buttonLoading=!1,t.modalShow=!1})))):(t.modalShow=!1,t.getData()),e.abrupt("break",9);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},delete:function(t){var e=this;this.$Modal.confirm({title:"确定删除该角色？",onOk:function(){var n=Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.isMock?(e.tableDataOrg.slice((e.pageNum-1)*e.pageSize,e.pageNum*e.pageSize).forEach((function(n,a){t.role_id===n.role_id&&e.tableDataOrg.splice(a,1)})),Object(u["e"])(200,"删除成功！",(function(){e.refreshData()}))):e.getData();case 1:case"end":return n.stop()}}),n)})));function a(){return n.apply(this,arguments)}return a}(),closable:!0})}}},s=c,l=(n("b507"),n("2877")),d=Object(l["a"])(s,a,i,!1,null,"2f76ebac",null);e["default"]=d.exports},"7b63":function(t,e,n){},b507:function(t,e,n){"use strict";var a=n("7b63"),i=n.n(a);i.a},f11f:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return u})),n.d(e,"e",(function(){return c}));n("c5f6"),n("6b54"),n("28a5"),n("4f7f"),n("5df3"),n("1c4c"),n("ac6a");var a=n("e069");var i=function(t){var e=[];return t.forEach((function(t){"root"===t.parenetId&&e.push({title:t.title,id:t.id,children:[]})})),e.forEach((function(e){t.forEach((function(t){e.id===t.parenetId&&e.children.push({title:t.title,id:t.id,children:[]})}))})),e.length>0&&(e[0].expand=!0),e};function o(t,e){return function(n,a){return"asc"===e||void 0===e||""===e?n[t]>a[t]?1:n[t]<a[t]?-1:0:"desc"===e?n[t]<a[t]?1:n[t]>a[t]?-1:0:void 0}}function r(t,e,n,a){var i="";return t.forEach((function(t){t[e].toString()===n&&(i=t[a])})),i}var u=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=0;return t.forEach((function(t){n&&(a+=Number(t[e]))})),a},c=function(t,e,n,i){return 200===t?(a["Message"].success({content:e}),n.call()):i.call()}},f66f:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o}));var a=[{title:"管理员",description:"系统管理员，管理管理中心",menus:[{functionName:"首页概览",functionId:1},{functionName:"车间驾驶舱",functionId:2},{functionName:"产线驾驶舱",functionId:3},{functionName:"检测员",functionId:4},{functionName:"任务派发",functionId:5},{functionName:"历史任务",functionId:6},{functionName:"查看SOP",functionId:7},{functionName:"条码打印",functionId:8},{functionName:"检测列表",functionId:9},{functionName:"追溯查询",functionId:10},{functionName:"异常确认",functionId:11},{functionName:"账号管理",functionId:12},{functionName:"角色管理",functionId:13},{functionName:"组合管理",functionId:14},{functionName:"异常原因",functionId:15},{functionName:"SOP配置",functionId:16},{functionName:"数据配置",functionId:17},{functionName:"配方配置",functionId:18},{functionName:"设备配置",functionId:19},{functionName:"工位配置",functionId:20},{functionName:"产线配置",functionId:21}],users:["admin"],id:1},{title:"工程师",description:"系统工程师，管理配置中心",menus:[{functionName:"账号管理",functionId:12},{functionName:"角色管理",functionId:13},{functionName:"组合管理",functionId:14},{functionName:"异常原因",functionId:15},{functionName:"SOP配置",functionId:16},{functionName:"数据配置",functionId:17},{functionName:"配方配置",functionId:18},{functionName:"设备配置",functionId:19},{functionName:"工位配置",functionId:20},{functionName:"产线配置",functionId:21}],users:["cestc"],id:2},{title:"车间主管",description:"车间主管，管理整个车间",menus:[{functionName:"车间驾驶舱",functionId:2},{functionName:"产线驾驶舱",functionId:3},{functionName:"检测列表",functionId:9},{functionName:"追溯查询",functionId:10},{functionName:"账号管理",functionId:12},{functionName:"角色管理",functionId:13},{functionName:"组合管理",functionId:14},{functionName:"异常原因",functionId:15}],users:["workshop_manager"],id:3},{title:"产线线长",description:"产线线长，管理单条产线",menus:[{functionName:"首页概览",functionId:1},{functionName:"产线驾驶舱",functionId:3},{functionName:"检测员",functionId:4},{functionName:"任务派发",functionId:5},{functionName:"历史任务",functionId:6},{functionName:"查看SOP",functionId:7},{functionName:"条码打印",functionId:8},{functionName:"检测列表",functionId:9},{functionName:"追溯查询",functionId:10},{functionName:"异常确认",functionId:11},{functionName:"异常原因",functionId:15}],users:["proline_leader"],id:4},{title:"检测员",description:"检测员，负责检测产品",menus:[{functionName:"检测员",functionId:4},{functionName:"查看SOP",functionId:7},{functionName:"条码打印",functionId:8},{functionName:"追溯查询",functionId:10}],users:["examine","liuchaofan","tuwenxuan","wangmingxue","zhangjiahui"],id:5}],i=[{id:"2",name:"account",title:"账号管理",url:"/manage/account",path:"/manage",sort:10,parenetId:"1",parenetPath:"1",status:1,description:"系统账号管理"},{id:"3",name:"role",title:"角色管理",url:"/manage/role",path:"/manage",sort:9,parenetId:"1",parenetPath:"1",status:1,description:"系统角色管理"},{id:"4",name:"sncode",title:"组合管理",url:"/manage/sncode",path:"/manage",sort:8,parenetId:"1",parenetPath:"1",status:1,description:"sop配方组合管理"},{id:"5",name:"reject",title:"异常原因",url:"/manage/reject",path:"/manage",sort:7,parenetId:"1",parenetPath:"1",status:1,description:"产品异常原因管理"},{id:"7",name:"sop",title:"SOP配置",url:"/dispose/sop",path:"/dispose",sort:10,parenetId:"6",parenetPath:"6",status:1,description:"SOP步骤配置"},{id:"8",name:"process",title:"数据配置",url:"/dispose/process",path:"/dispose",sort:9,parenetId:"6",parenetPath:"6",status:1,description:"数据配置"},{id:"6",name:"manage",title:"配置中心",url:null,path:"/dispose",sort:1,parenetId:"root",parenetPath:null,status:1,description:"业务基础配置"},{id:"1",name:"manage",title:"管理中心",url:null,path:"/manage",sort:2,parenetId:"root",parenetPath:null,status:1,description:"系统基础配置"}],o=["admin","cestc","workshop_manager","proline_leader","examine","liuchaofan","tuwenxuan","wangmingxue","zhangjiahui"]}}]);