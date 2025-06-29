import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  // You can add ipc handlers here if needed in the future
});
