<?php 

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * 全アプリケーションサービスの登録
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * 全アプリケーションサービスの初期起動
     *
     * @return void
     */
    public function boot()
    {
        // クラスベースのコンポーザを使用する
        View::composer(
            'profile', 'App\Http\View\Composers\ProfileComposer'
        );

        // クロージャベースのコンポーザを使用する
        View::composer('dashboard', function ($view) {
            //
        });
    }
}