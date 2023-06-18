import { PomodoroNav, Timer, ActionButtons } from "@/features/pomodoro/components";

const Pomodoro: React.FC = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <PomodoroNav />
      <Timer />
      <ActionButtons />
    </div>
  );
};

export default Pomodoro;
