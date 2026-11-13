---
tag: TNFXR342QE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for any triple $x$, $y$, $z$ of positive numbers, the inequality

$$
\sqrt{x y z}\left(\frac{2}{x+y}+\frac{2}{y+z}+\frac{2}{z+x}\right) \leqq \sqrt{x}+\sqrt{y}+\sqrt{z} .
$$

holds. Determine when equality occurs.
