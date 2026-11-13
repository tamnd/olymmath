---
tag: QN28QZ5CFE
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214635
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A *quadratic* number is a real root of the equations $ax^2 + bx + c = 0$ where $|a|,|b|,|c|\in\{1,2,\ldots,10\}$. Find the smallest positive integer $n$ for which at least one of the intervals$$\left(n-\dfrac{1}{3}, n\right) \text{and} \left(n, n+\dfrac{1}{3}\right)$$does not contain any quadratic number.
