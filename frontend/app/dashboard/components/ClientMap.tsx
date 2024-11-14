// components/ClientMap.tsx
"use client";

import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const apiKey = "AIzaSyDxBKTnulvpJiQnT0vSNJbh96wOnfGLI7o";

const ClientMap: React.FC = () => {
    const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
    const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => console.error("Error getting location:", error),
                { enableHighAccuracy: true }
            );
        }
    }, []);

    if (!isLoaded || !userLocation) return <p>Loading Map...</p>;

    return (
        <GoogleMap
            mapContainerStyle={{ width: "100%", height: "400px" }}
            zoom={15}
            center={userLocation}
        >
            <Marker position={userLocation} />
        </GoogleMap>
    );
};

export default ClientMap;
