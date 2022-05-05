ARG=$1
SPLIT_ARG=(${ARG//// })
SPLIT_ARG_LENGTH=${#SPLIT_ARG[@]}
COMPONENT_NAME="$(echo "${SPLIT_ARG[$SPLIT_ARG_LENGTH - 1]}" | sed 's/.*/\u&/')"
BASE_PATH=components/

unset 'SPLIT_ARG[${#SPLIT_ARG[@]}-1]'

for file in "${SPLIT_ARG[@]}"
do
    BASE_PATH+="$(echo "$file" | sed 's/.*/\u&/')/"
done

FULL_PATH="$BASE_PATH""$COMPONENT_NAME"
HTML_PATH="$FULL_PATH"/index.html
VUE_PATH="$FULL_PATH"/index.vue
TS_PATH="$FULL_PATH"/script.ts

echo "$FULL_PATH"


mkdir -p "$FULL_PATH"
touch "$HTML_PATH"
touch "$VUE_PATH"
touch "$TS_PATH"

{
echo "<h1>$COMPONENT_NAME</h1>"
}>> "$HTML_PATH"

{
echo "<template src=\"./index.html\"/>"
echo "<script lang=\"ts\" src=\"./script.ts\"/>"
}>> "$VUE_PATH"

{
echo "export default {
    name: \"$COMPONENT_NAME\"
}"
}>> "$TS_PATH"


