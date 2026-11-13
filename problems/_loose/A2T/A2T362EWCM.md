---
tag: A2T362EWCM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2051949
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59363
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2003
    source: hf-ai-mo-aops
    label: 2003 Singapore Senior Math Olympiad
---
For each positive integer $k$ , we define the polynomial $S_k(x)=1+x+x^2+x^3+...+x^{k-1}$ Show that $n \choose 1$ $S_1(x) +$ $n \choose 2$ $S_2(x) +$ $n \choose 3$ $S_3(x)+...+$ $n \choose n$ $S_n(x) = 2^{n-1}S_n\left(\frac{1+x}{2}\right)$ for every positive integer $n$ and every real number $x$ .
