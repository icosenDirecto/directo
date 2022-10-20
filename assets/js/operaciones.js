const formOperaciones = document.getElementById('formOperaciones');
const resultOperaciones = document.getElementById('resultOperaciones');

formOperaciones.addEventListener('submit', function(e) {
    const formData = new FormData(formOperaciones);
    const Celular = formData.get('cellphone');
    const mySubject = `Prueba idForm :: Libro de quejas ${Celular}`;
    formData.append("subject", mySubject);

    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    var json = JSON.stringify(object);
    resultOperaciones.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                resultOperaciones.innerHTML = json.message;
            } else {
                console.log(response);
                resultOperaciones.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            resultOperaciones.innerHTML = "Something went wrong!";
        })
        .then(function() {
            formOperaciones.reset();
            setTimeout(() => {
                resultOperaciones.style.display = "none";
            }, 3000);
        });
});