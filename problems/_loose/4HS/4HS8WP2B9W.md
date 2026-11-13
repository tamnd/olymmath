---
tag: 4HS8WP2B9W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h257150
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65204
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256677
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
How many hours does it take a train traveling at an average rate of $ 40$ mph between stops to travel $ a$ miles it makes $ n$ stops of $ m$ minutes each?

$ \textbf{(A)}\ \frac{3a+2mn}{120} \textbf{(B)}\ 3a+2mn \textbf{(C)}\ \frac{3a+2mn}{12} \textbf{(D)}\ \frac{a+mn}{40} \textbf{(E)}\ \frac{a+40mn}{40}$
