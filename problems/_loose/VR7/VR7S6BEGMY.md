---
tag: VR7S6BEGMY
kind: problem
type: answer
answer: "24"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220605
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let there be $A=1^{a_1}2^{a_2}\dots100^{a_100}$ and $B=1^{b_1}2^{b_2}\dots100^{b_100}$ , where $a_i , b_i \in N$ , $a_i + b_i = 101 - i$ , ($i= 1,2,\dots,100$). Find the last 1124 digits of $P = A * B$.
