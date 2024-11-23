
const OurBestsellers = ()=>{


    return(
        
        <div className="flex flex-col px-[100px]">

            <div className="flex justify-between ">
                <h1 className="text-[32px]">Our bestsellers</h1>

                <div className="flex justify-between mb-[100px] h-[45px]">

                    <button className="text-gray-500 px-[13px] rounded-[50%] mr-2">
                        <svg width="20" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Arrow left icon</title><path fillRule="evenodd" clipRule="evenodd" d="M10.9423 3.72468C11.1863 3.96876 11.1863 4.36449 10.9423 4.60857L6.17588 9.37496H16.3337C16.6788 9.37496 16.9587 9.65478 16.9587 9.99996C16.9587 10.3451 16.6788 10.625 16.3337 10.625H6.17588L10.9423 15.3914C11.1863 15.6354 11.1863 16.0312 10.9423 16.2752C10.6982 16.5193 10.3025 16.5193 10.0584 16.2752L4.22505 10.4419C3.98097 10.1978 3.98097 9.8021 4.22505 9.55802L10.0584 3.72468C10.3025 3.48061 10.6982 3.48061 10.9423 3.72468Z" fill="currentColor"></path></svg>
                    </button>

                    <button className="bg-gray-200 px-[13px] rounded-[50%]">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Arrow right icon</title><path fillRule="evenodd" clipRule="evenodd" d="M10.0584 3.72468C10.3025 3.48061 10.6982 3.48061 10.9423 3.72468L16.7756 9.55802C17.0197 9.8021 17.0197 10.1978 16.7756 10.4419L10.9423 16.2752C10.6982 16.5193 10.3025 16.5193 10.0584 16.2752C9.81431 16.0312 9.81431 15.6354 10.0584 15.3914L14.8248 10.625H4.66699C4.32181 10.625 4.04199 10.3451 4.04199 9.99996C4.04199 9.65478 4.32181 9.37496 4.66699 9.37496H14.8248L10.0584 4.60857C9.81431 4.36449 9.81431 3.96876 10.0584 3.72468Z" fill="currentColor"></path></svg>
                    </button>

                </div>
            </div>

            
        </div>
       
    )
}

export default OurBestsellers