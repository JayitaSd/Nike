import {star} from "../assets/icons"
const PopularProductCard = ({imgURL, name, price} ) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL}
      alt={name}
      className="w-[280px] h-[280px]"/>
      <div className="mt-8 flex justify-start gap-2.5">
        <img 
          src={star}
          alt="rating"
          width={24}
          height={24}
        />
        <p className="font-montserrat text-slate-gray text-2xl leading-normal">(4.5)</p>
      </div>
      <h3 className="font-montserrat font-semibold text-3xl mt-2 leading-normal">
        {name}
      </h3>
      <p className="mt-2 leading-normal text-2xl font-medium">{price}</p>
    </div>
  )
}

export default PopularProductCard;
