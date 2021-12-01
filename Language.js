
function Language(){
var req=new XMLHttpRequest();
var apiKey='6d3026c6a6b969747de105d398ac33a3';
var lang=document.getElementById('language').value
let url=`http://api.countrylayer.com/v2/lang/${lang.slice(0,2)}?access_key=${apiKey}`
req.open('GET',url)
req.send()
req.onload=function(){
    var data=JSON.parse(this.response)
    console.log(data)
}}