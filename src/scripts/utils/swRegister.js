import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('service worker not supported in this browser');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('service worker registered');
  } catch (error) {
    console.log('failed to register service worker', error);
  }
};

export default swRegister;
