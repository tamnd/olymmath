---
tag: 37A5AAMB7T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134924
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a natural number $n$, a sequence $a_{1}, a_{2}, \cdots, a_{k}(k \geqslant n)$ is called universal if any permutation of $1,2, \cdots, n$ can be obtained by removing some terms from $a_{1}, a_{2}, \cdots, a_{k}$.
(1) Construct an example of a universal sequence with $n^{2}$ terms.
(2) Construct an example of a universal sequence with $n^{2}-n+1$ terms.
(3) Prove that the number of terms in any universal sequence is at least $\frac{n(n+1)}{2}$.
(4) When $n=4$, prove that the shortest universal sequence has 12 terms.
(5) For a given $n$, try to find the shortest universal sequence (the competition committee can construct a universal sequence with $n^{2}-2 n+4$ terms).
