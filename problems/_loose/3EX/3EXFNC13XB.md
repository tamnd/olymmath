---
tag: 3EXFNC13XB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 AMC 10
    url: https://artofproblemsolving.com/community/c6h330928
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4584
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206732
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2010 AMC 10
---
For positive numbers $ x$ and $ y$ the operation $ \spadesuit(x,y)$ is defined as
$$ \spadesuit(x,y)=x-\frac1y$$What is $ \spadesuit(2,\spadesuit(2,2))$ ?

$ \textbf{(A)}\ \frac23 \textbf{(B)}\ 1 \textbf{(C)}\ \frac43 \textbf{(D)}\ \frac53 \textbf{(E)}\ 2$
