---
tag: NMXMWJ4JDK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h2526365
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48225
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244118
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Moldova National Olympiad
---
Let $P(x)=x^n+a_1x^{n-1}+\ldots+a_n$ ( $n\ge2$ ) be a polynomial with integer coefficients having $n$ real roots $b_1,\ldots,b_n$ . Prove that for $x_0\ge\max\{b_1,\ldots,b_n\}$ , $$ P(x_0+1)\left(\frac1{x_0-b_1}+\ldots+\frac1{x_0-b_n}\right)\ge2n^2. $$
