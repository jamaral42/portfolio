
const Header: React.FC = () => {

  return (
    <div className="sticky top-0 z-50 bg-taupe border-b border-mahogany border-bold">
      <div className="max-padd-container p-4 flex justify-between">
        <div>
          <h1 className="text-mahogany text-2xl font-bold">João Amaral</h1>
        </div>

        <div className="flex gap-24">
          <div>Home</div>
          <div>About</div>
          <div>Skills</div>
          <div>Projects</div>
          <div>Contacts</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
