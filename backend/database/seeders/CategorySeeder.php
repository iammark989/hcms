<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         Category::create([
        'name' => 'Manga & Graphic Novels',
        'slug' => 'manga-graphic-novels',
        'description' => 'manga, comics, manhwa, graphic novels, and related recommendations.',
        ]);

        Category::create([
            'name' => 'Fiction & Literature',
            'slug' => 'fiction-literature',
            'description' => 'fantasy, mystery, science fiction, romance, classics, and novels in general.',
        ]);

        Category::create([
            'name' => 'Educational & Reference',
            'slug' => 'educational-reference',
            'description' => 'medical, science, technology, history, academic, and reference books.',
        ]);

        Category::create([
            'name' => 'Personal Development',
            'slug' => 'personal-development',
            'description' => 'self-improvement, productivity, career, leadership, and personal finance.',
        ]);

        Category::create([
            'name' => 'Children & Young Readers',
            'slug' => 'children-young-readers',
            'description' => "children's books, picture books, educational reading, and young adult titles.",
        ]);
    }
}
