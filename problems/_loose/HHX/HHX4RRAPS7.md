---
tag: HHX4RRAPS7
kind: problem
type: answer
answer: k = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232433
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $k$, so that there exists a polynomial $f(x)$ with rational coefficients, such that for all sufficiently large $n$, $$f(n)=\text{lcm}(n+1, n+2, \ldots, n+k).$$
