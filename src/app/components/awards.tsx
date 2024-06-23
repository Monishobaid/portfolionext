import React from "react";

interface AwardItemProps {
  title: string;
  organization: string;
  description: string;
}

const AwardItem: React.FC<AwardItemProps> = ({
  title,
  organization,
  description,
}) => (
  <div className="font-serif mb-4">
    <h3 className="text-sm mt-2 font-semibold">{title}</h3>
    <p className="italic text-sm">{organization}</p>
    <p className="text-gray-600 text-sm mt-1">{description}</p>
  </div>
);

const Awards: React.FC = () => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold">AWARDS</h2>

      <AwardItem
        title="SpotLight Award"
        organization="OpenWeaver Hackathon"
        description="Won the SpotLight Award in the hackathon organized by OpenWeaver."
      />

      <AwardItem
        title="Finalist"
        organization="Bengal Collective at IIM-Bengal"
        description="Finalist in the policy-making competition organized by Bengal Collective at IIM-Bengal."
      />

      <AwardItem
        title="Best Website Builder Award"
        organization="NIET-IEEE College Competition"
        description="Won the Best Website Builder award in a college competition organized by the NIET-IEEE."
      />
    </div>
  );
};

export default Awards;