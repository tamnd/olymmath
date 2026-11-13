---
tag: 7R00QACXRV
kind: problem
type: answer
answer: \ln 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210894
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be positive integer. Define a sequence $\{a_k\}$ by
$$a_1=\frac{1}{n(n+1)},\ a_{k+1}=-\frac{1}{k+n+1}+\frac{n}{k}\sum_{i=1}^k a_i\ \ (k=1,\ 2,\ 3,\ \cdots).$$

(1) Find $a_2$ and $a_3$.

(2) Find the general term $a_k$.

(3) Let $b_n=\sum_{k=1}^n \sqrt{a_k}$. Prove that $\lim_{n\to\infty} b_n=\ln 2$.
