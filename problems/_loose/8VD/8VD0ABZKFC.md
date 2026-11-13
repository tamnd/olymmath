---
tag: 8VD0ABZKFC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75197
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a given triangle $ABC$, choose points $K, M$ inside side $AC$ and points $L, N$ inside side $BC$ such that

$$
|AK|=|KM|=|MC|, |BL|=|LN|=|NC|.
$$

Further, let $E$ be the intersection of the diagonals of trapezoid $ABLK$, $F$ the intersection of the diagonals of trapezoid $KLMN$, and $G$ the intersection of the diagonals of trapezoid $ABNM$. Prove that points $E, F$, and $G$ lie on the median $z$ from vertex $C$ of triangle $ABC$, and determine the ratio $|GF|:|EF|$.
