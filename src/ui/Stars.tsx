
interface StarsPropType{
  rating:number
}
const STAR_IMG_URL =
  "https://nobat.ir/public/ui_v2_0/images/uiv2/gold-star-16.png";
const Stars = ({rating}:StarsPropType) => {
  const rate=Math.trunc(rating)
  
  const count:number[]=[]
  for(let i:number=1;i<=rate;i++){
    count.push(i)
  }
  
  return (
    <div className="flex gap-[0.10rem] pb-[3.5px]">
    {count.map((star,index)=><img key={index} src={STAR_IMG_URL} alt={`star#${star}`}/>)}
    </div>
  )
}

export default Stars