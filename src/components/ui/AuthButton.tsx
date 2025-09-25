const AuthButton = ({text}: {text: string}) => {
  return (
    <button className="bg-[#49AE44] py-3 text-white text-base font-bold w-full rounded-lg cursor-pointer shadow-[0_8px_16px_0_#39A4323D] hover:scale-105 transition-all duration-300">
      {text}
    </button>
  );
};

export default AuthButton;
