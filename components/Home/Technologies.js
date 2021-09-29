import Image from "next/image"

const Techonologies = () => {
  const technolologies = [1,2,3,4,5];

  return (
    <>
      <h2 className="title">Technologies</h2>
      <div className="columns is-mobile is-centered is-multiline">
      {
        technolologies.map(technology => (
          <div className="column is-4-tablet is-half-mobile has-text-centered" key={technology}>
            <Image src="/images/480x480.png" height="256" width="256"></Image>
          </div>
        ))
      }
      </div>
    </>
   );
}

export default Techonologies;