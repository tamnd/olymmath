---
tag: HQWR1XDCRZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77663
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $b_{1}, \ldots, b_{n}$ be non-negative real numbers such that $b_{1}+b_{2}+\ldots+b_{n}=2$. Let $a_{0}, a_{1}, \ldots, a_{n}$ be real numbers such that $a_{0}=a_{n}=0$. Suppose that for all $i$ between 1 and $n$ inclusive,

$$
\left|a_{i}-a_{i-1}\right| \leqslant b_{i}
$$

Show that we have

$$
\left(a_{0}+a_{1}\right) b_{1}+\left(a_{1}+a_{2}\right) b_{2}+\ldots+\left(a_{n-1}+a_{n}\right) b_{n} \leqslant 2
$$
