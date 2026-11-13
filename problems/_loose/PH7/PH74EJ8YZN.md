---
tag: PH74EJ8YZN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 SMO
    url: https://artofproblemsolving.com/community/c6h2251630
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19440
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220981
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2020
    source: hf-ai-mo-aops
    label: 2020 SMO
---
Let $p > 2$ be a fixed prime number. Find all functions $f: \mathbb Z \to \mathbb Z_p$ , where the $\mathbb Z_p$ denotes the set $\{0, 1, \ldots , p-1\}$ , such that $p$ divides $f(f(n))- f(n+1) + 1$ and $f(n+p) = f(n)$ for all integers $n$ .

*Proposed by Grant Yu*
