---
tag: QPJDK7VCPB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h550573
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65622
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198682
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
Let $n$ be the number of pairs of values of $b$ and $c$ such that $3x+by+c=0$ and $cx-2y+12=0$ have the same graph. Then $n$ is: $ \textbf{(A)}\ 0 \textbf{(B)}\ 1 \textbf{(C)}\ 2 \textbf{(D)}\ \text{finite but more than 2} \textbf{(E)}\ \text{greater than any finite number} $
