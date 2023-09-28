import DonationCard from "./DonationCard";

const Cards = ({cards}) => {

  return (
    <div>

        <div className="py-10 w-5/6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto mt-10">
            {
                cards?.map(card=> <DonationCard key={card.id} card={card} ></DonationCard>)
            }
        </div>
    </div>
  )
}

export default Cards