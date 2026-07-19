<?php

namespace App\Filament\Resources\Authors\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Notifications\Notification;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Validation\ValidationException;

class AuthorsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('profile_image')
                    ->label('Photo')
                    ->circular(),
                TextColumn::make('name')
                    ->sortable(),
                TextColumn::make('email')
                    ->label('Email address')
                    ->searchable(),
                TextColumn::make('biography'),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make()
                ->before(function ($record) {

                    if ($record->posts()->exists()) {

                        Notification::make()
                            ->danger()
                            ->title('Cannot delete author')
                            ->body('This author is assigned to one or more posts.')
                            ->send();

                         throw ValidationException::withMessages([
                        'delete' => 'Please remove or reassign the related posts first.',
                    ]);
                    }
                }),
            ])
            ->toolbarActions([
                //BulkActionGroup::make([
                //    DeleteBulkAction::make(),
                //]),
            ]);
    }
}
