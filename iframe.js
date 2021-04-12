$(document).ready(function () {
  const domain = 'meet.jit.si';
  const options = {
    roomName: 'JitsiMeetAPIExample',
    width: 700,
    height: 700,
    parentNode: document.querySelector('#meet'),
    configOverwrite: { startWithAudioMuted: true },
    interfaceConfigOverwrite: { DISABLE_DOMINANT_SPEAKER_INDICATOR: true },
    enableNoisyMicDetection: true,
  };

  const api = new JitsiMeetExternalAPI(domain, options);

  api.isVideoMuted().then((muted) => {
    debugger;
    console.log({ muted });
  });
});
