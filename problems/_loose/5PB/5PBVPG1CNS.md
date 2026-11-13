---
tag: 5PBVPG1CNS
kind: problem
type: answer
answer: "1981"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182626
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking for all four-digit natural numbers $n$ with the following properties:

1. The square of the second digit is equal to the number $n_{1}$, which is obtained by removing the first two digits from $n$.
2. The sum of the digits $Q(n)$ is equal to the number $n_{2}$, which is obtained by removing the last two digits from $n$.
3. The sum of the numbers $n_{1}$ and $n_{2}$ is 100.
