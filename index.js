// // code your solution here
function saturdayFun( whatDoing= "roller-skate"){
    return (`This Saturday, I want to ${whatDoing}!`);
    
}


function mondayWork(MondayActivity = "go to the office"){
    return (`This Monday, I will ${MondayActivity}.`)

}


function wrapAdjective(initialized = "*"){
    return function(pipeInitial = "special"){
        return `You are ${initialized}${pipeInitial}${initialized}!`;
    }
}


  