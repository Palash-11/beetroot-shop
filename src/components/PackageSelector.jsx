import React from 'react';

export default function PackageSelector({ selectedPackage, setSelectedPackage }) {
  const packages = [
    { id: '1pack', name: '1 pack', label: '' },
    { id: '2packs', name: '2 packs', label: '(Save)' },
    { id: '3packs', name: '3 packs', label: '(Best)' },
  ];

  return (
    <section className="py-6 px-4 bg-white text-center border-t border-gray-200">
      <h3 className="text-base font-bold text-gray-800 mb-3">Packages:</h3>
      <div className="flex justify-center gap-2">
        {packages.map((pkg) => (
          <button
            key={pkg.id}
            type="button"
            onClick={() => setSelectedPackage(pkg.id)}
            className={`px-3 py-2 rounded-md text-xs font-semibold border transition-all ${
              selectedPackage === pkg.id
                ? 'bg-red-600 text-white border-red-600 shadow-md'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
          >
            {pkg.name} <span className="text-[10px]">{pkg.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}