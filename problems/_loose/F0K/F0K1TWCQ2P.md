---
tag: F0K1TWCQ2P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h365505
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5126
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207268
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Iran MO (3rd Round)
---
**points in plane**

set $A$ containing $n$ points in plane is given. a $copy$ of $A$ is a set of points that is made by using transformation, rotation, homogeneity or their combination on elements of $A$ . we want to put $n$ $copies$ of $A$ in plane, such that every two copies have exactly one point in common and every three of them have no common elements.
a) prove that if no $4$ points of $A$ make a parallelogram, you can do this only using transformation. ( $A$ doesn't have a parallelogram with angle $0$ and a parallelogram that it's two non-adjacent vertices are one!)
b) prove that you can always do this by using a combination of all these things.

time allowed for this question was 1 hour and 30 minutes
