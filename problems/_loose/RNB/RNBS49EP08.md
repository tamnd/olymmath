---
tag: RNBS49EP08
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h369953
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44083
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2003
    source: hf-ai-mo-aops
    label: 2003 Iran MO (2nd round)
---
We have a chessboard and we call a $1\times1$ square a room. A robot is standing on one arbitrary vertex of the rooms. The robot starts to move and in every one movement, he moves one side of a room. This robot has $2$ memories $A,B$ . At first, the values of $A,B$ are $0$ . In each movement, if he goes up, $1$ unit is added to $A$ , and if he goes down, $1$ unit is waned from $A$ , and if he goes right, the value of $A$ is added to $B$ , and if he goes left, the value of $A$ is waned from $B$ . Suppose that the robot has traversed a traverse (!) which hasn't intersected itself and finally, he has come back to its initial vertex. If $v(B)$ is the value of $B$ in the last of the traverse, prove that in this traverse, the interior surface of the shape that the robot has moved on its circumference is equal to $|v(B)|$ .
