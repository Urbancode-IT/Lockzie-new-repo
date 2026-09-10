# Script to automate uploading media to Cloudinary using the official Cloudinary CLI
# Ensure you have Python and Pip installed before running this script

Write-Host "Checking for Cloudinary CLI..."
# Resolve the exact path to Python's Scripts folder where cld is installed
$ScriptsPath = python -c "import sysconfig; print(sysconfig.get_path('scripts'))"
$CldPath = Join-Path $ScriptsPath "cld.exe"

if (-not (Test-Path $CldPath)) {
    Write-Host "Installing Cloudinary CLI..."
    pip install cloudinary-cli
} else {
    Write-Host "Cloudinary CLI is already installed."
}

# Load environment variables from .env file so we don't have to manually set it in terminal
if (Test-Path ".env") {
    Write-Host "Loading environment variables from .env file..."
    Get-Content ".env" | ForEach-Object {
        if ($_ -match '^\s*([^#=]+)\s*=\s*(.*)\s*$') {
            $name = $matches[1].Trim()
            $value = $matches[2].Trim()
            Set-Item -Path "Env:$name" -Value $value
        }
    }
}

# Check if CLOUDINARY_URL is set
if (-not $env:CLOUDINARY_URL) {
    Write-Host "=================================================================" -ForegroundColor Red
    Write-Host "ERROR: CLOUDINARY_URL environment variable is not set!" -ForegroundColor Red
    Write-Host "Please get your API Environment variable from Cloudinary Dashboard." -ForegroundColor Yellow
    Write-Host "Add the following line to your .env file:" -ForegroundColor Yellow
    Write-Host 'CLOUDINARY_URL="cloudinary://<api_key>:<api_secret>@r0vgotvj"' -ForegroundColor Cyan
    Write-Host "=================================================================" -ForegroundColor Red
    exit 1
}

Write-Host "Starting upload process..." -ForegroundColor Green

# Upload the public directory with the preset
Write-Host "Uploading contents of 'public' directory using preset 'Lockzie project'..." -ForegroundColor Cyan
# This will upload the entire public folder (maintaining subdirectories) to a folder named "public" on Cloudinary
& $CldPath upload_dir "public" -f "public" -p "Lockzie project"

Write-Host "Upload process completed successfully!" -ForegroundColor Green
