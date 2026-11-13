---
tag: MXH20MWSJA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113510
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a round-robin tournament with $n$ players, assuming there are no ties, the number of wins for each player is $S_{1}, S_{2}, S_{3}, \cdots, S_{n}$. Prove: There exist three players $A, B, C$, such that $A$ beats $B$, $B$ beats $C$, and $C$ beats $A$ if and only if $S_{1}^{2} + S_{2}^{2} + \cdots + S_{n}^{2} < (n-1)n(2n-1) / 6$.
