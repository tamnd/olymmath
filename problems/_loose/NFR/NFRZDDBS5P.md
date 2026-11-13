---
tag: NFRZDDBS5P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90265
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\ominus$ be an operation on the set of real numbers such that

$$
(x \ominus y)+(y \ominus z)+(z \ominus x)=0
$$

for all real $x, y$, and $z$. Prove that there is a function $f: \mathbb{R} \rightarrow \mathbb{R}$ such that

$$
x \ominus y=f(x)-f(y)
$$

for all real $x$ and $y$.
