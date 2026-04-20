$Token = "3|RND3bmPReJW7eQJ5fwlKOBGfXIYN0eWAyMpaavHB565d08c7"
$Headers = @{
    "Authorization" = "Bearer $Token"
    "Content-Type" = "application/json"
}
$BaseUrl = "http://ironforge-coolify.tailafb692.ts.net:8000/api/v1"

$Apps = Invoke-RestMethod -Uri "$BaseUrl/applications" -Headers $Headers
$RefApp = $Apps[0]

$Servers = Invoke-RestMethod -Uri "$BaseUrl/servers" -Headers $Headers
$ServerUuid = $Servers[0].uuid

Write-Output "App Source UUID (Github App UUID): $($RefApp.source.uuid)"
Write-Output "Server UUID: $ServerUuid"
