import { useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import ProjectCard from "@/components/ProjectCard";
import TimelineItem from "@/components/TimelineItem";
import { Code, Palette, Zap, Coffee, Award, BookOpen } from "lucide-react";

import avatarImg from "@/assets/avatar.jpg";
import project1Img from "@/assets/project-1.jpg";
import project2Img from "@/assets/project-2.jpg";
import project3Img from "@/assets/project-3.jpg";
import project4Img from "@/assets/project-4.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"projects" | "timeline" | "about">("projects");

  const projects = [
    {
      image: project1Img,
      title: "Analytics Dashboard",
      description: "A comprehensive analytics platform with real-time data visualization and insights for business metrics.",
      tags: ["React", "TypeScript", "D3.js"],
      likes: 248,
      comments: 32,
      link: "#",
    },
    {
      image: project2Img,
      title: "ShopFlow Mobile",
      description: "Modern e-commerce mobile app with seamless checkout experience and personalized recommendations.",
      tags: ["React Native", "Node.js"],
      likes: 186,
      comments: 24,
      link: "#",
    },
    {
      image: project3Img,
      title: "Portfolio Studio",
      description: "Creative portfolio builder with drag-and-drop interface and stunning template designs.",
      tags: ["Next.js", "Tailwind"],
      likes: 312,
      comments: 45,
      link: "#",
    },
    {
      image: project4Img,
      title: "AI Assistant Hub",
      description: "Intelligent chatbot platform with natural language processing and multi-channel integration.",
      tags: ["Python", "OpenAI", "React"],
      likes: 421,
      comments: 67,
      link: "#",
    },
  ];

  const timeline = [
    {
      role: "Sabbatical",
      company: "Exploring, learning and building",
      location: "London, UK",
      startDate: "Sep 2025",
      endDate: "Present",
      description: "Taking a sabbatical to explore, learn, and build across product, engineering, and emerging tech.",
      isCurrent: true,
    },
    {
      role: "Product Manager",
      company: "Kobalt Music",
      location: "London, UK",
      startDate: "May 2024",
      endDate: "Aug 2025",
      description: "Led product initiatives for music services, collaborating across engineering, design, and artists to ship data-driven improvements.",
      isCurrent: false,
    },
    {
      role: "Product Manager",
      company: "Matchesfashion",
      location: "London, UK",
      startDate: "Jun 2021",
      endDate: "Mar 2024",
      description: "Drove e-commerce product roadmap, improving discovery, personalization, and conversion for a global luxury fashion audience.",
      isCurrent: false,
    },
    {
      role: "Technical Program Manager",
      company: "Holland and Barrett",
      location: "London, UK",
      startDate: "May 2020",
      endDate: "May 2021",
      description: "Managed cross-functional programs to modernize digital platforms, coordinating delivery across engineering, product, and operations.",
      isCurrent: false,
    },
  ];

  const skills = [
    { icon: Code, label: "Frontend Development", description: "React, Vue, TypeScript, Next.js" },
    { icon: Palette, label: "UI/UX Design", description: "Figma, Design Systems, Prototyping" },
    { icon: Zap, label: "Performance", description: "Optimization, Lighthouse, Core Web Vitals" },
    { icon: Coffee, label: "Backend", description: "Node.js, Python, PostgreSQL, MongoDB" },
  ];

  const achievements = [
    { icon: Award, title: "Top Contributor 2024", org: "Open Source Community" },
    { icon: BookOpen, title: "Published Author", org: "Frontend Weekly" },
  ];

  return (
    <div className="min-h-screen px-4 pb-6 pt-0">
      <div className="container max-w-4xl mx-auto space-y-6">
        <ProfileHeader
          avatar={avatarImg}
          name="Jassi Sangha"
          username="jksangha"
          bio="👋 Hi, I'm Jassi! I'm an energetic product leader, with over a decade of experience building robust products and services in a number of industries."
          location="London, United Kingdom"
          website="github.com/jksangha"
          projectCount={projects.length}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {activeTab === "projects" && (
          <section aria-label="Projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </section>
        )}

        {activeTab === "timeline" && (
          <section aria-label="Career Journey" className="bg-card rounded-2xl shadow-card p-6">
            <h2 className="font-display text-xl font-semibold text-foreground mb-6">
              Career Journey
            </h2>
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <TimelineItem key={item.company} {...item} index={index} />
              ))}
            </div>
          </section>
        )}

        {activeTab === "about" && (
          <section aria-label="About" className="space-y-6">
            <div className="bg-card rounded-2xl shadow-card p-6 animate-fade-up">
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.label}
                    className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-200 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <skill.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{skill.label}</h3>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl shadow-card p-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Achievements
              </h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors duration-200 animate-slide-in"
                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                  >
                    <div className="p-2.5 rounded-lg bg-accent/10">
                      <achievement.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Index;
