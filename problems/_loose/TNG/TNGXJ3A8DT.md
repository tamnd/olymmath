---
tag: TNGXJ3A8DT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23452
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an arbitrary triangle $ABC$. Let $A_{1}$, $B_{1}$, $C_{1}$ be three points on the lines $BC$, $CA$, $AB$ respectively.

We introduce the following notations:

$$
\begin{gathered}
R=\frac{\left|A C_{1}\right|}{\left|C C_{1} B\right|} \cdot \frac{\left|B A_{1}\right|}{\left|A_{1} C\right|} \cdot \frac{\left|C B_{1}\right|}{\left|B_{1} A\right|} \\
R^{*}=\frac{\sin \angle A C C_{1}}{\sin \angle C_{1} C B} \cdot \frac{\sin \angle B A A_{1}}{\sin \angle A_{1} A C} \cdot \frac{\sin \angle C B B_{1}}{\sin \angle B_{1} B A} \cdot
\end{gathered}
$$

Prove that $R=R^{*}$.
