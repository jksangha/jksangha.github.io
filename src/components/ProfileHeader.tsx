import { MapPin, Link as LinkIcon, Grid3X3, History, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProfileHeaderProps {
  avatar: string;
  name: string;
  username: string;
  bio: string;
  location: string;
  website: string;
  projectCount: number;
  activeTab: "projects" | "timeline" | "about";
  onTabChange: (tab: "projects" | "timeline" | "about") => void;
}

const ProfileHeader = ({
  avatar,
  name,
  username,
  bio,
  location,
  website,
  projectCount,
  activeTab,
  onTabChange,
}: ProfileHeaderProps) => {
  const tabs = [
    { id: "projects" as const, label: "Projects", icon: Grid3X3, count: projectCount },
    { id: "timeline" as const, label: "Journey", icon: History },
    { id: "about" as const, label: "About", icon: User },
  ];

  return (
    <header className="relative bg-card rounded-2xl shadow-card animate-fade-up">
      {/* Cover gradient full-bleed */}
      <div className="relative h-32 sm:h-40 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 xl:-mx-16 2xl:-mx-24">
        <div className="absolute inset-0 left-1/2 w-screen -translate-x-1/2 bg-gradient-to-br from-primary via-primary-glow to-accent">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNC0yIDQtMiA0LTItMi0yLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-4">
        {/* Avatar section */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16 sm:-mt-12 mb-4">
          <div className="relative">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-card overflow-hidden shadow-lg">
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-accent rounded-full border-2 border-card" title="Available" />
          </div>

          <div className="flex-1 sm:pb-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div>
                <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {name}
                </h1>
                <p className="text-muted-foreground">@{username}</p>
              </div>
              <div className="flex gap-2 sm:ml-auto">
                <Button asChild variant="gradient" size="sm">
                  <a href="mailto:jsangha612@gmail.com">Connect</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-foreground/90 leading-relaxed mb-4 max-w-2xl">
          {bio}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            {location}
          </span>
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-primary hover:underline"
          >
            <LinkIcon className="w-4 h-4" />
            {website}
          </a>
        </div>

        {/* Tabs */}
        <nav className="flex gap-1 border-t border-border -mx-4 sm:-mx-6 px-4 sm:px-6 pt-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200",
                activeTab === tab.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {tab.count !== undefined && (
                <span className={cn(
                  "px-2 py-0.5 text-xs rounded-full",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                )}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default ProfileHeader;
