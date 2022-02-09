import { useSelector } from "react-redux";

import { userSelector } from "../../slices/user";

import EngagementScore from "../engagementScore/EngagementScore";
import Analytics from "../analytics/Analytics";

const Dashboard = () => {
  const { user } = useSelector(userSelector);

  return user.role === "user" ? <EngagementScore /> : <Analytics />;
};

export default Dashboard;
