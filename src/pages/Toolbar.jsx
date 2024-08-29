import { IonButton, IonCol, IonHeader, IonImg, IonRow, IonSearchbar, IonToolbar } from '@ionic/react'
import React from 'react'
import '../theme/Main.css'

export const Toolbar = ({ setWeatherData }) => {
	const API_KEY = '0267660d34394efb8a3130802232609'
	let cityInput = ''

	const handleCityChange = e => {
		const newCity = e.target.value
		cityInput = newCity
		console.log(cityInput)
	}
	async function getData(value) {
		if (value === '') return
		const data = await fetch(`
        http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${value}&days=7&aqi=yes&alerts=yes
        `)
		const result = await data.json()

		setWeatherData(result.forecast.forecastday)
		console.log('result', result.forecast.forecastday)
	}

	return (
		<IonHeader>
			<IonToolbar className="borderRadius5">
				<IonRow class="ion-align-items-center ion-justify-content-evenly ">
					<IonCol class="ion-justify-content-evenly" size="auto">
						<IonImg className="logo" src="\public\weatherLogo-removebg.png"></IonImg>
					</IonCol>
					<IonCol size="6.524">
						<IonSearchbar showClearButton="focus" animated="true" id="IonSearchBar" onIonChange={handleCityChange} value={cityInput}></IonSearchbar>
					</IonCol>
					<IonCol>
						<IonButton onClick={() => getData(cityInput)} color="dark" fill="clear">
							Ara
						</IonButton>
					</IonCol>
				</IonRow>
				<IonRow class="ion-justify-content-evenly">
					<IonButton onClick={() => handleDay1} color="danger" fill="clear">
						SAATLİK
					</IonButton>

					<IonButton onClick={() => handleDay7} color="danger" fill="clear">
						GÜNLÜK
					</IonButton>

					<IonButton onClick={() => handleDay10} color="danger" fill="clear">
						HAFTALIK
					</IonButton>
				</IonRow>
			</IonToolbar>
		</IonHeader>
	)
}

export default Toolbar
