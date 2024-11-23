const { google } = require("googleapis");

const getGoogleAnalyticsData = async (key) => {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(key), // Use the key passed from the input
    scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
  });

  const analyticsreporting = google.analyticsreporting({
    version: "v4",
    auth: await auth.getClient(),
  });

  const response = await analyticsreporting.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: "YOUR_VIEW_ID", // Replace with your default view ID or ask the user to provide
          dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
          metrics: [
            { expression: "ga:pageviews" },
            { expression: "ga:uniquePageviews" },
            { expression: "ga:sessions" },
          ],
        },
      ],
    },
  });

  const { data } = response;
  return {
    pageviews: data.reports[0].data.totals[0].values[0],
    uniquePageviews: data.reports[0].data.totals[0].values[1],
    sessions: data.reports[0].data.totals[0].values[2],
  };
};

module.exports = getGoogleAnalyticsData;
