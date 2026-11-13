---
tag: 8ZXNSXFPSA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h2726885
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34384
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/1999
    source: hf-ai-mo-aops
    label: 1999 Chile National Olympiad
---
Pedrito's lucky number is $34117$ . His friend Ramanujan points out that $34117 = 166^2 + 81^2 = 159^2 + 94^2$ and $166-159 = 7$ , $94- 81 = 13$ . Since his lucky number is large, Pedrito decides to find a smaller one, but that satisfies the same properties, that is, write in two different ways as the sum of squares of positive integers, and the difference of the first integers that occur in that sum is $7$ and in the difference between the seconds it gives $13$ . Which is the least lucky number that Pedrito can find? Find a way to generate all the positive integers with the properties mentioned above.
