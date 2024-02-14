let res = document.getElementById('resultado').innerHTML;

function display(input){
   res = document.getElementById('resultado').innerHTML = res + input   ;
}

function resultado(){
    const regexpercentage = /%/;
    const test = regexpercentage.test(res);
    const regexformat = /[0-9]+%[0-9]+$/;
    const testformat = regexformat.test(res);
    if (res != '')
    {
        if(test === true){
            if(testformat === true){
                const resSplit = res.split('\%');
                let porcentagem = resSplit[0];
                let num = resSplit[1];
                let resultado = (porcentagem / 100) * num;
                res = document.getElementById('resultado').innerHTML = resultado.toFixed(2);
            }else {
                alert('Calculos de porcentagem são feitos apenas com dois numeros, nesse formato (10%100)');
            }
        }else {
            document.getElementById('resultado').innerHTML = eval(res);
        }
    }
}

function erase(){
    res = document.getElementById('resultado').innerHTML = '';
}

function eraseOne(){
    res = document.getElementById('resultado').innerHTML = res .substring(0, res.length -1);
}