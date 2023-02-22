## GTG

# the .git directory in working directory store all the files of the git-repository
# inside it is the object folder, this contains file information, all foldernames start with the first two letters of the hash, inside the directory, the remaining letters of the hash store the object

# to check the type of file in objects, use 
## git cat-file -t <hash-val>

# to check the contents of the file in objects, use
## git cat-file -p <hash-val>

# the other directories like HEAD, store pointer the current HEAD location

## TYJC
