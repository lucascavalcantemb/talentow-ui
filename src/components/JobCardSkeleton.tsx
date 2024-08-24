"use client";

import { Skeleton } from "./skeleton";


const JobCardSkeleton = () => {
  return (
    <div className="flex w-full h-[134px] cursor-pointer items-center justify-between rounded-md border-2 bg-card px-5 py-3">
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="flex items-center justify-center gap-3">
          <Skeleton className="size-16 border-2 border-muted-foreground rounded-full" />
          <div className="flex flex-col items-start justify-start gap-2">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-64 h-4" />
          </div>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Skeleton className="w-16 h-5" />
          <Skeleton className="w-16 h-5" />
          <Skeleton className="w-16 h-5" />
          <Skeleton className="w-16 h-5" />
          <Skeleton className="w-16 h-5" />
        </div>
      </div>

      <Skeleton className="w-32 h-10 rounded-3xl" />
    </div>
  );
};
JobCardSkeleton.displayName = 'JobCardSkeleton';

export { JobCardSkeleton }
