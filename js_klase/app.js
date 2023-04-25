class Car {
    constructor(make, model, maxSpeed, doors){
        this.make = make,
        this.model = model,
        this.maxSpeed = maxSpeed
        this.doors = doors,
        this.currSpeed = 0,
        this.isMoving = this.currSpeed > 0 ? true : false
        this.engineOn = false
    }
    start(){
        // console.log(this.engineOn);
        if(!this.engineOn){
            this.engineOn = true
            return true
        }  
        else 
        return false
    }
    accelarate(speed){
        this.currSpeed += speed
        this.isMoving = true
        if(this.currSpeed > 0){
            this.engineOn = true
        }
        else{
            console.log("Motor nije upaljen");
        }
    }

    brake(){
        if(this.currSpeed <= 0){
            console.error("Ne mozes da smanjis brzinu manju od 0")
        }
        else{
            this.currSpeed -= 30
        }
    }
    overrun(){
        if(this.currSpeed > this.maxSpeed){
            console.error("Doslo je do prekoracenja")
        }
        else
        this.currSpeed = this.currSpeed
    }
}



// const audi = new Car("Audi", "A3", 220, 4);
const bmw = new Car("BMW", "X5", 260, 4)
// console.log(bmw, "bmw pre starta");
// bmw.start()
bmw.accelarate(170)
bmw.brake()
bmw.overrun()
console.log(bmw.engineOn);
console.log(bmw.currSpeed);
console.log("BMW", bmw);
//broj vrati, da li je motor startovan ili nije, da li je motor ukljucen ili nije
//uslov da currSpeed ne sme da predje maxspeed treba da se izbaci greska
// kada se smanjuje brake currspeed ne sme da ode ispod 0
// provera accelarate da li je motor startovan, treba prvi da ga ukljucimo pa da ga ubrzamo
