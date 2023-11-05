import './styles/SpinningLetters.css'

const SpinningLetters = () => {
  const gameOverChars = ["G", "A", "M", "E", "", "O", "V", "E", "R", ""];
  const delay = 0.25;
  
  const delayedChars = gameOverChars.map((char, index) => (
    <li
      key={index}
      className="game-over-letter"
      style={{ animationDelay: `${index * delay}s` }}
    >
      <h1>{char}</h1>
    </li>
  ))

  return <ul>{delayedChars}</ul>;
};

export default SpinningLetters;
