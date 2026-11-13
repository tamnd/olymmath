---
tag: RCZF1X2CNV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248232
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=418
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be a triangle. Let $M$ be a variable point interior to the segment $AB$, and let $\gamma_B$ be the circle through $M$ and tangent at $B$ to $BC$. Let $P$ and $Q$ be the touch points of $\gamma_B$ and its tangents from $A$, and let $X$ be the midpoint of the segment $PQ$. Similarly, let $N$ be a variable point interior to the segment $AC$, and let $\gamma_C$ be the circle through $M$ and tangent at $C$ to $BC$. Let $R$ and $S$ be the touch points of $\gamma_C$ and its tangents from $A$, and let $Y$ be the midpoint of the segment $RS$. Prove that the line through the centers of the circles $AMN$ and $AXY$ passes through a fixed point.
