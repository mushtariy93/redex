const About = () => {
  const companyInfo = {
    name: "TechX Solutions",
    founded: 2010,
    mission: "Yangi texnologiyalar orqali biznesni rivojlantirish",
    description:
      "TechX Solutions innovatsion yechimlar va xizmatlar taklif etadi, biznesga samarali texnologiyalarni integratsiya qilishda yordam beradi.",
  };

  return (
    <div id="about" className="container mx-auto py-12 px-4 min-h-[60vh]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Biz haqimizda
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {companyInfo.name} - {companyInfo.founded} yilda tashkil topgan
        </h3>
        <p className="text-gray-600 mb-4">{companyInfo.description}</p>
        <p className="text-gray-600 mb-4">
          Missiya: <strong>{companyInfo.mission}</strong>
        </p>

        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          Bizning qiymatlarimiz
        </h4>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Samaradorlik va innovatsiya</li>
          <li>Jamoa va hamkorlik</li>
          <li>Ochiqlik va halollik</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
