---
tag: JXM2AZD2Z5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125967
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the circumference of Figure 9, there are $n$ boxes evenly distributed. Now we have $n$ non-zero real numbers $a_{1}, a_{2}, \cdots, a_{n}$, satisfying the equation: $a_{1}+a_{2}+\cdots+a_{n}=0$. We need to fill these numbers into the $n$ boxes on the circumference. Prove that there are at least $(n-1)!$ ways to fill the boxes such that starting from a certain box $A$ and moving in the counterclockwise direction, the cumulative sum of the numbers in the boxes at each step is non-negative.
