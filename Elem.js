class Elem{
    
    
    #adat;

    constructor(adat, szuloELEM){
        
        this.adat=adat;

        
        szuloELEM.append(`
        <div class="elem"> 
        <h3>${this.#adat}</h3>
        <p>${this.elem()}</p>
        </div>
        `)
        this.szuloELEM=$(".szemely:last-child");
        console.log(this.adat);
        this.szuloELEM.on("click", function(){
            console.log(this);
        })

        this.szuloELEM.on("click", ()=>{
            console.log(this);
        })
    }
    getElemek(){
        return this.#adat;
    }
    setElemek(){
        this.#adat=ujadat;
    }
    

 

}

export default Elem;  
