import Image from "next/image";

import { Logo } from "@/assets";

const Header: React.FC = () => {
  return (
    <header className="flex h-[3.5rem] w-full flex-row items-center justify-between bg-primary py-5">
      <div className="flex h-20 gap-2 flex-row-reverse items-center justify-between pl-6 pr-6 sm:flex-row">
        <Image src={Logo} alt="HealthPomo Logo" width={24} height={24} />
        <p className="text-sm font-medium text-white">
          Health
          <span className="text-sm font-medium text-secondary">Pomo</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
