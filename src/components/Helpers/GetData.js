export const getData = async () => {
    const resp = await fetch("../src/data/productos.json");
    const { data } = await resp.json();
    const producto = data.map(producto => ({
        id: producto.id,
        nombre: producto.nombre,
        categoria: producto.categoria,
        cantidad: producto.cantidad,
        precio: producto.precio,
        marca: producto.marca,
        img: producto.img
    }))
    return producto;
}