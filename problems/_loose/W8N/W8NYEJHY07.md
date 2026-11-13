---
tag: W8NYEJHY07
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h386599
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54007
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247557
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2001
    source: hf-ai-mo-aops
    label: 2001 Romania National Olympiad
---
Let $m,k$ be positive integers, $k<m$ and $M$ a set with $m$ elements. Prove that the maximal number of subsets $A_1,A_2,\ldots ,A_p$ of $M$ for which $A_i\cap A_j$ has at most $k$ elements, for every $1\le i<j\le p$ , equals
$$ p_{max}=\binom{m}{0}+\binom{m}{1}+\binom{m}{2}+\ldots+\binom{m}{k+1}$$
