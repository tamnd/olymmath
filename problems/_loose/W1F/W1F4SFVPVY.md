---
tag: W1F4SFVPVY
kind: problem
type: answer
answer: x_{2}=2,x_{3}=4,x_{4}=8,\ldots,x_{99}=2^{98},x_{100}=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=68571
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Choose 100 numbers satisfying the conditions $x_{1}=1,0 \leq x_{1} \leq 2 x_{1}, 0 \leq x_{3} \leq 2 x_{2}, \ldots, 0 \leq x_{99} \leq 2 x_{98}, 0 \leq x_{100} \leq 2 x$ $x_{1}-x_{2}+x_{3}-x_{4}+\ldots+x_{99}-x_{100}$ to be maximized.
