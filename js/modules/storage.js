export function carregarDadosCadastro() {
    const dadosSalvos = localStorage.getItem("dadosCadastro");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}

export function salvarDadosCadastro(dadosCadastro) {
    localStorage.setItem(
        "dadosCadastro",
        JSON.stringify(dadosCadastro)
    );
}

export function carregarNome() {
    return localStorage.getItem("nomeCadastro");
}

export function salvarNome(nome) {
    localStorage.setItem("nomeCadastro", nome);
}