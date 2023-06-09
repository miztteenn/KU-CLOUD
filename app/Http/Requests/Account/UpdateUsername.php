<?php

namespace App\Http\Requests\Account;

use App\Http\Requests\FormRequest;

class UpdateUsername extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => 'required|unique:TB_USERS,username|max:10',
        ];
    }
}
