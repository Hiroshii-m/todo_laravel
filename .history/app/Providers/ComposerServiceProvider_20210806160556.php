<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use App\Http\ViewComposers\UserComposer;


class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // layoutsディレクトリ配下のビューテンプレートが読み込まれた場合にUserComposerを読み込む（=$userが作られる）
        View::composers([
            UserComposer::class => 'layouts.*'
        ]);
        View::composers([
            UserComposer::class => 'clusters.*'
        ]);
    }
}
