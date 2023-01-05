import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker, MarkerClusterer } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getDetails
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import ContactForm from "./ContactForm";
import { FaCheckCircle } from "react-icons/fa";
const placeInfo = ["places"];

export default function Places() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: placeInfo,
  });

  if (isLoaded){
    return <Map />
  }
  else{
    return <div>Loading...</div>
  }
}

function Map() {
  const [selected, setSelected] = useState(null);
  const center = useMemo(
    () => ({ lat: 23.16343554776073, lng: 89.22011894216806 }),
    []
  );




  return (
    <>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
      >
        {/* <div className=" absolute xl:top-[10px] lg:top-[60px] lg:left-[160px] xl:left-[30%] md:right-0 md:top-5 sm:left-[41%] sm:top-16 translate-x-[-50%] w-[300px] z-10">
          <PlacesAutocomplete setSelected={setSelected} />
        </div> */}
        <Marker position={center ? center :{ lat: 23.16343554776073, lng: 89.22011894216806 }}></Marker>
      </GoogleMap>
      <ContactForm />
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    console.log(results);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="w-full py-2 px-4 outline-none border-2 border-primary rounded bg-black text-gray-200"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
