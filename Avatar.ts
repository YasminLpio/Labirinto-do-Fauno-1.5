//classe
   export class Avatar {
//campos/atributos

    nome: string = "";
    class: string = "";
    vida: number = 100;
    arma: string = "";

//metodos
    receberDano(dano: number): void {
        this.vida -= dano;
    }

    curar(cura: number): void {
        this.vida += cura

        if (this.vida > 100) {
            this.vida = 100
        }
    }
    
    estaVivo() {
        return this.vida > 0;
    }
}