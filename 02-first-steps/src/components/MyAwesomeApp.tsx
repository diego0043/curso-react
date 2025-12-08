import type { CSSProperties } from "react";

const firstName: string = "Diego";
const lastName: string = "Valencia";
const favoriteGames = ["Elden rin", "Mario 64", "Megaman"];

const myStyles: CSSProperties = {
  backgroundColor: "blue",
  borderRadius: 20,
  padding: 10,
};

export function MyAwesomeApp() {
  return (
    <div>
      <h1 data-testid="first-name-title">{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{2 + 2}</p>
      <p className="mi-clase-favorita">{favoriteGames.join()}</p>
      <ul>
        {favoriteGames.map((game, index) => (
          <li style={myStyles} key={index}>
            {game}
          </li>
        ))}
      </ul>
      <h1>Hola</h1>
    </div>
  );
}
