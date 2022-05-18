loadCampaign();

function loadCampaign() {
    document.getElementById('navCampaign').classList.add("active");
    document.getElementById('navFAQ').classList.remove("active");
    document.getElementById('navComments').classList.remove("active");
    document.getElementById('navHelp').classList.remove("active");
    fetch('./pages/campaign.html')
  .then(response=> response.text())
  .then(text=> document.getElementById('mainContainer').innerHTML = text);
  }
  function loadFAQ() {
    document.getElementById('navCampaign').classList.remove("active");
    document.getElementById('navFAQ').classList.add("active");
    document.getElementById('navComments').classList.remove("active");
    document.getElementById('navHelp').classList.remove("active");
    fetch('./pages/FAQ.html')
  .then(response=> response.text())
  .then(text=> document.getElementById('mainContainer').innerHTML = text);
  }
  function loadComments() {
    document.getElementById('navCampaign').classList.remove("active");
    document.getElementById('navFAQ').classList.remove("active");
    document.getElementById('navComments').classList.add("active");
    document.getElementById('navHelp').classList.remove("active");
    fetch('./pages/comments.html')
  .then(response=> response.text())
  .then(text=> document.getElementById('mainContainer').innerHTML = text);
  }
  function loadHelp() {
    document.getElementById('navCampaign').classList.remove("active");
    document.getElementById('navFAQ').classList.remove("active");
    document.getElementById('navComments').classList.remove("active");
    document.getElementById('navHelp').classList.add("active");
    fetch('./pages/help.html')
  .then(response=> response.text())
  .then(text=> document.getElementById('mainContainer').innerHTML = text);
  }