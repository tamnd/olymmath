---
tag: JCKP5Q2AG2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=21
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Start with some positive integer. The following operation is performed on the number: its unit digit is split off and multiplied by $4$, then this product is added to the remaining number. (For example, $1997$ is changed to $7 \times 4 + 199 = 227$.) The operation is performed again and again. Prove that if the sequence of numbers obtained contains $1001$, then none of the numbers in the sequence can be a prime number.
