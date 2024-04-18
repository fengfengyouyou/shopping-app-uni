"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("首页");
    function toMine() {
      console.log("sssss");
      common_vendor.index.switchTab({
        url: "/pages/mine/mine"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.o(toMine)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/学习区域/uni-shopping-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
