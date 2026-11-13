---
tag: AFJW71MZ21
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For positive integers $n \ge 3$ and $r \ge 1$, define $P(n, r) = (n - 2)\frac{r^2}{2} - (n - 4) \frac{r}{2}$.
We call a triple $(a, b, c)$ of natural numbers, with $a \le b \le c$, an $n$-gonal Pythagorean triple if $P(n, a)+P(n, b) = P(n, c)$. (For $n = 4$, we get the usual Pythagorean triple.)
(a) Find an $n$-gonal Pythagorean triple for each $n \ge 3$.
(b) Consider all triangles $ABC$ whose sides are $n$-gonal Pythagorean triples for some $n \ge 3$. Find the maximum and the minimum possible values of angle $C$.
