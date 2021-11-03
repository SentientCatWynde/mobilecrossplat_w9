import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Geolocation } from '@capacitor/geolocation';
import './Home.css';

function Home() {
  const API_KEY = 'AIzaSyDBqFcFzjQdQvURn1F2dwXhdxAZtqVQzJo';
  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });

    console.log('Current position: ', coordinates);
    console.log("Lat: ", coordinates.coords.latitude);
    console.log("Lng: ", coordinates.coords.longitude);
  };

  const containerStyle = {
    width : '100%',
    height: '100%'
  };

  const trackPosition = async () => {
    const data = await Geolocation.watchPosition({ 
      enableHighAccuracy: true, 
      timeout: 1000}, (position, err ) => {
        if(position) { console.log(position);
        }
      });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick = {getCurrentPosition}> Current Position </IonButton>
        <IonButton onClick = {trackPosition}> Track Position </IonButton>
        <ExploreContainer />
        <LoadScript googleMapsApiKey = {API_KEY}>
          <GoogleMap
            mapContainerStyle = { containerStyle }
            center = {{  lat: -6.257377926995551, lng: 106.61829861017398 }}
            zoom = {18}          
          >
            <></>
            <Marker position = {{ lat: -6.257377926995551, lng: 106.61829861017398 }} />
          </GoogleMap>

        </LoadScript>
        <LoadScript googleMapsApiKey = {API_KEY}>
          <GoogleMap
            mapContainerStyle = { containerStyle }
            center = {{  lat: -6.257377926995551, lng: 106.61829861017398 }}
            zoom = {18}          
          >
            <></>
            <InfoWindow position = {{ -6.257377926995551, lng: 106.61829861017398 }}>
          
            <div>
              <h1>
                Kampus paling keren
              </h1>
            </div>
          </GoogleMap>

        </LoadScript>
      </IonContent>
    </IonPage>
  );
}

export default Home;
