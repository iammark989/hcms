<?php

namespace App\Filament\Resources\Categories\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;
use Illuminate\Support\Str;

class CategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                ->label('Category Name')
                ->placeholder('Web Development')
                ->required()
                ->maxLength(255)
                ->live(onBlur: true)
                ->afterStateUpdated(function (
                    Get $get,
                    Set $set,
                    ?string $old,
                    ?string $state,
                ) {
                    if (($get('slug') ?? '') !== Str::slug($old)) {
                        return;
                    }

                    $set('slug', Str::slug($state));
                }),
                TextInput::make('slug')
                    ->placeholder('web-developer')
                    ->required()
                    ->unique()
                    ->maxLength(255),
                Textarea::make('description')
                    ->placeholder('Enter a brief description...')
                    ->nullable()
                    ->rows(5)
                    ->columnSpanFull(),
            ]);
    }
}
