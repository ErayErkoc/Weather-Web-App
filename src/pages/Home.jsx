import { IonContent, IonPage } from '@ionic/react'
import React, { useState } from 'react'
import WeatherCard from '../components/WeatherCard'
import '../theme/Main.css'
import Toolbar from './Toolbar'

export const Home = () => {
	const [weatherData, setWeatherData] = useState([])

	return (
		<>
			<IonPage>
				<IonContent>
					<Toolbar setWeatherData={setWeatherData} />

					{weatherData.map(item => (
						<WeatherCard key={item.date} date={item.date} mintemp={item.day.mintemp_c} maxtemp={item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon} rain={item.day.daily_chance_of_rain} />
					))}
				</IonContent>
			</IonPage>

			{/* <IonCard className="noMarginX">
				<IonCardHeader>
					<IonCardTitle>{date}</IonCardTitle>
					<IonCardSubtitle>{condition}</IonCardSubtitle>
				</IonCardHeader>
				<IonCardContent>
					<IonList>
						<IonItem>
							<IonThumbnail slot="start">
								<img src={icon} />
							</IonThumbnail>
							<IonLabel>{mintemp}</IonLabel>
							<IonLabel>{maxtemp}</IonLabel>
						</IonItem>

						<IonItem>
							<IonThumbnail slot="start">
								<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
							</IonThumbnail>
							<IonLabel>Hava Durumu</IonLabel>
							<IonLabel>En düşük Sıcaklık</IonLabel>
							<IonLabel>En yüksek Sıcaklık</IonLabel>
						</IonItem>

						<IonItem>
							<IonThumbnail slot="start">
								<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
							</IonThumbnail>
							<IonLabel>Hava Durumu</IonLabel>
							<IonLabel>En düşük Sıcaklık</IonLabel>
							<IonLabel>En yüksek Sıcaklık</IonLabel>
						</IonItem>

						<IonItem lines="none">
							<IonThumbnail slot="start">
								<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
							</IonThumbnail>
							<IonLabel>Hava Durumu</IonLabel>
							<IonLabel>En düşük Sıcaklık</IonLabel>
							<IonLabel>En yüksek Sıcaklık</IonLabel>
						</IonItem>
					</IonList>
				</IonCardContent>
			</IonCard> */}
		</>
	)
}

export default Home
