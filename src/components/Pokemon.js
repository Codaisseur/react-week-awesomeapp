// src/components/Pokemon.js
export default function Pokemon() {
  return (
    <div>
      <h2>Pokemon name: {"Charizard"}</h2>
      <p>Weight: {90} kg</p>
      <p>Awesome: {true ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {false ? "Very" : "nah, lovable"}</p>
      <p>Abilities: {["Blaze", "Solar power", "Tough claws", "Drought"]}</p>
    </div>
  );
}
