var mymessage=confirm("你喜欢我吗？");
if (mymessage===true){
  document.write("么么哒 (* ￣3)(ε￣ *) ");
}else {
  document.write("你走开！！");
}
 var myname=prompt("请输入你的名字","例如张三");
 if (myname!=null) {
   alert("你好啊"+myname);
 }else {
   alert("你确定输入正确？");
 }
 var awesomeThougts="I am ChuXiangHong and I am AWESOME";
 console.log(awesomeThougts);
 var name="马臭臭";
 var newName=name.replace("马臭臭","马丑丑");
  $("#main").append(newName);

///////////////////////////////
  var name = "AlbERt EINstEiN";
  function nameChanger(oldName) {
    var finalName = oldName;
    var  names=oldName.split(" ");
    //将字符串分割成分割成字符串数组 从“  ”处分割
      names[1] = names[1].toUpperCase();
      // 下标1的数组值大写
      names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
      //第一个数组元素值得 第一个字母大写。第一个字符串的第一个字母外的所有字母小写
      finalName = names.join(" ");
      //join() 方法用于把数组中的所有元素放入一个字符串。
        //元素是通过指定的分隔符进行分隔的。 这是通过“  ”分割的；

      // Don't delete this line!
      return finalName;
  };


  console.log(nameChanger(name));
