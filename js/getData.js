// LLamado a Stock.JSON

const getData = async () => {
    try {
        const response = await fetch("./stock.json");
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Hubo un error', error)
    }
}


