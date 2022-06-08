const Navbar = () => {
   return (
        <nav className=" font-semibold text-gray-600">
            <ul className="flex p-4 justify-center">
                <p className="mt-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-900 to-blue-500  p-1">Desolve Exploiters</p>

                <div className="flex m-auto gap-8">
                    <li className="font-semibold hidden md:flex"><a href="/reported">view reported players</a></li>
                    <li className="font-semibold hidden md:flex"><a href="/submit">submit an exploiter</a></li>
                </div>
                <div className="flex gap-4 font-semibold">
                    <button className="text-gray-800  text-white rounded gap-4 p-1 font-semibold">Sign Up</button>
                    <button className="font-semibold bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded p-1">Log In</button>
                </div>
             
            </ul>
            <hr />
        </nav>
        
   );
}

export default Navbar;



