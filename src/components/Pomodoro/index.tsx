import { PomodoroNav, Timer, ActionButtons } from "@/features/pomodoro/components";
import { CountDownProvider } from "@/features/pomodoro/contexts/CountDown";

const Pomodoro: React.FC = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <CountDownProvider>
        <PomodoroNav />
        <Timer />
        <ActionButtons />
      </CountDownProvider>
    </div>
  );
};

export default Pomodoro;
