var fs=require('fs');
var map={
  '0':'',
  '1':'一',
  '2':'二',
  '3':'三',
  '4':'四',
  '5':'五',
  '6':'六',
  '7':'七',
  '8':'八',
  '9':'九',
  '10':'十'
}
// 1-99
for(var i=1;i<34;i++){
  let index=Number(i).toString();
  let str='';
  if(index.length==1){
    str=map[index]
  }else{
    let left=index[0]=='1'?'十':map[index[0]];
    let middle=index[0]=='1'?'':'十';
    let right=map[index[1]];
    str=`${left}${middle}${right}`
  }
  fs.writeFileSync(`chapter${i}.md`,`### 第${str}章\n\n\n### 译文及注释\n\n\n### 读解\n`)
}
