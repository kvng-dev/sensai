const CoverLetter = async ({ params }) => {
  const id = await params.id;
  // console.log();
  return <div>CoverLetter: {id}</div>;
};
export default CoverLetter;
