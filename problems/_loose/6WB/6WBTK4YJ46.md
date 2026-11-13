---
tag: 6WBTK4YJ46
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Malaysia National Olympiad
    url: https://artofproblemsolving.com/community/c6h409788
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5241
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147911
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: my-omk/2010
    source: hf-ai-mo-aops
    label: 2010 Malaysia National Olympiad
---
For any number $x$ , let $\lfloor x\rfloor$ denotes the greatest integer less than or equal to $x$ . A sequence $a_1,a_2,\cdots$ is given, where $$a_n=\left\lfloor{\sqrt{2n}+\dfrac{1}{2}}\right\rfloor.$$
How many values of $k$ are there such that $a_k=2010$ ?
