import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-md">
      <h2 className="text-3xl font-bold mb-4">Mission</h2>
      <p className="text-gray-700 mb-6">
        Energy costs are among the top five highest operating expenses for businesses, and it's also the expense that they have the most control over to make significant reductions.
        At E2F Systems, our eyes are to the future, and we make energy efficiency and sustainability accessible and affordable for businesses operating in all sectors of the economy.
        We provide solutions that keep our clients ahead of the curve of rising energy prices, new government mandates, unpredictable expenses on their energy bills and we help them to meet increasing consumer demand for sustainably sourced and manufactured products.
      </p>

      <h2 className="text-3xl font-bold mb-4">Our Story</h2>
      <p className="text-gray-700">
        During our twenty-plus combined years managing commercial gas and electricity portfolios in the Canadian and US energy markets, we noticed unusually high costs in unexpected line items that significantly increased their operating expenses. We founded E2F Systems to identify the root cause, find ways to improve their energy efficiency and reduce these costs.
        This led to us creating an industry-leading network of award-winning energy engineers, sustainability experts, and service providers who implement proven solutions using innovative technology to eliminate waste, reduce costs, and advance sustainability for commercial, industrial, and public sector operators.
      </p>
    </div>
  );
};

export default About;
