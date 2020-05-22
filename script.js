var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function setValues(element, data){
  var createNode = document.createTextNode(data)
  element.appendChild(createNode);
}



fetch("https://corona.lmao.ninja/v2/countries/Kenya?yesterday&strict&query ", requestOptions)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {
        //console.log(data);
        getKenya(data);

        function getKenya(data){
          //console.log(data);


          keNewConfirmed = document.getElementById("ke-new-confirmed");
          setValues(keNewConfirmed, data.todayCases);

          keNwewDeaths = document.getElementById("ke-new-deaths");
          setValues(keNwewDeaths, data.todayDeaths);

          keTotConfirmed = document.getElementById("ke-tot-confirmed");
          setValues(keTotConfirmed, data.cases);

          
          keTotDeaths = document.getElementById("ke-tot-deaths");
          setValues(keTotDeaths, data.deaths);

          keTotRecovered = document.getElementById("ke-tot-recovered");
          setValues(keTotRecovered, data.recovered);

          keAciveCases = document.getElementById("ke-active-cases");
          setValues(keAciveCases, data.active);

          keCriticalCases = document.getElementById("ke-critical-cases");
          setValues(keCriticalCases, data.critical);

          keTotTests = document.getElementById("ke-total-tests");
          setValues(keTotTests, data.tests);

          keTestsPerM = document.getElementById("ke-tests-PerM");
          setValues(keTestsPerM, data.testsPerOneMillion);

          keCasesPerM = document.getElementById("ke-cases-perM");
          setValues(keCasesPerM, data.casesPerOneMillion);

          keDeathsPerM = document.getElementById("ke-deaths-perM");
          setValues(keDeathsPerM, data.deathsPerOneMillion);

          keRecoveredPerM = document.getElementById("ke-recovered-perM");
          setValues(keRecoveredPerM, data.recoveredPerOneMillion);

          keActivePerM = document.getElementById("ke-active-perM");
          setValues(keActivePerM, data.activePerOneMillion);

        }
           

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

fetch("https://corona.lmao.ninja/v2/all?yesterday ", requestOptions)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);
        getGlobals(data);

        function getGlobals(data){
          //console.log(data);
          gTotCases = document.getElementById("g-tot-cases");
          setValues(gTotCases, data.cases);

          gTotRec = document.getElementById("g-tot-recovered");
          setValues(gTotRec, data.recovered);

          gTotDeaths = document.getElementById("g-tot-deaths");
          setValues(gTotDeaths, data.deaths);

          gAciveCases = document.getElementById("g-active-cases");
          setValues(gAciveCases, data.active);

          gNewConfirmed = document.getElementById("g-new-confirmed");
          setValues(gNewConfirmed, data.todayCases);

          gNewDeaths = document.getElementById("g-new-deaths");
          setValues(gNewDeaths, data.todayDeaths);
        }
           

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


  fetch("https://corona.lmao.ninja/v2/continents?yesterday&sort ", requestOptions)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);
        getContinents(data);

        function getContinents(data){

          nACases = document.getElementById("NA-cases");
          setValues(nACases, data[1].cases);
          nADeaths = document.getElementById("NA-deaths");
          setValues(nADeaths, data[1].deaths);

          sACases = document.getElementById("SA-cases");
          setValues(sACases, data[3].cases);
          sADeaths = document.getElementById("SA-deaths");
          setValues(sADeaths, data[3].deaths);

          EuroCases = document.getElementById("Euro-cases");
          setValues(EuroCases, data[2].cases);
          EuroDeaths = document.getElementById("Euro-deaths");
          setValues(EuroDeaths, data[2].deaths);

          AsiaCases = document.getElementById("Asia-cases");
          setValues(AsiaCases, data[0].cases);
          AsiaDeaths = document.getElementById("Asia-deaths");
          setValues(AsiaDeaths, data[0].deaths);


          AfricaCases = document.getElementById("Africa-cases");
          setValues(AfricaCases, data[4].cases);
          AfricaDeaths = document.getElementById("Africa-deaths");
          setValues(AfricaDeaths, data[4].deaths);

          OceaniaCases = document.getElementById("Oceania-cases");
          setValues(OceaniaCases, data[5].cases);
          OceaniaDeaths = document.getElementById("Oceania-deaths");
          setValues(OceaniaDeaths, data[5].deaths);       
        }
           

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


  fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort=cases ", requestOptions)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);
        getCountries(data);

        function getCountries(data){

          var j = 1
          var totalCases = 0;
          for (var i = 0 ; i <= 4; i++) {
            setValues( document.getElementById("con-" + j + "-name"), data[i].country);
            setValues( document.getElementById("con-" + j + "-cases"), data[i].cases);
            totalCases += data[i].cases;
            j++;
          }        

          var l = 1;
          for (var k =0; k <= 4; k++) {
            var percentage = ((data[k].cases / totalCases) * 100 * 1.5) + "%";
            // console.log(percentage);
            document.getElementById("con-" + l + "-perc").style.width = percentage;
            l++;
          }
           
        }
           

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort=deaths ", requestOptions)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);
        getCountries(data);

        function getCountries(data){

          var j = 1
          var totalDeaths = 0;
          for (var i = 0 ; i <= 4; i++) {
            setValues( document.getElementById("con-" + j + "-name2" ), data[i].country);
            setValues( document.getElementById("con-" + j + "-deaths2"), data[i].deaths);
            totalDeaths += data[i].deaths;
            j++;
          }        

          var l = 1;
          for (var k =0; k <= 4; k++) {
            var percentage = ((data[k].deaths / totalDeaths) * 100 * 1.9) + "%";
            console.log(percentage);
            document.getElementById("con-" + l + "-perc2").style.width = percentage;
            l++;
          }
           
        }
           

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort=recovered ", requestOptions)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);
        getCountries(data);

        function getCountries(data){

          var j = 1
          var totalRecovered = 0;
          for (var i = 0 ; i <= 4; i++) {
            setValues( document.getElementById("con-" + j + "-name3" ), data[i].country);
            setValues( document.getElementById("con-" + j + "-recovered3"), data[i].recovered);
            totalRecovered += data[i].recovered;
            j++;
          }        

          var l = 1;
          for (var k =0; k <= 4; k++) {
            var percentage = ((data[k].recovered / totalRecovered) * 100 * 2) + "%";
            console.log(percentage);
            document.getElementById("con-" + l + "-perc3").style.width = percentage;
            l++;
          }
           
        }
           

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });








