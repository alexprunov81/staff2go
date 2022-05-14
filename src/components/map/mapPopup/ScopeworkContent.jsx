import { connect } from 'react-redux';
import { useState } from 'react';

import baseSorting from './baseSorting'

import ActionFn from 'store/actions';

const ScopeworkPopup = (props) => {

  const getBaseSorting = baseSorting(props.scopeworkBase)


  const addProff = (name) => {

    if (props.profActiveReducer.work.includes(name)) {
      props.ActionFn('REMOVE_WORK', name);
    } else {
      props.ActionFn('ADD_WORK', name);
    }

  }


  const closePopup = () => {
    props.ActionFn('SHOW_POPUP', {});
  }

  return (

    <div className="map-popup">
      <div className="map-popup-container">
        <div
          className="close-popup"
          onClick={closePopup}
        >
        </div>
        <div className="alphabet-group">
          {getBaseSorting.map((profItem, i) => (
            <div className="alphabet-item" key={i}>
              <div className="alphabet-letter"><span>{profItem[0].name[0]}</span></div>
              <ul className="ln">
                {profItem.map(({ name }, i) => (
                  <li key={i}>
                    <a
                      href="/"
                      className={(props.profActiveReducer.work.includes(name) ? 'active' : '')}
                      onClick={(e) => { e.preventDefault(); addProff(name) }}
                    >
                      <em> {name}<hr /></em>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))
          }
        </div >
      </div >
    </div >
  )
}

const mapStateToProps = (state) => {
  console.log(state)

  return {
    scopeworkBase: state.scopeworkBase,
    profActiveReducer: state.profActiveReducer
  }
}

export default connect(mapStateToProps, { ActionFn })(ScopeworkPopup);