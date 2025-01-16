import React from 'react'

const Contact = () => {
  return (
    <footer className="bg-white text-center p-12 relative">
            <p className="text-black text-sm">&copy; 2025</p>
            <p className="text-black text-lg mt-4">HAVE A PROJECT IN MIND?</p>
            <h1 className="text-gray-200 text-6xl font-bold mt-4">LET'S TALK</h1>
            <div className="flex justify-center gap-4 mt-8">
               
                <a href="https://www.linkedin.com/in/collins-munene-90b410240" target="_blank" rel="noopener noreferrer" className="border-2 border-black rounded-full px-6 py-2 text-black font-bold hover:bg-black hover:text-white transition">LINKEDIN</a>
                <a href="mailto:collinsmunene398@gmail.com" target="_blank" rel="noopener noreferrer" className="border-2 border-black rounded-full px-6 py-2 text-black font-bold hover:bg-black hover:text-white transition">collinsmunene398@gmail.com</a>
            </div>
            <div className="text-gray-500 text-sm mt-8">
                <p>Design by <a href="#" className="text-black font-bold">Munene C</a> | Development by <a href="#" className="text-black font-bold">Munene C</a></p>
            </div>
            <button
                className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full hidden md:block hover:bg-gray-800 transition"
                id="backToTop"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ↑
            </button>
            
        </footer>
  )
}

export default Contact