---
tag: QZVVC1HE5C
kind: problem
type: answer
answer: "321"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73643
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To obtain the summary of a number with up to 9 digits, you should write how many digits it has, then how many of those digits are odd, and finally how many are even. For example, the number 9103405 has 7 digits, 4 of which are odd and 3 are even, so its summary is 743.

a) Find a number whose summary is 523.

b) Find a number that is equal to its own summary.

c) For any number with up to 9 digits, we can calculate the summary of the summary of its summary. Show that this procedure always leads to the same result, regardless of the initial number.
