---
tag: BXFTA17SS6
kind: problem
type: answer
answer: (x,x,x),(x,0,x),(x,0,-x)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76046
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples $(x, y, z)$ of real numbers for which

$$
\begin{aligned}
& x^{2}+x y=y^{2}+z^{2}, \\
& z^{2}+z y=y^{2}+x^{2} .
\end{aligned}
$$
