---
tag: FG0Z656CWH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37599
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35698
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149102
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1995
    source: hf-ai-mo-aops
    label: 1995 China Team Selection Test
---
$ A$ and $ B$ play the following game with a polynomial of degree at least 4:
$$ x^{2n} + \_x^{2n - 1} + \_x^{2n - 2} + \ldots + \_x + 1 = 0
$$
$ A$ and $ B$ take turns to fill in one of the blanks with a real number until all the blanks are filled up. If the resulting polynomial has no real roots, $ A$ wins. Otherwise, $ B$ wins. If $ A$ begins, which player has a winning strategy?
