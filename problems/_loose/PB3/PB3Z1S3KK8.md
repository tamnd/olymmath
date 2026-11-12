---
tag: PB3Z1S3KK8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24710
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Prove that the consecutive terms of the sequence of ratios corresponding to an arbitrary Fibonacci sequence are related by the formula

$$
t_{n}=1+\frac{1}{t_{n-1}}
$$

Using this formula, prove that the sequence $t_{1}, t_{2}, \ldots, t_{n}, \ldots$ is periodic and that no number repeats twice within a period.

b) Derive from part a) that, for any prime number $p$, the Fibonacci sequence

$$
0,1,1,2,3,5,8,13,21,34,55,89,144, \ldots
$$

contains infinitely many numbers divisible by $p$, and all these numbers are located at equal intervals from each other.
