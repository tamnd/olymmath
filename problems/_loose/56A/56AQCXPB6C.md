---
tag: 56AQCXPB6C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=62870
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a convex quadrilateral $ABCD$. Each of its sides is divided into $k$ equal parts. The division points on side $AB$ are connected by lines to the division points on side $CD$, such that the first point from $A$ is connected to the first point from $D$, the second point from $A$ to the second point from $D$, and so on (first series of lines), and the division points on side $BC$ are similarly connected to the division points on side $DA$ (second series of lines). This results in $k^2$ small quadrilaterals. From these, $k$ quadrilaterals are chosen such that any two chosen quadrilaterals are separated by at least one line from the first series and at least one line from the second series.

$$
\text{Prove that the sum of the areas of the chosen quadrilaterals is } 1 / k S_{ABCD} \text{.}
$$
