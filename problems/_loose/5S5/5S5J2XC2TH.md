---
tag: 5S5J2XC2TH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85686
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider positive integers that we write in the (usual) decimal system. In such a number, we number the positions of the digits from left to right, so the most left digit (which can never be 0) is in position 1.

A number is called even-balanced if each digit in an even position (if any) is at least as large as its immediate neighboring digits (if any).

A number is called odd-balanced if each digit in an odd position is at least as large as its immediate neighboring digits (if any).

For illustration: 3122 is odd-balanced but not even-balanced, 7 is both even-balanced and odd-balanced, and 123 is neither.

(a) Show: every odd-balanced number greater than 9 can be obtained by adding two odd-balanced numbers.

(b) Show: there exists an odd-balanced number greater than 9 that cannot be obtained by adding two even-balanced numbers.
