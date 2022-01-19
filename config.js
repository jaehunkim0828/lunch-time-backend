import dotenv from 'dotenv';
dotenv.config();

export const config = {
    key: {
        secretKey: process.env.SECRET_KEY,
        kakaoKey: process.env.KAKAO_REST_API_KEY,
        jsKey: process.env.KAKAO_JS_KEY,
    }
}