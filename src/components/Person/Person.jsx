import React from 'react';

export const Person = ({
  person: { name, age, isMarried, sex, partnerName },
}) => {
  // const sexCheck = () => {
  //   return sex === 'm' ? 'wife' : 'husband';
  // };
  const marriedMale = 'wife';
  const marriedFemale = 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {(isMarried &&
          `${partnerName} is my ${sex === 'm' ? marriedMale : marriedFemale}`) ||
          `I am not married`}
      </p>
    </section>
  );
};
