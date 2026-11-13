---
tag: 5QVYQAJR68
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a positive integer. A ring $(A,+,\cdot)$ has property $P_k$ if for any $a,b\in A$ there exists $c\in A$ such that $a^k=b^k+c^k.$

- Give an example of a finite ring $(A,+,\cdot)$ which *does not* have $P_k$ for every $k\geqslant 2.$

- Let $n\geqslant 3$ be an integer and $M_n=\{m\in\mathbb{N}:(\mathbb{Z}_n,+,\cdot)\text{ has }P_m\}.$ Prove that all the elements of $M_n$ are odd integers and that $(M_n,\cdot)$ is a monoid.
