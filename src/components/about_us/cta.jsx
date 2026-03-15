import React from "react";

const CallToAction = () => {
  return (
    <section
      className="bg-gray-50 flex justify-center items-center min-h-screen"
      aria-labelledby="cta-heading"
    >
      <div className="w-full max-w-[90rem] p-6 lg:px-8">
        <div className="relative overflow-hidden bg-[#0a0a2a] px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
       <h2
  id="cta-heading"
  className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
>
  Want to Partner Up?
</h2>


          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Partner up with us to bring the best fragrances to your customers. We
            offer a wide range of raw materials that can be used for perfumes and personal care products that can
            enhance your business offerings.
          </p>

          <form
            className="mx-auto mt-10 flex max-w-md gap-x-4"
            aria-label="Newsletter sign-up form"
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
              aria-required="true"
            />

            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Notify me
            </button>
          </form>

          {/* Removed the decorative SVG background entirely */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;