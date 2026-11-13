---
tag: CHKJK1579K
kind: problem
type: answer
answer: f(n) = n for all n ∈ ℕ
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Romanian Mathematical Olympiad
---
Find all functions $f : \mathbb{N} \to \mathbb{N}$ such that
$$
3f(f(f(n))) + 2f(f(n)) + f(n) = 6n, \text{ for all } n \in \mathbb{N}.
$$
Vasile Pop
