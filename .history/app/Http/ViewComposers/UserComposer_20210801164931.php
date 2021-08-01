<?php 
namespace App\Http\View\Composers;

use Illuminate\View\View;
use App\Repositories\UserRepository;

class ProfileComposer
{
    public function compose(View $view)
    {
        $view->with('count', $this->users->count());
    }
}