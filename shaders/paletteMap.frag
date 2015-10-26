#ifdef GL_ES
   precision mediump float;
#endif

varying vec2 vTexCoord;
uniform sampler2D uImage0;

uniform sampler2D uPalette;
uniform float uPaletteWidth;
uniform float uPalettePosition;

void main(void)
{
   vec4 color = texture2D(uImage0, vTexCoord);
   float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));

   float position;
   position = round(gray * uPaletteWidth - 0.5);
   position = max(0, min(uPaletteWidth - 1, position));
   gl_FragColor = texture2D(position, uPalettePosition);
}