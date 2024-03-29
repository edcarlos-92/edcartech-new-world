// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sanityclient from '@sanity/client'

const config = {
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV ==="production",
    apiVersion: "2021-10-21",
    token: process.env.SANITY_API_TOKEN,
}

const client = sanityclient(config)

export default async function handler(req: NextApiRequest,  res: NextApiResponse) {
//createComment
    const {_id,name,email,comment}= JSON.parse(req.body);

    try{
        await client.create({
            _type:"comment",
            post:{
                _type:"reference",
                _ref:_id
            },
            name,
            email,
            comment
        });

    }catch(err){
        console.log(err)
    }

    res.status(200).json({ message: 'Comment Submited' })
}
