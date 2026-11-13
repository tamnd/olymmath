---
tag: 779BC6WBGB
kind: problem
type: answer
answer: \frac{1}{2014!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left\{a_{n}\right\}$ be a sequence with the sum of the first $n$ terms denoted as $S_{n}$, and for any positive integer $n, S_{n}+a_{n}=1$. Let $S_{n}^{(1)}=S_{n}$, $S_{n}^{(k)}=S_{1}^{(k-1)}+S_{2}^{(k-1)}+\cdots+S_{n}^{(k-1)}(k \geqslant 2)$. Then $\lim _{n \rightarrow \infty} \frac{S_{n}^{(2015)}}{n^{2014}}=$ $ $ .
