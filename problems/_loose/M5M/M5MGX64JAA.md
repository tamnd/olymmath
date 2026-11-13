---
tag: M5MGX64JAA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The seventy-fifth question: Given $N$ points numbered $1, 2, \ldots, N$ ($N \geq 3$), each pair of points is connected by a directed segment, with the direction always from the point with the smaller number to the point with the larger number. Each directed segment is colored either red or blue. A coloring method is called a "single web" if there do not exist two points $A$ and $B$ such that one can reach from $A$ to $B$ by following only red directed segments or only blue directed segments. Try to find the number of single web coloring methods.
