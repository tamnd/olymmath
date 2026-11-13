---
tag: JSPXD0YT8Q
kind: problem
type: answer
answer: t = 1 + \frac{r}{s}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $r$, $s$ be real numbers, find maximum $t$ so that if $a_1, a_2, \ldots$ is a sequence of positive real numbers satisfying
$$ a_1^r + a_2^r + \cdots + a_n^r \le 2023 \cdot n^t $$
for all $n \ge 2023$ then the sum
$$ b_n = \frac 1{a_1^s} + \cdots + \frac 1{a_n^s} $$
is unbounded, i.e for all positive reals $M$ there is an $n$ such that $b_n > M$.
