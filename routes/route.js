exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCity',
                    headline:'All the cities in the world are beautiful'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageCount=4;

    if(cityName==='berlin'){
       title="Berlin";
       heading="Berlin: Where love is in the air";
    }
    else if(cityName==='london'){
       title="London";
       heading="London: Its London Baby";
    }
    else if(cityName==='madrid'){
       title="Madrid";
       heading="Madrid: Buzz, Beautiful architecture and Football (Hala Madrid)";
    }
    else if(cityName==='newyork'){
       title="New York";
       heading="New York: New York Times";
       imageCount=6;
    }
    else if(cityName==='paris'){
       title="Paris";
       heading="Paris: We were living in Paris";
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
