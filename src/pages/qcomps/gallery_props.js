function Scientist({person}) { //name, imgId, profession, totalAwards, awards, discovery
  return (
    <div>
      <h2>{person.name}</h2>
      <img
          className="avatar"
          src={'https://i.imgur.com/' + person.imgId +'.jpg'}
          alt={person.name}
          width={70}
          height={70}
        />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.totalAwards} </b>
          {person.awards}
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <Scientist 
          person={{name: 'Maria Skłodowska-Curie', 
                  imgId: 'szV5sdGs',
                  profession: 'physicist and chemist',
                  totalAwards: '4',
                  awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
                  discovery: 'polonium (element)'}}
        />
      </section>
      <section className="profile">
        <Scientist
          person={{name:'Katsuko Saruhashi',
                  imgId: 'YfeOqp2s',
                  profession: 'geochemist',
                  totalAwards: '2',
                  awards: '(Miyake Prize for geochemistry, Tanaka Prize)',
                  discovery: 'a method for measuring carbon dioxide in seawater' }}
        />
      </section>
    </div>
  );
}
