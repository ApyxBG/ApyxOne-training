import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Pulsing } from '../store/Preset';
import PulsingView from '../views/PulsingView';

function PulsingComponent() {
    const [pulsing, setPulsing] = useRecoilState(Pulsing);
    const [showOnTimeModal, setShowOnTimeModal] = useState(false);
    const [showOffTimeModal, setShowOffTimeModal] = useState(false);

    const setOffTime = (offTime) => {
        setPulsing({ ...pulsing, offTime });
        setShowOffTimeModal(false);
    }
    const setOnTime = (onTime) => {
        setPulsing({ ...pulsing, onTime });
        setShowOnTimeModal(false);
    }
    const switchEnabled = () => {
        setPulsing({...pulsing, enabled: !pulsing.enabled})
    }
    return (
        <PulsingView
            enabled={pulsing.enabled}
            offTime={pulsing.offTime}
            onTime={pulsing.onTime}
            onShowOffTimeModal={() => { setShowOffTimeModal(true) }}
            onShowOnTimeModal={() => { setShowOnTimeModal(true) }}
            setOffTime={setOffTime}
            setOnTime={setOnTime}
            showOffTimeModal={showOffTimeModal}
            showOnTimeModal={showOnTimeModal}
            switchEnabled={switchEnabled}
        ></PulsingView>
    );
}

export default PulsingComponent;