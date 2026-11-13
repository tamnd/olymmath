---
tag: HCT9YTDCZQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89770
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
Let $a_{1}, a_{2}, \ldots, a_{n}$ be positive real numbers such that $a_{1}+a_{2}+\cdots+a_{n}=1$.

Prove the inequality:

$$
\frac{a_{1}^{3}}{a_{1}^{2}+a_{2} a_{3}}+\frac{a_{2}^{3}}{a_{2}^{2}+a_{3} a_{4}}+\cdots+\frac{a_{n-1}^{3}}{a_{n-1}^{2}+a_{n} a_{1}}+\frac{a_{n}^{3}}{a_{n}^{2}+a_{1} a_{2}} \geqslant \frac{1}{2}
$$
