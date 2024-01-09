import { createEffect, createSignal, For, Match, Show, Switch } from 'solid-js';

export default function Cards() {

  const [activeIndex, setActiveIndex] = createSignal(0);
  const [isMobile, setIsMobile] = createSignal(window.innerWidth < 768);

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 768);
  });

  const cardTexts = [
    {
      title: 'Financial management',
      text: 'In the first months, we are developing a simple financial model which allows us to manage budgets, and understand the most profitable products. Then we are developing a more complex model, that optimise production, sales, and allows us to plan growth years ahead.',
      icon: <BoxIcon isActive={true} />,
    },
    {
      title: 'Marketing and engineering',
      text: 'We design and develop websites and crm platforms',
      icon: <DotsIcon isActive={true} />,
    },
    {
      title: 'Assortment management',
      text: 'Understanding most valuable and sellable products, we are developing assortment. Sometimes it includes',
      icon: <ShapeIcon isActive={true} />,
    },
    {
      title: 'Sales and distribution',
      text: 'We are developing sales and distribution channels, and managing them. We are also developing sales strategies, and sales teams.',
      icon: <TriangleIcon isActive={true} />,
    },
  ];

  return (
    <Switch>
      <Match when={isMobile()}>
        <div
          class='card flex flex-col gap-3 bg-[#F8F8F8] p-5 rounded-[20px] transition-opacity duration-500 ease-in-out mt-8 h-[390px]'
          onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % cardTexts.length)}
        >
          <div class='flex flex-col items-start gap-4'>
            <div class='flex flex-row gap-2 items-center'>
              <BoxIcon isActive={0 === activeIndex()} />
              <DotsIcon isActive={1 === activeIndex()} />
              <ShapeIcon isActive={2 === activeIndex()} />
              <TriangleIcon isActive={3 === activeIndex()} />
            </div>
            <div>
              <p class='text-neutral-950 text-xl font-medium leading-tight'>{cardTexts[activeIndex()].title}</p>
              <p class='text-gray text-lg mt-2 leading-tight'>{cardTexts[activeIndex()].text}</p>
            </div>
          </div>
        </div>
      </Match>

      <Match when={!isMobile()}>
        <div class='grid grid-cols-4 gap-4 h-[390px] mt-8 w-full'>
          <For each={cardTexts}>{(card, index) => (
            <div
              class='card flex flex-col gap-3 bg-[#F8F8F8] p-5 rounded-[20px] transition-opacity duration-500 ease-in-out'>
              {card.icon}
              <div>
                <p class='text-neutral-950 text-xl font-medium leading-tight'>{card.title}</p>
                <p class='text-gray text-lg mt-2 leading-tight font-medium'>{card.text}</p>
              </div>
            </div>
          )}</For>
        </div>
      </Match>
    </Switch>
  );
}

const BoxIcon = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='1' y='1' width='22' height='22' rx='4' fill={props.isActive ? '#7C2DF2' : '#E5E5E5'} />
    </svg>
  );
};


const DotsIcon = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <circle cx='6' cy='6' r='6' fill={props.isActive ? '#FFD203' : '#E5E5E5'} />
      <circle cx='6' cy='18' r='6' fill={props.isActive ? '#FFD203' : '#E5E5E5'} />
      <circle cx='18' cy='18' r='6' fill={props.isActive ? '#FFD203' : '#E5E5E5'} />
      <circle cx='18' cy='6' r='6' fill={props.isActive ? '#FFD203' : '#E5E5E5'} />
    </svg>
  );
};

const ShapeIcon = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'
         xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_1057_2768)'>
        <path
          d='M5.92305 14.9551C3.27703 13.4116 3.27704 9.5884 5.92306 8.04488L17.9845 1.00903C20.6511 -0.546503 24 1.37698 24 4.46415L24 18.5359C24 21.623 20.6511 23.5465 17.9845 21.991L5.92305 14.9551Z'
          fill={props.isActive ? '#EE5C0A' : '#E5E5E5'} />
        <path
          d='M18.0769 8.04489C20.723 9.5884 20.723 13.4116 18.0769 14.9551L6.01548 21.991C3.34885 23.5465 -1.23236e-07 21.623 -2.21366e-07 18.5359L-6.68656e-07 4.46415C-7.66786e-07 1.37698 3.34886 -0.546499 6.01548 1.00903L18.0769 8.04489Z'
          fill={props.isActive ? '#EE5C0A' : '#E5E5E5'} />
      </g>
      <defs>
        <clipPath id='clip0_1057_2768'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

const TriangleIcon = (props) => {
  return (
    <svg width='26' height='24' viewBox='0 0 26 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clip-path='url(#clip0_1059_2791)'>
        <path
          d='M9.06421 2.76326C10.6156 0.160941 14.3844 0.160935 15.9358 2.76326L24.3943 16.9517C25.9838 19.618 24.0626 23 20.9585 23L4.04148 23C0.93736 23 -0.983815 19.618 0.605693 16.9517L9.06421 2.76326Z'
          fill={props.isActive ? '#0067EC' : '#E5E5E5'} />
      </g>
      <defs>
        <clipPath id='clip0_1059_2791'>
          <rect width='26' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};