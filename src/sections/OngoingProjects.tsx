import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Maximize2, X, MapPin, Building2, Home, Store } from 'lucide-react';

interface OngoingProject {
  id: number;
  title: string;
  category: string;
  location: string;
  stage: string;
  videoUrl: string;
  icon: typeof Building2;
}

const ongoingProjects: OngoingProject[] = [
  {
    id: 1,
    title: 'Site Preparation & Borewell Execution',
    category: 'Phase 1: Substructure',
    location: 'Semmozhi Nagar, Alagar Kovil Rd, Madurai',
    stage: 'Borewell & Foundation Works',
    videoUrl: '/videos/ongoingprojects/WhatsApp Video 2026-08-12 at 9.00.02 AM.mp4',
    icon: Building2,
  },
  {
    id: 2,
    title: 'Structural Framing & Column Construction',
    category: 'Phase 2: Superstructure',
    location: 'Semmozhi Nagar, Alagar Kovil Rd, Madurai',
    stage: 'Structural Elevation & Framing',
    videoUrl: '/videos/ongoingprojects/WhatsApp Video 2026-08-12 at 9.00.41 AM.mp4',
    icon: Home,
  },
  {
    id: 3,
    title: 'Roof Slab Steel Rebar Reinforcement',
    category: 'Phase 3: Slab & Casting',
    location: 'Semmozhi Nagar, Alagar Kovil Rd, Madurai',
    stage: 'Roof Slab & Conduit Work',
    videoUrl: '/videos/ongoingprojects/WhatsApp Video 2026-08-12 at 9.00.49 AM.mp4',
    icon: Store,
  },
];

const OngoingProjects = () => {
  const [activeVideoModal, setActiveVideoModal] = useState<OngoingProject | null>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const togglePlay = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      // Pause all other videos
      Object.keys(videoRefs.current).forEach((key) => {
        const otherId = Number(key);
        if (otherId !== id && videoRefs.current[otherId]) {
          videoRefs.current[otherId]?.pause();
        }
      });
      video.play();
      setPlayingId(id);
    } else {
      video.pause();
      setPlayingId(null);
    }
  };

  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container-tnexus">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-subtitle flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              FEATURED ONGOING PROJECT
            </span>
            <h2 className="section-title mt-2">
              Residential Building Construction
            </h2>
            <p className="mt-3 text-muted-foreground text-base max-w-xl">
              Live site progress from our active site at Semmozhi Nagar, Sembiya Nendhal, Alagar Kovil Road, Madurai.
            </p>
          </motion.div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ongoingProjects.map((project, index) => {
            const Icon = project.icon;
            const isPlaying = playingId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group"
              >
                {/* Video Player Box - Clean 4:5 Aspect Ratio for Phone Videos */}
                <div className="relative aspect-[4/5] bg-slate-950 overflow-hidden group/video">
                  <video
                    ref={(el) => { videoRefs.current[project.id] = el; }}
                    src={project.videoUrl}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    onPause={() => setPlayingId((prev) => (prev === project.id ? null : prev))}
                    onPlay={() => setPlayingId(project.id)}
                  />

                  {/* Gentle Dark Overlay - Fades out while playing */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover/video:opacity-100' : 'opacity-100'}`}></div>

                  {/* Top Status & Fullscreen Button */}
                  <div className={`absolute top-4 left-4 right-4 flex items-center justify-between z-20 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover/video:opacity-100' : 'opacity-100'}`}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-slate-950 shadow-md pointer-events-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping"></span>
                      Work In Progress
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveVideoModal(project);
                      }}
                      className="w-8 h-8 rounded-full bg-black/60 text-white/90 hover:text-white hover:bg-black/90 flex items-center justify-center backdrop-blur-md transition-all shadow-md cursor-pointer hover:scale-110 active:scale-95"
                      title="Open Fullscreen"
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>

                  {/* Play/Pause Button Overlay - Hidden while playing, reveals on hover */}
                  <button
                    onClick={() => togglePlay(project.id)}
                    className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    <div className={`w-14 h-14 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-xl backdrop-blur-sm transition-all duration-300 ${isPlaying ? 'opacity-0 group-hover/video:opacity-100 scale-90 group-hover/video:scale-100' : 'opacity-100 group-hover/video:scale-110'}`}>
                      {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1 fill-current" />}
                    </div>
                  </button>

                  {/* Bottom Video Badge */}
                  <div className={`absolute bottom-4 left-4 right-4 z-10 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover/video:opacity-100' : 'opacity-100'}`}>
                    <div className="flex items-center gap-2 text-white/90 text-xs font-medium bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <Icon size={14} className="text-amber-400" />
                      <span className="truncate">{project.stage}</span>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 flex flex-col flex-grow bg-card">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-auto pt-3 border-t border-border">
                    <MapPin size={14} className="text-amber-500 flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveVideoModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-card rounded-2xl overflow-hidden shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-border flex items-center justify-between bg-card">
                <div>
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider block">
                    Active Site Video
                  </span>
                  <h3 className="text-base font-bold text-foreground">
                    {activeVideoModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="p-1.5 rounded-full hover:bg-muted text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Video Player (Portrait friendly) */}
              <div className="bg-black max-h-[70vh] flex items-center justify-center">
                <video
                  src={activeVideoModal.videoUrl}
                  className="w-full max-h-[70vh] object-contain"
                  controls
                  autoPlay
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-muted/30 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-amber-500" />
                  <span>{activeVideoModal.location}</span>
                </div>
                <span className="font-medium text-foreground">{activeVideoModal.stage}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OngoingProjects;
