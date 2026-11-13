---
tag: JB7TW4FR1K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=222102
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each cell of the board with $2021$ rows and $2022$ columns contains exactly one of the three letters $T$, $M$, and $O$ in a way that satisfies each of the following conditions:

- In total, each letter appears exactly $2021\times 674$ of times on the board.

- There are no two squares that share a common side and contain the same letter.

- Any $2\times 2$ square contains all three letters $T$, $M$, and $O$.

Prove that each letter $T$, $M$, and $O$ appears exactly $674$ times on every row.
