import Card from './Card';


const Member = ({ image, name, job, socials }) => {
  return (
    <Card className="member">
      <div className="member-img">
        <img src={image} alt={name} srcset="" />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="member-socials">
        {socials.map(({ icon, link }, index) => {
          return (
            <a key={index} href={link} target="_blank" rel="noreffernoopener">
              {icon}
            </a>
          );
        })}
      </div>
    </Card>
  );
};

export default Member;
