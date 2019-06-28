const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .get('/', (req, res) => res.sendFile(__dirname + '/public/form.html'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/cool', (req, res) => res.send(cool()))
  .get('/times', (req, res) => res.send(showTimes()))
  .get('/result', getRate)  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

 function getRate(request, response) {
	const t = request.query.type;
	const w = Number(request.query.weight);

	gettingRates(response, t, w);
    }

  function gettingRates(response, t, w) {
    
    let cost = 0;
    let error = "";
    
    if (t == "stamped" && w <= 3) {
      cost = 0.40 + w * 0.15;
      cost = cost.toFixed(2);
    }
    
    if (t == "metered" && w <= 3) {
      cost = 0.35 + w * 0.15;
      cost = cost.toFixed(2);
    }
	
    if (t == "flats" && w <= 13) {
      cost = 0.85 + w * 0.15;
      cost = cost.toFixed(2);
    }
    
    if (t == "retail" && (w >= 1) && (w <= 4)) {
      cost = 3.66;
    }else if(t == "retail" && (w >= 5) && (w <= 8)) {
      cost = 4.39;
    }else if(t == "retail" && (w >= 9) && (w <= 12)) {
      cost = 5.19;
    }else if(t == "retail" && w == 13) {
      cost = 5.71;
    }
    
	const params = {t: t, w: w, cost: cost, error: error};
	response.render('pages/result', params);
}

showTimes = () => {
  let result = ''
  const times = process.env.TIMES || 5
  for (i = 0; i < times; i++) {
    result += i + ' '
  }
  return result;
}