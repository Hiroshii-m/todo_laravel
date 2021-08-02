<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RenameClustersOnListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::rename('lists', 'clusters');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::rename('clusters', 'lists');
        Schema::table('lists', function (Blueprint $table) {
            $table->foreign('board_id')->references('id')->on('boards');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }
}
