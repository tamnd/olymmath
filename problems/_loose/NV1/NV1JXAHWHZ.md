---
tag: NV1JXAHWHZ
kind: problem
type: answer
answer: \frac{(n-1)\cdot2^{n}+1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144822
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(This sub-question is worth 15 points) Let $a_{n}=2^{n}, n \in \mathbf{N}^{+}$, and the sequence $\left\{b_{n}\right\}$ satisfies $b_{1} a_{n}+b_{2} a_{n-1}+\cdots+b_{n} a_{1}=2^{n}-\frac{n}{2}-1$. Find the sum of the first $n$ terms of the sequence $\left\{a_{n} \cdot b_{n}\right\}$.
