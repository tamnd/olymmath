---
tag: A4KCYXSXN0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231756
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $100$ books in a row, numbered from $1$ to $100$ in some order. An operation is choose three books and reorder in any order between them(the others $97$ books stay at the same place). Denote that a book is in *correct position* if the book $i$ is in the position $i$. Determine the least integer $m$ such that, for any initial configuration, we can realize $m$ operations and all the books will be in the correct position.
