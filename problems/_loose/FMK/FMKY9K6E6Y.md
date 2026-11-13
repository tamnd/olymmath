---
tag: FMKY9K6E6Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h555564
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10000
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211996
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
Let $f(n)=\varphi(n^3)^{-1}$ , where $\varphi(n)$ denotes the number of positive integers not greater than $n$ that are relatively prime to $n$ . Suppose
$$ \frac{f(1)+f(3)+f(5)+\dots}{f(2)+f(4)+f(6)+\dots} = \frac{m}{n} $$
where $m$ and $n$ are relatively prime positive integers. Compute $100m+n$ .

*Proposed by Lewis Chen*
