function filtrarCaros(lista, minimo) {
  return lista.filter(p => p.precio > minimo);
}

module.exports = { filtrarCaros };
