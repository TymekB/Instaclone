import Post from "../../models/Post";

const GetAlbums = async (): Promise<any> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    return await response.json();
};

const GetUserPosts = async (): Promise<Post[]> => {
    const albums = await GetAlbums();

    return albums.map((post: any): Post => {
        return new Post(post.id, post.userId, post.title);
    }).sort((a: Post, b: Post) => b.id - a.id);
};
export default GetUserPosts;
