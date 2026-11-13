---
tag: P3XX3JC1VG
kind: problem
type: answer
answer: a_{n}=3^{n-1}-2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107061
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies $a_{1} 、 a_{2}+1 、 a_{3}$ forming an arithmetic sequence, and for any positive integer $n$, we have
$$
S_{n}=\frac{1}{2} a_{n+1}-2^{n}+\frac{3}{2},
$$

where $S_{n}$ is the sum of the first $n$ terms of the sequence $\left\{a_{n}\right\}$. Find
(1) the values of $a_{1} 、 a_{2} 、 a_{3}$;
(2) the general term formula of the sequence $\left\{a_{n}\right\}$.
