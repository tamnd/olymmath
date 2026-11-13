---
tag: FVGC3TP5DE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265643
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A *permutation* of a finite set $S$ is a one-to-one function from $S$ to $S$. Given a permutation $f$ of the set $\{ 1,
2, \ldots, 100 \}$, define the *displacement* of $f$ to be the sum
$$
\sum_{i = 1}^{100} \left\lvert f(i) - i \right\rvert .
$$
How many permutations of $\{ 1, 2, \ldots, 100 \}$ have displacement 4?
