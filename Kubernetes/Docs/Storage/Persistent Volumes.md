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

10. 

---

