import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Owner details component
const OwnerDetails = () => (
  <div className="w-full h-auto pt-6 px-4 sm:px-6 md:px-8 lg:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-8 text-sm mb-8 md:mb-12">
      <div>
        <p className="mb-2 py-2 md:py-4">
          <span className="text-[#8E8E8E] block">Owner's Name</span>
          Kingsley Alhaji
        </p>
        <p className="mb-2 py-2 md:py-4">
          <span className="text-[#8E8E8E] block">Email address</span>
          alhajis@gmail.com
        </p>
      </div>
      <div>
        <p className="mb-2 py-2 md:py-4">
          <span className="text-[#8E8E8E] block">Phone number</span>
          0909839839
        </p>
        <p className="mb-2 py-2 md:py-4">
          <span className="text-[#8E8E8E] block">Date sold</span>
          29-01-2024
        </p>
      </div>
    </div>
  </div>
);

let propertyData = [
  {
    id: 1,
    name: "Cocoa Land",
    type: "Apartment",
    description:
      "Spacious and well-lit apartment for rent. Enjoy amenities, e.g. pool, gym, parking, etc. Conveniently located near the GRA.",
    location: "Iyana-Ipaja, Lagos.",
    amount: "₦5,000,000.00",
    dateCreated: "29-01-2024",
    lastModified: "29-01-2024",
    status: "Sold",
    features: ["Pool", "Electric Fence", "Big Kitchen"],
    image: "/Frame 1618873004.png",
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = propertyData.find((p) => p.id === Number(id));

  const [activeTab, setActiveTab] = React.useState("property");

  const handleEdit = () => {
    navigate(`/edit/${property.id}`);
  };

  const handleRemove = () => {
    if (window.confirm("Are you sure you want to remove this property?")) {
      propertyData = propertyData.filter((p) => p.id !== property.id);
      navigate("/properties");
    }
  };

  if (!property) {
    return (
      <div className="p-6 md:p-8 bg-white min-h-screen">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Back
        </button>
        <h2 className="text-xl font-semibold">Property Not Found</h2>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1000px] lg:relative left-[119px] mx-auto h-auto pt-6 md:pt-8 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#EEF2F1] flex flex-col gap-6 md:gap-8">
      {/* Property Title & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">{property.name}</h2>

        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full sm:w-auto">
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white rounded-full shadow-sm text-xs sm:text-sm font-medium hover:bg-gray-100 border border-gray-200 text-[#00644C] justify-center"
          >
            <img
              src={activeTab === "property" ? "/edit.svg" : "/export.svg"}
              alt="Action Icon"
              className="w-4 h-4 md:w-[18px] md:h-[18px]"
            />
            Edit Property
          </button>

          <button
            onClick={handleRemove}
            className="px-3 md:px-4 py-2 bg-[#FF00001A] text-[#B30000] rounded-full text-xs sm:text-sm font-medium hover:bg-red-100"
          >
            Remove Property
          </button>
        </div>
      </div>

      {/* Image + Details */}
      <div className="rounded-2xl overflow-hidden shadow-sm">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] object-cover"
        />
        <div className="bg-white p-4 sm:p-5 md:p-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
            <button
              onClick={() => setActiveTab("property")}
              className={`px-3 sm:px-4 md:px-5 py-2 rounded-full text-sm font-medium ${
                activeTab === "property"
                  ? "bg-[#E5FAF9] text-[#009773]"
                  : "bg-[#E8E8E8] text-[#606060] hover:bg-gray-200"
              }`}
            >
              About Property
            </button>
            <button
              onClick={() => setActiveTab("owner")}
              className={`px-3 sm:px-4 md:px-5 py-2 rounded-full text-sm font-medium ${
                activeTab === "owner"
                  ? "bg-[#E5FAF9] text-[#009773]"
                  : "bg-[#E8E8E8] text-[#606060] hover:bg-gray-200"
              }`}
            >
              Owner
            </button>
          </div>

          {/* Conditional rendering */}
          {activeTab === "property" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-8 text-sm">
              <div>
                <p className="mb-2 py-2 md:py-4">
                  <span className="text-[#8E8E8E] block">Name</span>
                  {property.name}
                </p>
                <p className="mb-2 py-2 md:py-4">
                  <span className="text-[#8E8E8E] block">Property type</span>
                  {property.type}
                </p>
                <p className="mb-2 py-2 md:py-4">
                  <span className="text-[#8E8E8E] block">Description</span>
                  {property.description}
                </p>
                <p className="mb-2 py-2 md:py-4">
                  <span className="text-[#8E8E8E] block">Status</span>
                  <span
                    className={`font-semibold ${
                      property.status === "Sold"
                        ? "text-[#008000]"
                        : "text-[#ecc94b]"
                    }`}
                  >
                    {property.status}
                  </span>
                </p>
                <p>
                  <span className="text-gray-500 block">Features</span>
                  <div className="flex gap-2 flex-wrap mt-1">
                    {property.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#F8F8F8] rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </p>
              </div>

              <div>
                <p className="mb-2 py-2 md:py-4">
                  <span className="text-[#8E8E8E] block">Location</span>
                  {property.location}
                </p>
                <p className="mb-2 py-2 md:py-4">
                  <span className="text-[#8E8E8E] block">Amount</span>
                  {property.amount}
                </p>
                <p className="mb-2 py-2 md:py-4">
                  <span className="text-[#8E8E8E] block">Date created</span>
                  {property.dateCreated}
                </p>
                <p>
                  <span className="text-[#8E8E8E] block">Last modified</span>
                  {property.lastModified}
                </p>
              </div>
            </div>
          ) : (
            <OwnerDetails />
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
