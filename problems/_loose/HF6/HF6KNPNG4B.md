---
tag: HF6KNPNG4B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Singapore Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2042141
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59205
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160469
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2009
    source: hf-ai-mo-aops
    label: 2009 Singapore Junior Math Olympiad
---
Suppose $\overline{a_1a_2...a_{2009}}$ is a $2009$ -digit integer such that for each $i = 1,2,...,2007$ , the $2$ -digit integer $\overline{a_ia_{i+1}}$ contains $3$ distinct prime factors. Find $a_{2008}$
(Note: $\overline{xyz...}$ denotes an integer whose digits are $x, y,z,...$ .)
