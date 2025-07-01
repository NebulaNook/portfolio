import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Details() {
  const email = "kaushal98211@gmail.com";
  const phoneNumber = "+977-9821160895";
  const address = "Bharatpur-16, Chitwan";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="px-4 py-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {/* Address */}
        <div
          onClick={() => window.open(googleMapsUrl, "_blank")}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") window.open(googleMapsUrl, "_blank");
          }}
          className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-md bg-red-100 cursor-pointer hover:bg-red-200 transition"
        >
          <FaMapMarkerAlt className="text-red-600 text-3xl mb-2" />
          <h1 className="text-lg font-bold">Address</h1>
          <h3 className="text-sm text-gray-700">{address}</h3>
        </div>

        {/* Phone */}
        <div
          onClick={() => (window.location.href = `tel:${phoneNumber}`)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") window.location.href = `tel:${phoneNumber}`;
          }}
          className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-md bg-green-100 cursor-pointer hover:bg-green-200 transition"
        >
          <FaPhoneAlt className="text-green-600 text-3xl mb-2" />
          <h1 className="text-lg font-bold">Phone</h1>
          <h3 className="text-sm text-gray-700">{phoneNumber}</h3>
        </div>

        {/* Email */}
        <div
          onClick={() => (window.location.href = `mailto:${email}`)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") window.location.href = `mailto:${email}`;
          }}
          className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-md bg-blue-100 cursor-pointer hover:bg-blue-200 transition"
        >
          <FaEnvelope className="text-blue-600 text-3xl mb-2" />
          <h1 className="text-lg font-bold">Email</h1>
          <h3 className="text-sm text-gray-700">{email}</h3>
        </div>
      </div>
    </section>
  );
}
