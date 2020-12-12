document.addEventListener("DOMContentLoaded", function(){
    var rightcard = false;
    var tempblock;
    var tempblock2;
    flowy(document.getElementById("canvas"), drag, release, snapping);
    function addEventListenerMulti(type, listener, capture, selector) {
        var nodes = document.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].addEventListener(type, listener, capture);
        }
    }
    function snapping(drag, first) {
        var grab = drag.querySelector(".grabme");
        grab.parentNode.removeChild(grab);
        var blockin = drag.querySelector(".blockin");
        blockin.parentNode.removeChild(blockin);
        var existingHtml = drag.innerHTML;
        if (drag.querySelector(".blockelemtype").value == "1") {
            ReactDOM.render(React.createElement(FlowCard, {
              title: "New visitor",
              subtitle: "When a new visitor goes to Site 1",
              imgsrc: "assets/timeblue.svg"
            }), drag);
        } else if (drag.querySelector(".blockelemtype").value == "2") {
            ReactDOM.render(React.createElement(FlowCard, {
              title: "Action is performed",
              subtitle: "When Action 1 is performed",
              imgsrc: "assets/actionblue.svg"
            }), drag);
        } else if (drag.querySelector(".blockelemtype").value == "3") {
            ReactDOM.render(React.createElement(FlowCard, {
              title: "Time has passed",
              subtitle: "When 10 seconds have passed",
              imgsrc: "assets/timeblue.svg"
            }), drag);
        } else if (drag.querySelector(".blockelemtype").value == "4") {
            ReactDOM.render(React.createElement(FlowCard, {
              title: "Error prompt",
              subtitle: "When Error 1 is triggered",
              imgsrc: "assets/errorblue.svg"
            }), drag);
        } else if (drag.querySelector(".blockelemtype").value == "5") {
            ReactDOM.render(React.createElement(FlowCard, {
              title: "New database entry",
              subtitle: "Add Data object to Database 1",
              imgsrc: "assets/databaseorange.svg"
            }), drag);
        } else if (drag.querySelector(".blockelemtype").value == "6") {
            ReactDOM.render(React.createElement(FlowCard, {
              title: "Update database",
              subtitle: "Update Database 1",
              imgsrc: "assets/databaseorange.svg"
            }), drag);
        } else if (drag.querySelector(".blockelemtype").value == "7") {
            ReactDOM.render(React.createElement(FlowCard, {
              title: "Perform an action",
              subtitle: "Perform Action 1",
              imgsrc: "assets/actionorange.svg"
            }), drag);
        } else if (drag.querySelector(".blockelemtype").value == "8") {
            ReactDOM.render(React.createElement(FlowCard, {
              title: "Make a tweet",
              subtitle: "Tweet Query 1 with the account @alyssaxuu",
              imgsrc: "assets/twitterorange.svg"
            }), drag);
        } else if (drag.querySelector(".blockelemtype").value == "9") {
            ReactDOM.render(React.createElement(FlowCard, {
              title: "Add new log entry",
              subtitle: "Add new success log entry",
              imgsrc: "assets/logred.svg"
            }), drag);
        } else if (drag.querySelector(".blockelemtype").value == "10") {
            ReactDOM.render(React.createElement(FlowCard, {
              title: "Update logs",
              subtitle: "Edit Log Entry 1",
              imgsrc: "assets/logred.svg"
            }), drag);
        } else if (drag.querySelector(".blockelemtype").value == "11") {
            ReactDOM.render(React.createElement(FlowCard, {
              title: "Prompt an error",
              subtitle: "Trigger Error 1",
              imgsrc: "assets/errorred.svg"
            }), drag);
        }
        drag.innerHTML += existingHtml
        return true;
    }
    function drag(block) {
        block.classList.add("blockdisabled");
        tempblock2 = block;
    }
    function release() {
        if (tempblock2) {
            tempblock2.classList.remove("blockdisabled");
        }
    }
    var disabledClick = function(){
        document.querySelector(".navactive").classList.add("navdisabled");
        document.querySelector(".navactive").classList.remove("navactive");
        this.classList.add("navactive");
        this.classList.remove("navdisabled");
        if (this.getAttribute("id") == "triggers") {
            ReactDOM.render(React.createElement(TriggerCards, null), document.getElementById('blocklist'));
        } else if (this.getAttribute("id") == "actions") {
            ReactDOM.render(React.createElement(ActionsCards, null), document.getElementById('blocklist'));
        } else if (this.getAttribute("id") == "loggers") {
            ReactDOM.render(React.createElement(LoggerCards, null), document.getElementById('blocklist'));
        }
    }
    addEventListenerMulti("click", disabledClick, false, ".side");
    document.getElementById("close").addEventListener("click", function(){
       if (rightcard) {
           rightcard = false;
           document.getElementById("properties").classList.remove("expanded");
           setTimeout(function(){
                document.getElementById("propwrap").classList.remove("itson"); 
           }, 300);
            tempblock.classList.remove("selectedblock");
       } 
    });
    
document.getElementById("removeblock").addEventListener("click", function(){
 flowy.deleteBlocks();
});
var aclick = false;
var noinfo = false;
var beginTouch = function (event) {
    aclick = true;
    noinfo = false;
    if (event.target.closest(".create-flowy")) {
        noinfo = true;
    }
}
var checkTouch = function (event) {
    aclick = false;
}
var doneTouch = function (event) {
    if (event.type === "mouseup" && aclick && !noinfo) {
      if (!rightcard && event.target.closest(".block") && !event.target.closest(".block").classList.contains("dragging")) {
            tempblock = event.target.closest(".block");
            rightcard = true;
            document.getElementById("properties").classList.add("expanded");
            document.getElementById("propwrap").classList.add("itson");
            tempblock.classList.add("selectedblock");
       } 
    }
}
addEventListener("mousedown", beginTouch, false);
addEventListener("mousemove", checkTouch, false);
addEventListener("mouseup", doneTouch, false);
addEventListenerMulti("touchstart", beginTouch, false, ".block");
});