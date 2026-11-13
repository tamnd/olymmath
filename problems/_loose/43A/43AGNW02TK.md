---
tag: 43AGNW02TK
kind: problem
type: answer
answer: f(n) = 3n − 3 for all n ∈ ℕ*
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=357
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th NMO
---
Determine all functions $f: \mathbb{N}^* \to \mathbb{N}$ that satisfy the following properties:
a) the expression $n^3 - n f(n) - 1$ is a cube of a natural number for all $n \in \mathbb{N}^*$;
b) the function $g: \mathbb{N}^* \to \mathbb{N}$ defined by $g(n) = 4n - f(n)$ is increasing.
