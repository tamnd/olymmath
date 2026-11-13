---
tag: 6SVC8ZRSZ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h263096
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66324
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257796
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
A non-zero digit is chosen in such a way that the probability of choosing digit $ d$ is $ \log_{10}(d+1) - \log_{10} d$ . The probability that the digit $ 2$ is chosen is exactly $ \frac12$ the probability that the digit chosen is in the set

$ \textbf{(A)}\ \{2,3\} \textbf{(B)}\ \{3,4\} \textbf{(C)}\ \{4,5,6,7,8\} \textbf{(D)}\ \{5,6,7,8,9\} \textbf{(E)}\ \{4,5,6,7,8,9\}$
