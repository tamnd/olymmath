---
tag: SAHS6AKDRC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162983
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo
    source: hf-mathnet
    label: Slovenia 63. matematično tekmovanje srednješolcev Slovenije, Državno tekmovanje
---
Find all pairs of real numbers $x$ and $y$ that solve the system of equations

$$
\begin{gathered}
\frac{y^{3}+15 x^{2}}{y^{4}-x^{3}}=\frac{y^{2}+15 x}{y^{3}-x^{2}} \\
\frac{1500 y^{3}+4 x^{2}}{9 y^{4}-4}=\frac{1500 y^{2}+4 x}{9 y^{3}-4}
\end{gathered}
$$
