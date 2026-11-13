---
tag: 67D9CMJNZ5
kind: problem
type: answer
answer: "249"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184522
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Under $n$! (read as $n$-factorial) one understands the product of all natural numbers from 1 to $n$; that is,

$$
n!=1 \cdot 2 \cdot 3 \cdot \ldots \cdot(n-3) \cdot(n-2) \cdot(n-1) \cdot n
$$

Determine for $n=1000$ the number of zeros at the end of the number $n$! (trailing zeros).
