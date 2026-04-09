'use client';

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000'
    }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: 1
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Текстовый блок поверх видео */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: '#fff',
        padding: '40px',
        background: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '15px',
        backdropFilter: 'blur(5px)', // Эффект матового стекла
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 4rem)', 
          margin: 0, 
          fontWeight: 'bold',
          letterSpacing: '3px' 
        }}>
          СИСТЕМЫ БЕЗОПАСНОСТИ
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
          marginTop: '10px',
          opacity: 0.9 
        }}>
          Интеллектуальная защита вашего пространства
        </p>
      </div>
    </section>
  );
}
