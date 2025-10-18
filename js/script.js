document.addEventListener("DOMContentLoaded", ()=>{
    let btnJugar = document.getElementById("btn-jugar");
    let divTexto = document.getElementById("texto");

    btnJugar.addEventListener("click", ()=>{
        fetch("../verbos.json")
        .then(response => response.json())
        .then(verbos =>{
            const random = Math.floor(Math.random()*2);
            const randomVerboIndex = Math.floor(Math.random() * verbos.length);
            switch(random){
                case 0:
                    const pasado = verbos[randomVerboIndex].past;
                    const participio = verbos[randomVerboIndex].participle;
                    const espa = verbos[randomVerboIndex].spanish;
                    divTexto.innerHTML = `
                    <form id="verboForm">
                    <label> Escribe el verbo en presente</label>
                    <div id="verbosTexto"> 
                        <input type ="text" id="respuesta" placeholder = "Tu respuesta">
                        <p><strong>${pasado}</strong> <strong>${participio}</strong> <strong>${espa}</strong> </p>
                    </div>
                    <button type="submit">Validar</button>
                    </form> 
                    <p id="resultado"></p>
                    `;
                    document.getElementById("verboForm").addEventListener("submit", (e) => {
                        e.preventDefault();
                        const resp = document.getElementById("respuesta").value.toLowerCase();
                        const correcto = verbos[randomVerboIndex].present.toLowerCase();
                        const resultado = document.getElementById("resultado")
                        if(resp === correcto){
                            resultado.textContent = "Correcto"
                            resultado.style.color = "green";
                        }
                        else{
                            resultado.textContent =  `Incorrecto. Era ${correcto}`;
                            resultado.style.color = "red";
                        }
                    })
            }
        });
    });
})