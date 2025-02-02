import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-card";
import PerformanceChart from "./_components/performance-chart";
import QuizList from "./_components/quiz-list";

const Interview = async () => {
  const assessments = await getAssessments();
  return (
    <div>
      <h1 className="text-6xl font-bold gradient-title">Interview Prep</h1>

      <div className="space-y-6">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
};
export default Interview;
