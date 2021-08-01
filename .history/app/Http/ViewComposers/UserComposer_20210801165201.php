<?php 
namespace App\Http\View\Composers;

use Illuminate\View\View;


class ProfileComposer
{
    protected $auth;

    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }
    
    public function compose(View $view)
    {
        $view->with('count', $this->users->count());
    }
}