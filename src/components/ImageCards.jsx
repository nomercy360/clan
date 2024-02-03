import { createSignal, For, Match, Show, Switch } from 'solid-js';

export default function ImageCards() {
  const [activeIndex, setActiveIndex] = createSignal(0);
  const [isMobile, setIsMobile] = createSignal(window.innerWidth < 768);

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 768);
  });

  const cards = [
    {
      title: 'Omut jewelry',
      text: 'How we transformed the unprofitable brand into a recognizable and organized production with controllable sales',
      imgPath: '/omut.png',
      link: '/omut',
      available: true,
    },
    {
      title: 'Vereja',
      text: 'Shooting and art-direction',
      available: false,
      imgPath: '/vereja.png',
      link: '/vereja',
    },
    {
      title: 'Mirstores',
      text: "How we've cut the cost of website development using no-code and found hidden costs within the economy",
      imgPath: '/mirstores.png',
      link: '/mirstores',
      available: false,
    },
    {
      title: 'Beaded breakfast',
      text: 'Why costume jewellery is a highly scalable business model and how to utilise it to support your main brand',
      imgPath: '/beaded_breakfast.png',
      link: '/beaded_breakfast',
      available: false,
    },
  ];

  return (
    <Switch>
      <Match when={isMobile()}>
        <div
          class="relative mt-8 flex h-[600px] w-full flex-col items-center justify-end gap-3 rounded-[170px] bg-[#F8F8F8] p-5"
          onClick={() =>
            setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length)
          }
        >
          <p class="z-10 text-center text-base text-white">
            {cards[activeIndex()].title}
          </p>
          <p class="z-10 text-center text-sm text-[#9C9C9C]">
            {cards[activeIndex()].text}
          </p>
          <img
            src={cards[activeIndex()].imgPath}
            alt=""
            class="absolute left-0 top-0 h-full w-full rounded-[170px] object-cover"
          />
          <div class="z-10 my-10 flex items-center justify-center gap-2">
            <For each={cards}>
              {(card, index) => (
                <div
                  class={`h-2 w-2 rounded-full ${
                    index() === activeIndex() ? 'bg-white' : 'bg-white/20'
                  }`}
                />
              )}
            </For>
          </div>
        </div>
      </Match>

      <Match when={!isMobile()}>
        <div class="mt-8 grid w-full grid-cols-2 gap-4 lg:grid-cols-5">
          <For each={cards}>
            {(card, index) =>
              card.imgPath ? (
                <div class="relative flex h-[120px] flex-col items-center justify-center gap-3 rounded-[70px] bg-[#F8F8F8] p-5 lg:h-[260px]">
                  <img
                    src={card.imgPath}
                    alt=""
                    class="absolute left-0 top-0 h-full w-full rounded-[70px] object-cover"
                  />
                  <p class="relative z-10 text-lg text-white">{card.text}</p>
                </div>
              ) : (
                <div class="relative flex h-[120px] flex-col items-center justify-center gap-3 rounded-[70px] bg-[#F8F8F8] p-5 lg:h-[260px]">
                  <p class="text-lg text-neutral-900">{card.text}</p>
                </div>
              )
            }
          </For>
        </div>
      </Match>
    </Switch>
  );
}
