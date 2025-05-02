import { Github, Linkedin, Mail, Code, Film, Box } from "lucide-react";
import profile from "./../public/Dark Modern Elegant Singer New Song YouTube Thumbnail.png"
import FeaturedWork from "./components/FeaturedWork";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="py-20 px-4 bg-gray-800 md:px-8 overflow-hidden ">
      <div className="max-w-6xl mx-auto md:mt-[79px]">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div 
            className={`w-48 h-48 rounded-full overflow-hidden transform transition-all duration-1000 ease-out relative
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            {/* Pulsing border animation */}
            <div className="absolute inset-0 rounded-full animate-pulse-slow border-4 border-blue-400/50"></div>
            
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover transform transition-all duration-700 hover:scale-105"
            />
          </div>
          
          <div className="flex-1">
            <h1 
              className={`text-4xl md:text-5xl font-bold text-white mb-4 transform transition-all duration-700 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              Rangga Satria
            </h1>
            
            <p 
              className={`text-lg text-white mb-6 transform transition-all duration-700 delay-200 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              I have the ability to work as a 3D Modeler, Motion Graphic
              Designer, and Video Editor. Experienced Web Developer with a
              passion for creating attractive and interactive websites that
              meet customer needs and exceed expectations. Well-versed in
              developing custom WordPress themes and plugins. Excels in HTML,
              CSS, and JavaScript
            </p>
            
            <div 
              className={`flex gap-4 transform transition-all duration-700 delay-400 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <a 
                target="blank" 
                href="https://github.com/ranggasatria1323" 
                className="p-3 text-white rounded-full bg-gray-700 hover:bg-gray-600 transform transition-all duration-300 hover:scale-110 hover:text-blue-400"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                target="blank" 
                href="https://www.linkedin.com/in/rangga-satria-maulana/" 
                className="p-3 text-white rounded-full bg-gray-700 hover:bg-gray-600 transform transition-all duration-300 hover:scale-110 hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                target="blank" 
                href="https://drive.google.com/drive/folders/14qTnOeY7LZ8oLeoXOC5dRL2-S3RLV7_f" 
                className="p-3 text-white rounded-full bg-gray-700 hover:bg-gray-600 transform transition-all duration-300 hover:scale-110 hover:text-blue-400"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* About Me*/}
      <section id="about" className="py-20 bg-white px-4 md:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          About Me
        </h1>
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-700 mb-4">
            I am a professional with a broad expertise in 3D Animation, Web
            Development, and Motion Graphics. With a strong background and
            in-depth experience in each of these fields, I provide creative and
            technical solutions that not only meet clients' needs but also make
            a significant impact in the industry.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            3D Animation
          </h2>
          <p className="text-gray-700 mb-4">
            My expertise in 3D Animation includes 3D modeling, texturing,
            lighting, as well as character and object animation. I focus on
            creating realistic and captivating animations for films, video
            games, and product visualizations. I use software like Autodesk
            Maya, Blender, Substance Painter, and Unreal Engine to bring ideas
            to life.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Web Development
          </h2>
          <p className="text-gray-700 mb-4">
            In Web Development, I build responsive, interactive, and
            user-friendly websites using languages like HTML, CSS, and
            JavaScript. I also work with frameworks such as React, Node.js, and
            Vue.js to develop modern web applications.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Motion Graphics
          </h2>
          <p className="text-gray-700 mb-4">
            As an expert in Motion Graphics, I create dynamic visuals that
            effectively communicate messages using tools like Adobe After
            Effects and Premiere Pro. These visuals are perfect for commercials,
            promotional videos, or social media content.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Combination of Expertise
          </h2>
          <p className="text-gray-700">
            My multidisciplinary skills allow me to approach projects from
            various perspectives, delivering creative and technical solutions
            that are both functional and aesthetically pleasing.
          </p>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Code className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Box className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold mb-4">3D Animation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Blender</li>
                <li>Autodesk Maya</li>
                <li>Substance Painter</li>
                <li>Unreal Engine</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Film className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Motion Graphics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Adobe After Effects</li>
                <li>Premiere Pro</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <FeaturedWork />
      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Rangga Satria. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
