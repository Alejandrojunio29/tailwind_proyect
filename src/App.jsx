function App() {
return (
    <main className='grid grid-rows-2 bg-[#1e1e20]  h-screen text-white  '>
     <section className="grid grid-cols-2 ">
      <div className="grid grid-rows-4 justify-center border-purple-500">
        <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-600 to-purple-400">Vite</h1>
        <h1 className="font-extrabold text-4xl ">Next Generation <br />Frontend Tooling</h1>
        <h3 className="font-bold">Get ready for a development environment that can finally catch up with you</h3>
        <div id="buttons" className="">
        <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get Started</button>
        <button className="bg-[#252529] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Why Vite?</button>
        <button className=" bg-[#252529] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View on GitHub</button>
        </div>
         </div>    
      <div className="flex justify-center items-center ">
        
      
        <img className="h-70 w-80 z-10  "  src="https://vitejs.dev/logo-with-shadow.png" alt="" />
        
        </div>    
      </section>

      <section  className="grid ">
        <div id="cards_container" className="ml-2 mr-4 mt-6 flex justify-center  ">
        <div id="cards" className="grid grid-rows-2 grid-cols-3 gap-4 " > 

        <article id="card_1" className="bg-[#252529]  h-40 w-80 text-white grid grid-rows-3 rounded-lg">
        <a className="ml-2" href="">👑</a>
        <h3 className="ml-2">Instant Server Start</h3>
        <h4 className="ml-2"> On demand file serving over native ESM, no bundling required</h4>
        </article>

        <article id="card_1" className="bg-[#252529] h-40 w-80 text-white grid grid-rows-3 rounded-lg">
        <a className="ml-2" href="">👑</a>
        <h3 className="ml-2">Instant Server Start</h3>
        <h4 className="ml-2"> On demand file serving over native ESM, no bundling required</h4>
        </article>

        <article id="card_1" className="bg-[#252529] h-40 w-80 text-white grid grid-rows-3 rounded-lg">
        <a className="ml-2" href="">👑</a>
        <h3 className="ml-2">Instant Server Start</h3>
        <h4 className="ml-2"> On demand file serving over native ESM, no bundling required</h4>
        </article>

        <article id="card_1" className="bg-[#252529] h-40 w-80 text-white grid grid-rows-3 rounded-lg">
        <a className="ml-2" href="">👑</a>
        <h3 className="ml-2">Instant Server Start</h3>
        <h4 className="ml-2"> On demand file serving over native ESM, no bundling required</h4>
        </article>

        <article id="card_1" className="bg-[#252529] h-40 w-80 text-white grid grid-rows-3 rounded-lg">
        <a className="ml-2" href="">👑</a>
        <h3 className="ml-2">Instant Server Start</h3>
        <h4 className="ml-2"> On demand file serving over native ESM, no bundling required</h4>
        </article>

        <article id="card_1" className="bg-[#252529] h-40 w-80 text-white grid grid-rows-3 rounded-lg">
        <a className="ml-2" href="">👑</a>
        <h3 className="ml-2">Instant Server Start</h3>
        <h4 className="ml-2"> On demand file serving over native ESM, no bundling required</h4>
        </article>

       
        

        
        
        
      

        </div>  
        </div>
        
      </section>
    </main>
  );
}

export default App;
