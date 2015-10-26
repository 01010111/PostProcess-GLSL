#ifdef GL_ES
    precision mediump float;
#endif

varying vec2 vTexCoord;
uniform vec2 uResolution;
uniform sampler2D uImage0;

const float 
	OUTER_RADIUS = 0.6,
	INNER_RADIUS = 0.3,
	INTENSITY = 0.5;

void main()
{
	vec4 color = texture2D(uImage0, vTexCoord);
	
	vec2 relativePosition = gl_FragCoord.xy / uResolution - 0.5;
	float len = length(relativePosition);
	float vignette = smoothstep(OUTER_RADIUS, INNER_RADIUS, len);
	color.rgb = mix(color.rgb, color.rgb * vignette, INTENSITY);
	
	gl_FragColor = color;
}