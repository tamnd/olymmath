---
tag: MZREAEJCSK
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135507
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[x]$ denote the greatest integer not exceeding the real number $x$. Given a sequence of positive integers $\left\{a_{n}\right\}$ satisfying $a_{1}=a$, and for any positive integer $n$,
$$
a_{n+1}=a_{n}+2\left[\sqrt{a_{n}}\right] \text {. }
$$
(1) If $a=8$, find the smallest positive integer $n$ such that $a_{n}$ is a perfect square;
(2) If $a=2017$, find the smallest positive integer $n$ such that $a_{n}$ is a perfect square.
