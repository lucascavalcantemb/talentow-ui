"use client";

import { CircleDollarSign, Globe, Watch } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { formatInitials } from "@/utils/format-initials";
import { cn } from "@/lib/utils";

export interface IJobCard {
  className?: string;
  jobOffer: {
    title: string;
    modality: string;
    seniority: string;
    salary: string;
    contractType: string;
    startDate: string;
    company: {
      name: string;
      logo?: string;
    };
  };
  textApply: string;
  onApply?: () => void;
}

const JobCard = ({ className, jobOffer, textApply, onApply }: IJobCard) => {
  return (
    <div className={cn('flex w-full cursor-pointer items-center justify-between rounded-md border-2 bg-card px-5 py-3 hover:bg-muted/50 hover:no-underline data-[state=open]:rounded-b-none data-[state=open]:bg-muted', className)}>
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="flex items-center justify-center gap-3">
          <Avatar className="size-16 border-2 border-muted-foreground">
            <AvatarImage src={jobOffer.company.logo} />
            <AvatarFallback className="font-bold">{formatInitials(jobOffer.company.name)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start justify-start">
            <span>{jobOffer.company.name}</span>
            <span className="text-lg font-bold">{jobOffer.title}</span>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Badge variant="outline">
            <Globe className="mr-1 size-4 stroke-primary" />
            <span className="text-xs">
              {jobOffer.modality}
            </span>
          </Badge>
          <Badge variant="outline">
            <span className="text-xs">
              {jobOffer.seniority}
            </span>
          </Badge>
          <Badge variant="outline">
            <CircleDollarSign className="mr-1 size-4 stroke-yellow-500" />
            <span className="text-xs">{jobOffer.salary}</span>
          </Badge>
          <Badge variant="outline">
            <span className="text-xs">
              {jobOffer.contractType}
            </span>
          </Badge>
          <Badge variant="outline">
            <Watch className="mr-1 size-4 stroke-primary" />
            <span className="text-xs">
              {jobOffer.startDate}
            </span>
          </Badge>
        </div>
      </div>

      <Button type="button" onClick={onApply}>{textApply}</Button>
    </div>
  );
};
JobCard.displayName = 'JobCard';

export { JobCard }
