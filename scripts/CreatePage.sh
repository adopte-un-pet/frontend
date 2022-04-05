PAGE_NAME=$1
BASE_PATH=pages/"$PAGE_NAME"
HTML_PATH="$BASE_PATH"/index.html
VUE_PATH="$BASE_PATH"/index.vue
TS_PATH="$BASE_PATH"/script.ts


mkdir -p "$BASE_PATH"
touch "$HTML_PATH"
touch "$VUE_PATH"
touch "$TS_PATH"

{
echo "<h1>$PAGE_NAME</h1>"
}>> "$HTML_PATH"

{
echo "<template src=\"./index.html\"/>"
echo "<script lang=\"ts\" src=\"./script.ts\"/>"
}>> "$VUE_PATH"

{
echo "export default {
    name: \"$PAGE_NAME\"
}"
}>> "$TS_PATH"


