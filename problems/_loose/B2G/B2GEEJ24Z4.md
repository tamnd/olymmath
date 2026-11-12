---
tag: B2GEEJ24Z4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14258
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the quadratic trinomials $x^{2}+a x+b, x^{2}+c x+d$, and $x^{2}+e x+f$. It turns out that any two of them have a common root, but all three do not have a common root. Prove that exactly two of the following three inequalities are satisfied:

$$
\begin{aligned}
& \frac{a^{2}+c^{2}-e^{2}}{4}>b+d-f \\
& \frac{c^{2}+e^{2}-a^{2}}{4}>d+f-b \\
& \frac{e^{2}+a^{2}-c^{2}}{4}>f+b-d
\end{aligned}
$$
