import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react'

const WeatherCard = ({ date, mintemp, maxtemp, condition, icon, rain }) => {
	return (
		<IonCard className="noMarginX">
			<IonCardHeader>
				<IonCardTitle>{condition}</IonCardTitle>
				<IonCardSubtitle>{date}</IonCardSubtitle>
			</IonCardHeader>
			<IonCardContent>
				<IonList>
					<IonItem>
						<IonThumbnail slot="start">
							<img src={icon} />
						</IonThumbnail>
						<IonLabel>Min: {mintemp}°C</IonLabel>
						<IonLabel>Max: {maxtemp}°C</IonLabel>
						<IonLabel>Yağış: %{rain}</IonLabel>
					</IonItem>
					<IonItem>
						<IonThumbnail slot="start"></IonThumbnail>
					</IonItem>

					{/* <IonItem>
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
					</IonItem> */}
				</IonList>
			</IonCardContent>
		</IonCard>
	)
}

export default WeatherCard
