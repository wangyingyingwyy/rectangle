/* global $ Rectangle: true */
$(function () {
    //get dom elem
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area');
    /**calc button click event */
    $btnCal.click(function(){
        //get value
        var w=$width.val(),
            h=$height.val();
        //calculate
        /*
        var p=roundFloat(2*(w+h),2),
            a=roundFloat(w*h,2);
        */
        // var p=2*(w+h),
        //     a=w*h;

        // 工厂函数
        var rect=new Rectangle(w,h);

        //output
        $perimeter.val(rect.perimeter());
        $area.val(rect.area());
    });
});