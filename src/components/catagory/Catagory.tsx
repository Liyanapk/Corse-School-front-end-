import './Catagory.css'



export default function Catagory(){

  const categories = [
    "Healthcare",
    "Beauty & Fashion",
    "Education & Travel",
    "Kitchen",
    "Medicle & Entertain",
    "Medicle & Science",
    "Tour & Travel",
    "Kitchen",
    "Featured",
    "Popular",
    "Latest",

  ];

  return (
    <div className='catagory-container'>
      <button className="catagory-title">Histudy Feature Category</button>
      <div className="tagContainer">
        {categories.map((category, index) => (
          <div key={index} className="tag">
            {category}
          </div>
        ))}
      </div>
    </div>
  );

}