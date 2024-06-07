const getDefaultDocumentTypes = () => ([
    {
        type: 'ID',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'pdf', name: 'Document PDF417 Barcode', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    },
    {
        type: 'Passport',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'mrz', name: 'Passport Front', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    },
    {
        type: 'PassportCard',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'mrz', name: 'Passport Back', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    },
    {
        type: 'GreenCard',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'mrz', name: 'Passport Front', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    },
    {
        type: 'InternationalId',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'back', name: 'Document Back', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    }
])

export const getDefaultWebLibConfiguration = () => {
    // @ts-ignore
    const devLicenseKey = import.meta.env.VITE_VUE_DEV_LICENSE_KEY || '';
    // @ts-ignore
    const productionLicenseKey = import.meta.env.VITE_VUE_PROD_LICENSE_KEY || '';

    return {
    fixFrontOrientAfterUpload: true,
    useCDN: false,
    // chunkPublicPath: 'networks',
    // networkUrl: 'networks',
    el: "videoCapturingEl",
    isShowDocumentTypeSelect: false,
    isShowGuidelinesButton: false,
    resizeUploadedImage: 2000,
    autoContinue: true,
    realFaceMode: 'all',
    documentTypes: getDefaultDocumentTypes(),
    submit: (data: any) => {
        console.clear();
        console.log('submitted data', data);
    },
    onChange(data: any) {
        console.log('change')
        console.log(data)
    },
    licenseKey: devLicenseKey
}}
