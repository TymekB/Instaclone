import Post from "../models/Post";

const GetAlbums = async (userId: number|null = null): Promise<any> => {
    let url = 'https://jsonplaceholder.typicode.com/albums';

    if (userId !== null) {
        url += `?userId=${userId}`;
    }

    const response = await fetch(url);
    return await response.json();
};

const GetPosts = async (userId: number|null = null): Promise<Post[]> => {
    const albums = await GetAlbums(userId);

    return albums.map((post: any): Post => {
        return new Post(post.id, post.userId, post.title);
    }).sort((a: Post, b: Post) => b.id - a.id);
}
export default GetPosts;
