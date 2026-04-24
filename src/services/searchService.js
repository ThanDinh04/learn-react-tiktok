import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, per_page = 5) => {
    try {
        const res = await httpRequest.get('search/users', {
            params: {
                q,
                per_page,
            },
        });

        return res.items;
    } catch (error) {
        console.log(error);
    }
};
