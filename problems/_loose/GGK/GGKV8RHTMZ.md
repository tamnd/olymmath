---
tag: GGKV8RHTMZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3562633
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2323
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2025
    source: hf-ai-mo-aops
    label: 2025 239 Open Mathematical Olympiad
---
Given a $2025 \times 2025$ board and $k$ chips lying on the table. Initially, the board is empty. It is allowed to place a chip from the table on any free square $A$ if two conditions are met simultaneously:
- the cell next to $A$ from below has a chip (or $A$ is on the bottom edge of the board);
- the cell next to $A$ on the left has a chip (or $A$ is on the left edge of the board).
In addition, it is allowed to remove any chip from the board and put it on the table. At what minimum $k$ can a chip appear in the upper-right corner of the board?
