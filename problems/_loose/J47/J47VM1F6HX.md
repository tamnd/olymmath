---
tag: J47VM1F6HX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h426127
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73929
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263416
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2006
    source: hf-ai-mo-aops
    label: 2006 Stanford Mathematics Tournament
---
Let $c_i$ denote the $i$ th composite integer so that $\{c_i\}=4,6,8,9,...$ Compute
$$\prod_{i=1}^{\infty} \dfrac{c^{2}_{i}}{c_{i}^{2}-1}$$
(Hint: $ \sum^\infty_{n=1} \tfrac{1}{n^2}=\tfrac{\pi^2}{6}$ )
