---
tag: 4AGYVFMJEJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252851
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are a total of $n$ boys and girls sitting in a big circle. Now, Dave wants to walk around the circle. For a start point, if at any time, one of the following two conditions holds:

1. he doesn't see any girl
2. the number of boys he saw $\ge$ the number of girls he saw $+k$
Then we say this point is *good*. What is the maximum of $r$ with the property that there is at least one good point whenever the number of girls is $r$?
