import React, { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // or "@tsparticles/full" if you installed full

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle (full of slim) which includes all the "standard" shapes and absolutes
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Particles background should be transparent as your home section has its own gradient
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false, // You can enable this if you want particles to react to clicks
            mode: "push",
          },
          onHover: {
            enable: true, // Particles will react to mouse hover
            mode: "grab", // Lines will connect to particles near the mouse
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 120, // How far the grab effect reaches
            links: {
              opacity: 0.2, // Opacity of the connecting lines
            },
          },
        },
      },
      particles: {
        color: {
          value: "#d5bdaf", // Particle color (light brown from your palette)
          // You can also use an array for multiple colors: value: ["#d5bdaf", "#e3d5ca"]
        },
        links: {
          color: "#e3d5ca", // Color of lines connecting particles
          distance: 150, // Max distance for lines
          enable: true, // Enable connecting lines
          opacity: 0.1, // Opacity of lines
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Particles bounce off edges
          },
          random: true, // Random movement direction
          speed: 0.5, // Slower speed for subtlety
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60, // Number of particles
        },
        opacity: {
          value: 0.3, // Opacity of individual particles
        },
        shape: {
          type: "circle", // Shape of particles
        },
        size: {
          value: { min: 1, max: 3 }, // Random size for particles
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      style={{
        position: "absolute", // Position it absolutely
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // Place it behind your home content and other background elements
        pointerEvents: "none", // Allows clicks/interactions to pass through to elements below
      }}
    />
  );
};

export default ParticlesBackground;