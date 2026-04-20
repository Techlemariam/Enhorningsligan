$Token = "3|RND3bmPReJW7eQJ5fwlKOBGfXIYN0eWAyMpaavHB565d08c7"
$Headers = @{
    "Authorization" = "Bearer $Token"
    "Content-Type" = "application/json"
}
$BaseUrl = "http://ironforge-coolify.tailafb692.ts.net:8000/api/v1"
$Uuid = "n4000oo0cs8sk0cs8o4g4gww"

Invoke-RestMethod -Uri "$BaseUrl/deploy?uuid=$Uuid" -Method GET -Headers $Headers
