import React from 'react';


const Projects = () => (
  <div className="text-dark min-vh-100 font-inter">
     
     <h1 className="display-5 fw-bold mb-1">PROJECTS</h1>
     <p className="text-uppercase small text-secondary mb-4">A Collection Of My Recent Works</p>
      <main className="px-4 px-sm-5 px-md-5 px-lg-5 py-4 shadow rounded">
        

        <section className="d-flex flex-column flex-md-row gap-4">
          <div className="w-100 w-md-50">
            <img
              src="https://storage.googleapis.com/a1aa/image/b6416e09-b324-4fc5-3776-4736869ed06b.jpg"
              alt="Pixel art game screenshot"
              className="img-fluid rounded"
              width="400"
              height="240"
            />
          </div>

          <div className="text-dark">
            <h2 className="fw-semibold fs-5 mb-1">The Cities Within</h2>
            <p className="fst-italic text-secondary small mb-3">An action role playing demo game</p>
            <p className="small text-secondary mb-4" style={{ lineHeight: '1.6' }}>
              Embark on an epic journey in this pixel art role-playing action game. Explore a vast world teeming with quests, NPCs, and fearsome monsters. Adapt to the dynamic day and night cycles as you hone your skills and collect powerful gear. Unleash your abilities in strategic battles and uncover the secrets about the city.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-outline-dark btn-sm">Visit Page</button>
              <button className="btn btn-outline-secondary btn-sm disabled">GitHub</button>
            </div>
          </div>
        </section>

        <div className="d-flex justify-content-end align-items-center mt-5 gap-2 text-secondary small user-select-none">
          <span>Navigate</span>
          <i className="fas fa-arrow-right"></i>
        </div>
      </main>
    </div>
);

export default Projects; 