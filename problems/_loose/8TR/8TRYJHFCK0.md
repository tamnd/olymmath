---
tag: 8TRYJHFCK0
kind: problem
type: answer
answer: "1114"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120602
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $x$ with $n$ digits, if appending it to the end of any two positive integers results in the product of the two new numbers still ending in $x$, then $x$ is called a "lucky number". For example: 6 is a "lucky number"; but 16 is not, because $116 \times 216=25056$, and the end is no longer 16. The sum of all "lucky numbers" with no more than 3 digits is $ $ .
