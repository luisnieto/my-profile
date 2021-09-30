import Image from "next/image"

const Hobbies = () => {
  const hobbies = [1,2,3];

  return (
    <>
      <h2 className="title">Hobbies</h2>
      <div className="columns is-mobile is-centered is-multiline">
      {
        hobbies.map(hobby => (
          <div className="column is-4-tablet is-half-mobile has-text-centered" key={hobby}>
            <Image src="/images/480x480.png" height="256" width="256"></Image>
          </div>
        ))
      }
      </div>
    </>
   );
}

export default Hobbies;