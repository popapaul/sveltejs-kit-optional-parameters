import type { ParamMatcher } from '@sveltejs/kit';
export const match: ParamMatcher = (param) => {
	return param.length === 2;
};

//export default 'en';

// Perhaps a matcher could also return a default value when it is not matched;
// This maybe would only make sense in case of optional parameters;
