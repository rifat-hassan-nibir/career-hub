/* eslint-disable react/prop-types */
const FeaturedJob = ({ job }) => {
  const { id } = job;
  return (
    <div>
      <h1>featured jobs id: {id}</h1>
    </div>
  );
};

export default FeaturedJob;
