 export class Macaco {
    nome: string = "Macaco"
    vida: number = 10
    ataque: number = 5

        receberDano(dano: number) {
        this.vida -= dano;
        return this.vida
    }

    causarDano(dano: number) {
        this.ataque = this.ataque
    }

 }