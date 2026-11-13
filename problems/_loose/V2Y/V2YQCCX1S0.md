---
tag: V2YQCCX1S0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h590765
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66090
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257563
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
Determine the largest positive integer $n$ such that $1005!$ is divisible by $10^n$ . $\textbf{(A) }102 \textbf{(B) }112 \textbf{(C) }249 \textbf{(D) }502 \textbf{(E) }\text{none of these}$
