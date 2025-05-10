// components/DegreeComparisonTable.jsx
"use client";

const DegreeComparisonTable = () => {
  const tableData = [
    {
      feature: "Focus",
      bvoc: "Get job-ready today",
      btech: "Theory overload",
      bsc: "Science geeks only",
    },
    {
      feature: "Curriculum",
      bvoc: "Hands-on, real-world",
      btech: "Rigid & outdated",
      bsc: "Mostly books",
    },
    {
      feature: "Job Readiness",
      bvoc: "High—ready on Day 1",
      btech: "More courses needed",
      bsc: "Extra steps required",
    },
    {
      feature: "Exit Options",
      bvoc: "Flexible exits",
      btech: "All or nothing",
      bsc: "Locked for 3 years",
    },
    {
      feature: "Duration",
      bvoc: "1-3 years",
      btech: "4 years",
      bsc: "3 years",
    },
    {
      feature: "Best For",
      bvoc: "Quick career launchers",
      btech: "Hardcore engineers",
      bsc: "Future researchers",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
  <h2 className="text-3xl font-semibold text-white mb-4 leading-snug">
    <span className="text-purple-400">B.Voc</span> vs{" "}
    <span className="text-purple-400">B.Tech</span> vs{" "}
    <span className="text-purple-400">B.Sc</span>:{" "}
    <span className="text-white">The Clear Choice for Your Future</span>
  </h2>

  <p className="text-gray-300 text-lg leading-relaxed font-sans">
  <span className="font-semibold text-white">
    Choosing the right course is one of the most important decisions you’ll make. Let’s break it down:
  </span>   
  <br />
    while traditional degrees like <span className="text-purple-400 font-semibold">B.Tech</span> and{" "}
  <span className="text-purple-400 font-semibold">B.Sc</span> offer a solid foundation,{" "}
  <span className="text-purple-400 font-semibold">B.Voc</span> is the{" "}
  <span className="text-purple-400 font-semibold">fast track to industry-ready skills</span>. 
  Here’s why <span className="text-purple-400 font-semibold">B.Voc</span> stands out:
</p>

      
      <div className="overflow-x-auto">
        <table className="w-full border-">
          <thead>
            <tr>
              <th className="bg-purple-700 text-black p-4 border border-purple-800">Feature</th>
              <th className="bg-purple-700 text-black p-4 border border-purple-800">
                B.Voc (Bachelor of Vocation)
              </th>
              <th className="bg-purple-700 text-black p-4 border border-purple-800">
                B.Tech (Bachelor of Technology)
              </th>
              <th className="bg-purple-700 text-black p-4 border border-purple-800">
                B.Sc (Bachelor of Science)
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="bg-purple-600 text-black p-4 border border-purple-800 font-bold">
                  {row.feature}
                </td>
                <td className="bg-purple-600 text-white p-4 border border-purple-800 font-bold">
                  {row.bvoc}
                </td>
                <td className="bg-purple-400 text-white p-4 border border-purple-800 font-bold">
                  {row.btech}
                </td>
                <td className="bg-purple-600 text-white p-4 border border-purple-800 font-bold">
                  {row.bsc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DegreeComparisonTable;