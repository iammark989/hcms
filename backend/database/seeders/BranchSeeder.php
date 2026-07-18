<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         Branch::create([
        'branch_name' => 'Pampanga SMP',
        'slug' => 'pampanga-smp',
        'branch_code' => 'BR-PAMPANGA-SMP',
        'address' => 'Ground Floor, UNIT 1111 SM City Pampanga, Jose Abad Santos Ave',
        'city' => 'San Fernando',
        'province' => 'Pampanga',
        'postal_code' => '2000',
        'contact_number' => '1234567890',
        'email' => 'pampangasmp@email.com',
        'latitude' => '15.052088',
        'longitude' => '120.700049',
        'business_hours' => '10am - 9pm',
        'description' => 'Chapter & CO. SM Pampanga Branch',
        'featured_image' => 'branches/pampangasmp.png',
        'status' => 'active',
        ]);

         Branch::create([
        'branch_name' => 'Pampanga SMC',
        'slug' => 'pampanga-smc',
        'branch_code' => 'BR-PAMPANGA-SMC',
        'address' => 'SM CLARK, M.A. Roxas Hiway, Clark Freeport',
        'city' => 'Angeles',
        'province' => 'Pampanga',
        'postal_code' => '2009',
        'contact_number' => '1234567890',
        'email' => 'pampangasmc@email.com',
        'latitude' => '15.168311',
        'longitude' => '120.579639',
        'business_hours' => '10am - 9pm',
        'description' => 'Chapter & CO. SM Pampanga Clark',
        'featured_image' => 'branches/pampangasmc.png',
        'status' => 'active',
        ]);

        Branch::create([
        'branch_name' => 'Pampanga Downtown',
        'slug' => 'pampanga-downtown',
        'branch_code' => 'BR-PAMPANGA-downtown',
        'address' => 'B. Mendoza St.',
        'city' => 'San Fernando',
        'province' => 'Pampanga',
        'postal_code' => '2000',
        'contact_number' => '1234567890',
        'email' => 'pampangadowntown@email.com',
        'latitude' => '15.029118',
        'longitude' => '120.692645',
        'business_hours' => '8am - 5pm',
        'description' => 'Chapter & CO. San Fernando Downtown Branch',
        'featured_image' => 'branches/pampangadowntown.png',
        'status' => 'inactive',
        ]);

        Branch::create([
        'branch_name' => 'Tarlac',
        'slug' => 'tarlac',
        'branch_code' => 'BR-TARLAC',
        'address' => 'Sto. Cristo, Metro Mall, MacArthur Highway',
        'city' => 'Tarlac',
        'province' => 'Tarlac',
        'postal_code' => '2300',
        'contact_number' => '1234567890',
        'email' => 'tarlac@email.com',
        'latitude' => '15.487527',
        'longitude' => '120.596641',
        'business_hours' => '9am - 6pm',
        'description' => 'Chapter & CO. Tarlac city Branch',
        'featured_image' => 'branches/tarlac.png',
        'status' => 'active',
        ]);

        Branch::create([
        'branch_name' => 'Bulacan',
        'slug' => 'bulacan',
        'branch_code' => 'BR-BULACAN',
        'address' => 'McArthur Highway, Provincial Capitol Compound',
        'city' => 'Malolos',
        'province' => 'Bulacan',
        'postal_code' => '3000',
        'contact_number' => '1234567890',
        'email' => 'bulacan@email.com',
        'latitude' => '14.854263',
        'longitude' => '120.815392',
        'business_hours' => '9am - 6pm',
        'description' => 'Chapter & CO. Malolos Bulacan Branch',
        'featured_image' => 'branches/bulacan.png',
        'status' => 'active',
        ]);

    }
}
