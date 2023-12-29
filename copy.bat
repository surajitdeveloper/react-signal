whoami
#yarn install
#yarn run build
#yarn run stop-server
#yarn run run-server
#yarn run serve

yarn install
yarn run build
rmdir /s /q C:\Users\Administrator\OneDrive\Windows\Jenkins\xampp\htdocs\build
rmdir /s /q ../../../xampp/htdocs/build
move ./build ../../../xampp/htdocs
ren C:\Users\Administrator\OneDrive\Windows\Jenkins\xampp\htdocs\build stagging