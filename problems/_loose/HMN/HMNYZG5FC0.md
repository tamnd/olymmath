---
tag: HMNYZG5FC0
kind: problem
type: answer
answer: f(x) = 1 \quad \forall x \geq 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223891
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ is the set of all positive integers. Determine all mappings $f: N-\{1\} \to N$ such that for every $n \ne m$ the following equation is true $$f(n)f(m)=f\left((nm)^{2021}\right)$$
