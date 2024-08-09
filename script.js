
function validateAndGetFormData() {
    var projectIdVar = $("#projectId").val();
    if (projectIdVar === "") {
        alert("Project ID is required");
        $("#projectId").focus();
        return "";
    }
    var projectNameVar = $("#projectName").val();
    var assignedToVar = $("#assignedTo").val();
    var assignmentDateVar = $("#assignmentDate").val();
    var deadlineVar = $("#deadline").val();
    var jsonStrObj = {
        projectId: projectIdVar,
        projectName: projectNameVar,
        assignedTo: assignedToVar,
        assignmentDate: assignmentDateVar,
        deadline: deadlineVar
    };
    return JSON.stringify(jsonStrObj);
}

function resetForm() {
    $("#projectForm").trigger("reset");
    $("#projectId").focus();
    $("#saveBtn").prop("disabled", false);
    $("#resetBtn").prop("disabled", false);
}

function saveProject() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90932126|-31949220216199280|90962159",
        jsonStr, "COLLEGE-DB", "PROJECT-TABLE");
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr,
        "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
}

$(document).ready(function() {
    $("#projectId").focus();
});
