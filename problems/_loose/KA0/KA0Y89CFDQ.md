---
tag: KA0Y89CFDQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269079
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(s_n)_{n\geq 1}$ be a sequence given by $s_n=-2\sqrt{n}+\sum \limits_{k=1}^n\frac{1}{\sqrt{k}}$ with $\lim \limits_{n \to \infty}s_n=s=$Ioachimescu constant and $(a_n)_{n\geq 1}$ , $(b_n)_{n\geq 1}$ be a positive real sequences such that $$\lim \limits_{n\to \infty}\frac{a_{n+1}}{na_n}=a\in \mathbb{R}^*_+, \lim \limits_{n\to \infty}\frac{b_{n+1}}{b_n\sqrt{n}}=b\in \mathbb{R}^*_+$$Compute$$\lim \limits_{n\to \infty}\left(1+e^{s_n}-e^{s_{n+1}}\right)^{\sqrt[n]{a_nb_n}}$$
