const Testimonials = () => {
    const testimonials = [
      {
        name: "Samiha Rahman",
        feedback: "I found my life partner here! The experience was amazing and seamless.",
        location: "Dhaka, Bangladesh",
        rating: 5,
        img: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        name: "Rahul Ahmed",
        feedback: "The matching system is perfect. Highly recommended for serious relationships!",
        location: "Chittagong, Bangladesh",
        rating: 4,
        img: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        name: "Ayesha Karim",
        feedback: "I was skeptical at first, but this platform truly changed my life. Thank you!",
        location: "Sylhet, Bangladesh",
        rating: 5,
        img: "https://randomuser.me/api/portraits/women/2.jpg",
      },
    ];
  
    return (
      <div className="py-12 w-11/12 mx-auto text-center dark:bg-gray-900 dark:text-white">
        <h2 className="text-3xl font-bold text-gray-800 dark:bg-gray-900 dark:text-white mb-8">💬 What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-lg dark:border-2 shadow-lg transition transform hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full border-2 border-pink-500" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{t.location}</p>
                  <div className="flex">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 italic">"{t.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  