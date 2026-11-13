---
tag: MCMRXNS3KX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h508660
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8385
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210449
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2012
    source: hf-ai-mo-aops
    label: 2012 NIMO Problems
---
Let $f(x) = x^2 - 2x$ . A set of real numbers $S$ is *valid* if it satisfies the following: $\bullet$ If $x \in S$ , then $f(x) \in S$ . $\bullet$ If $x \in S$ and $\underbrace{f(f(\dots f}_{k\ f\text{'s}}(x)\dots )) = x$ for some integer $k$ , then $f(x) = x$ .
Compute the number of 7-element valid sets.

*Proposed by Lewis Chen*
