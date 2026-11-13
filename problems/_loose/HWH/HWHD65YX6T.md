---
tag: HWHD65YX6T
kind: problem
type: answer
answer: "80"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73645
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A two-digit number $A$ is a supernumber if it is possible to find two numbers $B$ and $C$, both also two-digit numbers, such that:

- $A = B + C$;
- the sum of the digits of $A$ = (sum of the digits of $B$) + (sum of the digits of $C$).

For example, 35 is a supernumber. Two different ways to show this are $35 = 11 + 24$ and $35 = 21 + 14$, because $3 + 5 = (1 + 1) + (2 + 4)$ and $3 + 5 = (2 + 1) + (1 + 4)$. The only way to show that 21 is a supernumber is $21 = 10 + 11$.

a) Show in two different ways that 22 is a supernumber and in three different ways that 25 is a supernumber.

b) In how many different ways is it possible to show that 49 is a supernumber?

c) How many supernumbers exist?
