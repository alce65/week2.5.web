export function helper() {
    // Seleccionar elementos (READ)
    const h1 = document.querySelector('h1');
    const pList = document.querySelectorAll('p');
    // OLD const output = document.querySelector('output')!;
    const section = document.querySelector('.section1'); // .querySelector('body')
    const originalSection = section.innerHTML;
    const handleClick = (event) => {
        console.log('Has hecho click');
        const element = event.target;
        console.dir(element.textContent);
        console.log(element.dataset.id);
        // WRITE
        section.innerHTML = originalSection + element.textContent;
        manageElements();
    };
    // Detectar EVENTOS
    const manageElements = () => {
        const buttons = document.querySelectorAll('.button');
        buttons?.forEach((item) => {
            item.addEventListener('click', handleClick);
        });
    };
    manageElements();
    console.dir(h1);
    console.dir(pList);
}
export function manageForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const { elements } = event.target;
        console.log(elements);
        const alumno = {
            name: elements.namedItem('userName').value,
            email: elements.namedItem('email').value,
            info: elements.namedItem('info').value,
            isOk: elements.namedItem('isOk').checked,
            turn: elements.namedItem('turn').value,
            course: elements.namedItem('course').value,
        };
        console.log(alumno);
    };
    const formElement = document.querySelector('form');
    formElement.addEventListener('submit', handleSubmit);
}
