import { Alumno } from './alumno';

export function helper() {
  // Seleccionar elementos (READ)
  const h1 = document.querySelector('h1');
  const pList = document.querySelectorAll('p');

  // OLD const output = document.querySelector('output')!;
  const section = document.querySelector('.section1')!; // .querySelector('body')

  const originalSection = section.innerHTML;

  const handleClick = (event: Event) => {
    console.log('Has hecho click');
    const element = event.target as HTMLButtonElement;
    console.dir(element.textContent);
    console.log(element.dataset.id);

    // WRITE

    section.innerHTML = originalSection + element.textContent!;
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
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const { elements } = event.target as HTMLFormElement;

    console.log(elements);
    const alumno: Alumno = {
      name: (elements.namedItem('userName') as HTMLInputElement).value,
      email: (elements.namedItem('email') as HTMLInputElement).value,
      info: (elements.namedItem('info') as HTMLInputElement).value,
      isOk: (elements.namedItem('isOk') as HTMLInputElement).checked,
      turn: (elements.namedItem('turn') as HTMLInputElement).value,
      course: (elements.namedItem('course') as HTMLInputElement).value,
    } as unknown as Alumno;
    console.log(alumno);
  };

  const formElement = document.querySelector('form')!;

  formElement.addEventListener('submit', handleSubmit);
}
