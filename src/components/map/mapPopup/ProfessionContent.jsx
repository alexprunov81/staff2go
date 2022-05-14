import { connect } from 'react-redux';

import ActionFn from 'store/actions';

import employeesIcoOrange from 'front-end/images/employees/1-orange.svg'
import employeesIcoBlue from 'front-end/images/employees/1-blue.svg'

import baseSorting from './baseSorting'

const ProfessionPopup = (props) => {


  const closePopup = () => {
    props.ActionFn('SHOW_POPUP', {});
  }

  const getBaseSorting = baseSorting(props.professionBase);

  const addProff = (name) => {

    if (props.profActiveReducer.profession.includes(name)) {
      props.ActionFn('REMOVE_PROF', name);
    } else {
      props.ActionFn('ADD_PROF', name);
    }

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
                {profItem.map(({ name, count }, i) => (
                  <li key={i}>
                    <a
                      href="/"
                      className={(props.profActiveReducer.profession.includes(name) ? 'active' : '')}
                      onClick={(e) => { e.preventDefault(); addProff(name); }}
                    >
                      <i className="employees-ico">
                        <img className="ico-back" src={employeesIcoOrange} alt="" />
                        <img className="ico-front" src={employeesIcoBlue} alt="" />
                      </i>
                      <span className="employees-cout">{count}</span>
                      <em> {name}<hr /></em>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    professionBase: state.professionBase,
    profActiveReducer: state.profActiveReducer
  }
}

export default connect(mapStateToProps, { ActionFn })(ProfessionPopup);