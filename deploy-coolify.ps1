$Token = "3|RND3bmPReJW7eQJ5fwlKOBGfXIYN0eWAyMpaavHB565d08c7"
$Headers = @{
    "Authorization" = "Bearer $Token"
    "Content-Type" = "application/json"
}
$BaseUrl = "http://ironforge-coolify.tailafb692.ts.net:8000/api/v1"

$Payload = @{
    "project_uuid" = "z0kokssskswokgwo8w8go0so"
    "server_uuid" = "swwk0owc8sokwo80w48k48w0"
    "environment_name" = "production"
    "git_repository" = "https://github.com/Techlemariam/Enhorningsligan.git"
    "git_branch" = "master"
    "build_pack" = "nixpacks"
    "ports_exposes" = "80"
}

try {
    $JsonPayload = $Payload | ConvertTo-Json
    $Response = Invoke-RestMethod -Uri "$BaseUrl/applications/public" -Method POST -Headers $Headers -Body $JsonPayload
    Write-Output "Success! Application created. UUID: $($Response.uuid)"
    $Response | ConvertTo-Json -Depth 2
} catch {
    Write-Output "Error:"
    $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
    $reader.ReadToEnd()
}
