---
tag: 162ZQW1RJB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a chess-board $99\times 99$ with a set $F$ of fields marked on it (the set is different in three tasks). There is a beetle sitting on every field of the set $F$. Suddenly all the beetles have raised into the air and flied to another fields of the same set. The beetles from the neighbouring fields have landed either on the same field or on the neighbouring ones (may be far from their starting point). (We consider the fields to be neighbouring if they have at least one common vertex.) Consider a statement:
*"There is a beetle, that either stayed on the same field or moved to the neighbouring one".*
Is it always valid if the figure $F$ is:
a) A central cross, i.e. the union of the $50$-th row and the $50$-th column?
b) A window frame, i.e. the union of the $1$-st, $50$-th and $99$-th rows and the $1$-st, $50$-th and $99$-th columns?
c) All the chess-board?
