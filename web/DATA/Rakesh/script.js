var tablinks=document.getElementsByClassName("tab-link");
var tabContents=document.getElementsByClassName("tab-contents");


function opentab(tabName){
   for(tab of tablinks){
    tab.classList.remove("active")
    
   }
   for(tabC of tabContents){
    tabC.classList.remove("active-tab")
   }
   event.currentTarget.classList.add("active");
   document.getElementById(tabName).classList.add("active-tab");
}