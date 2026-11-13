---
tag: NVHFDWGS4G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h369934
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44059
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240332
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1999
    source: hf-ai-mo-aops
    label: 1999 Iran MO (2nd round)
---
Let $ABC$ be a triangle and points $P,Q,R$ be on the sides $AB,BC,AC$ , respectively. Now, let $A',B',C'$ be on the segments $PR,QP,RQ$ in a way that $AB||A'B'$ , $BC||B'C'$ and $AC||A'C'$ . Prove that:
$$ \frac{AB}{A'B'}=\frac{S_{PQR}}{S_{A'B'C'}}. $$
Where $S_{XYZ}$ is the surface of the triangle $XYZ$ .
