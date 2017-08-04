import React from 'react';

const Detail = (props) => {

  let detail = props.data;

  return(
    <div className="col-sm-6 mx-auto">
      <div className="card " style={{marginTop: 20,}}>
        <div className="card-block">
          <p className="card-text">Name: {detail.name}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Quests: {detail.mainquests}</li>
            <li className="list-group-item">Map: {detail.map}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
