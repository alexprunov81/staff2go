import Route from 'components/map/Route'
import {useRef, useState} from 'react'
import MapYandex from 'components/map/MapYandex'
import MapControl from 'components/map/MapControls'
import ClientPopup from 'components/map/mapPopup/ClientPopup'
import RewardPopup from 'components/map/mapPopup/RewardPopup'
import ExtraFilter from 'components/map/mapPopup/ExtraFilter'
import ScopeworkPopup from 'components/map/mapPopup/ScopeworkContent'
import ProfessionPopup from 'components/map/mapPopup/ProfessionContent'


import {connect} from 'react-redux'

const MapGo = props => {

    const [ymaps, setYmaps] = useState(null)

    const setRoute = () => addRoute(props.pointA, props.pointB)

    const addRoute = (A, B) => {

        const multiRoute = new ymaps.multiRouter.MultiRoute(
            {referencePoints: [A, B].reverse()},
            {boundsAutoApply: true}
        )

        props.map.current.geoObjects.removeAll(multiRoute)
        props.map.current.geoObjects.add(multiRoute)
    }

    const visiblePopup = el => {
        switch (el) {
            case 1:
                return <ProfessionPopup/>
            case 2:
                return <ScopeworkPopup/>
            case 3:
                return <RewardPopup/>
            case 4:
                return <ExtraFilter/>
        }
    }

    return (
        <>
            <MapControl/>
            <div className="map">
                <MapYandex
                    ymaps={ymaps}
                    setYmaps={setYmaps}
                    pointA={props.pointA}
                    pointB={props.pointB}
                    setPointA={props.setPointA}
                    setPointB={props.setPointB}
                    map={props.map}
                />
                <div className="map-container">
                    {visiblePopup(props.idShow)}
                    {props.idShow === 5 ? (
                        <>
                            <Route setRoute={setRoute}/>
                            <ClientPopup/>
                        </>
                    ) : ''}

                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return { idShow: state.popupReducer.idShow }
}


export default connect(mapStateToProps)(MapGo)