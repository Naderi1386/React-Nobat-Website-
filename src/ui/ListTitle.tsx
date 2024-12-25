interface ListTitlePropType{
    text:string
}
const ListTitle = ({text}:ListTitlePropType) => {
  return (
    <div className="max-w-[720px] h-[1px] bg-greyLine-300 mx-auto mb-10 relative">
        <p className="absolute text-[0.95rem] w-[155px] text-center  mx-auto  left-0 right-0 top-[-.85rem] bg-white  text-greyLine-300">{text}</p>
    </div>
  )
}

export default ListTitle