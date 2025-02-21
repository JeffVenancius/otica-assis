import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import Oslo from './pages/Oslo';
import P12 from './pages/P12'
import OnDesign from './pages/OnDesign'
import Adventure from './pages/Adventure'
import AnaHickmann from './pages/AnaHickmann'
import ArmaniExchange from './pages/ArmaniExchange'
import Arnette from './pages/Arnette'
import Bulget from './pages/Bulget'
import EmporioArmani from './pages/EmporioArmani'
import HarleyDavidson from './pages/HarleyDavidson'
import HB from './pages/HB'
import Kipling from './pages/Kipling'
import MichaelKors from './pages/MichaelKors'
import Nike from './pages/Nike'
import RayBan from './pages/RayBan'
import Speedo from './pages/Speedo'
import VictorHugo from './pages/VictorHugo'
import Vogue from './pages/Vogue'
import LentesCosmeticas from './pages/LentesCosmeticas'

import DefaultHome from './pages/DefaultHome'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			children: [
			{
				path: "/",
				element: <DefaultHome />
			},
			{
				path: "lentes-cosmeticas",
				element: <LentesCosmeticas/>
			},
			{
				path: "oslo",
				element: <Oslo/>
			},
			{
				path: "p12",
				element: <P12 />
			},
			{
				path: "on-design",
				element: <OnDesign />
			},
			{
				path: "adventure",
				element: <Adventure />
			},
			{
				path: "ana-hickmann",
				element: <AnaHickmann />
			},
			{
				path: "armani-exchange",
				element: <ArmaniExchange />
			},
			{
				path: "arnette",
				element: <Arnette />
			},
			{
				path: "bulget",
				element: <Bulget />
			},
			{
				path: "emporio-armani",
				element: <EmporioArmani />
			},
			{
				path: "harley-davidson",
				element: <HarleyDavidson />
			},
			{
				path: "hb",
				element: <HB />
			},
			{
				path: "kipling",
				element: <Kipling />
			},
			{
				path: "michael-kors",
				element: <MichaelKors />
			},
			{
				path: "nike",
				element: <Nike />
			},
			{
				path: "ray-ban",
				element: <RayBan />
			},
			{
				path: "speedo",
				element: <Speedo />
			},
			{
				path: "victor-hugo",
				element: <VictorHugo />
			},
			{
				path: "vogue",
				element: <Vogue />
			},
			]
		},
	])

root.render(
		<RouterProvider router={router}/>
);
