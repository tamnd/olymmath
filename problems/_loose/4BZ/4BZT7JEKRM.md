---
tag: 4BZT7JEKRM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 Romania TST for IMO
    url: https://artofproblemsolving.com/community/c6h56884
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54401
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247901
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1994
    source: hf-ai-mo-aops
    label: 1994 Romania TST for IMO
---
Find the smallest nomial of this sequence that $a_1=1993^{1994^{1995}}$ and
$$ a_{n+1}=\begin{cases}\frac{a_n}{2}&\text{if $n$ is even}a_n+7 &\text{if $n$ is odd.} \end{cases} $$
