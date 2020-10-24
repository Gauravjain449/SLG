# https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/
[StatefulSet Basics]

1. You can use either kubectl scale or kubectl patch to scale a StatefulSet

2.  As with StatefulSet creation, the StatefulSet controller created each Pod sequentially with respect to its ordinal index, and it waited for each Pod's predecessor to be Running and Ready before launching the subsequent Pod

3. 