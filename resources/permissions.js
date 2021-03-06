
async function initiatePage() {

  let permissionsArea = createPermissionsArea({standardSectionAnimationInfo: { standard: true, bodyImmediately: false }});
  document.body.appendChild(permissionsArea.area);

  try {
    document.title = browser.i18n.getMessage('permissionsPage_Title');  
  } catch (error) { }
  

  setTextMessages();
}


initiatePage();
