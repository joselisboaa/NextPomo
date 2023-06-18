import Image from "next/image";
import { Restart, playIcon, PauseActivateWithoutHover, Skip } from "@/assets";

export const ActionButtons = () => {
  return (
    <div className="flex items-center justify-center gap-10">
      <button>
        <Image src={Restart} alt="Restart timer" />
      </button>
      <button>
        <Image src={playIcon} alt="Play timer" />
      </button>
      <button>
        <Image src={Skip} alt="Pause timer" />
      </button>
    </div>
  );
};
