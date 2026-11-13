---
tag: N311JD7SET
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2021562
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36181
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234729
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/1996
    source: hf-ai-mo-aops
    label: 1996 National High School Mathematics League
---
The sum of first $n$ items of squence $(a_n)$ : $S_n$ satisfies that $S_n=2a_n-1$ , squence $(b_n)$ satisfies that $b_{k+1}=a_k+b_k$ for all $k=1,2,\cdots$ . Find the sum of first $n$ items of $(b_n)$ .
