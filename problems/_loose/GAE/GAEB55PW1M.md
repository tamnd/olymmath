---
tag: GAEB55PW1M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103850
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given non-negative real numbers $x, y, z$ satisfying $x^{2}+y^{2}+z^{2}=3$. Prove:
$$
\begin{array}{l}
\sqrt{3-\left(\frac{x+y}{2}\right)^{2}}+\sqrt{3-\left(\frac{y+z}{2}\right)^{2}}+\sqrt{3-\left(\frac{z+x}{2}\right)^{2}} \\
\geqslant 3 \sqrt{2} .
\end{array}
$$
