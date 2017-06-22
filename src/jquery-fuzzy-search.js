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
                        innerBox.find('li').eq(num).addClass(className).siblings().removeClass(className)
                        $(this).val($('.'+className).text());
                        $(this).attr('data-id',$('.'+className).attr('data-id'));
                        returnId($('.'+className).attr('data-id'))
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
                        $(this).attr('data-id',$('.'+className).attr('data-id'));
                        returnId($('.'+className).attr('data-id'))
                        if(num<0)
                        {
                            num=$('li').length-1;
                        }
                        return false;
                    }
                    else if(keyCode==13)
                    {
                        $(this).val($('.'+className).text());
                        $(this).attr('data-id',$('.'+className).attr('data-id'));
                        returnId($('.'+className).attr('data-id'))
                        num=0;
                        innerBox.find('li').remove();
                        return false;
                    }
                    else{
                        innerBox.find('li').remove();
                        num=0;
                        change($(this).val())
                    }
                    innerBox.on('click','li',function(){
                    	console.log($(this).text())
                        that.val($(this).text());
                        that.attr('data-id',$(this).attr('data-id'));
                        returnId($(this).attr('data-id'))
                        num=0;
                        innerBox.find().remove();
                    })
                });
            })  
        }
    }) 
})(jQuery)    