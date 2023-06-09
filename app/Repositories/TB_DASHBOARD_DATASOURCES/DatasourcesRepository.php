<?php

namespace App\Repositories\TB_DASHBOARD_DATASOURCES;

interface DatasourcesRepository
{
    public function getDatasources($dashboard_id);

    public function getDatasourcesCustomer($user_id);

    public function getDatasourcesPublic();

    public function createDatasource(array $attr);

    public function updateDatasource(array $attr);

    public function deleteDatasource($dashboard_id, $id);
}
