## 欢迎使用 jQuery iScrollLayout 插件

`jQuery.iScrollLayout` 是一款主要解决横向导航滚动的插件，插件功能主要由 iScroll 构成，插件支持所有 iScroll 参数及使用示例。

### 示例文件
[基本示例](https://ztj1993.github.io/jQuery-iScrollLayout/demos/index.html)  

### 使用说明
`jQuery.iScrollLayout` 是一款非常简单的插件，具体的使用示例可以参考 demos 目录的演示文件。

**首先需要引入文件：**
```
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="http://cdn.bootcss.com/iScroll/5.2.0/iscroll.js"></script>
<script src="../src/jquery.iscrolllayout.js"></script>
```

**认识几个关键字：**
- iScrollLayout：代表插件名称，根类名
- items：代表列表节点
- item：代表元素节点
- current：代表当前激活的元素节点

**插件默认调用模式：主要由 iScrollLayout items item current 类组成**
```
<h2>默认横向滚动示例</h2>
<div class="iScrollLayout">
    <div class="items" style="white-space: nowrap;">
        <a class="item" href="#">第1个</a>
        <a class="item" href="#">第2个</a>
        <a class="item current" href="#">第3个</a>
        <a class="item" href="#">第4个</a>
        <a class="item" href="#">第5个</a>
    </div>
</div>
```

**插件根节点属性调用模式：主要由 iScrollLayout 类以及其 items item current iscroll 属性组成**
```
<h2>默认横向滚动示例</h2>
<div class="iScrollLayout" data-items=".items"
     data-item=".item" data-current=".current"
     data-iscroll='{"scrollX": true, "scrollY": false, "click": true}'>
    <div class="items" style="white-space: nowrap;">
        <a class="item" href="#">第1个</a>
        <a class="item" href="#">第2个</a>
        <a class="item current" href="#">第3个</a>
        <a class="item" href="#">第4个</a>
        <a class="item" href="#">第5个</a>
    </div>
</div>
```

**插件 JavaScript 调用模式：主要由 itemsEle itemEle currentEle iScrollOptions 参数组成**
```
$(".iScrollLayout").iScrollLayout({
    itemsEle: '.items',
    itemEle: '.item',
    currentEle: '.current',
    iScrollOptions: {
        "scrollX": true,
        "scrollY": false,
        "click": true
    }
});
```
