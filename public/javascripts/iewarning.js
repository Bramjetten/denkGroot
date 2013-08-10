window.onload=function(){
  ie6Warning(function() {
    var languageMap = {};
      //specifies a JSON hash table for localization
    if(window.IE6WarningLocalizations) {
      languageMap = window.IE6WarningLocalizations;
    }
    
    return {
      imgPath: "/images/", //specifies the path to the icons of each browser
      localizations:  languageMap
    };
  });
};