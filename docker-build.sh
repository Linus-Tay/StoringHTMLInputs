git_branch=`git symbolic-ref --short HEAD`
git_hash=`git rev-parse --short HEAD`
docker_version=${git_branch}.${git_hash}