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
import kampanye from "./../../public/Bumper Kampanye.png";
import briQlola from "./../../public/BRI.png";
import pelabuhan from "./../../public/Bumper Pelabuhan.png";
import cppob from "./../../public/CPPOB.png";
import tani from "./../../public/kartu tani.png";
import natal from "./../../public/Natal.png";
import pbsi from "./../../public/PBSI.png";
import pupr from "./../../public/PUPR.png";
import bpomMobile from "./../../public/BPOM Mobile.png";
import covid from "./../../public/Covid.png";
import iki from "./../../public/Iki.png";
import tiktod from "./../../public/Tiktod.png";
import music from "./../../public/music.png";
import typografi from "./../../public/Typografi.png";

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
    {
      id: "mg-2",
      title: "BPOM Mobile",
      imageUrl: bpomMobile,
      youtube: "https://www.youtube.com/embed/AvQANqQm_Wk",
      description:
        "BPOM Mobile is a motion graphic visual introducing the official application of Indonesia’s National Agency of Drug and Food Control.",
      details:
        "The animation features a clean, flat-style cityscape with a centered smartphone mockup showcasing the BPOM logo, intended to emphasize trust, accessibility, and public service.",
      situation:
        "Created as a motion graphic explainer to promote digital public service access and raise awareness about product safety through the BPOM mobile app.",
      task: "Design a motion graphic scene with a modern city background and mobile device to introduce the BPOM application in a clear and friendly manner.",
      actions: [
        "Designed vector city elements with a flat illustration style.",
        "Created a centered phone mockup to showcase the BPOM logo.",
        "Used soft blue tones to convey reliability and cleanliness.",
        "Integrated smooth motion to highlight accessibility and flow.",
        "Rendered in high definition for presentation and public communication.",
      ],
      tags: ["Motion Graphic", "Public Service", "App Promo"],
    },
    {
      id: "mg-3",
      title: "BRI Financial Dashboard Report",
      imageUrl: briQlola,
      youtube: "https://www.youtube.com/embed/R4f6Pc5DBwE",
      description:
        "briQlola is a digital dashboard interface visual for BRI's Financial Report system, presented in a futuristic data-driven style.",
      details:
        "The design uses glowing wireframe visuals of laptops and checklists, highlighting digital transformation, data accuracy, and smart finance management under BUMN Indonesia and Bank BRI branding.",
      situation:
        "Created as a digital visual support for financial reporting systems to emphasize innovation, reliability, and digital infrastructure within the BRI ecosystem.",
      task: "Design a futuristic and trustworthy digital dashboard graphic for BRI’s internal and external financial reporting.",
      actions: [
        "Created wireframe-style 3D laptop and checklist visuals with glowing effects.",
        "Applied a blue digital theme to convey trust, precision, and modernity.",
        "Integrated BRI branding and text hierarchy to balance visuals with corporate identity.",
        "Used checkmarks and digital coins to communicate financial validation and completeness.",
        "Aligned layout for compatibility with dashboard use, presentation, and documentation.",
      ],
      tags: ["Corporate", "Dashboard", "Financial Visual"],
    },
    {
      id: "mg-4",
      title: "Kampanye Keselamatan Pelayaran",
      imageUrl: kampanye,
      youtube: "https://www.youtube.com/embed/LEwpo_5K_I4",
      description:
        "Kampanye Keselamatan Pelayaran is a public awareness visual promoting maritime safety towards zero accidents in North Maluku.",
      details:
        "Held in Ternate on 29 April 2025, the campaign is organized by the Directorate General of Sea Transportation to educate the public and maritime personnel on safety, supported by strong visual elements representing coastal vigilance, proper documentation, and collective action.",
      situation:
        "Designed to support the Ministry of Transportation’s maritime safety campaign targeting awareness, accountability, and safety standard adherence across North Maluku.",
      task: "Create an impactful campaign banner that emphasizes safety culture, national policy, and regional maritime identity through dynamic layout and strong typography.",
      actions: [
        "Used a bold title to immediately communicate the campaign’s purpose.",
        "Blended photographs of maritime officers, ships, and documentation to illustrate real implementation.",
        "Emphasized location and date to mark the regional importance of the event.",
        "Highlighted the slogan 'Zero Accident' with visual hierarchy and contrast.",
        "Integrated official ministry and event partner branding to ensure authority and credibility.",
      ],
      tags: ["Campaign", "Public Awareness", "Government"],
    },
    {
      id: "mg-4",
      title: "Direktorat Penyeberangan Sungai, Danau dan Penyeberangan",
      imageUrl: pelabuhan,
      youtube: "https://www.youtube.com/embed/p299levjgwg",
      description:
        "Pelabuhan is a digital visual intro representing the Directorate of River, Lake, and Ferry Transport under the Ministry of Transportation.",
      details:
        "The design features a dynamic futuristic background of blue digital blocks with a centered white panel displaying the official logo and institutional name, portraying trust, modernization, and digital transformation.",
      situation:
        "Created as a visual bumper for video presentations and official publications to introduce the authority in charge of ferry and inland water transport.",
      task: "Design a professional animated intro that emphasizes the Directorate’s identity within a digital modernization context.",
      actions: [
        "Composed a high-tech, abstract background with digital motion style.",
        "Placed the ministry’s logo in the center of a floating white card to focus attention.",
        "Used clear, formal typography to convey governmental authority.",
        "Maintained institutional tone with clean, structured animation.",
        "Prepared high-resolution rendering for official and event use.",
      ],
      tags: ["Government", "Visual Identity", "Motion Graphic"],
    },
    {
      id: "mg-5",
      title: "COVID-19 Global Awareness Motion Graphic",
      imageUrl: covid,
      youtube: "https://www.youtube.com/embed/f_8TDG1Si7g",
      description:
        "COVID is an animated educational visual that illustrates the global impact and spread of the COVID-19 virus using flat vector animation.",
      details:
        "The animation opens with a rotating Earth and minimal star background, designed to emphasize the worldwide nature of the pandemic and the importance of collective awareness and action.",
      situation:
        "Created during the COVID-19 pandemic to support public information campaigns through digital educational content in a simple, universally understandable format.",
      task: "Design a motion graphic that educates viewers on the global nature of COVID-19 using clean animation and impactful visuals.",
      actions: [
        "Designed a rotating Earth with simplified continents using vector style.",
        "Added space background and stars to create a neutral and global context.",
        "Kept text minimal with large, clear typography for instant recognition.",
        "Used flat design principles to ensure accessibility and clarity across audiences.",
        "Prepared animation for web, social media, and presentation formats.",
      ],
      tags: ["Health", "Motion Graphic", "Public Education"],
    },
    {
      id: "mg-6",
      title: "CPPOB: Do's and Don'ts in Food Production",
      imageUrl: cppob,
      youtube: "https://www.youtube.com/embed/xCahDWMPwhQ",
      description:
        "CPPOB is an animated visual comparison that shows good and bad practices in processed food production based on Indonesian food safety standards.",
      details:
        "The split-screen layout presents a bright, clean factory on one side versus an improper waste-dumping factory on the other, educating viewers on proper environmental and hygiene practices in industrial food processing.",
      situation:
        "Created to support BPOM’s food safety outreach efforts through clear, visual examples of compliant and non-compliant industry behavior.",
      task: "Design an animated visual that contrasts good and bad practices in food production in a way that is easily understood by the general public.",
      actions: [
        "Designed two contrasting factory scenes to visually represent good vs. bad practices.",
        "Used cheerful colors and clean layout on the Do's side, and darker tones with waste visuals on the Don'ts side.",
        "Ensured the message is quickly understood through minimal text and strong imagery.",
        "Used flat vector illustration style for consistency and clarity.",
        "Prepared assets for use in motion graphic sequences and printed campaigns.",
      ],
      tags: ["Food Safety", "Animation", "Public Education"],
    },
    {
      id: "mg-7",
      title: "Indeks Kepercayaan Industri (IKI)",
      imageUrl: iki,
      youtube: "https://www.youtube.com/embed/tWwoi9ox17U",
      description:
        "IKI is a corporate visual identity for Indonesia’s Industrial Confidence Index, symbolizing growth and trust in the manufacturing sector.",
      details:
        "The logo features bold lettering with an upward arrow representing positive momentum, combined with a globe of orange gears to signify industry, movement, and global competitiveness.",
      situation:
        "Created to support the Ministry of Industry’s efforts in launching the IKI as a measurable benchmark of industrial performance and stakeholder sentiment.",
      task: "Design a logo animation and visual identity that reflects confidence, precision, and the dynamic nature of industrial growth in Indonesia.",
      actions: [
        "Developed a clean, modern logo with industrial symbolism and upward trend indicators.",
        "Used a gear-globe motif to convey technological strength and international relevance.",
        "Integrated upward arrow into lettering to highlight progressive performance.",
        "Balanced color palette between professional black and energetic orange.",
        "Prepared the visual for integration in reports, presentations, and digital motion graphics.",
      ],
      tags: ["Industry", "Branding", "Infographic"],
    },
    {
      id: "mg-13",
      title: "E-Katalog Rusun PUPR",
      imageUrl: pupr,
      youtube: "https://www.youtube.com/embed/BrMZlpsul90",
      description:
        "PUPR is a flat-style animated visual introducing the E-Katalog platform for public housing (Rusun) under Indonesia’s Ministry of Public Works.",
      details:
        "Featuring cloud elements and bold, clear typography, the design reflects accessibility and digital infrastructure in government housing procurement.",
      situation:
        "Created to communicate the launch and use of an e-catalog system for vertical housing solutions.",
      task: "Visualize an engaging intro scene for PUPR’s e-catalog program in a friendly and simple animation.",
      actions: [
        "Used flat clouds and sky to suggest elevation and openness.",
        "Applied consistent typography in blue and yellow for clarity and branding.",
        "Balanced layout to highlight key text and institutional logos.",
        "Prepared in widescreen format for presentations and social campaigns.",
        "Exported with clean frame transitions.",
      ],
      tags: ["Public Housing", "Animation", "Government"],
    },
    {
      id: "mg-12",
      title: "Kementerian Perindustrian Republik Indonesia",
      imageUrl: pbsi,
      youtube: "https://www.youtube.com/embed/BV6olxsAxIw",
      description:
        "PBSI is an official visual identity screen for the Indonesian Ministry of Industry, representing digital transformation and manufacturing progress.",
      details:
        "The logo is centered on a white background with a subtle gradient, highlighting the cog and leaf symbols which represent industry and sustainability.",
      situation:
        "Created as a visual intro or ending bumper for official ministry videos and presentations.",
      task: "Display the Ministry’s logo with clarity and authority for digital media usage.",
      actions: [
        "Positioned the logo centrally on a clean white background.",
        "Used a smooth gradient to enhance focus on the emblem.",
        "Maintained official proportions and typography for government use.",
        "Optimized for intro/outro in institutional video formats.",
        "Exported in high resolution for flexible use.",
      ],
      tags: ["Government", "Logo Display", "Identity"],
    },
    {
      id: "mg-8",
      title: "Kartu Tani untuk Petani Indonesia Sejahtera",
      imageUrl: tani,
      youtube: "https://www.youtube.com/embed/4VePpMkoLlU",
      description:
        "Tani is an animated visual introduction to the Indonesian government's Kartu Tani program aimed at improving farmer welfare.",
      details:
        "The design features a stylized card with illustrations of farmers, the national flag, and agricultural symbols, representing prosperity, state support, and inclusivity for the farming community.",
      situation:
        "Created to support the public communication campaign of Kartu Tani as a strategic tool for subsidy distribution and agricultural data integration.",
      task: "Create a clear and engaging visual that explains the purpose and benefits of Kartu Tani to farmers and the general public.",
      actions: [
        "Illustrated the Kartu Tani card with friendly characters and national elements.",
        "Used green color tones to emphasize agriculture and sustainability.",
        "Added bold typography for key program messaging.",
        "Integrated motion elements for educational video use.",
        "Optimized layout for clarity and communication efficiency.",
      ],
      tags: ["Agriculture", "Government Program", "Social Campaign"],
    },
    {
      id: "mg-9",
      title: "Quite All Night",
      imageUrl: music,
      youtube: "https://www.youtube.com/embed/nNQ3c4h1lG8",
      description:
        "Music is a minimalist motion graphic visual themed around nighttime calmness and introspection, designed for a musical piece or lullaby.",
      details:
        "The scene features a silhouette of a child looking up at the moon over a quiet city skyline, with a peaceful starry background and clean typography that sets a serene and reflective tone.",
      situation:
        "Created as a visual companion for a quiet instrumental or vocal music track, intended for relaxation, bedtime, or ambient storytelling.",
      task: "Design a gentle and expressive night-themed visual that supports a calming music piece and conveys emotion without narration.",
      actions: [
        "Designed a flat vector night skyline with stars and moon to evoke serenity.",
        "Used silhouette animation of a child to enhance emotional connection.",
        "Applied dark blue tones to support the peaceful, nighttime atmosphere.",
        "Positioned clear text to introduce the musical title without distraction.",
        "Optimized composition for looped playback or background video.",
      ],
      tags: ["Music Visual", "Animation", "Lullaby"],
    },
    {
      id: "mg-10",
      title: "Selamat Hari Natal",
      imageUrl: natal,
      youtube: "https://www.youtube.com/embed/c59c1Jr_rKM",
      description:
        "Natal is a festive motion graphic greeting designed to celebrate Christmas with warmth and elegance.",
      details:
        "The visual features a Christmas wreath with golden bells, red ribbons, and animated snowfall set against a deep red background, creating a joyful and heartfelt holiday atmosphere.",
      situation:
        "Created as a digital greeting for corporate or personal use to share Christmas wishes through social media, presentations, or video messages.",
      task: "Design a visually rich and festive animation that expresses the spirit of Christmas in a clear, elegant, and universally appreciated way.",
      actions: [
        "Illustrated a wreath with holiday icons such as bells and ribbons in vibrant colors.",
        "Used a red background with falling snow particles to enhance the festive mood.",
        "Applied elegant script typography to convey a warm and friendly message.",
        "Composed layout for visual balance and readability on various devices.",
        "Exported animation for use in digital greetings and social media posts.",
      ],
      tags: ["Holiday", "Greeting", "Motion Graphic"],
    },
    {
      id: "mg-14",
      title: "Tiktod Tower Protest",
      imageUrl: tiktod,
      youtube: "https://www.youtube.com/embed/wB6XHzG5O6U",
      description:
        "Tiktod is a satirical motion graphic visual depicting public protest against chaotic work culture in fictional corporate spaces.",
      details:
        "The animated scene shows a corporate tower surrounded by demonstrators, visualizing dissatisfaction and internal dysfunction through humorous exaggeration.",
      situation:
        "Created as part of a creative commentary or animated explainer on digital work culture and corporate critique.",
      task: "Animate a protest scene against corporate toxicity using symbolic environments and expressions.",
      actions: [
        "Designed tower and office scenes with dynamic isometric perspective.",
        "Included speech bubbles with chaotic scenes to enhance narrative.",
        "Used muted color tones to reflect dissatisfaction and confusion.",
        "Animated crowd with protest signs to represent collective voice.",
        "Timed pacing for humorous yet meaningful impact.",
      ],
      tags: ["Satire", "Corporate Culture", "Animation"],
    },
    {
      id: "mg-14",
      title: "Typographic Greeting 'Halo!'",
      imageUrl: typografi,
      youtube: "https://www.youtube.com/embed/KtaUmJI_h9w",
      description:
        "Typografi is a minimalist kinetic text animation using the word 'Halo!' to deliver a stylish opening or transition.",
      details:
        "Presented with sharp contrast between black and white bars, the design uses pure typographic expression to capture attention and greet viewers.",
      situation:
        "Used as a title card or opener for modern video content requiring clarity and punch.",
      task: "Animate a bold typographic greeting with high contrast and simplicity.",
      actions: [
        "Created vertical slide bars to reveal text in dynamic fashion.",
        "Used black and white palette for clean visual hierarchy.",
        "Applied minimal motion to maintain professional feel.",
        "Designed for use as an intro or standalone identity bumper.",
        "Optimized typography for digital and mobile screens.",
      ],
      tags: ["Typography", "Minimalist", "Motion Graphic"],
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
