---
tag: 1ES7X28NVX
kind: problem
type: answer
answer: (1,4,1978)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182533
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking for all triples of natural numbers $(a ; b ; c)$ with the following properties:

1. None of the numbers $a ; b ; c$ is a prime number.
2. The sum $a+b+c$ lies between 1900 and 2000: $1900 \leq a+b+c \leq 2000$
3. The product $a b c$ lies between 7600 and 8000: $7600 \leq a b c \leq 8000$
4. The sum of all digits appearing in the numbers $a ; b ; c$ is 30, where no digit appears more than once in any of the numbers (which does not mean that a digit cannot appear more than once in different numbers).
5. It is $a \leq b \leq c$.
