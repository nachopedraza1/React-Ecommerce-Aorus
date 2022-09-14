export const getData = async () => {
    const resp = await fetch("../src/data/productos.json");
    const { data } = await resp.json();
    return data;
}