import { createSignal } from 'solid-js';

export default function SignIn() {
  const [email, setEmail] = createSignal('');
  const [contactName, setContactName] = createSignal('');
  const [brandInfo, setBrandInfo] = createSignal('');

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

  return (
    <form onSubmit={handleSubmit} class="mt-16 w-full max-w-sm">
      <div class="mb-4">
        <input
          type="text"
          class="focus:shadow-outline h-12 w-full appearance-none rounded-[52px] bg-[#F8F8F8] px-7 text-sm leading-tight text-black placeholder:text-[#B0AEAE] focus:outline-none sm:h-16 sm:text-base"
          id="email"
          placeholder="E-mail, Telegram, or WhatsApp number"
          onInput={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="mb-4">
        <input
          type="text"
          class="focus:shadow-outline h-12 w-full appearance-none rounded-[52px] bg-[#F8F8F8] px-7 text-sm leading-tight text-black placeholder:text-[#B0AEAE] focus:outline-none sm:h-16 sm:text-base"
          id="contactName"
          placeholder="Contact name"
          onInput={(e) => setContactName(e.target.value)}
        />
      </div>
      <div class="mb-4">
        <input
          type="text"
          class="focus:shadow-outline mb-3 h-12 w-full appearance-none rounded-[52px] bg-[#F8F8F8] px-7 text-sm leading-tight text-black placeholder:text-[#B0AEAE] focus:outline-none sm:h-16 sm:text-base"
          id="brandInfo"
          placeholder="Brand’s instagram or website"
          onInput={(e) => setBrandInfo(e.target.value)}
        />
      </div>
      <button
        class="focus:shadow-outline flex h-12 w-full flex-row items-center justify-center gap-3 rounded-[52px] bg-black px-4 text-sm text-white focus:outline-none sm:h-16 sm:text-base"
        type="submit"
      >
        Send application
        <svg
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.86902 0.0149994C6.57902 0.775 7.26902 1.48 7.93902 2.13C8.61902 2.77 9.35402 3.44 10.144 4.14L10.504 4.455L10.309 4.62C9.48902 5.34 8.71402 6.05 7.98402 6.75C7.26402 7.45 6.55902 8.165 5.86902 8.895L5.01402 8.04L7.05402 6.165C7.49402 5.785 7.95902 5.405 8.44902 5.025C7.82902 5.045 7.22402 5.055 6.63402 5.055H0.604023V3.855H6.63402C7.21402 3.855 7.81402 3.875 8.43402 3.915C7.95402 3.525 7.49402 3.135 7.05402 2.745L5.01402 0.869999L5.86902 0.0149994Z"
            fill="white"
          />
        </svg>
      </button>
    </form>
  );
}
