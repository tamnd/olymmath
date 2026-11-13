---
tag: VZBBMTFTAT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206003
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Decide whether the integers $1,2,\ldots,100$ can be arranged in the cells $C(i, j)$ of a $10\times10$ matrix (where $1\le i,j\le 10$), such that the following conditions are fullfiled:
i) In every row, the entries add up to the same sum $S$.
ii) In every column, the entries also add up to this sum $S$.
iii) For every $k = 1, 2, \ldots, 10$ the ten entries $C(i, j)$ with $i-j\equiv k\bmod{10}$ add up to $S$.
*(Proposed by Gerhard Woeginger, Austria)*
