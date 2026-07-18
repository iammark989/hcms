<?php

namespace Database\Seeders;

use App\Models\Author;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Author::create([
            'name' => 'Eiichiro Oda',
            'email' => 'oda@email.com',
            'biography' => 'Japanese manga artist best known as the creator of One Piece.',
            'profile_image' => 'authors/oda.jpg',
        ]);
        Author::create([
            'name' => 'J. R. R. Tolkien',
            'email' => 'tolkien@email.com',
            'biography' => 'English writer and scholar best known for The Hobbit and The Lord of the Rings.',
            'profile_image' => 'authors/tolkien.jpg',
        ]);
        Author::create([
            'name' => 'James Clear',
            'email' => 'clear@email.com',
            'biography' => 'Author known for Atomic Habits.',
            'profile_image' => 'authors/clear.jpg',
        ]);
        Author::create([
            'name' => 'Stephen Hawking',
            'email' => 'hawking@email.com',
            'biography' => 'Theoretical physicist and author of popular science works such as A Brief History of Time.',
            'profile_image' => 'authors/hawking.jpg',
        ]);
        Author::create([
            'name' => 'Roald Dahl',
            'email' => 'dahl@email.com',
            'biography' => "Children's author known for works including Charlie and the Chocolate Factory and Matilda.",
            'profile_image' => 'authors/dahl.jpg',
        ]);
    }
}
