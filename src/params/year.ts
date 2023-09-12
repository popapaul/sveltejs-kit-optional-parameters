import type { ParamMatcher } from '@sveltejs/kit';
const currentYear = new Date().getFullYear();
export const match: ParamMatcher = (param) => {
	return param.length == 4 && Number(param) > 2000 && Number(param) <= currentYear;
};

//export default currentYear.toString();

// Perhaps a matcher could also return a default value when it is not matched;
// This maybe would only make sense in case of optional parameters;
