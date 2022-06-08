import Image from '../components/Image';


const Hero = () => {
    return (
        <div className="grid md:grid-cols-2 text-center gap-8 md:py-0 py-20 px-10">
            <div className="flex text-2xl font-semibold flex-col justify-center md:pl-16 p-4">
            <h1>Sick of exploiters ruining clan events?</h1>
            <h3 className="text-xl">so are we..</h3>
            <p className="text-lg font-normal">Use our online system to report players, and quickly scan clans for reported players...</p>
            </div>
            <div className="flex gap-4 font-semibold justify-center md:hidden">
                    <button className="text-white-800 bg-gradient-to-r from-pink-500 to-blue-500  text-white rounded  p-2 font-semibold"><a href="/reported">view reported players</a></button>
                    <button className="font-semibold bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded p-2">submit a report</button>
                </div>
                <hr className='md:hidden'/>
            <div className='justify-center hidden md:flex'>
                <Image />
            </div>
        </div>
    );

    
}

export default Hero;
