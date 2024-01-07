import { createSignal, Match, Show, Switch } from 'solid-js';

export default function SignIn() {
  const [email, setEmail] = createSignal('');
  const [contactName, setContactName] = createSignal('');
  const [brandInfo, setBrandInfo] = createSignal('');

  const [isOpened, setIsOpened] = createSignal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.clan.team/leads', {
        email: email(),
        contactName: contactName(),
        brandInfo: brandInfo(),
      });
      // Handle success
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div class='w-full z-50'>
      <Show when={!isOpened()}>
        <nav class='flex flex-row justify-between w-full pt-6 px-5'>
          <h1 class='text-white md:text-[44x] text-[28px] leading-[48px] font-medium'>CLAN™</h1>
          <button
            class='bg-white h-[44px] backdrop-blur-md text-black font-medium px-4 rounded-[50px]'
            onClick={() => setIsOpened(true)}
          >
            Sign In
          </button>
        </nav>
      </Show>
      <Show when={isOpened()}>
        <div class='fixed inset-0 z-[999] bg-black flex flex-col justify-start items-start'>
          <nav class='flex flex-row justify-between w-full pt-6 px-5'>
            <h1 class='text-white md:text-[44x] text-[28px] leading-[48px] font-medium'>CLAN™</h1>
            <button
              class='bg-white h-[44px] backdrop-blur-md text-black font-medium px-4 rounded-[50px]'
              onClick={() => setIsOpened(false)}
            >
              Close
            </button>
          </nav>
          <div class='p-5 mt-5 flex flex-col h-full justify-between w-full sm:w-1/2'>
            <div>
              <p class='text-3xl sm:text-4xl text-white leading-tight max-w-md mb-10'>
                submit an application. We’ll contact you within 2-3 business days
              </p>
              <form onSubmit={handleSubmit}>
                <div class='mb-4'>
                  <input
                    type='text'
                    class='text-base sm:text-2xl rounded-[52px] bg-[#111] appearance-none w-full h-[60px] sm:h-[72px] px-7 text-white leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#595959]'
                    id='email'
                    placeholder='E-mail, Telegram, or WhatsApp number'
                    onInput={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class='mb-4'>
                  <input
                    type='text'
                    class='text-base sm:text-2xl rounded-[52px] bg-[#111] appearance-none w-full h-[60px] sm:h-[72px] px-7 text-white leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#595959]'
                    id='contactName'
                    placeholder='Contact name'
                    onInput={(e) => setContactName(e.target.value)}
                  />
                </div>
                <div class='mb-4'>
                  <input
                    type='text'
                    class='text-base sm:text-2xl rounded-[52px] bg-[#111] appearance-none w-full h-[60px] sm:h-[72px] px-7 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#595959]'
                    id='brandInfo'
                    placeholder='Brand’s instagram or website'
                    onInput={(e) => setBrandInfo(e.target.value)}
                  />
                </div>
                <button
                  class='text-base sm:text-2xl w-full bg-white text-black font-medium h-[60px] sm:h-[64px] px-4 rounded-[52px] focus:outline-none focus:shadow-outline'
                  type='submit'
                >
                  Send application
                </button>
              </form>
            </div>
            <p class='text-[#313131] text-base sm:text-lg'>All of the information we are asking stays between us. By sending this form, we all agree for
              non-disclosure agreement, terms of service, and privacy policy.</p>
          </div>
        </div>
      </Show>
    </div>
  );
};

