---
tag: 96ZBEDYQ9F
kind: problem
type: answer
answer: "30"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242979
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We denote by gcd (...) the greatest common divisor of the numbers in (...). (For example, gcd$(4, 6, 8)=2$ and gcd $(12, 15)=3$.) Suppose that positive integers $a, b, c$ satisfy the following four conditions:
$\bullet$ gcd $(a, b, c)=1$,
$\bullet$ gcd $(a, b + c)>1$,
$\bullet$ gcd $(b, c + a)>1$,
$\bullet$ gcd $(c, a + b)>1$.
a) Is it possible that $a + b + c = 2015$?
b) Determine the minimum possible value that the sum $a+ b+ c$ can take.
