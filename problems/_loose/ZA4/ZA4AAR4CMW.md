---
tag: ZA4AAR4CMW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h250668
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65674
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257147
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
The number of real values of $ x$ satisfying the equality $ (\log_2x)(\log_bx) = \log_ab$ , where $ a > 0$ , $ b > 0$ , $ a \neq 1$ , $ b \neq 1$ , is:

$ \textbf{(A)}\ 0 \textbf{(B)}\ 1 \textbf{(C)}\ 2 \textbf{(D)}\ \text{a finite integer greater than 2} \textbf{(E)}\ \text{not finite}$
