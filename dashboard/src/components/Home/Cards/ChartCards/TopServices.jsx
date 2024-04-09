
const TopServices = () => {
    const services = [
        {company: 'Google', quantity: 13},
        {company: 'Microsoft', quantity: 5},
        {company: 'Accenture', quantity: 35},
        {company: 'JP Morgan Chase', quantity: 18},
    ];
  return (
    <div className='w-1/5 flex-1 bg-[#F5F5F5] p-2 rounded-xl'>
        <div className='w-full h-full flex flex-col'>
            <div className='p-2'>
                <h1>Top services by units sold</h1>
            </div>
            <div className=' flex-1 flex flex-col gap-3 pt-5'>
                {
                    services.map((service)=>{
                        return (
                            <div key={service.company} className='flex justify-between p-2'>
                                <h1>{service.company}</h1>
                                <h1>{service.quantity}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default TopServices