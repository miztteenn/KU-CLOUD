<?php

namespace App\Http\Requests\Account;

use App\Http\Requests\FormRequest;

class AddPhone extends FormRequest
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
            'phone' => 'required|unique:TB_PHONE,phone_user',
        ];
    }
}
