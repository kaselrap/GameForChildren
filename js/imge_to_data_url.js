/**
 * Converts an image to a dataURL
 * @param  {String}   src          The src of the image
 * @param  {Function} callback     
 * @param  {String}   outputFormat [outputFormat='image/png']
 * @url   https://gist.github.com/HaNdTriX/7704632/
 * @docs  https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement#Methods
 * @author HaNdTriX
 * @example
 * 
 *   toDataUrl('http://goo.gl/AOxHAL', function(base64Img){
 *     console.log('IMAGE:',base64Img);
 *   })
 * 
 */
function toDataUrl(src, callback, outputFormat) {
  // Create an Image object
  var img = new Image();
  // Add CORS approval to prevent a tainted canvas
  img.crossOrigin = 'Anonymous';
  img.onload = function() {
    // Create an html canvas element
    var canvas = document.createElement('CANVAS');
    // Create a 2d context
    var ctx = canvas.getContext('2d');
    var dataURL;
    // Resize the canavas to the original image dimensions
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    // Draw the image to a canvas
    ctx.drawImage(this, 0, 0);
    // Convert the canvas to a data url
    dataURL = canvas.toDataURL(outputFormat);
    // Return the data url via callback
    callback(dataURL);
    // Mark the canvas to be ready for garbage 
    // collection
    canvas = null;
  };
  // Load the image
  img.src = src;
  // make sure the load event fires for cached images too
  if (img.complete || img.complete === undefined) {
    // Flush cache
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    // Try again
    img.src = src;
  }
}