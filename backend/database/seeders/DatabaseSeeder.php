<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;


class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

       $this->call([
        AdminUserSeeder::class,
        CategorySeeder::class,
        AuthorSeeder::class,
        PostSeeder::class,
        BranchSeeder::class,
    ]);

    $this->copyAssets('authors', 'authors');
    $this->copyAssets('posts', 'posts');
    $this->copyAssets('branches', 'branches');
    
    }

    private function copyAssets(string $sourceFolder, string $destinationFolder): void
        {
            $sourcePath = database_path("seeders/assets/{$sourceFolder}");

            if (! File::exists($sourcePath)) {
                return;
            }

            foreach (File::files($sourcePath) as $file) {
                Storage::disk('public')->put(
                    "{$destinationFolder}/{$file->getFilename()}",
                    File::get($file)
                );
            }
        }

}
