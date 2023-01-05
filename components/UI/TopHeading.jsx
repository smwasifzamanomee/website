const TopHeading = ({ title }) => {
  return (
    <div className=" bg-gradient-to-t from-info to-secondary h-[300px] flex items-center justify-center">
      <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold capitalize">
        {title}
      </h1>
    </div>
  );
};

export default TopHeading;
