import { createEffect, createSignal, For, Match, Show, Switch } from 'solid-js';

export default function PhotoCards() {
  const [activeIndex, setActiveIndex] = createSignal(0);
  const [isMobile, setIsMobile] = createSignal(window.innerWidth < 768);

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 768);
  });

  createEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div class="flex flex-col gap-4 sm:hidden">
      <Switch>
        <Match when={0 === activeIndex()}>
          <img src="/mobile-1.webp" alt="mobile-1" />
        </Match>
        <Match when={1 === activeIndex()}>
          <img src="/mobile-2.webp" alt="mobile-2" />
        </Match>
        <Match when={2 === activeIndex()}>
          <img src="/mobile-3.webp" alt="mobile-3" />
        </Match>
        <Match when={3 === activeIndex()}>
          <img src="/mobile-4.webp" alt="mobile-4" />
        </Match>
      </Switch>
      <div class="flex flex-row items-center gap-2">
        <For each={[0, 1, 2, 3]}>
          {(index) => (
            <div
              class={`h-2 w-2 rounded-full ${
                index === activeIndex() ? 'bg-black' : 'bg-[#D9D9D9]'
              }`}
            />
          )}
        </For>
      </div>
    </div>
  );
}
