import React, {Suspense, lazy} from "react";
import Home from "./Home";
const LoadingFallback = () => (
  <div
    role="status"
    aria-live="polite"
    className="min-h-[50vh] flex items-center justify-center"
  >
    <div className="text-center">
      <div className="spinner animate-spin h-12 w-12 mx-auto border-4 border-blue-500 rounded-full border-t-transparent mb-4"></div>
      <p className="text-lg font-medium text-gray-700">Loading content...</p>
    </div>
  </div>
);
const Page = () => {
  return (
    <div className ="min-h-[50vh] flex items-center justify-center">
<Suspense fallback={<LoadingFallback />}></Suspense>
    </div>



  );
};

const documentProps = {
  title: 'Home Page',
};

export default {
  Page,
  documentProps
};