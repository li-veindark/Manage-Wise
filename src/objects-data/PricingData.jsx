export const PricingData = {
    feature1: "Access to all basic features",
    feature2: "Reporting and analytics",
    feature3: "Up to 5 individual users",
    feature4: "Chat and email support",
    feature5: "3+ integrations",
    feature6: "Account performance reporting"
  };
  
  // Convert object to array of objects
  const formattedPricingData = Object.entries(PricingData).map(([key, value]) => ({
    id: key,
    title: value
  }));
  
  export default formattedPricingData;
  