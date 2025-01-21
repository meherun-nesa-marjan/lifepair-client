const HowItWorks = () => {
    const steps = [
      {
        id: 1,
        title: "Create Your Profile",
        description: "Sign up and create your biodata to get started.",
        icon: "👤",
      },
      {
        id: 2,
        title: "Explore Profiles",
        description: "Browse through the biodatas and find your match.",
        icon: "🔍",
      },
      {
        id: 3,
        title: "Upgrade to Premium",
        description:
          "Become a premium member to unlock contact information and exclusive features.",
        icon: "⭐",
      },
      {
        id: 4,
        title: "Connect & Contact",
        description:
          "Request contact information or connect directly with premium access.",
        icon: "📞",
      },
    ];
  
    return (
      <div className="my-12 w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HowItWorks;
  