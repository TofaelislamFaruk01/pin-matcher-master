console.log(5);

// pin generator function

function pinGenerator()
{
    const number = Math.round(Math.random() * 10000);
    const nString = number + '';
    console.log(nString.length);
    if (nString.length < 4)
    {
        pinGenerator();
    }
    else
    {
        console.log(number);
        setvalueById('pin-box', number);
        }
    
    // if (number < 1000)
    // {
    //     pinGenerator();
    // }
    // else
    //     console.log(number);

}

// set value in the textbox

function setvalueById( boxId, value) {
    const boxValue = document.getElementById(boxId);
    boxValue.value = value;
}

// get value from textbox

function getValueById(boxId)
{
    const getBox = document.getElementById(boxId);
    const valueBox = getBox.value;
    return valueBox;
}

// function for 1-9 input

function formBox(sNumber)
{
    if (sNumber.length === 1) {
        const getBox = document.getElementById('form-box');
        const valueBox = getBox.value;
        console.log(valueBox);
        let vBox = valueBox + sNumber;
        getBox.value = vBox;
        console.log(vBox);
    }
}

// function for < input

function back()
{
    const getBox = document.getElementById('form-box');
    const valueBox = getBox.value;
    console.log(valueBox);
    let stng = valueBox.split('');
    console.log(stng);
    stng.pop();
    const updateValue=stng.join('');
    console.log(updateValue);
    getBox.value = updateValue;
}

// check equility these two box

function checkBox() {
    const pinBox = getValueById('pin-box');
    console.log(pinBox);
    const formBox = getValueById('form-box');
    console.log(formBox);
    if (pinBox === formBox)
    {
        document.getElementById('pos').style.display = 'block';
        document.getElementById('neg').style.display = 'none';
    }
    else
    {
        document.getElementById('neg').style.display = 'block';
        document.getElementById('pos').style.display = 'none';
        }

}