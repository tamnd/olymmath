---
tag: RW3YF8Z4KZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169878
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if $n$ is a sufficiently large positive integer, then there exists a polynomial $p$ such that

$$
|p(0)|>\frac{1}{10}\left(\binom{n}{1}|p(1)|+\binom{n}{2}|p(2)|+\cdots+\binom{n}{n}|p(n)|\right)
$$

and its degree is at most $n-\frac{1}{10} \sqrt{n}$.
