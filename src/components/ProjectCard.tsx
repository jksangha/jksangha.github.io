import { Heart, MessageCircle, Share2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  likes?: number;
  comments?: number;
  link?: string;
  index?: number;
}

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  likes = 0,
  comments = 0,
  link,
  index = 0,
}: ProjectCardProps) => {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1 animate-fade-up",
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 p-2 rounded-full bg-card/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-card hover:scale-110"
          >
            <ExternalLink className="w-4 h-4 text-foreground" />
          </a>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <h3 className="font-display font-semibold text-foreground text-lg leading-tight">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-4 pt-2 border-t border-border">
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200 group/btn">
            <Heart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span className="text-sm">{likes}</span>
          </button>
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200 group/btn">
            <MessageCircle className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span className="text-sm">{comments}</span>
          </button>
          <button className="ml-auto text-muted-foreground hover:text-primary transition-colors duration-200 group/btn">
            <Share2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
