---
tag: EVH5P1MTCR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239345
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $f(n)$ is defined on the set of positive integers is said to be multiplicative if $f(mn)=f(m)f(n)$ whenever $m$ and $n$ have no common factors greater than $1$. Are the following functions multiplicative? Justify your answer.

(a) $g(n)=5^k$ where $k$ is the number of distinct primes which divide $n$.

(b) $h(n)=\begin{cases} 0 & \text{if} \ n \ \text{is divisible by} \ k^2 \ \text{for some integer} \ k>1 \\ 1 & \text{otherwise} \end{cases}$
