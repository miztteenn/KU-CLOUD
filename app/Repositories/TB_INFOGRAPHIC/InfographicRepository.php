<?php
/**
 * Created by PhpStorm.
 * User: TEAM
 * Date: 10/29/2018
 * Time: 10:19 AM
 */

namespace App\Repositories\TB_INFOGRAPHIC;


interface InfographicRepository
{
    public function getAll();

    public function getInfographicByUserID($user_id);

    public function getInfographicByInfoID($info_id);

    public function createInfoDatasource(array  $attr);

    public function getInfoDatasourceByInfoID($info_id);

    //Custom function
    public function getInfographicByCompanyId($user_id, $company_id);
}