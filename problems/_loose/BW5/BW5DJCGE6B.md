---
tag: BW5DJCGE6B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253682
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a fixed odd positive integer. For each odd prime $p$, define
$$a_p=\frac{1}{p-1}\sum_{k=1}^{\frac{p-1}{2}}\bigg\{\frac{k^{2n}}{p}\bigg\}.$$
Prove that there is a real number $c$ such that $a_p = c$ for infinitely many primes $p$.

*Note: $\left\{x\right\} = x - \left\lfloor x\right\rfloor$ is the fractional part of $x$.*
