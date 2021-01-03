import React from 'react';
import './row.css';

const Row = () => {
    return (
        <div className='row'>
            <div className="row__image">
                <img src="https://avatars0.githubusercontent.com/u/56544801?s=460&u=09ea785d2f540bff7f342ea533be4459c18aa12f&v=4" alt="avatar"/>
            </div>

            <div className="row__content">
                <h2 className="row__name">Tensorflow</h2>
                <p className="row__description">
                    An Open Source Machine Learning Framework For Everyone https://tensorflow.org
                </p>
                <div className="row__details">
                    <div className="stars-issues-container">
                    <div className="row__stars"><p>Stars: <span>118k</span></p></div>
                    <div className="row__issues">
                        <p>Issues: <span>1.6k</span></p>
                    </div>

                    </div>
                    <p className="row__user">Submitted 30 days ago by <span className='row__username'>tensorflow</span></p>
                </div>
            </div>
        </div>
    )
}

export default Row
