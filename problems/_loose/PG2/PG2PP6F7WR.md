---
tag: PG2PP6F7WR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h577888
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11571
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213528
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
Let $S$ be the set of integers which are both a multiple of $70$ and a factor of $630{,}000$ . A random element $c$ of $S$ is selected. If the probability that there exists an integer $d$ with $\gcd (c,d) = 70$ and $\operatorname{lcm} (c,d) = 630{,}000$ is $\frac mn$ for some relatively prime integers $m$ and $n$ , compute $100m+n$ .

*Proposed by Eugene Chen*
