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
        var w=Number($width.val()),
            h=Number($height.val());
        //calculate
        var p=roundFloat(2*(w+h),2),
            a=roundFloat(w*h,2);
        // var p=2*(w+h),
        //     a=w*h;
        //output
        $perimeter.val(p);
        $area.val(a);
    });
    function roundFloat(x,n){
        return Math.round(x* Math.pow(10,n)) / Math.pow(10, n);
    }
});