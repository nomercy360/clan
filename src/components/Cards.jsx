import { createSignal, For, Match, Switch } from 'solid-js';

export default function Cards() {
  const [activeIndex, setActiveIndex] = createSignal(0);
  const [isMobile, setIsMobile] = createSignal(window.innerWidth < 768);

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 768);
  });

  const cardTexts = [
    {
      title: 'Brand development and strategy',
      text: 'Understanding most valuable and sellable products, we are developing assortment. Sometimes it includes',
    },
    {
      title: 'Shooting and art-direction',
      text: 'Understanding most valuable and sellable products, we are developing assortment. Sometimes it includes',
    },
    {
      title: 'Websites design and engineering',
      text: 'Understanding most valuable and sellable products, we are developing assortment. Sometimes it includes',
    },
    {
      title: 'Assortment matrix design',
      text: 'Understanding most valuable and sellable products, we are developing assortment. Sometimes it includes',
    },
    {
      title: 'Product modelling and design',
      text: 'Understanding most valuable and sellable products, we are developing assortment. Sometimes it includes',
    },
  ];

  return (
    <Switch>
      <Match when={isMobile()}>
        <div
          class="card relative mt-8 flex h-[390px] flex-col items-start justify-center gap-3 rounded-[70px] bg-[#F8F8F8] p-5"
          onClick={() =>
            setActiveIndex((prevIndex) => (prevIndex + 1) % cardTexts.length)
          }
        >
          <div class="flex flex-col">
            <p class="text-base text-white">{cardTexts[activeIndex()].title}</p>
            <p class="text-sm text-white">{cardTexts[activeIndex()].text}</p>
          </div>
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 transform">
            <div class="flex items-center justify-center gap-2">
              <For each={cardTexts}>
                {(card, index) => (
                  <div
                    class={`h-2 w-2 rounded-full ${
                      index() === activeIndex() ? 'bg-white' : 'bg-neutral-400'
                    }`}
                  />
                )}
              </For>
            </div>
          </div>
        </div>
      </Match>

      <Match when={!isMobile()}>
        <div class="mt-8 grid h-[390px] w-full grid-cols-5 gap-4">
          <For each={cardTexts}>
            {(card, index) => (
              <div class="card flex flex-col items-start justify-between rounded-[20px] bg-[#F8F8F8] p-5 ">
                <p class="text-xl font-medium leading-tight text-neutral-950">
                  {card.text}
                </p>
                <p class="text-2xl leading-tight text-neutral-950">
                  {card.title}
                </p>
              </div>
            )}
          </For>
        </div>
      </Match>
    </Switch>
  );
}
