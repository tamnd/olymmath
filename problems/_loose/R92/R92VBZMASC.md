---
tag: R92VBZMASC
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128838
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a three-digit number 111, each operation involves changing two of its digits to the unit digit of the sum of these two digits. For example: $111 \rightarrow 122 \rightarrow 144 \rightarrow 554 \rightarrow 004$ (leading zeros are allowed). If the goal is to transform 111 into 777, what is the minimum number of operations required $ $?
