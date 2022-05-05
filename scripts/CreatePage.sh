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
echo "import {updateHead} from \"~/data/update-head\";
const title = \"Adopter un animal : nos annonces et nos éleveurs\"
const description = \"Site communautaire dans lequel les éleveurs français d’animaux de compagnie pourront inscrire leur élevage et présenter les animaux destinés à la vente avec une fiche par animal.\"
const route = \"/$PAGE_NAME\"

export default {
    name: \"$PAGE_NAME\",
    head: updateHead(title, description, route)
}"
}>> "$TS_PATH"


