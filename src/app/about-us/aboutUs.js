function aboutUs({
  aboutUsPhoto,
  members
}) {
  const membersGrid = members.map(({ name, role, description, photo }) => {
    return `
      <div class="members-grid-el">
        <h3>${name}</h3>
        <p>${role}</p>
          <div class="image-wrapper">
            <img alt=${name} src=${photo} />
          </div>
        <p>${description}</p>
      </div>
    `
  }).join('');

  return `
  <a id="onas"></a>
    <section class="container" id="about-us">

      <div class="description">
        <h1>Zespół Weselny Młyn Ubogich</h1>
        <h3>O nas</h3>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="image-for-dc">
        <img src=${aboutUsPhoto} />
      </div>
    </section>
    <hr class="section-hr">
    <section id="about-us-2">
      <h2>SKŁAD</h2>
      <div class="container">
        ${membersGrid}
      </div>
    </section>
  `
};

export default aboutUs({
  aboutUsPhoto: './imgs/background.jpg',
  members: [
    {
      name: 'Jon',
      role: 'instrumenty klawiszowe, akordeon,wokal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      photo: './imgs/face.jpg'
    },
    {
      name: 'Jon',
      role: 'instrumenty klawiszowe, akordeon,wokal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      photo: './imgs/face.jpg'
    },
    {
      name: 'Jon',
      role: 'instrumenty klawiszowe, akordeon,wokal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      photo: './imgs/face.jpg'
    },
    {
      name: 'Jon',
      role: 'instrumenty klawiszowe, akordeon,wokal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      photo: './imgs/face.jpg'
    }
  ] 
});