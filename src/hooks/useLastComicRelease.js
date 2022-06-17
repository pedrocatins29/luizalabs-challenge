/**
 * Retorna a data do ultimo quadrinho de forma apropriada para visualização
 * @param {*} queryKey Parametro enviado por meio do react query que é desestruturado para pegar o `lastComicDate`
 * @returns {string} Valor da data do ultimo quadrinho
 */
function useLastComicRelease({ queryKey }) {
  const [, { lastComicDate }] = queryKey;
  try {
    const parsedDateFromLastComic = Date.parse(lastComicDate);
    const lastDate = new Date(parsedDateFromLastComic).toLocaleDateString();

    return lastDate;
  } catch (error) {
    throw Error({
      isError: true,
      message: "Falha a recuperar data do último quadrinho",
    });
  }
}

export default useLastComicRelease;
