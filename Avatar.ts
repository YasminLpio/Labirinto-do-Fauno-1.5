//classe
   export class Avatar {
//campos/atributos

    nome: string = "";
    class: string = "";
    vida: number = 100;
    arma: string = "";

//metodos
    receberDano(dano: number) {
        this.vida -= dano;
        return this.vida
    }

    curar(cura: number) {
        this.vida += cura

        if (this.vida > 100) {
            this.vida = 100
        }
        return this.vida
    }
    
    estaVivo() {
        return this.vida > 0;
    }
}