---
tag: BQBNCNT61Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h68764
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66714
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=258185
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
What is the value of the expression
$$ \frac {1}{\log_2 100!} + \frac {1}{\log_3 100!} + \frac {1}{\log_4 100!} + \cdots + \frac {1}{\log_{100} 100!}?
$$ $ \textbf{(A)}\ 0.01 \textbf{(B)}\ 0.1 \textbf{(C)}\ 1 \textbf{(D)}\ 2 \textbf{(E)}\ 10$
