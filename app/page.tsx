import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./home/Hero";
import Manifesto from "./home/Manifesto";

// You can also extract the floating chat widget into its own component!

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col font-sans">
      <AnnouncementBar />
      
      <div className="relative flex-grow w-full h-full min-h-screen">
        <Hero />
        <Navbar />
    
         </div>
         <Manifesto />
        {/* Floating Chat/Widget Icon - You can extract this to a component too */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
          {/* Widget code goes here */}
        </div>
     
    </main>
  );
}