---
tag: KF1ADW3S9Q
kind: problem
type: answer
answer: "1700"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109116
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{n}, \cdots$ be a sequence of non-decreasing positive integers. For $m \geqslant 1$, define $b_{m}=\min \left\{n ; a_{n} \geqslant m\right\}$, i.e., $b_{m}$ is the smallest value of $n$ such that $a_{n} \geqslant 3$. Given that $a_{19}=85$, find the maximum value of
$$
a_{1}+a_{2}+\cdots+a_{19}+b_{1}+b_{2}+\cdots+b_{85}
$$
(1985 USA Olympiad Problem)
