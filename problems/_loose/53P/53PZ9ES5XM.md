---
tag: 53PZ9ES5XM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205193
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n \geq 1$ notebooks, numbered from $1$ to $n$, stacked in a pile. Zahar repeats the following operation: he randomly chooses a notebook whose number $k$ does not correspond to its location in this stack, counting from top to bottom, and returns it to the $k$th position, counting from the top, without changing the location of the other notebooks. If there is no such notebook, he stops.

Is it guaranteed that Zahar will arrange all the notebooks in ascending order of numbers in a finite number of operations?

*Proposed by Zahar Naumets*
