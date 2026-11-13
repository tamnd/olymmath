---
tag: THXRSQ8MEX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1950 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h229338
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=41404
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238057
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/1950
    source: hf-ai-mo-aops
    label: 1950 Miklós Schweitzer
---
Put
$ M=\begin{pmatrix}p&q&r
r&p&qq&r&p\end{pmatrix}$
where $ p,q,r>0$ and $ p+q+r=1$ . Prove that
$ \lim_{n\rightarrow \infty}M^n=\begin{bmatrix}\frac13&\frac13&\frac13
\frac13&\frac13&\frac13\frac13&\frac13&\frac13\end{bmatrix}$
