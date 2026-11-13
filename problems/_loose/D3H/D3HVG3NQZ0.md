---
tag: D3HVG3NQZ0
kind: problem
type: answer
answer: m + M = n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253668
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $k$ be positive integers. Chef Kao cuts a circular pizza through $k$ diameters, dividing the pizza into $2k$ equal pieces. Then, he dresses the pizza with $n$ toppings. For each topping, he chooses $k$ consecutive pieces of pizza and puts that topping on all of the chosen pieces. Then, for each piece of pizza, Chef Kao counts the number of distinct toppings on it, yielding $2k$ numbers. Among these numbers, let $m$ and $M$ being the minimum and maximum, respectively. Prove that $m + M = n$.
