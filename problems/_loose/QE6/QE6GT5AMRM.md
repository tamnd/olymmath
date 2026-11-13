---
tag: QE6GT5AMRM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264523
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A magic $3 \times 5$ board can toggle its cells between black and white. Define a \textit{pattern} to be an assignment of black or white to each of the board's $15$ cells (so there are $2^{15}$ patterns total). Every day after Day 1, at the beginning of the day, the board gets bored with its black-white pattern and makes a new one. However, the board always wants to be unique and will die if any two of its patterns are less than $3$ cells different from each other. Furthermore, the board dies if it becomes all white. If the board begins with all cells black on Day $1$, compute the maximum number of days it can stay alive.
