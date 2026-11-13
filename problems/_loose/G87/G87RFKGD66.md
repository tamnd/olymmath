---
tag: G87RFKGD66
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h257265
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65239
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198392
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
Given a geometric sequence with the first term $ \neq 0$ and $ r \neq 0$ and an arithmetic sequence with the first term $ =0$ . A third sequence $ 1,1,2\ldots$ is formed by adding corresponding terms of the two given sequences. The sum of the first ten terms of the third sequence is:

$ \textbf{(A)}\ 978 \textbf{(B)}\ 557 \textbf{(C)}\ 467 \textbf{(D)}\ 1068
\textbf{(E)}\ \text{not possible to determine from the information given}$
