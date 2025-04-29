import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/dialog";

  interface ProjectCardProps {
    project: {
      id: string;
      title: string;
      description: string;
      imageUrl: string;
      details: string;
      youtube?: string;
      situation: string;
      task: string;
      actions: string[];
      tags: string[];
    };
  }

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: { 
      y: -8,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 text-white"
              >
                <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full flex items-center space-x-2 text-sm hover:bg-white/30 transition-colors">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold text-card-foreground mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className="relative aspect-video  rounded-t-lg">
          {project.youtube ? (
            <iframe
              width="100%"
              height="100%"
              src={project.youtube}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          ) : (
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-card-foreground mb-4">{project.title}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-2">Situation</h4>
              <p className="leading-relaxed">{project.situation}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-2">Task</h4>
              <p className="leading-relaxed">{project.task}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-2">Action</h4>
              <ul className="list-disc pl-5 space-y-2">
                {project.actions.map((action, index) => (
                  <li key={index} className="leading-relaxed">{action}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-2">Result</h4>
              <p className="leading-relaxed">{project.details}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="text-sm px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;