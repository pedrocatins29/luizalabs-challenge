import * as React from "react";
import { render, screen } from "@testing-library/react";
import StarRating from "components/StarRating/StarRating";

test("deve mostrar o numero correto de estrelas preenchidas", () => {
  const availableStars = 5;
  const stars = 4;
  render(<StarRating rating={stars} />);

  expect(screen.queryAllByAltText("Estrela vermelha").length).toBe(stars);
  expect(screen.queryAllByAltText("Estrela cinza").length).toBe(
    availableStars - stars
  );
});

test("não deve mostrar nenhuma estrela preenchida", () => {
  const availableStars = 5;
  const stars = 0;

  render(<StarRating rating={stars} />);

  expect(screen.queryAllByAltText("Estrela vermelha").length).toBe(stars);
  expect(screen.queryAllByAltText("Estrela cinza").length).toBe(
    availableStars - stars
  );
});

test("deve mostrar todas as estrela preenchidas", () => {
  const availableStars = 5;
  const stars = 5;

  render(<StarRating rating={stars} />);

  expect(screen.queryAllByAltText("Estrela vermelha").length).toBe(stars);
  expect(screen.queryAllByAltText("Estrela cinza").length).toBe(
    availableStars - stars
  );
});
