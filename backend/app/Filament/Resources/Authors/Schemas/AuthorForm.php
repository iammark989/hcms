<?php

namespace App\Filament\Resources\Authors\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class AuthorForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Author Name')
                    ->placeholder('Juan Hand')
                    ->maxLength(255)
                    ->required(),
                TextInput::make('email')
                    ->label('Email address')
                    ->placeholder('juan@email.com')
                    ->email()
                    ->unique(ignoreRecord: true)
                    ->required(),
                Textarea::make('biography')
                    ->nullable()
                    ->rows(6)
                    ->columnSpanFull(),
                FileUpload::make('profile_image')
                    ->nullable()
                    ->imageEditor()
                    ->disk('public')
                    ->directory('authors')
                    ->avatar()
                    ->image(),
            ]);
    }
}
