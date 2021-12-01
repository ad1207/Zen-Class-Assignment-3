function currency(){
    var req= new XMLHttpRequest();
    var apiKey='6d3026c6a6b969747de105d398ac33a3';
    var curr=document.getElementById('currency').value;
    var url=`http://api.countrylayer.com/v2/currency/${curr}?access_key=${apiKey}`;
    req.open('GET',url);
    req.send();
    req.onload=function(){
        var data=JSON.parse(this.response);
        console.log(data)
    }
}