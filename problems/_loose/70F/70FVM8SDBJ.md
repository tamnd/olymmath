---
tag: 70FVM8SDBJ
kind: problem
type: answer
answer: \prod_{3\leqp\leqp_{0}}p
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139218
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p_{0}>2$ be a given prime number, and the sequence $a_{0}, a_{1}, a_{2}, \cdots$ satisfies $a_{0}=0$, $a_{1}=1$, and
$$
a_{n+1}=2 a_{n}+(a-1) a_{n-1}, n=1,2, \cdots
$$

where the natural number $a$ is a parameter. Find the smallest value of $a$ that satisfies the following two conditions.
(i) If $p$ is a prime and $p \leqslant p_{0}$, then $p \mid a_{p}$;
(ii) If $p$ is a prime and $p>p_{0}$, then $p \times a_{p}$.
