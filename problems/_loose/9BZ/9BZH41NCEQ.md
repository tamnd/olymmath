---
tag: 9BZH41NCEQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91828
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $p_{1}(x)=x^{2}-2$.
$$
p_{i}(x)=p_{1}\left[p_{i-1}(x)\right], i=2,3,4, \cdots
$$

Prove that for any natural number $n$, the solutions of the equation $p_{n}(x)=x$ are distinct real numbers.
