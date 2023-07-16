function Button({handleClick}) {
  return (
    <button
      onClick={handleClick}
      className="border border-black px-4 py-12 w-full hover:bg-indigo-700 transition duration-300 rounded-sm bg-indigo-400 text-white "
    >
      Place Bet
    </button>
  );
}
export default Button;
