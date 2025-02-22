import React, { useEffect, useState } from "react";
import AnalyticsBox from "./AnalyticsBox";
import { useDispatch, useSelector } from "react-redux";
import { getAllSocialsViews } from "../store/getAllSocialsViews";
import { getUsername } from "../store/usernameSlice";
import LinearBar from "./LinearBar";
import { getViewsInformation } from "../store/getviewsSlice";
import { getAllLinksViews } from "../store/getAllLinksViews";
import { motion } from "framer-motion";
import SyncButton from "./SyncButton";
import ViewsGraph from "./ViewsGraph";
import axios from "axios";

const Analytics = () => {
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");

  const username = useSelector((state) => state.username.username);
  const ownlinkViews = useSelector((state) => state.ownlinkViews.ownlinkViews);
  const socialsViews = useSelector((state) => state.socialsViews.socialsViews);
  const linksViews = useSelector((state) => state.linksViews.linksViews);
  const [viewsHistory, setViewsHistory] = useState([]);
  const [isLoadingGraph, setIsLoadingGraph] = useState(false);
  const [graphError, setGraphError] = useState(null);

  const totalClicks = socialsViews.reduce((a, b) => a + b.linkClicks, 0);
  const CTR = (totalClicks / ownlinkViews) * 100;
  const maxSocialsClicks = Math.max(
    ...socialsViews.map((socialView) => socialView.linkClicks)
  );
  const maxLinksClicks = Math.max(
    ...linksViews.map((linkView) => linkView.linkClicks)
  );

  useEffect(() => {
    if (username) {
      dispatch(getUsername(email));
      dispatch(getViewsInformation(username));
      dispatch(getAllSocialsViews(username));
      dispatch(getAllLinksViews(username));
      fetchViewsHistory();
    }
  }, [username]);

  const fetchViewsHistory = async () => {
    if (username) {
      try {
        setIsLoadingGraph(true);
        setGraphError(null);
        const response = await axios.get(
          `${process.env.REACT_APP_API}/viewshistory/${username}`
        );
        setViewsHistory(response.data);
      } catch (error) {
        console.error("Error fetching views history:", error);
        setGraphError("Failed to load views data");
      } finally {
        setIsLoadingGraph(false);
      }
    }
  };

  console.log(viewsHistory);

  return (
    <div className="p-5 rounded-xl bg-[#222430] w-full flex flex-col">
      <SyncButton />

      {/* Views Graph */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{
          delay: 0,
          duration: 0.3,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-full mb-8"
      >
        <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-blue-300 mb-3">
          Views Over Time
        </h1>
        {isLoadingGraph ? (
          <div className="w-full h-[200px] flex items-center justify-center">
            <div className="text-white opacity-60">Loading graph data...</div>
          </div>
        ) : graphError ? (
          <div className="w-full h-[200px] flex items-center justify-center">
            <div className="text-red-400">{graphError}</div>
          </div>
        ) : (
          <ViewsGraph viewsData={viewsHistory} />
        )}
      </motion.div>

      <div className="space-y-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{
            delay: 0,
            duration: 0.3,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex w-full px-6 py-2 gap-8 justify-center items-center"
        >
          <AnalyticsBox type="Views" totalViews={ownlinkViews} />
          <AnalyticsBox type="Clicks" totalClicks={totalClicks} />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.3,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex w-full px-6 py-2 justify-center items-center"
        >
          <AnalyticsBox type="CTR" CTR={CTR} />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.3,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-2 pb-2"
        >
          {socialsViews && socialsViews.length !== 0 && (
            <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-blue-300 mb-3 mt-2">
              Social Profiles
            </h1>
          )}
          {socialsViews &&
            socialsViews.length !== 0 &&
            socialsViews.map((socialView) => (
              <LinearBar
                clicks={socialView.linkClicks}
                title={socialView.socialMediaIcon}
                key={socialView.index}
                type="social"
                maxClicks={maxSocialsClicks}
              />
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
