document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    const email = document.getElementById("email").value;

    if (!nome || !senha || !email) {
        alert("Preencha todos os campos!");
        return;
    }

    alert("Login realizado com sucesso!");
});
