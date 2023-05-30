import { Character } from "./types";

export async function getDataById(id: number) {
  const res = await fetch(
    `https://api.sampleapis.com/futurama/characters/${id}`
  );

  if (!res.ok) {
    // Esto activa la página de error automaticamente.
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Character>;
}
