angular.module('floatCharts.budget').factory('budgetService', ($q, $timeout) => {
    /*
     * The important node is "forecastCategoryBudgets".
     *
     * The first level contains a list of categoryIds. It should be possible
     * to display the sum for all given categoryIds (we ignore corresponding names
     * for now, so just use the corresponding categoryId as chart label)
     *
     * Within a "budgetElement" is an "actualAmounts" and "targetAmounts" - Node.
     * If the "date" is in the past, the "actualAmounts"- Value must be used, else
     * the "targetAmounts".
     *
     * There are 4 different types of costTypes (NETNET, CLIENT, TECHNICAL, FEE).
     */

    const BUDGET_2016 = {
        "client": {
            "id": 42,
            "code": "ACME",
            "name": "ACME Ltd.",
            "agencyId": 92,
            "agencyName": "Sterling Cooper",
            "countryCode": "AT",
            "country": "Austria",
            "status": "ACTIVE"
        },
        "clientBudget": {
            "id": 61,
            "amount": 1372863.00,
            "startDate": "20160101",
            "endDate": "20161231",
            "client": {
                "id": 42,
                "name": "ACME Ltd.",
                "agency": {
                    "id": 92,
                    "name": "Sterling Cooper"
                },
                "status": "ACTIVE",
                "description": null,
                "code": "ACME",
                "country": {
                    "alpha2code": "AT",
                    "alpha3code": "AUT",
                    "currency": {
                        "isoCode": "EUR",
                        "description": "Euro"
                    },
                    "name": "Austria"
                },
                "currency": null
            },
            "additionalAmount": null,
            "successFee": 0.00
        },
        "year": 2016,
        "forecastCategoryBudgets": {
            "1": {
                "forecastCategoryId": 1,
                "budgetElements": {
                    "1": {
                        "actualAmounts": {
                            "NETNET": 58166.00,
                            "CLIENT": 61074.36,
                            "TECHNICAL": 0,
                            "FEE": 1300.18
                        },
                        "targetAmounts": {
                            "NETNET": 58166.00,
                            "CLIENT": 61074.36,
                            "TECHNICAL": 0,
                            "FEE": 1300.18
                        },
                        "date": [
                            2016,
                            1,
                            11
                        ]
                    },
                    "2": {
                        "actualAmounts": {
                            "NETNET": 192180.28,
                            "CLIENT": 201789.42,
                            "TECHNICAL": 0,
                            "FEE": 4296.03
                        },
                        "targetAmounts": {
                            "NETNET": 192180.28,
                            "CLIENT": 201789.42,
                            "TECHNICAL": 0,
                            "FEE": 4296.03
                        },
                        "date": [
                            2016,
                            2,
                            1
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 179170.01,
                            "CLIENT": 188128.54,
                            "TECHNICAL": 0,
                            "FEE": 4005.09
                        },
                        "targetAmounts": {
                            "NETNET": 179170.01,
                            "CLIENT": 188128.54,
                            "TECHNICAL": 0,
                            "FEE": 4005.09
                        },
                        "date": [
                            2016,
                            3,
                            1
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 85815.18,
                            "CLIENT": 90105.94,
                            "TECHNICAL": 0,
                            "FEE": 1918.36
                        },
                        "targetAmounts": {
                            "NETNET": 85815.18,
                            "CLIENT": 90105.94,
                            "TECHNICAL": 0,
                            "FEE": 1918.36
                        },
                        "date": [
                            2016,
                            4,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 181396.45,
                            "CLIENT": 190466.68,
                            "TECHNICAL": 0,
                            "FEE": 4054.79
                        },
                        "targetAmounts": {
                            "NETNET": 181396.45,
                            "CLIENT": 190466.68,
                            "TECHNICAL": 0,
                            "FEE": 4054.79
                        },
                        "date": [
                            2016,
                            7,
                            4
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": 233390.87,
                            "CLIENT": 245061.00,
                            "TECHNICAL": 0,
                            "FEE": 5217.58
                        },
                        "targetAmounts": {
                            "NETNET": 233390.87,
                            "CLIENT": 245061.00,
                            "TECHNICAL": 0,
                            "FEE": 5217.58
                        },
                        "date": [
                            2016,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": 107797.75,
                            "CLIENT": 113187.50,
                            "TECHNICAL": 0,
                            "FEE": 2409.78
                        },
                        "targetAmounts": {
                            "NETNET": 107797.75,
                            "CLIENT": 113187.50,
                            "TECHNICAL": 0,
                            "FEE": 2409.78
                        },
                        "date": [
                            2016,
                            9,
                            1
                        ]
                    },
                    "12": {
                        "actualAmounts": {
                            "NETNET": 18281.11,
                            "CLIENT": 19195.17,
                            "TECHNICAL": 0,
                            "FEE": 408.63
                        },
                        "targetAmounts": {
                            "NETNET": 18281.11,
                            "CLIENT": 19195.17,
                            "TECHNICAL": 0,
                            "FEE": 408.63
                        },
                        "date": [
                            2016,
                            12,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "2": {
                "forecastCategoryId": 2,
                "budgetElements": {
                    "1": {
                        "actualAmounts": {
                            "NETNET": 7412.16,
                            "CLIENT": 7412.16,
                            "TECHNICAL": 0,
                            "FEE": 413.80
                        },
                        "targetAmounts": {
                            "NETNET": 7412.16,
                            "CLIENT": 7412.16,
                            "TECHNICAL": 0,
                            "FEE": 413.80
                        },
                        "date": [
                            2016,
                            1,
                            18
                        ]
                    },
                    "2": {
                        "actualAmounts": {
                            "NETNET": 14452.82,
                            "CLIENT": 14452.82,
                            "TECHNICAL": 0,
                            "FEE": 808.64
                        },
                        "targetAmounts": {
                            "NETNET": 14452.82,
                            "CLIENT": 14452.82,
                            "TECHNICAL": 0,
                            "FEE": 808.64
                        },
                        "date": [
                            2016,
                            2,
                            8
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 33235.50,
                            "CLIENT": 33235.50,
                            "TECHNICAL": 0,
                            "FEE": 1841.60
                        },
                        "targetAmounts": {
                            "NETNET": 33235.50,
                            "CLIENT": 33235.50,
                            "TECHNICAL": 0,
                            "FEE": 1841.60
                        },
                        "date": [
                            2016,
                            3,
                            1
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 34102.31,
                            "CLIENT": 34102.31,
                            "TECHNICAL": 0,
                            "FEE": 1908.78
                        },
                        "targetAmounts": {
                            "NETNET": 34102.31,
                            "CLIENT": 34102.31,
                            "TECHNICAL": 0,
                            "FEE": 1908.78
                        },
                        "date": [
                            2016,
                            4,
                            1
                        ]
                    },
                    "5": {
                        "actualAmounts": {
                            "NETNET": 42398.40,
                            "CLIENT": 42398.40,
                            "TECHNICAL": 0,
                            "FEE": 2265.42
                        },
                        "targetAmounts": {
                            "NETNET": 42398.40,
                            "CLIENT": 42398.40,
                            "TECHNICAL": 0,
                            "FEE": 2265.42
                        },
                        "date": [
                            2016,
                            5,
                            1
                        ]
                    },
                    "6": {
                        "actualAmounts": {
                            "NETNET": 15775.19,
                            "CLIENT": 15775.19,
                            "TECHNICAL": 0,
                            "FEE": 830.78
                        },
                        "targetAmounts": {
                            "NETNET": 15775.19,
                            "CLIENT": 15775.19,
                            "TECHNICAL": 0,
                            "FEE": 830.78
                        },
                        "date": [
                            2016,
                            6,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 26041.22,
                            "CLIENT": 26041.22,
                            "TECHNICAL": 0,
                            "FEE": 1377.64
                        },
                        "targetAmounts": {
                            "NETNET": 26041.22,
                            "CLIENT": 26041.22,
                            "TECHNICAL": 0,
                            "FEE": 1377.64
                        },
                        "date": [
                            2016,
                            7,
                            1
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": 29962.45,
                            "CLIENT": 29962.45,
                            "TECHNICAL": 0,
                            "FEE": 1576.14
                        },
                        "targetAmounts": {
                            "NETNET": 29962.45,
                            "CLIENT": 29962.45,
                            "TECHNICAL": 0,
                            "FEE": 1576.14
                        },
                        "date": [
                            2016,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": 22392.68,
                            "CLIENT": 22392.68,
                            "TECHNICAL": 0,
                            "FEE": 1201.90
                        },
                        "targetAmounts": {
                            "NETNET": 22392.68,
                            "CLIENT": 22392.68,
                            "TECHNICAL": 0,
                            "FEE": 1201.90
                        },
                        "date": [
                            2016,
                            9,
                            1
                        ]
                    },
                    "11": {
                        "actualAmounts": {
                            "NETNET": 3561.78,
                            "CLIENT": 3561.78,
                            "TECHNICAL": 0,
                            "FEE": 178.10
                        },
                        "targetAmounts": {
                            "NETNET": 3561.78,
                            "CLIENT": 3561.78,
                            "TECHNICAL": 0,
                            "FEE": 178.10
                        },
                        "date": [
                            2016,
                            11,
                            1
                        ]
                    },
                    "12": {
                        "actualAmounts": {
                            "NETNET": 6094.65,
                            "CLIENT": 6094.65,
                            "TECHNICAL": 0,
                            "FEE": 304.73
                        },
                        "targetAmounts": {
                            "NETNET": 6094.65,
                            "CLIENT": 6094.65,
                            "TECHNICAL": 0,
                            "FEE": 304.73
                        },
                        "date": [
                            2016,
                            12,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "3": {
                "forecastCategoryId": 3,
                "budgetElements": {
                    "3": {
                        "actualAmounts": {
                            "NETNET": 22057.83,
                            "CLIENT": 22057.83,
                            "TECHNICAL": 0,
                            "FEE": 1205.70
                        },
                        "targetAmounts": {
                            "NETNET": 22057.83,
                            "CLIENT": 22057.83,
                            "TECHNICAL": 0,
                            "FEE": 1205.70
                        },
                        "date": [
                            2016,
                            3,
                            7
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 22854.38,
                            "CLIENT": 22854.38,
                            "TECHNICAL": 0,
                            "FEE": 1265.03
                        },
                        "targetAmounts": {
                            "NETNET": 22854.38,
                            "CLIENT": 22854.38,
                            "TECHNICAL": 0,
                            "FEE": 1265.03
                        },
                        "date": [
                            2016,
                            4,
                            1
                        ]
                    },
                    "5": {
                        "actualAmounts": {
                            "NETNET": 38187.13,
                            "CLIENT": 38187.13,
                            "TECHNICAL": 0,
                            "FEE": 2049.98
                        },
                        "targetAmounts": {
                            "NETNET": 38187.13,
                            "CLIENT": 38187.13,
                            "TECHNICAL": 0,
                            "FEE": 2049.98
                        },
                        "date": [
                            2016,
                            5,
                            1
                        ]
                    },
                    "6": {
                        "actualAmounts": {
                            "NETNET": 10847.26,
                            "CLIENT": 10847.26,
                            "TECHNICAL": 0,
                            "FEE": 584.38
                        },
                        "targetAmounts": {
                            "NETNET": 10847.26,
                            "CLIENT": 10847.26,
                            "TECHNICAL": 0,
                            "FEE": 584.38
                        },
                        "date": [
                            2016,
                            6,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 1055.52,
                            "CLIENT": 1055.52,
                            "TECHNICAL": 0,
                            "FEE": 56.98
                        },
                        "targetAmounts": {
                            "NETNET": 1055.52,
                            "CLIENT": 1055.52,
                            "TECHNICAL": 0,
                            "FEE": 56.98
                        },
                        "date": [
                            2016,
                            7,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "4": {
                "forecastCategoryId": 4,
                "budgetElements": {
                    "1": {
                        "actualAmounts": {
                            "NETNET": 4895.34,
                            "CLIENT": 4895.34,
                            "TECHNICAL": 0,
                            "FEE": 287.96
                        },
                        "targetAmounts": {
                            "NETNET": 4895.34,
                            "CLIENT": 4895.34,
                            "TECHNICAL": 0,
                            "FEE": 287.96
                        },
                        "date": [
                            2016,
                            1,
                            18
                        ]
                    },
                    "2": {
                        "actualAmounts": {
                            "NETNET": 9745.80,
                            "CLIENT": 9745.80,
                            "TECHNICAL": 0,
                            "FEE": 573.29
                        },
                        "targetAmounts": {
                            "NETNET": 9745.80,
                            "CLIENT": 9745.80,
                            "TECHNICAL": 0,
                            "FEE": 573.29
                        },
                        "date": [
                            2016,
                            2,
                            8
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 8728.62,
                            "CLIENT": 8728.62,
                            "TECHNICAL": 0,
                            "FEE": 513.44
                        },
                        "targetAmounts": {
                            "NETNET": 8728.62,
                            "CLIENT": 8728.62,
                            "TECHNICAL": 0,
                            "FEE": 513.44
                        },
                        "date": [
                            2016,
                            3,
                            1
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 9219.78,
                            "CLIENT": 9219.78,
                            "TECHNICAL": 0,
                            "FEE": 542.35
                        },
                        "targetAmounts": {
                            "NETNET": 9219.78,
                            "CLIENT": 9219.78,
                            "TECHNICAL": 0,
                            "FEE": 542.35
                        },
                        "date": [
                            2016,
                            4,
                            1
                        ]
                    },
                    "5": {
                        "actualAmounts": {
                            "NETNET": 553.18,
                            "CLIENT": 553.18,
                            "TECHNICAL": 0,
                            "FEE": 32.54
                        },
                        "targetAmounts": {
                            "NETNET": 553.18,
                            "CLIENT": 553.18,
                            "TECHNICAL": 0,
                            "FEE": 32.54
                        },
                        "date": [
                            2016,
                            5,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 8088.88,
                            "CLIENT": 8088.88,
                            "TECHNICAL": 0,
                            "FEE": 475.82
                        },
                        "targetAmounts": {
                            "NETNET": 8088.88,
                            "CLIENT": 8088.88,
                            "TECHNICAL": 0,
                            "FEE": 475.82
                        },
                        "date": [
                            2016,
                            7,
                            12
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": 8841.44,
                            "CLIENT": 8841.44,
                            "TECHNICAL": 0,
                            "FEE": 520.09
                        },
                        "targetAmounts": {
                            "NETNET": 8841.44,
                            "CLIENT": 8841.44,
                            "TECHNICAL": 0,
                            "FEE": 520.09
                        },
                        "date": [
                            2016,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": 9324.04,
                            "CLIENT": 9324.04,
                            "TECHNICAL": 0,
                            "FEE": 548.47
                        },
                        "targetAmounts": {
                            "NETNET": 9324.04,
                            "CLIENT": 9324.04,
                            "TECHNICAL": 0,
                            "FEE": 548.47
                        },
                        "date": [
                            2016,
                            9,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "6": {
                "forecastCategoryId": 6,
                "budgetElements": {
                    "5": {
                        "actualAmounts": {
                            "NETNET": 3541.45,
                            "CLIENT": 3541.45,
                            "TECHNICAL": 0,
                            "FEE": 177.07
                        },
                        "targetAmounts": {
                            "NETNET": 3541.45,
                            "CLIENT": 3541.45,
                            "TECHNICAL": 0,
                            "FEE": 177.07
                        },
                        "date": [
                            2016,
                            5,
                            2
                        ]
                    },
                    "6": {
                        "actualAmounts": {
                            "NETNET": 4927.93,
                            "CLIENT": 4927.93,
                            "TECHNICAL": 0,
                            "FEE": 246.40
                        },
                        "targetAmounts": {
                            "NETNET": 4927.93,
                            "CLIENT": 4927.93,
                            "TECHNICAL": 0,
                            "FEE": 246.40
                        },
                        "date": [
                            2016,
                            6,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 652.72,
                            "CLIENT": 652.72,
                            "TECHNICAL": 0,
                            "FEE": 32.64
                        },
                        "targetAmounts": {
                            "NETNET": 652.72,
                            "CLIENT": 652.72,
                            "TECHNICAL": 0,
                            "FEE": 32.64
                        },
                        "date": [
                            2016,
                            7,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "7": {
                "forecastCategoryId": 7,
                "budgetElements": {
                    "3": {
                        "actualAmounts": {
                            "NETNET": 10406.31,
                            "CLIENT": 10406.31,
                            "TECHNICAL": 0,
                            "FEE": 520.32
                        },
                        "targetAmounts": {
                            "NETNET": 10406.31,
                            "CLIENT": 10406.31,
                            "TECHNICAL": 0,
                            "FEE": 520.32
                        },
                        "date": [
                            2016,
                            3,
                            7
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 8993.93,
                            "CLIENT": 8993.93,
                            "TECHNICAL": 0,
                            "FEE": 449.70
                        },
                        "targetAmounts": {
                            "NETNET": 8993.93,
                            "CLIENT": 8993.93,
                            "TECHNICAL": 0,
                            "FEE": 449.70
                        },
                        "date": [
                            2016,
                            4,
                            1
                        ]
                    },
                    "5": {
                        "actualAmounts": {
                            "NETNET": 7178.90,
                            "CLIENT": 7178.90,
                            "TECHNICAL": 0,
                            "FEE": 358.94
                        },
                        "targetAmounts": {
                            "NETNET": 7178.90,
                            "CLIENT": 7178.90,
                            "TECHNICAL": 0,
                            "FEE": 358.94
                        },
                        "date": [
                            2016,
                            5,
                            1
                        ]
                    },
                    "6": {
                        "actualAmounts": {
                            "NETNET": 6085.76,
                            "CLIENT": 6085.76,
                            "TECHNICAL": 0,
                            "FEE": 304.29
                        },
                        "targetAmounts": {
                            "NETNET": 6085.76,
                            "CLIENT": 6085.76,
                            "TECHNICAL": 0,
                            "FEE": 304.29
                        },
                        "date": [
                            2016,
                            6,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 579.37,
                            "CLIENT": 579.37,
                            "TECHNICAL": 0,
                            "FEE": 28.97
                        },
                        "targetAmounts": {
                            "NETNET": 579.37,
                            "CLIENT": 579.37,
                            "TECHNICAL": 0,
                            "FEE": 28.97
                        },
                        "date": [
                            2016,
                            7,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "8": {
                "forecastCategoryId": 8,
                "budgetElements": {
                    "3": {
                        "actualAmounts": {
                            "NETNET": 11651.52,
                            "CLIENT": 11651.52,
                            "TECHNICAL": 0,
                            "FEE": 685.38
                        },
                        "targetAmounts": {
                            "NETNET": 11651.52,
                            "CLIENT": 11651.52,
                            "TECHNICAL": 0,
                            "FEE": 685.38
                        },
                        "date": [
                            2016,
                            3,
                            7
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 13860.45,
                            "CLIENT": 13860.45,
                            "TECHNICAL": 0,
                            "FEE": 815.33
                        },
                        "targetAmounts": {
                            "NETNET": 13860.45,
                            "CLIENT": 13860.45,
                            "TECHNICAL": 0,
                            "FEE": 815.33
                        },
                        "date": [
                            2016,
                            4,
                            1
                        ]
                    },
                    "5": {
                        "actualAmounts": {
                            "NETNET": 466.03,
                            "CLIENT": 466.03,
                            "TECHNICAL": 0,
                            "FEE": 27.41
                        },
                        "targetAmounts": {
                            "NETNET": 466.03,
                            "CLIENT": 466.03,
                            "TECHNICAL": 0,
                            "FEE": 27.41
                        },
                        "date": [
                            2016,
                            5,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "12": {
                "forecastCategoryId": 12,
                "budgetElements": {
                    "1": {
                        "actualAmounts": {
                            "NETNET": 31793.50,
                            "CLIENT": 32833.18,
                            "TECHNICAL": 0,
                            "FEE": 667.09
                        },
                        "targetAmounts": {
                            "NETNET": 31793.50,
                            "CLIENT": 32833.18,
                            "TECHNICAL": 0,
                            "FEE": 667.09
                        },
                        "date": [
                            2016,
                            1,
                            22
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "13": {
                "forecastCategoryId": 13,
                "budgetElements": {
                    "5": {
                        "actualAmounts": {
                            "NETNET": 30542.20,
                            "CLIENT": 30542.20,
                            "TECHNICAL": 0,
                            "FEE": 1663.63
                        },
                        "targetAmounts": {
                            "NETNET": 30542.20,
                            "CLIENT": 30542.20,
                            "TECHNICAL": 0,
                            "FEE": 1663.63
                        },
                        "date": [
                            2016,
                            5,
                            2
                        ]
                    },
                    "6": {
                        "actualAmounts": {
                            "NETNET": 4761.50,
                            "CLIENT": 4761.50,
                            "TECHNICAL": 0,
                            "FEE": 280.09
                        },
                        "targetAmounts": {
                            "NETNET": 4761.50,
                            "CLIENT": 4761.50,
                            "TECHNICAL": 0,
                            "FEE": 280.09
                        },
                        "date": [
                            2016,
                            6,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 476.15,
                            "CLIENT": 476.15,
                            "TECHNICAL": 0,
                            "FEE": 28.01
                        },
                        "targetAmounts": {
                            "NETNET": 476.15,
                            "CLIENT": 476.15,
                            "TECHNICAL": 0,
                            "FEE": 28.01
                        },
                        "date": [
                            2016,
                            7,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "14": {
                "forecastCategoryId": 14,
                "budgetElements": {
                    "1": {
                        "actualAmounts": {
                            "NETNET": 7412.16,
                            "CLIENT": 7412.16,
                            "TECHNICAL": 0,
                            "FEE": 413.80
                        },
                        "targetAmounts": {
                            "NETNET": 7412.16,
                            "CLIENT": 7412.16,
                            "TECHNICAL": 0,
                            "FEE": 413.80
                        },
                        "date": [
                            2016,
                            1,
                            18
                        ]
                    },
                    "2": {
                        "actualAmounts": {
                            "NETNET": 14452.82,
                            "CLIENT": 14452.82,
                            "TECHNICAL": 0,
                            "FEE": 808.64
                        },
                        "targetAmounts": {
                            "NETNET": 14452.82,
                            "CLIENT": 14452.82,
                            "TECHNICAL": 0,
                            "FEE": 808.64
                        },
                        "date": [
                            2016,
                            2,
                            8
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 11177.67,
                            "CLIENT": 11177.67,
                            "TECHNICAL": 0,
                            "FEE": 635.90
                        },
                        "targetAmounts": {
                            "NETNET": 11177.67,
                            "CLIENT": 11177.67,
                            "TECHNICAL": 0,
                            "FEE": 635.90
                        },
                        "date": [
                            2016,
                            3,
                            1
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 11247.93,
                            "CLIENT": 11247.93,
                            "TECHNICAL": 0,
                            "FEE": 643.75
                        },
                        "targetAmounts": {
                            "NETNET": 11247.93,
                            "CLIENT": 11247.93,
                            "TECHNICAL": 0,
                            "FEE": 643.75
                        },
                        "date": [
                            2016,
                            4,
                            1
                        ]
                    },
                    "5": {
                        "actualAmounts": {
                            "NETNET": 669.82,
                            "CLIENT": 669.82,
                            "TECHNICAL": 0,
                            "FEE": 38.37
                        },
                        "targetAmounts": {
                            "NETNET": 669.82,
                            "CLIENT": 669.82,
                            "TECHNICAL": 0,
                            "FEE": 38.37
                        },
                        "date": [
                            2016,
                            5,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 24332.98,
                            "CLIENT": 24332.98,
                            "TECHNICAL": 0,
                            "FEE": 1288.02
                        },
                        "targetAmounts": {
                            "NETNET": 24332.98,
                            "CLIENT": 24332.98,
                            "TECHNICAL": 0,
                            "FEE": 1288.02
                        },
                        "date": [
                            2016,
                            7,
                            2
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": 29962.45,
                            "CLIENT": 29962.45,
                            "TECHNICAL": 0,
                            "FEE": 1576.14
                        },
                        "targetAmounts": {
                            "NETNET": 29962.45,
                            "CLIENT": 29962.45,
                            "TECHNICAL": 0,
                            "FEE": 1576.14
                        },
                        "date": [
                            2016,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": 22392.68,
                            "CLIENT": 22392.68,
                            "TECHNICAL": 0,
                            "FEE": 1201.90
                        },
                        "targetAmounts": {
                            "NETNET": 22392.68,
                            "CLIENT": 22392.68,
                            "TECHNICAL": 0,
                            "FEE": 1201.90
                        },
                        "date": [
                            2016,
                            9,
                            1
                        ]
                    },
                    "11": {
                        "actualAmounts": {
                            "NETNET": 3561.78,
                            "CLIENT": 3561.78,
                            "TECHNICAL": 0,
                            "FEE": 178.10
                        },
                        "targetAmounts": {
                            "NETNET": 3561.78,
                            "CLIENT": 3561.78,
                            "TECHNICAL": 0,
                            "FEE": 178.10
                        },
                        "date": [
                            2016,
                            11,
                            1
                        ]
                    },
                    "12": {
                        "actualAmounts": {
                            "NETNET": 6094.65,
                            "CLIENT": 6094.65,
                            "TECHNICAL": 0,
                            "FEE": 304.73
                        },
                        "targetAmounts": {
                            "NETNET": 6094.65,
                            "CLIENT": 6094.65,
                            "TECHNICAL": 0,
                            "FEE": 304.73
                        },
                        "date": [
                            2016,
                            12,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "15": {
                "forecastCategoryId": 15,
                "budgetElements": {
                    "7": {
                        "actualAmounts": {
                            "NETNET": 5056.36,
                            "CLIENT": 5056.36,
                            "TECHNICAL": 0,
                            "FEE": 252.82
                        },
                        "targetAmounts": {
                            "NETNET": 5056.36,
                            "CLIENT": 5056.36,
                            "TECHNICAL": 0,
                            "FEE": 252.82
                        },
                        "date": [
                            2016,
                            7,
                            18
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": 6143.09,
                            "CLIENT": 6143.09,
                            "TECHNICAL": 0,
                            "FEE": 307.15
                        },
                        "targetAmounts": {
                            "NETNET": 6143.09,
                            "CLIENT": 6143.09,
                            "TECHNICAL": 0,
                            "FEE": 307.15
                        },
                        "date": [
                            2016,
                            8,
                            8
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": 6800.42,
                            "CLIENT": 6800.42,
                            "TECHNICAL": 0,
                            "FEE": 340.02
                        },
                        "targetAmounts": {
                            "NETNET": 6800.42,
                            "CLIENT": 6800.42,
                            "TECHNICAL": 0,
                            "FEE": 340.02
                        },
                        "date": [
                            2016,
                            9,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "16": {
                "forecastCategoryId": 16,
                "budgetElements": {
                    "1": {
                        "actualAmounts": {
                            "NETNET": 2516.82,
                            "CLIENT": 2516.82,
                            "TECHNICAL": 0,
                            "FEE": 125.84
                        },
                        "targetAmounts": {
                            "NETNET": 2516.82,
                            "CLIENT": 2516.82,
                            "TECHNICAL": 0,
                            "FEE": 125.84
                        },
                        "date": [
                            2016,
                            1,
                            18
                        ]
                    },
                    "2": {
                        "actualAmounts": {
                            "NETNET": 4707.02,
                            "CLIENT": 4707.02,
                            "TECHNICAL": 0,
                            "FEE": 235.35
                        },
                        "targetAmounts": {
                            "NETNET": 4707.02,
                            "CLIENT": 4707.02,
                            "TECHNICAL": 0,
                            "FEE": 235.35
                        },
                        "date": [
                            2016,
                            2,
                            8
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 2449.05,
                            "CLIENT": 2449.05,
                            "TECHNICAL": 0,
                            "FEE": 122.46
                        },
                        "targetAmounts": {
                            "NETNET": 2449.05,
                            "CLIENT": 2449.05,
                            "TECHNICAL": 0,
                            "FEE": 122.46
                        },
                        "date": [
                            2016,
                            3,
                            1
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 2028.15,
                            "CLIENT": 2028.15,
                            "TECHNICAL": 0,
                            "FEE": 101.40
                        },
                        "targetAmounts": {
                            "NETNET": 2028.15,
                            "CLIENT": 2028.15,
                            "TECHNICAL": 0,
                            "FEE": 101.40
                        },
                        "date": [
                            2016,
                            4,
                            1
                        ]
                    },
                    "5": {
                        "actualAmounts": {
                            "NETNET": 116.64,
                            "CLIENT": 116.64,
                            "TECHNICAL": 0,
                            "FEE": 5.83
                        },
                        "targetAmounts": {
                            "NETNET": 116.64,
                            "CLIENT": 116.64,
                            "TECHNICAL": 0,
                            "FEE": 5.83
                        },
                        "date": [
                            2016,
                            5,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 11187.74,
                            "CLIENT": 11187.74,
                            "TECHNICAL": 0,
                            "FEE": 559.38
                        },
                        "targetAmounts": {
                            "NETNET": 11187.74,
                            "CLIENT": 11187.74,
                            "TECHNICAL": 0,
                            "FEE": 559.38
                        },
                        "date": [
                            2016,
                            7,
                            2
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": 14977.92,
                            "CLIENT": 14977.92,
                            "TECHNICAL": 0,
                            "FEE": 748.90
                        },
                        "targetAmounts": {
                            "NETNET": 14977.92,
                            "CLIENT": 14977.92,
                            "TECHNICAL": 0,
                            "FEE": 748.90
                        },
                        "date": [
                            2016,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": 6268.22,
                            "CLIENT": 6268.22,
                            "TECHNICAL": 0,
                            "FEE": 313.41
                        },
                        "targetAmounts": {
                            "NETNET": 6268.22,
                            "CLIENT": 6268.22,
                            "TECHNICAL": 0,
                            "FEE": 313.41
                        },
                        "date": [
                            2016,
                            9,
                            1
                        ]
                    },
                    "11": {
                        "actualAmounts": {
                            "NETNET": 3561.78,
                            "CLIENT": 3561.78,
                            "TECHNICAL": 0,
                            "FEE": 178.10
                        },
                        "targetAmounts": {
                            "NETNET": 3561.78,
                            "CLIENT": 3561.78,
                            "TECHNICAL": 0,
                            "FEE": 178.10
                        },
                        "date": [
                            2016,
                            11,
                            1
                        ]
                    },
                    "12": {
                        "actualAmounts": {
                            "NETNET": 6094.65,
                            "CLIENT": 6094.65,
                            "TECHNICAL": 0,
                            "FEE": 304.73
                        },
                        "targetAmounts": {
                            "NETNET": 6094.65,
                            "CLIENT": 6094.65,
                            "TECHNICAL": 0,
                            "FEE": 304.73
                        },
                        "date": [
                            2016,
                            12,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "17": {
                "forecastCategoryId": 17,
                "budgetElements": {
                    "5": {
                        "actualAmounts": {
                            "NETNET": 3541.45,
                            "CLIENT": 3541.45,
                            "TECHNICAL": 0,
                            "FEE": 177.07
                        },
                        "targetAmounts": {
                            "NETNET": 3541.45,
                            "CLIENT": 3541.45,
                            "TECHNICAL": 0,
                            "FEE": 177.07
                        },
                        "date": [
                            2016,
                            5,
                            2
                        ]
                    },
                    "6": {
                        "actualAmounts": {
                            "NETNET": 4927.93,
                            "CLIENT": 4927.93,
                            "TECHNICAL": 0,
                            "FEE": 246.40
                        },
                        "targetAmounts": {
                            "NETNET": 4927.93,
                            "CLIENT": 4927.93,
                            "TECHNICAL": 0,
                            "FEE": 246.40
                        },
                        "date": [
                            2016,
                            6,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 652.72,
                            "CLIENT": 652.72,
                            "TECHNICAL": 0,
                            "FEE": 32.64
                        },
                        "targetAmounts": {
                            "NETNET": 652.72,
                            "CLIENT": 652.72,
                            "TECHNICAL": 0,
                            "FEE": 32.64
                        },
                        "date": [
                            2016,
                            7,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "23": {
                "forecastCategoryId": 23,
                "budgetElements": {
                    "1": {
                        "actualAmounts": {
                            "NETNET": 8251.75,
                            "CLIENT": 8251.75,
                            "TECHNICAL": 0,
                            "FEE": 871.56
                        },
                        "targetAmounts": {
                            "NETNET": 8251.75,
                            "CLIENT": 8251.75,
                            "TECHNICAL": 0,
                            "FEE": 871.56
                        },
                        "date": [
                            2016,
                            1,
                            1
                        ]
                    },
                    "2": {
                        "actualAmounts": {
                            "NETNET": 402.82,
                            "CLIENT": 402.82,
                            "TECHNICAL": 0,
                            "FEE": 540.00
                        },
                        "targetAmounts": {
                            "NETNET": 402.82,
                            "CLIENT": 402.82,
                            "TECHNICAL": 0,
                            "FEE": 540.00
                        },
                        "date": [
                            2016,
                            2,
                            1
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 15635.99,
                            "CLIENT": 15635.99,
                            "TECHNICAL": 0,
                            "FEE": 1644.00
                        },
                        "targetAmounts": {
                            "NETNET": 15635.99,
                            "CLIENT": 15635.99,
                            "TECHNICAL": 0,
                            "FEE": 1644.00
                        },
                        "date": [
                            2016,
                            3,
                            1
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 402.38,
                            "CLIENT": 402.38,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "targetAmounts": {
                            "NETNET": 402.38,
                            "CLIENT": 402.38,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "date": [
                            2016,
                            4,
                            1
                        ]
                    },
                    "5": {
                        "actualAmounts": {
                            "NETNET": 10655.12,
                            "CLIENT": 10655.12,
                            "TECHNICAL": 0,
                            "FEE": 1315.00
                        },
                        "targetAmounts": {
                            "NETNET": 10655.12,
                            "CLIENT": 10655.12,
                            "TECHNICAL": 0,
                            "FEE": 1315.00
                        },
                        "date": [
                            2016,
                            5,
                            1
                        ]
                    },
                    "6": {
                        "actualAmounts": {
                            "NETNET": 45.66,
                            "CLIENT": 45.66,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "targetAmounts": {
                            "NETNET": 145.66,
                            "CLIENT": 145.66,
                            "TECHNICAL": 0,
                            "FEE": 1.90
                        },
                        "date": [
                            2016,
                            6,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 10551.82,
                            "CLIENT": 10551.82,
                            "TECHNICAL": 0,
                            "FEE": 1108.54
                        },
                        "targetAmounts": {
                            "NETNET": 10551.82,
                            "CLIENT": 10551.82,
                            "TECHNICAL": 0,
                            "FEE": 1108.54
                        },
                        "date": [
                            2016,
                            7,
                            1
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": 22.93,
                            "CLIENT": 22.93,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "targetAmounts": {
                            "NETNET": 22.93,
                            "CLIENT": 22.93,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "date": [
                            2016,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": 23.67,
                            "CLIENT": 23.67,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "targetAmounts": {
                            "NETNET": 23.67,
                            "CLIENT": 23.67,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "date": [
                            2016,
                            9,
                            1
                        ]
                    },
                    "11": {
                        "actualAmounts": {
                            "NETNET": 30.62,
                            "CLIENT": 30.62,
                            "TECHNICAL": 0,
                            "FEE": 45.00
                        },
                        "targetAmounts": {
                            "NETNET": 30.62,
                            "CLIENT": 30.62,
                            "TECHNICAL": 0,
                            "FEE": 45.00
                        },
                        "date": [
                            2016,
                            11,
                            25
                        ]
                    },
                    "12": {
                        "actualAmounts": {
                            "NETNET": 168.75,
                            "CLIENT": 168.75,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "targetAmounts": {
                            "NETNET": 168.75,
                            "CLIENT": 168.75,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "date": [
                            2016,
                            12,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "26": {
                "forecastCategoryId": 26,
                "budgetElements": {
                    "1": {
                        "actualAmounts": {
                            "NETNET": 58166.00,
                            "CLIENT": 61074.36,
                            "TECHNICAL": 0,
                            "FEE": 1300.18
                        },
                        "targetAmounts": {
                            "NETNET": 58166.00,
                            "CLIENT": 61074.36,
                            "TECHNICAL": 0,
                            "FEE": 1300.18
                        },
                        "date": [
                            2016,
                            1,
                            11
                        ]
                    },
                    "2": {
                        "actualAmounts": {
                            "NETNET": 192180.28,
                            "CLIENT": 201789.42,
                            "TECHNICAL": 0,
                            "FEE": 4296.03
                        },
                        "targetAmounts": {
                            "NETNET": 192180.28,
                            "CLIENT": 201789.42,
                            "TECHNICAL": 0,
                            "FEE": 4296.03
                        },
                        "date": [
                            2016,
                            2,
                            1
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 179170.01,
                            "CLIENT": 188128.54,
                            "TECHNICAL": 0,
                            "FEE": 4005.09
                        },
                        "targetAmounts": {
                            "NETNET": 179170.01,
                            "CLIENT": 188128.54,
                            "TECHNICAL": 0,
                            "FEE": 4005.09
                        },
                        "date": [
                            2016,
                            3,
                            1
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 85815.18,
                            "CLIENT": 90105.94,
                            "TECHNICAL": 0,
                            "FEE": 1918.36
                        },
                        "targetAmounts": {
                            "NETNET": 85815.18,
                            "CLIENT": 90105.94,
                            "TECHNICAL": 0,
                            "FEE": 1918.36
                        },
                        "date": [
                            2016,
                            4,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 181396.45,
                            "CLIENT": 190466.68,
                            "TECHNICAL": 0,
                            "FEE": 4054.79
                        },
                        "targetAmounts": {
                            "NETNET": 181396.45,
                            "CLIENT": 190466.68,
                            "TECHNICAL": 0,
                            "FEE": 4054.79
                        },
                        "date": [
                            2016,
                            7,
                            4
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": 233390.87,
                            "CLIENT": 245061.00,
                            "TECHNICAL": 0,
                            "FEE": 5217.58
                        },
                        "targetAmounts": {
                            "NETNET": 233390.87,
                            "CLIENT": 245061.00,
                            "TECHNICAL": 0,
                            "FEE": 5217.58
                        },
                        "date": [
                            2016,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": 107797.75,
                            "CLIENT": 113187.50,
                            "TECHNICAL": 0,
                            "FEE": 2409.78
                        },
                        "targetAmounts": {
                            "NETNET": 107797.75,
                            "CLIENT": 113187.50,
                            "TECHNICAL": 0,
                            "FEE": 2409.78
                        },
                        "date": [
                            2016,
                            9,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "27": {
                "forecastCategoryId": 27,
                "budgetElements": {
                    "12": {
                        "actualAmounts": {
                            "NETNET": 18281.11,
                            "CLIENT": 19195.17,
                            "TECHNICAL": 0,
                            "FEE": 408.63
                        },
                        "targetAmounts": {
                            "NETNET": 18281.11,
                            "CLIENT": 19195.17,
                            "TECHNICAL": 0,
                            "FEE": 408.63
                        },
                        "date": [
                            2016,
                            12,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "28": {
                "forecastCategoryId": 28,
                "budgetElements": {
                    "1": {
                        "actualAmounts": {
                            "NETNET": 7976.69,
                            "CLIENT": 7976.69,
                            "TECHNICAL": 0,
                            "FEE": 151.56
                        },
                        "targetAmounts": {
                            "NETNET": 7976.69,
                            "CLIENT": 7976.69,
                            "TECHNICAL": 0,
                            "FEE": 151.56
                        },
                        "date": [
                            2016,
                            1,
                            1
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 3500.00,
                            "CLIENT": 3500.00,
                            "TECHNICAL": 0,
                            "FEE": 175.00
                        },
                        "targetAmounts": {
                            "NETNET": 3500.00,
                            "CLIENT": 3500.00,
                            "TECHNICAL": 0,
                            "FEE": 175.00
                        },
                        "date": [
                            2016,
                            3,
                            7
                        ]
                    },
                    "5": {
                        "actualAmounts": {
                            "NETNET": 3500.00,
                            "CLIENT": 3500.00,
                            "TECHNICAL": 0,
                            "FEE": 175.00
                        },
                        "targetAmounts": {
                            "NETNET": 3500.00,
                            "CLIENT": 3500.00,
                            "TECHNICAL": 0,
                            "FEE": 175.00
                        },
                        "date": [
                            2016,
                            5,
                            2
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 6238.69,
                            "CLIENT": 6238.69,
                            "TECHNICAL": 0,
                            "FEE": 118.54
                        },
                        "targetAmounts": {
                            "NETNET": 6238.69,
                            "CLIENT": 6238.69,
                            "TECHNICAL": 0,
                            "FEE": 118.54
                        },
                        "date": [
                            2016,
                            7,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "30": {
                "forecastCategoryId": 30,
                "budgetElements": {
                    "1": {
                        "actualAmounts": {
                            "NETNET": 275.06,
                            "CLIENT": 275.06,
                            "TECHNICAL": 0,
                            "FEE": 720.00
                        },
                        "targetAmounts": {
                            "NETNET": 275.06,
                            "CLIENT": 275.06,
                            "TECHNICAL": 0,
                            "FEE": 720.00
                        },
                        "date": [
                            2016,
                            1,
                            18
                        ]
                    },
                    "2": {
                        "actualAmounts": {
                            "NETNET": 402.82,
                            "CLIENT": 402.82,
                            "TECHNICAL": 0,
                            "FEE": 540.00
                        },
                        "targetAmounts": {
                            "NETNET": 402.82,
                            "CLIENT": 402.82,
                            "TECHNICAL": 0,
                            "FEE": 540.00
                        },
                        "date": [
                            2016,
                            2,
                            1
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 12135.99,
                            "CLIENT": 12135.99,
                            "TECHNICAL": 0,
                            "FEE": 1469.00
                        },
                        "targetAmounts": {
                            "NETNET": 12135.99,
                            "CLIENT": 12135.99,
                            "TECHNICAL": 0,
                            "FEE": 1469.00
                        },
                        "date": [
                            2016,
                            3,
                            1
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 402.38,
                            "CLIENT": 402.38,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "targetAmounts": {
                            "NETNET": 402.38,
                            "CLIENT": 402.38,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "date": [
                            2016,
                            4,
                            1
                        ]
                    },
                    "5": {
                        "actualAmounts": {
                            "NETNET": 7155.12,
                            "CLIENT": 7155.12,
                            "TECHNICAL": 0,
                            "FEE": 1140.00
                        },
                        "targetAmounts": {
                            "NETNET": 7155.12,
                            "CLIENT": 7155.12,
                            "TECHNICAL": 0,
                            "FEE": 1140.00
                        },
                        "date": [
                            2016,
                            5,
                            1
                        ]
                    },
                    "6": {
                        "actualAmounts": {
                            "NETNET": 45.66,
                            "CLIENT": 45.66,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "targetAmounts": {
                            "NETNET": 145.66,
                            "CLIENT": 145.66,
                            "TECHNICAL": 0,
                            "FEE": 1.90
                        },
                        "date": [
                            2016,
                            6,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 4313.13,
                            "CLIENT": 4313.13,
                            "TECHNICAL": 0,
                            "FEE": 990.00
                        },
                        "targetAmounts": {
                            "NETNET": 4313.13,
                            "CLIENT": 4313.13,
                            "TECHNICAL": 0,
                            "FEE": 990.00
                        },
                        "date": [
                            2016,
                            7,
                            1
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": 22.93,
                            "CLIENT": 22.93,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "targetAmounts": {
                            "NETNET": 22.93,
                            "CLIENT": 22.93,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "date": [
                            2016,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": 23.67,
                            "CLIENT": 23.67,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "targetAmounts": {
                            "NETNET": 23.67,
                            "CLIENT": 23.67,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "date": [
                            2016,
                            9,
                            1
                        ]
                    },
                    "11": {
                        "actualAmounts": {
                            "NETNET": 30.62,
                            "CLIENT": 30.62,
                            "TECHNICAL": 0,
                            "FEE": 45.00
                        },
                        "targetAmounts": {
                            "NETNET": 30.62,
                            "CLIENT": 30.62,
                            "TECHNICAL": 0,
                            "FEE": 45.00
                        },
                        "date": [
                            2016,
                            11,
                            25
                        ]
                    },
                    "12": {
                        "actualAmounts": {
                            "NETNET": 168.75,
                            "CLIENT": 168.75,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "targetAmounts": {
                            "NETNET": 168.75,
                            "CLIENT": 168.75,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "date": [
                            2016,
                            12,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            }
        }
    };
    const BUDGET_2017 = {
        "client": {
            "id": 42,
            "code": "ACME",
            "name": "ACME Ltd.",
            "agencyId": 92,
            "agencyName": "Sterling Cooper",
            "countryCode": "AT",
            "country": "Austria",
            "status": "ACTIVE"
        },
        "clientBudget": {
            "id": 146,
            "amount": 1000000.00,
            "startDate": "20170101",
            "endDate": "20171231",
            "client": {
                "id": 42,
                "name": "ACME Ltd.",
                "agency": {
                    "id": 92,
                    "name": "Sterling Cooper"
                },
                "status": "ACTIVE",
                "description": null,
                "code": "ACME",
                "country": {
                    "alpha2code": "AT",
                    "alpha3code": "AUT",
                    "currency": {
                        "isoCode": "EUR",
                        "description": "Euro"
                    },
                    "name": "Austria"
                },
                "currency": null
            },
            "additionalAmount": null,
            "successFee": null
        },
        "year": 2017,
        "forecastCategoryBudgets": {
            "1": {
                "forecastCategoryId": 1,
                "budgetElements": {
                    "2": {
                        "actualAmounts": {
                            "NETNET": 15077.83,
                            "CLIENT": 15831.73,
                            "TECHNICAL": 0,
                            "FEE": 337.06
                        },
                        "targetAmounts": {
                            "NETNET": 15077.83,
                            "CLIENT": 15831.73,
                            "TECHNICAL": 0,
                            "FEE": 337.06
                        },
                        "date": [
                            2017,
                            2,
                            27
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 173356.75,
                            "CLIENT": 182024.80,
                            "TECHNICAL": 0,
                            "FEE": 3875.06
                        },
                        "targetAmounts": {
                            "NETNET": 173356.75,
                            "CLIENT": 182024.80,
                            "TECHNICAL": 0,
                            "FEE": 3875.06
                        },
                        "date": [
                            2017,
                            3,
                            1
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 126192.22,
                            "CLIENT": 132501.90,
                            "TECHNICAL": 0,
                            "FEE": 2820.94
                        },
                        "targetAmounts": {
                            "NETNET": 126192.22,
                            "CLIENT": 132501.90,
                            "TECHNICAL": 0,
                            "FEE": 2820.94
                        },
                        "date": [
                            2017,
                            4,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 68827.26,
                            "CLIENT": 72268.74,
                            "TECHNICAL": 0,
                            "FEE": 1538.68
                        },
                        "targetAmounts": {
                            "NETNET": 68827.26,
                            "CLIENT": 72268.74,
                            "TECHNICAL": 0,
                            "FEE": 1538.68
                        },
                        "date": [
                            2017,
                            7,
                            3
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 202790.46600000,
                            "CLIENT": 214000.00000000,
                            "TECHNICAL": 1019.06800000,
                            "FEE": 4464.68200000
                        },
                        "date": [
                            2017,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 116936.18460000,
                            "CLIENT": 123400.00000000,
                            "TECHNICAL": 587.63080000,
                            "FEE": 2574.49420000
                        },
                        "date": [
                            2017,
                            9,
                            1
                        ]
                    },
                    "10": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 121863.80340000,
                            "CLIENT": 128600.00000000,
                            "TECHNICAL": 612.39320000,
                            "FEE": 2682.98180000
                        },
                        "date": [
                            2017,
                            10,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "2": {
                "forecastCategoryId": 2,
                "budgetElements": {
                    "1": {
                        "actualAmounts": {
                            "NETNET": -26.68,
                            "CLIENT": -26.68,
                            "TECHNICAL": 0,
                            "FEE": -1.33
                        },
                        "targetAmounts": {
                            "NETNET": -26.68,
                            "CLIENT": -26.68,
                            "TECHNICAL": 0,
                            "FEE": -1.33
                        },
                        "date": [
                            2017,
                            1,
                            3
                        ]
                    },
                    "2": {
                        "actualAmounts": {
                            "NETNET": -173.59,
                            "CLIENT": -173.59,
                            "TECHNICAL": 0,
                            "FEE": -8.68
                        },
                        "targetAmounts": {
                            "NETNET": -173.59,
                            "CLIENT": -173.59,
                            "TECHNICAL": 0,
                            "FEE": -8.68
                        },
                        "date": [
                            2017,
                            2,
                            9
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 16316.43,
                            "CLIENT": 16316.43,
                            "TECHNICAL": 0,
                            "FEE": 911.95
                        },
                        "targetAmounts": {
                            "NETNET": 16316.43,
                            "CLIENT": 16316.43,
                            "TECHNICAL": 0,
                            "FEE": 911.95
                        },
                        "date": [
                            2017,
                            3,
                            6
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 7289.80,
                            "CLIENT": 7289.80,
                            "TECHNICAL": 0,
                            "FEE": 388.52
                        },
                        "targetAmounts": {
                            "NETNET": 7289.80,
                            "CLIENT": 7289.80,
                            "TECHNICAL": 0,
                            "FEE": 388.52
                        },
                        "date": [
                            2017,
                            4,
                            1
                        ]
                    },
                    "5": {
                        "actualAmounts": {
                            "NETNET": -81.85,
                            "CLIENT": -81.85,
                            "TECHNICAL": 0,
                            "FEE": -4.09
                        },
                        "targetAmounts": {
                            "NETNET": -81.85,
                            "CLIENT": -81.85,
                            "TECHNICAL": 0,
                            "FEE": -4.09
                        },
                        "date": [
                            2017,
                            5,
                            1
                        ]
                    },
                    "6": {
                        "actualAmounts": {
                            "NETNET": 1668.74,
                            "CLIENT": 1668.74,
                            "TECHNICAL": 0,
                            "FEE": 36.44
                        },
                        "targetAmounts": {
                            "NETNET": 1668.74,
                            "CLIENT": 1668.74,
                            "TECHNICAL": 0,
                            "FEE": 36.44
                        },
                        "date": [
                            2017,
                            6,
                            1
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 19000.00000000,
                            "CLIENT": 20000.00000000,
                            "TECHNICAL": 1000.00000000,
                            "FEE": 1152.94000000
                        },
                        "date": [
                            2017,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 23750.00000000,
                            "CLIENT": 25000.00000000,
                            "TECHNICAL": 1250.00000000,
                            "FEE": 1441.17500000
                        },
                        "date": [
                            2017,
                            9,
                            1
                        ]
                    },
                    "10": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            10,
                            1
                        ]
                    },
                    "11": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            11,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "3": {
                "forecastCategoryId": 3,
                "budgetElements": {
                    "8": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            9,
                            1
                        ]
                    },
                    "10": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            10,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "4": {
                "forecastCategoryId": 4,
                "budgetElements": {
                    "3": {
                        "actualAmounts": {
                            "NETNET": 10893.60,
                            "CLIENT": 10893.60,
                            "TECHNICAL": 0,
                            "FEE": 640.80
                        },
                        "targetAmounts": {
                            "NETNET": 10893.60,
                            "CLIENT": 10893.60,
                            "TECHNICAL": 0,
                            "FEE": 640.80
                        },
                        "date": [
                            2017,
                            3,
                            6
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 2723.36,
                            "CLIENT": 2723.36,
                            "TECHNICAL": 0,
                            "FEE": 160.20
                        },
                        "targetAmounts": {
                            "NETNET": 2723.36,
                            "CLIENT": 2723.36,
                            "TECHNICAL": 0,
                            "FEE": 160.20
                        },
                        "date": [
                            2017,
                            4,
                            17
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 19000.00000000,
                            "CLIENT": 20000.00000000,
                            "TECHNICAL": 1000.00000000,
                            "FEE": 1152.94000000
                        },
                        "date": [
                            2017,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 23750.00000000,
                            "CLIENT": 25000.00000000,
                            "TECHNICAL": 1250.00000000,
                            "FEE": 1441.17500000
                        },
                        "date": [
                            2017,
                            9,
                            1
                        ]
                    },
                    "10": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            10,
                            1
                        ]
                    },
                    "11": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            11,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "10": {
                "forecastCategoryId": 10,
                "budgetElements": {
                    "6": {
                        "actualAmounts": {
                            "NETNET": 18075.67,
                            "CLIENT": 18907.94,
                            "TECHNICAL": 0,
                            "FEE": 403.98
                        },
                        "targetAmounts": {
                            "NETNET": 18075.67,
                            "CLIENT": 18907.94,
                            "TECHNICAL": 0,
                            "FEE": 403.98
                        },
                        "date": [
                            2017,
                            6,
                            12
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "12": {
                "forecastCategoryId": 12,
                "budgetElements": {
                    "6": {
                        "actualAmounts": {
                            "NETNET": 40640.41,
                            "CLIENT": 42672.44,
                            "TECHNICAL": 0,
                            "FEE": 907.16
                        },
                        "targetAmounts": {
                            "NETNET": 40640.41,
                            "CLIENT": 42672.44,
                            "TECHNICAL": 0,
                            "FEE": 907.16
                        },
                        "date": [
                            2017,
                            6,
                            15
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            9,
                            1
                        ]
                    },
                    "10": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            10,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "13": {
                "forecastCategoryId": 13,
                "budgetElements": {
                    "8": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            9,
                            1
                        ]
                    },
                    "10": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            10,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "14": {
                "forecastCategoryId": 14,
                "budgetElements": {
                    "1": {
                        "actualAmounts": {
                            "NETNET": -26.68,
                            "CLIENT": -26.68,
                            "TECHNICAL": 0,
                            "FEE": -1.33
                        },
                        "targetAmounts": {
                            "NETNET": -26.68,
                            "CLIENT": -26.68,
                            "TECHNICAL": 0,
                            "FEE": -1.33
                        },
                        "date": [
                            2017,
                            1,
                            3
                        ]
                    },
                    "2": {
                        "actualAmounts": {
                            "NETNET": -173.59,
                            "CLIENT": -173.59,
                            "TECHNICAL": 0,
                            "FEE": -8.68
                        },
                        "targetAmounts": {
                            "NETNET": -173.59,
                            "CLIENT": -173.59,
                            "TECHNICAL": 0,
                            "FEE": -8.68
                        },
                        "date": [
                            2017,
                            2,
                            9
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 16316.43,
                            "CLIENT": 16316.43,
                            "TECHNICAL": 0,
                            "FEE": 911.95
                        },
                        "targetAmounts": {
                            "NETNET": 16316.43,
                            "CLIENT": 16316.43,
                            "TECHNICAL": 0,
                            "FEE": 911.95
                        },
                        "date": [
                            2017,
                            3,
                            6
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 7289.80,
                            "CLIENT": 7289.80,
                            "TECHNICAL": 0,
                            "FEE": 388.52
                        },
                        "targetAmounts": {
                            "NETNET": 7289.80,
                            "CLIENT": 7289.80,
                            "TECHNICAL": 0,
                            "FEE": 388.52
                        },
                        "date": [
                            2017,
                            4,
                            1
                        ]
                    },
                    "5": {
                        "actualAmounts": {
                            "NETNET": -81.85,
                            "CLIENT": -81.85,
                            "TECHNICAL": 0,
                            "FEE": -4.09
                        },
                        "targetAmounts": {
                            "NETNET": -81.85,
                            "CLIENT": -81.85,
                            "TECHNICAL": 0,
                            "FEE": -4.09
                        },
                        "date": [
                            2017,
                            5,
                            1
                        ]
                    },
                    "6": {
                        "actualAmounts": {
                            "NETNET": -31.26,
                            "CLIENT": -31.26,
                            "TECHNICAL": 0,
                            "FEE": -1.56
                        },
                        "targetAmounts": {
                            "NETNET": -31.26,
                            "CLIENT": -31.26,
                            "TECHNICAL": 0,
                            "FEE": -1.56
                        },
                        "date": [
                            2017,
                            6,
                            1
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 19000.00000000,
                            "CLIENT": 20000.00000000,
                            "TECHNICAL": 1000.00000000,
                            "FEE": 1152.94000000
                        },
                        "date": [
                            2017,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 23750.00000000,
                            "CLIENT": 25000.00000000,
                            "TECHNICAL": 1250.00000000,
                            "FEE": 1441.17500000
                        },
                        "date": [
                            2017,
                            9,
                            1
                        ]
                    },
                    "10": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            10,
                            1
                        ]
                    },
                    "11": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            11,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "16": {
                "forecastCategoryId": 16,
                "budgetElements": {
                    "1": {
                        "actualAmounts": {
                            "NETNET": -26.68,
                            "CLIENT": -26.68,
                            "TECHNICAL": 0,
                            "FEE": -1.33
                        },
                        "targetAmounts": {
                            "NETNET": -26.68,
                            "CLIENT": -26.68,
                            "TECHNICAL": 0,
                            "FEE": -1.33
                        },
                        "date": [
                            2017,
                            1,
                            3
                        ]
                    },
                    "2": {
                        "actualAmounts": {
                            "NETNET": -173.59,
                            "CLIENT": -173.59,
                            "TECHNICAL": 0,
                            "FEE": -8.68
                        },
                        "targetAmounts": {
                            "NETNET": -173.59,
                            "CLIENT": -173.59,
                            "TECHNICAL": 0,
                            "FEE": -8.68
                        },
                        "date": [
                            2017,
                            2,
                            9
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 5422.83,
                            "CLIENT": 5422.83,
                            "TECHNICAL": 0,
                            "FEE": 271.15
                        },
                        "targetAmounts": {
                            "NETNET": 5422.83,
                            "CLIENT": 5422.83,
                            "TECHNICAL": 0,
                            "FEE": 271.15
                        },
                        "date": [
                            2017,
                            3,
                            6
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 4566.44,
                            "CLIENT": 4566.44,
                            "TECHNICAL": 0,
                            "FEE": 228.32
                        },
                        "targetAmounts": {
                            "NETNET": 4566.44,
                            "CLIENT": 4566.44,
                            "TECHNICAL": 0,
                            "FEE": 228.32
                        },
                        "date": [
                            2017,
                            4,
                            1
                        ]
                    },
                    "5": {
                        "actualAmounts": {
                            "NETNET": -81.85,
                            "CLIENT": -81.85,
                            "TECHNICAL": 0,
                            "FEE": -4.09
                        },
                        "targetAmounts": {
                            "NETNET": -81.85,
                            "CLIENT": -81.85,
                            "TECHNICAL": 0,
                            "FEE": -4.09
                        },
                        "date": [
                            2017,
                            5,
                            1
                        ]
                    },
                    "6": {
                        "actualAmounts": {
                            "NETNET": -31.26,
                            "CLIENT": -31.26,
                            "TECHNICAL": 0,
                            "FEE": -1.56
                        },
                        "targetAmounts": {
                            "NETNET": -31.26,
                            "CLIENT": -31.26,
                            "TECHNICAL": 0,
                            "FEE": -1.56
                        },
                        "date": [
                            2017,
                            6,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "23": {
                "forecastCategoryId": 23,
                "budgetElements": {
                    "3": {
                        "actualAmounts": {
                            "NETNET": 50.41,
                            "CLIENT": 50.41,
                            "TECHNICAL": 0,
                            "FEE": 540.00
                        },
                        "targetAmounts": {
                            "NETNET": 50.41,
                            "CLIENT": 50.41,
                            "TECHNICAL": 0,
                            "FEE": 540.00
                        },
                        "date": [
                            2017,
                            3,
                            6
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 29.19,
                            "CLIENT": 29.19,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "targetAmounts": {
                            "NETNET": 29.19,
                            "CLIENT": 29.19,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "date": [
                            2017,
                            4,
                            1
                        ]
                    },
                    "6": {
                        "actualAmounts": {
                            "NETNET": 459.00,
                            "CLIENT": 459.00,
                            "TECHNICAL": 0,
                            "FEE": 8.72
                        },
                        "targetAmounts": {
                            "NETNET": 459.00,
                            "CLIENT": 459.00,
                            "TECHNICAL": 0,
                            "FEE": 8.72
                        },
                        "date": [
                            2017,
                            6,
                            15
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 2019.07000000,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 2019.07000000,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 1837.64000000,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 1837.64000000,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            9,
                            1
                        ]
                    },
                    "10": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 612.40000000,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 612.40000000,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            10,
                            1
                        ]
                    },
                    "11": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            11,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "25": {
                "forecastCategoryId": 25,
                "budgetElements": {
                    "6": {
                        "actualAmounts": {
                            "NETNET": 1700.00,
                            "CLIENT": 1700.00,
                            "TECHNICAL": 0,
                            "FEE": 38.00
                        },
                        "targetAmounts": {
                            "NETNET": 1700.00,
                            "CLIENT": 1700.00,
                            "TECHNICAL": 0,
                            "FEE": 38.00
                        },
                        "date": [
                            2017,
                            6,
                            12
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "26": {
                "forecastCategoryId": 26,
                "budgetElements": {
                    "2": {
                        "actualAmounts": {
                            "NETNET": 15077.83,
                            "CLIENT": 15831.73,
                            "TECHNICAL": 0,
                            "FEE": 337.06
                        },
                        "targetAmounts": {
                            "NETNET": 15077.83,
                            "CLIENT": 15831.73,
                            "TECHNICAL": 0,
                            "FEE": 337.06
                        },
                        "date": [
                            2017,
                            2,
                            27
                        ]
                    },
                    "3": {
                        "actualAmounts": {
                            "NETNET": 173356.75,
                            "CLIENT": 182024.80,
                            "TECHNICAL": 0,
                            "FEE": 3875.06
                        },
                        "targetAmounts": {
                            "NETNET": 173356.75,
                            "CLIENT": 182024.80,
                            "TECHNICAL": 0,
                            "FEE": 3875.06
                        },
                        "date": [
                            2017,
                            3,
                            1
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 126192.22,
                            "CLIENT": 132501.90,
                            "TECHNICAL": 0,
                            "FEE": 2820.94
                        },
                        "targetAmounts": {
                            "NETNET": 126192.22,
                            "CLIENT": 132501.90,
                            "TECHNICAL": 0,
                            "FEE": 2820.94
                        },
                        "date": [
                            2017,
                            4,
                            1
                        ]
                    },
                    "7": {
                        "actualAmounts": {
                            "NETNET": 68827.26,
                            "CLIENT": 72268.74,
                            "TECHNICAL": 0,
                            "FEE": 1538.68
                        },
                        "targetAmounts": {
                            "NETNET": 68827.26,
                            "CLIENT": 72268.74,
                            "TECHNICAL": 0,
                            "FEE": 1538.68
                        },
                        "date": [
                            2017,
                            7,
                            3
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 202790.46600000,
                            "CLIENT": 214000.00000000,
                            "TECHNICAL": 1019.06800000,
                            "FEE": 4464.68200000
                        },
                        "date": [
                            2017,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 116936.18460000,
                            "CLIENT": 123400.00000000,
                            "TECHNICAL": 587.63080000,
                            "FEE": 2574.49420000
                        },
                        "date": [
                            2017,
                            9,
                            1
                        ]
                    },
                    "10": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 121863.80340000,
                            "CLIENT": 128600.00000000,
                            "TECHNICAL": 612.39320000,
                            "FEE": 2682.98180000
                        },
                        "date": [
                            2017,
                            10,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            },
            "30": {
                "forecastCategoryId": 30,
                "budgetElements": {
                    "3": {
                        "actualAmounts": {
                            "NETNET": 50.41,
                            "CLIENT": 50.41,
                            "TECHNICAL": 0,
                            "FEE": 540.00
                        },
                        "targetAmounts": {
                            "NETNET": 50.41,
                            "CLIENT": 50.41,
                            "TECHNICAL": 0,
                            "FEE": 540.00
                        },
                        "date": [
                            2017,
                            3,
                            6
                        ]
                    },
                    "4": {
                        "actualAmounts": {
                            "NETNET": 29.19,
                            "CLIENT": 29.19,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "targetAmounts": {
                            "NETNET": 29.19,
                            "CLIENT": 29.19,
                            "TECHNICAL": 0,
                            "FEE": 0.00
                        },
                        "date": [
                            2017,
                            4,
                            1
                        ]
                    },
                    "6": {
                        "actualAmounts": {
                            "NETNET": 459.00,
                            "CLIENT": 459.00,
                            "TECHNICAL": 0,
                            "FEE": 8.72
                        },
                        "targetAmounts": {
                            "NETNET": 459.00,
                            "CLIENT": 459.00,
                            "TECHNICAL": 0,
                            "FEE": 8.72
                        },
                        "date": [
                            2017,
                            6,
                            15
                        ]
                    },
                    "8": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 2019.07000000,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 2019.07000000,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            8,
                            1
                        ]
                    },
                    "9": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 1837.64000000,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 1837.64000000,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            9,
                            1
                        ]
                    },
                    "10": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 612.40000000,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 612.40000000,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            10,
                            1
                        ]
                    },
                    "11": {
                        "actualAmounts": {
                            "NETNET": null,
                            "CLIENT": null,
                            "TECHNICAL": null,
                            "FEE": null
                        },
                        "targetAmounts": {
                            "NETNET": 0E-8,
                            "CLIENT": 0E-8,
                            "TECHNICAL": 0E-8,
                            "FEE": 0E-8
                        },
                        "date": [
                            2017,
                            11,
                            1
                        ]
                    }
                },
                "timeFrame": "MONTH"
            }
        }
    };

    //let Budget = $resource('/api/v1/budget/:clientId');

    return {
        getBudget
    };


    function getBudget(client, year) {
        //return Budget.$get({ clientId: client.id, year });
        // mock budget route

        let budget = {};

        switch (year) {
            case 2016:
                budget = BUDGET_2016;
                break;
            case 2017:
                budget = BUDGET_2017;
                break;
        }

        return $q(resolve => {
            $timeout(() => resolve(budget), 300);
        });
    }
});
