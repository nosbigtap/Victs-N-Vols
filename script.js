var people = function () {

    var victs = function () {
        if (/^\+?\d+$/.test(str)){
            var userAnswer = prompt("Number of victims?","# of victims.");
                console.log(userAnswer);
                informaton ()
                return userAnswer;
                }
            else {
               prompy("Not at number");
                victs();
        } 
    }

    var vols = function () {
        var vols = function () {
            if (/^\+?\d+$/.test(str)){
                var userAnswer = prompt("Number of victims?","# of victims.");
                console.log(userAnswer);
                informaton ()
                return userAnswer;
            }
            else {
               prompy("Not at number");
                vols();
            }
        }

