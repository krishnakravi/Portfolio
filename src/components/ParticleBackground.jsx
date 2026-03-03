import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {}, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 z-0"
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: { opacity: 0.15 },
            },
          },
        },
        particles: {
          color: {
            value: ["#3b93ff", "#a855f7"],
          },
          links: {
            color: "#3b93ff",
            distance: 180,
            enable: true,
            opacity: 0.04,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 0.4,
            straight: false,
          },
          number: {
            density: { enable: true, area: 1200 },
            value: 40,
          },
          opacity: {
            value: { min: 0.1, max: 0.3 },
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.05,
            },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 2.5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticleBackground
