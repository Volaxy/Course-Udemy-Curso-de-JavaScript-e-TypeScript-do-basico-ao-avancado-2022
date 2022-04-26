fetch("pagina4.html")
  .then(response => {
    if(response.status !== 200) throw new Error("Erro 404 nosso");
    return response.text();
  })
  .then(html => console.log(html))
  .catch(e => console.error(e));