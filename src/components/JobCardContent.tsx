import {
  ClipboardCheck,
  Eye,
  Share2,
  Star,
  ThumbsDown,
  ThumbsUp
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { formatInitials } from '@/utils/format-initials';
import '@/lib/i18n';
export interface IJobCardContent {
  jobOffer: {
    title: string;
    description: string;
    requirement: string;
    activity: string;
    benefit: string;
    views: number;
    company: {
      name: string;
      logo?: string;
    };
    jobOfferStatus: {
      applications: number;
    }
    jobOfferTechnology: {
      id: string;
      title: string;
    }[]
  };
}

export const JobCardContent = ({ jobOffer }: IJobCardContent) => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full items-start justify-between gap-5 rounded-md rounded-t-none border-2 bg-card px-8 py-10">
      <div className="flex w-full flex-col items-start justify-start gap-8">
        <div>
          <strong className="text-2xl font-medium">
            {t('job_card_content.job_opening')}
          </strong>
          <h2 className="text-3xl font-bold text-primary">
            {jobOffer.title}
          </h2>
        </div>

        {jobOffer.jobOfferTechnology.length > 0 && (
          <div className="flex items-center gap-2">
            {jobOffer?.jobOfferTechnology?.map((technology) => (
              <Badge
                key={technology.id}
                variant="outline"
                className="border-muted-foreground"
              >
                {technology.title}
              </Badge>
            ))}
          </div>
        )}

        <div className="space-y-1">
          <span className="text-lg font-bold">
            {t('job_card_content.job_description')}
          </span>
          <div
            className="text-base [&>ul]:list-disc [&>ul]:pl-8"
            dangerouslySetInnerHTML={{
              __html: jobOffer.description
            }}
          />
        </div>

        <div className="space-y-1">
          <span className="text-lg font-bold">
            {t('job_card_content.requirements')}
          </span>
          <div
            className="text-base [&>ul]:list-disc [&>ul]:pl-8"
            dangerouslySetInnerHTML={{
              __html: jobOffer.requirement
            }}
          />
        </div>

        <div className="space-y-1">
          <span className="text-lg font-bold">
            {t('job_card_content.responsibilities')}
          </span>
          <div
            className="text-base [&>ul]:list-disc [&>ul]:pl-8"
            dangerouslySetInnerHTML={{
              __html: jobOffer.activity
            }}
          />
        </div>

        <div className="space-y-1">
          <span className="text-lg font-bold">
            {t('job_card_content.benefits')}
          </span>
          <div
            className="text-base [&>ul]:list-disc [&>ul]:pl-8"
            dangerouslySetInnerHTML={{
              __html: jobOffer.benefit
            }}
          />
        </div>
      </div>

      <div className="flex min-w-64 flex-col items-start justify-start gap-4">
        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-muted px-5 py-6">
          <Avatar className="size-32 border-4 border-muted-foreground">
            <AvatarImage src={jobOffer.company.logo} />
            <AvatarFallback className="font-bold text-4xl">
              {formatInitials(jobOffer.company.name)}
            </AvatarFallback>
          </Avatar>

          <strong className="text-bold mt-5 text-lg">
            {jobOffer.company.name}
          </strong>

          <Button
            type="button"
            className="mt-3 w-full font-bold"
          >
            {t('job_card_content.apply_now')}
          </Button>

          <span className="mt-7 flex items-center justify-start">
            <ClipboardCheck className="mr-1 size-4" />
            {t('job_card_content.applications', { count: jobOffer.jobOfferStatus.applications })}
          </span>

          <span className="flex items-center justify-start">
            <Eye className="mr-1 size-4" />
            {`${jobOffer.views} visualizações`}
          </span>
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-muted px-5 py-5">
          <span className="text-lg font-bold">
            {t('job_card_content.like_this_job')}
          </span>

          <div className="mt-3 flex w-full items-center gap-2">
            <Button
              className="w-full border-2 border-primary bg-transparent text-primary"
              variant="outline"
            >
              <ThumbsUp className="mr-2 size-4" />
              {t('job_card_content.yes')}
            </Button>
            <Button
              className="w-full border-2 border-red-500 bg-transparent text-red-500 hover:from-rose-500 hover:to-red-500"
              variant="outline"
            >
              <ThumbsDown className="mr-2 size-4" />
              {t('job_card_content.no')}
            </Button>
          </div>
        </div>

        <div className="flex w-full items-center justify-between rounded-lg bg-muted px-5 py-5">
          <span className="text-lg font-bold">
            {t('job_card_content.favorite')}
          </span>
          <Star className="stroke-primary" />
        </div>

        <div className="flex w-full items-center justify-between rounded-lg bg-muted px-5 py-5">
          <span className="text-lg font-bold">
            {t('job_card_content.share')}
          </span>
          <Share2 className="stroke-primary" />
        </div>
      </div>
    </div>
  );
};
