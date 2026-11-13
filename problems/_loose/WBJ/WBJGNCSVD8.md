---
tag: WBJGNCSVD8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h455377
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66368
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199365
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
Let $c$ be a constant. The simultaneous equations
\begin{align*}
x-y = &\ 2
cx+y = &\ 3
\end{align*}
have a solution $(x, y)$ inside Quadrant I if and only if $ \textbf{(A)}\ c=-1 \textbf{(B)}\ c>-1 \textbf{(C)}\ c<\frac{3}{2} \textbf{(D)}\ 0<c<\frac{3}{2} \textbf{(E)}\ -1<c<\frac{3}{2} $
