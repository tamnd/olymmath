---
tag: FRR7Q1F53S
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a $1$-indexed array that initially contains the integers $1$ to $10$ in increasing order.

The following action is performed repeatedly (any number of times):
[code]
def action():
Choose an integer n between 1 and 10 inclusive
Reverse the array between indices 1 and n inclusive
Reverse the array between indices n+1 and 10 inclusive (If n = 10, we do nothing)
[/code]
How many possible orders can the array have after we are done with this process?
