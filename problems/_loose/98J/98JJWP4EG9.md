---
tag: 98JJWP4EG9
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78528
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Nine cells of a $10 \times 10$ diagram are infected. At each step, a cell becomes infected if it was already infected or if it had at least two infected neighbors (among the 4 adjacent cells).

(a) Can the infection spread everywhere?

(b) How many initially infected cells are needed to spread the infection everywhere?
