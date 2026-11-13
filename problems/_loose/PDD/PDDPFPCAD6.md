---
tag: PDDPFPCAD6
kind: problem
type: answer
answer: 3 \cdot 2^{2^k-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208411
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each natural number $a$ we denote $\tau (a)$ and $\phi (a)$ the number of natural numbers dividing $a$ and the number of natural numbers less than $a$ that are relatively prime to $a$. Find all natural numbers $n$ for which $n$ has exactly two different prime divisors and $n$ satisfies $\tau (\phi (n))=\phi (\tau (n))$.
