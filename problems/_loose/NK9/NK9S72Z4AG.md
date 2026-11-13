---
tag: NK9S72Z4AG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112851
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $\mathrm{n}$, if a $0-1$ sequence has $\mathrm{n}$ zeros and $\mathrm{n}$ ones, then this sequence is called "balanced"; for two balanced sequences $\mathrm{a}$ and $\mathrm{b}$, if one number in $\mathrm{a}$ can be moved to another position to obtain $\mathrm{b}$, then $\mathrm{a}$ and $\mathrm{b}$ are called "adjacent". For example, when $\mathrm{n}=4$, the balanced sequences $\mathrm{a}=01101001$ and $\mathrm{b}=00110101$ are adjacent, because moving the 3rd (or 4th) zero in $\mathrm{a}$ to the first position results in $\mathrm{b}$. Prove: there exists a set $S$ containing at most $\frac{C_{2 n}^{n}}{n+1}$ balanced sequences, such that every balanced sequence is either equal to one of the sequences in $S$, or is adjacent to at least one sequence in $\mathrm{S}$.
