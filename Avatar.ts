//classe
export class Avatar {
//campos/atributos

    private _nome: string = "";
    private _vida: number = 100;
    public arma: string = "";
    public classe: string = "";

//metodos

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        if (nome.trim().length >= 2) {
            this._nome = nome.trim();
        } else {
            throw new Error("Nome inválido.");
        }
    }

    public get vida(): number {
        return this._vida;
    }

    public set vida(novaVida: number) {
        if (novaVida < 0) {
            throw new Error("A vida não pode ser negativa.");
        }
        if (novaVida > 100) {
            this._vida = 100;
        } else {
            this._vida = novaVida;
        }
    }

    public set curar(cura: number) {
        if (cura < 0) {
            throw new Error("A cura não pode ser negativa.");
        }
        this.vida = this._vida + cura;
    }

    receberDano(dano: number) {
        this.vida = Math.max(0, this._vida - dano);
        return this._vida;
    }
    
    estaVivo() {
        return this._vida > 0;
    }
}