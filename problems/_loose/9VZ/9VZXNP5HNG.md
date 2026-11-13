---
tag: 9VZXNP5HNG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168695
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Egy$ be the family of $n$-digit integers $A$ in the decimal system, which are derived from $A$ in the following way. For every natural number $k < n$, express $A$ in the form

$$
A=10^{k} B+C
$$

where $C<10^{k}$ and $B, C$ are integers, and the new number is

$$
A_{k}=10^{n-k} C+B
$$

Determine all natural numbers that have the property that if a six-digit number is divisible by them, then every member of its family is also divisible by them.
