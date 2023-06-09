<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Districts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('DISTRICTS', function (Blueprint $table) {
            $table->string('district_id', 6);
            $table->integer('zip_code')->unsigned();
            $table->string('name_th', 150);
            $table->string('name_en', 150);
            $table->integer('amphure_id')->unsigned();
            $table->primary('district_id');
            $table->foreign('amphure_id')
                ->references('amphure_id')->on('AMPHURES')
                ->onDelete('cascade');
        });

        // Schema::table('TB_USERS', function (Blueprint $table) {
        //     $table->foreign('district_id')
        //         ->references('district_id')->on('Districts')
        //         ->onDelete('cascade');
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('DISTRICTS');
    }
}
