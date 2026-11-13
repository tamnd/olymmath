---
tag: S2WD8TE41S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210593
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $\lim_{n\to \infty} a_n=a$ and $\lim_{n\to \infty} b_n=b$. Prove that

$\lim_{n\to \infty}\frac{1}{n}(a_1b_n+a_2b_{n-1}+...+a_nb_1)=ab$.
