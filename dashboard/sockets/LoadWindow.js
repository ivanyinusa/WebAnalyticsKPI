function LoadWindow()
{
    URL="/debug";
    loc_x=document.body.scrollLeft+event.clientX-event.offsetX;
    loc_y=document.body.scrollTop+event.clientY-event.offsetY;
    //window.showModalDialog(URL,self,"edge:raised;scroll:0;status:0;help:0;resizable:1;dialogWidth:450px;dialogHeight:450px;dialogTop:"+loc_y+"px;dialogLeft:"+loc_x+"px");
    window.open(URL,null,"height=400,width=550,status=1,toolbar=no,menubar=no,location=no,scrollbars=yes,top=150,left=100,resizable=no");
}


function customalert(titl,msgstr)
{
    var h = screen.availHeight;
    var w = screen.availWidth;
    //创建遮罩层，它的主要作用就是使网页中的其他元素不可用。
    var dv = document.createElement("div");
    dv.setAttribute('id','bg');
    //设置样式
    dv.style.height = h + "px";
    dv.style.width = w + "px";
    dv.style.zIndex = "1111";
    dv.style.opacity=0;
    dv.style.filter="alpha(opacity=1)";
    dv.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=2,opacity=1,finishOpacity=100%)";
    dv.style.background = "white";
    dv.style.top = 0;
    //设为绝对定位很重要
    dv.style.position = "absolute";
    //将该元素添加至body中
    document.body.appendChild(dv);
    //创建弹出对话框面板
    var dvMsg = document.createElement("div");
    //设未绝对定位很重要
    dvMsg.style.position = "absolute";
    dvMsg.setAttribute('id','msg');
    dvMsg.style.width = "400px";
    dvMsg.style.height = "200px";
    dvMsg.style.top="40%";
    dvMsg.style.left="30%";
    dvMsg.style.background = "white";
    dvMsg.style.border="1px solid #6699dd";
    dvMsg.style.zIndex = "1112";
    //添加至body中
    document.body.appendChild(dvMsg);
    var divtit=document.createElement("div");
    divtit.setAttribute("id","titles");
    divtit.style.position="absolute";
    divtit.style.width="400px";
    divtit.style.height="25px";
    divtit.style.textIndent="10px";
    divtit.style.background="red";
    divtit.style.lineHeight="25px";
    divtit.style.marginTop="0";
    divtit.style.marginLeft="0";
    divtit.style.zIndex="1113";
    divtit.style.align="left";
    divtit.style.cursor="move";
    divtit.innerHTML=titl;
    document.getElementById("msg").appendChild(divtit);
    var imgs=document.createElement("img");
    imgs.setAttribute("id","pic");
    imgs.src="pic/stop.jpg";
    imgs.alt="close";
    imgs.title="关闭";
    imgs.style.marginTop="2px";
    imgs.style.marginLeft="335px";
    imgs.style.position="absolute";
    imgs.style.cursor="pointer";
    imgs.onclick=function()
    {
        document.body.removeChild(dvMsg);
        document.body.removeChild(dv);
    }
    document.getElementById("titles").appendChild(imgs);
    var btn=document.createElement("input");
    btn.setAttribute("id","btns");
    btn.type="button";
    btn.value=" 确 定 ";
    btn.style.marginTop = "40%";
    btn.style.marginLeft = "43%";
    btn.style.position = "absolute";
    btn.style.border = "1px solid #6699ff";
    btn.onclick=function()
    {
        document.body.removeChild(dvMsg);
        document.body.removeChild(dv);
    }
    var divstr=document.createElement("div");
    divstr.setAttribute("id","info");
    divstr.style.position="absolute";
    divstr.style.marginTop="80px";
    divstr.style.marginLeft="34%";
    divstr.innerHTML=msgstr;
    document.getElementById("msg").appendChild(divstr);
    document.getElementById("msg").appendChild(btn);

}
