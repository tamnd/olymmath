---
tag: FT7EFZJWCP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Kazakhstan National Olympiad
    url: https://artofproblemsolving.com/community/c6h365261
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5171
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kz-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Kazakhstan National Olympiad
---
It is given that for some $n \in \mathbb{N}$ there exists a natural number $a$ , such that $a^{n-1} \equiv 1 \pmod{n}$ and that for any prime divisor $p$ of $n-1$ we have $a^{\frac{n-1}{p}} \not \equiv 1 \pmod{n}$ .
Prove that $n$ is a prime.
