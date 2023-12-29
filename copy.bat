whoami
#yarn install
#yarn run build
#yarn run stop-server
#yarn run run-server
#yarn run serve

yarn install
yarn run build
#Remove-Item C:\Users\Administrator\OneDrive\Windows\Jenkins\.jenkins\xampp\htdocs\build -recurse -force
#Remove-Item ../../../xampp/htdocs/build -recurse -force
$FolderName = "../../../xampp/htdocs/build"
if (Test-Path $FolderName) {
 
    Write-Host "Folder Exists"
    Remove-Item $FolderName -Recurse -Force
}
else
{
    Write-Host "Folder Doesn't Exists"
}
move ./build ../../../xampp/htdocs