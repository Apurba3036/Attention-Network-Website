import React from 'react';

const VideoPlayer = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Some words from our <span className='text-orange-500'>CEO!</span></h1>
      
    </div>
    <div class="card shrink-0 w-full max-w-sm mx-auto  ">
    <iframe
      title="Facebook Video"
      src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Ftheattentionnetwork%2Fvideos%2F737824531852516%2F&show_text=false&width=267&t=0"
      width="300"
      height="500"
      style={{ border: 'none', overflow: 'hidden' }}
      className='rounded-lg'
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen={true}
    ></iframe>
    </div>
  </div>
</div>

  );
};

export default VideoPlayer;
