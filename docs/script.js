const glass = document.querySelector('.glass');
const hello = document.querySelector('.hello');
const depth = document.querySelector('.cutout-depth');
let previousGeometry = '';
let frame;
// Use the browser's actual font glyphs, not drawn paths or SVG letters.
function updateCutout() {
  if (!hello || !CSS.supports('mask-image', 'url("")')) return;
  const text = hello.querySelector('.hello-text');
  const rect = text.getBoundingClientRect();
  const page = document.body.getBoundingClientRect();
  const style = getComputedStyle(text);
  const width = document.body.clientWidth, height = document.body.offsetHeight;
  const x = rect.left - page.left, top = rect.top - page.top;
  const ratio = Math.min(devicePixelRatio || 1, 2);
  const font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  const geometry = [width,height,x,top,rect.width,rect.height,font,ratio].join(',');
  if (geometry === previousGeometry) return;
  function surface() {
    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(width * ratio);
    canvas.height = Math.ceil(height * ratio);
    const context = canvas.getContext('2d');
    context.scale(ratio, ratio);
    context.font = font;
    context.fontKerning = 'normal';
    return {canvas, context};
  }
  const glyph = surface();
  const metrics = glyph.context.measureText(text.textContent);
  const ascent = metrics.fontBoundingBoxAscent ?? metrics.actualBoundingBoxAscent;
  const descent = metrics.fontBoundingBoxDescent ?? metrics.actualBoundingBoxDescent;
  const baseline = top + (rect.height - ascent - descent) / 2 + ascent;
  glyph.context.fillText(text.textContent, x, baseline);
  const mask = surface();
  mask.context.fillStyle = '#fff';
  mask.context.fillRect(0, 0, width, height);
  mask.context.globalCompositeOperation = 'destination-out';
  mask.context.drawImage(glyph.canvas, 0, 0, width, height);
  const maskImage = `url("${mask.canvas.toDataURL()}")`;
  glass.style.maskImage = maskImage;
  glass.style.webkitMaskImage = maskImage;
  const edge = surface();
  edge.context.shadowColor = 'rgba(45,62,50,.25)';
  edge.context.shadowBlur = 4 * ratio;
  edge.context.shadowOffsetY = 3 * ratio;
  edge.context.drawImage(mask.canvas, 0, 0, width, height);
  edge.context.shadowColor = 'transparent';
  edge.context.globalCompositeOperation = 'destination-in';
  edge.context.drawImage(glyph.canvas, 0, 0, width, height);
  edge.context.globalCompositeOperation = 'source-over';
  edge.context.strokeStyle = 'rgba(255,255,255,.4)';
  edge.context.lineWidth = .7;
  edge.context.strokeText(text.textContent, x, baseline);
  depth.style.backgroundImage = `url("${edge.canvas.toDataURL()}")`;
  document.body.classList.add('cutout-ready');
  previousGeometry = geometry;
}
function scheduleCutout() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(updateCutout);
}
if (hello) {
  const observer = new ResizeObserver(scheduleCutout);
  observer.observe(document.querySelector('.page'));
  observer.observe(hello);
  addEventListener('resize', scheduleCutout);
  document.fonts.ready.then(() => { previousGeometry = ''; scheduleCutout(); });
}
const dialog = document.querySelector('dialog');
const imprint = document.querySelector('#imprint-link');
if (dialog && typeof dialog.showModal === 'function') {
  let closingTimer;
  function closeImprint() {
    if (!dialog.open || dialog.classList.contains('is-closing')) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dialog.close();
      return;
    }
    dialog.classList.add('is-closing');
    closingTimer = setTimeout(() => dialog.close(), 240);
  }
  imprint.addEventListener('click', event => {
    event.preventDefault();
    dialog.classList.remove('is-closing');
    dialog.showModal();
  });
  dialog.querySelector('.close').addEventListener('click', closeImprint);
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeImprint(); });
  dialog.addEventListener('close', () => {
    clearTimeout(closingTimer);
    dialog.classList.remove('is-closing');
  });
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeImprint();
  });
}
