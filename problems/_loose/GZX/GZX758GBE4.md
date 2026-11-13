---
tag: GZX758GBE4
kind: problem
type: answer
answer: "1604"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98722
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Take any non-zero natural number. If it is even, divide it by 2; if it is odd, multiply it by 3 and add 1. Under such a transformation, we get a new natural number. If we repeatedly apply this transformation, we get a question: will all natural numbers eventually transform to 1? This is the famous "Collatz Conjecture" in mathematics. If a natural number can transform to 1 through the above transformation, the number of transformations it takes to first reach 1 is called its path length. What is the sum of all natural numbers with a path length of 10 in the "Collatz Conjecture"?
