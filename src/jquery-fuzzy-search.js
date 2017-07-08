(function($){
    $.fn.extend({
        jQueryFuzzySearch:function(obj){
            return this.each(function(){
                var className=obj.className?obj.className:'';
                var innerBox=obj.innerBox?obj.innerBox:'';
                var change=obj.change?obj.change:''
                var returnId=obj.returnId?obj.returnId:''
                var num=0;
                var that=$(this);
                $(this).keyup(function(e){
                    var keyCode=e.keyCode;
                    if(keyCode==40)
                    {
                        e.preventDefault()
                        innerBox.find('li').eq(num).addClass(className).siblings().removeClass(className)
                        $(this).val($('.'+className).text());
                        $(this).attr('data-id',$('.'+className).attr('data-id'));
                        num++;
                        if(num>innerBox.find('li').length-1)
                        {
                            num=0;
                        }
                        return false
                    }
                    else if(keyCode==38)
                    {
                        e.preventDefault();
                        num--;
                        innerBox.find('li').eq(num).addClass(className).siblings().removeClass(className)
                        $(this).val($('.'+className).text());
                        $(this).attr('data-id',$('.'+className).attr('data-id'));
                        if(num<0)
                        {
                            num=innerBox.find('li').length-1;
                        }
                        return false;
                    }
                    else if(keyCode==13)
                    {


                        $(this).val($('.'+className).text());
                        $(this).attr('data-id',$('.'+className).attr('data-id'));
                        returnId({
                            id:$('.'+className).attr('data-id'),
                            text:$('.'+className).text(),
                            time:$(this).attr('data-time')
                        });
                        num=0;
                        innerBox.find('li').remove();
                        return false;
                    }
                    else{
                        innerBox.find('li').remove();
                        num=0;
                        change($(this).val())
                    }
                });
                innerBox.on('click','li',function(e){
                    e.stopPropagation();
                    that.val($(this).text());
                    that.attr('data-id',$(this).attr('data-id'));
                    returnId({
                        id:$(this).attr('data-id'),
                        text:$(this).text(),
                        time:$(this).attr('data-time')
                    });
                    num=0;
                    innerBox.find('li').remove();
                })
            })  
        }
    }) 
})(jQuery);