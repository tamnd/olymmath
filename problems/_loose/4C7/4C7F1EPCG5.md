---
tag: 4C7F1EPCG5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206463
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For nonzero real numbers $ r,\ l$ and the positive constant number $ c$, consider the curve on the $ xy$ plane : $ y = \left\{ \begin{array}{ll} x^2 & (0\leq x\leq r) \\
r^2 & (r\leq x\leq l + r) \\
(x - l - 2r)^2 & (l + r\leq x\leq l + 2r) \end{array} \right.$

Denote $ V$ the volume of the solid by revolvering the curve about the $ x$ axis. Let $ r,\ l$ vary in such a way that $ r^2 + l = c$. Find the values of $ r,\ l$ which gives the maxmimum volume.
