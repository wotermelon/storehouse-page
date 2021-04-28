(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{353:function(v,_,e){v.exports=e.p+"assets/img/url-0.92d73c75.png"},421:function(v,_,e){"use strict";e.r(_);var o=e(42),t=Object(o.a)({},(function(){var v=this,_=v.$createElement,o=v._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h1",{attrs:{id:"从输入url到页面展示，这中间发生了什么？"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到页面展示，这中间发生了什么？"}},[v._v("#")]),v._v(" 从输入URL到页面展示，这中间发生了什么？")]),v._v(" "),o("blockquote",[o("p",[v._v("用户发出 URL 请求到页面开始解析的这个过程，就叫做导航")])]),v._v(" "),o("p",[o("img",{attrs:{src:e(353),alt:""}})]),v._v(" "),o("ul",[o("li",[o("p",[v._v("首先，"),o("code",[v._v("浏览器进程")]),v._v("接收到用户输入的 URL 请求，浏览器进程便将该 URL 转发给"),o("code",[v._v("网络进程")]),v._v("。")])]),v._v(" "),o("li",[o("p",[v._v("然后，在"),o("code",[v._v("网络进程")]),v._v("中发起真正的 URL 请求。")])]),v._v(" "),o("li",[o("p",[v._v("接着"),o("code",[v._v("网络进程")]),v._v("接收到了响应头数据，便解析响应头数据，并将数据转发给"),o("code",[v._v("浏览器进程")]),v._v("。\ntip：如果 "),o("code",[v._v("Content-Type")]),v._v(" 字段的值被浏览器判断为"),o("code",[v._v("下载类型")]),v._v("，那么该请求会被提交给浏览器的下载管理器，同时该 URL 请求的导航流程就此结束。但如果是 HTML，那么浏览器则会继续进行导航流程")])]),v._v(" "),o("li",[o("p",[o("code",[v._v("浏览器进程")]),v._v("接收到网络进程的响应头数据之后，发送“"),o("code",[v._v("提交导航")]),v._v(" (CommitNavigation)”消息到"),o("code",[v._v("渲染进程")]),v._v("。")])]),v._v(" "),o("li",[o("p",[o("code",[v._v("渲染进程")]),v._v("接收到“提交导航”的消息之后，便开始准备接收 HTML 数据，接收数据的方式是直接和"),o("code",[v._v("网络进程")]),v._v("建立数据管道。")])]),v._v(" "),o("li",[o("p",[v._v("等文档数据传输完成之后，"),o("code",[v._v("渲染进程")]),v._v("会向"),o("code",[v._v("浏览器进程")]),v._v("“"),o("code",[v._v("确认提交")]),v._v("”，这是告诉浏览器进程：“已经准备好解析页面数据了”。")])]),v._v(" "),o("li",[o("p",[o("code",[v._v("浏览器进程")]),v._v("接收到"),o("code",[v._v("渲染进程")]),v._v("“提交文档”的消息之后，便开始移除之前旧的文档，然后更新浏览器进程中的"),o("code",[v._v("页面状态")]),v._v("。\ntip：页面状态包括"),o("code",[v._v("安全状态")]),v._v("、"),o("code",[v._v("地址栏URL")]),v._v("、"),o("code",[v._v("前进后退的历史状态")])])]),v._v(" "),o("li",[o("p",[v._v("一旦文档被提交，"),o("code",[v._v("渲染进程")]),v._v("便开始页面解析和子资源加载了。一旦页面生成完成，渲染进程会发送一个消息给浏览器进程，浏览器接收到消息后，会停止标签图标上的加载动画。")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);