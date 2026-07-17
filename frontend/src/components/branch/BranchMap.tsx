import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Link } from 'react-router-dom'
import type { Branch } from '../../types/branch'
import 'leaflet/dist/leaflet.css'

interface BranchMapProps {
    branches: Branch[]
}

export default function BranchMap({ branches }: BranchMapProps) {
    return (
        <MapContainer
            center={[12.8797, 121.774]}
            zoom={6}
            scrollWheelZoom={true}
            className="h-[500px] w-full rounded-2xl"
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
                            <strong>{branch.branch_name}</strong>

                            <p>
                                {branch.address}, {branch.city}
                            </p>

                            <Link to={`/branches/${branch.slug}`}>
                                View Branch
                            </Link>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}