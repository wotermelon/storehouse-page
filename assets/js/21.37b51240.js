(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{375:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_169-多数元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_169-多数元素"}},[t._v("#")]),t._v(" 169.多数元素")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n * @lc app=leetcode.cn id=169 lang=javascript\n *\n * [169] 多数元素\n */")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @lc code=start")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} nums\n * @return {number}\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("majorityElement")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 冒泡排序 n/2 趟，中间那个数就是目标值。")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    时间复杂度 O(n)，空间复杂度 O(1)")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let len = nums.length")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for (let i = 0; i < len / 2 + 1; i++) {")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   for (let j = i + 1; j < len; j++) {")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     if (nums[i] > nums[j]) {")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       let temp = nums[i]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       nums[i] = nums[j]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       nums[j] = temp")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     }")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   }")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return nums[Math.floor(len / 2)]")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 快速排序")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    时间复杂度 O(nlogn)，空间复杂度 O(1)")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nums.sort((a, b) => a - b)")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return nums[Math.floor(nums.length / 2)]")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 计数")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    时间复杂度 O(n)，空间复杂度 O(n)")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" len "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" half "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" len "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" hashMap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" item "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    hashMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hashMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hashMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" half"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @lc code=end")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @after-stub-for-debug-begin")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" majorityElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @after-stub-for-debug-end")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);