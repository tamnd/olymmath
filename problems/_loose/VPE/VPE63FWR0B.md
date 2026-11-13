---
tag: VPE63FWR0B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183624
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Karl is looking for three non-zero natural numbers $a, b, c$, for which the following holds:

$(a, b)=4$ (read: The gcd of the numbers $a$ and $b$ is 4),

$(a, c)=6$,

$(b, c)=14$.

After some trial and error, he claims that there are even multiple ways to specify three such numbers.

Is this claim correct?

Is there a way to choose three such numbers $a, b, c$ such that, compared to all other possibilities, $a$ is the smallest and at the same time $b$ is the smallest and at the same time $c$ is the smallest? If so, then give the numbers $a, b, c$ for this case!
