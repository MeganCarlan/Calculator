import { useState } from "react";

export function Calculator() {

    const [displayNumber, setDisplayNumber] = useState("0");
    const [isClicked, setIsClicked] = useState("");
    const [operator, setOperator] = useState("");
    const [previousKeyType, setPreviousKeyType] = useState("");
    const [firstValue, setFirstValue] = useState(0);
   


    
    function changeDisplayNumber(number) {
        if(number ==+ ".") {
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
            setDisplayNumber(`${displayNumber}${number}`)
        }
    }



    function calculate(firstNumber, operator, secondNumber) {

        
        let result;

        if(previousKeyType == "number") {
        
            setPreviousKeyType("equals");

            if(operator === "add") {
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
            } else if(operator === "subtract") {
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
            } else if (operator === "multiply") {
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
            } else if(operator === "divide") {
                result = parseFloat(firstNumber)/parseFloat(secondNumber);
            }
        } else  {
            setDisplayNumber(setDisplayNumber);
        }

       
        
        console.log(result);
        setFirstValue(displayNumber);
        setDisplayNumber(result);
       
    }

    function handleClick() {
        console.log(`first value:${firstValue}`);

        if(firstValue !=0 && previousKeyType == "number")  {
        calculate(firstValue, operator, displayNumber);
        setOperator(operator)
        console.log("end handle click");
        } 
    }
      
    

    






    
    return(
    
        <div className="calculator">
            <div className="calculator_display">{displayNumber}</div>
            <div className="calculator_keys" data-previouskeytype={previousKeyType}>
                <button onClick={() => {
                    handleClick();
                    setIsClicked("addition");
                    setPreviousKeyType("operator");
                    setFirstValue(displayNumber);
                    setOperator("add");}
                    } className={"key_operator" + (isClicked === "addition" ? " isClicked" : "")} >+</button>
                <button onClick={() => { 
                    handleClick();
                    setIsClicked("subtraction")
                    setPreviousKeyType("operator");
                    setFirstValue(displayNumber);
                    setOperator("subtract");}
                    } className={"key_operator" + (isClicked === "subtraction" ? " isClicked" : "")} >-</button>
                <button onClick={() => {
                    handleClick();
                    setIsClicked("multiply");
                    setPreviousKeyType("operator");
                    setFirstValue(displayNumber);
                    setOperator("multiply")}
                    } className={"key_operator" + (isClicked === "multiply" ? " isClicked" : "")}>&times;</button>
                <button onClick={() => { 
                    handleClick();
                    setIsClicked("divide");
                    setPreviousKeyType("operator");
                    setFirstValue(displayNumber);
                    setOperator("divide");}
                    } className={"key_operator" + (isClicked === "divide" ? " isClicked" : "")}>÷</button>
                <button onClick={()=> {
                    changeDisplayNumber("7");
                    setPreviousKeyType("number");}
                    }>7</button>
                <button onClick={()=> {
                    changeDisplayNumber("8");
                    setPreviousKeyType("number");}
                    }>8</button>
                <button onClick={()=> {
                    changeDisplayNumber("9");
                    setPreviousKeyType("number");}
                    }>9</button>
                <button onClick={()=> {
                    changeDisplayNumber("4");
                    setPreviousKeyType("number");}
                    }>4</button>
                <button onClick={()=> {
                    changeDisplayNumber("5");
                    setPreviousKeyType("number");}
                    }>5</button>
                <button onClick={()=> {
                    changeDisplayNumber("6");
                    setPreviousKeyType("number");}
                    }>6</button>
                <button onClick={()=> {
                    changeDisplayNumber("1");
                    setPreviousKeyType("number");}
                    }>1</button>
                <button onClick={()=> {
                    changeDisplayNumber("2");
                    setPreviousKeyType("number");}
                    }>2</button>
                <button onClick={()=> {
                    changeDisplayNumber("3");
                    setPreviousKeyType("number");}
                    }>3</button>
                <button onClick={()=> {
                    changeDisplayNumber("0");
                    setPreviousKeyType("number");}
                    }>0</button>
                <button onClick={()=> {
                    changeDisplayNumber(".");
                    setPreviousKeyType("number");}
                    }>.</button>
                <button onClick={() => setDisplayNumber(0)}>AC</button>
                <button onClick={() => {
                    handleClick();
                    setOperator("equals");
                    calculate(firstValue, operator, displayNumber);
                    setPreviousKeyType("equals");
                    setIsClicked("equals"); }
                    } className={"key_equal" + (isClicked === "equals" ? " isClicked" : "")}>=</button>
            </div>
            
            
            
            
        </div>
    );
}