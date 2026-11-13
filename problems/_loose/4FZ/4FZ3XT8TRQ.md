---
tag: 4FZ3XT8TRQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230566
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $x$, $y$, $z$ are positive real numbers satiafying $x+y+z=2$, prove the inequality
$$
\frac{(x-1)^2}{y}+\frac{(y-1)^2}{z}+\frac{(z-1)^2}{x}\geqslant\frac14\left(\frac{x^2+y^2}{x+y}+\frac{y^2+z^2}{y+z}+\frac{z^2+x^2}{z+x} \right).
$$
