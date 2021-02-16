import httpClient from './httpClient';

const END_POINT = '/prizes';

const getAllPrizes = () => httpClient.get(END_POINT);

const getPrize = (_id) => httpClient.get(`${END_POINT}/${_id}`);
const redeemPrize = (_id) => httpClient.put(`${END_POINT}/${_id}/redeem`);

export {
    getAllPrizes,
    getPrize,
    redeemPrize
}