---
tag: FS901XR1SK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h144072
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23024
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2006
    source: hf-ai-mo-aops
    label: 2006 IberoAmerican
---
In a scalene triangle $ABC$ with $\angle A = 90^\circ,$ the tangent line at $A$ to its circumcircle meets line $BC$ at $M$ and the incircle touches $AC$ at $S$ and $AB$ at $R.$
The lines $RS$ and $BC$ intersect at $N,$ while the lines $AM$ and $SR$ intersect at $U.$
Prove that the triangle $UMN$ is isosceles.
