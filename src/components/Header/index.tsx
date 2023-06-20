import Image from "next/image";

import { Logo } from "@/assets";

const Header: React.FC = () => {
  return (
    <header className="flex h-3.5 w-full flex-row items-center justify-between bg-primary">
      <div className="flex w-full flex-row items-center justify-between gap-2 px-6">
        <div className="flex items-center justify-between gap-2">
          <Image src={Logo} alt="HealthPomo Logo" width={24} height={24} />
          <p className="text-sm font-medium text-white">
            Health
            <span className="text-sm font-medium text-secondary">Pomo</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
