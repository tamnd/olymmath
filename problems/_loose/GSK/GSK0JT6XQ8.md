---
tag: GSK0JT6XQ8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219189
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2019
    source: hf-mathnet
    label: Romania 2019 ROMANIAN MATHEMATICAL OLYMPIAD
---
Let $n \in \mathbb{N}, n \ge 2$ and the positive real numbers $a_1,a_2,…,a_n$ and $b_1,b_2,…,b_n$ such that $a_1+a_2+…+a_n=b_1+b_2+…+b_n=S.$
$\textbf{a)}$ Prove that $\sum\limits_{k=1}^n \frac{a_k^2}{a_k+b_k} \ge \frac{S}{2}.$
$\textbf{b)}$ Prove that $\sum\limits_{k=1}^n \frac{a_k^2}{a_k+b_k}= \sum\limits_{k=1}^n \frac{b_k^2}{a_k+b_k}.$
