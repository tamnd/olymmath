---
tag: 7QN91JC2FV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1339730
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14571
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Let $P_1(x),P_2(x),\ldots,P_n(x)$ be monic, non-constant polynomials with integer coefficients and let $Q(x)$ be a polynomial with integer coefficients such that $$x^{2^{2016}}+x+1=P_1(x)P_2(x)\ldots P_n(x)+2Q(x).$$ Suppose that the maximum possible value of $2016n$ can be written in the form $2^{b_1}+2^{b_2}+\cdots+2^{b_k}$ for nonnegative integers $b_1<$ $b_2<$ $\cdots<$ $b_k$ . Find the value of $b_1+b_2+\cdots+b_k$ .

*Proposed by Michael Ren*
