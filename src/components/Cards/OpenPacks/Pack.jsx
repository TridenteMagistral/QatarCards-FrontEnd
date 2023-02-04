import "./pack.css"
export default function Pack({ pack }) {
  return (
    <div className="containerPack mb-4 pt-3 mx-2 ">
      <p>{pack.name}</p>
      <img className="imgPack" src={pack.img} alt="" />
      <p>{pack.price}</p>
      <p>{pack.description}</p>
    </div>
  )
}
