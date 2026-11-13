---
tag: YPZVD27VXK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h548865
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65442
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198511
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
For the infinite series $1-\frac12-\frac14+\frac18-\frac{1}{16}-\frac{1}{32}+\frac{1}{64}-\frac{1}{128}-\cdots$ let $S$ be the (limiting) sum. Then $S$ equals: $ \textbf{(A)}\ 0 \textbf{(B)}\ \frac27 \textbf{(C)}\ \frac67 \textbf{(D)}\ \frac{9}{32} \textbf{(E)}\ \frac{27}{32} $
