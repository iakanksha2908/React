import React from 'react'
function Card({channel}) {

    console.log(channel)
    return (
        <>
            <div className='relative h-[400px] w-[300px] rounded-md'>

                <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/8652113/pexels-photo-8652113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale 
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption>
                        <div>
                            {channel}
                        </div>
                        <div>
                            Staff Engineer, Algolia
                        </div>
                    </figcaption>
                </div>
            </div>
        </>
    )
}

export default Card