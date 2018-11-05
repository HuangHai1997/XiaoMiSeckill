let tags = document.getElementById('tags').getElementsByTagName('li');
let goods = document.getElementById('goods').getElementsByTagName('ul');
let i = 0 , len = tags.length;
for (; i < len ; i++ ) {
  // 当点击nav导航栏按钮时
  tags[i].onclick = function () {
    let j = 0;
    for (; j <len ;j++ ) {
      if (tags[j] === this) {
        // 导航栏颜色发生改变
        this.className = "active";
        // 对应商品内容发生改变
        goods[j].className += " show";
      } else {
        tags[j].className = "";
        goods[j].className ="clearfix";
      }
    }
  }
}

window.onload = function(){
  var oBox = document.getElementById('box');
  var oDate = new Date();
  oDate.setFullYear(2018,11,5);
  oDate.setHours(22,0,0,0);
  function countDown(){
    //未来时间戳减去现在时间的时间戳;
    var ms = oDate.getTime() - new Date().getTime();
    //毫秒转换成秒
    var oSec = parseInt(ms/1000);
    // //秒转换成天
    // var oDay = parseInt(oSec/86400);
    //不到一天剩下的秒数;
    oSec%=86400;
    //转换成小时
    var oHour = parseInt(oSec/3600);
    //不到一小时剩下的秒数;
    oSec%=3600;
    //转换成分钟
    var oMin = parseInt(oSec/60);
    //不到一分钟剩下的秒数;
    oSec%=60;
    oBox.innerHTML = '即将开始<br>距开始 '+oHour+':'+oMin+':'+oSec;
  }
      countDown();
      setInterval(countDown,1000);
  };