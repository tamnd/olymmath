---
tag: ZAAME365SC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ - a natural number from the condition of the problem. From the condition, it follows that the number of fours in $N$ is $2m$, and the number of fives is $2m+17$. Using the property of equal remainders of division by 9: the remainder of the division by 9 of a natural number is equal to the remainder of the division by 9 of the sum of its digits. We get

$$
N(\bmod 9)=4 \cdot 2 m+5(2 m+17)(\bmod 9)=5 \cdot 17(\bmod 9)=4
$$
