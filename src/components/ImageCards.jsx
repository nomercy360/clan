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
      text: 'How a simple rearrangement of assortment can increase sales, and why high-fashion is flawed',
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
          <p class="z-10 text-center text-[17px] text-white">
            {cards[activeIndex()].title}
          </p>
          <p class="z-10 text-center text-[15px] text-[#9C9C9C]">
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
        <div class="mt-8 grid w-full min-w-[1400px] grid-cols-2 gap-4 lg:grid-cols-4">
          <For each={cards}>
            {(card, index) => (
              <div class="relative flex h-[600px] flex-col items-center justify-between gap-3 rounded-[220px] p-5">
                <img
                  src={card.imgPath}
                  alt=""
                  class="absolute left-0 top-0 h-full w-full rounded-[220px] object-cover"
                />
                <div class="z-10 flex h-5 flex-row items-center justify-center rounded-[48px] bg-[#F6F6F6] px-1.5 text-[10px] text-black">
                  {card.available ? 'Read now' : 'Soon'}
                </div>
                <div class="mb-20">
                  <p class="relative z-10 text-[19px] text-white">
                    {card.title}
                  </p>
                  <p class="relative z-10 text-[15px] text-[#9C9C9C]">
                    {card.text}
                  </p>
                </div>
              </div>
            )}
          </For>
        </div>
      </Match>
    </Switch>
  );
}
