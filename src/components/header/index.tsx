import logo from "/images/logo.svg";
import barChart from "/images/barChart.svg";

const Header = () => {
  return (
    <div className="w-full h-[72px] border border-b-lightPurple between px-4">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="inline-flex gap-2">
        <button className="center border border-primary w-10 h-10">
          <img src={barChart} alt="barChart" />
        </button>
        <button className="bg-primary w-[120px] h-10 text-white">Code</button>
      </div>
    </div>
  );
};

export default Header;
