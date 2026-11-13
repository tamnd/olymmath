---
tag: A30AB2YJV1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99571
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a continuous function $f: \mathbf{R} \rightarrow(0,+\infty)$ satisfying $\lim _{x \rightarrow-\infty} f(x)=\lim _{x \rightarrow+\infty} f(x)=0$.
Prove: (1) $f(x)$ has a maximum value on $\mathbf{R}$;
(2) There exist two real sequences $\left\{x_{n}\right\} 、\left\{y_{n}\right\}$, such that for all positive integers $n$, we have $x_{n}<y_{n}, f\left(x_{n}\right)=$ $f\left(y_{n}\right)$, and $\left\{x_{n}\right\} 、\left\{y_{n}\right\}$ converge to the same limit.
