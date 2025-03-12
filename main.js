let tela = [];

function appendexp(num) {
    if (tela[0] == 'Error: divisão por zero'){
        tela = ['Error: divisão por zero']
    } else {
        if (!isNaN(Number(num)) && (!isNaN(Number(tela[tela.length - 1])))){
            if ((tela.length == 1) && (tela[0] == '0')){
                tela[0] = num;
            } else {
                let num_novo = tela[tela.length - 1] + num;
                tela.pop()
                tela.push(num_novo);
            }
        } else {
            tela.push(num);
        }
        
        mostrarTela(tela);
    }
}

function mostrarTela(tela){
    let display = document.getElementById("display");
    console.log(tela)
    display.value = tela.join(' ');
}

function calculateResult(){
    regra1();
    regra2();
}

function regra1(){
    while ((tela.includes('/')) || (tela.includes('*'))){
        for (let i = 0; i < tela.length; i++){
            if (tela[i] == '/'){
                index = tela.indexOf('/');
                if (parseFloat(tela[index+1]) == 0){
                    tela = ['Error: divisão por zero']
                } else {
                    resultado = Dividir(parseFloat(tela[index-1]), parseFloat(tela[index+1]));
                    tela = tela.slice(0, index - 1).concat(resultado).concat(tela.slice(index + 2));
                }
                mostrarTela(tela);
                break;
            } else if (tela[i] == '*'){
                index = tela.indexOf('*');
                resultado = Multiplicar(parseFloat(tela[index-1]), parseFloat(tela[index+1]));
                tela = tela.slice(0, index - 1).concat(resultado).concat(tela.slice(index + 2));
                mostrarTela(tela);
                break;
            }
        }
    }
}

function regra2(){
    while ((tela.includes('+')) || (tela.includes('-'))){
        for (let i = 0; i < tela.length; i++){
            if (tela[i] == '+'){
                index = tela.indexOf('+');
                resultado = Somar(parseFloat(tela[index-1]), parseFloat(tela[index+1]));
                tela = tela.slice(0, index - 1).concat(resultado).concat(tela.slice(index + 2));
                mostrarTela(tela);
                break;
            } else if (tela[i] == '-'){
                index = tela.indexOf('-');
                resultado = Subtrair(parseFloat(tela[index-1]), parseFloat(tela[index+1]));
                tela = tela.slice(0, index - 1).concat(resultado).concat(tela.slice(index + 2));
                mostrarTela(tela);
                break;
            }
        }
    }
}

function clearDisplay(){
    tela = [];
    mostrarTela(tela)
}

function Dividir(a, b){
    return a / b;
}

function Multiplicar(a, b){
    return a * b;
}

function Subtrair(a, b){
    return a - b;
}

function Somar(a, b){
    return a + b;
}