---
tag: FWA0W17YCM
kind: problem
type: answer
answer: "40"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265490
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1 = 1$ and $a_{n+1} = a_n \cdot p_n$ for $n \geq 1$ where $p_n$ is the $n$th prime number, starting with $p_1 = 2$. Let $\tau(x)$ be equal to the number of divisors of $x$. Find the remainder when
$$\sum_{n=1}^{2020} \sum_{d \mid a_n} \tau (d)$$
is divided by 91 for positive integers $d$. Recall that $d|a_n$ denotes that $d$ divides $a_n$.

*Proposed by Minseok Eli Park (wolfpack)*
