---
tag: 57RMKJS7S4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h503343
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65620
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198680
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
Let $f(x)=x^2+3x+2$ and let $S$ be the set of integers $\{0, 1, 2, \dots , 25 \}$ . The number of members $s$ of $S$ such that $f(s)$ has remainder zero when divided by 6 is: ${{ \textbf{(A)}\ 25 \textbf{(B)}\ 22 \textbf{(C)}\ 21 \textbf{(D)}\ 18 } \textbf{(E)}\ 17 } $
