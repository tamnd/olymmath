---
tag: AK5C511ASS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188316
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Macedonian Mathematical Olympiad
---
Let $x, y, z$ be positive real numbers such that $x^{4}+y^{4}+z^{4}=3$. Prove that

$$
\frac{9}{x^{2}+y^{4}+z^{6}}+\frac{9}{x^{4}+y^{6}+z^{2}}+\frac{9}{x^{6}+y^{2}+z^{4}} \leq x^{6}+y^{6}+z^{6}+6
$$

When does equality hold?
