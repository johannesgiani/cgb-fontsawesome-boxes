npm run build

commit=$(git log --pretty=format:'%h' -n 1)

tar -czvf cgb-fontsawesome-boxes-$commit.tar \
    src/init.php \
    dist \
    plugin.php \
    LICENSE
