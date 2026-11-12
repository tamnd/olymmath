---
tag: RBKM19EBEV
kind: problem
type: answer
answer: "16"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $3 \times 3$ table is initially filled with zeros. In one move, any $2 \times 2$ square in the table is selected, and all zeros in it are replaced with crosses, and all crosses with zeros. We will call any arrangement of crosses and zeros in the table a "pattern." How many different patterns can be obtained as a result of such moves? Patterns that can be obtained from each other by rotating $90^{\circ}$ or $180^{\circ}$ are considered different.
