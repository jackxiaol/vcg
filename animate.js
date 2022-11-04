/**
 * Created by J-LIN on 2017/10/21.
 */
function animate(obj, target) {

    //先清掉这个要移动元素的上一次的计时器
    clearInterval(obj.timerID)

    //把产生的计时器编号保存在你传进来的元素里，那样的话，每个计时器的编号就跟自己移动的元素绑定在一起了
    obj.timerID = setInterval(function () {

        //获取到盒子当前所在位置
        var currentLeft = obj.offsetLeft;

        //算出走一步后的距离
        //如果从左往右应该加，因为left要越来越大
        //如果从右往左应该减，因为left要越来越小
        //如果当前位置比目标位置要小，那么代表从左往右
        //如果当前位置比目标位置要大，那么代表从右往左

        var step = currentLeft < target ? 4 : -4;

        //加上一个负数，就相当于减去一个数
        currentLeft += step;

        //用目标位置-当前位置，对结果取绝对值，再和步数的绝对值比较，如果大，就代表我这个距离还够走一步，那我就让你走，否则不够走一步了，那么就直接到目标位置
        if (Math.abs(target - currentLeft) > Math.abs(step)) {

            obj.style.left = currentLeft + "px";

        } else {

            //否则可能已经等于目标或者超过目标

            //直接到目标的位置
            obj.style.left = target + "px";
            clearInterval(obj.timerID);
        }

    }, 5);
}