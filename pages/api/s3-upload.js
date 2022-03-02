// pages/api/s3-upload.js
import { APIRoute } from 'next-s3-upload';

//export { APIRoute as default } from 'customer-zennshinn-image';

export default APIRoute.configure({
  key(req, filename) {
    return `my/uploads/path/${filename.toUpperCase()}`;
  },
});
