import * as React from "react";

import EngagementActivities from "./subcomponents/EngagementActivities";
import DailyActiveUsers from "./subcomponents/DailyActiveUsers";
import EngagementByCategory from "./subcomponents/EngagementByCategory";
import DailyEngagementRate from "./subcomponents/DailyEngagementRate";

import data from "./mock_response.json";

export default function Album() {
  return (
    <>
      <EngagementActivities activities={data.engagement_activities} />
      <DailyActiveUsers
        data={data.daily_active_users.map((day) => ({
          ...day,
          date: new Date(day.date),
        }))}
      />
      <EngagementByCategory
        categories={data.engagement_by_category.map((categoryObj) => ({
          ...categoryObj,
          category: categoryObj.category.name,
        }))}
      />
      <DailyEngagementRate
        data={data.daily_engagement_rate.map((day) => ({
          ...day,
          date: new Date(day.date),
        }))}
      />
    </>
  );
}
