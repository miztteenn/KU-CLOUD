<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\CreateDashboard;
use App\Http\Requests\Dashboard\DeleteDashboard;
use App\Http\Requests\Dashboard\UpdateDashboard;
use App\Http\Requests\Dashboard\UpdateDashboardLayout;
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

    public function getAllPublicDashboard(Request $request)
    {
        $data = $this->dashboards->getAllPublicDashboard($request->get('start'), $request->get('length'), $request->get('search'));
        return response()->json(compact('data'), 200);
    }

    public function getDashboardPublicById($dashboard_id)
    {
        $data = $this->dashboards->getDashboardPublicById($dashboard_id);
        return response()->json(compact('data'), 200);
    }

    public function getDashboardById($dashboard_id)
    {
        return $this->dashboards->getDashboardById($dashboard_id);
    }

    public function createDashboard(CreateDashboard $request)
    {
        $attr = [
            'name' => $request->get('name'),
            'description' => $request->get('desc'),
            'is_public' => $request->get('is_public'),
        ];
        if ($request->get('customer_id') !== null) {
            $attr['user_id'] = $request->get('customer_id');
        }
        return $this->dashboards->createDashboard($attr);
    }

    public function updateDashboardLayout(UpdateDashboardLayout $request)
    {
        return $this->dashboards->updateDashboardLayout($request->get('dashboard_id'), $request->get('dashboard'));
    }

    public function updateDashboard(UpdateDashboard $request)
    {
        return $this->dashboards->updateDashboard($request->get('dashboard_id'), $request->get('name'), $request->get('desc'), $request->get('is_public'));
    }

    public function deleteDashboard(DeleteDashboard $request)
    {
        return $this->dashboards->deleteDashboard($request->get('dashboard_id'));
    }

    //For Company
    public function getDashboardCustomerInCompany()
    {
        $data = $this->dashboards->getDashboardCustomerInCompany();
        return response()->json(\compact('data'), 200);
    }

}
