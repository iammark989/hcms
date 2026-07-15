<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('branches', function (Blueprint $table) {
            $table->id();
            $table->string('branch_name');
            $table->string('slug')->unique();
            $table->string('branch_code')->unique()->nullable();
            $table->string('address');
            $table->string('city');
            $table->string('province');
            $table->string('postal_code')->nullable();
            $table->string('contact_number')->nullable();
            $table->string('email')->nullable();
            $table->decimal('latitude',10,7);
            $table->decimal('longitude',10,7);
            $table->string('business_hours')->nullable();
            $table->text('description')->nullable();
            $table->string('featured_image')->nullable();
            $table->enum('status',[
                'active',
                'inactive',
            ]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('branches');
    }
};
