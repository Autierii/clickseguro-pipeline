const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo ao ClickSeguro!</h1><form action="/login" method="post"><input name="user" placeholder="Usuário"><input name="pass" type="password" placeholder="Senha"><button>Login</button></form>');
});

app.post('/login', (req, res) => {
    const { user, pass } = req.body;
    // Simula login sem validação (vulnerável a injection)
    res.send(`Login tentado com usuário: ${user}`);
});

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
});