/* eslint-disable @next/next/no-img-element */
export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.png"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <div id="wd-your-image">
        <img
          id="wd-disneyland"
          width="400px"
          alt="Sleeping Beauty's castle"
          src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Sleeping_Beauty_Castle_-_February_2024.png"
        />
      </div>
      <div id="wd-ai-image">
        <img
          id="wd-blue-marble"
          width="400px"
          alt="Blue Marble composite satellite image of Earth from NASA"
          src="https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57723/globe_west_2048.jpg"
        />
      </div>
    </div>
  );
}