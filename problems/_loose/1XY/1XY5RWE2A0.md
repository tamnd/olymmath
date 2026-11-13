---
tag: 1XY5RWE2A0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h255755
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65114
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198284
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
If $ y=x+\frac{1}{x}$ , then $ x^4+x^3-4x^2+x+1=0$ becomes:
$ \textbf{(A)}\ x^2(y^2+y-2)=0 \textbf{(B)}\ x^2(y^2+y-3)=0
\textbf{(C)}\ x^2(y^2+y-4)=0 \textbf{(D)}\ x^2(y^2+y-6)=0
\textbf{(E)}\ \text{none of these}$
