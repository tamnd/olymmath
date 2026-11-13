---
tag: WM452GAVQM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h590718
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28713
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2004 Tournament Of Towns
---
Bucket $A$ contains 3 litres of syrup. Bucket $B$ contains $n$ litres of water. Bucket $C$ is empty.
We can perform any combination of the following operations:
- Pour away the entire amount in bucket $X$ ,
- Pour the entire amount in bucket $X$ into bucket $Y$ ,
- Pour from bucket $X$ into bucket $Y$ until buckets $Y$ and $Z$ contain the same amount.**(a)** How can we obtain 10 litres of 30% syrup if $n = 20$ ?**(b)** Determine all possible values of $n$ for which the task in (a) is possible.
