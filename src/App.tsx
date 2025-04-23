import { Github, Linkedin, Mail, Code, Film, Box } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import bioattack from "./../public/bioAttack.gif"
import bumper from "./../public/Bumper Acara.gif"
import profile from "./../public/Dark Modern Elegant Singer New Song YouTube Thumbnail.png"
import gendhis from "./../public/Gendhis.gif"
import web from "./../public/CompanyProfile.gif"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-800 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Rangga Satria
              </h1>
              <p className="text-lg text-white mb-6">
                I have the ability to work as a 3D Modeler, Motion Graphic
                Designer, and Video Editor. Experienced Web Developer with a
                passion for creating attractive and interactive websites that
                meet customer needs and exceed expectations. Well-versed in
                developing custom WordPress themes and plugins. Excels in HTML,
                CSS, and JavaScript
              </p>
              <div className="flex gap-4">
                <a target="blank" href="https://github.com/ranggasatria1323" className="p-2 text-gray-600 hover:text-gray-900">
                  <Github />
                </a>
                <a target="blank" href="https://www.linkedin.com/in/rangga-satria-maulana/" className="p-2 text-gray-600 hover:text-gray-900">
                  <Linkedin />
                </a>
                <a target="blank" href="https://drive.google.com/drive/folders/14qTnOeY7LZ8oLeoXOC5dRL2-S3RLV7_f" className="p-2 text-gray-600 hover:text-gray-900">
                  <Mail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me*/}
      <section className="py-20 bg-white px-4 md:px-8">
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
      <section className="py-20 bg-white px-4 md:px-8">
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
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Featured Work
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Portfolio Item 1 */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-200">
                    <img
                      src={gendhis}
                      alt="3D Character Animation"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    3D Animation Gendhis
                  </h3>
                  <p className="text-sm mb-2"> Click to show detail</p>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>3D Animation Gendhis</DialogTitle>
                  <DialogDescription>
                    Watch my latest 3D character animation work
                  </DialogDescription>
                </DialogHeader>
                <p style={{ fontWeight: "bold" }}>Situation:</p>
                <p style={{ lineHeight: "30px" }}>
                  The production team faced challenges in creating a 3D animated
                  horror film that could evoke a scary and thrilling atmosphere.
                  The main challenge was balancing frightening visual elements
                  with a strong, deep storyline.
                </p>
                <br />
                <p style={{ fontWeight: "bold" }}>Task:</p>
                <p style={{ lineHeight: "30px" }}>
                  Our mission was to create a 3D animated film titled "Gendhis"
                  that was not only scary but also had an engaging storyline and
                  strong characters, making it well-received by a wide audience
                  and setting a new standard in the horror animation genre.
                </p>
                <br />
                <p style={{ fontWeight: "bold" }}>Action:</p>
                <p style={{ lineHeight: "30px" }}>
                  Story Development: Created a script that combined local
                  cultural elements with rich horror mythology, ensuring the
                  story had surprising plot twists and complex characters.
                </p>
                <p style={{ lineHeight: "30px" }}>
                  Visual Design: Used the latest 3D animation technology to
                  create realistic and detailed visual effects, from character
                  design to background settings that supported the horror
                  atmosphere.
                </p>
                <p style={{ lineHeight: "30px" }}>
                  Sound Effects and Music: Integrated scary sound effects and
                  background music that supported the eerie atmosphere,
                  collaborating with experienced music composers and sound
                  design teams.
                </p>
                <p style={{ lineHeight: "30px" }}>
                  Animation and Rendering: The animation process was carried out
                  in detail to ensure each scene looked lively and frightening.
                  We used high-quality rendering for the final output.
                </p>{" "}
                <br />
                <p style={{ fontWeight: "bold" }}>Result:</p>
                <p style={{ lineHeight: "30px" }}>
                  "Gendhis" successfully attracted the attention of audiences
                  and critics, receiving positive reviews for its animation
                  quality and engaging story. The film won several awards at
                  international horror film festivals and set a new standard for
                  3D animated horror films. Viewers praised the stunning visual
                  effects, captivating storyline, and iconic characters.
                </p>
                <br />
                <div className="aspect-video mt-4">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/HVyx2bQVH9Q"
                    title="3D Character Animation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>

            {/* Portfolio Item 2 */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-200">
                    <img
                      src={bumper}
                      alt="Motion Graphics Showreel"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Motion Graphics Showreel
                  </h3>
                  <p className="text-sm mb-2"> Click to show detail</p>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>Motion Graphics Showreel</DialogTitle>
                  <DialogDescription>
                    Check out my motion graphics portfolio
                  </DialogDescription>
                </DialogHeader>
                <p style={{ fontWeight: "bold" }}>Situation:</p>
                <p style={{ lineHeight: "30px" }}>
                  The company was planning its annual corporate event, which
                  aimed to strengthen relationships with key stakeholders and
                  showcase the company's achievements and future plans. The
                  challenge was to create an engaging and memorable opening
                  ceremony that would set the tone for the entire event.
                </p>
                <br />
                <p style={{ fontWeight: "bold" }}>Task:</p>
                <p style={{ lineHeight: "30px" }}>
                  My task was to design and execute the opening ceremony for the
                  corporate event, ensuring it was impactful, professional, and
                  aligned with the company's brand image.
                </p>
                <br />
                <p style={{ fontWeight: "bold" }}>Action:</p>
                <p style={{ lineHeight: "30px" }}>
                  - Concept Development: Collaborated with the marketing and
                  events team to brainstorm and develop a creative concept that
                  reflected the company's values and mission.
                </p>
                <p style={{ lineHeight: "30px" }}>
                  - Script and Content Creation: Drafted a compelling script and
                  designed multimedia presentations, including videos and
                  slideshows, to highlight the company's achievements and future
                  goals.
                </p>
                <p style={{ lineHeight: "30px" }}>
                  - Rehearsals and Coordination: Organized rehearsals to ensure
                  smooth execution on the day of the event. Coordinated with
                  various departments, including AV technicians, event planners,
                  and speakers, to ensure everything was in place.
                </p>
                <p style={{ lineHeight: "30px" }}>
                  - Execution: Oversaw the live execution of the opening
                  ceremony, ensuring all elements came together seamlessly, from
                  the lighting and sound to the timing of speeches and
                  multimedia presentations.
                </p>
                <br />
                <p style={{ fontWeight: "bold" }}>Result:</p>
                <p style={{ lineHeight: "30px" }}>
                  The opening ceremony was a resounding success, receiving
                  positive feedback from attendees and stakeholders. The event
                  set a professional and engaging tone for the rest of the day,
                  enhancing the company's reputation and strengthening
                  relationships with key partners. Attendees praised the
                  seamless execution and the engaging content, which effectively
                  communicated the company's vision and accomplishments.
                </p>
                <br />
                <div className="aspect-video mt-4">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/jKaCq6SMGKg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>

            {/* Portfolio Item 3 */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-200">
                    <img
                      src={web}
                      alt="Web Development Project"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Interactive Web Experience
                  </h3>
                  <p className="text-sm mb-2"> Click to show detail</p>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>Interactive Web Experience</DialogTitle>
                  <DialogDescription>
                    See how I built this interactive web experience
                  </DialogDescription>
                </DialogHeader>
                <p className="font-bold mt-4">Situation:</p>
                <p className="leading-relaxed mt-2">
                  At my previous job, the company faced challenges with an
                  outdated e-commerce website. Users frequently complained about
                  slow load times and difficulty navigating the site, leading to
                  a drop in sales and customer satisfaction.
                </p>
                <p className="font-bold mt-4">Task:</p>
                <p className="leading-relaxed mt-2">
                  My task was to redesign and rebuild the company's e-commerce
                  website to enhance user experience, improve load times, and
                  ultimately increase online sales.
                </p>
                <p className="font-bold mt-4">Action:</p>
                <p className="leading-relaxed mt-2">
                  I worked on the new design and improved the website's
                  structure to make it more user-friendly and efficient.
                </p>
                <p className="font-bold mt-4">Result:</p>
                <p className="leading-relaxed mt-2">
                  The redesigned e-commerce website resulted in a 40% increase
                  in sales within the first three months of launch. User
                  feedback was overwhelmingly positive, highlighting improved
                  load times and ease of navigation. The site's bounce rate
                  decreased by 25%, and customer engagement increased
                  significantly.
                </p>
              </DialogContent>
            </Dialog>

            {/* Portfolio Item 4 */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-200">
                    <img
                      src={bioattack}
                      alt="Architectural Visualization"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    2D Animation BioAttack
                  </h3>
                  <p className="text-sm mb-2"> Click to show detail</p>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>2D Animation BioAttack</DialogTitle>
                  <DialogDescription>
                    Experience this 2D Animation BioAttack project
                  </DialogDescription>
                </DialogHeader>
                <p style={{ fontWeight: "bold" }}>Situation:</p>
                <p style={{ lineHeight: "30px" }}>
                  The production team faced the challenge of creating a 2D
                  animated film in the biohazard genre that could convey tension
                  and drama while maintaining high visual and narrative quality.
                  With the rising interest in this genre, the team had to ensure
                  the story and animation could compete in the crowded market.
                </p>
                <br />
                <p style={{ fontWeight: "bold" }}>Task:</p>
                <p style={{ lineHeight: "30px" }}>
                  Our task was to produce a 2D animated film titled "Bio Attack"
                  that depicted the biohazard threat in a compelling and
                  impactful way. The film needed to capture the audience's
                  attention and deliver a thrilling experience.
                </p>
                <br />
                <p style={{ fontWeight: "bold" }}>Action:</p>
                <p style={{ lineHeight: "30px" }}>
                  - Story Development: We wrote a strong script that combined
                  elements of tension and drama, with complex characters and an
                  engaging plot. We also conducted thorough research on
                  biohazard situations to ensure accuracy and credibility in the
                  story.
                </p>
                <p style={{ lineHeight: "30px" }}>
                  - Visual Design: Developed a unique and engaging visual style,
                  using 2D animation techniques to create a realistic and
                  suspenseful atmosphere. Characters and backgrounds were
                  designed in detail to support the story.
                </p>
                <p style={{ lineHeight: "30px" }}>
                  - Sound Effects and Music: Selected appropriate sound effects
                  and background music to enhance the tension and emotional
                  impact of the film. Collaborated with professional composers
                  and sound designers to achieve the best results.
                </p>
                <p style={{ lineHeight: "30px" }}>
                  - Production and Animation: Carried out the animation process
                  meticulously, ensuring each frame brought the story closer to
                  the audience. We also used advanced animation techniques to
                  produce smooth and realistic movements.
                </p>{" "}
                <br />
                <p style={{ fontWeight: "bold" }}>Result:</p>
                <p style={{ lineHeight: "30px" }}>
                  "Bio Attack" became one of the most popular 2D animated films
                  in the biohazard genre. It received positive reviews from
                  critics and audiences, who praised the strong story, deep
                  characters, and stunning visuals. The film also won several
                  awards at international animation film festivals, proving its
                  quality and broad appeal.
                </p>
                <br />
                <div className="aspect-video mt-4">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/OqqwNJYX3iQ"
                    title="Architectural Visualization"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

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
