import { HttpClient } from '../utils/httpClient';
import { HackerNewsItem } from '../interfaces/hackerNewsItem';

const client = new HttpClient('https://hacker-news.firebaseio.com/v0');

let topStoryIds: number[] = [];
let story: HackerNewsItem;

describe('HackerNews API Tests', () => {
  beforeAll(async () => {
    console.log('Getting list of top stories');
    // Casting it to number for error catching. 
    // If the API structure changes unexpectedly (returns a string like "12345"), TypeScript can help catch bugs.
    topStoryIds = await client.get<number[]>('topstories.json');
    // at least one stroy id should be in the list to proceed with the test. Moreover, in interface class the kids
    // object is optional. Therefore the api should return kids object (Other option is I remove optional(?) from interface class)
    expect(topStoryIds).toBeDefined();
    expect(topStoryIds.length).toBeGreaterThan(0);

    console.log('Getting details by the ID of the top story');
    // Casting into hackerNeesItem object. In interface, id and type should exist in the response
    story = await client.get<HackerNewsItem>(`item/${topStoryIds[0]}.json`);
  });

  test('Should get top story IDs', () => {
    expect(Array.isArray(topStoryIds)).toBe(true);
    expect(topStoryIds.length).toBeGreaterThan(0);
  });

  test('Should get a top story item by ID', () => {
    expect(story.kids).not.toBeNull();
    expect(story.kids?.length).toBeGreaterThan(0);
    expect(story.type).toBe('story');
  });

  test('Should get the first comment of a top story', async () => {
    console.log('Getting a comment of the top story');
    if (story.kids && story.kids.length > 0) {
      const comment = await client.get<HackerNewsItem>(`item/${story.kids[0]}.json`);
      expect(comment.type).toBe('comment');
      expect(comment).toHaveProperty('text');
    } else {
      console.warn(`Top stroy doesn't have any comment`);
    }
  });

  test('Bug: Test non existent item', async () => {
    try {
      // currently the api returns null for non-existent items like long number or text
      const nonExistentItem = await client.get<HackerNewsItem>('item/12345678909876654332.json');
      expect(nonExistentItem).toBeNull(); // Hacker News returns null for non-existent items
    } catch (error) {
      throw new Error('Non existent item should return null');
    }
  });

});
