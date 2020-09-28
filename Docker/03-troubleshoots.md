1. docker images --all | grep none | awk '{ print $3; }' | xargs docker rmi  <: Error response from daemon: conflict: unable to delete 24d4ff7e06d5 (cannot be forced) - image has dependent child images>

