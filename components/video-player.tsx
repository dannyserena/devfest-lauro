export default function VideoPlayer() {
  return (
    <div className="w-full flex justify-center items-center p-4 ">
      <video controls loop className="rounded-lg shadow-md max-w-full" style={{ maxWidth: '1000px', width: '100%', paddingTop: '20px' }}>
        <source src="/video/DevFest2025Opener.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  );
}