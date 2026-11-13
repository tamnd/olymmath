---
tag: FNYG7APG19
kind: problem
type: answer
answer: \lfloor\frac{n}{3}\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114341
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The twelfth question: A company has $n(n \geq 2)$ employees, and now everyone is required to vote for an outstanding employee, with each person casting exactly one vote to another employee. Try to find the maximum value of $\mathrm{k}$, such that no matter how the voting goes, it is always possible to select $\mathrm{k}$ people, none of whom have voted for any of the others among these $\mathrm{k}$ people.
