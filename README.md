# 🖩 **Calculadora Simples em JavaScript**  

Este projeto é uma calculadora funcional desenvolvida com **HTML**, **CSS** e **JavaScript**. Ele permite realizar operações matemáticas básicas, como adição, subtração, multiplicação e divisão, com tratamento de erros para divisão por zero.  

🔗 **[Acesse o projeto na Vercel](https://calculadora-eight-tawny.vercel.app)**  

---

## 🚀 **Funcionalidades**  
✅ Adição (`+`)  
✅ Subtração (`-`)  
✅ Multiplicação (`*`)  
✅ Divisão (`/`)  
✅ Limpar o display (`C`)  
✅ Tratamento de erro para divisão por zero  

---

## 🛠️ **Como Funciona**  
### **1. Inserção de números e operadores**  
- Os números e operadores são armazenados em um array `tela[]`.  
- O valor exibido é atualizado dinamicamente com a função `mostrarTela()`.  

### **2. Lógica de cálculo**  
- A função `calculateResult()` executa as regras na ordem correta:  
  1. Primeiro resolve multiplicação (`*`) e divisão (`/`).  
  2. Depois resolve adição (`+`) e subtração (`-`).  
- A função `Dividir()` verifica se o divisor é zero, retornando a mensagem `Error: divisão por zero` em caso de erro.  

### **3. Exibição dos resultados**  
- Os resultados são exibidos dinamicamente no display usando a função `mostrarTela()`.  

---

## 📁 **Estrutura de Arquivos**  
```
📁 calculadora
├── 📄 index.html      # Código HTML da calculadora
├── 📄 style.css       # Estilo da calculadora
├── 📄 main.js         # Lógica em JavaScript
```

---

## 🧩 **Código Principal**  
### **HTML**  
- Contém a estrutura da calculadora e os botões para cada operação.  
- Os botões estão vinculados a funções específicas no arquivo `main.js`.  

### **CSS**  
- Define o estilo visual da calculadora.  
- Inclui formatação do display e dos botões.  

### **JavaScript**  
- Manipula os valores inseridos e as operações matemáticas.  
- Gerencia erros e atualiza dinamicamente o display.  

---

## 🏃‍♂️ **Como Executar Localmente**  
1. Clone o repositório:  
```bash
git clone https://github.com/seu-usuario/calculadora.git
```
2. Acesse o diretório:  
```bash
cd calculadora
```
3. Abra o arquivo `index.html` em seu navegador.  

---

## 🚨 **Possíveis Melhorias**  
✅ Adicionar suporte para números decimais  
✅ Melhorar o design com animações CSS  
✅ Implementar mais operações matemáticas (exponenciação, porcentagem, etc.)  

---

## 🎯 **Licença**  
Este projeto é de código aberto e está sob a licença **MIT**.  

---

👨‍💻 **Desenvolvido por [Thallyson Gabriel](https://github.com/thallyson1997)** 😊  
