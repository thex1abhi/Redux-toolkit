
const ResultCard = ({ item }) => {

  const addToCollection = (item) => {
    const oldData = JSON.parse(localStorage.getItem("collection")) || []
  

    const newData = [...oldData, item]
   
    localStorage.setItem('collection', JSON.stringify(newData))

  }
  return (
    <>

      <div className="w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden " >
        <a target="_blank" className="h-full  " href={item.url} >
          {item.type == 'photo' ? <img className="h-full w-full object-cover object-center" src={item.src} alt="error" /> : ''}
          {item.type == 'videos' ? <video className="h-full w-full object-cover object-center" autoPlay loop muted src={item.src}></video> : ''}
        </a>
        <div id='bottom' className=" flex justify-between items-center  w-full py-6 px-6 text-white absolute bottom-0" >  <h2 className="text-lg h-14 overflow-hidden font-semibold capitalize" > {item.title} </h2>
          <button onClick={() => {
            addToCollection(item)
          }} className="bg-indigo-900 px-3 py-2 active:scale-95 cursor-pointer text-white rounded font-medium" >Save </button>
        </div>
      </div>
    </>
  )
};

export default ResultCard; 
