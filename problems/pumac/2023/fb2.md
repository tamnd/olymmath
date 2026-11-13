---
tag: 5C7YGWXEB2
kind: problem
appearances:
  - at: pumac/2023/fb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Indiv_Finals_B_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3234686
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73415
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a polynomial with degree at most $n-1$ . Show that $$ \sum_{k=0}^n\left(\begin{array}{l}
n
k
\end{array}\right)(-1)^k f(k)=0 $$
