---
tag: B8NZSRZT84
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h255749
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65109
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198278
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
A circular piece of metal of maximum size is cut out of a square piece and then a square piece of maximum size is cut out of the circular piece. The total amount of metal wasted is:
$ \textbf{(A)}\ \frac{1}{4} \text{ the area of the original square}
\textbf{(B)}\ \frac{1}{2} \text{ the area of the original square}
\textbf{(C)}\ \frac{1}{2} \text{ the area of the circular piece}
\textbf{(D)}\ \frac{1}{4} \text{ the area of the circular piece}
\textbf{(E)}\ \text{none of these}$
