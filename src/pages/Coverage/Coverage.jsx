import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FiSearch } from "react-icons/fi";
import { useLoaderData } from "react-router";
import { useRef } from "react";
const Coverage = () => {
  const serviceCenter = useLoaderData();
  const mafRef = useRef(null);
  // console.log(serviceCenter);
  const position = [23.6850, 90.3563];

  const handleSubmitedForm = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenter.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
    if (district) {
      const coord = [district.latitude, district.longitude];
      // Go to the Location
      mafRef.current.flyTo(coord, 13)
    }
  }
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-10 pt-28 pb-16 md:pb-24">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[72%] bg-gray-50 rounded-2xl px-6 sm:px-10 py-14 md:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
          We are available in 64 districts
        </h1>
        <form onSubmit={handleSubmitedForm} className="flex items-center gap-4 w-full max-w-md">
          <div className="flex items-center gap-2 w-full bg-white rounded-full px-4 py-3 shadow-sm border border-gray-200">
            <FiSearch className="text-gray-500 text-xl" />
            <input
              type="text"
              name="location"
              placeholder="Search here"
              className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>

          <button className="bg-lime-300 hover:bg-lime-400 transition px-6 py-3 rounded-full font-medium text-gray-900 shadow-sm">
            Search
          </button>
        </form>
        <div className="w-full border-t border-gray-300 my-10"></div>

        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          We deliver almost all over Bangladesh
        </h2>

        <div className="w-full overflow-hidden rounded-xl">
          <MapContainer className="h-80" center={position} zoom={10} scrollWheelZoom={false} ref={mafRef} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              serviceCenter.map((center, i) => <Marker key={i} position={[center.latitude, center.longitude]}>
              <Popup><strong>{center.district}</strong> - Service Area : {center.covered_area.join(', ')}</Popup>
            </Marker>)
            }
            
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
