---
tag: KG58HCKSFA
kind: problem
type: answer
answer: (a+b)^m + (b+c)^m + (c+a)^m \leq 2^m (a^m + b^m + c^m)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231117
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$a)$ Let $a$, $b$ and $c$ be positive real numbers. Prove that for all positive integers $m$ holds: $$(a+b)^m+(b+c)^m+(c+a)^m \leq 2^m(a^m+b^m+c^m)$$
$b)$ Does inequality $a)$ holds for
$1)$ arbitrary real numbers $a$, $b$ and $c$
$2)$ any integer $m$
