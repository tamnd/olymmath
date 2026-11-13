---
tag: M844TJQMA5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h590004
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66051
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257524
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
A polynomial $p(x)$ has remainder three when divided by $x-1$ and remainder five when divided by $x-3$ . The remainder when $p(x)$ is divided by $(x-1)(x-3)$ is $\textbf{(A) }x-2 \textbf{(B) }x+2 \textbf{(C) }2 \textbf{(D) }8 \textbf{(E) }15$
