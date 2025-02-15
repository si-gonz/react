import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Generation | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        
                    <a href="#" className='hover:scale-105  hover:text-indigo-950 transition-transform  duration-300'><LinkedinLogo size={48} weight='bold' /></a>

                    <a href="#" className='hover:scale-105  hover:text-indigo-950 transition-transform  duration-300'><InstagramLogo size={48} weight='bold' /></a>

                    <a href="#" className='hover:scale-105  hover:text-indigo-950 transition-transform  duration-300'><FacebookLogo size={48} weight='bold' /></a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer