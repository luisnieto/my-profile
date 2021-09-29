import Image from 'next/image'

const Resume = () => {
  return (
  <div>
    <h1 className="title">Resume</h1>
    <div className="columns is-tablet is-centered">
      <div className="column is-3-tablet has-text-centered">
        <Image src={"/images/Chimu y yo.jpeg"} height="400" width="300"></Image>
      </div>
      <div className="column">
        <p className="pb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor quam elementum eleifend condimentum. Nulla vitae fringilla velit. Donec et imperdiet metus, eu cursus enim. Etiam aliquet sodales turpis ut vestibulum. Suspendisse vestibulum ullamcorper tortor, non dapibus odio laoreet sit amet. Nullam pretium a lacus id congue. Vivamus ac cursus est. Sed vitae malesuada purus.
        </p>
        <p>
          Suspendisse vitae arcu nec velit molestie lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum ante quam, vel luctus lorem commodo et. Nullam interdum nisi eget urna pretium, vitae aliquet felis bibendum. Proin faucibus, magna eu porta lacinia, nisi dui hendrerit leo, et ultricies elit leo quis augue. Donec sit amet vulputate odio. Suspendisse vel ornare diam. Donec ut quam ut sem cursus auctor. Donec ac vulputate turpis, fringilla placerat eros. Suspendisse vitae diam massa. Aenean gravida ut eros at vulputate. Sed faucibus dapibus purus, non aliquet nisi aliquam quis. Proin interdum elit sed viverra molestie. Vivamus ut massa imperdiet velit sollicitudin viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sit amet pellentesque dui.
        </p>
      </div>
    </div>
  </div>
  );
}

export default Resume;