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
