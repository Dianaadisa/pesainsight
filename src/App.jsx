import video1 from "./assets/video1.mp4";
import customer1 from "./assets/pesainsight1.jpg";
import customer2 from "./assets/pesainsight2.webp";
import customer3 from "./assets/pesainsight3.avif";

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">

      {/* HERO SECTION */}
      <section className="h-[75vh] bg-green-500 flex items-center px-12">

        <div className="w-1/2 flex items-center justify-center">
          <video
            src={video1}
            autoPlay
            loop
            muted
            playsInline
            className="w-[70%] object-contain"
          />
        </div>

        <div className="w-1/2">
          <h1 className="text-6xl font-bold text-white mb-4">
            PesaInsight
          </h1>

          <p className="text-xl text-white/90 max-w-lg mb-8">
            Turn your M-Pesa transactions into clear business insights.
            Track income, expenses and profit automatically.
          </p>

          <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Get Started
          </button>
        </div>

      </section>

      {/* WAVE */}
      <div className="-mt-1">
        <svg viewBox="0 0 1440 120" className="w-full block" preserveAspectRatio="none">
          <path
            fill="#22c55e"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,69.3L1440,85L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* TESTIMONIALS */}
      <section className="flex-1 bg-white flex flex-col items-center justify-center py-12">

        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Loved by Business Owners
        </h2>

        <div className="flex gap-8">

          <div className="flex flex-col items-center max-w-xs">
            <img src={customer1} className="w-28 h-28 rounded-full object-cover border-4 border-green-500 shadow-lg" />
            <p className="text-center text-gray-600 mt-4">
              "PesaInsight helped me understand where my money was going every month."
            </p>
          </div>

          <div className="flex flex-col items-center max-w-xs">
            <img src={customer2} className="w-28 h-28 rounded-full object-cover border-4 border-green-500 shadow-lg" />
            <p className="text-center text-gray-600 mt-4">
              "Tracking my M-Pesa sales has never been this simple and accurate."
            </p>
          </div>

          <div className="flex flex-col items-center max-w-xs">
            <img src={customer3} className="w-28 h-28 rounded-full object-cover border-4 border-green-500 shadow-lg" />
            <p className="text-center text-gray-600 mt-4">
              "I can finally see my profits clearly without using spreadsheets."
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;