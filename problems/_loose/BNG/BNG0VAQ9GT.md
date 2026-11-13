---
tag: BNG0VAQ9GT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h56222
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66275
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257747
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
If the sequence $\{a_n\}$ is defined by \begin{align*}a_1 &= 2, a_{n+1} &= a_n + 2n (n\geq 1),\end{align*} then $a_{100}$ equals $\textbf{(A) }9900 \textbf{(B) }9902 \textbf{(C) }9904 \textbf{(D) }10100 \textbf{(E) }10102$
