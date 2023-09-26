console.log(5000);

// generate pin button

document.getElementById('generate-pin').addEventListener('click', function () {
    
    pinGenerator();
})

// type pin in calculator

document.getElementById('calc-btn').addEventListener('click', function (event) {

    console.log(event.target.innerText);
    const number = event.target.innerText;
    console.log(typeof (number));
    if (number === '<')
    {
        back();
    }
    else if (number === 'C')
    {
        setvalueById('form-box', '');
    }
    else if (number === 'Submit')
    {
        checkBox();
        }
    else
    formBox(number,'form-box');
})

