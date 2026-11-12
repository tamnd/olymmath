---
tag: XKSSV75C2E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h455397
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66386
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
Consider the sequence of numbers defined recursively by $t_1=1$ and for $n>1$ by $t_n=1+t_{(n/2)}$ when $n$ is even and by $t_n=\frac{1}{t_{(n-1)}}$ when $n$ is odd. Given that $t_n=\frac{19}{87}$ , the sum of the digits of $n$ is $ \textbf{(A)}\ 15 \textbf{(B)}\ 17 \textbf{(C)}\ 19 \textbf{(D)}\ 21 \textbf{(E)}\ 23$
