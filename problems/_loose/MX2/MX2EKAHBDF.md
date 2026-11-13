---
tag: MX2EKAHBDF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85658
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider positive integers written down in the (usual) decimal system. Within such an integer, we number the positions of the digits from left to right, so the leftmost digit (which is never a 0 ) is at position 1.

An integer is called even-steven if each digit at an even position (if there is one) is greater than or equal to its neighbouring digits (if these exist).

An integer is called oddball if each digit at an odd position is greater than or equal to its neighbouring digits (if these exist).

For example, 3122 is oddball but not even-steven, 7 is both even-steven and oddball, and 123 is neither even-steven nor oddball.

(a) Prove: every even-steven integer greater than 9 can be obtained by adding two oddball integers.

(b) Prove: there exists an oddball integer greater than 9 that cannot be obtained by adding two even-steven integers.
