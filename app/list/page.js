import Image from 'next/image'
import food0 from '@/public/food0.jpeg'
import food1 from '@/public/food1.jpeg'
import food2 from '@/public/food2.jpeg'
import food3 from '@/public/food3.jpeg'

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  let array = ['FriedGaji', 'Strawberry', 'Banana', 'Potato']
  // Import images into an array
  let images = [food0, food1, food2, food3]
  return (
    <div>
      <a href="/list/detail">디테일</a>
      <div
        style={{
          backgroundColor: 'white',
          width: '400px',
          height: '100px',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h4>{상품[0]} $20</h4>
      </div>
      <div
        style={{
          backgroundColor: 'white',
          width: '400px',
          height: '100px',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h4>{상품[1]} $40</h4>
      </div>
      <div
        style={{
          backgroundColor: 'white',
          width: '400px',
          height: '100px',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h4>{상품[2]} $20</h4>
      </div>
      {array.map((goods, i) => (
        <div
          style={{
            backgroundColor: 'white',
            width: '400px',
            height: '500px',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          key={i}
        >
          <h4>
            <Image src={images[i]} alt={goods} className="food-img" />
            {i}
            {goods} $20
          </h4>
        </div>
      ))}
    </div>
  )
}
