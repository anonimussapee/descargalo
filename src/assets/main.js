const APIstart=`<iframe id="widgetv2Api" src="https://convert2mp3s.com/api/widgetv2?url=`;
const APIend=`" width="100%" height="900px" allowtransparency="true" scrolling="no" style="border:none"></iframe>`;
const here=document.getElementById("here");
function show(donde,url){
let view=``;
view +=`${APIstart}${url}${APIend}`;
console.log(view);
donde.innerHTML=view;
}
let btn_convertir=document.getElementById("btn_convertir").addEventListener('click',async function(){
let url_link=document.getElementById("url_link").value;
console.log(url_link);
show(here,url_link);
});