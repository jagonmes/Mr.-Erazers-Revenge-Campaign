function loadCampaign() {
    /*document.getElementById("campaign").style.display = none;*/
    fetch('./pages/campaign.html')
  .then(response=> response.text())
  .then(text=> document.getElementById('mainContainer').innerHTML = text);
  }
