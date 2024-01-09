import { createSignal, Match, Show, Switch } from 'solid-js';

export default function SignIn() {
  const [email, setEmail] = createSignal('');
  const [contactName, setContactName] = createSignal('');
  const [brandInfo, setBrandInfo] = createSignal('');

  const [isOpened, setIsOpened] = createSignal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email(),
          contactName: contactName(),
          brandInfo: brandInfo(),
        }),
      });
      // Handle success
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const onOpenModal = () => {
    setIsOpened(true);
    document.body.style.overflow = 'hidden';
  };

  const onCloseModal = () => {
    setIsOpened(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div class="z-50 w-full">
      <Show when={!isOpened()}>
        <nav class="fixed inset-0 flex h-10 w-full flex-row justify-between px-3 pt-6 sm:px-5">
          <p class="text-[28px] font-medium leading-[48px] text-white mix-blend-difference md:text-[44x]">
            CLAN™
          </p>
          <button
            class="h-[44px] rounded-[50px] bg-white px-4 font-medium text-black"
            onClick={() => onOpenModal()}
          >
            Sign In
          </button>
        </nav>
      </Show>
      <Show when={isOpened()}>
        <div class="fixed inset-0 z-[999] flex flex-col items-start justify-start bg-black">
          <nav class="flex w-full flex-row justify-between px-3 pt-6 sm:px-5">
            <h1 class="text-[28px] font-medium leading-[48px] text-white md:text-[44x]">
              CLAN™
            </h1>
            <button
              class="h-[44px] rounded-[50px] bg-white px-4 font-medium text-black backdrop-blur-md"
              onClick={() => onCloseModal()}
            >
              Close
            </button>
          </nav>
          <div class="mt-5 flex h-full w-full flex-col justify-between p-3 sm:w-1/2 sm:p-5">
            <div>
              <p class="mb-10 max-w-md text-3xl leading-tight text-white sm:text-4xl">
                submit an application. We’ll contact you within 2-3 business
                days
              </p>
              <form onSubmit={handleSubmit}>
                <div class="mb-4">
                  <input
                    type="text"
                    class="focus:shadow-outline h-[60px] w-full appearance-none rounded-[52px] bg-[#111] px-7 text-base leading-tight text-white placeholder:text-[#595959] focus:outline-none sm:h-[72px] sm:text-2xl"
                    id="email"
                    placeholder="E-mail, Telegram, or WhatsApp number"
                    onInput={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    class="focus:shadow-outline h-[60px] w-full appearance-none rounded-[52px] bg-[#111] px-7 text-base leading-tight text-white placeholder:text-[#595959] focus:outline-none sm:h-[72px] sm:text-2xl"
                    id="contactName"
                    placeholder="Contact name"
                    onInput={(e) => setContactName(e.target.value)}
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    class="focus:shadow-outline mb-3 h-[60px] w-full appearance-none rounded-[52px] bg-[#111] px-7 text-base leading-tight text-white placeholder:text-[#595959] focus:outline-none sm:h-[72px] sm:text-2xl"
                    id="brandInfo"
                    placeholder="Brand’s instagram or website"
                    onInput={(e) => setBrandInfo(e.target.value)}
                  />
                </div>
                <button
                  class="focus:shadow-outline h-[60px] w-full rounded-[52px] bg-white px-4 text-base font-medium text-black focus:outline-none sm:h-[64px] sm:text-2xl"
                  type="submit"
                >
                  Send application
                </button>
              </form>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
}
