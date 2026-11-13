---
tag: TZW3PQZ6RP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 AMC 10
    url: https://artofproblemsolving.com/community/c6h131312
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64319
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=200803
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2004 AMC 10
---
For any three real numbers $ a$ , $ b$ , and $ c$ , with $ b\neq c$ , the operation $ \otimes$ is defined by:
$$ \otimes(a,b,c) = \frac {a}{b - c}
$$What is $ \otimes(\otimes(1,2,3), \otimes(2,3,1),\otimes(3,1,2))$ ?

$ \textbf{(A)}\ -\!\frac {1}{2} \textbf{(B)}\ -\!\frac {1}{4} \textbf{(C)}\ 0 \textbf{(D)}\ \frac {1}{4} \textbf{(E)}\ \frac {1}{2}$
