# Script to commit and push changes
# Run this AFTER closing Cursor completely

$repoPath = "G:\Projects\edcartech-new-world"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Committing and Pushing Changes" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Clear proxy settings
Write-Host "Step 1: Clearing proxy settings..." -ForegroundColor Yellow
$env:HTTP_PROXY = $null
$env:HTTPS_PROXY = $null
$env:http_proxy = $null
$env:https_proxy = $null
git config --local http.proxy ""
git config --local https.proxy ""
Write-Host "  ✓ Proxy settings cleared" -ForegroundColor Green

# Step 2: Remove lock files
Write-Host ""
Write-Host "Step 2: Removing Git lock files..." -ForegroundColor Yellow
$lockFiles = @(
    "$repoPath\.git\index.lock",
    "$repoPath\.git\config.lock"
)

foreach ($lockFile in $lockFiles) {
    if (Test-Path $lockFile) {
        try {
            Remove-Item -Path $lockFile -Force -ErrorAction Stop
            Write-Host "  ✓ Removed: $lockFile" -ForegroundColor Green
        } catch {
            Write-Host "  ✗ Could not remove: $lockFile" -ForegroundColor Red
            Write-Host "    Make sure Cursor is completely closed!" -ForegroundColor Yellow
        }
    }
}

Start-Sleep -Seconds 1

# Step 3: Navigate to repository
Write-Host ""
Write-Host "Step 3: Staging changes..." -ForegroundColor Yellow
Set-Location $repoPath

try {
    git add -A
    Write-Host "  ✓ Changes staged" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Failed to stage changes: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Step 4: Commit
Write-Host ""
Write-Host "Step 4: Committing changes..." -ForegroundColor Yellow
try {
    git commit -m "Refactored"
    Write-Host "  ✓ Changes committed" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Failed to commit: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Step 5: Push to remote
Write-Host ""
Write-Host "Step 5: Pushing to origin/master..." -ForegroundColor Yellow
try {
    git push origin master
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "✓ Successfully pushed to remote!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
} catch {
    Write-Host ""
    Write-Host "✗ Push failed: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Possible issues:" -ForegroundColor Yellow
    Write-Host "  1. Network/proxy issue - check your internet connection" -ForegroundColor Gray
    Write-Host "  2. Authentication issue - you may need to authenticate with GitHub" -ForegroundColor Gray
    Write-Host "  3. Permission issue - ensure you have push access" -ForegroundColor Gray
    Write-Host ""
    Write-Host "You can manually push later with:" -ForegroundColor Cyan
    Write-Host "  git push origin master" -ForegroundColor Yellow
}
