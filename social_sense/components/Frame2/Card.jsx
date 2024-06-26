import React from "react";
import ProjectionChart from "./ProjectionChart";

const Card = () => {
  return (
    <>
      <div className=" bg-slate-100">
        
      <div className="flex flex-col sm:flex-col md:flex-row gap-10 p-5 pt-4 w-full">
          <div className="flex  w-full justify-between items-center">
            
              
                <div className="gap-6 flex w-full md:grid-cols-1 lg:grid-cols-4">
                  <div className="w-1/2 grid gap-4">
                    <div className="w-full p-4 shadow-lg rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 ">
                      <div className="flex flex-row  gap-10 space-y-0 pb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-8 w-8 text-muted-foreground stroke-yellow-600 rounded-full bg-yellow-200 p-[6px]"
                        >
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                        <div className="text-sm font-bold">
                          Total Revenue
                        </div>
                      </div>
                      <div>
                        <div className=" font-bold">$45,231.89</div>
                        <p className="text-xs text-green-500">+20.1%</p>
                      </div>
                    </div>
                    <div className="w-full p-4 shadow-lg rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
                      <div className="flex flex-row items-center gap-10 space-y-0 pb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-8 w-8 text-muted-foreground stroke-yellow-600 rounded-full bg-yellow-200 p-[6px]"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <div className="text-sm font-bold">
                          Subscriptions
                        </div>
                      </div>
                      <>
                        <div className="text-lg font-bold">+2350</div>
                        <p className="text-xs text-green-500">+180.1%</p>
                      </>
                    </div>
                  </div>
                  <div className="grid gap-4 w-1/2">
                    <div className="w-full p-4 shadow-lg rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
                      <div className="flex flex-row items-center gap-10 space-y-0 pb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-8 w-8 text-muted-foreground stroke-yellow-600 rounded-full bg-yellow-200 p-[6px]"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <path d="M2 10h20" />
                        </svg>
                        <div className="text-sm font-bold">
                          Sales
                        </div>
                      </div>
                      <>
                        <div className="text-lg font-bold">+12,234</div>
                        <p className="text-xs text-green-500">+19%</p>
                      </>
                    </div>
                    <div className="w-full p-4 shadow-lg border rounded-lg border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
                      <div className="flex flex-row items-center gap-10 space-y-0 pb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-8 w-8 text-muted-foreground stroke-yellow-600 rounded-full bg-yellow-200 p-[6px]"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                        <div className="text-sm font-bold">
                          Active Now
                        </div>
                      </div>
                      <>
                        <div className="text-lg font-bold">+573</div>
                        <p className="text-xs text-green-500">+201</p>
                      </>
                    </div>
                  </div>
                </div>
              
            
           
          </div>
          <ProjectionChart/>
        </div>
      
      </div>
    </>
  );
};

export default Card;
