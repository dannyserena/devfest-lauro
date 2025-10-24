export default function VideoPlayer() {
  return (
    <div className="w-full flex justify-center items-center p-4">
      <iframe
        width="1000"
        height="562"
        src="https://www.youtube.com/embed/Wr0RiuX9dLY"
        title="DevFest2025 Opener captions Brazilian Portuguese"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-md max-w-full"
        style={{ paddingTop: '20px' }}
      ></iframe>
    </div>
  );
}
