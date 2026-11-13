---
tag: 6K79NBS8PC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 AMC 10
    url: https://artofproblemsolving.com/community/c6h527886
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64247
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=255875
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2002 AMC 10
---
Let $(a_n)_{n\geq 1}$ be a sequence such that $a_1=1$ and $3a_{n+1}-3a_n=1$ for all $n\geq 1$ . Find $a_{2002}$ . $\textbf{(A) }666 \textbf{(B) }667 \textbf{(C) }668 \textbf{(D) }669 \textbf{(E) }670$
