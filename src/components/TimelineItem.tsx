import { Briefcase, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  image?: string;
  isCurrent?: boolean;
  index?: number;
}

const TimelineItem = ({
  role,
  company,
  location,
  startDate,
  endDate,
  description,
  image,
  isCurrent = false,
  index = 0,
}: TimelineItemProps) => {
  return (
    <div
      className={cn(
        "relative pl-8 pb-8 last:pb-0 animate-slide-in",
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary to-border last:hidden" />
      
      {/* Timeline dot */}
      <div
        className={cn(
          "absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
          isCurrent
            ? "bg-primary border-primary shadow-lg shadow-primary/30"
            : "bg-card border-border hover:border-primary"
        )}
      >
        <Briefcase className={cn(
          "w-3 h-3",
          isCurrent ? "text-primary-foreground" : "text-muted-foreground"
        )} />
      </div>

      <div className="bg-card rounded-2xl shadow-card p-5 transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5">
        {image && (
          <div className="mb-4 rounded-xl overflow-hidden aspect-video">
            <img
              src={image}
              alt={`${company} workplace`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-display font-semibold text-foreground text-lg">
              {role}
            </h3>
            <p className="text-primary font-medium">{company}</p>
          </div>
          {isCurrent && (
            <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full whitespace-nowrap">
              Current
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {startDate} – {endDate}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            {location}
          </span>
        </div>

        <p className="text-foreground/80 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
