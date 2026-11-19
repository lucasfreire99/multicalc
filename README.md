<div align="center">

# ∑ MultiCalc

**Ferramentas de cálculo, texto, datas, documentos e sorteios em um só lugar.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Sem dependências](https://img.shields.io/badge/depend%C3%AAncias-nenhuma-20c879?style=for-the-badge)

[🔗 Ver demonstração](https://SEU-PROJETO.vercel.app) · [🐛 Reportar problema](https://github.com/SEU-USUARIO/multicalc/issues)

</div>

---

## 📖 Sobre

O **MultiCalc** é um site com **16 ferramentas** do dia a dia, feito em um único arquivo `index.html`, sem frameworks, sem build e sem instalar nada. Tudo roda no navegador: **nenhum dado é enviado para servidores**.

Visual escuro, responsivo (funciona no celular) e organizado por categorias no menu lateral.

## ✨ Ferramentas

### 🧮 Cálculos
| Ferramenta | O que faz |
|---|---|
| **Números por Extenso** | Converte números e valores em reais para texto (ex.: `1.250,50` → *mil, duzentos e cinquenta reais e cinquenta centavos*) |
| **Regra de 3 Simples** | Descobre o valor desconhecido a partir de três valores |
| **Porcentagem** | Porcentagem de um valor, entre dois valores, variação, acréscimo e desconto |
| **Calculadora de IMC** | Índice de massa corporal, classificação da OMS e faixa de peso normal |
| **Conversor de Unidades** | Comprimento, peso, temperatura, volume, área, velocidade, dados, tempo, pressão e energia |

### 📅 Datas
| Ferramenta | O que faz |
|---|---|
| **Signos do Zodíaco** | Descobre o signo, elemento e planeta regente |
| **Calcular Idade** | Idade em anos, meses e dias, total de horas e próximo aniversário |
| **Somar Dias** | Soma ou subtrai dias, dias úteis, semanas, meses e anos |
| **Contador de Dias** | Diferença entre duas datas, com dias úteis |

### ✍️ Texto
| Ferramenta | O que faz |
|---|---|
| **Formatador de Texto** | Remove espaços duplicados, linhas vazias e caracteres especiais; ajusta parágrafos |
| **Maiúsculas e Minúsculas** | MAIÚSCULAS, minúsculas, Primeira Letra Maiúscula e Frase |
| **Organizador de Nomes** | Ordena de A a Z, remove duplicados e padroniza listas |

### 🖨️ Documentos
| Ferramenta | O que faz |
|---|---|
| **Gerador de Etiquetas** | Etiquetas para pastas, materiais e correspondências, em tamanho real |
| **Gerador de Crachás** | Crachás com nome, cargo e foto, vertical ou horizontal, com ou sem furo |
| **Gerador de Protocolos** | Comprovantes de recebimento e entrega de documentos com assinaturas |

### 🎲 Sorteios
| Ferramenta | O que faz |
|---|---|
| **Sorteios e Aleatórios** | Sorteio de números, de nomes (um ganhador por vez), dados e cara ou coroa, com **histórico** de todos os sorteios |

> 🔐 Os sorteios usam `crypto.getRandomValues`, a aleatoriedade criptográfica do navegador, sem viés.

## 🚀 Como usar localmente

Não precisa instalar nada.

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/multicalc.git

# 2. Entre na pasta
cd multicalc

# 3. Abra o index.html no navegador (duplo clique)
```

Se preferir um servidor local:

```bash
npx serve .
```

## ☁️ Deploy na Vercel

1. Envie o projeto para o **GitHub** (veja abaixo).
2. Acesse [vercel.com](https://vercel.com) e entre com sua conta do GitHub.
3. Clique em **Add New… → Project** e escolha o repositório `multicalc`.
4. Deixe tudo como está (**Framework Preset: Other**, sem comando de build, sem pasta de saída).
5. Clique em **Deploy**. Em cerca de 30 segundos o site estará no ar.

Cada `git push` na branch `main` publica uma nova versão automaticamente.

### Enviando para o GitHub

```bash
git init
git add index.html README.md
git commit -m "MultiCalc: primeira versão"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/multicalc.git
git push -u origin main
```

## 🗂️ Estrutura

```
multicalc/
├── index.html   # site completo (HTML, CSS e JavaScript)
└── README.md
```

## 🖨️ Observações sobre impressão

- Etiquetas, crachás e protocolos têm layout próprio para impressão: só o documento sai na folha, sem o menu.
- Se as cores não saírem, ative **"Gráficos de segundo plano"** (Chrome/Edge) ou **"Imprimir planos de fundo"** (Firefox) na janela de impressão.
- O **furo do crachá** é apenas uma guia de corte: fure depois de imprimir.

## 💾 Privacidade

- Nada é enviado para servidores; os cálculos acontecem no seu navegador.
- A foto do crachá fica apenas na memória da página.
- O histórico de sorteios fica salvo no `localStorage` do seu navegador e pode ser apagado a qualquer momento no botão **Limpar histórico**.

## 🛠️ Tecnologias

HTML5, CSS3 (variáveis, grid e flexbox) e JavaScript puro. Sem bibliotecas e sem etapa de build.

## 🤝 Contribuindo

Sugestões são bem-vindas! Abra uma *issue* ou envie um *pull request*.

## 📄 Licença

Distribuído sob a licença MIT. Adicione um arquivo `LICENSE` se quiser tornar isso oficial.

---

<div align="center">

Feito com 💚 · **MultiCalc**

</div>
