import { useState } from "react"
import { getImage } from "../../../utils"

const items = [
    {
        id: 1,
        title: "Home",
        img: getImage("home.svg")
    },
    {
        id: 2,
        title: "Assets",
        img: getImage("colorfilter.svg")
    },
    {
        id: 3,
        title: "Activities",
        img: getImage("clock.svg")
    },
]

function SwitchButtons() {
    const [selected, setSelected] = useState(1)
    return (
        <div className='border flex transition-all ease-in-out hover:bg-[#FAFAFA14] border-[#FAFAFA14] p-2 rounded-full mt-2'>
            {
                items.map((item, i) => {
                    return <div key={i} onClick={() => setSelected(item.id)} className={`border cursor-pointer ${selected !== i+1 ?"bg-[#1A1A1A]": "bg-[#333331]"} ${i !== 0 && "-ml-2"} flex gap-2 items-center border-[#FAFAFA29] rounded-full px-1.5 py-1`}>
                        <img src={item.img} alt="" />
                        {selected == i+1 && <p className="text-white font-semibold">{item.title}</p>}
                    </div>
                })
            }

        </div>
    )
}

export default SwitchButtons