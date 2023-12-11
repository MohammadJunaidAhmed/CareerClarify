import Card from "../Card/Card"

const CardsSection = () => {
  return (
    <div className={`bg-slate-900 flex-1 ml-16`}>
        <div className="w-fit ml-10 mt-3">
            <h1 className="text-white p-3 rounded-xl bg-slate-400">Results for JPMC:</h1>
        </div>
        <div className=" grid grid-cols-4 gap-4 justify-items-center overflow-y-auto">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default CardsSection