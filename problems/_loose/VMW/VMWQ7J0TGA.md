---
tag: VMWQ7J0TGA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Zhou HeiYa is jumping on a number line, starting at integer point $k (k>1)$. Its jumping follows these rules: if it lands on point $n$, then it will jump to point $f(n)+g(n)$ next, where $f(n)$ and $g(n)$ are the largest and smallest positive prime numbers that divide $n$, respectively. Find all $k$ such that Zhou HeiYa can reach infinitely many integer points.
