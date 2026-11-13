---
tag: Z8GWCZE85Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence is defined as follows:

$$
a_{n}=\frac{n}{10^{[\lg n]+1}}, (n=1,2,3, \ldots)
$$

$[x]$ denotes the greatest integer not exceeding $x$. Prove that for every real number $A$ such that $0.1 \leq A \leq 1$, there exists a subsequence of the sequence whose limit is exactly $A$.
