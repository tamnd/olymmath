---
tag: EAPM1MYJVX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254676
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Denote in the triangle $ABC$ by $h$ the length of the height drawn from vertex $A$, and by $\alpha = \angle BAC$. Prove that the inequality $AB + AC \ge BC \cdot \cos \alpha + 2h \cdot \sin \alpha$ . Are there triangles for which this inequality turns into equality?
