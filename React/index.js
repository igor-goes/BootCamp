var container = document.getElementById("app")
//var titulo = document.createElement("h1")
//titulo.innerHTML = "Título inserido por JavaScripto *o*"
//container.appendChild(titulo)

function Contador(props){

    //let numero = 0;
    const [numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1)
        //numero++;
        console.log("somei e ficou = "+ numero)
    }

    function subtrair(){
        setNumero(numero - 1)
        console.log("subtrai e ficou = "+ numero)
    }
return(
    <React.Fragment>
    <h1>{props.titulo}</h1>
    <h2>{numero}</h2>
    <button onClick ={somar} >+</button>
    <button onClick = {subtrair}>-</button>
    </React.Fragment>
)
}

function Partida(){

}

function App(){

    return (
        <React.Fragment>
        <h1>O maior time de São Paulo</h1>
        <Contador titulo="São Paulo"/>
        <Contador titulo="Palmeiras"/>
        <Contador titulo="Santos"/>
        <Contador titulo="Guarani"/>
        </React.Fragment>
    );

}
ReactDOM.render(React.createElement(App,{titulo: "Eu vim de props"},null), container);