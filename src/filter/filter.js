import Vue from 'vue'

Vue.filter('test',(data)=>{
    var d = new Date(data)
 
     var ling = n => n<10 ? 0 + ''+ n : '' +n //  规定位数为个位的情况
     let month = d.getMonth()+1;
     let date = d.getDate();          
    let hours = d.getHours();
     let min = d.getMinutes()
    return `${ling(month)}月${ling(date)}日${ling(hours)}:${ling(min)}`


})

