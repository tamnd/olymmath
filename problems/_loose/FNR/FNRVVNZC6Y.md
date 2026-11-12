---
tag: FNRVVNZC6Y
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54785
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 40 identical gas cylinders, the pressure values of which are unknown to us and may be different. It is allowed to connect any cylinders to each other in a quantity not exceeding a given natural number $k$, and then disconnect them; in this case, the gas pressure in the connected cylinders is set equal to the arithmetic mean of the pressures in them before connection. For what smallest $k$ does there exist a way to equalize the pressures in all 40 cylinders regardless of the initial distribution of pressures in the cylinders?
