---
tag: ME61T1ZGME
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190072
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c, d \in \mathbb{R}$ and let $f: \mathbb{R} \rightarrow \mathbb{R}$ be a function defined by

$$
f(x)=1+a \cos x+b \sin x+c \cos 2 x+d \sin 2 x
$$

Prove that if for every $x \in \mathbb{R}$, $f(x)>0$, then for every $x \in \mathbb{R}$, $f(x)<3$.