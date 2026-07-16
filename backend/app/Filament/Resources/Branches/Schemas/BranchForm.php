<?php

namespace App\Filament\Resources\Branches\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class BranchForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('branch_name')
                    ->label('Branch Name')
                    ->placeholder('Pampanga Showroom')
                    ->required()
                    ->maxLength(255)
                    ->live(onBlur: true)
                    ->afterStateUpdated(function (
                        Get $get,
                        Set $set,
                        ?string $old,
                        ?string $state,
                    ) {
                        // Auto-update slug only if it hasn't been manually edited.
                        if (($get('slug') ?? '') === Str::slug($old)) {
                            $set('slug', Str::slug($state));
                        }

                        $oldBranchCode = $old
                            ? 'BR-' . Str::upper(Str::before($old, ' '))
                            : '';

                        $newBranchCode = 'BR-' . Str::upper(Str::before($state ?? '', ' '));

                        $currentBranchCode = $get('branch_code') ?? '';

                        if ($currentBranchCode === '' || $currentBranchCode === $oldBranchCode) {
                            $set('branch_code', $newBranchCode);
                        }
                    }),
                TextInput::make('slug')
                    ->maxLength(255)
                    ->placeholder('pampanga-showroom')
                    ->unique(ignoreRecord: true)
                    ->required(),
                TextInput::make('branch_code')
                    ->placeholder('BR-PAMPANGA')
                    ->unique(ignoreRecord: true)
                    ->required(),
                Select::make('status')
                    ->default('active')
                    ->options(['active' => 'Active', 'inactive' => 'Inactive'])
                    ->required(),
                FileUpload::make('featured_image')
                    ->imageEditor()
                    ->disk('public')
                    ->directory('branches')
                    ->nullable()
                    ->image(),
                Textarea::make('address')
                    ->required(),
                TextInput::make('city')
                    ->required(),
                TextInput::make('province')
                    ->required(),
                TextInput::make('postal_code')
                    ->nullable(),
                TextInput::make('contact_number')
                    ->nullable(),
                TextInput::make('email')
                    ->nullable()
                    ->label('Email address')
                    ->email(),
                TextInput::make('business_hours')
                    ->nullable(),
                TextInput::make('longitude')
                    ->minValue(-180)
                    ->maxValue(180)
                    ->placeholder('120.680260')
                    ->required()
                    ->numeric(),
                TextInput::make('latitude')
                    ->minValue(-90)
                    ->maxValue(90)
                    ->placeholder('15.038862')
                    ->required()
                    ->numeric(),
                Textarea::make('description')
                    ->nullable()
                    ->columnSpanFull(),                
            ]);
    }
}
