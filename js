const form = document.querySelector('form')

const btPub = document.querySelector('#btn-publish')

const kataContainer = document.querySelector('#kata-section')


form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const KataName = this.elements.KataName.value;
    const Instructions = this.elements.KataInstructions.value;
    const Examples = this.elements.KataExamples.value;
    const MySolution = this.elements.MySolution.value;
    const BestSolution = this.elements.BestSolution.value;

   addKata(KataName, Instructions, Examples, MySolution, BestSolution);
})


const addKata = (KataName, Instructions, Examples, MySolution, BestSolution) => {
    const newKata = document.createElement('div');
    newKata.innerText = `${KataName} ${Instructions} ${Examples} ${MySolution} ${BestSolution}`;
    kataContainer.appendChild(newKata);
   

}
