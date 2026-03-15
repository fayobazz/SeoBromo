const About = () => {
  return (
    <>

      {/* Inline styles for animations */}
      <style>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="flex justify-center items-center min-h-screen">

        <div style={{ transform: "scale(1.2)", transformOrigin: "top center" }}>
          <div className="w-full flex justify-center items-center h-screen">
            <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg lg:space-x-8">
              <div
                className="lg:w-1/2"
                style={{
                  animation: "slideInLeft 1s ease forwards",
                  opacity: 0,
                }}
              >
                <div
                  className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                  style={{
                    backgroundImage: "url('assets/images/hero/1.png')",
                  }}
                ></div>
              </div>
              <div
                className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg"
                style={{
                  animation: "slideInRight 1s ease forwards",
                  opacity: 0,
                  animationDelay: "0.3s",
                }}
              >
                <h2 className="text-3xl text-gray-800 font-bold">
                  Featured
                  <span className="text-indigo-600"> Product</span>
                </h2>
                <p className="mt-4 text-gray-600">
                  Bromochem is a perfume company operating mainly from india and is
                  working closely with international partners to make our products
                  accesiabe for the inetrnational markets please use the button below
                  to read more.
                </p>

              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default About;
