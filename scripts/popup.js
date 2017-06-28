var listGroup = document.getElementById("list-tabs");
var html = "";

function switchTab(){
    var e = event.target ;
    chrome.tabs.update(parseInt(e.id) , {active: true});
}

chrome.tabs.getAllInWindow(function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            html = html + "<div class=\"list-group-item\"><button type=\"button\" class=\"btn btn-default btn-block\" id=\"" + tabs[i].id + "\">" + tabs[i].title + "</button></div>";
        }
        listGroup.innerHTML = html;

        for (var j = 0; j < tabs.length; j++) {
            document.getElementById(tabs[j].id).addEventListener("click", switchTab);
        }
});