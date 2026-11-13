---
tag: DK0C4HEAAM
kind: problem
type: answer
answer: CA = CD
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=255073
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 60th Ukrainian National Mathematical Olympiad
---
Given a convex quadrilateral $ABCD$, in which $\angle CBD = 90^o$, $\angle BCD =\angle CAD$ and $AD= 2BC$. Prove that $CA =CD$.

(Anton Trygub)
