---
tag: BFZH5BH4ZG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h587509
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65919
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257392
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
The sum of the first $n$ terms of the sequence $$1,~(1+2),~(1+2+2^2),~\dots ~(1+2+2^2+\dots +2^{n-1})$$ in terms of $n$ is $\textbf{(A) }2^n \textbf{(B) }2^n-n \textbf{(C) }2^{n+1}-n \textbf{(D) }2^{n+1}-n-2 \textbf{(E) }n\cdot 2^n$
