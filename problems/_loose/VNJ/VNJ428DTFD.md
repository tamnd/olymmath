---
tag: VNJ428DTFD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h133892
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=79301
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/1998
    source: hf-ai-mo-aops
    label: 1998 Vietnam National Olympiad
---
Does there exist an infinite sequence $\{x_{n}\}$ of reals satisfying the following conditions
i) $|x_{n}|\leq 0,666$ for all $n=1,2,...$
ii) $|x_{m}-x_{n}|\geq \frac{1}{n(n+1)}+\frac{1}{m(m+1)}$ for all $m\not = n$ ?
