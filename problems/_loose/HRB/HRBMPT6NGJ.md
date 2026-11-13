---
tag: HRBMPT6NGJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88363
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematical competitions in Croatia
---
Let $z_{1}$ and $z_{2}$ be complex numbers such that $\left|z_{1}\right|=\left|z_{2}\right|=1$ and let $a$ and $b$ be real numbers for which $a+b=1$. Prove that

$$
\left|a z_{1}+b z_{2}\right| \geqslant \frac{1}{2}\left|z_{1}+z_{2}\right|
$$
