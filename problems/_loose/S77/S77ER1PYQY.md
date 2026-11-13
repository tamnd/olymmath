---
tag: S77ER1PYQY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h528398
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66816
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=201842
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
Let $a$ and $b$ be real numbers greater than $1$ for which there exists a positive real number $c$ , different from $1$ , such that $$2(\log_ac+\log_bc)=9\log_{ab}c.$$ Find the largest possible value of $\log_ab$ . $\textbf{(A) }\sqrt2 \textbf{(B) }\sqrt3 \textbf{(C) }2 \textbf{(D) }\sqrt6 \textbf{(E) }3$
