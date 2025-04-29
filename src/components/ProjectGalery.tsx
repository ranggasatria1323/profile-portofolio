import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import gendhis from "./../../public/Gendhis.gif";
import bioattack from "./../../public/bioAttack.gif";
import bumper from "./../../public/Bumper Acara.gif";
import web from "./../../public/CompanyProfile.gif";
import fiona from "./../../public/fiona.gif";
import cyclop from "./../../public/Cyclops - Adventurer Mobile Legends.jpeg";
import bwing from "./../../public/B-wing.jpeg";
import cafe from "./../../public/Cafe Interior.jpeg";
import bogo from "./../../public/Bogo.png";
import pango from "./../../public/Dota 2 Pangolier.jpeg";
import lab from "./../../public/Environment Rusty Lab.jpeg";
import rumahKayu from "./../../public/RumahKayu2-ezgif.com-optimize.gif";
import hyperCar from "./../../public/Hypercar Sport.jpeg";
import knife from "./../../public/Iron Knife.jpeg";
import jawhead from "./../../public/Jawhead - Mobile Legend.jpeg";

// Sample project data
const projects = {
  "3D Portofolio": [
    {
      id: "3d-1",
      title: "Rumah Kayu",
      description:
        "A rustic wooden structure elevated on stilts, featuring a spacious balcony and porch. Its steep roof and natural wooden textures emphasize practicality and tradition.",
      imageUrl: rumahKayu,
      details:
        "The final 3D model captured all the requested features and details, presenting a visually engaging representation of the wooden house. The client was highly satisfied and used the model in their architectural portfolio or visualization, showcasing the practicality and aesthetic appeal of the design. Let me know if you'd like help expanding this further or exploring different aspects of the process!",
      situation:
        "Tasked by a client to design a 3D model of a rustic wooden house for an architectural visualization project. The design needed to reflect a traditional house suitable for a rural or coastal area, with realistic features and an elevated structure for flood-prone zones.",
      task: `Create a detailed 3D model that showcased the architectural elements of the wooden house, including its stilts, balcony, porch, aged textures, and realistic materials. The model should capture the aesthetic and functional design features that fit the client's needs.`,
      actions: [
        "Planning & Research: Conducted research on traditional wooden houses, especially in coastal regions, and gathered inspiration for the design.",
        "3D Modeling: Using software like Blender or SketchUp, created the base structure of the house, including the stilt foundation, walls, roof, doors, windows, and other key architectural elements.",
        "Added realistic wooden textures for the walls and balcony, aged and rusted metal textures for the roof, and detailed patterns for the pillars.",
        "Lighting & Rendering: Applied natural lighting effects to enhance realism and rendered the final model for presentation.",
      ],
      tags: ["Architecture", "3D Modeling", "Building"],
    },
    {
      id: "3d-2",
      title: "3D Animation Gendhis",
      description: "Watch my latest 3D animation work.",
      imageUrl: gendhis,
      details:
        '"Gendhis" successfully attracted the attention of audiences and critics, receiving positive reviews for its animation quality and engaging story. The film won several awards at international horror film festivals and set a new standard for 3D animated horror films. Viewers praised the stunning visual effects, captivating storyline, and iconic characters.',
      youtube: "https://www.youtube.com/embed/HVyx2bQVH9Q",
      situation:
        "The production team faced challenges in creating a 3D animated horror film that could evoke a scary and thrilling atmosphere. The main challenge was balancing frightening visual elements with a strong, deep storyline.",
      task: 'Our mission was to create a 3D animated film titled "Gendhis" that was not only scary but also had an engaging storyline and strong characters, making it well-received by a wide audience and setting a new standard in the horror animation genre.',
      actions: [
        "Story Development: Created a script that combined local cultural elements with rich horror mythology, ensuring the story had surprising plot twists and complex characters.",
        "Visual Design: Used the latest 3D animation technology to create realistic and detailed visual effects, from character design to background settings that supported the horror atmosphere.",
        "Sound Effects and Music: Integrated scary sound effects and background music that supported the eerie atmosphere, collaborating with experienced music composers and sound design teams.",
        "Animation and Rendering: The animation process was carried out in detail to ensure each scene looked lively and frightening. We used high-quality rendering for the final output.",
      ],
      tags: ["Horror", "3D Animation", "Character Design"],
    },
    {
      id: "3d-3",
      title: "Character Fiona",
      description:
        "A lively blue-haired character with colorful attire, including pink antler-like accessories and a butterfly-themed shirt. The design is playful and vibrant.",
      imageUrl: fiona,
      details:
        "The final 3D character model was highly detailed, vibrant, and full of personality. It met the client's expectations and was integrated seamlessly into their project, capturing attention and adding significant value to the world they were building.",
      situation:
        "Creating a 3D character model for an animation or video game project. The client wanted the character to have a vibrant and unique appearance that would appeal to a younger audience while fitting seamlessly into a colorful, fantasy-themed world.",
      task: "Design and model a detailed 3D character with a whimsical and eye-catching outfit, complete with accessories and a distinct personality. The character needed to be ready for rigging and animation, adhering to the client's specifications.",
      actions: [
        "Conceptualization: Sketched a concept design for a blue-haired character with a colorful outfit, including pink antler-like head accessories, a purple jacket, and striped socks.",
        "Modeling: Used software like Blender, Maya, or ZBrush to sculpt and design the character's body, clothing, and accessories in 3D.",
        "Texturing: Applied vibrant textures and materials to enhance the character's visual appeal, paying attention to color harmony and detail (e.g., the butterfly design on the shirt).",
        "Refinement: Adjusted the proportions and details to achieve a clean, polished final model. - Optimization: Ensured the model was lightweight yet detailed enough for smooth performance in animation or gaming.",
      ],
      tags: ["Character", "3D Modeling", "Animation"],
    },
    {
      id: "3d-4",
      title: "Character Jawhead Mobile Legends",
      description:
        "Jawhead is a stylized 3D robot character with a compact, armored body and glowing orange eyes and weapon. With a worn, rusted texture and military color palette, it portrays a combat-ready machine designed for battle environments.",
      imageUrl: jawhead,
      details:
        "Jawhead stands out as a visually striking, battle-hardened character—perfect for portfolios and sci-fi projects. It effectively conveys strength and activity in a single frame.",
      situation:
        "Created as part of a character design portfolio, this model aims to showcase visual storytelling and design strength in a single render for games or animation.",
      task: "Design a 3D robot that visually communicates power, function, and presence—without animation.",
      actions: [
        "Sketched bold silhouettes inspired by mecha and military robots.",
        "Modeled in Blender with thick limbs and functional proportions.",
        "Applied worn PBR textures and emissive lights for realism.",
        "Rendered with dramatic lighting to emphasize form and depth.",
      ],
      tags: ["Character", "3D Modeling", "Game"],
    },
    {
      id: "3d-5",
      title: "Character Cyclope Mobile Legends",
      description:
        "Cyclops is a 3D stylized character based on the Mobile Legends hero—designed as a tiny but powerful mage with oversized magical goggles, glowing gear core, and a sci-fi fantasy vibe.",
      imageUrl: cyclop,
      details:
        "Cyclops was successfully rendered with strong visual identity, showcasing his character traits through glow effects and steampunk-like design. The model is suitable for both animation and real-time game environments, and enhances the creator’s stylized character portfolio.",
      situation:
        "This model was developed for portfolio purposes, aiming to recreate and reimagine a known game character with high attention to detail and stylized realism.",
      task: "Create a visually appealing 3D version of Cyclops that captures his magical essence, unique proportions, and glowing visual effects.",
      actions: [
        "Modeled Cyclops in stylized proportions, highlighting his large goggles and compact frame.",
        "Sculpted accessories like the magic cannon and backpack using reference from the original design.",
        "Applied emissive materials for the eyes, chest, and cannon to reflect his mage powers.",
        "Used cinematic lighting and lens flare to enhance the magical and tech-fantasy atmosphere.",
      ],
      tags: ["Character", "3D Modeling", "Game"],
    },
    {
      id: "3d-6",
      title: "Interior Cafe",
      description:
        "This café interior features a modern-industrial design with a warm and inviting atmosphere. ",
      imageUrl: cafe,
      details:
        "The final interior achieved a balanced ambiance: warm yet contemporary. The new layout improved customer comfort, prolonged dwell time, and increased positive feedback on both social media and review platforms.",
      situation:
        "The café needed a redesign to create a modern, comfortable environment that encourages guests to stay longer, work, and socialize—blending aesthetic appeal with functional space utilization.",
      task: "To design a café interior that maximizes space efficiency while creating a welcoming environment that aligns with modern urban lifestyle aesthetics.",
      actions: [
        "Selected neutral stone textures for the walls to create depth and contrast.",
        "Used dark woven furniture with soft cushions for a balance of style and comfort.",
        "Installed warm-toned wooden flooring to enhance the cozy feel.",
        "Integrated ambient ceiling lighting and wall sconces to highlight architectural lines and provide a calm atmosphere.",
        "Positioned seating to encourage both group and solo activities, with open sightlines and easy circulation.",
      ],
      tags: ["Interior", "3D Modeling", "Sketchup"],
    },
    {
      id: "3d-7",
      title: "Character Bogo",
      description:
        "Bogo is a stylized 3D police chief character modeled for animation use.",
      details:
        "Bogo was successfully modeled with clean topology and cartoon-accurate proportions, ready for rigging and animation.",
      situation:
        "The model was created as part of a character recreation project for animation practice and portfolio enhancement.",
      task: "Recreate the character Chief Bogo in 3D with accurate proportions, outfit details, and facial features matching the animated film version.",
      actions: [
        "Blocked out basic forms with correct body proportions.",
        "Modeled police uniform with stars, belt, and shoulder patches.",
        "Added facial details to match Bogo's stern expression.",
        "Kept clean topology for future rigging and animation.",
        "Used flat colors for stylized cartoon look.",
      ],
      tags: ["Character", "3D Modeling", "Animation"],
      imageUrl: bogo,
    },
    {
      id: "3d-8",
      title: "Character Pangolier Dota 2",
      imageUrl: pango,
      description:
        "Pango is a stylized 3D version of Pangolier from Dota 2, portrayed as a charismatic and agile duelist.",
      details:
        "This version of Pango highlights his confident stance, detailed armor, and vibrant costume colors, set against a lively urban backdrop to emphasize his flamboyant personality.",
      situation:
        "Created as a 3D character modeling exercise to bring a well-known MOBA hero into a stylized, animated form for showcase purposes.",
      task: "Recreate Pangolier in a stylized 3D form that retains his signature charm, pose, and fantasy costume details.",
      actions: [
        "Modeled base mesh with stylized proportions to emphasize agility.",
        "Designed and sculpted chest armor and accessories based on in-game reference.",
        "Added facial expression and posture to capture his charismatic flair.",
        "Textured using bright, saturated colors to match his flamboyant theme.",
        "Rendered in a lively urban night scene to contrast with his heroic appearance.",
      ],
      tags: ["Character", "3D Modeling", "Fan Art"],
    },
    {
      id: "3d-9",
      title: "Environment Laboratory",
      imageUrl: lab,
      description:
        "Lab is a stylized 3D science facility featuring domed towers and glowing circular windows.",
      details:
        "This futuristic lab design blends fantasy and steampunk aesthetics, with brick textures, red domes, and oversized communication devices like satellite dishes and antennae.",
      situation:
        "Created as part of an environment modeling project to explore architectural design in fantasy-science settings.",
      task: "Build a unique 3D lab environment with storytelling elements through shapes, lighting, and props.",
      actions: [
        "Modeled the building using a mix of cylindrical and rectangular forms.",
        "Added glowing circular windows to enhance the sci-fi atmosphere.",
        "Created large props like the satellite dish and radar to suggest research functionality.",
        "Textured with brick and metallic shaders for contrast between old and futuristic.",
        "Placed the scene in a natural environment with dynamic lighting and foliage.",
      ],
      tags: ["Environment", "3D Modeling", "Architecture"],
    },
    {
      id: "3d-10",
      title: "Iron Knife",
      imageUrl: knife,
      description:
        "Knife is a 3D model of a short combat blade featuring a double-edged steel blade and brass hilt.",
      details:
        "This stylized weapon design emphasizes simplicity and elegance, with a dark metallic blade, golden guard, and a red-wrapped handle suited for close combat use.",
      situation:
        "Developed as a prop modeling project to explore weapon design for games and cinematic scenes.",
      task: "Create a detailed 3D knife model that balances realism and stylization, suitable for fantasy or historical themes.",
      actions: [
        "Modeled the blade with sharp edges and symmetrical geometry.",
        "Designed a cross-guard and pommel with brass material for contrast.",
        "Wrapped the handle with a red cloth texture for grip detail.",
        "Applied PBR materials for realistic metal and fabric finishes.",
        "Rendered in a black studio background to highlight the silhouette.",
      ],
      tags: ["Prop", "3D Modeling", "Weapon"],
    },
    {
      id: "3d-11",
      title: "Hyper Car",
      imageUrl: hyperCar,
      description:
        "HyperCar is a futuristic 3D supercar model featuring sharp angles, glowing underlights, and a sleek aerodynamic body.",
      details:
        "The design blends luxury and aggression, with a glossy red exterior, blue neon underglow, and high-performance visual cues like a rear spoiler and deep intake vents.",
      situation:
        "This project was developed to explore high-poly vehicle modeling and lighting techniques in an automotive visualization context.",
      task: "Create a visually striking 3D hypercar with futuristic elements and stylized lighting suitable for concept presentations or cinematic use.",
      actions: [
        "Modeled the car body using hard-surface techniques with aerodynamic form.",
        "Added details such as vents, side mirrors, and a rear spoiler for realism.",
        "Applied reflective materials and a red metallic shader to the body.",
        "Installed blue neon lighting beneath the car for a dramatic visual effect.",
        "Rendered on a custom runway setup to simulate a showcar display.",
      ],
      tags: ["Vehicle", "3D Modeling", "Automotive"],
    },
    {
      id: "3d-12",
      title: "Bwing",
      imageUrl: bwing,
      description:
        "Bwing is a 3D model of a space starfighter inspired by the B-Wing from Star Wars, designed for heavy combat.",
      details:
        "The model captures the unique cross-shaped silhouette and asymmetrical design of the original B-Wing, emphasizing functional structure and sci-fi detailing for a realistic space combat look.",
      situation:
        "Created as part of a sci-fi modeling project to replicate and reinterpret classic starfighter designs from popular culture.",
      task: "Model a highly recognizable sci-fi ship with accurate proportions, functional forms, and detailed components suitable for animation or concept render.",
      actions: [
        "Blocked out the core shape using reference images for proportional accuracy.",
        "Modeled the cockpit, wings, and engines with a focus on mechanical detail.",
        "Maintained the ship’s signature asymmetry and wing-mounted cannons.",
        "Applied simple grayscale materials for clear silhouette testing.",
        "Rendered on a black background to highlight the model’s geometry and form.",
      ],
      tags: ["Sci-Fi", "3D Modeling", "Spaceship"],
    },
  ],
  "Motion Graphic": [
    {
      id: "mg-1",
      title: "Bumper Confirm",
      description: "Dynamic logo animation for tech startup.",
      imageUrl: bumper,
      youtube: "https://www.youtube.com/embed/jKaCq6SMGKg",
      details:
        "The brand animation became a cornerstone of the company's visual identity and was successfully implemented across all digital platforms.",
      situation:
        "The company was planning its annual corporate event, which aimed to strengthen relationships with key stakeholders and showcase the company's achievements and future plans. The challenge was to create an engaging and memorable opening ceremony that would set the tone for the entire event.",
      task: "My task was to design and execute the opening ceremony for the corporate event, ensuring it was impactful, professional, and aligned with the company's brand image.",
      actions: [
        "Concept Development: Collaborated with the marketing and events team to brainstorm and develop a creative concept that reflected the company's values and mission.",
        "Script and Content Creation: Drafted a compelling script and designed multimedia presentations, including videos and slideshows, to highlight the company's achievements and future goals.",
        "Rehearsals and Coordination: Organized rehearsals to ensure smooth execution on the day of the event. Coordinated with various departments, including AV technicians, event planners, and speakers, to ensure everything was in place.",
        "Execution: Oversaw the live execution of the opening ceremony, ensuring all elements came together seamlessly, from the lighting and sound to the timing of speeches and multimedia presentations.",
      ],
      tags: ["Branding", "Animation", "Corporate"],
    },
  ],
  "Web Development": [
    {
      id: "web-1",
      title: "E-commerce Platform",
      description: "Full-stack online marketplace solution.",
      imageUrl: web,
      details:
        "The e-commerce platform successfully launched with 100+ vendors and achieved $1M in sales within the first quarter.",
      situation:
        "A retail company needed a modern e-commerce platform to support multiple vendors and complex inventory management.",
      task: "Develop a scalable e-commerce platform with advanced features for both vendors and customers.",
      actions: [
        "Implemented secure payment processing",
        "Created vendor management system",
        "Developed real-time inventory tracking",
        "Integrated analytics dashboard",
      ],
      tags: ["React", "Node.js", "E-commerce"],
    },
  ],
  "Another Arts": [
    {
      id: "art-1",
      title: "E-commerce Platform",
      description: "Full-stack online marketplace solution.",
      imageUrl: bioattack,
      youtube: "https://www.youtube.com/embed/OqqwNJYX3iQ",
      details:
        "The e-commerce platform successfully launched with 100+ vendors and achieved $1M in sales within the first quarter.",
      situation:
        "A retail company needed a modern e-commerce platform to support multiple vendors and complex inventory management.",
      task: "Develop a scalable e-commerce platform with advanced features for both vendors and customers.",
      actions: [
        "Implemented secure payment processing",
        "Created vendor management system",
        "Developed real-time inventory tracking",
        "Integrated analytics dashboard",
      ],
      tags: ["React", "Node.js", "E-commerce"],
    },
  ],
};

interface ProjectGalleryProps {
  category: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ category }) => {
  const categoryProjects = projects[category as keyof typeof projects] || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={category}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categoryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectGallery;
