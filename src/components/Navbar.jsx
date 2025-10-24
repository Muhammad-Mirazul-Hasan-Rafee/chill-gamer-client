import Logo from '../assets/Logo.png';
import styles from '../styles';
const Navbar = () => {
  return (
    <div className={`${styles.paddingX} flex justify-between`}>
      <div className='flex items-center gap-x-2'>
        <img className='w-9 h-9 rounded-full' src={Logo} alt="" />
        <strong className='text-[16px] hidden sm:block'>Chill Gamer</strong>
      </div>




      <div className="flex justify-center items-center text-[16px] gap-x-2">
        <h3 className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-[16px] w-[130px] h-10 bg-slate-800'>Home</h3>
        <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-[16px] w-[130px] h-10'>All Reviews</button>
        <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-[16px] w-[130px] h-10 bg-slate-800'>Add Review</button>
        <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-[16px] w-[130px] h-10 bg-slate-800'>My Reviews</button>
        <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-[16px] w-[150px] h-10 bg-slate-800'>Game WatchList</button>
      </div>

      <div className="flex justify-between gap-x-2 "> 
       <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-[16px] w-20 h-10 bg-slate-800">Log In</button>
       
       <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-[16px] w-20 h-10 bg-slate-800">Sign Up</button>
      </div>

    </div>
  );
};

export default Navbar;













