---
tag: JWVCT12BCZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188460
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Junior Macedonian Mathematical Olympiad
---
Let $ABCD$ be a parallelogram and let $E, F, G$ and $H$ be the midpoints of sides $AB, BC, CD$ and $DA$, respectively. If $B H \cap A C=I, B D \cap E C=J$, $A C \cap D F=K$ and $A G \cap B D=L$, prove that quadrilateral $IJKL$ is a parallelogram.
