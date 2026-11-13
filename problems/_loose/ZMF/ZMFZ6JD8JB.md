---
tag: ZMFZ6JD8JB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1424719
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15835
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217531
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2017
    source: hf-ai-mo-aops
    label: 2017 NIMO Problems
---
Let $N$ be the number of integer sequences $a_1, a_2, \dots, a_{2^{16}-1}$ satisfying $$0 \le a_{2k + 1} \le a_k \le a_{2k + 2} \le 1$$ for all $1 \le k \le 2^{15}-1$ . Find the number of positive integer divisors of $N$ .

*Proposed by Ankan Bhattacharya*
