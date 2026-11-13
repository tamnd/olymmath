---
tag: PB0K8V8R8J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268643
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Create $2024$ by $2024$ grid of integers numbered from $1$ to $2024^2$ such that the integer in row $n$ and column $k$ is $2024(n-1)+k$. Let the sum of the numbers in the grid be $S$. Arthur picks 2024 numbers such that their sum is $\dfrac{S}{2024}$. Prove that in every case, using the remaining numbers, Bob can create 2023 sets of 2024 numbers with equal numbers. For clarification, All numbers can only be used once
