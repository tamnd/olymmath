---
tag: X090KQXTY3
kind: problem
type: answer
answer: \text{None}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Some positive integer $n$ is written on the board. Andrey and Petya is playing the following game. Andrey finds all the different representations of the number n as a product of powers of prime numbers (values degrees greater than 1), in which each factor is greater than all previous or equal to the previous one. Petya finds all different representations of the number $n$ as a product of integers greater than $1$, in which each factor is divisible by all the previous factors. The one who finds more performances wins, if everyone finds the same number of representations, the game ends in a draw. Find all positive integers $n$ for which the game will end in a draw.

Note.
The representation of the number $n$ as a product is also considered a representation consisting of a single factor $n$.
