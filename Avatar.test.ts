import { describe, expect, it } from "@jest/globals";
import { Avatar } from "./Avatar.ts";

describe("Avatar", () => {
  it("valida e guarda o nome", () => {
    const avatar = new Avatar();
    avatar.nome = "  Fauno  ";
    expect(avatar.nome).toBe("Fauno");
    expect(() => { avatar.nome = " "; }).toThrow("Nome inválido.");
  });

  it("limita a vida entre zero e cem ao receber dano e cura", () => {
    const avatar = new Avatar();
    avatar.receberDano(30);
    expect(avatar.vida).toBe(70);
    avatar.curar = 50;
    expect(avatar.vida).toBe(100);
    avatar.receberDano(150);
    expect(avatar.vida).toBe(0);
    expect(avatar.estaVivo()).toBe(false);
  });
});