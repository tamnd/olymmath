---
tag: JSGMTH4BFP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n \geqslant 4$, if a convex $n$-gon $A_{1} A_{2} \cdots A_{n}$ satisfies that for any $2 \leqslant k \leqslant n-2$,
$$
A_{1} A_{k+1}=A_{2} A_{k+2}=\cdots=A_{n-1} A_{k-1}=A_{n} A_{k} \text {, }
$$

then it is called a "regular $n$-gon". For example, rectangles and isosceles trapezoids are both regular quadrilaterals.
(1) Construct a regular hexagon that is not a regular hexagon;
(2) Prove that for $n \geqslant 7$, all regular $n$-gons are regular $n$-gons.
