
 
 export const formSubmit = (event: SubmitEvent): void => {
        event.preventDefault();
        const data: {[key: string]: string} = {};
        const inputs = document.querySelectorAll('input');

        inputs.forEach((input: HTMLInputElement) => {
            data[input.name] = input.value;
        })
        console.log(data);
    }
