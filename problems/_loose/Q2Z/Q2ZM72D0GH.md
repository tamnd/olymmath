---
tag: Q2ZM72D0GH
kind: problem
type: answer
answer: A={21,22,23,28,29},B={23,24,28},C={25,26,27,28,29}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86810
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The elements of sets $A, B$, and $C$ are some natural numbers that are greater than 20 and less than 30.

Furthermore, it holds that:

$A \cap B=\{23,28\}$,

$A \cap C=\{28,29\}$,

$B \cap C=\{28\}$,

$A \cup B=\{21,22,23,24,28,29\}$,

$A \cup C=\{21,22,23,25,26,27,28,29\}$, and

$B \cup C=\{n \in \mathbb{N}: 23 \leq n<30\}$.

Determine the sets $A, B$, and $C$.
