---
tag: 3RC8KKMB4C
kind: problem
type: answer
answer: 2n+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13956
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an alphabet of $n>1$ letters; a word is any finite sequence of letters in which any two adjacent letters are different. A word is called good if it is impossible to erase all letters from it, except for four, so that the remaining sequence is of the form $a a b b$, where $a$ and $b$ are different letters. Find the largest possible number of letters in a good word.

(D. Khramtsov)
