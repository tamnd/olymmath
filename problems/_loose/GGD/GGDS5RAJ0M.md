---
tag: GGDS5RAJ0M
kind: problem
type: answer
answer: "96"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85672
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $n$ is called divisibly prime if for every positive divisor $d$ of $n$, at least one of the numbers $d-1$ and $d+1$ is a prime number. For example, 8 is divisibly prime because its positive divisors 1, 2, 4, and 8 each differ by 1 from a prime number (namely 2, 3, 5, and 7, respectively), while 9 is not divisibly prime because its divisor 9 does not differ by 1 from a prime number (both 8 and 10 are composite).

(a) Which odd numbers can be a divisor of a divisibly prime number?

(b) Determine the largest divisibly prime number.
