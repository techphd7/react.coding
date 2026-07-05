const conf={


    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteProjectName: String(import.meta.env.VITE_APPWRITE_PROJECT_NAME),
    appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),   
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
console.log(import.meta.env);
console.log(import.meta.env.VITE_APPWRITE_ENDPOINT);
console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export default conf