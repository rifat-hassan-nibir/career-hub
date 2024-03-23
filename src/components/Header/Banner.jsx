const Banner = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
      <figure>
        <img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" />
      </figure>
    </div>
  );
};

export default Banner;
