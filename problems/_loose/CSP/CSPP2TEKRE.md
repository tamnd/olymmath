---
tag: CSPP2TEKRE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h35304
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7990
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210047
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2012
    source: hf-ai-mo-aops
    label: 2012 India IMO Training Camp
---
In a $2\times n$ array we have positive reals s.t. the sum of the numbers in each of the $n$ columns is $1$ . Show that we can select a number in each column s.t. the sum of the selected numbers in each row is at most $\frac{n+1}4$ .
