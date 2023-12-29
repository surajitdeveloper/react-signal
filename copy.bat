whoami
yarn install
yarn run build
yarn run stop-server
yarn run run-server
yarn run serve

yarn install
yarn run build
copy ./build ../../../xampp/htdocs
rmdir ../../../xampp/htdocs
move ./build ../../../xampp/htdocs