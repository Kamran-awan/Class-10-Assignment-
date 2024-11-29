import Image from "next/image"
function ProductCard(){
    return(
        <div className="flex flex-wrap justify-center gap-2 mr-2 ml-2 mt-2 ">
            {/*Product O1*/}
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full border border-black">
            <div className="flex justify-center">
            <Image 
            src={"/pic 01.jpg"}
            alt="smart watch"
            width={300}
            height={300}
            />
            </div>
            <h1 className="text-center">Smart Watch</h1>
            <p className="text-center mt-1">Price 1099</p>
            <div className="flex justify-center">
            <button className="bg-red-600 rounded-md py-2 px-6 text-white mb-1 mt-1">Buy Now</button>
            </div>
        </div>
        
        {/*Product O2*/}
        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full border border-black">
            <div className="flex justify-center">
            <Image 
            src={"/pic 01.jpg"}
            alt="smart watch"
            width={300}
            height={300}
            />
            </div>
            <h1 className="text-center">Smart Watch</h1>
            <p className="text-center mt-1">Price 1099</p>
            <div className="flex justify-center">
            <button className="bg-red-600 rounded-md py-2 px-6 text-white mb-1 mt-1">Buy Now</button>
            </div>
        </div>
        {/*Product O3*/}
        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full border border-black">
            <div className="flex justify-center">
            <Image 
            src={"/pic 01.jpg"}
            alt="smart watch"
            width={300}
            height={300}
            />
            </div>
            <h1 className="text-center">Smart Watch</h1>
            <p className="text-center mt-1">Price 1099</p>
            <div className="flex justify-center">
            <button className="bg-red-600 rounded-md py-2 px-6 text-white mb-1 mt-1">Buy Now</button>
            </div>
        </div>
        </div>
        

        

        
        

    )
}
export default ProductCard