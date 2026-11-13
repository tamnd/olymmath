---
tag: A105CRRJQ4
kind: problem
type: answer
answer: f(n) = n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238747
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{N} \mapsto \mathbb{N}$ so that for any positive integer $n$ and finite sequence of positive integers $a_0, \dots, a_n$, whenever the polynomial $a_0+a_1x+\dots+a_nx^n$ has at least one integer root, so does $$f(a_0)+f(a_1)x+\dots+f(a_n)x^n.$$

*Proposed by Sutanay Bhattacharya*
