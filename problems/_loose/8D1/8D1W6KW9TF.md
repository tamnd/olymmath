---
tag: 8D1W6KW9TF
kind: problem
type: answer
answer: a_{n}=2^{p-1}(\frac{3}{2})^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107625
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}$ have the sum of the first $n$ terms as $S_{n}, a_{1} \neq 0, 2 S_{n+1}-3 S_{n}=2 a_{1}\left(n \in \mathbf{Z}_{+}\right)$.
(1) Prove: The sequence $\left\{a_{n}\right\}$ is a geometric sequence;
(2) If $a_{1} 、 a_{p}(p \geqslant 3)$ are both positive integers, and there exists a positive integer $m$, such that $a_{1} \geqslant m^{p-1}, a_{p} \leqslant(m+1)^{p-1}$, find $a_{n}$.
