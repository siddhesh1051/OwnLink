import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const GoogleAnalyticsComponent = () => {
  const [apiKey, setApiKey] = useState("");
  const [clientId, setClientId] = useState("");
  const [viewId, setViewId] = useState(""); // Add your View ID here
  const [analyticsData, setAnalyticsData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Load GAPI library
      await loadGapi();

      // Initialize the API
      //   await initializeGapi(apiKey, clientId);

      // Fetch analytics data
      const data = await fetchAnalyticsData(viewId);
      setAnalyticsData(data);
    } catch (error) {
      console.error("Error fetching Google Analytics data:", error);
    }
  };

  const loadGapi = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      script.onload = resolve;
      document.body.appendChild(script);
    });
  };

  //   const initializeGapi = async (apiKey, clientId) => {
  //     return new Promise((resolve, reject) => {
  //       window.gapi.load("client:auth2", async () => {
  //         try {
  //           // Initialize the client
  //           await window.gapi.client.init({
  //             apiKey: apiKey,
  //             clientId: clientId,
  //             discoveryDocs: [
  //               "https://analyticsreporting.googleapis.com/$discovery/rest?version=v4",
  //             ],
  //             scope: "https://www.googleapis.com/auth/analytics.readonly",
  //           });

  //           // Sign in the user
  //           await window.gapi.auth2.getAuthInstance().signIn();
  //           resolve();
  //         } catch (error) {
  //           reject(error);
  //         }
  //       });
  //     });
  //   };

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: apiKey,
        clientId: clientId,
        scope: "https://www.googleapis.com/auth/analytics.readonly",
      });
    }

    gapi.load("client:auth2", start);
  }, []);
  const fetchAnalyticsData = async (viewId) => {
    const response =
      await window.gapi.client.analyticsreporting.reports.batchGet({
        requestBody: {
          reportRequests: [
            {
              viewId: viewId,
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

    const data = response.result.reports[0].data.totals[0].values;
    return {
      pageviews: data[0],
      uniquePageviews: data[1],
      sessions: data[2],
    };
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h1 className="text-xl font-bold mb-4">Google Analytics Data</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block text-sm font-medium">API Key</label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full p-2 border rounded bg-black"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium">Client ID</label>
          <input
            type="text"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            className="w-full p-2 border rounded bg-black"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium">View ID</label>
          <input
            type="text"
            value={viewId}
            onChange={(e) => setViewId(e.target.value)}
            className="w-full p-2 border rounded bg-black"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Fetch Analytics Data
        </button>
      </form>
      {analyticsData && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Analytics Metrics:</h2>
          <p>Pageviews: {analyticsData.pageviews}</p>
          <p>Unique Pageviews: {analyticsData.uniquePageviews}</p>
          <p>Sessions: {analyticsData.sessions}</p>
        </div>
      )}
    </div>
  );
};

export default GoogleAnalyticsComponent;
