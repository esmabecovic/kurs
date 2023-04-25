class Proizvod {
    constructor(barKod, cena, kolicina){
        this.barKod = barKod,
       this.cena = cena,
       this.kolicina = kolicina 
    }
    ispis = () => console.log(`${this.barKod} ${this.cena} ${this.kolicina}`);
}

class Radnik extends Proizvod{
    #kolega
    constructor(kolega, barKod, cena, kolicina, ime, prezime) {
        super(barKod, cena, kolicina)
        this.#kolega = kolega
        this.ime = ime,
        this.prezime = prezime
    }
    ispis = () => console.log(`${this.ime} ${this.prezime}`);

    getKolega = () => this.#kolega;
    setKolega = (omiljeniKolega) => (this.#kolega = omiljeniKolega)
}

class Prodavnica extends Radnik{
    constructor(barKod, cena, kolicina, ime, prezime, brRadnihSati, cenaPoSatu) {
        super(barKod, cena, kolicina, ime, prezime)
        this.brRadnihSati = brRadnihSati,
        this.cenaPoSatu = cenaPoSatu
    }
    ispis = () => console.log(`${this.brRadnihSati} ${this.cenaPoSatu}`);

    plata = () => this.brRadnihSati * this.cenaPoSatu
}

const r = new Radnik("edina", 8177816, 2000, 3, "esma", "becovic")
console.log(r);
console.log(r.getKolega());

r.setKolega("coka")
console.log(r.getKolega());
