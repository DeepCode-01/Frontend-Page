import LoginSignup from "./_components/loginSignup";


export default function Home() {
  return (
    <main className="bg-[#25313c] h-screen flex items-center justify-center p-10">
      <div className="grid box-animate w-full h-full grid-cols-1 bg-white  md:grid-cols-2">
     
           <LoginSignup/>
      
      </div>
    </main>
  );
}
