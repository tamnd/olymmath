---
tag: WDEYP4VKQP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162827
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2008
    source: hf-mathnet
    label: Slovenia Slovenija 2008
---
Let $A B C D$ be a quadrilateral and $K$ a point inside triangle $A B D$ such that triangles $A B D$ and $K C D$ are similar. Prove that triangles $B C D$ and $A K D$ are also similar.
