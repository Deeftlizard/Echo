let blue = false

function Buttons(name) {
    this.name = document.querySelector(name);

    this.createButton = function() {
        $(this.name).css("color", "#2196F3");

        if(name == "#rof"){
            $("#tas").css("color", "#ffffff");
            $("#re").css("color", "#ffffff");
        }
        else if(name == "#tas"){
            $("#rof").css("color", "#ffffff");
            $("#re").css("color", "#ffffff");
        }
        else if(name == "#re"){
            $("#tas").css("color", "#ffffff");
            $("#rof").css("color", "#ffffff");
        }
    }
}

let rof = new Buttons("#rof");
let tas = new Buttons("#tas");
let re = new Buttons("#re");

function createButtonFunc1() {rof.createButton()};
function createButtonFunc2() {tas.createButton()};
function createButtonFunc3() {re.createButton()};

// prof rof | task tas | ref re
