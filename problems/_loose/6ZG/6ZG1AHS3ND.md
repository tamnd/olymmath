---
tag: 6ZG1AHS3ND
kind: problem
type: answer
answer: f(,b)=\binom{+b}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f: \mathbb{N} \times \mathbb{N} \rightarrow \mathbb{N}$ that satisfy the following two conditions.

- For all $a, b \in \mathbb{N}$, we have

$$
f(a, b) + a + b = f(a, 1) + f(1, b) + ab \text{.}
$$

- If $a, b \in \mathbb{N}$ are such that one of the numbers $a+b$ and $a+b-1$ is divisible by a prime number $p > 2$, then $f(a, b)$ is also divisible by $p$.
