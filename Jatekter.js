import Elem from "./Elem.js";
class Jatekter {
  #lepes;
  #aktAllapotLista= [];
  constructor() {
    this.#lepes = 0;
    this.#aktAllapotLista=[" "," "," "," "," "," "," "," "," "]
    const szuloElem = $("article");
    for (let index = 0; index < 9; index++) {
      const elem = new Elem(szuloElem, index);
    }

    $(window).on("elemKattintas", (event) => {
      //console.log(event.detail);
      let aktElem = event.detail;
      if (this.#lepes % 2 == 0) {
        aktElem.setElem("X");
        this.#aktAllapotLista[aktElem.index]="X";
      } else {
        this.#aktAllapotLista[aktElem.index]="O";
        aktElem.setElem("O");
      }
      this.#lepes++;
      console.log(this.#aktAllapotLista)
    });
  }

  ellenorzes(){
    return "X";
  }
}
export default Jatekter;
