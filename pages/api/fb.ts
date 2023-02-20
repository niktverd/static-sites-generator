import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    ok: boolean;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { query } = req;
    console.log(query);
    axios.get(`https://www.facebook.com/tr?id=${query.s}`);
    res.status(200).json({ ok: true });
}
