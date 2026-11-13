---
tag: B4GPB2DB66
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{n}$ be a quasi-injective sequence of integers (i.e., there exists $C>0$ such that $a_{n}=k$ has fewer than $C$ solutions for all $k$). Show that if $a_{n}$ has only a finite number of prime divisors, then

$$
\sum_{n} \frac{1}{a_{n}}<\infty
$$
