import { useState } from "react";
export function Calculator() {

    const [displayNumber, setDisplayNumber] = useState(0);
    const [addIsPressed, setAddIsPressed] = useState(false);
    const [subtractIsPressed, setSubtractIsPressed] = useState(false);
    const [multiplyIsPressed, setMultiplyIsPressed] = useState(false);
    const [divideIsPressed, setDivideIsPressed] = useState(false);
    const [operator, setOperator] = useState("");
    const [previousKeyType, setPreviousKeyType] = useState("");
    const [firstValue, setFirstValue] = useState(0);
    const [result, setResult] = useState(0);




    const addClassName = addIsPressed ? "addIsPressed" : "";
    const subtractClassName = subtractIsPressed ? "subtractIsPressed" : "";
    const multiplyClassName = multiplyIsPressed ? "multiplyIsPressed" : "";
    const divideClassName = divideIsPressed ? "divideIsPressed" : "";





    
    function changeDisplayNumber(number) {
        if(displayNumber == 0 || previousKeyType == "operator" || previousKeyType == "equals") {
         setDisplayNumber(number);
        } else {
            setDisplayNumber(`${displayNumber}${number}`)
        }
    }

    function unpressKeys() {
        if(addIsPressed) {
            setAddIsPressed("");
        }
        if(subtractIsPressed) {
            setSubtractIsPressed("");
        }
        if(multiplyIsPressed) {
            setMultiplyIsPressed("");
        }
        if(divideIsPressed) {
            setDivideIsPressed("");
        }
    }

    function calculate(firstNumber, operator, secondNumber) {
       
        let result;

        if(operator == "add") {
            result = firstNumber + secondNumber;
        } else if(operator == "subtract") {
            result = firstNumber - secondNumber;
        } else if (operator == "multiply") {
            result = firstNumber * secondNumber;
        } else if(operator == "divide") {
            result = firstNumber/secondNumber;
        }
        
        console.log(result);
        return result;
    }

console.log(addClassName);
console.log(subtractClassName);
console.log(multiplyClassName);
console.log(divideClassName);
console.log(previousKeyType);
console.log(firstValue);





    
    return(
    
        <div className="calculator">
            <div className="calculator_display">{displayNumber}</div>
            <div onClick={() => unpressKeys()} className="calculator_keys" data-previouskeytype={previousKeyType}>
                <button onClick={() => {
                    setAddIsPressed(!addIsPressed);
                    setPreviousKeyType("operator");
                    setFirstValue(displayNumber);
                    setOperator("add");}
                    } className={`key_operator ${addClassName}`} >+</button>
                <button onClick={() => { 
                    setSubtractIsPressed(!subtractIsPressed);
                    setPreviousKeyType("operator");
                    setFirstValue(displayNumber);
                    setOperator("subtract");}
                    } className={`key_operator ${subtractClassName}`} >-</button>
                <button onClick={() => {
                    setMultiplyIsPressed(!multiplyIsPressed);
                    setPreviousKeyType("operator");
                    setFirstValue(displayNumber);
                    setOperator("multiply")}
                    } className={`key_operator ${multiplyClassName}`}>&times;</button>
                <button onClick={() => { 
                    setDivideIsPressed(!divideIsPressed);
                    setPreviousKeyType("operator");
                    setFirstValue(displayNumber);
                    setOperator("divide");}
                    } className={`key_operator ${divideClassName}`}>÷</button>
                <button onClick={()=> {
                    changeDisplayNumber(7);
                    setPreviousKeyType("number");}
                    }>7</button>
                <button onClick={()=> {
                    changeDisplayNumber(8);
                    setPreviousKeyType("number");}
                    }>8</button>
                <button onClick={()=> {
                    changeDisplayNumber(9);
                    setPreviousKeyType("number");}
                    }>9</button>
                <button onClick={()=> {
                    changeDisplayNumber(4);
                    setPreviousKeyType("number");}
                    }>4</button>
                <button onClick={()=> {
                    changeDisplayNumber(5);
                    setPreviousKeyType("number");}
                    }>5</button>
                <button onClick={()=> {
                    changeDisplayNumber(6);
                    setPreviousKeyType("number");}
                    }>6</button>
                <button onClick={()=> {
                    changeDisplayNumber(1);
                    setPreviousKeyType("number");}
                    }>1</button>
                <button onClick={()=> {
                    changeDisplayNumber(2);
                    setPreviousKeyType("number");}
                    }>2</button>
                <button onClick={()=> {
                    changeDisplayNumber(3);
                    setPreviousKeyType("number");}
                    }>3</button>
                <button onClick={()=> {
                    changeDisplayNumber(0);
                    setPreviousKeyType("number");}
                    }>0</button>
                <button onClick={()=> {
                    changeDisplayNumber(".");
                    setPreviousKeyType("number");}
                    }>.</button>
                <button >AC</button>
                <button onClick={() => {
                    setDisplayNumber(calculate(firstValue, operator, displayNumber));
                    setPreviousKeyType("equals");}
                    } className="key_equal">=</button>
            </div>


            
            
            
            
            {/* <div className="calculator_keys">
                <button className="key_operator" data-action="add">+</button>
                <button className="key_operator" data-action="subtract">-</button>
                <button className="key_operator" data-action="multiply">&times;</button>
                <button className="key_operator" data-action="divide">÷</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>0</button>
                <button data-action="decimal">.</button>
                <button data-action="clear">AC</button>
                <button className="key_equal" data-action="calculate">=</button> */}
</div>
        // </div>
    );
}