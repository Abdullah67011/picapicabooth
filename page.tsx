import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between animated-gradient text-white">
      {/* Navigation Bar */}
      <nav className="w-full p-4 fixed top-0 left-0 z-50 bg-black bg-opacity-20 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight fade-in" style={{ animationDelay: '0.2s' }}>PhotoFun Booth</h1>
          {/* <div className="space-x-4">
            <a href="#features" className="hover:text-pink-300 transition-colors fade-in" style={{ animationDelay: '0.4s' }}>Features</a>
            <a href="#gallery" className="hover:text-pink-300 transition-colors fade-in" style={{ animationDelay: '0.6s' }}>Gallery</a>
          </div> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center p-8 pt-20">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 fade-in" style={{ animationDelay: '0.5s' }}>
          Capture Your Fun Moments, <span className="block">Instantly!</span>
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-gray-200 fade-in" style={{ animationDelay: '0.8s' }}>
          Create awesome photo strips with cool filters and share them with your friends.
        </p>
        
        {/* Interactive Photo Element Placeholder - simple version for now */}
        <div className="my-8 fade-in" style={{ animationDelay: '1.1s' }}>
          <div className="bg-white p-2 shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300">
            <Image src="/placeholder-photostrip.png" alt="Sample Photo Strip" width={200} height={600} className="rounded" />
          </div>
        </div>

        <button 
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out pulse-animation fade-in" 
          style={{ animationDelay: '1.4s' }}
        >
          Start Creating!
        </button>
      </section>

      {/* Features/How It Works Section */}
      <section id="features" className="w-full py-20 bg-black bg-opacity-30">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-16 slide-in-bottom">So Easy, So Fun!</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 slide-in-bottom" style={{ animationDelay: '0.2s' }}>
              {/* Placeholder for icon */}
              <div className="text-5xl mb-4 text-pink-400">📸</div> 
              <h4 className="text-2xl font-semibold mb-3">1. Snap or Upload</h4>
              <p className="text-gray-300">
                Use your webcam to take new photos or upload your favorite existing ones.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 slide-in-bottom" style={{ animationDelay: '0.4s' }}>
              {/* Placeholder for icon */}
              <div className="text-5xl mb-4 text-teal-400">🎨</div>
              <h4 className="text-2xl font-semibold mb-3">2. Add Filters & Effects</h4>
              <p className="text-gray-300">
                Choose from a variety of fun filters, stickers, and cool effects to personalize your strip.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 slide-in-bottom" style={{ animationDelay: '0.6s' }}>
              {/* Placeholder for icon */}
              <div className="text-5xl mb-4 text-purple-400">🖼️</div>
              <h4 className="text-2xl font-semibold mb-3">3. Share Your Strip</h4>
              <p className="text-gray-300">
                Download your photo strip or share it directly with friends and family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Gallery Section (Simplified) */}
      <section id="gallery" className="w-full py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-16 slide-in-bottom">Get Inspired!</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-1 shadow-lg rounded-md transform hover:scale-105 transition-transform duration-300 slide-in-bottom" style={{ animationDelay: `${0.1 * i}s` }}>
                <Image src={`/placeholder-gallery-${i}.png`} alt={`Gallery Image ${i}`} width={300} height={400} className="rounded-sm w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="w-full py-24 bg-black bg-opacity-40">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-8 slide-in-bottom">Ready to Make Some Memories?</h3>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out pulse-animation slide-in-bottom" style={{ animationDelay: '0.3s' }}>
            Try PhotoFun Booth Now!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center bg-black bg-opacity-60">
        <p className="text-gray-400 slide-in-bottom" style={{ animationDelay: '0.2s' }}>
          &copy; {new Date().getFullYear()} PhotoFun Booth. All Rights Reserved.
        </p>
        <p className="text-sm text-gray-500 slide-in-bottom" style={{ animationDelay: '0.4s' }}>
          Designed by Manus AI
        </p>
      </footer>
    </main>
  );
}

