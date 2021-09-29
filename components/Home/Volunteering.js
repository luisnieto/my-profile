import Image from "next/image"

const Volunteering = () => {
  const volunteerings = [1,2,3,4,5];

  return (
    <>
      <h2 className="title">Volunteerings</h2>
      <div className="columns is-mobile is-centered is-multiline">
      {
        volunteerings.map(volunteering => (
          <div className="column is-4-tablet is-half-mobile has-text-centered" key={volunteering}>
            <Image src="/images/480x480.png" height="256" width="256"></Image>
          </div>
        ))
      }
      </div>
    </>
   );
}

export default Volunteering;