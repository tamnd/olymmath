---
tag: 15N9C1EWZN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h435354
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66350
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199350
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
If $\lfloor x\rfloor$ is the greatest integer less than or equal to $x$ , then $$ \sum_{N=1}^{1024} \lfloor \log_{2}N\rfloor = $$ $ \textbf{(A)}\ 8192 \textbf{(B)}\ 8204 \textbf{(C)}\ 9218 \textbf{(D)}\ \lfloor \log_{2}(1024!)\rfloor \textbf{(E)}\ \text{none of these} $
