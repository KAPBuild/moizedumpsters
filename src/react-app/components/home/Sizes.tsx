import { DUMPSTER_SIZES } from '../../constants/services';

export const Sizes = () => {
  return (
    <section id="sizes" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">Dumpster Sizes</h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Choose the perfect dumpster size for your project
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {DUMPSTER_SIZES.map((size, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
              <img
                src={size.image || '/images/ROll-OFF.png'}
                alt={size.size}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{size.size}</h3>
                <p className="text-xs text-neutral-500 mb-2">{size.dimensions}</p>
                <p className="text-sm text-neutral-600 leading-relaxed flex-grow mb-4">{size.capacity}</p>
                <a
                  href={`#quote`}
                  className="inline-block font-bold text-accent hover:text-accent/80 transition-colors text-sm"
                >
                  Get Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
