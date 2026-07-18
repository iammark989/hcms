<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        Post::create([
            'category_id' => '1',
            'author_id' => '1',
            'title' => 'One Piece SBS: The Questions Behind the Grand Adventure',
            'slug' => 'one-piece-sbs-questions-behind-the-grand-adventure',
            'excerpt' => "Explore the SBS corner of One Piece, where reader questions, character details, humor, and behind-the-scenes insights add another layer to the world of the manga.",
            'content' => "For many One Piece readers, reaching the end of a manga volume means there is still something special left to discover: the SBS. This question-and-answer section gives readers a chance to explore details that may not appear directly in the main story.
                        
                        From lighthearted questions to interesting details about characters and the world they live in, the SBS has become a memorable part of the One Piece reading experience. It offers fans another way to engage with the series beyond its chapters and adventures.
                        
                        For longtime readers, these additional details can make revisiting the manga even more enjoyable. For new readers, the SBS is a reminder that sometimes the smallest details can make a fictional world feel much larger.",
            'featured_image' => 'posts/one-piece-sbs-questions-behind-the-grand-adventure.png',
            'status' => 'published',
            'published_at' => '2026-07-01',
        ]);
        
        Post::create([
            'category_id' => '1',
            'author_id' => '1',
            'title' => 'Why Manga Continues to Capture Readers Around the World',
            'slug' => 'why-manga-continues-to-capture-readers',
            'excerpt' => "From unforgettable characters to visual storytelling, discover some of the qualities that have helped manga connect with readers across generations and cultures.",
            'content' => "Manga has grown from a popular form of Japanese entertainment into a global reading phenomenon. Today, readers from different countries and generations enjoy stories covering adventure, romance, sports, mystery, comedy, and countless other genres.
                          
                        One of manga's greatest strengths is the combination of written storytelling and visual expression. A single panel can communicate emotion, movement, or atmosphere in ways that complement the dialogue and narration.
                        
                        The wide variety of stories available also means that there is often something for every kind of reader. Whether someone is looking for a long-running adventure or a quiet story about everyday life, manga provides many different worlds waiting to be explored.",
            'featured_image' => 'posts/why-manga-continues-to-capture-readers.png',
            'status' => 'published',
            'published_at' => '2026-07-15',
        ]);
       
        Post::create([
            'category_id' => '2',
            'author_id' => '2',
            'title' => 'A Journey Through Middle-earth: Why Fantasy Worlds Stay With Us',
            'slug' => 'journey-through-middle-earth-fantasy-worlds',
            'excerpt' => "Explore how richly imagined fantasy worlds can inspire generations of readers and why stories of adventure, friendship, and courage remain timeless.",
            'content' => "Great fantasy stories invite readers to leave the familiar behind and enter worlds shaped by imagination. Middle-earth remains one of literature's most recognizable examples of how detailed world-building can make a fictional place feel alive.

                        The appeal of fantasy, however, goes beyond imaginary landscapes and legendary creatures. At the center of many memorable stories are themes that readers recognize from their own lives: friendship, courage, sacrifice, hope, and the struggle between difficult choices.

                        These themes allow fantasy stories to remain meaningful even as generations of readers change. A journey through an imaginary world can sometimes help us reflect on our own.",
            'featured_image' => 'posts/journey-through-middle-earth-fantasy-worlds.png',
            'status' => 'published',
            'published_at' => '2026-07-05',
        ]);
       
        Post::create([
            'category_id' => '2',
            'author_id' => '2',
            'title' => 'Five Reasons to Rediscover Classic Fantasy Literature',
            'slug' => 'five-reasons-to-rediscover-classic-fantasy-literature',
            'excerpt' => "Classic fantasy continues to influence modern storytelling. Here are five reasons readers may want to explore the books that helped shape the genre.",
            'content' => "Fantasy literature has evolved significantly over the years, but many modern stories continue to draw inspiration from earlier works.

                        Classic fantasy offers readers an opportunity to explore the foundations of familiar storytelling traditions, from epic journeys and mythical worlds to unlikely heroes facing extraordinary challenges.

                        Returning to these stories can also provide a new perspective on contemporary fantasy. By understanding the works that influenced the genre, readers can better appreciate how today's authors continue to reinterpret and expand upon familiar ideas.",
            'featured_image' => 'posts/five-reasons-to-rediscover-classic-fantasy-literature.png',
            'status' => 'draft',
            'published_at' => null,
        ]);
        
        Post::create([
            'category_id' => '3',
            'author_id' => '4',
            'title' => 'Exploring the Universe Through Popular Science Books',
            'slug' => 'exploring-the-universe-through-popular-science-books',
            'excerpt' => "You don't need to be a scientist to become curious about the universe. Popular science books can make complex questions more approachable for everyday readers.",
            'content' => "The universe is filled with questions that have fascinated humanity for centuries. How did everything begin? What are black holes? How does time work? While the science behind these questions can be complex, popular science books help introduce these ideas to a wider audience.

                    Good educational writing can transform difficult concepts into opportunities for curiosity. Readers may not understand every equation or theory, but they can still appreciate the questions scientists are trying to answer.

                    Reading about science is not only about learning facts. It is also about discovering how much remains unknown and developing a deeper curiosity about the world—and universe—around us.",
            'featured_image' => 'posts/exploring-the-universe-through-popular-science-books.png',
            'status' => 'published',
            'published_at' => '2026-07-10',
        ]);
        
        Post::create([
            'category_id' => '3',
            'author_id' => '4',
            'title' => 'Why Reference Books Still Matter in the Digital Age',
            'slug' => 'why-reference-books-still-matter-digital-age',
            'excerpt' => "You don't need to be a scientist to become curious about the universe. Popular science books can make complex questions more approachable for everyday readers.",
            'content' => "The universe is filled with questions that have fascinated humanity for centuries. How did everything begin? What are black holes? How does time work? While the science behind these questions can be complex, popular science books help introduce these ideas to a wider audience.

                    Good educational writing can transform difficult concepts into opportunities for curiosity. Readers may not understand every equation or theory, but they can still appreciate the questions scientists are trying to answer.

                    Reading about science is not only about learning facts. It is also about discovering how much remains unknown and developing a deeper curiosity about the world—and universe—around us.",
            'featured_image' => 'posts/why-reference-books-still-matter-digital-age.png',
            'status' => 'published',
            'published_at' => '2026-07-03',
        ]);
        
        Post::create([
            'category_id' => '4',
            'author_id' => '3',
            'title' => 'Small Habits, Meaningful Changes: Building a Consistent Reading Routine',
            'slug' => 'small-habits-building-consistent-reading-routine',
            'excerpt' => "Want to read more books? Building a consistent reading habit may begin with smaller and more manageable changes than you expect.",
            'content' => "Many people want to read more but struggle to find enough time. One approach is to stop focusing on reading an entire book quickly and instead concentrate on creating a small, repeatable routine.

                        Reading a few pages every day may not seem significant at first, but consistency allows those pages to accumulate over time. Keeping a book somewhere visible or choosing a regular reading time can also make the habit easier to remember.

                        The goal is not to compete with other readers or finish the largest number of books. A sustainable reading habit should make reading an enjoyable and natural part of everyday life.",
            'featured_image' => 'posts/small-habits-building-consistent-reading-routine.png',
            'status' => 'published',
            'published_at' => '2026-07-10',
        ]);
       
        Post::create([
            'category_id' => '4',
            'author_id' => '3',
            'title' => 'Creating a Personal Reading Goal That Actually Works',
            'slug' => 'creating-personal-reading-goal-that-works',
            'excerpt' => "Reading goals can be motivating, but the best goal is one that fits your schedule, interests, and reasons for reading.",
            'content' => "Setting a goal to read more books can be exciting at the beginning of the year, but ambitious targets can sometimes turn an enjoyable activity into an obligation.

                        Instead of focusing entirely on the number of books completed, readers can create goals around consistency and exploration. This might mean reading for fifteen minutes each evening, exploring a new genre, or visiting a bookstore once a month.

                        A useful reading goal should encourage curiosity rather than pressure. The best reading journey is one that you can continue long after the initial motivation has faded.",
            'featured_image' => 'posts/creating-personal-reading-goal-that-works.png',
            'status' => 'draft',
            'published_at' => null,
        ]);
        
        Post::create([
            'category_id' => '5',
            'author_id' => '5',
            'title' => 'Stories That Help Young Readers Discover the Joy of Books',
            'slug' => 'stories-help-young-readers-discover-joy-books',
            'excerpt' => "The right story can turn reading into an adventure and help young readers develop curiosity, imagination, and a lifelong appreciation for books.",
            'content' => "For young readers, a memorable book can become much more than a collection of words and pictures. Stories introduce children to new characters, unfamiliar places, and ideas that encourage them to use their imagination.

                        Books with humor, adventure, and relatable characters can make reading feel less like a task and more like a discovery. As children find stories they genuinely enjoy, they may become more interested in exploring books independently.

                        Helping young people develop a love of reading does not require starting with the longest or most difficult books. Sometimes all it takes is finding the right story at the right time.",
            'featured_image' => 'posts/stories-help-young-readers-discover-joy-books.png',
            'status' => 'published',
            'published_at' => '2026-07-08',
        ]);
     
        Post::create([
            'category_id' => '5',
            'author_id' => '5',
            'title' => 'How to Choose the Right Book for a Young Reader',
            'slug' => 'how-to-choose-right-book-young-reader',
            'excerpt' => "Choosing books for children becomes easier when we consider their interests, reading experience, and natural curiosity.",
            'content' => "Every young reader is different. Some are fascinated by animals and nature, while others prefer fantasy adventures, mysteries, humor, or stories about everyday life.

                        When choosing a book, reading level is important, but interest matters too. A child who is genuinely curious about a subject may be more willing to explore a challenging book than one that matches their reading level but not their interests.

                        Parents, teachers, and family members can encourage reading by providing choices rather than selecting every book for a child. Visiting libraries and bookstores together can also turn choosing the next book into part of the reading experience.",
            'featured_image' => 'posts/how-to-choose-right-book-young-reader.png',
            'status' => 'published',
            'published_at' => '2026-07-02',
        ]);
          
    }
}
