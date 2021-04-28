class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler);
    addressForm.addEventListener("click", this.findAddressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        "Location feature is not available in your browser - please use a more modern browser or manually address an address"
      );
      return;
    }
    //getCurrentPostion takes 2 callback arguments
    navigator.geolocation.getCurrentPosition(
      (successResult) => {
          console.log(successResult);
          const coordinates = {
              lat: successResult.coords.latitude,
              lng: successResult.coords.longitude
          }
          console.log(coordinates);
      },
      (error) => {
        alert(
          "Could not locate you unfortunately. Please enter an address manually!"
        );
      }
    );
  }

  findAddressHandler() {
    //
  }
}

new PlaceFinder();