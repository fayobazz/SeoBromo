// import React, { useEffect, useState } from "react";

// const formatNumber = (num, label) => {
//   if (label.includes("million")) return `${num.toFixed(0)} million`;
//   if (label.includes("trillion")) return `$${num.toFixed(0)} trillion`;
//   return num.toLocaleString();
// };

// const useCounter = (end, duration = 2000, suffixLabel = "") => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let frame = 0;
//     const totalFrames = Math.round(duration / 16); // ~60fps
//     const valueOnly = parseFloat(end.replace(/[^0-9.]/g, ""));
//     const increment = valueOnly / totalFrames;

//     const counter = () => {
//       frame++;
//       const nextCount = Math.min(valueOnly, increment * frame);
//       setCount(nextCount);
//       if (frame < totalFrames) requestAnimationFrame(counter);
//     };

//     requestAnimationFrame(counter);
//   }, [end, duration]);

//   return formatNumber(count, suffixLabel);
// };

// const StatsComponent = () => {
//   const stats = [
//     { id: 1, name: "Transactions every 24 hours", value: "44 million" },
//     { id: 2, name: "Assets under holding", value: "$119 trillion" },
//     { id: 3, name: "New users annually", value: "46,000" },
//   ];

//   return (
//     <section className="relative  py-24 sm:py-32 overflow-hidden">
//   <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-16 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:py-20">
//             {/* SVG Background from your example */}
//             <svg
//               viewBox="0 0 1024 1024"
//               className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
//               aria-hidden="true"
//             >
//               <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
//               <defs>
//                 <radialGradient id="gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
//                   <stop stopColor="#7775D6" />
//                   <stop offset="1" stopColor="#7ED321" stopOpacity="0" />
//                 </radialGradient>
//               </defs>
//             </svg>
//       <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-500 via-purple-500 to-pink-500 blur-3xl z-0" />
//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//         <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-16 tracking-tight">
//           Our Impact in Numbers
//         </h2>
//         <dl className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-3">
//           {stats.map((stat) => {
//             const animatedValue = useCounter(stat.value, 2000, stat.value);
//             return (
//               <div
//                 key={stat.id}
//                 className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-md backdrop-blur-md transition hover:shadow-lg"
//               >
//                 <dd className="text-4xl sm:text-5xl font-bold text-white drop-shadow">
//                   {animatedValue}
//                 </dd>
//                 <dt className="mt-3 text-lg font-medium text-indigo-100">
//                   {stat.name}
//                 </dt>
//               </div>
//             );
//           })}
//         </dl>
//       </div>
//       </div>
//     </section>
//   );
// };

// export default StatsComponent;
