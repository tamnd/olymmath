---
tag: STXCZCPNW6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Peru Cono Sur TST
    url: https://artofproblemsolving.com/community/c6h3154238
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50430
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246065
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-conosur-tst/2020
    source: hf-ai-mo-aops
    label: 2020 Peru Cono Sur TST
---
In a classroom there are $m$ students. During the month of July each of them visited the library at least once but none of them visited the library twice in the same day. It turned out that during the month of July each student visited the library a different number of times, furthermore for any two students $A$ and $B$ there was a day in which $A$ visited the library and $B$ did not and there was also a day when $B$ visited the library and $A$ did not do so.
Determine the largest possible value of $m$ .
