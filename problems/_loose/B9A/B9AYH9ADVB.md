---
tag: B9AYH9ADVB
kind: problem
type: answer
answer: )ifnisodd,then2n-2,b)ifnisevenn\geq8,then2n-4,)forn=2,4,8respectively2,5,9
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9939
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each cell of a square board of size $n$ by $n$ is colored blue or red. A row or column is called bluish if it contains more blue cells than red ones. Conversely, a row or column is called reddish if it contains more red cells than blue ones. What is the maximum value that the sum of the number of reddish rows and the number of bluish columns can take for some coloring of the board depending on $n$?
