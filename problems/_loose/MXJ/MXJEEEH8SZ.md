---
tag: MXJEEEH8SZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h516634
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10056
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212052
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Let $\phi(n)$ denote the number of positive integers less than or equal to $n$ that are relatively prime to $n$ , and let $d(n)$ denote the number of positive integer divisors of $n$ . For example, $\phi(6) = 2$ and $d(6) = 4$ . Find the sum of all odd integers $n \le 5000$ such that $n \mid \phi(n) d(n)$ .

*Alex Zhu*
