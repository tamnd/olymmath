---
tag: 9TQQFTFBCN
kind: problem
type: answer
answer: "903618"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76901
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking for a six-digit numerical code, about which we know that:

- no digit in it is repeated,
- it contains 0, which is not in the second-to-last position,
- in its notation, there are never two odd or two even digits next to each other,
- adjacent single-digit numbers differ by at least 3,
- the numbers obtained by reading the first and second pairs are both multiples of the number formed by reading the third, i.e., the last pair.

Determine the sought code.

(M. Volfová)
