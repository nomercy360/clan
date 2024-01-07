import { createEffect, createSignal, For, Match, Show, Switch } from 'solid-js';

export default function PhotoCards() {

  const [activeIndex, setActiveIndex] = createSignal(0);
  const [isMobile, setIsMobile] = createSignal(window.innerWidth < 768);

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 768);
  });

  createEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div class='flex flex-col gap-4 sm:hidden'>
      <img src='/img_3.webp' alt='img_3' />
      <div class='flex flex-row gap-2 items-center'>
        <div class='bg-[#D9D9D9] rounded-full h-2 w-2'></div>
        <div class='bg-black rounded-full h-2 w-2'></div>
        <div class='bg-[#D9D9D9] rounded-full h-2 w-2'></div>
        <div class='bg-[#D9D9D9] rounded-full h-2 w-2'></div>
      </div>
    </div>
  );
}



