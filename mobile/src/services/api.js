import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * Options to connect device to back-end
 * -> iOS with Emulator: localhost.
 * -> iOS with Physical Device: machine IP.
 * -> Android with Emulator: localhost (adb reverse):
 *    |-> $ adb reverse tcp:3333 tcp:3333. 
 * -> Android with Emulator: 10.0.2.2 (Android Studio).
 * -> Android with Emulator: 10.0.3.2 (Genymotion).
 * -> Android with physical: Machine IP.
 */