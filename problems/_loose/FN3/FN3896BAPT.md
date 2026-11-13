---
tag: FN3896BAPT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 AMC 10
    url: https://artofproblemsolving.com/community/c6h75361
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64466
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256077
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2006 AMC 10
---
Let $ a_1, a_2, ...$ be a sequence for which $$a_1 = 2\,\hspace{.2in}a_2 = 3 \hspace{.2in}\text{and}\hspace{.2in}a_n = \frac {a_{n - 1}}{a_{n - 2}} \text{ for each positive integer } n \ge 3.$$What is $ a_{2006}$ ? $\textbf{(A) } \frac 12 \textbf{(B) } \frac 23 \textbf{(C) } \frac 32 \textbf{(D) } 2 \textbf{(E) } 3$
