---
tag: 6HRSFEHCMN
kind: problem
type: answer
answer: S_{n}=\frac{1}{4}n^{2}-(\frac{1}{3})^{n}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95570
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
10 Given the sequence $\left\{a_{n}\right\}$ satisfies: $a_{1}=\frac{1}{4}, a_{2}=\frac{3}{4}, a_{n+1}=2 a_{n}-a_{n-1}(n \geqslant$
2), the sequence $\left\{b_{n}\right\}$ satisfies: $b_{1} \neq \frac{1}{4}, 3 b_{n}-b_{n-1}=n(n \geqslant 2)$, and the sum of the first $n$ terms of the sequence $\left\{b_{n}\right\}$ is $S_{n}$.
(1) Prove: The sequence $\left\{b_{n}-a_{n}\right\}$ is a geometric sequence;
(2) If $b_{1}=\frac{11}{12}$, find the sum of the first $n$ terms of the sequence $\left\{b_{n}\right\}$, $S_{n}$.
