---
tag: RF4VRX80SC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h366453
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4764
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206930
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2010
    source: hf-ai-mo-aops
    label: 2010 China Team Selection Test
---
For integers $n>1$ , define $f(n)$ to be the sum of all postive divisors of $n$ that are less than $n$ . Prove that for any positive integer $k$ , there exists a positive integer $n>1$ such that $n<f(n)<f^2(n)<\cdots<f^k(n)$ , where $f^i(n)=f(f^{i-1}(n))$ for $i>1$ and $f^1(n)=f(n)$ .
