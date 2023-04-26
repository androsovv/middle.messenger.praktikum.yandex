

export const getData = (event) => {
    event.preventDefault();
    const formSubmit = (): void => {
        const data = {};
        const inputs = document.querySelectorAll('input');

        inputs.forEach((input: HTMLInputElement) => {
            data[input.name] = input.value;
        })

        console.log(data);
        document.removeEventListener('submit', formSubmit);
    }
    document.addEventListener('submit', formSubmit);
}
