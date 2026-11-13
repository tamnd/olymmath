---
tag: ZP22HKZYGH
kind: problem
type: answer
answer: 3, 5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
We call a prime number $p$ cute if there exists a prime $q$ so that both $pq - 2$ and $pq + 2$ are also primes. We call $p$ wonderful if both $p$ and $p+2$ are cute primes. Find all wonderful numbers.
