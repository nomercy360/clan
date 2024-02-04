import { createSignal, For, Match, Show, Switch } from 'solid-js';

export default function Cards() {
  const [activeIndex, setActiveIndex] = createSignal(0);
  const [isMobile, setIsMobile] = createSignal(window.innerWidth < 768);

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 768);
  });

  const cardTexts = [
    { text: 'Brand development and strategy', imgPath: null },
    { text: 'Shooting and art-direction', imgPath: '/card-img-1.png' },
    { text: 'Websites, design, and engineering', imgPath: null },
    { text: 'Assortment matrix design', imgPath: '/card-img-2.png' },
    { text: 'Product modelling and design', imgPath: null },
    { text: 'Customers acquisition and marketing', imgPath: '/card-img-3.png' },
    { text: 'Financial and revenue management', imgPath: null },
    { text: 'Customer relationships and support', imgPath: '/card-img-4.png' },
    { text: 'Operational processes automation', imgPath: null },
    { text: 'Growth strategy and management', imgPath: '/card-img-5.png' },
  ];

  const cardsWithImages = cardTexts.filter((card) => card.imgPath);

  return (
    <Switch>
      <Match when={isMobile()}>
        <div
          class="relative mt-8 flex h-[390px] w-full flex-col items-center justify-center gap-3 rounded-[70px] bg-[#F8F8F8] p-5 leading-tight"
          onClick={() =>
            setActiveIndex(
              (prevIndex) => (prevIndex + 1) % cardsWithImages.length
            )
          }
        >
          <p
            class={`z-10 text-base ${
              cardsWithImages[activeIndex()].imgPath
                ? 'text-white'
                : 'text-neutral-900'
            }`}
          >
            {cardsWithImages[activeIndex()].text}
          </p>
          <img
            src={cardsWithImages[activeIndex()].imgPath}
            alt=""
            class="absolute left-0 top-0 h-full w-full rounded-[70px] object-cover"
          />
          <div class="absolute bottom-10 left-1/2 -translate-x-1/2 transform">
            <div class="flex items-center justify-center gap-2">
              <For each={cardsWithImages}>
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
        <div class="mt-8 grid w-full grid-cols-2 gap-4 lg:grid-cols-5">
          <For each={cardTexts}>
            {(card, index) =>
              card.imgPath ? (
                <div class="relative flex h-[120px] flex-col items-center justify-center gap-3 rounded-[70px] bg-[#F8F8F8] p-5 lg:h-[260px]">
                  <img
                    src={card.imgPath}
                    alt=""
                    class="absolute left-0 top-0 h-full w-full rounded-[70px] object-cover"
                  />
                  <p class="relative z-10 text-lg leading-tight text-white">
                    {card.text}
                  </p>
                </div>
              ) : (
                <div class="relative flex h-[120px] flex-col items-center justify-center gap-3 rounded-[70px] bg-[#F8F8F8] p-5 lg:h-[260px]">
                  <p class="text-lg leading-tight text-neutral-900">
                    {card.text}
                  </p>
                </div>
              )
            }
          </For>
        </div>
      </Match>
    </Switch>
  );
}
