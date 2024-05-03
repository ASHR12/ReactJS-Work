import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/job/jobActions";
import { StatsDashboard, StatsPieChart } from "../../Components";

const Stats = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobState.allJobs);

  useEffect(() => {
    dispatch(showStats());
  }, [dispatch, jobs]);

  return (
    <>
      <h2 className="title">Job Application Stats</h2>
      <div className="stats-board">
        <StatsPieChart />
        <StatsDashboard />
      </div>
    </>
  );
};

export default Stats;
