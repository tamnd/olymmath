---
tag: T2NC95GEJ7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h255785
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65132
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198301
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
If $ f(a)=a-2$ and $ F(a,b)=b^2+a$ , then $ F(3,f(4))$ is:
$ \textbf{(A)}\ a^2-4a+7 \textbf{(B)}\ 28 \textbf{(C)}\ 7 \textbf{(D)}\ 8 \textbf{(E)}\ 11$
