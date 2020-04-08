var data=[{principal:2500,time:1.8},{principal:1000,time:5},{principal:3000,time:1},{principal:2000,time:3}];
function interestCalculator(dat){//this begins the function
    var interestData=[];
    for(var i=0 ;i<dat.length;i++){//starts the for loop 
        if(dat[i].principal>=2500 && dat[i].time > 1 && dat[i].time<3){
            var myrate=3;   
        }
        else if (dat[i].principal>=2500 && dat[i].time>=3){
            var myrate=4;    
        }
        else if (dat[i].principal < 2500 || dat[i].time<=1){
            var myrate=2;    
        }
        else{
            var myrate=1;  
        }
        var myinterest= (dat[i].principal* dat[i].time * myrate)/100;//we calculate the interest
        var obj={principal:dat[i].principal,time:dat[i].time,rate:myrate,interest:myinterest};//we assign the value to each keys in the object
        interestData.push(obj);//this adds the object to the interestData Array
    }//closes the for loop
    console.log(interestData);
    return interestData;
}//closes the function

interestCalculator(data);//then we call the function
