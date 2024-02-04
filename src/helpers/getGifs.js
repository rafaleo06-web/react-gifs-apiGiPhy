//todo: console.log(gifs) muestra un array, ya que ese es el valor final de gifs después de que todas las operaciones asíncronas hayan terminado
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=iuinUxbBG97deY7Qt8JP2z0aTtRL89eZ&q=${category}&limit=20`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => ({ id: img.id, title: img.title, url: img.images.downsized_medium.url }));
  return gifs;
};
