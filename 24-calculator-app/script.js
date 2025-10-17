const display = document.getElementById("display");

//Add value to display 

function appendValue(value){
    display.value +=value;
}

// clear entire display 

function clearDisplay(){
    display.value = "";
}

// Delete last character 

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

// Calculate result safely 

function calculateResult(){
    try{
        display.value = eval(display.value)
    }catch (error){
        display.value = "Error";
    };
     

    
}