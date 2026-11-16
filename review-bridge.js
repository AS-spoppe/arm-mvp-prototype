import { createBridge } from 'https://review.signalandscale.us/bridge/v1.js';

if (window.parent !== window) {
  createBridge({
    document,
    window,
    parentWindow: window.parent,
    parentOrigin: 'https://review.signalandscale.us'
  });
}
