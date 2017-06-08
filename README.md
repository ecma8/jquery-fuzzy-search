# jquery-fuzzy-search 基于jquery的模糊搜索
## 本插件功能 
* 支持模糊搜索
* 多事件触发
## 插件配置 
### JS相关引入
```html
<script src="src/jquery-1.11.3.js"></script>
<script src='src/jquery-fuzzy-search.js'></script>
```
### JS插件配置
```html
<script>
$('input').jQueryFuzzySearch({
    innerBox:$('ul'),//搜索结果容器 暂时支持ul
    className:'li-color', //选中的li的class值
    change:function(data){ // 当input的值改变的时候 执行的函数
        $.ajax({
            type:"get",
            url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
            data:{wd:data},
            dataType: 'jsonp',
            jsonp: 'cb',
            success:function(data){
                num=0;
                $('ul').children().remove();
                for(var i=0;i<data.s.length;i++)
                {
                    $('ul').append('<li>'+data.s[i]+'</li>');   
                }
            }
        });
    }
})
</script>
```  
### DOM相关
```html
<div class="fuzzy-search">
    <input type="text" />
    <ul>
    </ul>
</div>
```
