const contaBancaria = {
    nome: "Matheus",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        deposito = {
            tipo: "Depósito",
            valor
        }
        this.historicos.push(deposito)

        return console.log(`Deposito de R$${valor / 100} realizado para o cliente: ${this.nome}`)
    },
    sacar: function (valor) {
        let resposta = '';
        if (valor > this.saldo) {
            resposta = console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
        } else {
            this.saldo -= valor;
        }
        saque = {
            tipo: "Saque",
            valor
        }
        this.historicos.push(saque)
        return resposta
    }
}

contaBancaria.depositar(1000)