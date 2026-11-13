---
tag: GNRTRF3AVR
kind: problem
type: answer
answer: (\1,\1),(0,\1),(\2,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130367
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integer pairs $(a, b)$ such that there exists an integer-coefficient polynomial $p(x)$, satisfying: the product $\left(x^{2}+a x+b\right) p(x)$ has the form: $x^{n}+c_{n-1} x^{n-1}+\cdots+c_{0}$, where each $c_{i}$ is either 1 or -1.
