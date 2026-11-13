---
tag: CR8QEBS2FF
kind: problem
type: answer
answer: 2^{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95777
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer,
$$
S_{n}=\left\{\left(a_{1}, a_{2}, \cdots, a_{2^{n}}\right) \mid a_{i}=0,1\right\} .
$$

For $a, b \in S_{n}$,
$$
a=\left(a_{1}, a_{2}, \cdots, a_{2^{n}}\right), b=\left(b_{1}, b_{2}, \cdots, b_{2^{n}}\right),
$$

define $d(a, b)=\sum_{i=1}^{2 n}\left|a_{i}-b_{i}\right|$.
If for any $a, b \in A, a \neq b$, we have $d(a, b) \geqslant 2^{n-1}$, then $A \subseteq S_{n}$ is called a "good subset".
Find the maximum value of $|A|$.
