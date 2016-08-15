angular.module('app')
    .controller('techCtrl', techCtrl);

function techCtrl($scope, techService) {
    $scope.flax = "Time for Flax Facts";
    $scope.getJobByInvoice = function(invoice) {
        $scope.customer = techService.getJobByInvoice(invoice)
            .then(function(response) {
                console.log(response);
                $scope.customer = response;
            });
    };
    $scope.testCm = {
        first_name: "Takeshi",
        last_name: "Kovacs",
        invoice: 84611,
        phone_num1: "208-251-6641",
        phone_num2: "309-516-6634",
        next_step: "Get resleeved in Kamala Neurochem tech ninja sleeve, proceed to mess everyone up.",
        appt_time: moment("2016-08-11T18:13:07.350Z").fromNow()
            // moment().subtract(1, 'days').calendar()
    };
    $scope.test = "Kika is a buttlicker";
    console.log($scope.testCm);
    console.log(moment());
    $scope.getAllCustomers = function() {
        techService.getAllCustomers().then(function(response) {
            console.log(response);
            $scope.customers = response.data;
        });
    };
    $scope.getAllCustomers();
    $scope.storeTime = moment().tz('America/Boise');
    $scope.getAllAppointments = function() {
      techService.getAllAppointments().then(function(response) {
        $scope.appointments = response;
        console.log($scope.appointments);
      });
    };
    $scope.getAllAppointments();
}
