<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\TB_DASHBOARDS\DashboardsRepository;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    private $dashboards;

    private $datasources;

    public function __construct(DashboardsRepository $dashboards)
    {
        $this->dashboards = $dashboards;
    }

    public function getAllDashboard()
    {
        return $this->dashboards->getAllDashboard();
    }

    public function getDashboardById($dashboard_id)
    {
        return $this->dashboards->getDashboardById($dashboard_id);
    }

    public function createDashboard(Request $request)
    {
        return $this->dashboards->createDashboard($request->get('name'));
    }

    public function updateDashboardLayout(Request $request)
    {
        return $this->dashboards->updateDashboardLayout($request->get('dashboard_id'), $request->get('dashboard'));
    }

    public function updateDashboard(Request $request)
    {
        return $this->dashboards->updateDashboard($request->get('dashboard_id'), $request->get('name'));
    }

    public function deleteDashboard(Request $request)
    {
        return $this->dashboards->deleteDashboard($request->get('dashboard_id'));
    }

}