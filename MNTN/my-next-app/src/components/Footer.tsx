
const Footer=()=>{
    return(
        <div  className="flex justify-between text-[18px] font-semibold text-white p-[20px]">

            <div className="flex flex-col gap-[20px]">
                <img className="w-[108px] h-[38px]" src='/LogoMNTN.svg'></img>
                <div className="text-[18px] font-bold w-[303px] h-[64px]">Get out there & discover your next slope, mountain & destination!</div>
            </div>

            <div className="flex flex justify-between">
              <div className="flex flex-col gap-[20px] w-[193px] h-[280px]">
                  <div className="text-CustomLightText text-[24px]">More on The Blog</div>
                  <div>About MNTN</div>
                  <div>Contributors & Writers</div>
                  <div>Write For Us</div>
                  <div>Contact Us</div>
                  <div>Privacy Policy</div>
              </div>

              <div className="flex flex-col gap-[20px] w-[193px] h-[280px]">
                  <div className="text-CustomLightText text-[24px]">More on MNTN</div>
                  <div>The Team</div>
                  <div>Jobs</div>
                  <div>Press</div>
              </div>

            </div>
            
        </div>
    )
}

export default Footer