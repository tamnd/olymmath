---
tag: 236R5AEKBW
kind: problem
type: answer
answer: "2022"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f:\mathbb{N} \rightarrow \mathbb{N}$ verifies:
$1) f(n+2)-2022 \cdot f(n+1)+2021 \cdot f(n)=0, \forall n \in \mathbb{N};$
$2) f(20^{22})=f(22^{20});$
$3) f(2021)=2022$.
Find all possible values of $f(2022)$.
