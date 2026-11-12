---
tag: KYYPBA1SDK
kind: problem
type: answer
answer: a_{n}=n+C
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37074
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$1<a_{1}<a_{2}<\ldots<a_{n}<\ldots$ - a sequence of natural numbers such that $a_{n+a_{n}}=2 a_{n}$ for any natural $n$. Prove that there exists a natural number $c$ such that $a_{n}=n+c$ for any $n$.
