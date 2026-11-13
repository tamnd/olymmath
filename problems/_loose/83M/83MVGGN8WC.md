---
tag: 83MVGGN8WC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269320
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every positive integer $n$ let $\sigma(n)$ denote the sum of all its positive divisors. A number $n$ is called weird if $\sigma(n)\ge2n$ and there exists no representation
$$n=d_1+d_2+\ldots+d_r,$$where $r>1$ and $d_1,\ldots,d_r$ are pairwise distinct positive divisors of $n$.
Prove that there are infinitely many weird numbers.
