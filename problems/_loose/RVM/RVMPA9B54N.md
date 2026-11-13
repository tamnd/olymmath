---
tag: RVMPA9B54N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h518421
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5364
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207512
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2010
    source: hf-ai-mo-aops
    label: 2010 Olympic Revenge
---
Joaquim, José and João participate of the worship of triangle $ABC$ . It is well known that $ABC$ is a random triangle, nothing special. According to the dogmas of the worship, when they form a triangle which is similar to $ABC$ , they will get immortal. Nevertheless, there is a condition: each person must represent a vertice of the triangle. In this case, Joaquim will represent vertice $A$ , José vertice $B$ and João will represent vertice $C$ . Thus, they must form a triangle which is similar to $ABC$ , in this order.

Suppose all three points are in the Euclidean Plane. Once they are very excited to become immortal, they act in the following way: in each instant $t$ , Joaquim, for example, will move with constant velocity $v$ to the point in the same semi-plan determined by the line which connects the other two points, and which would create a triangle similar to $ABC$ in the desired order. The other participants act in the same way.
If the velocity of all of them is same, and if they initially have a finite, but sufficiently large life, determine if they can get immortal.

*Observation: Initially, Joaquim, José and João do not represent three collinear points in the plane*
