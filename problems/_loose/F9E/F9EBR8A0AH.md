---
tag: F9EBR8A0AH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88021
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each cell of a table $m \times n (m, n \in \mathbb{N})$, a letter $A$ or $B$ is written. No two adjacent cells (with a common side) contain the same letter. In one step, two adjacent cells are chosen, and the letters in these cells are replaced by new letters according to the following rule:

- the letter $A$ is replaced by the letter $B$,
- the letter $B$ is replaced by the letter $C$,
- the letter $C$ is replaced by the letter $A$.

For which $m$ and $n$ can we achieve, after a finite number of steps, that in all cells where the letter $A$ was initially written, the letter $B$ is now written, and in all cells where the letter $B$ was initially written, the letter $A$ is now written?
