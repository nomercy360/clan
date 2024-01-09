import { createEffect, createSignal, For, Match, Show, Switch } from 'solid-js';

export default function InfoCards() {

  const [activeIndex, setActiveIndex] = createSignal(0);
  const [isMobile, setIsMobile] = createSignal(window.innerWidth < 768);

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 768);
  });

  const cardTexts = [
    {
      text: 'If you want to test everything out. We’ll take over marketing and sales, quickly increasing your income in first months or even weeks. That will help us to build a strategy and financial model.',
      icon: <IconOne isActive={true} />,
      title: '15% for marketing',
      subtitle: 'no risks for start',
    },
    {
      text: 'When you are ready to build, we’ll take responsibility for the strategy execution, working on every aspect of the brand, marketing, and production. It will gave you significant growth in 6-12 months.',
      icon: <IconTwo isActive={true} />,
      title: '30% for direction and growth',
      subtitle: 'best for long-term and significant results',
    },
  ];


  return (
    <Switch>
      <Match when={isMobile()}>
        <div
          class='card flex flex-col justify-between items-start gap-3 bg-[#F8F8F8] p-5 rounded-[20px] mt-8 h-[390px]'
          onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % cardTexts.length)}
        >
          <div class='flex flex-col items-start gap-4'>
            <div class='flex flex-row gap-2 items-center'>
              <IconOne isActive={0 === activeIndex()} />
              <IconTwo isActive={1 === activeIndex()} />
            </div>
            <div>
              <p class='text-neutral-950 text-xl font-medium leading-tight'>
                {cardTexts[activeIndex()].text}
              </p>
            </div>
          </div>
          <div class='flex flex-col'>
            <p class='text-neutral-950 text-2xl leading-none font-medium'>{cardTexts[activeIndex()].title}</p>
            <p class='text-gray text-xl leading-tight font-medium'>{cardTexts[activeIndex()].subtitle}</p>
          </div>
        </div>
      </Match>

      <Match when={!isMobile()}>
        <div class='grid grid-cols-2 gap-4 h-[390px] mt-8 w-full'>
          <For each={cardTexts}>{(card, index) => (
            <div class='card flex flex-col justify-between items-start bg-[#F8F8F8] p-5 rounded-[20px] '>
              <div
                class='flex flex-col gap-3'>
                {card.icon}
                <div>
                  <p class='text-neutral-950 text-xl font-medium leading-tight'>{card.text}</p>
                </div>
              </div>
              <div class='flex flex-col gap-1'>
                <p class='text-neutral-950 text-2xl leading-tight'>{card.title}</p>
                <p class='text-gray text-xl leading-tight'>{card.subtitle}</p>
              </div>
            </div>
          )}</For>
        </div>
      </Match>
    </Switch>
  );
}

const IconOne = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='12' r='12' fill={props.isActive ? '#008AFF' : '#E5E5E5'} />
      <rect x='11' y='6' width='2' height='12' fill='#F8F8F8' />
    </svg>

  );
};

const IconTwo = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='12' r='12' fill={props.isActive ? '#EE5C0A' : '#E5E5E5'} />
      <rect x='9' y='6' width='2' height='12' fill='#F8F8F8' />
      <rect x='13' y='6' width='2' height='12' fill='#F8F8F8' />
    </svg>
  );
};



