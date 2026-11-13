---
tag: J9M2NAVCYJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254206
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=284
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABCD$ be an inscribed quadrilateral. Let the incenters of $BAD$ and $CAD$ be $I$ and $J$ respectively. Let the intersection point of the line that passes through $I$ and perpendicular to $BD$ and the line that passes through $J$ and perpendicular to $AC$ be $K$. Prove that $KI=KJ$
