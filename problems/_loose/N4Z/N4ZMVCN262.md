---
tag: N4ZMVCN262
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266545
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a function $f: \mathbb{Z} \rightarrow \mathbb{Z}$. We call an integer $a$ *spanning* if for all integers $b \neq a$, there exists a positive integer $k$ with $f^k(a)=b$. Find, with proof, the maximum possible number of *spanning* numbers of $f$.

Note: $\mathbb{Z}$ represents the set of all integers, so $f$ is a function from the set of integers to itself. $f^k(a)$ is defined as $f$ applied $k$ times to $a$.
