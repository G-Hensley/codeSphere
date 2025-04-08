

export default function Home() {

  return (
  <div className="bg-[url('/door.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center ">
    
    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4">
   
      <h1 className="text-5xl text-white font-bold">CodeSphere</h1>
      <h3 className="font-bold mb-5 tedt-white">Where Devs Build in Public - Together</h3>
      <p className="text-white max-w-md">Join our supportive community where developers collaborate, share progress, and grow together</p>
      <button className="w-sm bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white font-bold py-2 px-4 rounded-full mt-5">Join the Sphere</button>
    </div>

  </div>
  
  );
}
