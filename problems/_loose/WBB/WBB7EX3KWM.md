---
tag: WBB7EX3KWM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=137146
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let positive integers $\mathrm{m}, \mathrm{n} \geq 3$, in an $\mathrm{m} \times \mathrm{n}$ grid, there are $\mathrm{k}$ pieces (at most one piece per cell). Now perform the following operation: if a $3 \times 2$ or $2 \times 3$ subgrid contains five pieces, then place one more piece in the remaining cell. After several operations, if the pieces can fill the entire grid, find the minimum value of $\mathrm{k}$ that satisfies the condition.
