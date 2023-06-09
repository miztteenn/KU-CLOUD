<?php

namespace App\Weka\Associations;

use App\TB_DATA_ANALYSIS;

class Association
{
    private $cmd;

    private $param;

    private $pathWekaLib;

    private $pathWekaInput;

    public function __construct()
    {
        $this->cmd = 'java "-Dfile.encoding=utf-8"  -cp ';
        $this->param = "";
        $this->pathWekaLib = config('app.weka_lib');
        $this->pathWekaInput = config('app.weka_input');
    }

    public function exec($traningFile, $param)
    {
        $file = TB_DATA_ANALYSIS::where('data_id', $traningFile)->first()->path_file;
        self::getParam($param);
        $this->cmd .= "$this->pathWekaLib weka.associations.Apriori $this->param -t $this->pathWekaInput" . $file;
        exec($this->cmd, $output);
        return self::getAssociationJsonFormat($output);
    }

    public function getParam($param)
    {
        if (!is_null($param['number_of_rules'])) {
            $this->param .= '-N ' . $param['number_of_rules'] . ' ';
        }
        if (!is_null($param['metric_type'])) {
            $this->param .= '-T ' . $param['metric_type'] . ' ';
        }
        if (!is_null($param['minimum_confidence'])) {
            $this->param .= '-C ' . $param['minimum_confidence'] . ' ';
        }
        if (!is_null($param['delta_for_minimum_support'])) {
            $this->param .= '-D ' . $param['delta_for_minimum_support'] . ' ';
        }
        if (!is_null($param['upper_for_minimum_support'])) {
            $this->param .= '-U ' . $param['upper_for_minimum_support'] . ' ';
        }
        if (!is_null($param['lower_for_minimum_support'])) {
            $this->param .= '-M ' . $param['lower_for_minimum_support'] . ' ';
        }
    }

    public function getAssociationJsonFormat($output)
    {
        $data = [
            'name' => 'Association : Apriori',
            'outputText' => $output,
        ];

        return self::convertToJson($output, $data, " ", 0);
    }

    public function convertToJson($output, $data, $status, $index)
    {
        if ($index >= sizeof($output)) {
            return $data;
        }

        $str = trim($output[$index]);
        $split = explode(":", $str);
        $key = trim($split[0]);

        if ($status == "itemsets") {
            if (sizeOf($split) > 1 && trim($split[1]) != "") {
                $_key = str_replace(' ', '_', $key);
                $_key = str_replace('(', '', $_key);
                $_key = str_replace(')', '', $_key);
                $_key = str_replace('=', '', $_key);
                $_key = str_replace('<', '', $_key);
                $_key = str_replace('>', '', $_key);
                $_key = strtolower($_key);

                $data['Generated_sets_of_large_itemsets'][$_key]['text'] = $key;
                $data['Generated_sets_of_large_itemsets'][$_key]['value'] = trim($split[1]);
            }

            $status = self::getStatus($output, $index + 1);

            if ($status == "rules") {
                return self::convertToJson($output, $data, $status, $index + 1);
            }

            return self::convertToJson($output, $data, "itemsets", $index + 1);
        } else if ($status == "rules") {
            $str = trim($output[$index]);
            $split = explode("<", $str);

            if (sizeOf($split) > 1) {
                $splitRule = explode("==>", $split[0]);
                $splitNumber = explode(".", $splitRule[0]);
                $leftRule = trim($splitNumber[1]);
                $leftRule = str_replace(' ', ' , ', $leftRule);
                $data['Best_rules_found'][$splitNumber[0]]['leftRule'] = $leftRule;
                $data['Best_rules_found'][$splitNumber[0]]['rightRule'] = trim($splitRule[1]);

                $splitValue = explode(" ", $split[1]);

                for ($i = 0; $i < sizeof($splitValue); $i++) {
                    $_splitValue = str_replace('(', '', $splitValue[$i]);
                    $_splitValue = str_replace(')', '', $_splitValue);
                    $_splitValue = str_replace('<', '', $_splitValue);
                    $_splitValue = str_replace('>', '', $_splitValue);

                    $splitAttribute = explode(":", $_splitValue);
                    if (sizeof($splitAttribute) > 1) {
                        $data['Best_rules_found'][$splitNumber[0]][$splitAttribute[0]] = $splitAttribute[1];
                    }
                }
            }

            if (strpos($str, 'Evaluation') !== false) {
                return self::convertToJson($output, $data, " ", $index + 1);
            } else {
                return self::convertToJson($output, $data, "rules", $index + 1);
            }
        } else {
            if (sizeOf($split) > 1) {
                $_key = str_replace(' ', '_', $key);
                $_key = str_replace('(', '', $_key);
                $_key = str_replace(')', '', $_key);
                $_key = str_replace('=', '', $_key);
                $_key = str_replace('<', '', $_key);
                $_key = str_replace('>', '', $_key);
                $_key = strtolower($_key);

                $data[$_key]['text'] = $key;
                $data[$_key]['value'] = trim($split[1]);
            }

            $status = self::getStatus($output, $index + 1);
            return self::convertToJson($output, $data, $status, $index + 1);
        }
    }

    public function getStatus($output, $index)
    {
        if ($index >= sizeof($output)) {
            return " ";
        }

        $str = trim($output[$index]);
        $split = explode(":", $str);
        $key = trim($split[0]);

        if ($key == "Generated sets of large itemsets") {
            return "itemsets";
        } else if ($key == "Best rules found") {
            return "rules";
        } else {
            return " ";
        }
    }
}
