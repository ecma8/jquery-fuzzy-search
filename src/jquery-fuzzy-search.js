(function($){
    $.fn.extend({
        jQueryFuzzySearch:function(obj){
            return this.each(function(){
                var className=obj.className?obj.className:'';
                var innerBox=obj.innerBox?obj.innerBox:'';
                var change=obj.change?obj.change:''
                var num=0;
                $(this).keyup(function(e){
                    var keyCode=e.keyCode;
                    if(keyCode==40)
                    {
                        innerBox.find('li').eq(num).addClass(className).siblings().removeClass(className)
                        $(this).val($('.'+className).text());
                        num++;
                        if(num>$('li').length-1)
                        {
                            num=0;
                        }
                        return false
                    }
                    else if(keyCode==38)
                    {
                        e.preventDefault()
                        num--;
                        innerBox.find('li').eq(num).addClass(className).siblings().removeClass(className)
                        $(this).val($('.'+className).text());
                        if(num<0)
                        {
                            num=$('li').length-1;
                        }
                        return false;
                    }
                    else if(keyCode==13)
                    {
                        $(this).val($('.'+className).text());
                        innerBox.children().remove();
                        num=0;
                        return false;
                    }
                    else{
                        change($(this).val())
                    }
                    innerBox.on('click','li',function(){
                        $(this).val($(this).text());
                        num=0;
                        innerBox.children().remove();
                    })
                });
            })  
        }
    }) 
})(jQuery)    