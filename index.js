function calcularNivel(vitorias, derrotas) {

    let winRate = vitorias - derrotas
    let nivel

    switch (true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias >= 11 && vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias >= 21 && vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias >= 51 && vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias >= 81 && vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias >= 91 && vitorias <= 100:
            nivel = "Lendário";
            break;
        case vitorias >= 101:
            nivel = "Imortal";
            break;
}

    console.log("O Herói tem saldo de " + winRate + " Vitórias e está no nível de " +nivel);
}

calcularNivel(158, 37)