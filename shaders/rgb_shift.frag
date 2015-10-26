#ifdef GL_ES
    precision mediump float;
#endif

varying vec2 vTexCoord;
uniform vec2 uResolution;
uniform sampler2D uImage0;

const float 
	OUTER_RADIUS = 0.6,
	INNER_RADIUS = 0.3,
	INTENSITY = 0.05;

void main()
{
	vec4 color = texture2D(uImage0, vTexCoord);
	
	vec2 pos = gl_FragCoord.xy / uResolution - 0.5;
	float len = length(pos);
	float vignette = smoothstep(OUTER_RADIUS, INNER_RADIUS, len);
	
	vec2 uv = gl_FragCoord.xy / uResolution;
	
	float cR = texture2D(uImage0, uv - (vignette * (pos * (len * INTENSITY)))).r;
	float cG = texture2D(uImage0, uv).g;
	float cB = texture2D(uImage0, uv + (vignette * (pos * (len * INTENSITY)))).b;
	
	gl_FragColor = vec4(cR, cG, cB, 1.0);
}

