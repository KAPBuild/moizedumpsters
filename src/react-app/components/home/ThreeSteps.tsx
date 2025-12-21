export const ThreeSteps = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 text-center">
          Rent a Dumpster in 3 Steps
        </h2>
        <p className="text-lg text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
          Simple, straightforward process to get your dumpster rental started
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary text-white font-bold text-3xl flex items-center justify-center mx-auto mb-8">
              1
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Call Us</h3>
            <p className="text-neutral-600 leading-relaxed">
              Contact our team and describe your dumpster rental needs and project details.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary text-white font-bold text-3xl flex items-center justify-center mx-auto mb-8">
              2
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Receive Free Quote</h3>
            <p className="text-neutral-600 leading-relaxed">
              Get an instant quote based on dumpster size, rental period, and service area.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary text-white font-bold text-3xl flex items-center justify-center mx-auto mb-8">
              3
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Schedule Delivery</h3>
            <p className="text-neutral-600 leading-relaxed">
              Choose your delivery date and time. We handle drop-off and pickup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
