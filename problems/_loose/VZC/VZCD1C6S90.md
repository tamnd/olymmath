---
tag: VZCD1C6S90
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265638
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Say that a positive integer $n$ is *smooth* if $\frac{1}{n}$ has a terminating decimal expansion. (Note that 1 is smooth.) Compute the value of the infinite series
$$
\sum_n \frac{1}{n^3} ,
$$
where $n$ ranges over all smooth positive integers.
