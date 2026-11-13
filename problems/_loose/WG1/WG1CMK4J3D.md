---
tag: WG1CMK4J3D
kind: problem
type: answer
answer: \mathrm{C}_{2n+1}^{n+1}\cdot2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99631
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geqslant 2$, if the integer sequence $x_{0}, x_{1}, \ldots, x_{n}$ satisfies:
(1) For any $0 \leqslant i \leqslant n$, we have $\left|x_{i}\right| \leqslant n$;
(2) For any $0 \leqslant i<j \leqslant n$, we have $x_{i} \neq x_{j}$;
(3) For any $0 \leqslant i<j<k \leqslant n$, we have
$$
\max \left\{\left|x_{k}-x_{i}\right|,\left|x_{k}-x_{j}\right|\right\}=\frac{1}{2}\left(\left|x_{i}-x_{j}\right|+\left|x_{j}-x_{k}\right|+\left|x_{k}-x_{i}\right|\right),
$$

then the sequence is called a "good sequence". Find the number of good sequences.
