
// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const data = {};
//     const inputs = form.querySelectorAll('input');
//
//     inputs.forEach((input) => {
//         data[input.name] = input.value;
//     })
//     console.log(data)
// });

export const getData = (event) => {
    event.preventDefault();
    const formSubmit = (): void => {
        const data = {};
        const inputs = document.querySelectorAll('input');

        inputs.forEach((input) => {
            data[input.name] = input.value;
        })

        console.log(data);
        document.removeEventListener('submit', formSubmit);
    }
    document.addEventListener('submit', formSubmit);
}
