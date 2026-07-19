import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import type { Branch } from '../../types/branch'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'
import L from 'leaflet'

interface BranchMapProps {
    branches: Branch[];
    selectedBranch: Branch | null;
}

export default function BranchMap({ branches,selectedBranch }: BranchMapProps) {
   function FitMapToBranches({
    branches,
    selectedBranch,
}: BranchMapProps) {
    const map = useMap();

    useEffect(() => {

        // Priority: if a branch was selected from the list
        if (selectedBranch) {
            map.flyTo(
                [
                    Number(selectedBranch.latitude),
                    Number(selectedBranch.longitude),
                ],
                15
            );

            return;
        }

        // No branches
        if (branches.length === 0) {
            return;
        }

        // One branch
        if (branches.length === 1) {
            map.setView(
                [
                    Number(branches[0].latitude),
                    Number(branches[0].longitude),
                ],
                15
            );

            return;
        }

        // Multiple branches
        const bounds = L.latLngBounds(
            branches.map(branch => [
                Number(branch.latitude),
                Number(branch.longitude),
            ])
        );

        map.fitBounds(bounds, {
            padding: [50, 50],
        });

    }, [branches, selectedBranch, map]);

    return null;
}

    return (
            <MapContainer
                center={[12.8797, 121.774]}
                zoom={6}
                scrollWheelZoom={true}
                className="h-72 md:h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden"
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FitMapToBranches
                    branches={branches}
                    selectedBranch={selectedBranch}
                />

                {branches.map((branch) => (
                    <Marker
                        key={branch.id}
                        position={[
                            Number(branch.latitude),
                            Number(branch.longitude),
                        ]}
                    >
                        <Popup>
                            <div>
                                <h3>{branch.branch_name}</h3>
                                <p>{branch.address}</p>
                                <p>{branch.contact_number}</p>
                                <p>{branch.business_hours}</p>
                            </div>
                        </Popup>
                        
                    </Marker>
                ))}
                
            </MapContainer>
            
    )
}