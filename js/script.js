import { aplicarMascaras } from "./modules/mascaras.js";

import {
    carregarDadosCadastro,
    salvarDadosCadastro,
    carregarNome,
    salvarNome
} from "./modules/storage.js";

import { configurarNavegacao } from "./modules/navegacao.js";

const menuHamburguer = document.querySelector(".menu-hamburguer");
const menuLinks = document.querySelector(".menu-links");

if (menuHamburguer && menuLinks) {
    menuHamburguer.addEventListener("click", function () {
        menuLinks.classList.toggle("menu-aberto");
    });
}

const formulario = document.querySelector("form");
const botaoCadastro = document.getElementById("botao-cadastro");

if (formulario && botaoCadastro) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = "Cadastro realizado com sucesso!";

        document.body.appendChild(toast);

        setTimeout(function () {
            toast.remove();
        }, 3000);
    });
}

const app = document.getElementById("app");

const projetos = [
    {
    titulo: "Resgate de animais",
    descricao: "Resgate e acolhimento de cães e gatos em situação de abandono."
    },
    {
    titulo: "Adoção responsável",
descricao: "Apoio para encontrar novos lares seguros e responsáveis para os animais."
    },
    { 
    titulo: "Campanha de doações",
    descricao: "Arrecadação de recursos para ajudar nos cuidados e tratamentos dos animais."
    },
    {
    titulo: "Feira de adoção responsável",
    descricao: "Eventos para aproximar animais resgatados de novas famílias."
}
   
];

const paginas = {
    inicio: `
        <section>
            <h2>Quem somos</h2>
            <p>
                O Instituto Patas que Transformam é uma organização dedicada ao resgate,
                cuidado e adoção responsável de cães e gatos em situação de abandono.
                Nosso objetivo é oferecer acolhimento, cuidados veterinários e uma nova
                oportunidade para que esses animais encontrem um lar seguro e amoroso.
            </p>

            <img src="../imagens/york-resgatado.jpg"
                 alt="Cachorro resgatado pelo Instituto Patas que Transformam"
                 width="400">
        </section>

        <section>
            <h2>Contato</h2>
            <p>E-mail: contato@patasquetransformam.org</p>
            <p>Telefone: (11) 99999-9999</p>
            <p>São Paulo - SP</p>
        </section>
    `,

    projetos: `
        <section class="secao-projetos">
            <h2>Nossos projetos</h2>
            <span class="badge">Projeto ativo</span>

            <div class="lista-projetos">
                ${projetos.map(function (projeto) {
                    return `
                        <article class="card-projeto">
                            <h3>${projeto.titulo}</h3>
                            <p>${projeto.descricao}</p>
                        </article>
                    `;  
                }).join("")}
            </div>
        </section>
    `,

    cadastro: `
        <section>
            <h2>Cadastro</h2>
            <p>Preencha os dados para realizar o cadastro.</p>

            <form>
            <fieldset>
                <legend>Dados pessoais</legend>
                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required>
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>
                <label for="data-nascimento">Data de nascimento:</label>
                <input type="date" id="data-nascimento" name="data-nascimento" required>
                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" required>
                <label for="telefone">Telefone:</label>
    <input type="tel" id="telefone" name="telefone" pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}" required>
            </fieldset>
            <fieldset>
                <legend>Endereço</legend>
                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" pattern="[0-9]{5}-[0-9]{3}" required>
                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required>
                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required>
                <label for="estado">Estado:</label>
                <input type="text" id="estado" name="estado" required>
            </fieldset>
            <fieldset>
                <legend>Interesse</legend>
                <input type="radio" id="voluntario" name="interesse" value="voluntario" required>
                <label for="voluntario">Quero ser voluntário(a)</label>
                <input type="radio" id="doacao" name="interesse" value="doacao">
                <label for="doacao">Quero fazer uma doação</label>
            </fieldset>
            <button type="submit" id="botao-cadastro">Enviar cadastro</button>
        </form>
        </section>
    `
}; 


function renderizarPagina(pagina) {
    if (!app) return;

    app.innerHTML = paginas[pagina] || paginas.inicio;

    if (pagina === "cadastro") {
        
        const campoNome = document.getElementById("nome");

        if (campoNome) {
            const nomeSalvo = carregarNome();

            if (nomeSalvo) {
                campoNome.value = nomeSalvo;
            }

            campoNome.addEventListener("input", function () {
                salvarNome(campoNome.value);
            });

            const dados = carregarDadosCadastro();

            if (dados) {

                document.getElementById("nome").value = dados.nome;
                document.getElementById("email").value = dados.email;
                document.getElementById("data-nascimento").value = dados.dataNascimento;
                document.getElementById("cpf").value = dados.cpf;
                document.getElementById("telefone").value = dados.telefone;
                document.getElementById("cep").value = dados.cep;
                document.getElementById("endereco").value = dados.endereco;
                document.getElementById("cidade").value = dados.cidade;
                document.getElementById("estado").value = dados.estado;

                if (dados.interesse) {
                    document.querySelector(
                        `input[name="interesse"][value="${dados.interesse}"]`
                    ).checked = true;
                }
            }
        }

        aplicarMascaras();
     
        const formulario = document.querySelector("form");

        if (formulario) {
            formulario.addEventListener("submit", function (evento) {
                evento.preventDefault();

                const dadosCadastro = {
                    nome: document.getElementById("nome").value,
                    email: document.getElementById("email").value,
                    dataNascimento: document.getElementById("data-nascimento").value,
                    cpf: document.getElementById("cpf").value,
                    telefone: document.getElementById("telefone").value,
                    cep: document.getElementById("cep").value,
                    endereco: document.getElementById("endereco").value,
                    cidade: document.getElementById("cidade").value,
                    estado: document.getElementById("estado").value,
                    interesse: document.querySelector('input[name="interesse"]:checked').value
                };

                salvarDadosCadastro(dadosCadastro);

                const toast = document.createElement("div");
                toast.className = "toast";
                toast.textContent = "Cadastro realizado com sucesso!";

                document.body.appendChild(toast);

                setTimeout(function () {
                    toast.remove();
                }, 3000);
            });
        }
    }
}

configurarNavegacao(renderizarPagina);

renderizarPagina(
    window.location.hash.replace("#", "") || "inicio"
);  