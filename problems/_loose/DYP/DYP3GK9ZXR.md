---
tag: DYP3GK9ZXR
kind: problem
type: answer
answer: "13"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254062
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many integer triples $(x,y,z)$ are there such that $$\begin{array}{rcl} x - yz^2&\equiv & 1 \pmod {13} \\ xz+y&\equiv& 4 \pmod {13} \end{array}$$ where $0\leq x < 13$, $0\leq y <13$, and $0\leq z< 13$?

$
\textbf{(A)}\ 10
\textbf{(B)}\ 23
\textbf{(C)}\ 36
\textbf{(D)}\ 49
\textbf{(E)}\ \text{None of above}
$
