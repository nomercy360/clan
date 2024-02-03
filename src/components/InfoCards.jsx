import { createSignal, For, Match, Switch } from 'solid-js';

export default function InfoCards() {
  const [activeIndex, setActiveIndex] = createSignal(0);
  const [isMobile, setIsMobile] = createSignal(window.innerWidth < 768);

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 768);
  });

  const cardTexts = [
    {
      title: 'Ideas and people',
      badges: [
        'Ideas',
        'Branding',
        'Unit economy',
        'Strategy concept',
        'Advertising testing',
      ],
      icon: <FirstIcon />,
      text: 'During the first three months, we focus on conceptualization and ideation, discussing strategies, design, and collaborative brainstorming, all while testing online sales.',
    },

    {
      title: 'Design & creation ',
      icon: <SecondIcon />,
      badges: [
        'Assortment design',
        'Product design',
        'Website',
        'Shooting',
        'Advertising',
      ],
      text: 'From months 3-6, we develop the product by creating photos and videos for the store and promotion, designing and developing the website, advertising, and curating the assortment of items.',
    },
    {
      title: 'Delivery',
      icon: <ThirdIcon />,
      badges: [
        'Launching',
        'Financial modeling',
        'Marketing',
        'Advertising',
        'Delivery',
      ],
      text: 'From months 6-9, we launch the website, increase advertising budgets, and work towards building a better and larger product. During this stage, we also focus on financial modeling, customer acquisition, and retention marketing.',
    },
    {
      title: 'Growth',
      icon: <FourthIcon />,
      badges: [
        'Improvements',
        'Retention',
        'Growth',
        'Automations',
        'Logistics',
        'Partnerships',
      ],
      text: 'Beyond this point, we continually improve by optimizing financials, marketing efforts, logistics, and strategic partnerships.',
    },
  ];

  return (
    <Switch>
      <Match when={isMobile()}>
        <div
          class="mt-8 flex h-[400px] flex-col items-start justify-between gap-3 rounded-[32px] bg-[#F6F6F6] p-5"
          onClick={() =>
            setActiveIndex((prevIndex) => (prevIndex + 1) % cardTexts.length)
          }
        >
          <div class="flex flex-col items-center justify-center gap-2 text-center">
            {cardTexts[activeIndex()].icon}
            <p class="mt-2 text-lg text-neutral-900">
              {cardTexts[activeIndex()].title}
            </p>
            <p class="text-sm text-[#A3A3A3]">
              {cardTexts[activeIndex()].text}
            </p>
          </div>
          <div class="flex flex-col gap-5">
            <div class="flex flex-row flex-wrap items-center justify-center gap-2">
              <For each={cardTexts[activeIndex()].badges}>
                {(badge) => (
                  <div class="flex h-8 flex-col items-center justify-center rounded-[38px] bg-white px-2.5 text-xs text-neutral-400">
                    {badge}
                  </div>
                )}
              </For>
            </div>
            <div class="flex items-center justify-center gap-2">
              <For each={cardTexts}>
                {(card, index) => (
                  <div
                    class={`h-2 w-2 rounded-full ${
                      index() === activeIndex() ? 'bg-black' : 'bg-neutral-400'
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

const FirstIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#141414"></circle>
    <rect x="11" y="6" width="2" height="12" fill="#F8F8F8"></rect>
  </svg>
);

const SecondIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#141414"></circle>
    <rect x="9" y="6" width="2" height="12" fill="#F8F8F8"></rect>
    <rect x="13" y="6" width="2" height="12" fill="#F8F8F8"></rect>
  </svg>
);

const ThirdIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#141414"></circle>
    <rect x="11" y="6" width="2" height="12" fill="#F8F8F8"></rect>
    <rect x="15" y="6" width="2" height="12" fill="#F8F8F8"></rect>
    <rect x="7" y="6" width="2" height="12" fill="#F8F8F8"></rect>
  </svg>
);

const FourthIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#141414"></circle>
    <path
      d="M12.126 10.5874C13.4248 8.83398 14.3062 8.24023 15.5864 8.24023C17.5718 8.24023 18.9355 9.66895 18.9355 11.7656C18.9355 13.8438 17.5811 15.2632 15.5957 15.2632C14.2783 15.2632 13.3413 14.6323 12.126 12.9438C10.9106 14.6323 9.97363 15.2632 8.65625 15.2632C6.6709 15.2632 5.31641 13.8438 5.31641 11.7656C5.31641 9.66895 6.68018 8.24023 8.66553 8.24023C9.9458 8.24023 10.8271 8.83398 12.126 10.5874ZM17.4048 11.7656C17.4048 10.4854 16.6812 9.67822 15.5679 9.67822C14.77 9.67822 14.2041 10.1328 12.9702 11.7656C14.0371 13.3149 14.6865 13.8252 15.5864 13.8252C16.6904 13.8252 17.4048 13.0273 17.4048 11.7656ZM6.84717 11.7656C6.84717 13.0273 7.56152 13.8252 8.66553 13.8252C9.56543 13.8252 10.2148 13.3149 11.2817 11.7656C10.0479 10.1328 9.48193 9.67822 8.68408 9.67822C7.5708 9.67822 6.84717 10.4854 6.84717 11.7656Z"
      fill="#F6F6F6"
    ></path>
  </svg>
);
