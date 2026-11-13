---
tag: TZAG5642TS
kind: problem
type: answer
answer: 2^{2n-1}\timesC_{2n-1}^{n}+(2^{2n-1}-1)\timesC_{2n-2}^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118020
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ is a fixed positive integer, find the sum of all positive integers that have the following property: in binary, this number has exactly $2 n$ digits, of which $n$ are 1s and $n$ are 0s (the leading digit cannot be $0$).
