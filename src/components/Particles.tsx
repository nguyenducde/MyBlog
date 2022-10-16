import React from 'react'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'
import type { Container, Engine } from 'tsparticles-engine'
import { RootState } from '../redux/store'

const EffectParticles: React.FC = () => {
  const isDarkMode = useSelector<RootState>((state) => state.isDarkMode)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await container
  }, [])

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      style={{ position: 'absolute', inset: 0 }}
      options={{
        fullScreen: {
          enable: false,
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: isDarkMode ? '#ffffff' : '#000000',
          },
          links: {
            color: isDarkMode ? '#ffffff' : '#000000',
            distance: 110,
            enable: true,
            opacity: 0.8,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
      }}
    />
  )
}

export default EffectParticles
