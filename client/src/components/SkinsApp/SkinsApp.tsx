import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SkinsApp from "../../components/SkinsApp/SkinsApp";
import { ChakraProvider } from "@chakra-ui/react";


global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          id: "1",
          name: "AK-47 | Redline",
          image: "ak47.png",
          category: "Rifle",
          float: 0.15,
          price: 50,
        },
        {
          id: "2",
          name: "M4A4 | Howl",
          image: "m4a4.png",
          category: "Rifle",
          float: 0.04,
          price: 1000,
        },
      ]),
  })
) as jest.Mock;

const renderWithChakra = (ui: React.ReactElement) => {
  return render(
    <ChakraProvider>{ui}</ChakraProvider>
  );
};

describe("SkinsApp Integration Tests", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  test("renders SkinsApp and fetches skins", async () => {
    renderWithChakra(<SkinsApp />);

    expect(screen.getByText("Resultados")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Pesquisar skins...")
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("AK-47 | Redline")).toBeInTheDocument();
      expect(screen.getByText("M4A4 | Howl")).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  test("filters skins based on search term", async () => {
    renderWithChakra(<SkinsApp />);

    await waitFor(() => {
      expect(screen.getByText("AK-47 | Redline")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText("Pesquisar skins...");
    await userEvent.type(searchInput, "Howl");

    const searchButton = screen.getByText("Procurar");
    await userEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.queryByText("AK-47 | Redline")).not.toBeInTheDocument();
      expect(screen.getByText("M4A4 | Howl")).toBeInTheDocument();
    });
  });
});