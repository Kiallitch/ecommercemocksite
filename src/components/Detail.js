import React from 'react';

const Detail = (props) => {

  let detail = props.data;

  return(
    <div className="col-sm-6 mx-auto">
      <div className="card " style={{marginTop: 20,}}>
        <div className="card-block">
          <img className="card-image-top" src={detail.image} alt={detail.imageAlt} style={{width:"250px", float:"left"}} />
          <h4 className="card-title">{detail.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-left">{detail.details}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
