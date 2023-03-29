import { useState } from "react";

export function Calculator() {

    const [displayNumber, setDisplayNumber] = useState("0");
    const [isClicked, setIsClicked] = useState("");
    const [operator, setOperator] = useState("");
    const [previousKeyType, setPreviousKeyType] = useState("");
    const [firstValue, setFirstValue] = useState("0");
    const [currentResult, setCurrentResult] = useState("0");

   


    
    function changeDisplayNumber(number) {

        if(number == ".") {
            if(previousKeyType === "operator" || previousKeyType === "") {
                setDisplayNumber("0.")
                setPreviousKeyType("number");
                return;
            }
            
            if(displayNumber.includes(".")) {
                setDisplayNumber(displayNumber);
                return;
            }
           
        }
       
        if(displayNumber === "0" || previousKeyType === "operator" || previousKeyType === "equals") {
            setDisplayNumber(number);
        } else {
            setDisplayNumber(`${displayNumber}${number}`);
        }
        
    }


    function calculate(firstNumber, operator, secondNumber) {

        let result;

        if(previousKeyType === "number") {
        

            if(operator === "add") {
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                setFirstValue(result);
                setCurrentResult(result);
            } else if(operator === "subtract") {
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                setFirstValue(result);
                setCurrentResult(result);
            } else if (operator === "multiply") {
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                setFirstValue(result);
                setCurrentResult(result);
            } else if(operator === "divide") {
                result = parseFloat(firstNumber)/parseFloat(secondNumber);
                setFirstValue(result);
                setCurrentResult(result);
            }
        } else  {
            setDisplayNumber(displayNumber);
        }

        setDisplayNumber(result);
       
    } 

    function handleAdditionClick() {
     
        if(firstValue === "0") {
            setIsClicked("addition");
            setPreviousKeyType("operator");
            setOperator("add");
            setFirstValue(displayNumber);
        }

        if(firstValue != "0"  ) {

            setOperator("add");
            calculate(firstValue, operator, displayNumber);
            setPreviousKeyType("operator");
            setIsClicked("addition");
        }

        if(previousKeyType == "operator") {
            setDisplayNumber(displayNumber);
        }
    }

    function handleSubtractionClick() {
        
        if(firstValue === "0") {
            setIsClicked("subtraction");
            setPreviousKeyType("operator");
            setOperator("subtract");
            setFirstValue(displayNumber);
        }

        if(firstValue != "0") {
            setIsClicked("subtraction");
            setPreviousKeyType("operator");
            setOperator("subtract");
            calculate(firstValue, operator, displayNumber);
           
        }

        if(previousKeyType == "operator") {
            setDisplayNumber(displayNumber);
        }
    }

    function handleMultiplyClick() {
    
        if(firstValue === "0") {
            setIsClicked("multiply");
            setPreviousKeyType("operator");
            setOperator("multiply");
            setFirstValue(displayNumber);
        }

        if(firstValue != "0") {
            setIsClicked("multiply");
            setPreviousKeyType("operator");
            setOperator("multiply");
            calculate(firstValue, operator, displayNumber);
            
        }

        if(previousKeyType == "operator") {
            setDisplayNumber(displayNumber);
        }
    }

    function handleDivideClick() {
        if(firstValue === "0") {
            setIsClicked("divide");
            setPreviousKeyType("operator");
            setOperator("divide");
            setFirstValue(displayNumber);
        }

        if(firstValue != "0") {
            setIsClicked("divide");
            setPreviousKeyType("operator");
            setOperator("divide");
            calculate(firstValue, operator, displayNumber);
        }

        if(previousKeyType == "operator") {
            setDisplayNumber(displayNumber);
        }
    }

    function handleEqualClick() {
   

       if(firstValue != "0" && previousKeyType === "number") {
         
            setOperator("equals");
            calculate(firstValue, operator, displayNumber);
            setPreviousKeyType("equals");
            setIsClicked("equals");
            setFirstValue(currentResult);
       }

       if (previousKeyType === "equals") {
        changeDisplayNumber(currentResult);
       }
    }

    function handleNumberClick(number) {
        changeDisplayNumber(number);
        setPreviousKeyType("number");


    }
      
    

    
    return(
    
        <div className="calculator">
            <div className="calculator_display">{displayNumber}</div>
            <div className="calculator_keys" data-previouskeytype={previousKeyType}>
                <button onClick={() => handleAdditionClick()} className={"key_operator" + (isClicked === "addition" ? " isClicked" : "")} >+</button>
                <button onClick={() => handleSubtractionClick()} className={"key_operator" + (isClicked === "subtraction" ? " isClicked" : "")} >-</button>
                <button onClick={() => handleMultiplyClick()} className={"key_operator" + (isClicked === "multiply" ? " isClicked" : "")}>&times;</button>
                <button onClick={() => handleDivideClick()} className={"key_operator" + (isClicked === "divide" ? " isClicked" : "")}>÷</button>
                <button onClick={() => handleNumberClick("7")}>7</button>
                <button onClick={() => handleNumberClick("8")}>8</button>
                <button onClick={() => handleNumberClick("9")}>9</button>
                <button onClick={() => handleNumberClick("4")}>4</button>
                <button onClick={() => handleNumberClick("5")}>5</button>
                <button onClick={() => handleNumberClick("6")}>6</button>
                <button onClick={() => handleNumberClick("1")}>1</button>
                <button onClick={() => handleNumberClick("2")}>2</button>
                <button onClick={() => handleNumberClick("3")}>3</button>
                <button onClick={() => handleNumberClick("0")}>0</button>
                <button onClick={() => handleNumberClick(".")}>.</button>
                <button onClick={() => {
                    setDisplayNumber(0);
                    setFirstValue("0");}
                    }>AC</button>
                <button onClick={() => {
                    handleEqualClick();
                    setOperator("equals");
                    calculate(firstValue, operator, displayNumber);
                    setPreviousKeyType("equals");
                    setIsClicked("equals"); }
                    } className={"key_equal" + (isClicked === "equals" ? " isClicked" : "")}>=</button>
            </div>
            
            
            
            
        </div>
    );
}
