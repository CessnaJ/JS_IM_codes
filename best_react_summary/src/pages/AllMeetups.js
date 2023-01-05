const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];


function AllMeetupsPage() {
    return (<section>
        <h1>All meetups</h1>
        {[<li>Item1</li>, <li>Item2</li>]}
        
        <ul>
        {DUMMY_DATA.map((meetup) => {
            return <li key={meetup.id}>{meetup.title}</li>
        })}
        </ul>
        {/* 리스트 넣을거면 무조건 ul로 감싸야해~
        그리고, Arrow func의 param은 arr의 각 element임.
        리스트 병렬로 뽑을거면 고유한 key를 지정해줘야함.
        prop으로. 그래서 저렇게 key={meetup.id}나옴. */}

    </section>)

}

export default AllMeetupsPage