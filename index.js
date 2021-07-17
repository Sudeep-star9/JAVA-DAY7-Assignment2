function getme(num){
    for(let i=0;i<=num;i++){
       
        if(i%3==0){
            console.log(i+' fiz')
        }
        if(i%5==0){
            console.log(i+ ' buz')
        }
        if(i%15==0){
            console.log(i+' fizbuzz')
        }
    
    }
}
getme(15)