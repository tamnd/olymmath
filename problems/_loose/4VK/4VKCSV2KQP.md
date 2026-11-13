---
tag: 4VKCSV2KQP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90103
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0003.parquet#row=126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ and $b$ be nonzero real numbers. Prove that at least one of the following inequalities is true:

$$
\begin{aligned}
& \left|\frac{a+\sqrt{a^{2}+2 b^{2}}}{2 b}\right|<1 \\
& \left|\frac{a-\sqrt{a^{2}+2 b^{2}}}{2 b}\right|<1
\end{aligned}
$$
