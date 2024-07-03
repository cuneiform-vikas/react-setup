declare module 'redux-persist-transform-encrypt' {
    import { Transform } from 'redux-persist';

    interface EncryptTransformConfig {
        secretKey: string;
        onError?: (error: Error) => void;
    }

    function encryptTransform(config: EncryptTransformConfig): Transform<any, any>;

    export { encryptTransform };
}