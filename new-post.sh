#!/bin/bash

echo 'New post'
echo '====================='
read -p 'Title: ' title
read -p 'Body: ' body
echo '====================='
echo 'Creating new post...'
 
date=`date '+%Y-%m-%d %H:%M:%S'`
slugified_date=`date +%Y-%m-%d`
slugified_title=$(echo "$title" | iconv -t ascii//TRANSLIT | sed -E s/[^a-zA-Z0-9]+/-/g | sed -E s/^-+\|-+$//g | tr A-Z a-z)

cat > "$slugified_date-$slugified_title.md" << EOF
---
title:  $title
date:   $date
---

$body
EOF

echo 'Done!'