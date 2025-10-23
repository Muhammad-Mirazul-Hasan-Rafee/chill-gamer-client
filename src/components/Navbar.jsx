import Logo from '../assets/Logo.png';
const Navbar = () => {
  return (
    <div className="flex justify-between border border-amber-700">
      <div>
        <img className='w-20 h-20 rounded-full' src={Logo} alt="" />
      </div>


      <div className="flex text-2xl m-4 p-4 gap-x-8 border border-red-800">
        <h3 className="text-2xl">Home</h3>
        <h3>All Reviews</h3>
        <h3>Add Review</h3>
        <h3>My Reviews</h3>
        <h3>Game WatchList</h3>
      </div>

      <div className="flex text-2xl"> 
        <h3>Sign Up</h3>
        <p> OR </p>
        <h3>Log In</h3>
      </div>

    </div>
  );
};

export default Navbar;
