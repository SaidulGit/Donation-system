const DonationCard = ({card}) => {
  const {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color} = card || {}
  return (
    <div>

<div ClassName="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div ClassName="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
      src={picture}
      alt="ui/ux review check"
    />
  </div>
  <div ClassName="p-6">
    <h4 ClassName="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      <button className=""> {category}</button>
    </h4>
    <p ClassName="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
      {title}
    </p>
  </div>
</div>
    </div>
  )
}

export default DonationCard