import React from "react";
import { render, screen } from "@testing-library/react";
import LatestComics from "components/LatestComics/LatestComics";
import comics from "__tests__/mocks/comics.json";

test("deve renderizar o titulo e imagem do quadrinho", () => {
  render(<LatestComics comics={comics} />);

  expect(screen.getByText("Hulk: The End Premiere (Hardcover)")).toBeDefined();
  expect(screen.queryByAltText("Capa do quadrinho")).toBeVisible();
});
