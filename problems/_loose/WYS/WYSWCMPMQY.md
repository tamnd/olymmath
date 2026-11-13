---
tag: WYSWCMPMQY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h455354
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66431
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257903
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
Find $ \sum_{k=0}^{49}(-1)^k\binom{99}{2k}$ , where $\binom{n}{j}=\frac{n!}{j!(n-j)!}$ . $ \textbf{(A)}\ -2^{50} \textbf{(B)}\ -2^{49} \textbf{(C)}\ 0 \textbf{(D)}\ 2^{49} \textbf{(E)}\ 2^{50} $
