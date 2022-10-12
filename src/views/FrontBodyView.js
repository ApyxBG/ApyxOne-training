import React from "react";

function FrontBodyView({
  lowerLegsSelected,
  onLowerLegsClicked,
  upperLegsSelected,
  onUpperLegsClicked,
  upperArmsSelected,
  onUpperArmsClicked,
  forearmsSelected,
  onForearmsClicked,
  groinSelected,
  onGroinClicked,
  abdomenSelected,
  onAbdomenClicked,
  chestSelected,
  onChestClicked,
  neckSelected,
  onNeckClicked,
  onHeadClicked,
}) {
  let st = `.b,.c,.d,.e,.f,.g{stroke:#6698ff;}.b,.c,.f{strokeMiterlimit:10;}.b,.f,.g{fill:none;}.b,.g{strokeWidth:1.5px;}.h,.e{fill:#6698ff;strokeWidth: 1.5px;}.i,.c,.d{fill:#7290ca;}.c,.d,.f{strokeWidth:.2px;}.d,.e,.f,.g{stroke-linecap:round;}.d,.e,.g{stroke-linejoin:round;}.e{strokeWidth:.08px;}.un{fill:transparent;}.b{fill:#6698ff;}.c{fill:none;stroke:#6698ff;stroke-linecap:round;stroke-linejoin:round;strokeWidth:1.5px;}.un{fill:transparent;}`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322.78 824.78">
      <defs>
        <style>{st}</style>
      </defs>
      <path
        onClick={onLowerLegsClicked}
        cursor="pointer"
        className={lowerLegsSelected ? "b" : "un"}
        d="M113.98,562.04c3.63,5.36,9.24,11.13,16.99,12.09,.73,.09,1.47,.14,2.21,.14,6.05,0,12.42-3.02,18.98-8.98-.09,.31-.18,.62-.29,.95-3.4,10.88-3.23,20.29-3.05,30.27,.04,2.41,.09,4.89,.09,7.46,0,7.47-.33,9.36-1.29,14.97-.74,4.33-1.86,10.87-3.49,23.83-3.24,25.75-2.75,52.18-2.56,62.13,.03,1.65,.05,2.9,.05,3.7,0,4.16,1.03,5.1,2.57,5.23,.04,0,.09,0,.13,0,1.45,2.28,2.4,3.97,2.47,6.26,.05,1.67-.17,2.91-.42,4.34-.17,.96-.34,1.95-.46,3.19-.43,4.46-.22,12.83,1.26,20.66,1.39,7.34,2.01,16.27,1.65,23.89-.28,6.01-5.71,14.39-13.93,14.39s-12.96-4.31-19.06-10.41c-5.64-5.64-1-20.23-.96-20.36l6.32-17.6c.09-.34,2.18-8.32-.06-12.72-1.02-2.01-.84-6.19,.03-7.4,.78-1.06,1.14-2.56,1.31-3.72,.08-.12,.15-.26,.15-.42v-7.17c0-10.94-.76-14.49-4.43-31.56-1.66-7.72-3.93-18.29-7-33.6-8.21-40.88-2.6-55.89,.1-63.1,.54-1.44,.96-2.57,1.15-3.57l.02-.12c.69-3.66,1.2-6.42,1.52-12.77"
      />
      <path
        className="b"
        d="M113.98,562.04c3.63,5.36,9.24,11.13,16.99,12.09,.73,.09,1.47,.14,2.21,.14,6.05,0,12.42-3.02,18.98-8.98-.09,.31-.18,.62-.29,.95-3.4,10.88-3.23,20.29-3.05,30.27,.04,2.41,.09,4.89,.09,7.46,0,7.47-.33,9.36-1.29,14.97-.74,4.33-1.86,10.87-3.49,23.83-3.24,25.75-2.75,52.18-2.56,62.13,.03,1.65,.05,2.9,.05,3.7,0,4.16,1.03,5.1,2.57,5.23,.04,0,.09,0,.13,0,1.45,2.28,2.4,3.97,2.47,6.26,.05,1.67-.17,2.91-.42,4.34-.17,.96-.34,1.95-.46,3.19-.43,4.46-.22,12.83,1.26,20.66,1.39,7.34,2.01,16.27,1.65,23.89-.28,6.01-5.71,14.39-13.93,14.39s-12.96-4.31-19.06-10.41c-5.64-5.64-1-20.23-.96-20.36l6.32-17.6c.09-.34,2.18-8.32-.06-12.72-1.02-2.01-.84-6.19,.03-7.4,.78-1.06,1.14-2.56,1.31-3.72,.08-.12,.15-.26,.15-.42v-7.17c0-10.94-.76-14.49-4.43-31.56-1.66-7.72-3.93-18.29-7-33.6-8.21-40.88-2.6-55.89,.1-63.1,.54-1.44,.96-2.57,1.15-3.57l.02-.12c.69-3.66,1.2-6.42,1.52-12.77m-1.28-4.57l-.22,4.49c-.31,6.27-.81,8.91-1.49,12.57l-.02,.11c-.17,.88-.57,1.96-1.08,3.33-2.75,7.34-8.46,22.62-.17,63.92,3.07,15.34,5.34,25.9,7,33.62,3.64,16.94,4.39,20.46,4.39,31.24v6.91l-.08,.11-.05,.35c-.19,1.31-.56,2.39-1.03,3.04-1.3,1.79-1.38,6.56-.17,8.96,1.57,3.09,.67,8.9-.04,11.6l-6.3,17.54c-.22,.68-4.96,15.65,1.32,21.92s11.53,10.85,20.12,10.85c9.11,0,15.13-9.22,15.43-15.82,.37-7.72-.26-16.78-1.67-24.23-1.46-7.69-1.66-15.88-1.24-20.24,.11-1.18,.28-2.14,.45-3.08,.26-1.45,.5-2.82,.45-4.64-.08-2.69-1.22-4.69-2.7-7.02l-.39-.62-.73-.07h-.11c-.51-.05-1.23-.11-1.23-3.75,0-.83-.03-2.17-.05-3.73-.19-9.92-.68-36.26,2.55-61.91,1.63-12.93,2.74-19.45,3.48-23.76,.97-5.7,1.3-7.61,1.31-15.22,0-2.61-.05-5.2-.09-7.49-.18-9.85-.35-19.15,2.98-29.79,.07-.24,.14-.47,.21-.7l.08-.26,1.56-5.18-4,3.64c-6.27,5.7-12.32,8.59-17.97,8.59-.67,0-1.36-.04-2.03-.13-7.4-.92-12.75-6.73-15.93-11.44l-2.52-3.73h0Z"
      />

      <path
        onClick={onUpperLegsClicked}
        cursor="pointer"
        className={upperLegsSelected ? "b" : "un"}
        d="M102.79,383.93c29.6,0,50.75,30.97,53.11,34.57,.01,.14,.06,.26,.14,.38,1.41,19.24,.77,23.72-2.68,47.77l-.06,.39c-2.43,17-1.03,37.03,0,51.66,.48,6.93,.9,12.91,.84,17.11-.06,3.85,.07,6.93,.19,9.64,.14,3.27,.26,6.09,0,9.19-.2,2.48-.63,4.99-1.37,7.83-6.92,6.83-13.56,10.28-19.76,10.28-.68,0-1.36-.04-2.03-.12-8.05-1-13.71-7.68-17.07-13.2,.06-1.41,.09-2.96,.13-4.71,.05-2.16,.08-4.63,.1-7.43,.08-8.85-.95-12.68-2.65-19.03-1.81-6.77-4.56-17-7.5-40.28-.62-4.92-1.23-9.68-1.82-14.25-4.62-36.09-7.96-62.17-6.97-76.96,.26-3.82,.82-8.04,1.58-12.44,1.98-.27,3.92-.4,5.83-.4"
      />
      <path
        className="b"
        d="M102.79,383.93c29.6,0,50.75,30.97,53.11,34.57,.01,.14,.06,.26,.14,.38,1.41,19.24,.77,23.72-2.68,47.77l-.06,.39c-2.43,17-1.03,37.03,0,51.66,.48,6.93,.9,12.91,.84,17.11-.06,3.85,.07,6.93,.19,9.64,.14,3.27,.26,6.09,0,9.19-.2,2.48-.63,4.99-1.37,7.83-6.92,6.83-13.56,10.28-19.76,10.28-.68,0-1.36-.04-2.03-.12-8.05-1-13.71-7.68-17.07-13.2,.06-1.41,.09-2.96,.13-4.71,.05-2.16,.08-4.63,.1-7.43,.08-8.85-.95-12.68-2.65-19.03-1.81-6.77-4.56-17-7.5-40.28-.62-4.92-1.23-9.68-1.82-14.25-4.62-36.09-7.96-62.17-6.97-76.96,.26-3.82,.82-8.04,1.58-12.44,1.98-.27,3.92-.4,5.83-.4m0-1.5c-2.01,0-4.03,.14-6.03,.42l-1.08,.15-.19,1.08c-.82,4.7-1.36,8.93-1.6,12.6-1,14.94,2.34,41.07,6.97,77.23l.06,.49c.57,4.43,1.16,9.03,1.76,13.79,2.96,23.37,5.72,33.66,7.54,40.47,1.67,6.24,2.68,9.99,2.6,18.63-.02,3.05-.05,5.41-.1,7.41-.03,1.57-.07,3.23-.13,4.69l-.02,.45,.24,.39c3.51,5.75,9.5,12.84,18.16,13.91,.73,.09,1.47,.14,2.21,.14,6.61,0,13.61-3.6,20.82-10.71l.3-.29,.1-.4c.76-2.94,1.2-5.51,1.41-8.09,.27-3.18,.15-6.05,0-9.37-.11-2.71-.24-5.76-.18-9.56,.07-4.27-.35-10.28-.84-17.24-1.02-14.57-2.41-34.51,0-51.35l.06-.39c3.48-24.3,4.11-28.68,2.69-48.09l-.03-.42-.12-.17v-.17l-.22-.32c-2.36-3.61-23.95-35.25-54.36-35.25h0Z"
      />
      <path
        onClick={onUpperArmsClicked}
        cursor="pointer"
        className={upperArmsSelected ? "b" : "un"}
        d="M104.93,174.8c-14.53,40.76-.36,74.86-.22,75.2,0,0,.01,.02,.02,.03-.37,2.02-6.43,35.24-8.92,46.1-1.23,5.38-1.69,9.15-1.84,12.74-2.47-1-9.78-3.64-17.68-3.64-3.68,0-7.49,.57-11,2.16,.31-2.71,.62-5.75,.96-9.35,.26-2.8,.5-5.56,.75-8.44,.73-8.48,1.56-18.08,3.41-32.79,.5-3.96,.99-7.35,1.43-10.35,1.26-8.66,2.17-14.92,2.22-26.73,.05-11.83,2.65-19.41,7.74-30.1,4.58-9.6,16.07-12.84,21.59-14.4,.6-.17,1.1-.31,1.54-.45"
      />
      <path
        className="b"
        d="M104.93,174.8c-14.53,40.76-.36,74.86-.22,75.2,0,0,.01,.02,.02,.03-.37,2.02-6.43,35.24-8.92,46.1-1.23,5.38-1.69,9.15-1.84,12.74-2.47-1-9.78-3.64-17.68-3.64-3.68,0-7.49,.57-11,2.16,.31-2.71,.62-5.75,.96-9.35,.26-2.8,.5-5.56,.75-8.44,.73-8.48,1.56-18.08,3.41-32.79,.5-3.96,.99-7.35,1.43-10.35,1.26-8.66,2.17-14.92,2.22-26.73,.05-11.83,2.65-19.41,7.74-30.1,4.58-9.6,16.07-12.84,21.59-14.4,.6-.17,1.1-.31,1.54-.45m2.41-2.31l-2.85,.87c-.43,.13-.93,.27-1.51,.44-5.73,1.62-17.66,4.98-22.53,15.2-5.19,10.89-7.83,18.63-7.89,30.74-.05,11.69-.95,17.9-2.21,26.5-.44,3-.93,6.39-1.43,10.39-1.86,14.72-2.69,24.33-3.42,32.81l-.04,.41c-.24,2.75-.46,5.38-.72,8.06-.33,3.53-.65,6.58-.96,9.32l-.3,2.62,2.41-1.09c2.98-1.34,6.47-2.02,10.38-2.02,7.54,0,14.48,2.47,17.12,3.53l1.96,.79,.09-2.12c.18-3.98,.72-7.71,1.81-12.47,2.51-10.95,8.68-44.73,8.94-46.17l.09-.48-.21-.44-.02-.04c-.78-1.93-13.65-34.95,.28-74.04l1-2.81h0Z"
      />
      <path
        onClick={onHeadClicked}
        className="un"
        cursor="pointer"
        d="M161.34,48.5c16.63,0,29.28,12.67,30.08,30.12,.09,1.93,.05,8.76,.02,13.75-.01,1.97-.02,3.66-.02,4.7,0,22.71-13.5,41.18-30.08,41.18s-30.08-18.47-30.08-41.18c0-1.04-.01-2.73-.02-4.7-.03-4.99-.07-11.82,.02-13.75,.87-17.45,13.52-30.12,30.09-30.12"
      />
      <path
        onClick={onHeadClicked}
        cursor="pointer"
        className="b"
        d="M161.34,48.5c16.63,0,29.28,12.67,30.08,30.12,.09,1.93,.05,8.76,.02,13.75-.01,1.97-.02,3.66-.02,4.7,0,22.71-13.5,41.18-30.08,41.18s-30.08-18.47-30.08-41.18c0-1.04-.01-2.73-.02-4.7-.03-4.99-.07-11.82,.02-13.75,.87-17.45,13.52-30.12,30.09-30.12m0-1.5c-17.39,0-30.67,13.27-31.58,31.55-.1,1.97-.05,8.81-.02,13.81v.52c.01,1.75,.02,3.25,.02,4.2,0,23.54,14.17,42.68,31.58,42.68s31.58-19.15,31.58-42.68c0-1.03,0-2.73,.02-4.69v-.18c.03-4.94,.07-11.7-.02-13.65-.84-18.28-14.13-31.55-31.58-31.55h0Z"
      />
      <path
        className={forearmsSelected ? "b" : "un"}
        onClick={onForearmsClicked}
        cursor="pointer"
        d="M246.77,306.77c5.88,0,10.47,1.04,10.56,1.06h.06c.65,5.66,1.29,9.91,2.12,14.85,.19,1.16,.4,2.31,.62,3.48,1.16,6.36,2.47,13.57,2.29,28.48-.21,17.53,1.24,51.78,1.25,52.13,0,.07,0,.09,.02,.15,.02,.07,.37,1.91-.02,15.84-.41,14.62-1.24,30.76-1.25,30.92,0,.07,0,.14,.02,.21,.03,.13,.68,3.25-2.44,6.84-3.45,3.97-8.42,12.67-8.66,13.1-.02,.05-2.45,5.46-4.75,7.09-.31,.22-.65,.47-1.01,.75-2.57,1.93-6.45,4.84-15.03,6.65-.07,.02-.18,.05-.32,.05-.33,0-.79-.14-1.07-.86-.1-.24-.05-.38,0-.48,.25-.51,1.25-.91,1.69-1.02,.09-.02,.17-.06,.24-.11,.47-.33,11.44-8.12,12.9-13.62,.3-1.13,.55-2.03,.77-2.81,.8-2.88,1.13-4.07,1.78-8.51,.86-5.82,1.29-8.74-.74-9.83-.19-.1-.44-.19-.76-.19-.26,0-.56,.06-.89,.22-2.05,.96-4.41,5.13-5.26,9.31-.76,3.72-2.02,8.94-4.18,11.42-1.24,1.42-3.63,2.59-5.28,2.59-.07,0-.15,0-.22,0-.31-.02-.72-.11-.9-.38-.9-1.38-.78-2.06,.09-3.71,.14-.26,.34-.62,.59-1.05,1.48-2.58,4.24-7.39,4.5-11.26,.03-.44,.06-.97,.09-1.57,.27-5.16,.83-15.89,5.81-22.32l1.27-1.63c4.74-6.08,6.71-8.6,6.53-13.27-.03-.86-.02-2.01,0-3.35,.08-6.32,.23-16.9-3.5-29.54-4.47-15.16-9.76-36.35-9.82-36.59-.05-.16-4.86-16.56-5.09-27.33-.06-2.71-.05-5.01-.04-7.05,0-1.3,.01-2.52,0-3.72,5.26-3.93,12.27-4.92,18.03-4.92"
      />
      <path
        className="b"
        d="M246.77,306.77c5.88,0,10.47,1.04,10.56,1.06h.06c.65,5.66,1.29,9.91,2.12,14.85,.19,1.16,.4,2.31,.62,3.48,1.16,6.36,2.47,13.57,2.29,28.48-.21,17.53,1.24,51.78,1.25,52.13,0,.07,0,.09,.02,.15,.02,.07,.37,1.91-.02,15.84-.41,14.62-1.24,30.76-1.25,30.92,0,.07,0,.14,.02,.21,.03,.13,.68,3.25-2.44,6.84-3.45,3.97-8.42,12.67-8.66,13.1-.02,.05-2.45,5.46-4.75,7.09-.31,.22-.65,.47-1.01,.75-2.57,1.93-6.45,4.84-15.03,6.65-.07,.02-.18,.05-.32,.05-.33,0-.79-.14-1.07-.86-.1-.24-.05-.38,0-.48,.25-.51,1.25-.91,1.69-1.02,.09-.02,.17-.06,.24-.11,.47-.33,11.44-8.12,12.9-13.62,.3-1.13,.55-2.03,.77-2.81,.8-2.88,1.13-4.07,1.78-8.51,.86-5.82,1.29-8.74-.74-9.83-.19-.1-.44-.19-.76-.19-.26,0-.56,.06-.89,.22-2.05,.96-4.41,5.13-5.26,9.31-.76,3.72-2.02,8.94-4.18,11.42-1.24,1.42-3.63,2.59-5.28,2.59-.07,0-.15,0-.22,0-.31-.02-.72-.11-.9-.38-.9-1.38-.78-2.06,.09-3.71,.14-.26,.34-.62,.59-1.05,1.48-2.58,4.24-7.39,4.5-11.26,.03-.44,.06-.97,.09-1.57,.27-5.16,.83-15.89,5.81-22.32l1.27-1.63c4.74-6.08,6.71-8.6,6.53-13.27-.03-.86-.02-2.01,0-3.35,.08-6.32,.23-16.9-3.5-29.54-4.47-15.16-9.76-36.35-9.82-36.59-.05-.16-4.86-16.56-5.09-27.33-.06-2.71-.05-5.01-.04-7.05,0-1.3,.01-2.52,0-3.72,5.26-3.93,12.27-4.92,18.03-4.92m0-1.5v0c-7.92,0-14.29,1.76-18.93,5.22l-.61,.46v.76c.02,1.19,.02,2.41,.01,3.69,0,2.04-.02,4.35,.04,7.08,.23,10.81,4.89,26.85,5.14,27.7,.23,.93,5.46,21.8,9.83,36.62,3.66,12.43,3.52,22.86,3.44,29.09-.02,1.38-.03,2.54,0,3.43,.15,4.12-1.58,6.34-6.22,12.29l-1.27,1.64c-5.28,6.8-5.85,17.85-6.13,23.16v.05c-.03,.57-.06,1.07-.09,1.49-.24,3.52-2.88,8.13-4.3,10.61l-.06,.1c-.23,.4-.42,.74-.56,.99-1.05,1.97-1.32,3.26-.03,5.24,.29,.44,.88,.98,2.06,1.06,.11,0,.21,.01,.32,.01,2.08,0,4.89-1.36,6.41-3.1,2.37-2.72,3.66-7.9,4.52-12.11,.8-3.91,3-7.58,4.43-8.25,.14-.06,.22-.07,.26-.07,1.15,.6,.69,3.66,.01,8.29-.64,4.35-.96,5.52-1.74,8.33l-.03,.12c-.21,.75-.45,1.63-.74,2.7-1.09,4.1-9.08,10.48-12.21,12.7-.53,.16-1.96,.67-2.51,1.76-.27,.53-.29,1.13-.05,1.72,.45,1.12,1.37,1.8,2.46,1.8,.27,0,.51-.04,.67-.09,8.88-1.88,12.9-4.91,15.57-6.91,.35-.26,.68-.51,.98-.72,2.5-1.77,4.84-6.78,5.22-7.63,.43-.76,5.17-9.02,8.45-12.8,3.34-3.84,2.93-7.32,2.79-8.05,.07-1.4,.85-16.87,1.25-30.86,.29-10.41,.19-15.16,0-16.16-.09-2.22-1.45-34.95-1.25-51.98,.18-15.05-1.15-22.33-2.32-28.76l-.03-.19c-.2-1.1-.4-2.18-.58-3.27-.78-4.69-1.44-9-2.11-14.77l-.13-1.15-1.14-.16h-.1c-.86-.2-5.24-1.08-10.73-1.08h0Z"
      />

      <path
        className={lowerLegsSelected ? "b" : "un"}
        onClick={onLowerLegsClicked}
        cursor="pointer"
        d="M208.64,562.04c.31,6.37,.82,9.08,1.54,12.88,.19,1,.62,2.14,1.15,3.58,2.69,7.21,8.3,22.23,.1,63.09-3.06,15.25-5.33,25.81-6.98,33.51-3.68,17.12-4.44,20.68-4.44,31.64v7.17c0,.17,.05,.32,.14,.44,.17,1.16,.53,2.64,1.3,3.7,.88,1.21,1.06,5.38,.04,7.4-2.23,4.4-.15,12.38-.04,12.78l6.29,17.51c.05,.15,4.68,14.74-.96,20.38-6.09,6.09-11.03,10.41-19.05,10.41s-13.66-8.38-13.94-14.39c-.35-7.64,.27-16.57,1.65-23.89,1.48-7.82,1.69-16.19,1.26-20.66-.12-1.24-.29-2.23-.46-3.19-.25-1.43-.47-2.67-.42-4.34,.06-2.29,1.01-3.98,2.47-6.25,.04,0,.08,0,.12,0,1.54-.13,2.57-1.07,2.57-5.23,0-.8,.02-2.05,.05-3.7,.19-9.95,.68-36.37-2.56-62.12-1.63-12.98-2.75-19.52-3.49-23.84-.96-5.6-1.28-7.48-1.29-14.95,0-2.56,.04-5.05,.09-7.45,.18-9.97,.35-19.39-3.05-30.27-.1-.32-.19-.62-.28-.93,6.56,5.95,12.92,8.97,18.97,8.97,.74,0,1.48-.05,2.21-.14,7.75-.96,13.36-6.72,16.99-12.08"
      />
      <path
        className="b"
        d="M208.64,562.04c.31,6.37,.82,9.08,1.54,12.88,.19,1,.62,2.14,1.15,3.58,2.69,7.21,8.3,22.23,.1,63.09-3.06,15.25-5.33,25.81-6.98,33.51-3.68,17.12-4.44,20.68-4.44,31.64v7.17c0,.17,.05,.32,.14,.44,.17,1.16,.53,2.64,1.3,3.7,.88,1.21,1.06,5.38,.04,7.4-2.23,4.4-.15,12.38-.04,12.78l6.29,17.51c.05,.15,4.68,14.74-.96,20.38-6.09,6.09-11.03,10.41-19.05,10.41s-13.66-8.38-13.94-14.39c-.35-7.64,.27-16.57,1.65-23.89,1.48-7.82,1.69-16.19,1.26-20.66-.12-1.24-.29-2.23-.46-3.19-.25-1.43-.47-2.67-.42-4.34,.06-2.29,1.01-3.98,2.47-6.25,.04,0,.08,0,.12,0,1.54-.13,2.57-1.07,2.57-5.23,0-.8,.02-2.05,.05-3.7,.19-9.95,.68-36.37-2.56-62.12-1.63-12.98-2.75-19.52-3.49-23.84-.96-5.6-1.28-7.48-1.29-14.95,0-2.56,.04-5.05,.09-7.45,.18-9.97,.35-19.39-3.05-30.27-.1-.32-.19-.62-.28-.93,6.56,5.95,12.92,8.97,18.97,8.97,.74,0,1.48-.05,2.21-.14,7.75-.96,13.36-6.72,16.99-12.08m1.28-4.57l-2.52,3.73c-3.19,4.71-8.54,10.52-15.93,11.43-.67,.08-1.35,.13-2.03,.13-5.65,0-11.69-2.89-17.96-8.58l-4-3.63,1.55,5.17,.08,.26c.07,.23,.13,.45,.21,.69,3.33,10.65,3.16,19.95,2.98,29.8v.07c-.04,2.39-.09,4.86-.09,7.41,0,7.59,.33,9.51,1.31,15.2,.74,4.33,1.86,10.85,3.48,23.79,3.23,25.66,2.73,51.99,2.55,61.91-.03,1.55-.05,2.9-.05,3.73,0,3.64-.72,3.7-1.19,3.74h-.15l-.72,.08-.39,.61c-1.49,2.33-2.63,4.32-2.7,7.02-.05,1.82,.19,3.19,.44,4.64,.16,.93,.33,1.88,.45,3.08,.42,4.37,.22,12.56-1.24,20.24-1.41,7.42-2.04,16.48-1.68,24.24,.3,6.61,6.33,15.82,15.44,15.82,8.59,0,13.97-4.7,20.11-10.84,2.68-2.68,3.7-7.21,3.05-13.47-.48-4.55-1.71-8.4-1.72-8.44l-6.29-17.5c-.59-2.2-1.7-8.4-.06-11.65,1.22-2.41,1.13-7.18-.17-8.96-.47-.65-.84-1.72-1.03-3.03l-.05-.37-.08-.1v-6.93c0-10.8,.76-14.33,4.41-31.32,1.65-7.67,3.91-18.18,6.99-33.53,8.28-41.29,2.58-56.57-.16-63.91-.51-1.37-.92-2.46-1.08-3.34-.7-3.72-1.21-6.4-1.52-12.68l-.22-4.49h0Z"
      />

      <path
        onClick={onUpperLegsClicked}
        cursor="pointer"
        className={upperLegsSelected ? "b" : "un"}
        d="M218.33,383.92c2.07,0,4.19,.15,6.35,.48h.02s.05,0,.07,0h0c.36,2.76,.64,5.44,.81,8,1.1,16.42-1.5,51.26-7.12,95.59-2.95,23.29-5.69,33.51-7.51,40.28-1.7,6.35-2.73,10.18-2.65,19.02,.04,5.08,.12,9,.23,12.15-3.36,5.52-9.02,12.2-17.06,13.2-.67,.08-1.35,.13-2.03,.13-6.21,0-12.84-3.45-19.75-10.27-1.8-6.96-1.63-11.13-1.38-17,.12-2.73,.25-5.82,.19-9.68-.07-4.2,.35-10.18,.83-17.1,1.02-14.63,2.42-34.67,0-51.68l-.07-.51c-3.43-23.97-4.06-28.45-2.66-47.65,.08-.12,.13-.25,.14-.4,2.22-3.6,22.17-34.56,51.6-34.56"
      />
      <path
        className="b"
        d="M218.33,383.92c2.07,0,4.19,.15,6.35,.48h.02s.05,0,.07,0h0c.36,2.76,.64,5.44,.81,8,1.1,16.42-1.5,51.26-7.12,95.59-2.95,23.29-5.69,33.51-7.51,40.28-1.7,6.35-2.73,10.18-2.65,19.02,.04,5.08,.12,9,.23,12.15-3.36,5.52-9.02,12.2-17.06,13.2-.67,.08-1.35,.13-2.03,.13-6.21,0-12.84-3.45-19.75-10.27-1.8-6.96-1.63-11.13-1.38-17,.12-2.73,.25-5.82,.19-9.68-.07-4.2,.35-10.18,.83-17.1,1.02-14.63,2.42-34.67,0-51.68l-.07-.51c-3.43-23.97-4.06-28.45-2.66-47.65,.08-.12,.13-.25,.14-.4,2.22-3.6,22.17-34.56,51.6-34.56m0-1.5c-30.28,0-50.66,31.66-52.88,35.27l-.2,.33v.16l-.12,.16-.03,.42c-1.41,19.38-.79,23.74,2.67,47.97l.07,.51c2.41,16.84,1.02,36.78,0,51.34-.49,6.97-.91,12.98-.84,17.25,.06,3.82-.07,6.88-.19,9.59-.25,5.94-.43,10.24,1.42,17.44l.1,.4,.3,.29c7.2,7.1,14.2,10.7,20.81,10.7,.74,0,1.49-.05,2.22-.14,8.66-1.07,14.66-8.15,18.16-13.91l.23-.38-.02-.45c-.11-3.19-.19-7.15-.23-12.11-.07-8.64,.93-12.39,2.6-18.62,1.83-6.81,4.58-17.09,7.55-40.49,5.63-44.42,8.23-79.37,7.12-95.88-.17-2.48-.44-5.2-.82-8.09l-.17-1.28-1.29-.03h-.04c-2.13-.32-4.29-.48-6.43-.48h0Z"
      />
      <path
        className={forearmsSelected ? "b" : "un"}
        onClick={onForearmsClicked}
        cursor="pointer"
        d="M76.18,306.76c8.32,0,16.11,3.05,17.73,3.72-.04,1.6-.03,3.2-.02,4.94,0,2.03,.02,4.34-.04,7.05-.23,10.77-5.04,27.17-5.09,27.37-.05,.21-5.34,21.4-9.82,36.56-3.73,12.64-3.59,23.22-3.5,29.54,.02,1.34,.03,2.5,0,3.35-.17,4.67,1.79,7.18,6.53,13.27l1.27,1.63c4.99,6.43,5.55,17.16,5.81,22.32,.03,.6,.06,1.12,.09,1.57,.26,3.87,3.02,8.67,4.5,11.26,.25,.43,.45,.78,.59,1.05,.88,1.65,1,2.33,.09,3.71-.18,.28-.59,.36-.9,.38-.07,0-.14,0-.21,0-1.64,0-4.04-1.16-5.28-2.59-2.16-2.48-3.42-7.71-4.18-11.42-.85-4.17-3.22-8.35-5.26-9.31-.34-.16-.64-.22-.89-.22-.32,0-.57,.09-.76,.19-2.03,1.09-1.6,4.01-.74,9.83,.65,4.44,.98,5.63,1.78,8.51,.21,.78,.46,1.68,.77,2.81,1.46,5.49,12.43,13.29,12.9,13.62,.07,.05,.16,.09,.25,.11,.44,.11,1.43,.51,1.69,1.02,.05,.1,.1,.24,0,.48-.28,.7-.73,.85-1.08,.85-.16,0-.29-.03-.38-.06-8.51-1.79-12.39-4.71-14.96-6.63-.36-.27-.7-.52-1.01-.75-2.3-1.63-4.72-7.03-4.78-7.15-.21-.37-5.18-9.07-8.63-13.04-3.12-3.59-2.47-6.71-2.44-6.84,.02-.07,.02-.14,.02-.21,0-.16-.84-16.31-1.25-30.92-.39-13.93-.04-15.76-.04-15.78,.02-.07,.03-.14,.04-.21,.01-.34,1.46-34.6,1.25-52.13-.17-14.91,1.14-22.12,2.29-28.48,.21-1.17,.42-2.32,.62-3.48,.76-4.55,1.36-8.52,1.96-13.54h.02c3.45-1.76,7.32-2.38,11.08-2.38"
      />
      <path
        className="b"
        d="M76.18,306.76c8.32,0,16.11,3.05,17.73,3.72-.04,1.6-.03,3.2-.02,4.94,0,2.03,.02,4.34-.04,7.05-.23,10.77-5.04,27.17-5.09,27.37-.05,.21-5.34,21.4-9.82,36.56-3.73,12.64-3.59,23.22-3.5,29.54,.02,1.34,.03,2.5,0,3.35-.17,4.67,1.79,7.18,6.53,13.27l1.27,1.63c4.99,6.43,5.55,17.16,5.81,22.32,.03,.6,.06,1.12,.09,1.57,.26,3.87,3.02,8.67,4.5,11.26,.25,.43,.45,.78,.59,1.05,.88,1.65,1,2.33,.09,3.71-.18,.28-.59,.36-.9,.38-.07,0-.14,0-.21,0-1.64,0-4.04-1.16-5.28-2.59-2.16-2.48-3.42-7.71-4.18-11.42-.85-4.17-3.22-8.35-5.26-9.31-.34-.16-.64-.22-.89-.22-.32,0-.57,.09-.76,.19-2.03,1.09-1.6,4.01-.74,9.83,.65,4.44,.98,5.63,1.78,8.51,.21,.78,.46,1.68,.77,2.81,1.46,5.49,12.43,13.29,12.9,13.62,.07,.05,.16,.09,.25,.11,.44,.11,1.43,.51,1.69,1.02,.05,.1,.1,.24,0,.48-.28,.7-.73,.85-1.08,.85-.16,0-.29-.03-.38-.06-8.51-1.79-12.39-4.71-14.96-6.63-.36-.27-.7-.52-1.01-.75-2.3-1.63-4.72-7.03-4.78-7.15-.21-.37-5.18-9.07-8.63-13.04-3.12-3.59-2.47-6.71-2.44-6.84,.02-.07,.02-.14,.02-.21,0-.16-.84-16.31-1.25-30.92-.39-13.93-.04-15.76-.04-15.78,.02-.07,.03-.14,.04-.21,.01-.34,1.46-34.6,1.25-52.13-.17-14.91,1.14-22.12,2.29-28.48,.21-1.17,.42-2.32,.62-3.48,.76-4.55,1.36-8.52,1.96-13.54h.02c3.45-1.76,7.32-2.38,11.08-2.38m0-1.5c-4.44,0-8.36,.84-11.65,2.48l-.09,.04-.75,.36-.1,.82c-.62,5.16-1.23,9.12-1.95,13.47-.18,1.09-.38,2.17-.58,3.27l-.03,.19c-1.17,6.43-2.49,13.71-2.32,28.76,.2,17.07-1.16,49.88-1.25,51.95l-.03,.09v.13c-.1,.72-.32,3.79,.03,15.97,.39,14,1.18,29.49,1.25,30.86-.14,.73-.55,4.2,2.79,8.05,3.24,3.73,7.96,11.93,8.43,12.74,.84,1.81,2.98,6.08,5.25,7.69,.3,.21,.63,.46,.98,.72,2.67,2,6.7,5.03,15.51,6.89,.24,.06,.49,.1,.73,.1,1.1,0,2.02-.67,2.47-1.79,.24-.59,.22-1.19-.06-1.73-.55-1.09-2.02-1.6-2.51-1.75-3.14-2.23-11.12-8.61-12.21-12.7-.29-1.08-.53-1.95-.74-2.7l-.03-.12c-.78-2.82-1.1-3.98-1.74-8.33-.68-4.64-1.13-7.7-.03-8.29,.02,0,.03,0,.05,0,.06,0,.14,.02,.25,.07,1.43,.67,3.63,4.34,4.43,8.25,.86,4.21,2.15,9.39,4.52,12.11,1.52,1.74,4.33,3.1,6.41,3.1,.11,0,.21,0,.31-.01,1.18-.08,1.77-.62,2.06-1.05,1.3-1.98,1.03-3.27-.02-5.24-.14-.25-.33-.59-.56-.99l-.05-.09c-1.42-2.48-4.07-7.09-4.3-10.61-.03-.42-.06-.93-.08-1.49v-.05c-.28-5.31-.85-16.36-6.13-23.16l-1.27-1.63c-4.64-5.95-6.37-8.17-6.22-12.29,.03-.89,.02-2.05,0-3.39-.08-6.28-.22-16.71,3.44-29.13,4.39-14.9,9.6-35.67,9.83-36.59,.54-1.86,4.92-17.22,5.15-27.72,.06-2.73,.05-5.05,.04-7.08,0-1.91-.01-3.38,.02-4.9l.02-1.03-.95-.39c-1.54-.64-9.67-3.83-18.3-3.83h0Z"
      />
      <path
        onClick={onGroinClicked}
        className={groinSelected ? "b" : "un"}
        cursor="pointer"
        d="M107.32,345.38c2.21,1.18,16.45,7.87,54.52,7.87s50.86-6.37,53.49-7.78c4.39,12.82,7.6,25.82,9.23,37.41-2.12-.3-4.2-.45-6.24-.45-30.44,0-50.89,32-52.94,35.36-.34,.07-1,.19-1.93,.28-.04,0-.08,0-.13,.01-.12,0-.24,.02-.36,.03-.16,.01-.32,.02-.49,.03-.09,0-.19,0-.29,.01-.28,0-.58,.02-.89,.02s-.61,0-.89-.02c-.1,0-.2,0-.29-.01-.16,0-.32-.02-.47-.03-.13,0-.26-.02-.39-.03-.04,0-.07,0-.11,0-.94-.08-1.6-.21-1.94-.28-2.13-3.27-23.79-35.35-54.43-35.35-1.82,0-3.68,.11-5.56,.35,2.26-12.26,6.12-25.92,10.09-37.4"
      />
      <path
        className="b"
        d="M107.32,345.38c2.21,1.18,16.45,7.87,54.52,7.87s50.86-6.37,53.49-7.78c4.39,12.82,7.6,25.82,9.23,37.41-2.12-.3-4.2-.45-6.24-.45-30.44,0-50.89,32-52.94,35.36-.34,.07-1,.19-1.93,.28-.04,0-.08,0-.13,.01-.12,0-.24,.02-.36,.03-.16,.01-.32,.02-.49,.03-.09,0-.19,0-.29,.01-.28,0-.58,.02-.89,.02s-.61,0-.89-.02c-.1,0-.2,0-.29-.01-.16,0-.32-.02-.47-.03-.13,0-.26-.02-.39-.03-.04,0-.07,0-.11,0-.94-.08-1.6-.21-1.94-.28-2.13-3.27-23.79-35.35-54.43-35.35-1.82,0-3.68,.11-5.56,.35,2.26-12.26,6.12-25.92,10.09-37.4m-.84-2.15l-.57,1.66c-4.38,12.66-8.08,26.38-10.14,37.62l-.37,2.02,2.04-.26c1.78-.23,3.59-.34,5.37-.34,29.76,0,50.86,31.12,53.17,34.67l.34,.52,.61,.13c.35,.07,1.08,.21,2.13,.31h.12c.11,.02,.23,.03,.35,.04h.06c.16,.01,.33,.02,.5,.03h.31c.3,.02,.61,.03,.94,.03s.64,0,.94-.02h.27c.21-.02,.38-.03,.55-.04h.06c.11-.01,.22-.02,.33-.03h.09c1.08-.11,1.81-.24,2.15-.31l.63-.13,.34-.55c2.17-3.55,22.08-34.64,51.66-34.64,2,0,4.02,.15,6.02,.43l1.98,.28-.28-1.98c-1.66-11.74-4.87-24.77-9.3-37.69l-.57-1.67-1.56,.83c-2.37,1.27-16.05,7.61-52.78,7.61-15.96,0-29.55-1.17-40.4-3.46-8.43-1.79-12.4-3.69-13.42-4.23l-1.55-.83h0Z"
      />
      <path
        onClick={onAbdomenClicked}
        className={abdomenSelected ? "b" : "un"}
        cursor="pointer"
        d="M218.52,242.47c-.95,3.83-2.13,7.7-3.57,11.59h0c-1.51,3.91-8.11,22.13-7.28,41.13,.26,5.97,.24,10.5,.23,14.48-.04,10.14-.07,15.72,4.82,28.56,.73,1.92,1.43,3.86,2.11,5.79-1.66,.91-15.39,7.72-52.99,7.72s-53.29-7.4-54.02-7.81c.7-1.97,1.39-3.89,2.08-5.7,4.89-12.84,4.86-18.42,4.82-28.56-.02-3.99-.04-8.52,.23-14.5,.74-16.83-6.9-41.96-10.21-51.96,1.07,1.25,2.44,2.7,4.06,4.15,5.63,5.04,11.73,7.7,17.66,7.7,.1,0,.2,0,.3,0,11.98-.18,14.87-.86,23.83-5.64,.05-.03,5.37-3.41,10.71-3.42,5.35,.01,10.66,3.39,10.77,3.45,8.91,4.75,11.8,5.43,23.78,5.61,.1,0,.2,0,.3,0,5.93,0,12.04-2.66,17.67-7.7,1.96-1.76,3.54-3.51,4.7-4.9"
      />
      <path
        className="b"
        d="M218.52,242.47c-.95,3.83-2.13,7.7-3.57,11.59h0c-1.51,3.91-8.11,22.13-7.28,41.13,.26,5.97,.24,10.5,.23,14.48-.04,10.14-.07,15.72,4.82,28.56,.73,1.92,1.43,3.86,2.11,5.79-1.66,.91-15.39,7.72-52.99,7.72s-53.29-7.4-54.02-7.81c.7-1.97,1.39-3.89,2.08-5.7,4.89-12.84,4.86-18.42,4.82-28.56-.02-3.99-.04-8.52,.23-14.5,.74-16.83-6.9-41.96-10.21-51.96,1.07,1.25,2.44,2.7,4.06,4.15,5.63,5.04,11.73,7.7,17.66,7.7,.1,0,.2,0,.3,0,11.98-.18,14.87-.86,23.83-5.64,.05-.03,5.37-3.41,10.71-3.42,5.35,.01,10.66,3.39,10.77,3.45,8.91,4.75,11.8,5.43,23.78,5.61,.1,0,.2,0,.3,0,5.93,0,12.04-2.66,17.67-7.7,1.96-1.76,3.54-3.51,4.7-4.9m3.06-6.07l-4.21,5.12c-1.41,1.71-2.94,3.31-4.54,4.74-5.35,4.78-11.11,7.31-16.67,7.31h-.28c-11.77-.18-14.37-.79-23.05-5.41-.77-.48-6.08-3.64-11.51-3.65-5.45,.01-10.78,3.19-11.47,3.62-8.73,4.65-11.34,5.26-23.11,5.44h-.28c-5.56,0-11.32-2.53-16.66-7.31-1.37-1.22-2.69-2.57-3.92-4.01l-4.94-5.74,2.38,7.19c3.29,9.94,10.86,34.86,10.14,51.42-.27,6.05-.25,10.57-.23,14.57,.04,9.95,.06,15.43-4.72,28.02-.66,1.73-1.34,3.61-2.1,5.74l-.42,1.19,1.11,.62c.59,.33,14.82,8,54.75,8,15.91,0,29.47-1.2,40.29-3.56,8.43-1.84,12.4-3.79,13.42-4.35l1.12-.61-.42-1.2c-.75-2.14-1.44-4.05-2.12-5.83-4.79-12.58-4.77-18.07-4.72-28.02,.02-4.03,.04-8.56-.23-14.56-.82-18.82,5.83-37.05,7.18-40.52l.02-.05v-.03c1.41-3.78,2.62-7.71,3.61-11.7l1.6-6.43h0Z"
      />
      <path
        onClick={onChestClicked}
        className={chestSelected ? "b" : "un"}
        cursor="pointer"
        d="M140.8,155.85c1.58,1.04,6.33,2.71,20.54,2.71s18.71-1.59,20.41-2.63c.45,.54,1.04,1.1,1.77,1.54,2.85,1.71,17.96,11.55,18.12,11.65,.05,.03,.1,.06,.15,.08,.1,.04,9.4,3.45,14.29,5.09,1.12,3.27,10.32,31.7,3.27,64.6-.98,1.44-10.33,14.69-23.19,14.69-.09,0-.19,0-.28,0-11.79-.18-14.38-.79-23.04-5.4-.23-.15-5.71-3.63-11.49-3.66h-.08c-5.78,.03-11.26,3.51-11.43,3.63-8.72,4.65-11.31,5.25-23.1,5.43-.1,0-.2,0-.3,0-13.51,0-23.17-14.68-23.27-14.83-.01-.02-.03-.03-.04-.04-.03-.04-.07-.08-.11-.12-.03-.03-.07-.05-.1-.08-.04-.03-.09-.04-.14-.06h0c-3.11-13.32-5.96-37.36,3.94-64.24,4.94-1.66,14.01-4.99,14.11-5.02,.05-.02,.09-.04,.13-.07,.62-.38,15.1-9.32,18.21-11.71,.64-.5,1.19-1.05,1.63-1.56"
      />
      <path
        className="b"
        d="M140.8,155.85c1.58,1.04,6.33,2.71,20.54,2.71s18.71-1.59,20.41-2.63c.45,.54,1.04,1.1,1.77,1.54,2.85,1.71,17.96,11.55,18.12,11.65,.05,.03,.1,.06,.15,.08,.1,.04,9.4,3.45,14.29,5.09,1.12,3.27,10.32,31.7,3.27,64.6-.98,1.44-10.33,14.69-23.19,14.69-.09,0-.19,0-.28,0-11.79-.18-14.38-.79-23.04-5.4-.23-.15-5.71-3.63-11.49-3.66h-.08c-5.78,.03-11.26,3.51-11.43,3.63-8.72,4.65-11.31,5.25-23.1,5.43-.1,0-.2,0-.3,0-13.51,0-23.17-14.68-23.27-14.83-.01-.02-.03-.03-.04-.04-.03-.04-.07-.08-.11-.12-.03-.03-.07-.05-.1-.08-.04-.03-.09-.04-.14-.06h0c-3.11-13.32-5.96-37.36,3.94-64.24,4.94-1.66,14.01-4.99,14.11-5.02,.05-.02,.09-.04,.13-.07,.62-.38,15.1-9.32,18.21-11.71,.64-.5,1.19-1.05,1.63-1.56m-.28-1.98l-.86,1c-.45,.53-.93,.98-1.41,1.36-2.97,2.29-16.81,10.84-18.01,11.58-1.59,.58-9.52,3.48-14,4.98l-.68,.23-.25,.67c-10.22,27.76-6.89,52.7-3.99,65.1l.21,.9,.57,.14c1.42,2.06,11.02,15.24,24.34,15.24,.11,0,.21,0,.32,0,11.98-.18,14.87-.86,23.78-5.61l.06-.03,.06-.04s5.29-3.35,10.61-3.38h.05c5.38,.03,10.64,3.39,10.69,3.42l.05,.03,.06,.03c8.86,4.72,11.75,5.4,23.73,5.58h.31c13.62,0,23.37-13.78,24.43-15.35l.16-.24,.06-.29c7.15-33.36-2.22-62.22-3.32-65.41l-.24-.7-.7-.24c-4.43-1.48-12.53-4.44-14.17-5.04-1.71-1.11-15.39-10.02-18.09-11.64-.5-.3-.97-.71-1.4-1.22l-.83-.99-1.1,.68c-1.18,.72-5.45,2.41-19.63,2.41s-18.59-1.72-19.71-2.46l-1.1-.73h0Z"
      />
      <path
        onClick={onNeckClicked}
        className={neckSelected ? "b" : "un"}
        cursor="pointer"
        d="M141.69,130.46c5.4,5.81,12.22,9.29,19.64,9.29s14.2-3.46,19.59-9.24l-.42,23.29c0,.11,.02,.22,.07,.32,.01,.03,.12,.26,.31,.58-1.2,.72-5.48,2.35-19.55,2.35s-18.53-1.7-19.63-2.4c.18-.26,.29-.45,.3-.47,.07-.12,.1-.25,.1-.39l-.42-23.34"
      />
      <path
        className="b"
        d="M141.69,130.46c5.4,5.81,12.22,9.29,19.64,9.29s14.2-3.46,19.59-9.24l-.42,23.29c0,.11,.02,.22,.07,.32,.01,.03,.12,.26,.31,.58-1.2,.72-5.48,2.35-19.55,2.35s-18.53-1.7-19.63-2.4c.18-.26,.29-.45,.3-.47,.07-.12,.1-.25,.1-.39l-.42-23.34m-1.57-3.89l.07,3.92,.41,23.12c-.04,.06-.09,.13-.14,.21l-.87,1.28,1.31,.83c1.55,.98,6.27,2.63,20.43,2.63s18.72-1.61,20.32-2.56l1.28-.76-.75-1.28c-.07-.12-.13-.23-.17-.3l.41-23.1,.07-3.91-2.67,2.86c-5.35,5.73-11.74,8.76-18.49,8.76s-13.19-3.05-18.54-8.82l-2.67-2.87h0Z"
      />
      <path
        onClick={onUpperArmsClicked}
        className={upperArmsSelected ? "b" : "un"}
        cursor="pointer"
        d="M217.85,174.84c.4,.12,.85,.25,1.38,.4,5.52,1.56,17.01,4.8,21.59,14.4,5.09,10.68,7.69,18.27,7.74,30.1,.05,11.8,.96,18.06,2.22,26.73,.44,2.99,.93,6.39,1.43,10.35,1.86,14.71,2.68,24.31,3.41,32.79,.25,2.88,.49,5.65,.75,8.44,.29,3.11,.57,5.8,.84,8.23-1.35-.28-5.45-1.04-10.5-1.04-5.67,0-12.54,.96-18.02,4.65-.12-3.9-.53-7.86-1.88-13.75-2.46-10.75-8.43-43.4-8.91-46.03,1.16-3.61,2.12-7.2,2.88-10.74,.01-.04,.02-.08,.03-.12,6.64-30.94-.93-58-2.96-64.39"
      />
      <path
        className="b"
        d="M217.85,174.84c.4,.12,.85,.25,1.38,.4,5.52,1.56,17.01,4.8,21.59,14.4,5.09,10.68,7.69,18.27,7.74,30.1,.05,11.8,.96,18.06,2.22,26.73,.44,2.99,.93,6.39,1.43,10.35,1.86,14.71,2.68,24.31,3.41,32.79,.25,2.88,.49,5.65,.75,8.44,.29,3.11,.57,5.8,.84,8.23-1.35-.28-5.45-1.04-10.5-1.04-5.67,0-12.54,.96-18.02,4.65-.12-3.9-.53-7.86-1.88-13.75-2.46-10.75-8.43-43.4-8.91-46.03,1.16-3.61,2.12-7.2,2.88-10.74,.01-.04,.02-.08,.03-.12,6.64-30.94-.93-58-2.96-64.39m-2.29-2.25l.86,2.71c2.32,7.29,9.4,33.44,2.92,63.62l-.02,.08h0v.04c-.78,3.57-1.74,7.13-2.85,10.59l-.12,.36,.07,.37c.66,3.59,6.47,35.4,8.92,46.1,1.18,5.13,1.71,9.03,1.84,13.46l.08,2.71,2.25-1.52c4.33-2.92,10.11-4.39,17.18-4.39,4.98,0,9.06,.77,10.19,1.01l2.03,.43-.23-2.06c-.27-2.47-.55-5.15-.84-8.2-.25-2.67-.48-5.31-.72-8.06l-.03-.37c-.73-8.51-1.56-18.13-3.42-32.85-.51-4-1-7.39-1.43-10.37-1.25-8.61-2.16-14.82-2.21-26.52-.05-12.11-2.7-19.85-7.89-30.74-4.87-10.22-16.8-13.58-22.53-15.2-.52-.15-.96-.27-1.36-.39l-2.72-.82h0Z"
      />
      <g>
        <path
          className="g"
          d="M129.14,91.17s-4.29,.08-3.75,3.9c.55,3.82,1.33,12.15,5.38,12.9"
        />
        <path
          className="g"
          d="M194.12,91.17s4.29,.08,3.75,3.9c-.55,3.82-1.33,12.15-5.38,12.9"
        />
        <path className="b" d="M129.43,90.42s.04,.09,.06,.13" />
        <g>
          <circle className="i" cx="147.65" cy="91.76" r="1.69" />
          <circle className="h" cx="147.65" cy="91.76" r="3.04" />
          <path
            className="d"
            d="M140.99,92.86c-.16-3.09,2.76-4.16,5.31-4.37,2.55-.2,6.94,1.35,7.64,4.55,0,0-1.83-3.39-6.48-3.47-2.07-.01-5.44-.11-6.47,3.28Z"
          />
          <path
            className="f"
            d="M141.22,92.81c1.21,1.68,5.53,1.98,6.24,1.99,.99,.02,3.9-.17,6.28-1.74"
          />
        </g>
        <path
          className="e"
          d="M155.28,86.77c-.65,.51-5.94-2.32-10.24-1.95-3.79,.35-4.41,1.31-5.55,1.95,.22-1.61,4.46-3.38,7.63-3.19,4.33,.26,9.21,2.36,8.16,3.19Z"
        />
        <path
          className="g"
          d="M155.89,109.38c.34,.03,1.39,.47,1.76,.75,.37,.28,1.87,1.25,4.03,1.25s3.77-1,3.92-1.16,1.43-.78,1.61-.84"
        />
        <rect
          className="c"
          x="151.34"
          y="120.65"
          width="20.44"
          height=".92"
          rx=".08"
          ry=".08"
        />
        <path
          className="g"
          d="M156.93,126.37c2.15,.67,8.02,.37,9.49-.26-1.01,.47-3.13,1.01-4.74,.97s-3.39-.18-4.74-.71Z"
        />
        <path
          className="e"
          d="M167.97,86.76c.65,.51,5.94-2.32,10.24-1.95,3.79,.35,4.41,1.31,5.55,1.95-.22-1.61-4.46-3.38-7.63-3.19-4.33,.26-9.21,2.36-8.16,3.19Z"
        />
        <g>
          <circle className="i" cx="175.6" cy="91.76" r="1.69" />
          <circle className="h" cx="175.6" cy="91.76" r="3.04" />
          <path
            className="d"
            d="M182.26,92.86c.16-3.09-2.76-4.16-5.31-4.37-2.55-.2-6.94,1.35-7.64,4.55,0,0,1.83-3.39,6.48-3.47,2.07-.01,5.44-.11,6.47,3.28Z"
          />
          <path
            className="f"
            d="M182.03,92.81c-1.21,1.68-5.53,1.98-6.24,1.99-.99,.02-3.9-.17-6.28-1.74"
          />
        </g>
      </g>
    </svg>
  );
}

export default FrontBodyView;