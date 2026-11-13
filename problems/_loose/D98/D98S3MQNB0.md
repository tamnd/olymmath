---
tag: D98S3MQNB0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221932
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabian Mathematical Competitions
---
In the popular game of Minesweeper, some fields of an $a \times b$ board are marked with a mine and on all the remaining fields the number of adjacent fields that contain a mine is recorded. Two fields are considered adjacent if they share a common vertex. For which $k \in \{0, 1, 2, 3, 4, 5, 6, 7, 8\}$ is it possible for some $a$ and $b$ , $ab > 2021$, to create a board whose fields are covered in mines, except for $2021$ fields who are all marked with $k$?
