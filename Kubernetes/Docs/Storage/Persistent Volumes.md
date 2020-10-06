# https://kubernetes.io/docs/concepts/storage/persistent-volumes/

[PersistentVolume]
1. A PersistentVolume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes.

2. It is a resource in the cluster.

3.  PVs are volume plugins like Volumes, but have a lifecycle independent of any individual Pod that uses the PV.

[PersistentVolumeClaim]
4. A PersistentVolumeClaim (PVC) is a request for storage by a user. 
5. PVCs consume PV resources.
6. Pods can request specific levels of resources (CPU and Memory). Claims can request specific size and access modes (e.g., they can be mounted ReadWriteOnce, ReadOnlyMany or ReadWriteMany.

7. PersistentVolumeClaims  consume abstract storage resources, without exposing users to the details of how those volumes are implemented. For these needs, there is the StorageClass resource.

[Lifecycle of a volume and claim]
---
8. PVs are resources in the cluster. PVCs are requests for those resources and also act as claim. The interaction between PVs and PVCs follows this lifecycle:

1. Provisioning: There are two ways PVs may be provisioned: statically or dynamically.

2. Static : A cluster administrator creates a number of PVs. They carry the details of the real storage, which is available for use by cluster users. They exist in the Kubernetes API and are available for consumption

3. When none of the static PVs the administrator created match a user's PersistentVolumeClaim, the cluster may try to dynamically provision a volume specially for the PVC. This provisioning is based on StorageClasses: the PVC must request a storage class

4. Binding : A PVC to PV binding is a one-to-one mapping, using a ClaimRef. Claims will remain unbound indefinitely if a matching volume does not exist. Claims will be bound as matching volumes become available. For example, a cluster provisioned with many 50Gi PVs would not match a PVC requesting 100Gi. The PVC can be bound when a 100Gi PV is added to the cluster.

5. Using : Pods use claims as volumes. The cluster inspects the claim to find the bound volume and mounts that volume for a Pod. For volumes that support multiple access modes, the user specifies which mode is desired when using their claim as a volume in a Pod.

6. Storage Object in Use Protection: 
a. If a user deletes a PVC in active use by a Pod, the PVC is not removed immediately. PVC removal is postponed until the PVC is no longer actively used by any Pods.

b. Also, if an admin deletes a PV that is bound to a PVC, the PV is not removed immediately. PV removal is postponed until the PV is no longer bound to a PVC.

7. Reclaiming : The reclaim policy for a PersistentVolume tells the cluster what to do with the volume after it has been released of its claim. Currently, volumes can either be Retained, Recycled, or Deleted.

a. Retain : When the PersistentVolumeClaim is deleted, the PersistentVolume still exists and the volume is considered "released". But it is not yet available for another claim because the previous claimant's data remains on the volume. An administrator can manually reclaim the volume with the following steps.
** Delete the PersistentVolume
** Manually clean up 

8. Reserving a PersistentVolume: 

9. Expanding Persistent Volumes Claims: You can only expand a PVC if its storage class's allowVolumeExpansion field is set to true.

a. To request a larger volume for a PVC, edit the PVC object and specify a larger size. This triggers expansion of the volume that backs the underlying PersistentVolume. A new PersistentVolume is never created to satisfy the claim. Instead, an existing volume is resized.



---
10. [Capacity] : Currently, storage size is the only resource that can be set or requested. Future attributes may include IOPS, throughput, etc

11. [Volume Mode] : Kubernetes supports two volumeModes of PersistentVolumes: Filesystem and Block.

12. volumeMode is an optional API parameter. Filesystem is the default mode used when volumeMode parameter is omitted.

13. [Access Modes] : 
ReadWriteOnce -- the volume can be mounted as read-write by a single node
ReadOnlyMany -- the volume can be mounted read-only by many nodes
ReadWriteMany -- the volume can be mounted as read-write by many nodes

14. Important! A volume can only be mounted using one access mode at a time, even if it supports many. For example, a GCEPersistentDisk can be mounted as ReadWriteOnce by a single node or ReadOnlyMany by many nodes, but not at the same time.

15. A PV can specify node affinity to define constraints that limit what nodes this volume can be accessed from. Pods that use a PV will only be scheduled to nodes that are selected by the node affinity

16. Phase
A volume will be in one of the following phases:

Available -- a free resource that is not yet bound to a claim
Bound -- the volume is bound to a claim
Released -- the claim has been deleted, but the resource is not yet reclaimed by the cluster
Failed -- the volume has failed its automatic reclamation
The CLI will show the name of the PVC bound to the PV

17. [PersistentVolumeClaims] : 
Selector
Claims can specify a label selector to further filter the set of volumes. Only the volumes whose labels match the selector can be bound to the claim. The selector can consist of two fields:

matchLabels - the volume must have a label with this value
matchExpressions - a list of requirements made by specifying key, list of values, and operator that relates the key and values. Valid operators {include In, NotIn, Exists, and DoesNotExist}.
All of the requirements, from both matchLabels and matchExpressions, are ANDed together – they must all be satisfied in order to match

18. [Claims As Volumes] : Pods access storage by using the claim as a volume. Claims must exist in the same namespace as the Pod using the claim. The cluster finds the claim in the Pod's namespace and uses it to get the PersistentVolume backing the claim. The volume is then mounted to the host and into the Pod.

apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
    - name: myfrontend
      image: nginx
      volumeMounts:
      - mountPath: "/var/www/html"
        name: mypd
  volumes:
    - name: mypd
      persistentVolumeClaim:
        claimName: myclaim

19. [Mount Options]: Note: Not all Persistent Volume types support mount options.

a. Mount options are not validated, so mount will simply fail if one is invalid.

20. PersistentVolumes binds are exclusive, and since PersistentVolumeClaims are namespaced objects, mounting claims with "Many" modes (ROX, RWX) is only possible within one namespace

21. [Raw Block Volume Support] : Note: When adding a raw block device for a Pod, you specify the device path in the container instead of a mount path

22. Volume snapshot feature was added to support CSI Volume Plugins only.

23. To enable support for restoring a volume from a volume snapshot data source, enable the {VolumeSnapshotDataSource} feature gate on the apiserver and controller-manager

24. Volume Cloning only available for CSI volume plugins.
