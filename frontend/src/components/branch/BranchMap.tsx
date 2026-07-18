import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { Link } from 'react-router-dom'
import type { Branch } from '../../types/branch'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'
import L from 'leaflet'

interface BranchMapProps {
    branches: Branch[]
}

export default function BranchMap({ branches }: BranchMapProps) {
   function FitMapToBranches({ branches }: BranchMapProps) {
    const map = useMap()

    useEffect(() => {
        if (branches.length === 0) {
            return
        }

        // If only one branch matches, zoom directly to it.
        if (branches.length === 1) {
            map.setView(
                [
                    Number(branches[0].latitude),
                    Number(branches[0].longitude),
                ],
                15
            )

            return
        }

        // If multiple branches match, fit all markers on screen.
        const bounds = L.latLngBounds(
            branches.map((branch) => [
                Number(branch.latitude),
                Number(branch.longitude),
            ])
        )

        map.fitBounds(bounds, {
            padding: [50, 50],
        })
    }, [branches, map])

    return null
}

    return (
            <MapContainer
                center={[12.8797, 121.774]}
                zoom={6}
                scrollWheelZoom={true}
                className="h-[500px] w-full rounded-2xl"
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FitMapToBranches branches={branches} />

                {branches.map((branch) => (
                    <Marker
                        key={branch.id}
                        position={[
                            Number(branch.latitude),
                            Number(branch.longitude),
                        ]}
                    >
                        <Popup>
                            <strong>{branch.branch_name}</strong>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
    )
}