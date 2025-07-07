import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const MainFooter = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-sm py-6 px-8 flex justify-between items-center">
      <FooterLeft />
      <FooterRight />
    </footer>
  );
};

export default MainFooter;
