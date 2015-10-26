#ifdef GL_ES
    precision mediump float;
#endif

varying vec2 vTexCoord;
uniform sampler2D uImage0;

void main(void)
{
    vec4 color = texture2D(uImage0, vTexCoord);
    float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
	
	if	(gray < 0.2)		color = vec4(0.10, 0.20, 0.25, 1.0);
	else if	(gray < 0.4)	color = vec4(0.24, 0.38, 0.44, 1.0);
	else if	(gray < 0.6)	color = vec4(0.57, 0.67, 0.62, 1.0);
	else if	(gray < 0.8)	color = vec4(0.82, 0.86, 0.74, 1.0);
	else					color = vec4(0.99, 1.00, 0.96, 1.0);
	
	gl_FragColor = color;
}