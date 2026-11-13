---
tag: 4TNWYJJ67F
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161847
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an empty graph on $n>2$ vertices and a natural number $k<4$. Vasya and Petya play the following game: Vasya chooses 3 vertices and draws edges between them that do not yet exist. Then Petya erases any $k$ edges of the graph. Vasya makes the first move. Vasya wins if after Petya's turn the graph on $n$ vertices is connected. For which $k$ does Vasya win?
