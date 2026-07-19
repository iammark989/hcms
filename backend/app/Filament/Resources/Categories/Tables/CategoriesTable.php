<?php

namespace App\Filament\Resources\Categories\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Notifications\Notification;
use Filament\Support\Enums\FontWeight;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Validation\ValidationException;

class CategoriesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->weight(FontWeight::Bold)
                    ->searchable()
                    ->sortable(),
                TextColumn::make('slug')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('description')
                    ->limit(50)
                    ->toggleable(),
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
                //ViewAction::make(),
                EditAction::make(),
                DeleteAction::make()
                        ->before(function ($record) {

                    if ($record->posts()->exists()) {

                        Notification::make()
                            ->danger()
                            ->title('Cannot delete category')
                            ->body('This category is assigned to one or more posts.')
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
               // ]),
            ]);
    }
}
