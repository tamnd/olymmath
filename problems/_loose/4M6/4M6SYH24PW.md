---
tag: 4M6SYH24PW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1568540
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16418
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218078
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2018
    source: hf-ai-mo-aops
    label: 2018 China Team Selection Test
---
Given a positive integer $k$ , call $n$ *good* if among $$ \binom{n}{0},\binom{n}{1},\binom{n}{2},...,\binom{n}{n} $$ at least $0.99n$ of them are divisible by $k$ . Show that exists some positive integer $N$ such that among $1,2,...,N$ , there are at least $0.99N$ good numbers.
