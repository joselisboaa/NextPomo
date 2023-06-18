import { PomodoroNav, Timer } from "@/features/pomodoro/components";

const Pomodoro: React.FC = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <PomodoroNav />
      <Timer />
    </div>
  );
};

export default Pomodoro;
