
echo -n 'admin' > ./username.txt
echo -n '1f2d1e2e67df' > ./password.txt

The -n flag in the above two commands ensures that the generated files will not contain an extra newline character at the end of the text. This is important because when kubectl reads a file and encode the content into base64 string, the extra newline character gets encoded too.

---

[DECODE the secret]

1. kubectl get secret db-user-pass -o jsonpath='{.data}'

2. echo 'MWYyZDFlMmU2N2Rm' | base64 --decode

[Managing Secret using Configuration File]

[Managing Secret using Kustomize]
