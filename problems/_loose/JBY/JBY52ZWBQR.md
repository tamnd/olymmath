---
tag: JBY52ZWBQR
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268488
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $2022$ numbers arranged in a circle $a_1, a_2, . . ,a_{2022}$. It turned out that for any three consecutive $a_i$, $a_{i+1}$, $a_{i+2}$ the equality $a_i =\sqrt2 a_{i+2} - \sqrt3 a_{i+1}$. Prove that $\sum^{2022}_{i=1} a_ia_{i+2} = 0$, if we know that $a_{2023} = a_1$, $a_{2024} = a_2$.
