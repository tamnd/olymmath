---
tag: TVSV2C9JTS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h548776
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65410
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198499
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
If $y=a+\frac{b}{x}$ , where $a$ and $b$ are constants, and if $y=1$ when $x=-1$ , and $y=5$ when $x=-5$ , then $a+b$ equals: $ \textbf{(A)}\ -1 \textbf{(B)}\ 0 \textbf{(C)}\ 1 \textbf{(D)}\ 10 \textbf{(E)}\ 11 $
