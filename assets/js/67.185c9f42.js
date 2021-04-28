(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{426:function(e,t,o){"use strict";o.r(t);var s=o(42),v=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"安全"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[e._v("#")]),e._v(" 安全")]),e._v(" "),o("h2",{attrs:{id:"xss-cross-site-scripting-跨站脚本"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#xss-cross-site-scripting-跨站脚本"}},[e._v("#")]),e._v(" XSS(Cross Site Scripting) 跨站脚本")]),e._v(" "),o("p",[e._v("XSS 是指往 HTML 文件中或者 DOM 中注入恶意脚本，从而在用户浏览页面时利用注入的恶意脚本对用户实施攻击的一种手段。")]),e._v(" "),o("ol",[o("li",[e._v("窃取Cookie")]),e._v(" "),o("li",[e._v("监听用户行为，比如输入账号密码后之间发给黑客服务器")]),e._v(" "),o("li",[e._v("在网页中生成浮窗广告")]),e._v(" "),o("li",[e._v("修改DOM伪造登入表单")])]),e._v(" "),o("h3",{attrs:{id:"实现方式："}},[o("a",{staticClass:"header-anchor",attrs:{href:"#实现方式："}},[e._v("#")]),e._v(" 实现方式：")]),e._v(" "),o("ol",[o("li",[e._v("存储型 XSS 攻击")])]),e._v(" "),o("p",[e._v("攻击者利用站点漏洞将一段恶意 JS 代码提交到网站的数据库中，用户向网站请求包含了恶意 JS 脚本的页面，当浏览页面时，恶意脚本就会将用户的 Cookie 信息等数据上传到服务器。")]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("反射型 XSS 攻击")])]),e._v(" "),o("p",[e._v("恶意脚本作为「网络请求的一部分」（如查询参数?query="),o("script",[e._v("alert(&quot;xss&quot;)")]),e._v("），随后网站又把恶意的JS脚本返回给用户，当脚本在用户页面中被执行时，黑客就可以利用该脚本做一些恶意操作。")]),e._v(" "),o("ol",[o("li",[e._v("基于 DOM 的 XSS 攻击")])]),e._v(" "),o("p",[e._v("攻击者通过各种手段将恶意脚本注入用户的页面中，在数据传输的时候劫持网络数据包。")]),e._v(" "),o("h2",{attrs:{id:"解决办法："}},[o("a",{staticClass:"header-anchor",attrs:{href:"#解决办法："}},[e._v("#")]),e._v(" 解决办法：")]),e._v(" "),o("ol",[o("li",[e._v("对用户的输入和服务器输出进行检查过滤或转码")]),e._v(" "),o("li",[e._v("Cookie设置 "),o("strong",[e._v("HttpOnly")]),e._v(" 属性")]),e._v(" "),o("li",[e._v("利用 "),o("strong",[e._v("CSP")]),e._v("(Content-Security-Policy)，限制加载其他域下的资源文件，禁止向第三方域提交数据，禁止执行内联脚本和未授权的脚本")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Content-Security-Policy: default-src 'self' *.trusted.com; img-src *; media-src media1.com media2.com; script-src userscripts.example.com\n")])])]),o("hr"),e._v(" "),o("h2",{attrs:{id:"csrf-cross-site-request-forgery-跨站请求伪造"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#csrf-cross-site-request-forgery-跨站请求伪造"}},[e._v("#")]),e._v(" CSRF(Cross-site request forgery) 跨站请求伪造")]),e._v(" "),o("p",[e._v("攻击者借助受害者的 Cookie 骗取服务器的信任，可以在受害者毫不知情的情况下以受害者名义伪造请求发送给受攻击服务器，从而在并未授权的情况下执行在权限保护之下的操作。")]),e._v(" "),o("p",[e._v("一个典型的CSRF攻击有着如下的流程：")]),e._v(" "),o("ul",[o("li",[e._v("受害者登录a.com，并保留了登录凭证（Cookie）。")]),e._v(" "),o("li",[e._v("攻击者引诱受害者访问了b.com。")]),e._v(" "),o("li",[e._v("b.com 向 a.com 发送了一个请求：a.com/act=xx。浏览器会默认携带a.com的Cookie。")]),e._v(" "),o("li",[e._v("a.com接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求。")]),e._v(" "),o("li",[e._v("a.com以受害者的名义执行了act=xx。")]),e._v(" "),o("li",[e._v("攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执行了自己定义的操作。")])]),e._v(" "),o("h2",{attrs:{id:"解决办法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[e._v("#")]),e._v(" 解决办法")]),e._v(" "),o("ol",[o("li",[e._v("同源检测。"),o("code",[e._v("Origin")]),e._v(" 和 "),o("code",[e._v("Referer")]),e._v(" ，验证是否来自本地域。是一个相对简单的防范方法，能够防范绝大多数的CSRF攻击")])]),e._v(" "),o("ul",[o("li",[e._v("HTTPS页面跳转到HTTP页面，所有浏览器Referer都丢失。")]),e._v(" "),o("li",[e._v("当请求是页面请求（比如网站的主页），而来源是搜索引擎的链接，会被当成CSRF攻击，判断时需过滤掉是页面的情况")])]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[o("code",[e._v("CSRF Token")])])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("CSRF Token输出到页面中，一般Token都包括随机字符串和时间戳的组合。\nToken最好还是存在服务器的Session中，之后在每次页面加载时，使用JS遍历整个DOM树，对于DOM中所有的a和form标签后加入Token，在每次请求时把Token从Session中拿出，与请求中的Token进行比对")])]),e._v(" "),o("li",[o("p",[e._v("页面提交的请求携带这个Token")])]),e._v(" "),o("li",[o("p",[e._v("服务器验证Token是否正确")])])]),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[e._v("Cookie属性-"),o("code",[e._v("Samesite")])])]),e._v(" "),o("p",[e._v("用来标明这个 Cookie是个“同站 Cookie”，同站Cookie只能作为第一方Cookie，不能作为第三方Cookie。")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Samesite="),o("code",[e._v("Strict")])]),e._v(" "),o("p",[e._v("表明这个 Cookie 在任何情况下都不可能作为第三方 Cookie")])]),e._v(" "),o("li",[o("p",[e._v("Samesite="),o("code",[e._v("Lax")])]),e._v(" "),o("p",[e._v("如这个请求是这种请求（改变了当前页面或者打开了新页面）且同时是个GET请求，则这个Cookie可以作为第三方Cookie")])])])])}),[],!1,null,null,null);t.default=v.exports}}]);