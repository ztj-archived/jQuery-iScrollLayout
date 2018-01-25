/**
 * iScrollLayout 0.0.1
 *
 * @author ZhangTianJie
 * @github https://github.com/ztj1993/jQuery-iScrollLayout
 * @license MIT licensed
 */

!function ($) {
    "use strict";
    //主体方法
    var iScrollLayout = function (element, options) {
        var _this = this;
        //变量定义
        var $rootEle, $itemsEle, $itemEle, $currentEle;
        //默认赋值
        this.$element = $(element);
        this.options = $.extend({}, iScrollLayout.DEFAULTS, options);
        //循环根节点
        this.$element.each(function () {
            //根节点属性获取
            var itemsEle = $(this).data("items");
            var itemEle = $(this).data("item");
            var currentEle = $(this).data("current");
            var iScrollOptions = $(this).data("iscroll");
            //节点变量赋值
            $rootEle = $(this);
            $itemsEle = itemsEle ? $rootEle.find(itemsEle) : $rootEle.find(_this.options.itemsEle);
            $itemEle = itemEle ? $itemsEle.find(itemEle) : $itemsEle.find(_this.options.itemEle);
            $currentEle = currentEle ? $itemsEle.find(currentEle) : $itemsEle.find(_this.options.currentEle);
            //节点判断
            if (!$itemEle.length) return false;
            //节点样式定义
            $rootEle.css({position: "relative", overflow: "hidden"});
            $itemsEle.css({position: "absolute"});
            //获取布局数据定义
            iScrollOptions || (iScrollOptions = _this.options.iScrollOptions);
            //横向滚动处理项
            if (iScrollOptions.scrollX) {
                $rootEle.css("min-height", $itemsEle.height());
                $itemsEle.css("white-space", "nowrap");
            }
            //IScroll 节点实例化
            $rootEle.data("iScroll", new IScroll($rootEle[0], iScrollOptions));
            //子节点激活
            if ($currentEle.length) {
                $rootEle.data("iScroll").scrollToElement($currentEle[0], true, true);
            }
            //解决 谷歌浏览器 模拟 手机浏览器 的卡顿问题
            $rootEle[0].addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, false);
        });
    };
    //默认参数
    iScrollLayout.DEFAULTS = {
        itemsEle: '.items',
        itemEle: '.item',
        currentEle: '.current',
        iScrollOptions: {"scrollX": true, "scrollY": false, "click": true}
    };
    var old = $.fn.iScrollLayout;
    $.fn.iScrollLayout = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('iScrollLayout');
            var options = (typeof option === 'object') && option;
            if (!data) $this.data('iScrollLayout', (data = new iScrollLayout(this, options)));
        })
    };
    $.fn.iScrollLayout.Constructor = iScrollLayout;
    $.fn.iScrollLayout.noConflict = function () {
        $.fn.iScrollLayout = old;
        return this;
    };
    //默认调用
    $(document).ready(function () {
        $(".iScrollLayout").iScrollLayout();
    });
}(jQuery);
