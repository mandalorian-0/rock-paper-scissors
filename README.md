# Rock Paper Scissors

A simple browser-based Rock Paper Scissors game written in JavaScript. Play 5 rounds against the computer and see who wins!

## How to Play

1. Open the browser's developer console (F12 → Console tab).
2. Open `script.js` in your browser (e.g. via a local `index.html` that includes the script, or paste the code directly in the console).
3. When prompted, type your choice: `rock`, `paper`, or `scissors`.
4. Repeat for all 5 rounds.
5. The final winner is announced in the console after all rounds are complete.

## Game Rules

| Your choice | Computer's choice | Result |
|-------------|-------------------|--------|
| Rock        | Scissors          | You win 🎉 |
| Paper       | Rock              | You win 🎉 |
| Scissors    | Paper             | You win 🎉 |
| Same        | Same              | Tie 🤝 |
| Any         | Winning choice    | You lose 😞 |

## Features

- 5-round match against a randomized computer opponent
- Round-by-round results logged to the console
- Final game winner announced at the end

## License

This project is licensed under the [MIT License](LICENSE).
